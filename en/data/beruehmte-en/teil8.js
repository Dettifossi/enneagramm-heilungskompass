import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft, animalResearcherMatchBlock } from "../../bundle.js";

export function alanMcelligottPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-alan-mcelligott-portrait.jpg" alt="Dr. Alan McElligott – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Alan McElligott</p>
        <p class="krim-portrait-typ">SO9w1 &middot; Social Type 9 with One-wing</p>
        <p class="krim-portrait-subtitle">Behavioral researcher at the City University of Hong Kong &ndash; Animal correspondence: Buffalo</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Buffalo Who Researched the Buffalo's Herd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>buffalo</strong> is the animal of the Social Nine &ndash; in this compass embodied by the African buffalo, not a bison from the plains of North America: a herd animal that finds its value not through going it alone, but through reliable belonging to the group. Dr. Alan McElligott, a behavioral researcher at the City University of Hong Kong, studies that animal's close Asian relative, the water buffalo &ndash; genetically and behaviorally far closer to the African buffalo than the American bison is to either. A central part of his research is devoted to exactly this herd animal &ndash; and made him an internationally recognized voice in understanding its social behavior.</p>
          <p class="vb-intro">Together with his research team, he studied feral, free-ranging water buffalo populations and demonstrated what had long been considered unlikely: these animals maintain complex social friendships, individual personality profiles, and preferred bonds within the herd &ndash; by no means the merely 'dull' or purely functional creatures they are often mistakenly assumed to be. The buffalo who proves that the buffalo is more than its cliché.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Nine: Identity Through Belonging to the Herd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Social Nine (SO9)</strong> finds its identity not as an individual, but by merging with a group, a team, a shared cause. McElligott's entire research career bears this signature: Irish by birth, and educated in zoology in Cork and Dublin, he built, instead of a career of going it alone, repeatedly new, collaborative research teams across stops in Zurich, Nottingham, London, and finally Hong Kong &ndash; his own note to prospective PhD and postdoc candidates that they are always welcome to get in touch shows a welcoming, cooperation-oriented stance rather than academic territorialism.</p>
          <p class="vb-intro">His view of the water buffalo themselves is likewise a social one: he is not concerned with the single, isolated animal, but with the web of relationships across the whole herd &ndash; who spends time with whom, which personalities are drawn to each other, how cohesion arises and is maintained. A researcher who studies the social structure of a group because that, above all, has always fascinated him most.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-Wing: Adherence to Principle Instead of Loud Self-Promotion</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>One-wing (w1)</strong> gives the Social Nine a clear, methodical adherence to principle &ndash; visible in McElligott's sober, matter-of-fact communication style: short, concrete application requirements instead of bureaucratic hurdles, a direct 'Get in touch!' instead of long preambles. In his research on public perception of Hong Kong's water buffalo, too, he remains strikingly balanced: he names both residents' concerns and the animals' cultural value, without dramatizing either side.</p>
          <p class="vb-intro">That clearly distinguishes the One-wing from the more confrontational Eight-wing: instead of pushing a position with force, McElligott seeks the balanced, methodically grounded standpoint &ndash; backed by data, not by persuasive force alone. 'Familiarity with wildlife in rural areas often leads to more positive perceptions,' he says of his research on the Hong Kong buffalo &ndash; a typically sober, undramatic One observation, not a loud plea.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of SO9w1 is the ability to <strong>make the inconspicuous social life of an underestimated species visible</strong> &ndash; McElligott's work fundamentally changed how science and the public think about water buffalo: not as dull livestock, but as social beings with their own bonds and personalities.</p>
          <p class="vb-intro">The shadow of the Social Nine with a One-wing shows where one's own position steps back behind the group, the team, or the balanced data &ndash; a restraint that safeguards objectivity, but can also mean that one's own voice stays quieter in a controversial debate than it could be.</p>
        </blockquote>

        <h2 class="vb-section">5. The Buffalo Who Gave the Herd Back Its Depth</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What Alan McElligott gives the world is scientific proof that an animal long considered indifferent and dull in fact possesses a rich social inner life &ndash; friendships, personality, belonging. That is exactly the substance the Social Nine seeks in every context.</p>
          <p class="vb-intro">In the end, one image remains that reads almost like living proof for this compass: a man whose archetypal animal is the buffalo, who devoted his research career to exactly that animal &ndash; and in doing so discovered that the herd he studied follows the same principle of belonging and quiet connection that also carries his own nature.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${bookTip("enneagramm-zoo", "27 Animal Portraits – each Subtype animal with character, biology and Enneagram connection.", "Enneagramm-Zoo")}
      ${bookTip("archetypen-der-tiere-im-enneagramm", "The archetypal animals of the 9 types as an inner map – images that work instantly.", "Archetypen der Tiere im Enneagramm")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/so9", label:"SO9 – The Buffalo: Subtype Profile"},
        {route:"lebensmusterkompass/so9", label:"Life Pattern Compass: SO9 – Buffalo"},
        {route:"beruehmte-julian-assange", label:"Portrait: Julian Assange (SO9w1)"},
        {route:"beruehmte-sandra-hueller", label:"Portrait: Sandra Hüller (SO9w1)"},
        {route:"tierforscher-uebereinstimmung", label:"Animal-Researcher Correspondence: more examples"},
      ])}
      ${animalResearcherMatchBlock("beruehmte-alan-mcelligott")}
    </div>
  `);
}

export function anneMcBridePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-anne-mcbride-portrait.jpg" alt="Dr. Anne McBride – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Anne McBride</p>
        <p class="krim-portrait-typ">SE6w5 &middot; Self-Preservation Type 6 with Five-wing</p>
        <p class="krim-portrait-subtitle">Behavioural scientist &ndash; Animal correspondence: Rabbit</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The rabbit who spent a lifetime researching the rabbit's fear</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>rabbit</strong> is the animal of the Self-Preservation Six &ndash; vigilant, safety-conscious, always ready to spot a threat early, before it becomes a danger. Few academic bodies of work show this principle as directly as that of Dr. Anne McBride: she devoted her entire doctorate at University College London to the social and parental behaviour of the European wild rabbit &ndash; making her own archetypal animal, of all things, the subject of years of scholarly devotion.</p>
          <p class="vb-intro">She has practiced as a behavioural therapist since 1987, led the University of Southampton's Animal Behaviour Clinic from 1999 to 2009, and has chaired the International Society for Anthrozoology since 1991. Over a hundred scientific publications carry her name &ndash; a life's work built on methodical thoroughness rather than spectacular single discoveries.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Six: security through anchored expertise</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Self-Preservation Six (SE6)</strong> seeks security not through a single, risky grand gesture, but through a dense web of reliable, multiply-secured structures &ndash; knowledge, institutions, affiliations that together form a sturdy foundation. McBride's career reads like a textbook example of this pattern: simultaneous honorary professorships in Nottingham and Bristol, decades chairing an international academic society, memberships in multiple professional bodies &ndash; security anchored in many places rather than risked in one.</p>
          <p class="vb-intro">Her entire research program circles around this very theme in content, too: she investigates how fear and safety needs arise in animals &ndash; rabbits, guinea pigs, the dogs of homeless people &ndash; and translates these findings into clear, applicable behavioural guidelines for owners. The Self-Preservation Six has, quite literally, made its own core theme its profession.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five-wing: matter-of-factness instead of a stage</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five-wing (w5)</strong> gives the Six an analytical reserve &ndash; security here arises not through warmth and building rapport with an audience, but through sober, well-grounded factuality. In recorded lectures, McBride accordingly comes across as reserved and highly focused on the facts: instead of anecdotes or humor, she spends minutes precisely detailing the various subspecies of the rabbit sitting beside her.</p>
          <p class="vb-intro">This clearly distinguishes her from the warmer, connection-seeking Seven-wing of the same Six: her path to security runs not through likability and audience belonging, but through the unassailable reliability of verified expertise itself &ndash; a withdrawn, observant stance in service of the subject, not of her own stage presence.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SE6w5 is its ability to <strong>systematically research its own fear and distill it into reliable, practically applicable knowledge</strong> &ndash; McBride's work has substantially shaped the understanding of animal welfare and species-appropriate care of small companion animals, and continues to protect countless animals from avoidable suffering caused by misunderstood housing conditions.</p>
          <p class="vb-intro">The shadow of the Self-Preservation Six with a Five-wing shows in a certain emotional distance outward: where other science communicators deliberately cultivate closeness and entertainment, McBride stays entirely with the factual &ndash; security through precision, not through connection. This may come across as less engaging on stage, but it is precisely the consequence of the same thoroughness that makes her research so reliable.</p>
        </blockquote>

        <h2 class="vb-section">5. The rabbit that gave the rabbit's fear a voice</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What McBride gives the world is not a single spectacular work, but a broadly secured foundation of knowledge about animal behaviour and welfare, built over decades &ndash; exactly the kind of security a Self-Preservation Six understands from the ground up, because it needs it itself.</p>
          <p class="vb-intro">In the end, one image remains that could hardly fit this compass better: a woman whose archetypal animal is the rabbit, who devoted her entire academic career to that one watchful, safety-conscious animal &ndash; and, apparently unconsciously, researched her own deepest theme along the way.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${bookTip("enneagramm-zoo", "27 Animal Portraits – each Subtype animal with character, biology and Enneagram connection.", "Enneagramm-Zoo")}
      ${bookTip("archetypen-der-tiere-im-enneagramm", "The archetypal animals of the 9 types as an inner map – images that work instantly.", "Archetypen der Tiere im Enneagramm")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/se6", label:"SE6 – The Rabbit: Subtype Profile"},
        {route:"lebensmusterkompass/se6", label:"Life Pattern Compass: SE6 – Rabbit"},
        {route:"beruehmte-mahatma-gandhi", label:"Portrait: Mahatma Gandhi (SE6w5)"},
        {route:"beruehmte-fjodor-dostojewski", label:"Portrait: Fyodor Dostoevsky (SE6w5)"},
        {route:"beruehmte-stan-laurel", label:"Portrait: Stan Laurel (SE6w5)"},
      ])}
      ${animalResearcherMatchBlock("beruehmte-anne-mcbride")}
    </div>
  `);
}

export function biruteGaldikasPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-birute-galdikas-portrait.jpg" alt="Dr. Biruté Galdikas – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Biruté Galdikas</p>
        <p class="krim-portrait-typ">SE8w9 &middot; Self-Preservation Type 8 with Nine-wing</p>
        <p class="krim-portrait-subtitle">Primatologist, 1946&ndash;2026 &ndash; the world's leading orangutan researcher &ndash; Animal correspondence: Orangutan</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Orangutan</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Orangutan</strong> is the animal of the self-preservation Eight &ndash; not a pack animal like the lion, but a solitary creature that claims its own territory deep in the rainforest and defends it with quiet, tenacious strength. Dr. Biruté Galdikas was, worldwide, the leading authority on orangutans and led the longest continuous field study of a wild mammal ever conducted by a single principal investigator &ndash; more than fifty years, from 1971 until her death in 2026.</p>
          <p class="vb-intro">Here too, the pattern that runs through several of this compass's animal-researcher portraits holds: the animal correspondences were fixed long before anyone knew of Galdikas's life's work. She herself put it once: "I've always felt I was born to study orangutans." That is the self-preservation Eight in its purest form &ndash; an unshakeable, almost instinctive knowledge of one's own territory, long before the mind can explain it.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Eight: A Territory for Life</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">According to Naranjo, the <strong>self-preservation Eight (SE8)</strong> seeks security through complete control over its own territory and its own survival base &ndash; quiet, tenacious, without public staging. Galdikas, born in 1946 in Wiesbaden to Lithuanian refugees and raised in Canada, decided by second grade that she wanted to be an explorer. In 1971, at age 25, she traveled with her then-husband to the Tanjung Puting Reserve in Borneo and founded Camp Leakey there &ndash; named after her mentor Louis Leakey, who supported her as the third of what later became known as the "Trimates," alongside Jane Goodall and Dian Fossey.</p>
          <p class="vb-intro">What followed was not an expedition but a lifelong settlement: she stayed in Borneo for more than forty years, walking up to twelve miles a day through swampy terrain, surrounded by malarial mosquitoes, king cobras, and leeches, to observe the elusive orangutans. In her second marriage she wed Pak Bohap, a Dayak rice farmer and tribal leader &ndash; not a brief field study, but a complete, lifelong rooting in exactly the territory she had chosen.</p>
        </blockquote>

        <h2 class="vb-section">3. The Nine-Wing: Merging Instead of Conquest</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">An SE8 with a more pronounced Seven-wing would likely have turned her authority into a portfolio of parallel ventures &ndash; farms, tourism, several enterprises at once. In Galdikas the opposite shows: a quiet, patient merging with a single place and a single task, sustained across five decades without distraction. She did found the Orangutan Foundation International in 1986, but at its core this remained one focused mission &ndash; not expansion into new fronts, but deepening the same single cause.</p>
          <p class="vb-intro">This is the Nine-wing at its most mature: the Eight supplies the tenacious, unshakeable assertiveness to defend one's own territory against threats &ndash; the Nine supplies the capacity to merge completely into that one territory rather than merely ruling it. Unlike Grahame Webb, whose Seven-wing drove him from project to project, Galdikas stayed her entire life in one place, with one species, in a marriage to a local man &ndash; roots instead of growth.</p>
        </blockquote>

        <h2 class="vb-section">4. Defending the Territory: Poachers, Loggers, Authorities</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The quiet merging of the SE8w9 does not mean an aversion to conflict when the territory itself is genuinely threatened. Galdikas became an uncompromising opponent of loggers, palm oil plantations, and gold miners who destroyed orangutan habitat. In the late 1990s she entered open conflict with Indonesia's Ministry of Forestry, which accused her of keeping orangutans in poor conditions &ndash; allegations she rejected as "simply wrong" and a "totally one-sided" campaign.</p>
          <p class="vb-intro">She also built an extensive rehabilitation program for orphaned orangutans that had previously been kept illegally as pets. This is exactly where the Eight shows itself: an attack on one's own territory is not diplomatically negotiated but met directly and without concession &ndash; even against state authorities.</p>
        </blockquote>

        <h2 class="vb-section">5. Recognition and Legacy</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Galdikas documented by far the slowest reproductive cycle of any land mammal &ndash; female orangutans give birth on average only once every eight years &ndash; and recorded more than 400 different food sources the animals consume. She was honored with the Order of Canada (1995), the Tyler Prize for Environmental Achievement (1997, shared with Jane Goodall and George Schaller), and numerous other international awards. She appeared on the cover of National Geographic magazine twice.</p>
          <p class="vb-intro">She died on March 24, 2026, in Los Angeles of lung cancer, at age 79 &ndash; after more than five decades devoted almost entirely to a single task.</p>
        </blockquote>

        <h2 class="vb-section">6. The Orangutan That Defended Its Territory to the End</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Biruté Galdikas's life's work shows the self-preservation Eight with a Nine-wing at its deepest: no loud conquest, but an almost complete merging with a place, a species, and a culture, sustained over five decades &ndash; combined with an uncompromising readiness to defend that territory the moment it was genuinely threatened.</p>
          <p class="vb-intro">The orangutan lives alone in its treetop territory, calm and self-contained &ndash; until someone tries to take it from it. That was exactly Galdikas's life: a quiet, deep rootedness that turned into open resistance the instant the forest that had become her home was endangered.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
          ${bookTip("enneagramm-zoo", "27 Animal Portraits – each Subtype animal with character, biology and Enneagram connection.", "Enneagramm-Zoo")}
          ${bookTip("archetypen-der-tiere-im-enneagramm", "The archetypal animals of the 9 types as an inner map – images that work instantly.", "Archetypen der Tiere im Enneagramm")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se8", label:"SE8 – The Orangutan: Subtype Profile"},
        ])}
        ${animalResearcherMatchBlock("beruehmte-birute-galdikas")}
      </div>
    </div>
  `);
}

export function carmenGoglinPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-carmen-goglin-portrait.jpg" alt="Carmen Goglin – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Carmen Goglin</p>
        <p class="krim-portrait-typ">SP9w8 &middot; Self-Preservation Type 9 with aft wing</p>
        <p class="krim-portrait-subtitle">Laughter-yoga trainer, coach, author – founder of the Reutlingen Laughter School – Animal equivalent: Elephant</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Elephant</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The elephant is the animal of the self-preservation Nine – large, calm, unshakeable in its presence. Carmen Goglin brings exactly this quality to the stage, with one ingredient you would not expect from an elephant: noise. Her laughter is unfiltered, loud, contagious – and that is precisely where the connection lies. An elephant that has decided calm can also be thunderous.</p>
          <p class="vb-intro">Goglin worked in human resources for more than twenty years before discovering laughter yoga in 2012 and training directly under its founder, Dr. Madan Kataria. She founded the Reutlingen Laughter School – a step that looks unspectacular but is typically self-preservation: not a loud new beginning, but the patient building of her own stable base.</p>
        </blockquote>

        <h2 class="vb-section">2. The self-preservation Nine: Comfort as a mission</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">According to Naranjo, the self-preservation Nine (SE9) is the subtype he called Appetite – the focus on physical comfort, coziness, and small rituals of pleasure as a way to calm oneself and stay centered. In Goglin's case, this "appetite" became a profession: she gives others exactly what the SE9 seeks for itself – bodily relaxation, lightness, the feeling that nothing is urgent right now.</p>
          <p class="vb-intro">Laughter yoga itself is, at its core, an SE9 method: no analyzing, no talking about problems, just a physical practice that dissolves tension directly. You do not need to understand why you are laughing – the body simply does it, and the mind follows. That is the Nine in its purest expression: reaching calm not through thinking, but through doing.</p>
        </blockquote>

        <h2 class="vb-section">3. The Eight wing: Why a trainer became a brand</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">A Nine with a more muted Eight wing would probably have kept her laughter school small and local. Goglin's strongly developed Eight wing brings something else: assertiveness, a certain fearlessness, the willingness to put herself out there even when it gets uncomfortable. In late 2020/early 2021, German rapper Finch ("Finch Asozial") picked up videos of Goglin's unfiltered laughter and parodied them – and instead of retreating, Goglin used the sudden attention. Appearances on SAT.1's Frühstücksfernsehen, SWR1 Leute, and World Wide Wohnzimmer followed, along with an advertising campaign for Aldi.</p>
          <p class="vb-intro">This is the SE9w8 movement in miniature: The Nine might have sat out the viral moment until it passed on its own. The Eight wing instead said: this is the opportunity, and you take it. Goglin remained recognizably herself throughout – no reinvention, no image change – simply more stage for what she was already doing.</p>
        </blockquote>

        <h2 class="vb-section">4. From human resources to laughter trainer: A shift without a break</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">More than twenty years in human resources, then a new beginning with laughter yoga – at first glance a radical cut. Looking closer, it is more of a shift in focus, typical of the self-preservation Nine: in HR work, it was about people, about balancing tensions within an organization, about restoring functionality. In laughter yoga, it is the same underlying theme – just more direct and physical.</p>
          <p class="vb-intro">The Nine rarely changes fields abruptly. She lets something mature for a long time until the next step follows almost by itself. Goglin's path from the office to the laughter school reads exactly like that: not a turnaround, but a consistent continuation of the same concern with different means.</p>
        </blockquote>

        <h2 class="vb-section">5. "Oma geht viral": Turning her own story into material</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 2024, Goglin published her book "Oma geht viral" ("Grandma Goes Viral") – a title that processes her own experience with self-irony instead of hiding it. That a woman outside the usual influencer target audience suddenly went viral and then told the story herself fits the SE9w8 pattern: you accept a situation you did not seek – and, without much drama, make something useful out of it.</p>
          <p class="vb-intro">Today Goglin works as a keynote speaker and business coach, offering laughter trainings for companies. The combination of HR experience and laughter-yoga expertise gives her a credibility a pure entertainer would lack: she knows both sides – the sober world of business and the physical solution to its tension.</p>
        </blockquote>

        <h2 class="vb-section">6. The Elephant that gets loud</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Carmen Goglin shows a side of the self-preservation Nine often missing from the public image of this subtype: that calm does not have to be quiet. The elephant with an Eight wing can trumpet – and when it does, the whole room hears it. This paradox, calm in nature yet loud in expression, is the core of her public persona.</p>
          <p class="vb-intro">What remains is a career built from comfort, persistence, and a single viral moment – without Goglin ever stopping being herself. That is the quiet confirmation of the Eight wing: you do not need to reinvent yourself to be seen. You just need to laugh loud enough.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-angela-merkel", label:"Portrait: Angela Merkel (SE9w8)"},
        {route:"beruehmte-hans-dietrich-genscher", label:"Portrait: Hans-Dietrich Genscher (SE9w8)"},
        ])}
      </div>
    </div>
  `);
}

export function cynthiaLummisPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-cynthia-lummis-portrait.jpg" alt="Cynthia Lummis – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Cynthia Lummis</p>
        <p class="krim-portrait-typ">SO8w7 &middot; Social Type 8 with Seven-wing</p>
        <p class="krim-portrait-subtitle">US Senator, born 1954 in Cheyenne, Wyoming &ndash; Animal correspondence: Lion</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Lioness</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Lion</strong> is the animal of Social Type 8 &ndash; a creature that uses its strength not for itself, but for the pride it belongs to. It defends territory and kin alike, steps forward when danger threatens, and does not retreat as long as its pride is under threat. Its strength is no display &ndash; it is function.</p>
          <p class="vb-intro">The American senator Cynthia Lummis, born in 1954 in Cheyenne, Wyoming, is exactly this lioness: a fifth-generation ranching heir who fought her way up through Wyoming politics over decades &ndash; as a state representative, as State Treasurer, as a member of Congress, and finally, in 2020, as the first woman ever to represent Wyoming in the US Senate. She fights for her pride: the ranchers, the miners, the conservative voters of one of the most sparsely populated states in the country.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Eight: Solidarity with the Overlooked</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Social Eight (SO8)</strong> puts its strength in the service of a community. Naranjo called this subtype <em>Solidarity</em>: the SO8 identifies with those who are politically or economically overlooked, and stands in front of them without fear. It does not fight for abstract principles &ndash; it fights concretely for people it knows.</p>
          <p class="vb-intro">Lummis has represented, for decades, the interests of a state often overlooked in Washington: Wyoming has the smallest population of any US state. Her political commitment to land rights, mining, energy production, and fiscal restraint is always tied concretely to the lived reality of her constituents &ndash; not to distant ideological debates. The SO8 fights for those no one else represents.</p>
        </blockquote>

        <h2 class="vb-section">3. The Seven-Wing: Pioneering Spirit and Appetite for Risk</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Seven-wing</strong> gives the Social Eight a quality that complements an SO8 with a weaker Seven-wing: openness to the new, willingness to take risks, a readiness to stand against the current when convinced of something. The SO8w9 protects out of silence. The <strong>SO8w7</strong> protects with pioneering spirit, often long before the mainstream follows.</p>
          <p class="vb-intro">Lummis was one of the first politicians in Washington to publicly advocate for Bitcoin and cryptocurrencies &ndash; at a time when the topic was still met with ridicule in the Senate. In 2021, together with Kirsten Gillibrand, she introduced the “Responsible Financial Innovation Act,” one of the first serious attempts to create a regulatory framework for digital assets. The Seven-wing shows here as a willingness to explore new terrain before it seems safe &ndash; and then defend it with determination.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: From the Ranch to the Senate</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Lummis began her political career in 1978 in the Wyoming House of Representatives, later served as State Treasurer (1999&ndash;2007), and represented Wyoming in the US House of Representatives from 2009 to 2017. In 2020 she won the seat in the US Senate &ndash; the first woman ever to represent Wyoming in that chamber, in a state that was the very first to grant women the right to vote, in 1869.</p>
          <p class="vb-intro">She herself runs a ranch near Cheyenne, is a trained lawyer, and explicitly sees herself as the voice of the rural, conservative West in an increasingly urban political landscape. Her advocacy for Bitcoin was tied to her traditional stance on fiscal policy: as a hedge against what she views as irresponsible government debt.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO8w7 is her <strong>willingness to take unpopular positions early</strong> and remain steadfast in them, even when colleagues dismiss her. Lummis held her Bitcoin position long before cryptocurrencies became politically acceptable &ndash; and was later recognized as one of the most influential voices in that policy field.</p>
          <p class="vb-intro">The shadow shows in an uncompromising quality that sharply rejects political opponents, leaving little room for nuance. Her clear, often confrontational rhetoric on contested topics such as immigration policy or transgender rights has repeatedly sparked public controversy. The Social Eight with a Seven-wing fights with fire &ndash; and that fire rarely distinguishes between disagreement and attack.</p>
        </blockquote>

        <h2 class="vb-section">6. The Lioness Who Defends New Terrain</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Eight leads from lust to innocence &ndash; from the compulsive assertion of one's own position to a strength that can also listen without losing its power. Lummis has shown over decades that political persistence and the willingness to venture into unknown terrain are not mutually exclusive.</p>
          <p class="vb-intro">From the ranch in Cheyenne to Wyoming's first female senator, from a ridiculed fringe position to a recognized voice in US crypto policy: that is the SO8w7 at its most mature &ndash; the lioness who defends her pride by going ahead, into territory no one has entered yet, and then standing her ground until others follow.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so8", label:"SO8 – The Lion: Subtype Profile"},
        {route:"beruehmte-carsten-stahl", label:"Portrait: Carsten Stahl (SO8w7)"},
        {route:"beruehmte-michelle-obama", label:"Portrait: Michelle Obama (SO8w7)"},
        {route:"beruehmte-laurence-frank", label:"Portrait: Dr. Laurence Frank (SO8w7)"},
      ])}
    </div>
  `);
}

export function diogenesPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-diogenes-portrait.jpg" alt="Diogenes of Sinope – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Diogenes of Sinope</p>
        <p class="krim-portrait-typ">SX8w7 &middot; Sexual Type 8 with Seven-wing</p>
        <p class="krim-portrait-subtitle">Philosopher, founder of Cynicism, born c. 412 BC in Sinope, died 323 BC in Corinth &ndash; Animal correspondence: Crocodile</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Crocodile</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Crocodile</strong> is the animal of Sexual Type 8 &ndash; a creature that cares nothing for social order, shows almost no needs, and yet draws the full attention of any water it enters. It lives openly, unprotected, without a place to retreat to &ndash; and that is exactly what makes it impossible to ignore.</p>
          <p class="vb-intro">The Greek philosopher Diogenes of Sinope, born around 412 BC, lived in a discarded barrel (a pithos, a large storage jar) in the marketplace of Athens &ndash; without a house, without possessions, without shame. According to legend, he walked the streets by daylight carrying a lit lamp, and when asked what he was searching for, replied: “I am looking for an honest man.” No philosopher of antiquity lived more radically in public than he did. The crocodile does not hide &ndash; it lies visible on the shore, and anyone passing by has to reckon with it.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Eight: Shamelessness as Liberation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo called the core of the <strong>Sexual Eight (SX8)</strong> <em>Desvergüenza</em> &ndash; Shamelessness. This does not mean sexual licence in the narrow sense, but the conscious, public disregard for social taboos, norms, and pressures to conform. The SX8 refuses to apologise for her own nature &ndash; she puts it on display, unvarnished, uncompromising, often provocative.</p>
          <p class="vb-intro">Hardly any historical figure embodies this shamelessness more purely than Diogenes. He masturbated openly in the marketplace, arguing it was a pity that hunger could not be satisfied just as simply by rubbing one's stomach. He urinated on people who insulted him and mocked Plato in front of an assembled crowd. None of this was accident or a lack of self-control &ndash; it was method. For him, shame itself was the true social evil that needed to be exposed.</p>
        </blockquote>

        <h2 class="vb-section">3. The Seven-Wing: Wit as a Weapon</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Seven-wing (w7)</strong> gives the Sexual Eight a lightness that does not soften the seriousness of the Eight core, but sharpens it. Where an SX8 with a weaker Seven-wing works through raw confrontation, the SX8w7 works through wit, irony and mockery &ndash; weapons that land deeper because they force laughter before the sting is even noticed.</p>
          <p class="vb-intro">When Alexander the Great, the most powerful man of the age, visited Diogenes and offered to grant him any wish, the philosopher replied only: “Get out of my sunlight.” Asked whether he was not afraid of thieves stealing from his meagre home, he laughed &ndash; he owned nothing worth stealing. The Seven-wing turns every confrontation into a punchline, every humiliation of the other into a laugh that is still remembered millennia later.</p>
        </blockquote>

        <h2 class="vb-section">4. Cynicism: Philosophy as Lived Resistance</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Diogenes founded Cynicism (from Greek <em>kyon</em>, “dog” &ndash; he proudly called himself “the dog”), a philosophy that was not taught but lived. His goal was <em>autarkeia</em>, complete independence from social convention, possessions, and reputation. Wealth, fame, and social standing were, to him, chains people placed on themselves.</p>
          <p class="vb-intro">This radicalism clearly distinguishes him from the other subtypes of the Eight: the self-preservation Eight (SP8) secures territory and material possessions &ndash; Diogenes deliberately rejected both. The social Eight (SO8) fights as a protector for a group &ndash; Diogenes was a radical loner who sought no following, provoking instead purely through his own example. Only the Sexual Eight attacks society directly, personally, and shamelessly, without the detour of collective or possession.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX8w7 is a freedom that few other subtypes reach: complete independence from the opinions of others, paired with the courage to name every social hypocrisy by its name. Diogenes exposed the double standards of his time simply by living exactly as he thought &ndash; without reservation, without compromise.</p>
          <p class="vb-intro">The shadow shows in an uncompromising quality that spares no one: Diogenes deliberately hurt people, publicly shamed them, respected no social boundaries. Whoever came too close was not spared. The Sexual Eight with a Seven-wing can turn provocation into an end in itself so completely that connection to other people becomes impossible &ndash; the crocodile that attacks anyone who approaches ends up alone in its barrel.</p>
        </blockquote>

        <h2 class="vb-section">6. The Path of Healing: The Lamp in Broad Daylight</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Eight leads from lust to innocence &ndash; from the compulsive assertion of one's own strength to a power that no longer needs to prove it is invincible. For the SX8w7 this means no longer using shamelessness as a weapon against others, but living it as radical honesty toward oneself.</p>
          <p class="vb-intro">The image of Diogenes with his lamp in broad daylight, searching for an honest man, is exactly this healing impulse: the search for genuine, unvarnished truth &ndash; starting with oneself. According to legend, Diogenes died simply by holding his breath, at around 89 years old, entirely on his own terms, unbound to the very last moment. The crocodile that never needed a home, because it regarded the whole world as its habitat.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx8", label:"SX8 – The Crocodile: Subtype Profile"},
        {route:"beruehmte-donald-trump", label:"Portrait: Donald J. Trump (SX8w7)"},
      ])}
    </div>
  `);
}

export function enyaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-enya-portrait.jpg" alt="Enya" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Enya</p>
        <p class="krim-portrait-typ">SP4w3 &middot; Self-Preservation Type 4 with Three-wing</p>
        <p class="krim-portrait-subtitle">Singer & composer, b. 1961 &ndash; Animal correspondence: Dove</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Dove</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>dove</strong> is the animal of the Self-Preservation Four – it does not put its depth on loud display, but processes it in persistent, often years-long withdrawal. Enya was born in 1961 as Eithne Patricia Ní Bhraonáin in the Irish-speaking area of Gweedore, County Donegal, one of nine children in a musical family – her father led a dance band, and several siblings later formed the group Clannad. Eithne joined that family band too, but left it again in 1982 to work on her own.</p>
          <p class="vb-intro">That early decision to withdraw from a loud, shared band life became a lifelong pattern: for more than forty years, Enya has worked almost exclusively with just two people – producer Nicky Ryan and his wife, lyricist Roma Ryan. No rotating team, no large studio apparatus, but an extremely small, closed circle in which every album takes shape over years.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Four: Withdrawal as a Protected Space</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Self-Preservation Four (SP4)</strong> is the counter-type of the Four: it does not display its rich inner life publicly, but keeps it alive in a strictly guarded, private space. Enya ranks among the best-selling musicians in the world, yet in her entire career she has practically never toured – no conventional concert tours, no regular live performances, barely any interviews beyond the essentials. A public profile that is highly unusual for an artist of this scale.</p>
          <p class="vb-intro">In 1997 she bought Manderley Castle (now Ayesha Castle) in Killiney near Dublin, a Victorian castle building she made her permanent retreat. Four to seven years often pass between her albums – time spans typical of the Self-Preservation Four: better to stay silent for a long time than to carry something unfinished, or not fully lived through, out into the world.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-wing: The Self-Made Sound Figure</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the Self-Preservation Four a fine sense for how a private inner world can be translated into an effective, recognizable public form – without the person behind it having to expose herself. Even the stage name expresses this pattern: the Irish-speaking Eithne Ní Bhraonáin became "Enya," a purpose-built, internationally pronounceable brand – a deliberately shaped shell around a very withdrawn person.</p>
          <p class="vb-intro">The Three-wing shows even more clearly in the actual sound itself: Enya's signature sound comes from layering her own voice in countless tracks until it becomes a dense, choir-like sonic body – a technique she perfected over years together with Nicky Ryan. The result, on "Orinoco Flow" (1988), the song that made her world-famous in 1988/89, sounds like an entire ensemble and is yet the work of a single voice working alone – inner abundance shaped into a smooth, mass-appealing form, exactly as the SP4w3 pattern predicts (compare the portrait of <a href="#beruehmte-peter-gabriel">Peter Gabriel (SP4w3)</a>, who translated his own private imagery into a stage persona in a different but structurally related way).</p>
        </blockquote>

        <h2 class="vb-section">4. A World Sound From a Closed Circle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Albums such as "Watermark" (1988), "Shepherd Moons" (1991), or "A Day Without Rain" (2000) sold millions of copies worldwide without Enya ever touring in the conventional sense or submitting to the usual machinery of pop marketing. In place of public self-promotion came consistent, years-long attention to detail in the studio – each record a self-contained, fully thought-through sound world before it was released at all.</p>
          <p class="vb-intro">That she remained in the same small constellation throughout her career – herself, Nicky Ryan at the mixing desk, Roma Ryan on the lyrics – underscores the SP4 pattern in its purest form: not a large, shifting operation carries the work, but an extremely tight, decades-stable circle of trust.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP4w3 is the ability to <strong>create, out of radical withdrawal, a body of work that still reaches millions</strong> – Enya's music remains among the best-selling and most-listened-to sound worlds of all time, even though the person behind it barely appears in public. This combination of maximum impact and maximum restraint is rare and hard to replicate.</p>
          <p class="vb-intro">The shadow shows in the near-complete separation between the public sound figure and the private person: to this day, remarkably little is known about Enya's personal life, her relationships, her daily routine behind the walls of Ayesha Castle – a seclusion that protects, but can also mean that part of one's own life is never truly shared with others.</p>
        </blockquote>

        <h2 class="vb-section">6. The Dove Behind the Sonic Body</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Enya is among the most successful musicians in the world – not because she showed herself more loudly than others, but because, from an unusually small, protected circle, she created a sound that traveled the whole world while she herself stayed in the background.</p>
          <p class="vb-intro">The dove who left a family band to quietly layer her own voice over itself countless times, until it became an entire choir – that is the lasting image of this subtype: an abundance that never appears louder than it chooses to be.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se4", label:"SP4 – The Dove: Subtype Profile"},
        {route:"beruehmte-peter-gabriel", label:"Portrait: Peter Gabriel (SP4w3)"},
        {route:"beruehmte-adele", label:"Portrait: Adele (SP4w3)"},
        {route:"beruehmte-june-carter-cash", label:"Portrait: June Carter Cash (SP4w3)"},
      ])}
    </div>
  `);
}

export function friedrichNietzschePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-friedrich-nietzsche-portrait.jpg" alt="Friedrich Nietzsche" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Friedrich Nietzsche</p>
        <p class="krim-portrait-typ">SX5w4 &middot; Sexual Type 5 with Four-wing</p>
        <p class="krim-portrait-subtitle">Philosopher, 1844&ndash;1900 &ndash; Animal correspondence: Hedgehog</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Hedgehog Who Thought the World from a Distance</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>hedgehog</strong> is the animal of the sexual Five &ndash; nocturnal, quiet, with quills born of instinct rather than malice. It curls up when the world grows too loud, and waits until only what truly matters remains. Only someone truly trusted gets to see what lies beneath the quills.</p>
          <p class="vb-intro">Friedrich Nietzsche was born in 1844 in Röcken near Lützen, the son of a Lutheran pastor who died when Friedrich was five. He grew up in a household of women &ndash; mother, sister, grandmother, two aunts &ndash; and was already so serious and withdrawn as a child that classmates called him &bdquo;the little pastor.&ldquo; At 24, unusually young, he became a professor of classical philology in Basel &ndash; an outsider who preferred thinking alone to thinking in company from the very start.</p>
        </blockquote>

        <h2 class="vb-section">2. Trust: the One Connection That Never Was</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo called the sexual Five the <strong>countertype</strong> of the Five &ndash; sexual energy breaks through the Five&#39;s stinginess and seeks deep, intense connection. His key term for this subtype: <em>trust</em>. The SX5 does not seek distance, but the <em>one</em> connection that carries everything &ndash; and is devastated when that one connection breaks or never comes.</p>
          <p class="vb-intro">In 1882 Nietzsche met the young Russian philosophy student Lou Salomé in Rome. He was fascinated by her intellect like by no one before, and proposed marriage to her through an intermediary &ndash; she declined, but suggested a kind of platonic threesome with Nietzsche and his friend Paul Rée. A famous photograph shows the three of them: Lou Salomé holding a whip in a small cart, Nietzsche and Rée harnessed in front of it &ndash; a staging Nietzsche himself arranged. When Lou Salomé eventually turned to Rée and the connection broke for good in 1883, Nietzsche fell into a deep crisis; his sister Elisabeth also intrigued against the friendship. He later wrote that this period was the most painful of his life.</p>
          <p class="vb-intro">In the midst of exactly this crisis, within a few weeks in February 1883, he wrote the first part of <em>Thus Spoke Zarathustra</em> &ndash; as if the breaking of the one connection he had longed for transformed into another kind of closeness: to an invented figure who was allowed to say everything he himself could never speak aloud.</p>
        </blockquote>

        <h2 class="vb-section">3. The Four-wing: Pain as Style</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Four-wing (w4)</strong> adds something decisive to the sexual Five: the pain of loss as artistic and linguistic drive. An SX5 with a weaker Four-wing might simply close off. The Four-wing turns that closing-off into expression &ndash; transforms the unspoken into a language of unheard-of intensity.</p>
          <p class="vb-intro">Nietzsche&#39;s break with Richard Wagner, his former father-figure and idol, followed the same pattern as the separation from Lou Salomé: a deep, almost fusional admiration that shatters and turns into cutting, often personal writings &ndash; such as <em>The Case of Wagner</em> (1888). The Four-wing forgives no half-feelings; what was once closeness becomes, once broken, radical reckoning.</p>
          <p class="vb-intro">His writing style bears the same signature: aphorisms instead of systems, confession instead of textbook. <em>Ecce Homo</em> (1888), his late self-portrait with chapter titles like &bdquo;Why I Am So Wise&ldquo; and &bdquo;Why I Write Such Good Books,&ldquo; is radical self-revelation in book form &ndash; the Five, who normally hides, opens completely here, but only on paper, never in direct conversation.</p>
        </blockquote>

        <h2 class="vb-section">4. Sils-Maria: Ten Years of Solitude as a Body of Work</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">From 1879 Nietzsche gave up his professorship for health reasons and spent the following ten years as a homeless wanderer &ndash; moving between cheap boarding houses in Sils-Maria in the Engadin, Nice, Genoa, and Turin, often with only a single suitcase, chronically ill, nearly blind, mostly alone. It was precisely in these years of radical withdrawal that his major work emerged: <em>Thus Spoke Zarathustra</em>, <em>Beyond Good and Evil</em>, <em>On the Genealogy of Morality</em>, <em>Twilight of the Idols</em>.</p>
          <p class="vb-intro">This is the SX5w4 in its clearest expression: withdrawal is not a deficiency, but the precondition. Only in near-total solitude, without academic post, without a fixed bond, did the one channel open through which everything within him could flow.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow: Clarity and Collapse</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX5w4 is the capacity for <strong>radical self-revelation within one&#39;s own medium</strong> &ndash; Nietzsche revealed more of himself in his books than most people reveal to a single confidant. His language possesses an intensity that scarcely any philosopher has matched since, precisely because it came from a man who was almost entirely alone in daily life.</p>
          <p class="vb-intro">The shadow: exhaustion. The Five&#39;s stinginess in the SX5 applies not to money, but to <strong>energy</strong> &ndash; and Nietzsche had barely any reserve left. Chronic migraines, near-total blindness, and tormenting stomach ailments accompanied him through the most productive years of his life. On January 3, 1889, he collapsed on a street in Turin, reportedly after embracing a mistreated cart horse. He spent the last eleven years of his life in mental darkness, cared for first by his mother, then by his sister Elisabeth, who later falsified his writings for her own nationalist purposes &ndash; a late, bitter irony for a thinker whose work had explicitly opposed being warped by foreign ideologies.</p>
        </blockquote>

        <h2 class="vb-section">6. The Hedgehog Who Turned His Solitude Into Language</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Five leads from the fear of being consumed by the world to the insight that fullness does not arise from withdrawal alone, but from the one real connection one dares to risk. Nietzsche rarely dared it in life &ndash; with Lou Salomé, with Wagner, in a handful of friendships &ndash; and each time it broke. What remained was the work that took its place.</p>
          <p class="vb-intro">He died in 1900 in Weimar, never living to see how his thought would shape twentieth-century philosophy. The hedgehog from Röcken never fully showed himself to another person &ndash; but he showed himself page by page in his brilliant body of work, which turned his quills into thoughts that still sting today.</p>
          <p class="vb-intro">That this fragmentary body of work, barely ordered in his lifetime, exists today in a reliable, critically verified form at all is owed not least to the decades of editorial work by <a href="javascript:void(0)" data-route="beruehmte-volker-gerhardt">Prof. Dr. Volker Gerhardt</a> (SO1w9), who chaired the Nietzsche Commission of the Berlin-Brandenburg Academy of Sciences from 2001 to 2023 &ndash; a revealing contrast between the hedgehog, who wrote his work out of radical isolation, and the goose, who guarded it institutionally generations later. More in the <a href="javascript:void(0)" data-route="beruehmte-volker-gerhardt">portrait of Volker Gerhardt</a>.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      <p class="vb-intro">The decades of chronic migraines, failing eyesight, and the mental collapse of 1889 are explored in depth in the dedicated <a href="javascript:void(0)" data-route="krankheitsportraets-friedrich-nietzsche">Illness Portrait of Nietzsche</a>.</p>
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/sx5", label:"SX5 – The Hedgehog: Subtype Profile"},
        {route:"beruehmte-frederic-chopin", label:"Portrait: Frédéric Chopin (SX5w4)"},
        {route:"beruehmte-greta-garbo", label:"Portrait: Greta Garbo (SX5w4)"},
        {route:"beruehmte-immanuel-kant", label:"Portrait: Immanuel Kant (SO6w5) – whose duty-based ethics he sharply criticized"},
        {route:"beruehmte-volker-gerhardt", label:"Portrait: Prof. Dr. Volker Gerhardt (SO1w9) – chairman of the Nietzsche Commission 2001-2023"},
        {route:"krankheitsportraets-friedrich-nietzsche", label:"Illness Portrait: Friedrich Nietzsche (SX5w4)"},
        {route:"bibel-der-mann-von-gerasa", label:"Bible Portrait: The Man of Gerasa (SX5w4)"},
      ])}
    </div>
  `);
}

export function gretaThunbergPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-greta-thunberg-portrait.jpg" alt="Greta Thunberg" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Greta Thunberg</p>
        <p class="krim-portrait-typ">SP2w1 &middot; Self-Preservation Type 2 with One-wing</p>
        <p class="krim-portrait-subtitle">Climate Activist, born 2003 &ndash; Animal correspondence: Hippopotamus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Hippopotamus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Hippopotamus</strong> is the animal of the self-preservation Two &ndash; an animal that can block an entire riverbed without taking a single step. It does not need to attack to have an effect. It only needs to stand in one place and refuse to move &ndash; and the whole current around it has to find a new way.</p>
          <p class="vb-intro">The Swedish climate activist Greta Thunberg sat alone in front of the Swedish Riksdag in August 2018 &ndash; a fifteen-year-old girl with a hand-made sign. She did not ask for permission. She did not wait for the right moment. She acted, because the situation demanded action. That is the energy of the hippopotamus: not loud, until it must be loud &ndash; and then unstoppable.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Two: The Right to Exist</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation Two (SP2)</strong> is, in the Enneagram tradition, the subtype that most strongly directs the energy of the Two inward and toward its own survival. While the social Two fights for the group and the sexual Two operates through seduction and personal attraction, the SP2 asks first: <em>What do I need to survive? What does the world I live in need to survive?</em> Naranjo called this subtype <em>Me First</em> &ndash; not in the egotistical sense, but in the existential: the Two that does not deny its own needs, but names them directly.</p>
          <p class="vb-intro">In Greta Thunberg this shows in a rare, almost relentless directness. She does not say: <em>I am worried about the future of others.</em> She says: <em>You are stealing my future.</em> That is the SP2 view: climate change is not an abstract humanitarian question &ndash; it is a threat to her own basis of existence. This immediacy makes her message so different from that of many other activists. She does not talk about the world out there. She talks about the world in which she herself exists.</p>
          <p class="vb-intro">Her openness about her own neurodivergence &ndash; Asperger syndrome, OCD, selective mutism &ndash; carries this SP2 quality too: no hiding, no sugarcoating. <em>My brain works differently. That is who I am.</em> The SP2 names its reality &ndash; even when the world would rather look away.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-wing: Moral Clarity as Backbone</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>One-wing (w1)</strong> brings the self-preservation Two something essential: an inner code that carries independently of others&#39; reactions. A Two with a weaker One wing seeks confirmation, affection, recognition &ndash; a strongly developed One-wing makes it more independent of these. It says: <em>There is a right and a wrong. And I know which side I am on.</em></p>
          <p class="vb-intro">In Greta Thunberg this wing cannot be overlooked. She has said to heads of state and government, to their faces, what they are doing wrong. She opened the UN summit with <em>How dare you!</em> &ndash; an indictment that knew no diplomatic formulation, because the SP2w1 needs no diplomatic formulation when the principle is clear. The One-wing gives the Two permission to be uncomfortable.</p>
          <p class="vb-intro">This also shows in her political development: Thunberg has become clearer and more radical over the years &ndash; not because she has changed, but because the One-wing has come to bear more strongly with time. The Two wants to be loved. The One has no interest in being loved for something that is wrong.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Self-Preservation Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP2 is its authenticity. Greta Thunberg has never played a role. What she says is what she means. What she feels, she shows. In a world of political communication that is an extraordinary quality &ndash; and a reason why she has touched millions of people who have long since stopped feeling reached by professional activists.</p>
          <p class="vb-intro">The fate pattern of the Two is <strong>pride</strong> &ndash; the deep conviction of being needed, of being indispensable, of being there for others while denying one&#39;s own needs. In the SP2 this shows more subtly: it is the belief that one&#39;s own voice counts because one&#39;s own existence is at stake. This can be liberating &ndash; and it can exhaust. The SP2w1 carries the weight of its conviction with an intensity that leaves little room for rest.</p>
          <p class="vb-intro">Greta Thunberg has described in interviews how the climate crisis led her into severe depression &ndash; before she began to act. The acting was rescue. But rescue through acting has its price. The hippopotamus cannot always stay in the water.</p>
        </blockquote>

        <h2 class="vb-section">5. The Healing Path: From Fighting to Being</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Two leads from giving to receiving &ndash; from the question <em>What does the world need from me?</em> to the question <em>What do I need?</em> Not as a withdrawal, but as a complement. The growing Two learns: I am valuable even when I do nothing. My existence itself is enough.</p>
          <p class="vb-intro">For the SP2w1 this means: learning to understand one&#39;s own voice not only as a tool for the fight, but as an expression of one&#39;s own life. The hippopotamus does not always have to warn and defend. Sometimes it may simply drift in the water &ndash; calm, whole, in its element. Greta Thunberg is still very young. This path lies before her &ndash; and she has already laid the foundation: the knowledge of who she is.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se2", label:"SP2 – The Hippopotamus: Subtype Profile"},
        {route:"beruehmte-angelina-jolie", label:"Portrait: Angelina Jolie (SO1w2)"},
        {route:"beruehmte-soeren-kierkegaard", label:"Portrait: Søren Kierkegaard (SE2w1)"},
        {route:"beruehmte-margot-friedlaender", label:"Portrait: Margot Friedländer (SP2w1)"},
        {route:"krankheitsportraets-greta-thunberg", label:"Illness Portrait: Greta Thunberg (SE2w1) – depression and eating disorder in childhood"},
      ])}
    </div>
  `);
}

export function hippokratesVonKosPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hippokrates-von-kos-portrait.jpg" alt="Hippocrates of Kos" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hippocrates of Kos</p>
        <p class="krim-portrait-typ">SO4w5 &middot; Social Type 4 with Five-wing</p>
        <p class="krim-portrait-subtitle">Greek physician, c. 460&ndash;370 BC &ndash; "Father of Medicine" &ndash; Animal correspondence: Armadillo</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Armadillo That Turned Away From the Temples</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>armadillo</strong> is the animal of the social Four &ndash; it seeks community in order to measure itself against it, to spot its blind spots, and to draw its own significance from exactly that difference. Hippocrates of Kos was born around 460 BC on the island of Kos into a family of physicians who traced their lineage back to Asclepius, the god of healing &ndash; an origin that placed him, at first, squarely within the religiously shaped healing arts of his time.</p>
          <p class="vb-intro">Yet it was from exactly this tradition that he set himself apart: in a world where illness was seen as divine punishment or message, and healing was sought in the temples of Asclepius through dream interpretation and ritual sacrifice, Hippocrates positioned himself as the one who understood disease as a natural, explicable process. The armadillo remains part of the community of healers &ndash; but contradicts it at its very core.</p>
        </blockquote>

        <h2 class="vb-section">2. Social Four: Significance Through Differentiation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social Four (SO4)</strong> seeks its significance not in withdrawal, but in working within a community from which it simultaneously sets itself apart &ndash; through a perspective that is different, deeper, more uncomfortable. Hippocrates founded a medical school on Kos that trained physicians no longer as priests but as observers of nature. He taught a medicine grounded in cause and effect, not in divine wrath or favor.</p>
          <p class="vb-intro">This differentiation was no quiet retreat into private practice, but a public, teaching stance: Hippocrates and his students traveled through Greece, treating patients, teaching, and thereby visibly positioning themselves against the established temple medicine of their time. SO4 needs this counterpart &ndash; its own significance arises in contrast to the existing order, not in isolation from it.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five-Wing: Observation as Method</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five-wing (w5)</strong> gives the social Four an analytical, systematic sharpness &ndash; the sense of one's own distinctiveness is not merely asserted but methodically documented. The text "Epidemics," attributed to the Hippocratic Corpus, contains meticulous case histories of individual patients, in which symptoms, disease progression, and outcome were recorded over days and weeks &ndash; one of the earliest forms of systematic clinical documentation in world history.</p>
          <p class="vb-intro">The treatise "On Airs, Waters, and Places" shows the same systematic rigor: Hippocrates examined how climate, water quality, and geography influence patterns of disease and even the character of entire peoples &ndash; an early form of environmental medicine, born of careful, repeated observation rather than speculation. This combination of a deep need for significance and unsparingly precise observation is the signature of SO4w5.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: The Oath and the Four Humors</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Hippocratic Oath, traditionally attributed to him, formulated for the first time binding ethical principles for physicians &ndash; confidentiality, the avoidance of harm, responsibility toward the patient regardless of their social standing. Whether Hippocrates himself wrote every line is disputed among historians; that the oath bears his name shows how thoroughly his name became a symbol of medical responsibility.</p>
          <p class="vb-intro">Equally formative was the theory of the four humors (blood, phlegm, yellow bile, black bile), which explained illness as an imbalance of bodily substances &ndash; a rational, self-contained system that governed Western medicine for over a millennium and a half. For SO4w5, this was the ideal form: a theory that placed deep, individual suffering within a comprehensive, analytically constructed explanatory model.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of SO4w5 shows in the historical significance of this differentiation: Hippocrates transformed the healing arts from a field of religious interpretation into an observing, documenting, learning discipline &ndash; the foundation of all modern medicine. His demand that the patient be regarded as an individual with their own case history, rather than as a case of divine judgment, remains a core principle of medical practice to this day.</p>
          <p class="vb-intro">The shadow lies in the ossification of his own system: the theory of the four humors, once a step forward from religious arbitrariness, hardened over centuries into unquestioned dogma that hindered medical progress more than it advanced it, until it was disproven in the modern era &ndash; at least by the standards of today's conventional medicine. The analytical systematization of SO4w5, which once created clarity, can itself harden into a rigid order that no longer permits new observation.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: The Father of Medicine</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Hippocrates died around 370 BC in Larissa, far from his home island of Kos. His name remains linked to every course of medical study even now, his oath &ndash; in modernized form &ndash; spoken by graduates worldwide or cited as an ethical touchstone.</p>
          <p class="vb-intro">The armadillo that turned away from the religious community of temple healers to found its own, observing science left behind more than a method &ndash; it left behind the conviction that suffering wants to be understood, not merely interpreted. The social Four is considered one of the most empathetic subtypes of the Enneagram: it knows from its own experience what suffering means, and can therefore relate especially deeply to the sick &ndash; out of this inner perspective grew Hippocrates' understanding of the healing art, not only as an intellectual discipline, but as a deeply emotional, compassionate turning toward the suffering human being. That is exactly the lasting image of the social Four with the Five-wing: significance born of close observation, and a legacy that has carried across two and a half millennia.</p>
        </blockquote>

        <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-top:1.5rem;max-width:100%;">
          <p style="margin:0;font-size:1.05rem;font-style:italic;color:var(--ink);">"It is more important to know what sort of person has a disease than to know what sort of disease a person has."</p>
          <p style="margin:0.5rem 0 0;font-size:0.85rem;color:var(--muted);">&ndash; Hippocrates of Kos</p>
        </div>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/so4", label:"SO4 – The Armadillo: Subtype Profile"},
        {route:"beruehmte-heraklit", label:"Portrait: Heraclitus (SO4w5)"},
        {route:"beruehmte-marcel-proust", label:"Portrait: Marcel Proust (SO4w5)"},
        {route:"beruehmte-gustav-mahler", label:"Portrait: Gustav Mahler (SO4w5)"},
      ])}
    </div>
  `);
}

export function jamaicaKincaidPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jamaica-kincaid-portrait.jpg" alt="Jamaica Kincaid – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jamaica Kincaid</p>
        <p class="krim-portrait-typ">SO8w9 &middot; Social Type 8 with nine-wing piano</p>
        <p class="krim-portrait-subtitle">Writer & essayist, b. 1949 in Antigua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Lion</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The lion is the animal of the social Type 8, and no image fits Jamaica Kincaid more accurately. The lion does not fight indiscriminately. It waits, observes, chooses its moment. And when it strikes, it does so with a precision that wastes no energy. Its strength does not serve its own ego—it serves the pride, the community, those it protects.</p>
          <p class="vb-intro">Jamaica Kincaid, born in 1949 in St. John's, Antigua, emigrated to New York as an au pair at age 17, became a writer for The New Yorker, and over the following decades wrote her way into the canon of world literature. Her instrument is language—sharper than any lament, more precise than any indictment. She writes about colonialism, motherhood, origin, loss, and always in a way that leaves something shattered that seemed intact before.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Eight: Solidarity</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The social Eight (SO8) puts its strength in the service of those without power. Naranjo called this subtype Solidarity: the SO8 identifies with the oppressed—not out of pity, but out of deep indignation at injustice itself. It steps in front of them. Without detours, without excuses.</p>
          <p class="vb-intro">Kincaid's essay A Small Place (1988) is the document of this energy. She addresses the white tourist visiting Antigua directly, explaining sentence by sentence what they fail to see, refuse to see, and are not allowed to see in order to enjoy their vacation. It is not an accusatory text—it is an unmasking one. The SO8 does not carry the loudest voice; it carries the clearest.</p>
        </blockquote>

        <h2 class="vb-section">3. The Nine Wing: The Patience of the Lion</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Nine wing gives the social Eight a quality that deepens its impact: patience, spaciousness, and the ability to sustain a thought across pages and decades without losing it. The SO8w7 attacks immediately. The SO8w9 waits until the moment is fully ripe.</p>
          <p class="vb-intro">Kincaid's prose has this quality: it circles. It returns. It surrounds its subject from all sides before striking—and when the blow lands, the reader feels not caught off guard, but released. The Nine wing also enables her to hold multiple truths at once: the beauty of Antigua and its mutilation, love for her mother and rage at her, the longing for home and the impossibility of return.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: A Voice That Does Not Back Down</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Jamaica Kincaid began her writing career in the 1970s at The New Yorker under editor-in-chief William Shawn. Her novel Annie John (1985) depicts growing up in Antigua—the close, intense bond with her mother and its gradual collapse—with a precision that feels autobiographical because it is. Lucy (1990) continues this story: a Caribbean girl working as an au pair in New York, standing between two worlds without accepting either as her own.</p>
          <p class="vb-intro">The Autobiography of My Mother (1996) and My Brother (1997)—a memoir about her brother Devon, who died of AIDS—deepen these themes: the colonization of the body, language, and memory. Kincaid currently teaches at Harvard University. She changed her name, left her homeland, and forged her language into a weapon. That is the SO8w9: not fleeing, but transforming.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow: Relentlessness</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO8w9 is its moral clarity. Kincaid knows exactly what she stands for and what she stands against. In a literary world that favors diplomatic ambiguity, she is a voice that does not negotiate. Her texts endure what others find overwhelming: the painfulness of truth, the discomfort of memory, the impossibility of forgetting.</p>
          <p class="vb-intro">The shadow: the SO8 cannot step back. What begins as clarity can turn into uncompromising rigidity—toward characters, toward readers, toward her own story. Kincaid's relationship with Antigua is torn: she loves the land while condemning its government; she writes in English, the language of the colonizers, making that language her own. The Nine wing endures this burden. But it is not easy.</p>
        </blockquote>

        <h2 class="vb-section">6. The Lion Who Writes</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Jamaica Kincaid carries no weapon other than language, and that language is sharper than anything else. She transformed one of the most brutal colonial histories of the Caribbean into literature, without romanticizing the victims and without sparing the perpetrators. That is the SO8w9: not the lion that roars, but the one that bit long before you saw it coming. Strength that is not loud. Truth that remains.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-toni-morrison", label:"Portrait: Toni Morrison (SE8w9)"},
        {route:"beruehmte-bud-spencer", label:"Portrait: Bud Spencer (SO8w9)"},
        {route:"beruehmte-michelle-obama", label:"Portrait: Michelle Obama (SO8w7)"},
        ])}
      </div>
    </div>
  `);
}

export function jodieFosterPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jodie-foster-portrait.jpg" alt="Jodie Foster" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jodie Foster</p>
        <p class="krim-portrait-typ">SX5w6 &middot; Sexual Type 5 with Six-wing</p>
        <p class="krim-portrait-subtitle">Actress &amp; director, born 1962 in Los Angeles &ndash; Animal correspondence: Hedgehog</p>
      </div>
      <div class="page-content">
        <p class="vb-intro" style="text-align:center;font-style:italic;">
          The Criminal Psychology portrait of <a href="javascript:void(0)" data-route="kriminalpsychologie-john-hinckley-jr">John Hinckley Jr.</a>
          examines his delusional fixation on Foster – and the 1981 assassination attempt on President Reagan – through the Enneagram.
        </p>

        <h2 class="vb-section">1. The Hedgehog That Builds Walls for the Sake of Closeness</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>hedgehog</strong> is the animal of the sexual Type 5 &ndash; a creature that curls into a ball and shows its spines at danger, but that, once it feels safe, becomes a remarkably soft, attentive creature. The crucial difference from other Fives lies exactly here: the hedgehog does not curl up in order to stay alone. It curls up in order to decide who gets to see it.</p>
          <p class="vb-intro">Jodie Foster is this hedgehog in its rawest form. Few actresses of her stature have kept their private life under such consistent lock and key &ndash; and yet her entire life has been carried by deep, decades-long bonds. This is the core of the SX5: the withdrawal happens not out of indifference, but to reserve one&apos;s intimacy and energy for a very few, exclusive connections. Everything else stays outside &ndash; behind spines that no one touches voluntarily.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Five: Trust as a Protected Space</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sexual Five (SX5)</strong> is, according to Naranjo, the <strong>counter-type</strong> of the Five: the passion of avarice is least obvious here &ndash; because the sexual energy pulls the Five out of isolation and drives a search for the one deep connection to which it can surrender completely. Naranjo named this subtype <em>Trust</em>. The crucial difference from the self-preservation Five: the SP5 draws boundaries in order to be alone. The SX5 draws boundaries in order to create a protected space for true intimacy.</p>
          <p class="vb-intro">In Foster, this pattern shows in her relationships: she was with producer Cydney Bernard for 14 years, and later married photographer Alexandra Hedison &ndash; deep, decades-long bonds that she kept almost entirely out of the public eye. No tabloid story, no revelation, no interview about the inner life of these relationships. A deep, protective symbiosis in private, never put on display in public.</p>
          <p class="vb-intro">Her own definition of friendship makes the point: <em>My definition of a friend is someone who loves you, even though they know the things you&apos;re most ashamed of.</em> This is not a statement about sociability or small talk. It is the description of a single, highly selective access: handing over one&apos;s own protected core to a trusted person.</p>
        </blockquote>

        <h2 class="vb-section">3. The Six-wing: Analysis, Caution, Control</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Six-wing (w6)</strong> brings to the sexual Five a watchful, analytical, security-oriented component. The SX5w6 does not act impulsively &ndash; it tests, it prepares, it thinks risks through to the end before exposing itself. Foster herself summed up this inner tension in a remarkably precise sentence: <em>It&apos;s an interesting combination: a great fear of being alone, and at the same time a desperate need for solitude. That&apos;s always been a tug-of-war for me.</em> The need for solitude is the core of the Five. The fear of being alone is the Six-wing. And the SX instinct searches for the one solution in between: the one person with whom solitude can be shared, without one&apos;s own energy being drained.</p>
          <p class="vb-intro">This analytical control also shows in her work. Foster graduated with honors in literature from Yale, writing her thesis on Toni Morrison. She approaches her roles not primarily emotionally, but technically and deliberately: <em>I&apos;m a technician. I don&apos;t go the Method-acting route &ndash; I read the lines and play the scene.</em> That is the typical cool precision of the 5w6 &ndash; reason over gut feeling, preparation over instinct.</p>
        </blockquote>

        <h2 class="vb-section">4. The Trauma: When the Outside World Breaks Through the Wall</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 1981, shortly after her breakout in <em>Taxi Driver</em>, John Hinckley Jr. attempted to assassinate US President Ronald Reagan &ndash; obsessed with Foster, in an attempt to get her attention. For an SX5 who holds her intimacy and inner world sacred, this was the worst possible intrusion: the outside world had broken into her life in a boundary-violating, dangerous way &ndash; uninvited, uncontrollable, public.</p>
          <p class="vb-intro">The event visibly marked her: Foster became even more cautious, even more closed off toward the press, even more determined to separate her private life from her public role. The Six-wing responded with heightened need for security and sharp boundary-setting; the SX5 instinct drew the lesson that genuine emotional closeness would from then on only be allowed behind doubly locked doors. Her career continued nonetheless &ndash; with roles that mirrored exactly this tension: <em>The Accused</em> (1988), <em>The Silence of the Lambs</em> (1991, Oscar), <em>Nell</em> (1994), <em>Contact</em> (1997) &ndash; characters who are wounded, isolated, or threatened, and who assert themselves precisely through that.</p>
          <p class="vb-intro">In 1991 she also debuted as a director, with <em>Little Man Tate</em> &ndash; taking on even more control over how her stories are told. Control as an answer to a single, total loss of control: the logic of the SX5w6.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Sexual Five</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX5w6 is the ability to build real, lasting closeness despite deep caution &ndash; relationships that last decades because they were never exposed to the public and therefore never worn thin. With Bernard and later with Hedison, Foster proved that radical discretion and radical depth of bonding do not exclude each other, but can enable one another.</p>
          <p class="vb-intro">The karmic pattern of the Five is <strong>avarice</strong> &ndash; for the SX5, it shows not as stinginess with money, but as extreme frugality with emotional disclosure. Foster gives away almost nothing publicly beyond her work. What one gets from her, one gets through her roles &ndash; not through confessions.</p>
          <p class="vb-intro">The shadow of the Six-wing is the danger of mistaking caution for mistrust &ndash; allowing any opening only after endless testing, until protection turns into its own form of isolation. That Foster, in 2013, at the Cecil B. DeMille Award ceremony, publicly acknowledged her partnership &ndash; in her own restrained, controlled way, without drama, without a tell-all interview &ndash; shows that she never let this shadow fully rule her, but set her own terms for it instead.</p>
        </blockquote>

        <h2 class="vb-section">6. The Healing Path: The Protected Core That Shows Itself</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Five leads from <em>I do not have enough to show myself</em> to <em>I can show myself fully &ndash; to the one I trust.</em> For the SX5w6, this does not mean tearing down all walls. It means truly opening the one door that does get opened &ndash; without half-measures, without hedging, without the feeling of losing something of oneself in the process.</p>
          <p class="vb-intro">Jodie Foster has walked this path in her own way: she never surrendered herself to the public, but she has truly shown herself, over decades, to the few people who earned her trust. That is no contradiction &ndash; it is the rawest form of SX5w6: the hedgehog that shows itself to no one who has not earned it &ndash; and shows itself fully to the one who has.</p>
          <p class="vb-intro">More than sixty years after her first film appearance, Jodie Foster remains one of Hollywood&apos;s least publicly exposed and, at the same time, most deeply bonded personalities. That is the sexual Five with Six-wing: trust as a protected, but never empty, space.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx5", label:"SX5 – The Hedgehog: Subtype Profile"},
        {route:"beruehmte-edward-snowden", label:"Portrait: Edward Snowden (SX5w6)"},
        {route:"beruehmte-tilda-swinton", label:"Portrait: Tilda Swinton (SX5w4)"},
        {route:"beruehmte-anthony-hopkins", label:"Portrait: Anthony Hopkins (SP1w9) – co-star in 'The Silence of the Lambs'"},
      ])}
    </div>
  `);
}

export function juneCarterCashPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-june-carter-cash-portrait.jpg" alt="June Carter Cash" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">June Carter Cash</p>
        <p class="krim-portrait-typ">SP4w3 &middot; Self-Preservation Type 4 with Three-wing</p>
        <p class="krim-portrait-subtitle">American singer, songwriter, and actress, 1929&ndash;2003 &ndash; Animal correspondence: Dove</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Dove</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>dove</strong> is the animal of the Self-Preservation Four – it does not put its deep emotional life on display, but processes it in quiet, often decades-long persistence. June Carter was born in 1929 in rural Maces Spring, Virginia, the daughter of Maybelle Carter, a founding figure of the legendary Carter Family, one of the most influential groups in American country and folk music. As a child, June already performed on stage alongside her sisters Helen and Anita – born into a family whose entire identity depended on its public musical presence.</p>
          <p class="vb-intro">Out of this early imprint grew a lifelong pattern: from childhood on, her own person and her stage persona were barely distinguishable. Rather than resisting this externally imposed role, June turned it into something distinctly her own – a quick-witted, comedic performance style with her own sketches and monologues that set her apart early on from her equally talented sisters.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Four: The Carrier in the Background</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Self-Preservation Four (SP4)</strong> does not carry its own suffering outward but endures it – often by placing itself entirely in service of another person or a family. Biographers and fellow musicians repeatedly described June as the quiet "holder-upper" of the Cash-Carter family: the one who carried its cohesion while others stood in the spotlight. She repeatedly chose this role deliberately over her own independent career.</p>
          <p class="vb-intro">This showed most clearly in 1967/68, when Johnny Cash nearly succumbed to severe pill and alcohol addiction. Together with family and friends, June organized one of the first publicly known interventions of its kind in the music world, and accompanied him through years of recovery afterward – a quiet, tenacious burden carried over years that she never made the center of her own story.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-wing: The Stage as Second Nature</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the Self-Preservation Four a pronounced sense for impact and performance – inner depth is not turned inward but translated into a visible, often charmingly comedic public role. June was a sought-after entertainer throughout her life: singer, songwriter, actress, and author, winner of five Grammy Awards, most recently in 1999 for her solo album "Press On" – a late, entirely independent artistic statement, after decades spent largely in the shadow of Johnny Cash's world fame.</p>
          <p class="vb-intro">Her best-known songwriting contribution, "Ring of Fire" (co-written with Merle Kilgore), grew out of her own, then-forbidden love for Johnny Cash, while both were still married to other partners – a deeply personal feeling June did not conceal but turned into one of the greatest country hits of all time. In the Four, the Three-wing translates inner truth not into privacy, but into a work meant to be seen and heard.</p>
        </blockquote>

        <h2 class="vb-section">4. The Marriage Proposal on Stage</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">On February 22, 1968, during a joint concert in London, Ontario, Johnny Cash paused mid-song during "Jackson" and proposed to June live in front of the audience. She accepted – a public moment visible to the whole world that finally brought their years-long, previously discreet relationship into the spotlight. They married a few weeks later, and June became not only his wife but, for decades, also his most important stage partner, moral anchor, and, as many companions later confirmed, quite literally the person who saved his life.</p>
          <p class="vb-intro">This episode, too, shows the typical SP4w3 constellation: a deeply personal, emotional moment that did not stay hidden but was deliberately carried out in public – for June, closeness and stage, the private and the performed, were barely separable.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP4w3 lies in its ability to turn <strong>a deeply personal inner truth into a stage presence</strong> that carries and steadies others without losing its own depth. Through humor, music, and her mere presence, June Carter Cash gave an entire family, and one of the most famous artists of the twentieth century, steady ground for decades.</p>
          <p class="vb-intro">The shadow showed in how June's own artistic voice receded behind this supporting role for much of her life – her independent solo album came only late, in her sixties. June Carter Cash died on May 15, 2003, in Nashville from complications following heart surgery, only months before Johnny Cash himself died that September – inseparably bound to each other to the very end.</p>
        </blockquote>

        <h2 class="vb-section">6. The Dove That Carried the Family</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">June Carter Cash is among the most defining women in American country music – not because she pushed herself into the foreground louder than others, but because she translated her own depth so convincingly into stage presence, humor, and quiet persistence that she became the load-bearing figure of an entire musical dynasty.</p>
          <p class="vb-intro">The dove that was born as a child into a musical family and spent her whole life moving between her own stage presence and quiet care for others – that is the lasting image of this subtype: a person who does not hide her own truth, but lives it in performance and devotion at once.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se4", label:"SP4 – The Dove: Subtype Profile"},
        {route:"beruehmte-honore-de-balzac", label:"Portrait: Honoré de Balzac (SP4w3)"},
        {route:"beruehmte-lady-diana", label:"Portrait: Lady Diana (SP4w3)"},
        {route:"beruehmte-t-e-lawrence", label:"Portrait: T. E. Lawrence (SP4w3)"},
        {route:"beruehmte-johnny-cash", label:"Portrait: Johnny Cash (SP3w4)"},
      ])}
    </div>
  `);
}

export function konfuziusPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-konfuzius-portrait.jpg" alt="Confucius (Kong Fuzi)" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Confucius (Kong Fuzi)</p>
        <p class="krim-portrait-typ">SO1w2 &middot; Social Type 1 with Two-wing</p>
        <p class="krim-portrait-subtitle">Philosopher, 551&ndash;479 BCE &ndash; Founder of Confucianism &ndash; Animal correspondence: Goose</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Goose</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>goose</strong> is the animal of the social One &ndash; an animal that flies in formation, holds the line, and insists loudly and unyieldingly that everyone stays within the same order. No accidental animal for a man who devoted his entire life to the question of how a disintegrating society could be brought back into a workable shape through example, ritual, and self-cultivation. Kong Fuzi &ndash; Latinized in the West as Confucius &ndash; lived from 551 to 479 BCE, during a period of political fragmentation and moral decline known as China's Spring and Autumn period.</p>
          <p class="vb-intro">The Chinese philosopher Confucius, born into an impoverished noble family, worked his way up as a minor official before becoming a wandering teacher: for decades he traveled with a growing circle of students through China's warring principalities, offered his counsel to rulers, and was usually sent away disappointed. Only after his death did his teachings, recorded in the <em>Analects</em> (Lunyu), become the defining moral and political foundation of China for more than two millennia.</p>
        </blockquote>

        <h2 class="vb-section">2. "This Is the True Mistake" &ndash; Self-Correction as Principle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Hardly any sentence of Confucius captures his type as precisely as this one from the <em>Analects</em>: <em>"To make a mistake and not correct it &ndash; this is called a true mistake."</em> The mistake itself is not the real failing; the refusal to correct it is. A sentence that deeply carries the signature of the One: perfection is not a state one reaches and then possesses, but an ongoing practice of self-examination and improvement.</p>
          <p class="vb-intro">This is exactly where the mature One differs from her own inner critic: she does not demand flawlessness, but honesty about one's own mistakes and the will to learn from them. Confucius described himself as someone who, even at seventy, could "follow what my heart desired without overstepping the boundaries" &ndash; not because he never erred, but because he worked on himself his entire life. Precisely this stance &ndash; not fearing failure, but refusing to correct it &ndash; is at the core of what the social One demands of the world and of herself.</p>
        </blockquote>

        <h2 class="vb-section">3. The Social One: Example Instead of Coercion</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social One (SO1)</strong> does not live her standard of rightness as a private discipline, but as a benchmark for the community. Naranjo describes her as the One who becomes a living norm: she asks not only "How should I act?" but "What must a society look like for it to function well?" &ndash; and lives out the answer herself rather than merely demanding it.</p>
          <p class="vb-intro">This was precisely Confucius's life project: he did not want to pass new laws or tighten punishments, but to guide people &ndash; starting with rulers &ndash; through <em>li</em> (ritual, propriety) and <em>ren</em> (humaneness, benevolence) toward an inner compass that makes external control unnecessary. "Lead the people by regulations and keep order by punishments, and the people will try to avoid the punishment but have no sense of shame. Lead them by virtue and keep order by ritual, and they will have a sense of shame and moreover set themselves right," the Analects state &ndash; an almost exact definition of what the social One expects of order: not enforced, but internalized.</p>
        </blockquote>

        <h2 class="vb-section">4. The Two-Wing: The Teacher Who Serves</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Two-wing (w2)</strong> gave Confucius's strict moral demands a warm, relational side. He was no lonely moralist, but a teacher in the truest sense: according to tradition he taught regardless of a student's origin or wealth &ndash; a radical idea for his time &ndash; and bound himself for decades to a growing circle of students to whom he attended individually. His most famous pedagogical maxim states: "I do not enlighten those who are not eager to learn, nor arouse those who are not anxious to give an explanation themselves."</p>
          <p class="vb-intro">This combination of uncompromising standards and personal warmth is the typical coloring of the 1w2: principled conviction that does not stay cold, but places itself in the service of actual people. Confucius did not merely want to describe a better society &ndash; he wanted to shape it through the education of every individual he could reach.</p>
        </blockquote>

        <h2 class="vb-section">5. The Noble Person (Junzi): Character as Life's Work</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">At the center of Confucian teaching stands the concept of the <em>Junzi</em>, usually translated as "the noble person" or "the exemplary person" &ndash; an ideal determined not by birth or rank, but by constant self-cultivation. "The noble person seeks what is good within himself; the small person seeks it in others," the Analects state &ndash; a clear rejection of excuses and external blame that sums up the One's demand on herself in a single line.</p>
          <p class="vb-intro">Confucius distinguished five key relationships &ndash; ruler and subject, father and son, husband and wife, elder and younger brother, friend and friend &ndash; each grounding its own reciprocal duties. Not a rigid hierarchy of power, but a system in which order arises through the lived acceptance of responsibility on every side &ndash; the social One, who understands society not as a collection of individual interests, but as a web of mutual obligations.</p>
        </blockquote>

        <h2 class="vb-section">6. Failure in His Lifetime, Influence Across Millennia</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">During his lifetime, Confucius was, in political terms, above all one thing: unsuccessful. No ruler followed his advice for long, his most significant political post in the state of Lu ended after a few years, and he spent roughly a decade as a homeless wanderer between courts, often short of means, occasionally in danger. From the perspective of the One, this is no footnote but the actual test: she holds to her inner standard even when the world does not recognize it &ndash; not out of stubbornness, but because the rightness of the cause itself remains the standard, independent of immediate success.</p>
          <p class="vb-intro">Only after his death did his students compile his teaching dialogues into the <em>Analects</em>, and only centuries later did Confucianism become the state doctrine of China &ndash; with an influence reaching into the present, from East Asian educational ethics to examination systems that still carry traces of his idea that character and knowledge can be learned and taught. The goose that was barely heeded in her lifetime &ndash; and whose formation held for two millennia.</p>
        </blockquote>

        <h2 class="vb-section">7. Light and Shadow of the Social One</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO1w2 is her ability to truly serve out of a high moral standard &ndash; not to judge, but to teach; not to punish, but to change through example. Confucius's ideal that a person could become noble through constant work on himself, regardless of origin, was a deeply hopeful idea for his time.</p>
          <p class="vb-intro">The shadow of the One shows in the strictness with which standards are set &ndash; and in the risk that a living ideal can, over centuries, harden into a rigid system, as the later, often fossilized state Confucianism demonstrates. Confucius himself warned against letting rituals ossify into empty forms: "Ritual, ritual &ndash; does it mean no more than jade and silk?" A line that can also be read as a warning to every One: the standard must stay alive, or principled conviction becomes mere form.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/so1", label:"SO1 – The Goose: Subtype profile"},
        {route:"beruehmte-laozi", label:"Portrait: Laozi (Lao Tzu) (SE9w1)"},
        {route:"beruehmte-buddha", label:"Portrait: Siddhartha Gautama (Buddha) (SO5w4)"},
        {route:"bibel-ruben-schriftgelehrter", label:"Bible Portrait: Reuben the Scribe (SO1w2)"},
      ])}
    </div>
  `);
}

export function leoTolstoiPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-leo-tolstoi-portrait.jpg" alt="Leo Tolstoy – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Leo Tolstoy</p>
        <p class="krim-portrait-typ">SE4w5 &middot; Self-Preservation Type 4 with Five-wing</p>
        <p class="krim-portrait-subtitle">Russian writer, 1828&ndash;1910 &ndash; Animal correspondence: Dove</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Dove That Thought Through Its Own Suffering</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>dove</strong> is the animal of the self-preservation Four &ndash; it does not put its deep emotional life on display but processes it in quiet, often decades-long persistence. It seeks no applause for its pain, only its own, unmistakable way through it.</p>
          <p class="vb-intro">The Russian writer Lev Nikolayevich Tolstoy was born in 1828 on the family estate of Yasnaya Polyana, lost both parents early, and grew up with relatives. As a young man he already kept a meticulous diary &ndash; a lifelong ritual of unsparing self-observation in which he recorded his own moral weaknesses, his gambling addiction, his sexual transgressions, and his constant self-criticism in minute detail. This early habit of inner bookkeeping became the foundation of his entire literary work.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Four: Suffering as a Quiet Burden</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation Four (SE4)</strong> does not carry its suffering out into public view but endures it stoically &ndash; telling itself: I suffer better, more quietly, more deeply than others, and precisely there lies my dignity. Tolstoy's decades-long, agonizing search for the meaning of life, documented in works like "A Confession" (1882), shows this signature clearly: an existential crisis that nearly drove him to suicide was not put on display but lived through and worked out literarily in years of quiet inner struggle.</p>
          <p class="vb-intro">His relationship to his own wealth was also marked by this quiet inner conflict: Tolstoy, himself a count and large landowner, felt increasing shame about his prosperity, tried to live like a peasant, sewed his own boots, and worked in the fields &ndash; an inner conflict he never staged publicly but carried with himself until his death.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five-Wing: Life as a Systemic Question</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five-wing (w5)</strong> gives the Four an analytical distance from its own pain &ndash; the feeling is not just lived through but cast into a thought-out, often almost encyclopedic intellectual structure. Tolstoy's later works "War and Peace" (1869) and "Anna Karenina" (1877) are not just novels but vast, carefully constructed systems in which hundreds of characters, historical facts, and philosophical digressions are woven into a coherent whole &ndash; a devotion to detail only a Five-wing can muster.</p>
          <p class="vb-intro">This love of system also showed in Tolstoy's later religious-philosophical phase: he developed his own radical interpretation of Christianity, preaching nonviolence and simple living &ndash; set down in densely reasoned treatises like "The Kingdom of God Is Within You" (1894), which later profoundly influenced Mahatma Gandhi.</p>
        </blockquote>

        <h2 class="vb-section">4. The Break With His Own Life</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In his final three decades, Tolstoy increasingly turned away from his own literary fame and aristocratic lifestyle. He renounced royalties for his later works, founded his own ethical-religious movement (Tolstoyism), and fell into ever-deeper conflicts with his wife Sofia, who had to secure the material welfare of their 13 children.</p>
          <p class="vb-intro">This tension escalated in 1910: at the age of 82, Tolstoy secretly left his own estate at night &ndash; a final, radical attempt to bring his life into alignment with itself. Days later he died of pneumonia in a small railway station house in Astapovo, followed by journalists from around the world. Typical of the self-preservation Four: the inner conflict was carried through with himself alone, right to the last breath.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SE4w5 is the ability to turn <strong>deep personal suffering into thought-out, universal truth</strong> &ndash; Tolstoy's work still moves millions of readers today because he penetrated his own inner conflict so honestly, and so systematically, that timeless literature emerged from it.</p>
          <p class="vb-intro">The shadow showed itself in his uncompromising stance toward his own family: his radical rejection of property and his strict moral demands plunged his marriage into decades of crisis, and his sudden, secret departure in 1910 left his wife without a farewell. The flip side of the self-preservation Four: quiet, inner consistency can become so radical that it overrides the people in one's own immediate circle.</p>
        </blockquote>

        <h2 class="vb-section">6. The Dove That Sought Its Own Way to the End</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Leo Tolstoy is considered one of the greatest writers in world literature today &ndash; not only for his narrative mastery, but because he thought through the great questions of meaning, guilt, and redemption with an honesty few other authors have matched.</p>
          <p class="vb-intro">The dove that swung all its life between wealth and asceticism, between fame and self-denial, and only found peace in death, far from its own estate &ndash; that is the lasting image of the self-preservation Four with a Five-wing: a lifetime of quiet, thought-out struggle for one's own truth.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se4", label:"SE4 – The Dove: Subtype Profile"},
        {route:"beruehmte-paul-mccartney", label:"Portrait: Paul McCartney (SE4w5)"},
      ])}
    </div>
  `);
}

export function margotFriedlaenderPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-margot-friedlaender-portrait.jpg" alt="Margot Friedländer – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Margot Friedländer</p>
        <p class="krim-portrait-typ">SP2w1 &middot; Self-Preservation Type 2 with One-wing</p>
        <p class="krim-portrait-subtitle">Holocaust survivor &amp; witness, 1921&ndash;2025 &ndash; Animal correspondence: Hippopotamus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Hippopotamus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Hippopotamus</strong> is the animal of the self-preservation Two &ndash; an animal that can spend up to sixteen hours a day almost entirely submerged, barely visible, barely noticeable, and yet awake the whole time. It does not submerge to disappear. It submerges because that is where its safety lies &ndash; and it surfaces exactly in the moment it is needed.</p>
          <p class="vb-intro">The German Margot Friedländer survived the Holocaust, emigrated to the United States after the war, and lived a quiet, withdrawn life there for over fifty years. Only after her husband's death, well into her seventies, did she begin to speak &ndash; and past eighty she returned permanently to Berlin to appear, tirelessly, before school classes until shortly before her death at 103. The Hippopotamus rests long in the water. But when it moves, it moves with a determination nothing can stop.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Two: Care as a Principle of Survival</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation Two (SP2)</strong> directs the Two's energy first toward its own survival and that of those closest to it. Naranjo called this subtype <em>Me First</em> &ndash; not in an egotistical sense, but as a care that first operates within the innermost, existential circle before it widens outward.</p>
          <p class="vb-intro">In 1943, when the Gestapo arrested her mother and younger brother Ralph, 21-year-old Margot went underground in Berlin &ndash; supported by a close circle of friends and acquaintances who, at mortal risk to themselves, provided hiding places, false papers, and food. Her mother, who could still have fled herself, chose to voluntarily follow her son into deportation rather than leave him alone &ndash; leaving Margot with the words: <em>Try to make your life.</em> Decades later, this sentence became the title of her memoir and the core of her entire subsequent life: the deepest form of SP2 care, passed down from a mother who sacrificed herself for her child.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-Wing: The Moral Clarity of "Be Human"</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>One-wing (w1)</strong> gives the self-preservation Two an inner set of standards that holds independent of others' reactions &ndash; a clear sense of right and wrong that knows no diplomacy when the principle itself is at stake. It transforms personal care into a moral mandate.</p>
          <p class="vb-intro">In Friedländer this wing showed in her central message, which she carried to hundreds of German schools from 2003 onward: <em>Seid Menschen</em> &ndash; Be human. No complicated political argument, but a direct, moral imperative addressed straight to young people &ndash; paired with her urgent warning to stay vigilant against hatred, exclusion, and antisemitism, "so that what happened to me and my family never happens again." She literally looked young people in the eye while doing so &ndash; still sitting across from them, not on a podium above them, past her hundredth birthday. The One-wing gives care its incorruptible direction: not comfort for comfort's sake, but truth that obligates.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: Fifteen Months in Hiding, Sixty Years of Silence, a Quarter Century of Remembrance</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">For fifteen months in 1943/44, Margot Friedländer survived underground in Berlin &ndash; changing hiding places, dyeing her hair, changing her name. In April 1944 she was nonetheless discovered and arrested, taken to the collection camp on Rosenstraße, and eventually deported to the Theresienstadt concentration camp, where she survived until liberation in 1945. There she met Adolf Friedländer again, an acquaintance from her Berlin youth, whom she married in New York after the war.</p>
          <p class="vb-intro">In the United States, the couple led a withdrawn life for over five decades; Margot worked, among other things, as a seamstress and at a travel agency, and rarely spoke of the past. Only after her husband's death in 1997 did she begin, in her mid-seventies, to write down and publicly tell her story. In 2010, at 88, she moved permanently back to Berlin &ndash; the city she once had to flee &ndash; and became one of Germany's most sought-after eyewitnesses to the Holocaust. In 2018 she founded the Margot Friedländer Foundation to carry her work forward beyond her death; among other honors, she received Germany's Grand Cross of Merit with Star and Sash and honorary citizenship of Berlin.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Self-Preservation Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP2w1 is a rare combination of personal warmth and unwavering moral firmness. Friedländer met every young person she spoke to with genuine, individual attention &ndash; not with a rehearsed lecture, but with the intention of truly being seen and truly seeing in return. This combination of closeness and clarity made her one of the country's most effective moral voices.</p>
          <p class="vb-intro">The fate pattern of the Two is <strong>pride</strong> &ndash; the deep conviction of being needed, of being indispensable to others, while one's own needs recede. In Friedländer this showed in a life dedicated almost entirely to serving others well into extreme old age: past her hundredth birthday she still kept school appointments, even as her health made this increasingly difficult. She had stayed silent for sixty years because she believed her own story would burden others too heavily &ndash; a quiet, decades-long deferral of her own processing in favor of what she believed was the well-being of those around her.</p>
        </blockquote>

        <h2 class="vb-section">6. The Path of Healing: From Silence to Voice</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Two leads from quiet giving to deliberate, freely chosen giving &ndash; from the question <em>What do others need from me?</em> to the recognition <em>My own voice itself is the gift.</em> For the SP2w1, this path shows most clearly in the transition from sixty years of silence to the conscious, free decision to speak publicly.</p>
          <p class="vb-intro">Margot Friedländer found this path late, but completely: a woman who kept her own story to herself for decades became a woman who made that very story the most important gift of her life &ndash; not out of duty, but from a free, mature choice. She died in May 2025 in Berlin at the age of 103. The Hippopotamus that knew all its life what needed protecting &ndash; and that, at the end of its life, passed on to millions exactly what it had once needed most urgently itself: humanity.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se2", label:"SP2 – The Hippopotamus: Subtype Profile"},
        {route:"beruehmte-soeren-kierkegaard", label:"Portrait: Søren Kierkegaard (SP2w1)"},
        {route:"beruehmte-greta-thunberg", label:"Portrait: Greta Thunberg (SP2w1)"},
        {route:"beruehmte-franka-potente", label:"Portrait: Franka Potente (SP2w1)"},
        {route:"bibel-marta", label:"Bible Portrait: Martha (SE2w1)"},
      ])}
    </div>
  `);
}

export function megRyanPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-meg-ryan-portrait.jpg" alt="Meg Ryan" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Meg Ryan</p>
        <p class="krim-portrait-typ">SX3w4 &middot; Sexual Type 3 with Four-Wing</p>
        <p class="krim-portrait-subtitle">Actress, director, b. 1961 – Animal equivalent: Peacock</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Peacock: Radiance That Comes from Within</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The peacock is the animal of the sexual Three, and it enchants not through power or distance, but through a aura that one cannot learn. Meg Ryan embodied this animal in the 1990s so convincingly that she became the epitome of American cinematic charm: warm, lively, laughing—a presence where millions of moviegoers felt as though they had known her forever.</p>
          <p class="vb-intro">That is the core gift of the SX3: not glamour in the sense of distance, but magnetism through proximity. Meg Ryan was never aloof. She was the girl next door and yet irresistible. The peacock unfolding its fan without knowing it.</p>
          <p class="vb-intro">The Four wing (w4) gives this radiance a second dimension: behind the uncomplicated cheerfulness of the film persona lived a woman who wanted more—more depth, more seriousness, more than the box Hollywood had placed her in.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Three: Intimacy as a Life Theme</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The sexual Three (SX3) directs the energy of the Three not toward public success, but toward personal connection. The SX3 asks: "Do I touch you? Am I real to you?" Her charisma is no deception—it is a genuine desire for contact, for the moment when two people truly meet.</p>
          <p class="vb-intro">Meg Ryan's career is a single piece of evidence for this energy. When Harry Met Sally... (1989), Sleepless in Seattle (1993), You've Got Mail (1998)—these films do not work because the screenplays are so ingenious. They work because Meg Ryan makes genuine hunger for connection actable. The famous scene in the diner—the simulated ecstasy as a commentary on self-deception—is actually a commentary on her life theme: What is real? What is performance?</p>
          <p class="vb-intro">Naranjo called the SX3 Masculinity Femininity—the embodiment of attraction in its most personal form. Meg Ryan translated that into a cinematic language that shaped an entire generation.</p>
        </blockquote>

        <h2 class="vb-section">3. The Four Wing: The Depth Behind the Laughter</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Four wing (w4) brings into the SX3 energy something that a Three with a more muted Four wing often suppresses: the need for depth, for authenticity, for an expression that goes beyond the surface. The SX3w4 does not just want to enchant—she wants to be meaningful.</p>
          <p class="vb-intro">In Meg Ryan, this shows in the break in her career in the 2000s. The retreat from romantic comedies, the choice of Proof of Life (2000)—a darker, more complex film for which she consciously chose against her type. The Four wing insists on authenticity, even if the price is high.</p>
          <p class="vb-intro">And then the publicly discussed changes in her appearance: they show the paradox of the SX3w4—the Three need for image control fighting against the Four realization that the image is not the person. Two forces harnessed inside the same shell.</p>
        </blockquote>

        <h2 class="vb-section">4. The Overall Impact: Hollywood's Sweetheart – and the Price of the Role</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In the 1990s, Meg Ryan was the face of a film genre that is romantically glorified today: the romantic comedy in its most warmhearted form. Three films with director Nora Ephron created a universe that remains a benchmark to this day.</p>
          <p class="vb-intro">What gets overlooked in this: Meg Ryan was not what Hollywood had made of her. She was the actress who gave something genuine to this role. The difference is decisive. The SX3w4 can play a role—but she cannot identify completely with it. Beneath the expectation lies always the question: Who am I really?</p>
          <p class="vb-intro">The shift in her career after the turn of the millennium is, in this light, less a downfall than a search movement—the attempt to find her own voice behind the box.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow: When the Image Becomes a Prison</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The core pattern of the Three is deception—not as evil intent, but as a structural hazard: the self that begins to mistake its image for its essence. In the SX3w4, this hazard is particularly subtle because the Four wing simultaneously works against it. The Four constantly asks: Is this real? Are you really you?</p>
          <p class="vb-intro">Meg Ryan's public transformation—the fading radiance of the 1990s, the retreat, the altered appearance—can be read as failure. But it can also be read as what it perhaps was: a refusal to keep playing the performance. The peacock that stops unfolding its fan because it is no longer its own.</p>
          <p class="vb-intro">That she turned to directing in the 2010s and brought her own film, What Happens Later, to theaters in 2023 gives weight to this reading.</p>
        </blockquote>

        <h2 class="vb-section">6. The Path to Healing: From the Favorite Role to Oneself</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Three leads from the question "How am I seen?" to the realization "I am independent of the image others have of me." For the SX3w4, this path is particularly rich: the Four wing has known for a long time where it leads—into depth, into authenticity, into the space behind the role.</p>
          <p class="vb-intro">Meg Ryan's path to healing seems to have run precisely there: away from the "America's Sweetheart" image that had built her career and simultaneously limited it, toward something of her own. Directing is a typical sign of this transformation: instead of shining in front of the camera, telling the stories of others—on her own account, in her own language.</p>
          <p class="vb-intro">The peacock that unfolds its finest moment no longer for the audience, but for itself—and in doing so discovers that it is still a peacock.</p>
        </blockquote>

      </div>

      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}

      ${relatedLinks([
        {route:"beruehmte-dieter-bohlen", label:"Portrait: Dieter Bohlen (SX3w4)"},
        {route:"beruehmte-lena-meyer-landrut", label:"Portrait: Lena Meyer-Landrut (SX3w2)"},
        {route:"subtype/sx3", label:"SX3 – The Peacock: Subtype Profile"}
      ])}
    </div>
  `);
}

export function mrTPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-mr-t-portrait.jpg" alt="Mr. T – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Mr. T</p>
        <p class="krim-portrait-typ">SP2w3 &middot; Self-Preservation Type 2 with Three-Wing</p>
        <p class="krim-portrait-subtitle">American actor, wrestler &amp; entertainer, born 1952 in Chicago &ndash; Animal correspondence: Hippopotamus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Hippopotamus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Hippopotamus</strong> is the animal of the self-preservation Two &ndash; a creature that looks massive and intimidating, yet whose strength serves above all the protection of its own territory and family. Few people embody this dual nature as vividly as Mr. T: a mountain of muscle with a mohawk and pounds of gold, who became known as a reliable protector long before he was a movie star.</p>
          <p class="vb-intro">The American actor Mr. T, born Laurence Tureaud, was born on May 21, 1952, in Chicago, the second-youngest of twelve children. His father left the family when Laurence was five; his mother raised the children on roughly $87 a month in welfare, in a three-room apartment in the South Side housing projects. His older brothers pushed him to build up his body to survive in the neighborhood &ndash; a very concrete, physical survival instinct, long before it became a career.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Two: Care as Protection, Not Performance</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the <strong>self-preservation Two (SP2)</strong> <em>Me First</em>: care begins with one's own physical foundation and closest circle, before turning outward. In Mr. T, this first showed itself directly and professionally: in the early 1970s he worked as a fitness instructor, club bouncer, and high-paid bodyguard in Chicago, guarding prominent clients such as Muhammad Ali, Steve McQueen, Michael Jackson, and Diana Ross. Here, care meant not words of comfort but literal physical protection, in exchange for pay and standing.</p>
          <p class="vb-intro">In 1980, he entered NBC's "America's Toughest Bouncer" competition and knocked out a much larger opponent within twenty seconds in the final. Sylvester Stallone took notice and cast him in 1982 as boxer Clubber Lang in <em>Rocky III</em> &ndash; the line "I pity the fool," which Stallone wrote for him almost as a second skin, became his trademark. The leap from paid protector to movie star happened not through training or networking, but through the same physical presence he had used to protect others.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: From Bouncer to Icon</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the self-preservation Two the drive to build, out of a protected physical foundation, an unmistakable, public image. His trademark look &ndash; the mohawk and the pounds of neck chains &ndash; originated in entirely practical circumstances as a bouncer: guests who lost or left behind their jewelry at the bar often ended up leaving it with him. What began as an improvised solution became an unmistakable, globally recognized trademark, which he later wore deliberately as a tribute to his mother, who taught him the value of hard work.</p>
          <p class="vb-intro">After <em>Rocky III</em> came the role of Sergeant B.A. Baracus in the 1983 series <em>The A-Team</em>, which finally made him a star &ndash; complete with his own cartoon show and cereal merchandising. In 1985, he simultaneously entered professional wrestling and, alongside Hulk Hogan, headlined WrestleMania I; in 2014, he was inducted into the WWE Hall of Fame. The Three-wing keeps asking: how do I turn what protects me into an image everyone recognizes instantly?</p>
        </blockquote>

        <h2 class="vb-section">4. Illness as a Test: Faith Instead of Retreat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 1995, at the height of his fame, Mr. T was diagnosed with a rare T-cell lymphoma. Rather than withdrawing, he described his faith as what carried him through, speaking openly about his trust in God being "tested like Job's." Since then, he regularly visits children with cancer in hospitals to give them courage &ndash; the same protective function his career once began with, now turned toward the most vulnerable. The diagnosis, treatment, and its meaning for his life pattern are explored in depth in the dedicated <a href="javascript:void(0)" data-route="krankheitsportraets-mr-t">Illness Portrait on Mr. T</a>.</p>
          <p class="vb-intro">This pattern remained visible in his social engagement as well: together with Nancy Reagan, he supported her "Just Say No" anti-drug campaign &ndash; care directed straight at children and teenagers, with the same unmistakable presence he had once used to protect celebrities.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Self-Preservation Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP2w3 is the ability to build, out of an existentially insecure childhood, an identity grounded in physical strength, reliability, and an unmistakable public image &ndash; and then to put that strength directly in service of others, whether as a bodyguard, an anti-drug ambassador, or a visitor to sick children. Mr. T turned a role many understand only as a costume into a consistent stance across decades.</p>
          <p class="vb-intro">The fate pattern of the Two is <strong>pride</strong> &ndash; the conviction of being indispensable through one's own strength and care. In the SP2w3, this pride can fixate on the outward image, which must first be proven and defended before vulnerability can be shown. That the 1995 cancer diagnosis of all things became the turning point at which Mr. T extended his care publicly to his own weakness shows how much strength can lie in that shift.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se2", label:"SP2 – The Hippopotamus: Subtype Profile"},
        {route:"beruehmte-ice-cube", label:"Portrait: Ice Cube (SP2w3)"},
        {route:"beruehmte-carlos-santana", label:"Portrait: Carlos Santana (SP2w3)"},
        {route:"beruehmte-harald-gloeockler", label:"Portrait: Harald Glööckler (SP2w3)"},
        {route:"beruehmte-nusrat-fateh-ali-khan", label:"Portrait: Nusrat Fateh Ali Khan (SP2w3)"},
        {route:"krankheitsportraets-mr-t", label:"Illness Portrait: Mr. T (SP2w3) – T-cell lymphoma 1995"},
      ])}
    </div>
  `);
}

export function pabloPicassoPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-pablo-picasso-portrait.jpg" alt="Pablo Picasso – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Pablo Picasso</p>
        <p class="krim-portrait-typ">SX8w7 &middot; Sexual Type 8 with Seven-wing</p>
        <p class="krim-portrait-subtitle">Spanish painter and sculptor, 1881–1973 &ndash; Animal correspondence: Crocodile</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Crocodile</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>crocodile</strong> is the animal of the sexual Type 8 &ndash; and hardly any artist's biography shows it as plainly as Pablo Picasso's. The crocodile does not wait to see whether a territory belongs to it. It takes it. It does not divide the world into rules and exceptions, but into what it seizes and what it leaves unnoticed. For 91 years, Picasso lived exactly this way: tireless, insatiable, unswayed by any expectation that was not his own.</p>
          <p class="vb-intro">He left behind over 20,000 works &ndash; paintings, sculptures, ceramics, prints, stage designs &ndash; more than any other artist of the modern era. No withdrawal, no pause, no creative block born of self-doubt. The crocodile feeds as long as it is hungry. And Picasso's hunger &ndash; for expression, for recognition, for women, for the next picture &ndash; never went out.</p>
        </blockquote>

        <h2 class="vb-section">2. Málaga: The Dove and the Father</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Pablo Ruiz Picasso was born in 1881 in Málaga, the son of the drawing teacher and painter José Ruiz Blasco (SE4w5), who had specialized in a single, recurring motif: doves. The father taught at the local art school and was a respected, though not outstanding, artist in Málaga &ndash; orderly, academic, without the ambition to reinvent painting. In precisely this household, shaped by paternal discipline and paternal craft, a child grew up who would leave both behind within a few years.</p>
          <p class="vb-intro">According to tradition, at the age of thirteen young Pablo painted a dove with a precision and vitality his father had never achieved himself. José Ruiz Blasco is said to have then taken his brush and palette and handed them to his son &ndash; promising never to paint again himself. How much of this scene was later embellished into legend can no longer be reconstructed with certainty; what is documented is that José Ruiz Blasco scaled back his own artistic activity in precisely these years, while publicly acknowledging his son's extraordinary progress. For the sexual Eight, this is no mere awakening of talent. It is a transfer of power: the son does not merely take over the craft, but the father's territory &ndash; and the father steps back.</p>
        </blockquote>

        <h2 class="vb-section">3. Barcelona, Madrid: The School That Was Too Small</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 1895 the family moved to Barcelona, where José Ruiz Blasco found a position at the La Llotja art school. For the entrance exam &ndash; normally designed to take several weeks &ndash; Pablo, just fourteen years old, is said to have needed only a single day. The examining committee was so impressed that they placed him directly in the advanced class, far ahead of his peers. In 1897 he transferred to the Royal Academy of San Fernando in Madrid &ndash; Spain's most prestigious art school.</p>
          <p class="vb-intro">He did not stay long. The formal instruction, copying classical models, the academic rules &ndash; all of it bored him within months. He skipped classes, spending his time instead at the Prado in front of the works of Velázquez (SX9w1) and Goya, and eventually returned to Barcelona without completing his degree. The sexual Eight with a Seven-wing cannot be fitted into a system that moves slower than it does. What it wants to learn, it teaches itself &ndash; faster, more directly, more impatiently than any institution allows for.</p>
        </blockquote>

        <h2 class="vb-section">4. The Sexual Eight: Possession</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sexual Eight (SX8)</strong> is, according to Naranjo, the subtype he called <em>Possession</em>. It wants no distanced connection, but complete fusion &ndash; with a person, with a work, with an idea. What it touches, it wants entirely. What it loves, it nearly consumes. And when the intensity fades, it lets go &ndash; often abruptly, often without regard for whoever is left behind.</p>
          <p class="vb-intro">Picasso's own line captures this stance exactly: <em>"Je ne cherche pas, je trouve"</em> &ndash; I do not seek, I find. No doubt, no hesitation, no need for outside confirmation. When Picasso claimed a motif, a form, a person as his own, he did so with a certainty that admitted no contradiction. His famous dictum that every act of creation is first an act of destruction describes exactly the principle of the SX8: to fully possess something new, the old must first fall.</p>
        </blockquote>

        <h2 class="vb-section">5. The Seven-Wing: Restless Reinvention</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Seven-wing</strong> gives the sexual Eight a quality that complements the pure intensity of the Eight core: appetite, curiosity, the pleasure of the next experiment. The SX8w7 does not linger in a form once it has found it &ndash; it seeks the next one as soon as the previous one is exhausted. Hardly any artist's life shows this more clearly than Picasso's endless chain of stylistic periods: the Blue Period (1901&ndash;1904), shaped by poverty, loneliness, and the suicide of his friend Carlos Casagemas; the Rose Period (1904&ndash;1906) with circus figures and warmer tones; the 1907 break of <em>Les Demoiselles d'Avignon</em>, which redefined twentieth-century painting; the development of Cubism together with Georges Braque; later Neoclassicism, Surrealist influences, ceramics, stage design.</p>
          <p class="vb-intro">A sexual Type 8 with a Nine-wing would likely have settled into a form once found and deepened it. Picasso did the opposite: as soon as a style reached its full maturity, he left it &ndash; not out of dissatisfaction, but out of appetite for what came next. The Seven-wing turns the Eight's possession not into stagnation, but into an endless chain of new conquests.</p>
        </blockquote>

        <h2 class="vb-section">6. The Women: Muses and Attrition</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Picasso's relationships followed the same pattern as his work: total intensity, then an abrupt shift. Fernande Olivier, Eva Gouel, Olga Khokhlova &ndash; his first wife, from whom he never officially divorced &ndash;, Marie-Thérèse Walter, whom he met when she was seventeen while still married to Olga, the photographer Dora Maar, Françoise Gilot, the only one of his partners to leave him by her own decision, and finally Jacqueline Roque, who remained at his side for the last two decades of his life. Each of these women became, for a time, the complete center of his art &ndash; painted, transformed, immortalized &ndash; and each eventually experienced this intensity turning toward the next.</p>
          <p class="vb-intro">Françoise Gilot later described in her memoirs how Picasso treated people like colors: used up completely, until nothing was left of them. The shadow of the SX8 shows itself here without embellishment: Marie-Thérèse Walter took her own life in 1977, four years after Picasso's death. Jacqueline Roque shot herself in 1986. His grandson Pablito poisoned himself after being denied entry to Picasso's funeral in 1973. Possession that never truly ends &ndash; not even with the death of the one who possessed.</p>
        </blockquote>

        <h2 class="vb-section">7. Guernica and the Century</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 1937 the German Condor Legion, acting for Franco, bombed the Basque town of Guernica &ndash; history's first systematic air attack on a civilian population. Picasso, who at the time had a mural commission for the Paris World's Fair, turned this horror within weeks into one of the most significant political artworks of the twentieth century: <em>Guernica</em>, monumental, rendered in black, white, and gray, a single scream made of horses, people, and broken forms.</p>
          <p class="vb-intro">During the German occupation of Paris, Picasso remained in the city, even though his art, branded "degenerate," made him a target. According to legend, a Gestapo officer once showed him a postcard of Guernica and asked: "Did you do this?" Picasso is said to have replied: "No &ndash; you did." Whether this exchange took place exactly as told is not historically confirmed, but it captures the stance precisely: the sexual Eight does not avoid confrontation, even when it is dangerous.</p>
        </blockquote>

        <h2 class="vb-section">8. Light and Shadow: Genius and Devastation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX8w7 is its uncompromising creative power: the ability to single-handedly reinvent an entire art form &ndash; or several at once &ndash; without ever asking permission. Picasso did not merely influence twentieth-century painting. He re-founded it repeatedly, every time he left a form he had found behind in order to conquer the next.</p>
          <p class="vb-intro">The shadow is the same trait, only without art as an outlet: a possessiveness that makes no distinction between a canvas and a human being. Whoever stood close to Picasso became part of his work &ndash; and had to accept that this belonging ended the moment his intensity shifted elsewhere. The mature SX8w7 learns that true greatness needs no attrition to prove itself. As far as the sources show, Picasso never fully learned this lesson. Power and love, as is well known, exclude one another.</p>
        </blockquote>

        <h2 class="vb-section">9. Death and Legacy</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Pablo Picasso died in 1973 in Mougins, France, at the age of 91 &ndash; working almost until the end. No retreat into privacy, no falling silent with age: even in his final decades his productivity remained unbroken, his curiosity for new techniques &ndash; ceramics, linocut, sculpture made from found objects &ndash; unexhausted. The crocodile stays at the surface until the end: visible, active, never in retirement.</p>
          <p class="vb-intro">What remains is a body of work that rewrote art history more than once &ndash; and a biography that shows what the same force is capable of: the greatest creative explosion of the modern era, and the ruthless exhaustion of those who came too close to it. Both were Picasso. The sexual Eight with a Seven-wing knows no half measures &ndash; neither in creating nor in possessing.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-donald-trump", label:"Portrait: Donald J. Trump (SX8w7)"},
        {route:"beruehmte-giacomo-puccini", label:"Portrait: Giacomo Puccini (SX8w7)"},
        {route:"beruehmte-adele-neuhauser", label:"Portrait: Adele Neuhauser (SX8w7)"},
        {route:"subtype/sx8", label:"SX8 – The Crocodile: Subtype Profile"},
        ])}
      </div>
    </div>
  `);
}

export function reinhardMeyPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-reinhard-mey-portrait.jpg" alt="Reinhard Mey" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Reinhard Mey</p>
        <p class="krim-portrait-typ">SO4w5 &middot; Social Type 4 with Five-Wing</p>
        <p class="krim-portrait-subtitle">German singer-songwriter, b. 1942 &ndash; Animal correspondence: Armadillo</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Armadillo with a Guitar</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>armadillo</strong> is the animal of the social Four: a shell of restraint covering deep, often painful sensitivity underneath. Reinhard Mey embodies exactly this combination: for over five decades one of the most successful German singer-songwriters, yet never someone who put his success on display or courted attention.</p>
          <p class="vb-intro">Reinhard Mey, born in Berlin in 1942, has been one of the most defining figures of the German singer-songwriter scene since the late 1960s. Melancholy, as he himself and countless observers of his work have noted, is his great, recurring theme &ndash; not a mere stylistic device, but the underlying tone from which he wrote for decades.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Four: Defending Otherness, Not Displaying It</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the social Four's passion <em>Shame</em>: a deep sense of being fundamentally different from others, combined with the need not to hide that difference, but to assert it publicly in a distinct form of one's own. A particularly clear example: Mey turned down an ECHO nomination because it categorized him under "German Schlager" &ndash; a categorization he took as an insult. This isn't vanity; it's the social Four in its purest form: actively defending one's own artistic identity against a classification felt to be wrong, rather than quietly falling into line.</p>
          <p class="vb-intro">His political engagement follows the same pattern: "Nein, meine Söhne geb' ich nicht" ("No, I Won't Give Up My Sons," 1986) translates a deeply personal stance &ndash; his own fatherhood &ndash; into a public, socially resonant statement against war and state abuse of power. The social Four doesn't stop at private vulnerability; it translates it into something that concerns the community.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five-Wing: Mastery Before the Stage, Not Self-Display On It</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">A social Four with a pronounced Three-wing would actively stage her distinctiveness &ndash; stage presence, image, visible success as confirmation of her own otherness. Mey instead shows the <strong>Five-wing</strong>: he arrives at the venue roughly five hours before a big show, does a thorough soundcheck &ndash; and then, alone, plays through the entire concert program once from start to finish, no matter how many times he has already played it. Only then does he dare go on stage. This isn't a show; it's the Five-wing's need to establish complete mastery of his own material before exposing himself to the public &ndash; competence as protection against vulnerability, not performance as an end in itself.</p>
          <p class="vb-intro">Fittingly, despite more than fifty years of stage experience, he describes stage fright that has never eased: "It's there every evening. It's the engine that drives me … the contest with myself, the free fall, the triumph over fear." And it fits, too, that his private life is extremely guarded: it isn't about publicly staging his distinctiveness, but about preserving it within a strictly controlled, self-chosen frame &ndash; exactly the withdrawal tendency the Five-wing adds to the social Four.</p>
        </blockquote>

        <h2 class="vb-section">4. The Loss of a Son: Private Pain, Publicly Processed</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 2009, Mey's son Maximilian suffered severe pneumonia that left him in a coma; he died in 2014 at age 32, never having regained consciousness. Mey never turned this loss into a recurring public topic, but processed it in the song "Du bist ein Riese, Max!" ("You're a Giant, Max!") &ndash; which also carries the thought of how parents, through their upbringing, often make their children small instead of letting them grow big. This is the social Four at its most constructive: not silencing what is deeply personal, but shaping it into a form that speaks to other people in similar pain &ndash; art as the translation of one's own wound into something socially bearable.</p>
          <p class="vb-intro">His declared parenting principle &ndash; deliberately giving his sons a great deal of freedom, "letting them be," rather than pushing them into a fixed shape &ndash; reads like the experience of his own otherness, which he wanted to spare his children.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Social Four with a Five-Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO4w5 shows in Mey's ability to turn deeply personal melancholy into songs that have accompanied millions of people across generations &ndash; "Gute Nacht, Freunde" ("Good Night, Friends"), "Annabelle," and many more became a fixed part of the German-language songbook because they carry real, carefully processed otherness, not a calculated pose.</p>
          <p class="vb-intro">The shadow lies in the risk that the Five-wing's withdrawal tendency shields his distinctiveness so thoroughly from the public that he is scarcely perceived as a person at all, only as a body of work &ndash; Mey himself appears in public almost exclusively as the voice of his songs, rarely as a private person with needs beyond the craft.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: The Armadillo That Never Put Its Otherness on Display</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Four leads from the shame <em>I am fundamentally different and flawed</em> to the insight <em>I am entirely normal, even in my distinctiveness.</em> Over five decades on stage, alone with a guitar and yet never courting attention &ndash; that is the lasting image of this social Four with a Five-wing: otherness that is sufficient unto itself, rather than needing to prove itself.</p>
          <p class="vb-intro">How quietly this decades-long refusal of self-promotion actually went unnoticed only became visible in 2026: a data review by Germany's music industry association found that numerous albums from 1975 to 2000 had never officially received a Gold Record despite high sales figures &ndash; Mey was subsequently awarded at least 23 additional gold and platinum certifications, more than forty years late. Not a fame he had ever sought, but the quiet confirmation of a body of work that never defined itself by commercial success.</p>
          <p class="vb-intro">A revealing comparison within the international music business is <a href="javascript:void(0)" data-route="beruehmte-leonard-cohen">Leonard Cohen</a> (SO4w5) &ndash; in him, the same combination of deep, publicly processed melancholy and a withdrawn, barely staged public presence shows up. More in the <a href="javascript:void(0)" data-route="beruehmte-leonard-cohen">portrait of Leonard Cohen</a>.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so4", label:"SO4 – The Armadillo: Subtype Profile"},
        {route:"beruehmte-leonard-cohen", label:"Portrait: Leonard Cohen (SO4w5)"},
        {route:"beruehmte-gustav-mahler", label:"Portrait: Gustav Mahler (SO4w5)"},
        {route:"beruehmte-marcel-proust", label:"Portrait: Marcel Proust (SO4w5)"},
      ])}
    </div>
  `);
}

export function sandraHuellerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-sandra-hueller-portrait.jpg" alt="Sandra H\xfcller – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Sandra H\xfcller</p>
        <p class="krim-portrait-typ">SO9w1 &middot; Social Type 9 with Einserfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Actress, b. 1978 – Toni Erdmann, Anatomy of a Fall, The Zone of Interest – Animal equivalent: Buffalo</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Buffalo</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The buffalo is the animal of the social Nine – an animal whose impact comes not from standing out, but from sheer presence within the collective. Sandra Hüller is, in exactly this sense, a buffalo of international cinema: she rarely stands in the spotlight as herself, instead carrying one role after another through the ensemble – unhurried, load-bearing, never leaving the herd she considers her own: the theater in Leipzig, where she still performs regularly.</p>
          <p class="vb-intro">Born in 1978 in Suhl, Thuringia, trained at the Ernst Busch Academy of Dramatic Arts in Berlin, Hüller has stayed loyal to her home stage despite Oscar nominations and international fame. This constancy is no coincidence but the animal's basic stance: the buffalo does not switch herds just because other pastures look greener.</p>
        </blockquote>

        <h2 class="vb-section">2. The social Nine: Belonging instead of the spotlight</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">According to Naranjo, the social Nine (SO9) is a variant of the passion of sloth that does not exhaust itself in personal comfort but in merging with a group, a collective, a shared cause. Hüller talks strikingly rarely in interviews about herself as a star – almost always about the ensemble, the team, the director, the other actors. Her own fame is consistently played down.</p>
          <p class="vb-intro">This restraint is not coyness. It is the basic movement of the SO9: dissolving oneself into something larger to find meaning there, rather than seeking recognition as an individual. This is exactly what allows her to disappear completely into roles – from the Toni Erdmann executive to the Auschwitz commandant's wife Höss, no recurring signature, no consistent "I" is recognizable.</p>
        </blockquote>

        <h2 class="vb-section">3. The One wing: Precision without compromise</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">A Nine with a more muted One wing would tend to drift along. In Hüller's case, the strongly developed Einserflügel brings something else: high standards for her own work, a fine sense for what is morally sustainable, and the willingness to turn down roles that do not meet that standard. In "The Zone of Interest" (2023) she played Hedwig Höss, the wife of Auschwitz commandant Rudolf Höss – a role demanding absolute precision, without ever softening or normalizing the character.</p>
          <p class="vb-intro">The SO9w1 appears soft and adaptable on the outside. Internally, she follows a strict, often invisible standard of right and wrong. Hüller chooses her roles along this line – not by prospects of success, but by whether she can do justice to the material.</p>
        </blockquote>

        <h2 class="vb-section">4. Requiem: The early breakthrough</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 2006, Hüller played Michaela Klingler in Hans-Christian Schmid's "Requiem" – a woman with epilepsy believed by her church congregation to be possessed, a role based on the real case of Anneliese Michel. For this performance she received the Silver Bear at the Berlinale, the German Film Award, and the Bavarian Film Award.</p>
          <p class="vb-intro">The breakthrough barely changed her everyday life visibly. She stayed in Leipzig and Bochum, kept doing theater instead of moving straight to Hollywood. That is the social Nine in its purest form: success gets integrated, not used as a break from one's own structure.</p>
        </blockquote>

        <h2 class="vb-section">5. Toni Erdmann and Anatomy of a Fall: Two women under pressure</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In Maren Ade's "Toni Erdmann" (2016), Hüller played a success-driven management consultant whose facade is systematically dismantled by her eccentric father – an international success that earned her the European Film Award. In "Anatomy of a Fall" (2023), she played a successful novelist who becomes the accused herself after her husband's death – for which she received the 2024 César for Best Actress.</p>
          <p class="vb-intro">Both characters stand under public scrutiny, have to justify themselves, are judged from the outside. Hüller never plays this pressure loudly – she lets it show in posture, in hesitation, in small delays. This is the SO9: conflict is not fought out, but carried, until it discharges within the character itself.</p>
        </blockquote>

        <h2 class="vb-section">6. The Buffalo in the spotlight</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 2024, Hüller was simultaneously nominated for the Best Actress Oscar for two films – "Anatomy of a Fall" and "The Zone of Interest" – a rare constellation. In interviews she responded with noticeable reserve – no triumphant gesture, more a quiet puzzlement about what all the fuss was supposed to mean.</p>
          <p class="vb-intro">The buffalo with an Einserflügel moves through the biggest stages of the film world without giving up its groundedness. No drama, no posing – just the quiet, stubborn endurance with which the social Nine carries role after role, season after season. This is not a spectacular career. It is one that simply never stops carrying.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-steffi-graf", label:"Portrait: Steffi Graf (SO9w1)"},
        {route:"beruehmte-peter-falk", label:"Portrait: Peter Falk (SO9w1)"},
        {route:"beruehmte-tom-hanks", label:"Portrait: Tom Hanks (SO9w1)"},
        ])}
      </div>
    </div>
  `);
}

export function taddlPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-taddl-portrait.jpg" alt="Taddl (Daniel Tjarks) – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Taddl (Daniel Tjarks)</p>
        <p class="krim-portrait-typ">SO4w3 &middot; Social Type 4 with Three-wing</p>
        <p class="krim-portrait-subtitle">YouTuber, Artist &amp; Musician, born 1996 &ndash; Animal correspondence: Armadillo</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Armadillo</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Armadillo</strong> is the animal of the social Type 4 &ndash; a creature that is armored on the outside, that rolls itself up at danger and presents an impenetrable shell. Those who observe it from the outside see the armor. Those who know it are aware: beneath that is something extraordinarily soft. A creature that feels. That is vulnerable. That longs. And that can keep this longing hidden behind its shell for years.</p>
          <p class="vb-intro">The German content creator Taddl &ndash; born Daniel Tjarks in 1996 &ndash; began his career as a teenager on YouTube and became one of the best-known German content creators of his generation. Millions followed his videos, his collaborations with other YouTubers, his seemingly carefree humor. But those who looked closely could recognize the armadillo: a young man who used wit and self-irony to protect his interior &ndash; and who eventually began to set the armor aside.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Type 4: Shame as Silent Driving Force</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social Type 4 (SO4)</strong> is the <em>amplification type</em> of the Four: it carries its passion of envy inward &ndash; as shame. Naranjo aptly named this subtype <em>Shame</em>. The life-feeling of the SO4 is a deep sense of lack: the grass on the other side of the fence is always greener. Others have something I don't have. Others <em>are</em> something I am not. This feeling of inferiority is not loud and accusatory &ndash; it works quietly, stubbornly, and exhaustingly within. And it is at the same time the drive that pushes the SO4 toward achievement: <em>Perhaps one day I will be enough after all.</em></p>
          <p class="vb-intro">In Taddl, this manifests in the tension between visibility and withdrawal that has shaped his public path. He was present &ndash; and disappeared. He shared &ndash; and protected. He showed humor &ndash; and behind it lay something he did not show for a long time. That is the SO4: it wants to be seen. But it fears being truly seen &ndash; because it is not certain whether what is then seen is good enough.</p>
          <p class="vb-intro">His later work &ndash; music, visual art, more honest glimpses into his life &ndash; shows the SO4 on a path: from the shame that conceals to the vulnerability that reveals. That is no small step. It is the essential one.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: Performance as Protective Mechanism</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the social Type 4 something the Four would not have on its own: the ability to present itself, to hold its ground on stage, to entertain an audience. The SO4w3 feels the shame &ndash; and steps forward anyway. Or rather: <em>because of</em> the shame. For the Three-wing supplies the energy to build the mask that protects the interior while one is not yet ready to show it.</p>
          <p class="vb-intro">Taddl's early YouTube phase is the prime example of this dynamic: entertaining, self-ironic, always slightly at a distance. The Three-wing makes him a natural entertainer &ndash; and the Four beneath ensures that this entertainer is more than a surface. He seeks meaning. He seeks authenticity. He does not only want to entertain &ndash; he wants to leave something that endures.</p>
          <p class="vb-intro">This tension &ndash; entertainer against seeker &ndash; is the creative center of the SO4w3. Music, visual art, more personal content: Taddl has begun to use the Three-wing less as protection and more as a means of expression. That is maturation. That is development. That is the armadillo learning to move through the world without armor.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO4w3 is its ability to transform the interior into art &ndash; in a way that touches others because they recognize themselves in it. Taddl's development from pure entertainment to artistic engagement is this light: a person who grasps that his sensitivity is not a deficit but a raw material.</p>
          <p class="vb-intro">The fate pattern of the Four is <strong>envy</strong> &ndash; and in the SO4 it is particularly quiet and grinding. The constant comparison, the feeling of falling short, the conviction that others have a naturalness in life that one oneself lacks. This can paralyze. But it can also &ndash; when it becomes conscious &ndash; be transformed into energy: <em>I want to show that I am more than what I have shown so far.</em></p>
          <p class="vb-intro">The Three-wing brings its own shadow: the temptation to sacrifice the genuine to the successful. When the applause becomes more important than the work. When the audience's reaction drowns out the inner voice. The armadillo caught in the trap of its own armor.</p>
        </blockquote>

        <h2 class="vb-section">5. The Path of Healing: Visibility Without Armor</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Four leads from <em>I am not enough</em> to <em>What I am is enough.</em> For the SO4w3, this means not discarding the mask of the Three &ndash; but showing what is genuine behind it. Not either entertainer or seeker. Both. Simultaneously. That is the mature SO4w3: someone who entertains their audience &ndash; and at the same time genuinely reveals something of themselves.</p>
          <p class="vb-intro">Taddl's path is not yet complete &ndash; he is in his late twenties. But the direction is discernible: away from the armor, toward presence. The armadillo that has learned it needs no armor to be safe &ndash; because safety comes from within. That is the healing path. And it is a courageous one.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so4", label:"SO4 – The Armadillo: Subtype Profile"},
        {route:"beruehmte-romy-schneider", label:"Portrait: Romy Schneider (SO4w3)"},
      ])}
    </div>
  `);
}

export function tuttyTranPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-tutty-tran-portrait.jpg" alt="Tutty Tran – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Tutty Tran</p>
        <p class="krim-portrait-typ">SP2w3 &middot; Self-Preservation Type 2 with Three-Wing</p>
        <p class="krim-portrait-subtitle">German stand-up comedian, born 1988 in West Berlin &ndash; Animal correspondence: Hippopotamus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Hippopotamus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Hippopotamus</strong> is the animal of the self-preservation Two &ndash; a creature that does not leave its own waters but makes them its own, and that shows its true strength precisely when its own territory comes into question. Tutty Tran did not find his waters on a big stage, but in the everyday life of a Vietnamese immigrant family in Berlin's Neukölln district &ndash; and it is exactly that everyday life that remains at the center of his stand-up to this day.</p>
          <p class="vb-intro">The German comedian was born Thomas To Truong Tran in West Berlin in 1988, the son of Vietnamese parents who had come to Germany as so-called boat people in the late 1970s. He grew up in Neukölln &ndash; a setting that gave his later comedy a built-in double layer from the start: the culture clash between the expectations of his parents' generation and his own life as a son who grew up in Germany.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Two: The Family as Both Subject Matter and Foundation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the <strong>self-preservation Two (SP2)</strong> <em>Me First</em>: care and belonging turn first toward one's own, closest circle before turning outward. In Tutty Tran, this innermost circle is the actual material of his art from the start: his shows keep circling back to his Vietnamese roots, to family dynamics, and to his relationship with his own parents &ndash; not as detached observation, but as directly lived, often self-deprecatingly processed closeness.</p>
          <p class="vb-intro">Rather than distancing himself on stage from his parents' story &ndash; a flight across the sea, a fresh start in a foreign country &ndash; Tran makes it the load-bearing foundation of his act. The title of his current show, <em>Wok-Life-Balance</em>, playfully joins exactly these two worlds: the Vietnamese cuisine of his childhood and the Western ideal of self-optimization &ndash; an image of how closely personal origin and public persona remain intertwined for him.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: From Fitness YouTuber to Sought-After Live Comedian</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the self-preservation Two the drive to build, out of a familiar, personal foundation, a visible, public success. Tran began his public career with YouTube videos about fitness before turning to stand-up comedy in 2016 &ndash; a change of medium, but not of the underlying stance of showing himself through visible, measurable achievement.</p>
          <p class="vb-intro">In 2017, he won the Nightwash Talent Award and became known to a wider audience. His first solo show, <em>Augen zu und durch</em> (Eyes Closed and Through), ran from 2019 to 2022 and laid the foundation for his live career; in autumn 2019, Amazon Prime aired his solo special as part of the show <em>Chris Tall presents ...</em>. Appearances on the Quatsch Comedy Club, on <em>Das Supertalent</em>, and on <em>Genial daneben</em> followed &ndash; the Three-wing translated a very personal culture-clash experience into a format that reaches a broad German-speaking audience.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Self-Preservation Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP2w3 lies in telling a very personal, family story so openly that people without any immigration background of their own recognize themselves in it too &ndash; culture clash, in Tran's hands, becomes not an accusation but, as descriptions of his comedy repeatedly put it, a mix of punchlines and a healthy dose of self-irony. The family itself never becomes a footnote; it stays the actual center everything else is told from.</p>
          <p class="vb-intro">The fate pattern of the Two is <strong>pride</strong> &ndash; the conviction of being indispensable through one's own care and effort for those closest to oneself. In the SP2w3, this pride can also show itself in the way one's own origin story becomes the central, almost unchallengeable signature that the entire artistic self-image is anchored to &ndash; a strength as long as it creates closeness, but also a territory rarely left behind.</p>
        </blockquote>

        <h2 class="vb-section">5. The Work: A Territory Between Neukölln and the Big Stage</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Over the years, Tutty Tran has built a considerable reach: as of April 2026, he has 798,000 followers on Instagram, 428,000 on Facebook, and 105,000 on YouTube &ndash; an audience that has grown steadily over the years while the core subject matter has stayed the same: family, origin, his own relationship with his parents.</p>
          <p class="vb-intro">The hippopotamus does not leave its ancestral waters to please others &ndash; it enlarges its territory without giving up its own foundation. From a childhood in Neukölln as the son of Vietnamese boat people to the big stage and an Amazon Prime special, Tran has done exactly that: spreading the same family story that started it all ever further, instead of leaving it behind.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se2", label:"SP2 – The Hippopotamus: Subtype Profile"},
        {route:"beruehmte-mr-t", label:"Portrait: Mr. T (SP2w3)"},
        {route:"beruehmte-jimi-blue-ochsenknecht", label:"Portrait: Jimi Blue Ochsenknecht (SP2w3)"},
        {route:"beruehmte-nusrat-fateh-ali-khan", label:"Portrait: Nusrat Fateh Ali Khan (SP2w3)"},
        {route:"beruehmte-quentin-tarantino", label:"Portrait: Quentin Tarantino (SP2w3)"},
      ])}
    </div>
  `);
}

export function winifredCharlesworthPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-winifred-charlesworth-portrait.jpg" alt="Mrs. Winifred Charlesworth – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Mrs. Winifred Charlesworth</p>
        <p class="krim-portrait-typ">SO2w1 &middot; Social Type 2 with One-wing</p>
        <p class="krim-portrait-subtitle">Breeder &amp; founding figure of the Golden Retriever &ndash; author of the first breed standard &ndash; Animal correspondence: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Golden Retriever</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Golden Retriever</strong> is the animal of the social Two &ndash; friendly, reliable, entirely oriented toward the wellbeing of the community, without ever seeming pushy. Alongside Lord Tweedmouth, Mrs. Winifred Charlesworth is considered the breed's most important founding figure: she acquired her first golden bitch, Noranby Beauty, in 1906, co-founded the Golden Retriever Club in Britain in 1911, and wrote the first official breed standard &ndash; a document that remains largely unchanged to this day.</p>
          <p class="vb-intro">Here too, the pattern that runs through several of this compass's animal-researcher portraits shows itself: there is no science in the strict sense when it comes to the Golden Retriever, yet decades of meticulous, systematic breeding work produced a form of expert authority whose rigor differs little from a research career &ndash; much like Prof. Grahame Webb or Thea Litschka-Koen. And once again, the very person who shaped an entire breed herself carries exactly the qualities that breed is known for to this day.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Two: Indispensable to an Entire Community</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the <strong>social Two (SO2)</strong> <em>Ambition</em> &ndash; not ambition in the sense of personal career, but the need to make oneself indispensable within a community and to occupy a central, connecting position there. Charlesworth did exactly that: she did not found a private breeding operation in quiet obscurity, but built an institution that still organizes the entire breed worldwide today &ndash; the Golden Retriever Club. She wrote the standard every breeder has followed ever since, and became, as specialist sources put it, an "icon of the breed."</p>
          <p class="vb-intro">For 44 years, sources report, she devoted herself continuously to this one task. In 1932 she wrote "The Book of the Golden Retriever," which became the standard work. This is exactly the SO2 at its most productive: one's own worth arises not through distance or private perfection, but by making oneself the indispensable center of a community &ndash; here, the entire Golden Retriever world.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-Wing: Rigor Instead of Casual Enthusiasm</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">An SO2 with a more muted One-wing would likely have lived her enthusiasm for the breed more casually, more sociably. In Charlesworth, an unyielding, almost pedantic care shows instead: specialist sources describe how she persistently &ndash; the English original literally says she "nagged" &ndash; pressed her fellow breeders over the years to keep the breed a true "dual-purpose dog," one that remained both capable of work and true to type.</p>
          <p class="vb-intro">In the 1920s she systematically bred out excess bone and heavy build from her line, moving toward lighter, darker animals with a clearer focus. This combination of community bond (the Two) and unwavering fidelity to a standard (the One-wing) is the SO2w1 at its most mature &ndash; care that does not exhaust itself in indulgence, but in strict, long-term quality assurance.</p>
        </blockquote>

        <h2 class="vb-section">4. A Legacy That Still Saves Lives Today</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Without Charlesworth's meticulous breeding work, the Golden Retriever would likely never have developed the consistent character and even temperament for which the breed is prized worldwide today. It is exactly these qualities &ndash; trainability, gentleness, unshakeable reliability &ndash; that made the Golden Retriever one of the most important dog breeds for social and assistive roles: as a guide dog for the blind, as a therapy dog in hospitals and care facilities, as an assistance dog for people with disabilities, and as one of the world's most beloved family dogs.</p>
          <p class="vb-intro">Charlesworth's life's work has thus had an impact reaching far beyond the breeding kennel: the dog whose temperament she shaped over decades now serves people in need every day &ndash; a quiet but measurable confirmation of the SO2's core motivation, to place oneself in service of a larger community. It is telling that people with a social Two imprint often still deliberately choose a Golden Retriever as a family dog today &ndash; as if the breed itself radiated the very same energy that drove Charlesworth her entire life.</p>
        </blockquote>

        <h2 class="vb-section">5. The Golden Retriever She Herself Embodied</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Winifred Charlesworth's life's work shows the social Two with a One-wing at its most effective: nearly fifty years of tireless, meticulous dedication to an entire community &ndash; not out of private hobbyism, but from a deep need to make herself indispensable to something larger than herself.</p>
          <p class="vb-intro">The Golden Retriever comforts, supports, accompanies &ndash; without ever asking anything in return. That was exactly Charlesworth's own signature: a woman who shaped an entire breed so that it still serves people today, and who in doing so became the living embodiment of the very animal she devoted her life to.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
          ${bookTip("enneagramm-zoo", "27 Animal Portraits – each Subtype animal with character, biology and Enneagram connection.", "Enneagramm-Zoo")}
          ${bookTip("archetypen-der-tiere-im-enneagramm", "The archetypal animals of the 9 types as an inner map – images that work instantly.", "Archetypen der Tiere im Enneagramm")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so2", label:"SO2 – The Golden Retriever: Subtype Profile"},
        {route:"beruehmte-albert-schweitzer", label:"Portrait: Dr. Albert Schweitzer (SO2w1)"},
        ])}
        ${animalResearcherMatchBlock("beruehmte-winifred-charlesworth")}
      </div>
    </div>
  `);
}

export function karlLauterbachPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-karl-lauterbach-portrait.jpg" alt="Karl Lauterbach – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Prof. Dr. Karl Lauterbach</p>
        <p class="krim-portrait-typ">SP6w5 &middot; Self-Preservation Type 6 with Five-wing</p>
        <p class="krim-portrait-subtitle">German health economist &amp; politician, born 1963 &ndash; Federal Minister of Health 2021&ndash;2025</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Rabbit That Devoted Its Life to Warding Off Danger</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>rabbit</strong> is the animal of the self-preservation Six &ndash; watchful, focused on risk, always striving to recognize danger earlier than others. Karl Lauterbach, born 1963, earned a doctorate in health economics at Harvard University and built a scientific reputation as an epidemiologist and health-policy expert over decades before entering politics. His entire professional life circled around the same basic question: how can danger to public health be recognized and averted as early as possible?</p>
          <p class="vb-intro">This portrait looks exclusively at the Enneagram-typical behavior pattern &ndash; not at a political assessment of his tenure or his party. The question here is how the Six's passion, <strong>fear</strong>, can behave under extreme, years-long pressure when it is no longer kept in balance.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Six: Security Through Constant Risk Assessment</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation Six (SP6)</strong> is, according to Naranjo, the subtype he called <em>Warmth</em> &ndash; but its security is often fought for first through constant vigilance toward danger, before real closeness can grow from it. Lauterbach's public presence during the COVID-19 pandemic from 2020 onward showed this pattern at an intensity that went far beyond the usual: hardly a day without a public warning, hardly a talk-show appearance without a reference to a new risk scenario.</p>
          <p class="vb-intro">As a self-preservation type, this vigilance is not directed at the grand stage but at concrete survival &ndash; his own as well as society's. This is exactly why Lauterbach did not appear as a detached policy expert, but communicated with a personal, often urgent involvement that many citizens found authentic and others found excessive.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five-Wing: Numbers, Models, Statistics as Justification for the Fear</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five-wing (w5)</strong> gives the self-preservation Six an intellectual, data-driven coloring. Lauterbach backed his warnings almost consistently with studies, model calculations, and international comparative figures &ndash; a style that earned him a reputation as a competent expert, while also leading, again and again, to figures being presented selectively and often in the worst-possible-case scenario.</p>
          <p class="vb-intro">His self-chosen label "Team Vorsicht" ("Team Caution") captures this combination precisely: caution as a virtue, grounded in seemingly objective expertise &ndash; a typical legitimation strategy of the SP6w5, in which one's own fear is presented not as a feeling but as data-based precaution.</p>
        </blockquote>

        <h2 class="vb-section">4. When Precaution Tips Into Public Fearmongering</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">This is exactly where, viewed critically, the shadow side of this pattern shows itself with full clarity. Over the course of months, Lauterbach publicly painted horror scenarios &ndash; from drastic excess-mortality forecasts to statements that broadly linked the unvaccinated with death &ndash; several of which later proved to be significantly exaggerated or simply wrong. Scientists, journalists, and even parts of his own political base repeatedly criticized him for scaling individual risks up into mass panic instead of communicating in a differentiated way.</p>
          <p class="vb-intro">This is not a neutral footnote but the core of what can happen when an SP6 with a Five-wing loses its balance: the originally protective vigilance itself becomes a burden &ndash; not only for the person carrying it, but for an entire society confronted for years with a permanent state of public alarm in which proportionality was visibly lost from view.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Self-Preservation Six</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP6w5 lies in the ability to recognize danger earlier than others and to derive well-founded, fact-based action from it &ndash; an ability that in the first, uncertain months of the pandemic genuinely offered orientation, when hardly any reliable information was available.</p>
          <p class="vb-intro">The shadow of the Six's fateful pattern, <strong>doubt</strong> or <strong>fear</strong>, shows here with almost textbook clarity: vigilance that can no longer regulate itself tips into catastrophizing &ndash; the danger is no longer realistically assessed, but conjured up again and again, ever more urgently, because one's own need for security can never be finally satisfied. This portrait therefore deliberately understands Lauterbach's public role during the pandemic as a cautionary example of where the Six's basic pattern can lead when it lacks any counterbalance &ndash; not as a role model.</p>
        </blockquote>

        <h2 class="vb-section">6. Legacy: The Rabbit That Could No Longer Rein In Its Own Vigilance</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">After the acute phase of the pandemic ended, Lauterbach had to confront, in hindsight, that numerous of his most urgent warnings had not been confirmed &ndash; a loss of trust that accompanied him until the end of his term as Federal Minister of Health in 2025. Where Dostoevsky, Huang Yong Ping, and Alberto Marini (all SP6w5, see their respective portraits) ultimately turned their vigilance into work that served others, what remained of Lauterbach's public image was shaped more by alarmism than by balanced leadership.</p>
          <p class="vb-intro">The rabbit that wanted to calculate danger so thoroughly that it became, in the process, the source of a new, collective unrest of its own &ndash; a case study in how narrow the line can be between well-founded caution and self-generated fear, when the Six finds no footing.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/se6", label:"SE6 – The Rabbit: Subtype profile"},
        {route:"beruehmte-fjodor-dostojewski", label:"Portrait: Fyodor Dostoevsky (SP6w5)"},
        {route:"beruehmte-huang-yong-ping", label:"Portrait: Huang Yong Ping (SP6w5)"},
        {route:"beruehmte-alberto-marini", label:"Portrait: Alberto Marini (SP6w5)"},
      ])}
    </div>
  `);
}

export function kurtGeorgKiesingerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/kurt-georg-kiesinger-portrait.jpg" alt="Kurt Georg Kiesinger – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Kurt Georg Kiesinger</p>
        <p class="krim-portrait-typ">SO1w9 &middot; Social Type 1 with Nine-wing</p>
        <p class="krim-portrait-subtitle">German Federal Chancellor, 1904&ndash;1988 &ndash; Animal correspondence: Goose</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Goose That Mediated Between Two Camps</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>goose</strong> is the animal of the social One — orderly, disciplined, with a fine sense for how a community ought to function, and ready, in conflict, to seek balance over escalation as long as the overall order is preserved. Kurt Georg Kiesinger, born in 1904 in the Swabian town of Ebingen, grew up in a household of two different faiths — a background he later described himself as the source of his pronounced talent for mediation.</p>
          <p class="vb-intro">From 1966 to 1969 he served as Chancellor of the first Grand Coalition of CDU/CSU and SPD — a constellation that required a head of government able to hold together two politically far-apart camps. Kiesinger filled exactly that role, until he became almost entirely identified with it.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social One: Order Through Balance, Not Confrontation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social One (SO1)</strong> projects its inner standards of right and wrong outward and cares about the functioning of the whole — not just its own correct conduct. In Kiesinger this showed not as confrontational self-righteousness, but as concern for the stability of the young Federal Republic itself: under his leadership, the Grand Coalition pushed through a major criminal-law reform, introduced continued wage payment during illness, and passed the fiercely contested Emergency Acts — a body of law that mattered to him in particular because, in his view, it was meant to legally secure the order of the state even in times of crisis.</p>
          <p class="vb-intro">This concern for reliable order, not personal profile, is the core of the One's motivation: the state must function, the rules must hold, regardless of who happens to be governing.</p>
        </blockquote>

        <h2 class="vb-section">3. The Nine-Wing: "King Silvertongue"</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Nine-wing (w9)</strong> turns the One's fidelity to principle into diplomacy rather than confrontation. Kiesinger earned the nickname "König Silberzunge" (King Silvertongue) for his rhetorical smoothness — and was described within the Grand Coalition as a "walking mediation committee": where others might have pushed CDU/CSU and SPD into confrontation, he persistently searched for the formulation both sides could support.</p>
          <p class="vb-intro">This ability was no tactical veneer, but matched his deepest self-understanding: order arises not from forcing one's own position through, but from patiently bringing conflicting interests together into a jointly workable result — a stance a One with a weaker Nine-wing could hardly have sustained.</p>
        </blockquote>

        <h2 class="vb-section">4. The Slap and the Nazi Past</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Kiesinger had joined the NSDAP on March 1, 1933, and from 1940 worked in the broadcasting department of the Foreign Office, from 1942/43 as deputy department head for broadcast propaganda — a position that made him one of the most influential functionaries of Nazi radio propaganda, informed about the persecution of the Jewish population. Until 1968, this past was rarely addressed in public debate.</p>
          <p class="vb-intro">On November 7, 1968, "Nazi hunter" Beate Klarsfeld slapped him at the CDU party convention in Berlin, shouting "Nazi, step down!" — a moment that became a symbol of the 1968 generation's confrontation with the Nazi past of their elders. Kiesinger reacted publicly composed, without escalation — the same Nine-wing steadiness with which he moderated political conflicts became, in this moment, a personal test. But it is exactly here that the flip side shows: the diplomatic calm that was his greatest strength as a politician struck many, in the face of such a morally grave accusation, not as dignity but as evasion rather than genuine reckoning.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO1w9 is the ability to <strong>hold deeply divided camps together through patient, unruffled mediation</strong> — the Grand Coalition of 1966 to 1969 still stands as proof that democratic stability can be organized across party lines even in times of crisis, substantially carried by Kiesinger's talent for mediation.</p>
          <p class="vb-intro">The shadow showed itself precisely where that talent reached its limit: his own, morally grave past could not be smoothed over through mediation. The Nine-wing's tendency to soften conflict rather than confront it openly became his undoing here — his public reticence about his own Nazi past struck an entire generation not as dignity, but as a refusal of genuine accountability.</p>
        </blockquote>

        <h2 class="vb-section">6. The Goose That Stood Between the Camps</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Kurt Georg Kiesinger died in 1988 in Tübingen. His chancellorship remains inseparable from two images: the skillful mediator who held together a historically unprecedented coalition, and the man who had to accept a young journalist's slap on an open stage, because an entire generation was no longer willing to accept his quiet way of dealing with his own past.</p>
          <p class="vb-intro">The goose that stood between the camps and built bridges where others saw only trenches, and that failed precisely where a bridge could not be built but a past had to be acknowledged — that is the lasting, ambivalent image of this particular social One with a Nine-wing.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so1", label:"SO1 – The Goose: Subtype Profile"},
        {route:"beruehmte-helmut-schmidt", label:"Portrait: Helmut Schmidt (SO1w9) – successor as Chancellor, same subtype"},
        {route:"beruehmte-roald-amundsen", label:"Portrait: Roald Amundsen (SO1w9)"},
        {route:"beruehmte-markus-lanz", label:"Portrait: Markus Lanz (SO1w9)"},
        {route:"beruehmte-giorgia-meloni", label:"Portrait: Giorgia Meloni (SO1w9)"},
      ])}
    </div>
  `);
}

export function lindaEvansPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-linda-evans-portrait.jpg" alt="Linda Evans – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Linda Evans</p>
        <p class="krim-portrait-typ">SX3w2 &middot; Sexual Type 3 with Two-wing</p>
        <p class="krim-portrait-subtitle">Actress, born 1942 &ndash; Animal correspondence: Peacock</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Peacock That Built Its Plumage Out of Shyness</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Peacock</strong> is the animal of Sexual Type 3 &ndash; an animal whose success is inseparably tied to personal magnetism and effect. Linda Evans, born Linda Evenstad in 1942 in Hartford, Connecticut, was an extremely shy child. At Hollywood High School, the principal recommended she take acting classes for exactly that reason &ndash; as a way to build any self-confidence at all.</p>
          <p class="vb-intro">Out of that shyness grew one of American television's most recognizable presences: first as Audra Barkley on "The Big Valley" (1965&ndash;1969), then as Krystle Carrington on "Dynasty" (1981&ndash;1989) &ndash; a role that earned her five consecutive Golden Globe nominations. No peacock is born with a full plumage &ndash; it builds one, often exactly where the least of it existed to begin with.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Three: Effect as a Deliberately Built Image</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo's <strong>Sexual Three (SX3)</strong> seeks success through her own magnetism &ndash; not as a natural given, but as an actively shaped image. Evans's Krystle Carrington, with her iconic blonde mane and elaborate Bob Mackie gowns, proved to an entire television audience that a woman past forty could be considered desirable &ndash; at a time when television equated female attractiveness almost exclusively with youth.</p>
          <p class="vb-intro">This deliberate redefinition of attraction beyond a fixed age is pure SX3 maturity: effect isn't left to chance, but understood as something that evolves along with the person, rather than staying bound to a fixed image.</p>
        </blockquote>

        <h2 class="vb-section">3. The Two-wing: Warmth Behind the Glamour</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Two-wing</strong> gives the Sexual Three an additional warmth and care that goes beyond pure effect. In 2011, Evans published her memoir "Recipes for Life" &ndash; a book that deliberately blended memories from her career with recipes tied to meaningful moments in her life. Rather than a distant Hollywood biography, she chose a form built explicitly around shared, domestic experience.</p>
          <p class="vb-intro">Contemporaries consistently described her with terms like elegance, warmth, and quiet strength &ndash; a combination that fits the Two note: her own magnetism doesn't come across as cool and distant, but as accessible and human, even in a role like Krystle Carrington that could easily have been reduced to pure glamour.</p>
        </blockquote>

        <h2 class="vb-section">4. The Deliberate Exit From Hollywood</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">After "Dynasty" ended, Evans deliberately chose not to hold on to the Hollywood life and moved to the Pacific Northwest, where she devoted herself to a phase of self-discovery. This turning away from her own iconic role, right when she was at her most recognizable, shows a willingness not to let her public effect become the sole content of her life.</p>
          <p class="vb-intro">In 2009, she surprised audiences again by competing, at 67, on the British version of "Hell's Kitchen" &ndash; and winning the season under chef Marco Pierre White. A late, unexpected proof that effect and ability can reveal themselves anew even beyond one's most famous role.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX3w2 shows in Evans in that she used her magnetism to break open an aging narrative on television, rather than letting it confine her &ndash; and that she was willing to leave her own glamour status behind in favor of genuine personal growth.</p>
          <p class="vb-intro">The shadow of the Three lies in the risk of tying one's entire worth to a single, publicly perceived role &ndash; a trap Evans actively avoided through her deliberate withdrawal from Hollywood and her later turn toward self-discovery and more everyday pleasures like cooking.</p>
        </blockquote>

        <h2 class="vb-section">6. The Krystle Actress Who Wanted to Be More Than Krystle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Linda Evans's path from a shy teenager to the most recognized television beauty of the 1980s and on to a deliberately chosen life outside the spotlight shows the Sexual Three with a Two-wing in its most mature form: magnetism as a consciously shaped tool, never a prison. The peacock displays its feathers &ndash; but it also knows when to fold them back in, to live its own life.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/sx3", label:"SX3 – The Peacock: Subtype Profile"},
        {route:"beruehmte-brigitte-bardot", label:"Portrait: Brigitte Bardot (SX3w2) – also an actress"},
        {route:"beruehmte-iris-berben", label:"Portrait: Iris Berben (SX3w2)"},
        ])}
      </div>
    </div>
  `);
}

export function marcelReichRanickiPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-marcel-reich-ranicki-portrait.jpg" alt="Marcel Reich-Ranicki – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Marcel Reich-Ranicki</p>
        <p class="krim-portrait-typ">SP1w9 &middot; Social Type 1 with Nine-wing</p>
        <p class="krim-portrait-subtitle">Literary critic, 1920&ndash;2013 &ndash; "Pope of Literature," Das Literarische Quartett &ndash; Animal correspondence: Goose</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Goose</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Goose</strong> is the animal of Social Type 1 &ndash; an animal that gets loud when something is wrong, that knows its formation and defends it forcefully. Marcel Reich-Ranicki, born in 1920 in the Polish town of Włocławek, became known as a self-appointed guardian of German literature &ndash; a man who publicly and with unrestrained vehemence named what, in his view, failed to meet literary quality.</p>
          <p class="vb-intro">As host of "Das Literarische Quartett" (ZDF, 1988&ndash;2001), he tore apart new releases live in front of a mass audience &ndash; in 1995 he demonstratively ripped up a copy of Günter Grass's "Ein weites Feld" on the cover of "Der Spiegel." Not a private quirk, but the public staging of a verdict he considered to apply to the entire reading culture.</p>
        </blockquote>

        <h2 class="vb-section">2. Social Type 1: The Standard for an Entire Field</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Social One (SO1)</strong> carries its striving for perfection not as a private quirk, but as a societal concern. Naranjo called this subtype <em>Non-Adaptability</em>: the SO1 cannot accept mediocrity, because it holds a clear inner image of how something should be &ndash; and that image claims validity for everyone, not only for itself.</p>
          <p class="vb-intro">Reich-Ranicki embodied this in pure form: as the "Pope of Literature," he claimed nothing less than to set the standard for all of contemporary German-language literature. His "Frankfurter Anthologie," curated for decades in the FAZ, and his canon of the most important German novels were not mere recommendation lists, but an attempt to bring binding order to a literary field he saw as directionless.</p>
        </blockquote>

        <h2 class="vb-section">3. The Nine-Wing: The Calm Behind the Sharpness</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Nine-wing (w9)</strong> gives the Social One a quality that lends its judgment additional weight: a certain relaxed, almost genial baseline demeanor that stands in sharp contrast to the harshness of the content. Reich-Ranicki rarely needed to shout to have an effect &ndash; his often calm, deliberate, sometimes even warm way of narrating outside of criticism made his devastating verdicts on books only more effective.</p>
          <p class="vb-intro">This combination of a childlike, round, almost good-natured facial expression and unsparing substantive harshness is typical of the SP1w9: the Nine-wing does not soften the verdict itself, but the manner in which it is delivered &ndash; which many contemporaries found even more disarming than open aggression.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: From Survivor to Pope of Literature</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Reich-Ranicki survived the Warsaw Ghetto together with his wife Teofila before moving to West Germany in 1958. As literary editor of "Die Zeit" and later, from 1973 to 1988, of the "Frankfurter Allgemeine Zeitung," he shaped for decades which authors and works were considered significant. His 1999 autobiography "Mein Leben" became a bestseller and was later adapted for film.</p>
          <p class="vb-intro">In 2008 he declined the German Television Award live on air &ndash; a public, unannounced gesture of protest against what he saw as the declining quality of German television. This exact willingness to uphold his own verdict, if necessary against the entire assembled industry, live and irrevocably, is pure SO1 signature.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Social One with Nine-Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP1w9 shows in Reich-Ranicki in the ability to convey complex literary judgments clearly, comprehensibly, and effectively to the public &ndash; he made literary criticism accessible to a mass audience that had previously had little contact with demanding contemporary literature. His canon shaped generations of readers and German teachers.</p>
          <p class="vb-intro">The shadow of the SO1 lies in the rigidity of its own standard: critics accused him of using his interpretive power to damage careers and narrow literary diversity in favor of his own taste. The fate pattern of the One, <strong>anger</strong>, showed in him not as an impulsive outburst, but as a calculated, publicly staged condemnation &ndash; the goose that knows exactly when and how loudly it must honk to be heard.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so1", label:"SP1 – The Goose: Subtype Profile"},
        {route:"beruehmte-thomas-mann", label:"Portrait: Thomas Mann (SP1w9) – also a literary authority, same subtype"},
        {route:"beruehmte-jordan-peterson", label:"Portrait: Dr. Jordan Peterson (SP1w9)"},
        {route:"beruehmte-friedrich-merz", label:"Portrait: Friedrich Merz (SP1w9)"},
        {route:"beruehmte-helmut-schmidt", label:"Portrait: Helmut Schmidt (SP1w9)"},
      ])}
    </div>
  `);
}

export function sonoyaMizunoPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-sonoya-mizuno-portrait.jpg" alt="Sonoya Mizuno – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Sonoya Mizuno</p>
        <p class="krim-portrait-typ">SO3w4 &middot; Social Type 3 with a Four Wing</p>
        <p class="krim-portrait-subtitle">Actress and Ballet Dancer, born 1986 &ndash; Animal equivalent: Cheetah</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Cheetah That Trained a Decade in the Toughest Pack</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>cheetah</strong> hunts where the competition is fiercest &ndash; not by accident, but because that is the only place real validation can be found. Sonoya Mizuno, born in Tokyo in 1986 to a Japanese father and an English-Argentine mother, began ballet at age nine and was accepted into the Royal Ballet School in London &ndash; one of the most prestigious ballet trainings in the world. She spent ten years there in classical training before dancing professionally with companies such as Semperoper Dresden, Scottish Ballet, and English National Ballet.</p>
          <p class="vb-intro">Her later move into modeling did not lead to just any agency, but directly to the industry's most recognized houses: Saint Laurent, Chanel, Alexander McQueen, Louis Vuitton.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Three: Recognition Only Within the Most Demanding Circles</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">According to Naranjo, the <strong>Social Three (SO3)</strong> seeks status within a group that itself functions as the standard of success &ndash; not just any audience, but the judgment of the best within a given field. This shows up throughout Mizuno's career: rather than trying her hand at just any acting role after her ballet career, she repeatedly worked with acclaimed director Alex Garland &ndash; ›Ex Machina‹ (2014), ›Devs‹ (2020) &ndash; adding roles in ›Crazy Rich Asians‹ and the prestige series ›House of the Dragon‹, where she rose to become Mysaria, the &bdquo;Mistress of Whisperers.&ldquo;</p>
          <p class="vb-intro">Every career step moves within recognized, highly esteemed institutions &ndash; never a detour through less prestigious territory, always the direct path to the circles whose recognition actually counts.</p>
        </blockquote>

        <h2 class="vb-section">3. The Four Wing: The Search for the Missing Half</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Four Wing</strong> gives the Social Three a depth that goes beyond pure status-seeking &ndash; a genuine, often painful reckoning with her own sense of being different. As the only mixed-race girl at her primary school in Somerset, England, Mizuno experienced racism and racist nicknames: &bdquo;I was definitely an outsider,&ldquo; she said of her childhood &ndash; and: &bdquo;It is inherently difficult for me not to resent the part of me that prevents me from getting certain opportunities.&ldquo;</p>
          <p class="vb-intro">She does not process this wound through denial, but through her art itself: she has described acting as &bdquo;a kind of fortuitous exercise in identity formation &ndash; a way of recreating that missing half.&ldquo; Every role becomes an opportunity to recreate herself &ndash; the Four Wing's characteristic search for one's own, unmistakable truth, set on the SO3-typical stage of public success.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: From Kyoko to the Mistress of Whisperers</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Her first major film role as Kyoko in ›Ex Machina‹ came about without an agent &ndash; Alex Garland saw her audition for a different role and immediately recognized she was perfect for this one. Roles followed in Netflix's ›Maniac‹ (2018), the box-office hit ›Crazy Rich Asians‹ (2018), and finally Mysaria in ›House of the Dragon‹ (since 2022) &ndash; a former dancer who rises to become the realm's most powerful spymaster.</p>
          <p class="vb-intro">A striking parallel to her own biography: Mysaria, too, begins as a dancer on the margins of society and fights her way, through cunning and persistence, into a position of power within the realm's most esteemed circles.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Social Three with a Four Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO3w4 shows in Mizuno's ability to draw genuine artistic depth from an early wound &ndash; her roles never feel like mere status symbols, but like serious engagements with identity and belonging.</p>
          <p class="vb-intro">The shadow of the Three shows in the ongoing need to keep proving herself within ever more demanding circles &ndash; as if the early experience of exclusion could only be temporarily eased, never finally resolved, through continued admission into ever more prestigious circles.</p>
        </blockquote>

        <h2 class="vb-section">6. The Dancer Who Reassembled Herself in Every Role</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Sonoya Mizuno's path shows the Social Three with a Four Wing in a particularly vivid form: flawless recognition within the most demanding circles of art, carried by a genuine, never-concealed reckoning with her own sense of difference. The cheetah does not hunt to win &ndash; it hunts to finally become whole.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so3", label:"SO3 &ndash; The Cheetah: Subtype Profile"},
        {route:"beruehmte-karl-lagerfeld", label:"Portrait: Karl Lagerfeld (SO3w4)"},
        {route:"beruehmte-sean-connery", label:"Portrait: Sean Connery (SO3w4)"},
        {route:"beruehmte-bella-thorne", label:"Portrait: Bella Thorne (SO3w4)"},
        ])}
      </div>
    </div>
  `);
}

export function idaPfeifferPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ida-pfeiffer-portrait.jpg" alt="Ida Pfeiffer – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ida Pfeiffer</p>
        <p class="krim-portrait-typ">SX7w6 &middot; Sexual Type 7 with a Six-Wing</p>
        <p class="krim-portrait-subtitle">Austrian world traveler and naturalist, 1797–1858 – Animal correspondence: Chimpanzee</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Chimpanzee Who Waited for Decades</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>chimpanzee</strong> is the animal of the Sexual Seven – curious, ready to merge completely with whatever fascinates it in the moment, driven by a craving for intensity that cannot be permanently suppressed. Ida Pfeiffer, born in Vienna in 1797, described herself as a child as "wild as a boy, and bolder and more forward than my elder brothers" – she preferred boys' clothing and time outdoors to anything considered proper for a girl. After her father's death in 1806, her mother forced her into a conventional role: dresses instead of trousers, piano lessons instead of adventure.</p>
          <p class="vb-intro">At twenty-two she married Mark Anton Pfeiffer, a widowed lawyer twenty-four years her senior – a marriage of security, not passion. When the family fell into poverty, she taught for years to support her children. The chimpanzee that had carried so much of the world within her as a child had to sit completely still for over two decades.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Seven: A Craving That Could No Longer Be Held Back</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sexual Seven (SX7)</strong> lives the Seven's passion – gluttony, the insatiable craving for intense experience – not spread thin, but bundled onto the one object or undertaking that fascinates it in the moment. Pfeiffer herself described a "strong desire to see the world" that she had carried since childhood, fed by the travel literature of her time and her admiration for Alexander von Humboldt.</p>
          <p class="vb-intro">Only at forty-five, once her children were grown and her family duty seemed fulfilled, did she set out – and what followed was no leisurely travel, but an almost unrestrained release of this decades-long pent-up craving: two complete circumnavigations of the globe, across South America, Asia, the Pacific, and Africa, largely alone, under the simplest and often most dangerous conditions. This is exactly the movement of the Sexual Seven: limitation is endured until it releases – and then no measured opening follows, but the full, unrestrained breadth.</p>
        </blockquote>

        <h2 class="vb-section">3. The Six-Wing: Courage That Faced Danger Consciously</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Six-wing</strong> shows up in Pfeiffer not as timidity, but as an alert, often counterphobic readiness to expose herself directly to danger rather than avoid it. She climbed active volcanoes, traveled through politically unstable regions, and on Madagascar was unknowingly drawn into a court conspiracy against Queen Ranavalona I – as a result of which she was expelled from the country and contracted the illness that killed her in Vienna in 1858.</p>
          <p class="vb-intro">This combination of Seven craving and Six vigilance explains why Pfeiffer never came across as a naive adventurer, but as someone acutely aware of the real risks of her travels – and who, precisely for that reason, kept walking into them anyway.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: A Collector Across Every Realm of Nature</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Pfeiffer largely financed her travels herself, in part through the systematic sale of her natural history collections – plants, insects, shells, minerals – to European museums; from Madagascar and Mauritius alone, museums acquired 721 of her specimens, and a species of frog was later named after her. What stands out is the breadth of these collections: no narrow specialization in a single field, but a craving to capture as many different facets of nature as possible at once.</p>
          <p class="vb-intro">Her travel accounts became bestsellers, financed further expeditions, and earned her the support of Humboldt himself, honorary memberships in geographic societies, and the Gold Medal for Science and Art from the King of Prussia – recognition fed by the sheer intensity of her lived craving, not by systematic depth of expertise.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Sexual Seven with a Six-Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX7w6 shows in the fact that Pfeiffer became one of the first women ever to complete two full circumnavigations of the globe, making her a sensation of her time – a life that proved a craving suppressed for decades does not dissolve, but waits.</p>
          <p class="vb-intro">The shadow shows in her disregard for her own health: Pfeiffer traveled under the harshest possible conditions to the very end, repeatedly ignored warning signs, and ultimately died of an illness contracted on precisely the journey those close to her had advised against. The Sexual Seven often knows no upper limit for its own craving – not even once the body itself has long since signaled its limits.</p>
        </blockquote>

        <h2 class="vb-section">6. The World Traveler Who Never Betrayed Her Craving</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Ida Pfeiffer died in 1858 in Vienna from the effects of her final journey – only a few years after becoming an international celebrity as a two-time circumnavigator of the globe. Twenty years of domestic duty had not extinguished the chimpanzee's craving, only deferred it.</p>
          <p class="vb-intro">Her life shows the Sexual Seven with a Six-wing in a particularly striking form: not a careless indulgence of curiosity, but a consciously risked, fully committed craving – lived out to her very last breath.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx7", label:"SX7 – The Chimpanzee: Subtype Profile"},
        {route:"beruehmte-caroline-peters", label:"Portrait: Caroline Peters (SX7w6)"},
        {route:"beruehmte-morgan-freeman", label:"Portrait: Morgan Freeman (SX7w6)"},
        ])}
      </div>
    </div>
  `);
}

export function alainDelonPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-alain-delon-portrait.jpg" alt="Alain Delon – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Alain Delon</p>
        <p class="krim-portrait-typ">SE1w2 &middot; Self-Preservation Type 1 with a Two-Wing</p>
        <p class="krim-portrait-subtitle">Actor, 1935&ndash;2024 – Animal correspondence: Eagle</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Eagle Who Imposed His Own Discipline</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>eagle</strong> is the animal of the Self-Preservation One: no need for applause, only its own unrelenting standard. Alain Delon was born in 1935 in Sceaux, near Paris; his parents divorced when he was four, and he grew up in changing foster families and with relatives, was expelled from several schools, and at seventeen joined the French Navy, serving during the Indochina War.</p>
          <p class="vb-intro">He was discovered at Cannes in 1957, but his real breakthrough came only through strict, self-imposed discipline: Delon was known as extremely demanding of his own work, chose roles with great care, and required the same uncompromising standard from directors as from himself. The eagle did not circle above French cinema's greatest roles by chance – it had long since set its own course.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation One: Perfection as One's Own, Non-Negotiable Standard</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Self-Preservation One (SE1)</strong> carries its perfectionism not outward, but works at its own preparation and integrity. Naranjo called this subtype <em>Worry</em>: the constant inner question of whether one truly lives up to one's own standard. Delon's controlled, often ice-cold screen presence – seen most purely in Jean-Pierre Melville's "Le Samouraï" (1967), where he plays a contract killer with an almost monastic self-discipline – was not mere acting, but reflected his own strictly controlled way of living.</p>
          <p class="vb-intro">He himself repeatedly stressed in interviews how important honesty and a code of honor were to him – values he demanded uncompromisingly of himself and of others. This inner strictness was never a performance: it was the standard by which he measured his entire life and career.</p>
        </blockquote>

        <h2 class="vb-section">3. The Two-Wing: Warmth Within a Close Circle, Not Public Embrace</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Two-wing</strong> opens the inwardly controlled SE1 energy outward – not as broad, public warmth, but as deep loyalty toward a very small, chosen circle. In Delon this showed most clearly in his lifelong, almost unconditional attachment to his dogs: for decades he kept numerous animals, spoke of them publicly with a tenderness he rarely showed toward people, and expressed the wish to be buried alongside them on his own estate.</p>
          <p class="vb-intro">The same structure also showed in his few but very close friendships – such as with his longtime fellow actor Jean-Paul Belmondo, with whom he demonstratively reconciled after decades of silence between them: not broad public warmth, but a loyalty concentrated on a few, carefully chosen bonds.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: Anger as a Demand for Honesty</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the One is called <strong>anger</strong> – in the SE1w2 it is directed above all against dishonesty, betrayal, and half-heartedness, both in himself and in others. Delon was known as someone who did not tolerate weakness or disloyalty within his closest circle and publicly passed clear, often harsh judgments on people who violated this code.</p>
          <p class="vb-intro">In 1968 he became entangled in the so-called Markovic scandal, named after his former bodyguard, who was found murdered – Delon was never charged, but suspicion followed him for decades. He responded not with public defense or self-pity, but with stoic reserve – the same inner discipline he brought to his roles became his only visible reaction to a suspicion he never fully shed.</p>
        </blockquote>

        <h2 class="vb-section">5. The Crisis as a Mirror: Control to the End</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The SE1w2 has a weak spot: it can hide its own vulnerability behind control so consistently that it remains nearly invisible even in the face of illness and old age. After a stroke in 2019 and a later leukemia diagnosis, Delon withdrew increasingly from public life without public complaint – he spent his final years largely in seclusion on his estate in Douchy, surrounded by his dogs.</p>
          <p class="vb-intro">From an Enneagram perspective, this is not mere reserve, but the pattern's logic at work: for the SE1w2, one's own dignity and control over one's own image matter more than the need to publicly demand compassion. He died on August 18, 2024, at the age of 88.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: Controlled Coolness That Showed Warmth Only Within the Closest Circle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Alain Delon remains one of the most defining figures of European cinema – not because of a loud stage presence, but because of a controlled, almost impenetrable presence that influenced generations of actors. Films like "Purple Noon," "Rocco and His Brothers," and "The Leopard" remain reference points for an acting style that turned restraint into its own art form.</p>
          <p class="vb-intro">This is the Self-Preservation One with a Two-wing at its purest: a facade of discipline and control, beneath which lay a deep but strictly guarded affection – visible not to the general public, but only to the few allowed to belong.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se1", label:"SE1 – The Eagle: Subtype Profile"},
        {route:"beruehmte-christoph-waltz", label:"Portrait: Christoph Waltz (SE1w2)"},
        {route:"beruehmte-arnold-schwarzenegger", label:"Portrait: Arnold Schwarzenegger (SE1w2)"},
        {route:"beruehmte-anne-will", label:"Portrait: Anne Will (SE1w2)"},
        {route:"beruehmte-queen-elizabeth-ii", label:"Portrait: Queen Elizabeth II (SE1w9)"},
        {route:"beruehmte-tim-cook", label:"Portrait: Tim Cook (SE1w9)"},
      ])}
    </div>
  `);
}

export function herfriedMuenklerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-herfried-muenkler-portrait.jpg" alt="Herfried Münkler" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Prof. Dr. Herfried Münkler</p>
        <p class="krim-portrait-typ">SO6w7 &middot; Social Type 6 with a Seven-Wing</p>
        <p class="krim-portrait-subtitle">Political Scientist, born 1951 &ndash; Animal correspondence: Meerkat</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Meerkat That Does Not Stay on One Rock</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Herfried Münkler, born in 1951 in Friedberg (Hesse), held the chair for the History of Ideas and Theory of Politics at Berlin's Humboldt University from 1992 to 2018. A glance at his body of work – from <em>The Great War</em> to <em>Empires</em> to <em>The Germans and Their Myths</em> – shows immediately: here stands a meerkat that does not stay on a single high rock, but leaps between subjects the moment a new danger or a new interpretive problem appears anywhere in the field.</p>
          <p class="vb-intro">Münkler is a sought-after talk-show guest, a steady interview partner for major newspapers, and a member of the advisory board of the Federal Academy for Security Policy – a network of media, politics, and scholarship that he engages with visible speed. This exact mix of vigilance and public reach is the signature of the social Six with a seven-wing.</p>
        </blockquote>

        <h2 class="vb-section">2. Duty: Security Through Interpreting the Danger, Not Through Retreat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo called the social Type 6 <strong>Duty</strong> – security arises through service to the community, through providing orientation in confusing times. This is precisely Münkler's life theme: he coined the term "asymmetric warfare" and, in <em>The New Wars</em>, analyzed how violence organizes itself beyond classical interstate conflict – knowledge he did not leave buried in scholarly literature but carried into talk shows, essays, and bestsellers, straight into public debate.</p>
          <p class="vb-intro">Where an SO6w5 like his longtime student Grit Straßenberger seeks security through quiet, systematizing immersion in an academic canon, the SO6w7 seeks security through loudly interpreting the danger for as broad a public as possible – not withdrawn, but in the middle of events.</p>
        </blockquote>

        <h2 class="vb-section">3. The Seven-Wing: Tempo, Range of Subjects, Appetite for Debate</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>seven-wing (w7)</strong> shows in Münkler through the sheer breadth and speed of his work: war theory, the history of empires, German myths, elite research, Machiavelli – topics an SO6 with a strongly developed five-wing would more likely work through one at a time, in great depth, but Münkler processes almost in parallel, in a rapid succession of new books and public statements.</p>
          <p class="vb-intro">His willingness to court controversy publicly – as in the fiercely debated "Münkler-Watch" blog run by his own students in 2015 – also fits this wing: not a retreat into silence, but engagement squarely in public view. Where the five-wing channels energy inward into systematization, the seven-wing directs it outward: into reach, debate, the next urgent subject.</p>
        </blockquote>

        <h2 class="vb-section">4. Teacher and Student: Two Meerkats, Two Forms of Watch</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 2004, Grit Straßenberger earned her doctorate under Münkler at Humboldt University with a dissertation on Hannah Arendt, Michael Walzer, and Martha Nussbaum – magna cum laude. The connection is more than a biographical footnote: both share the same core theme, the question of legitimate versus dangerous authority, yet they live it out in opposite wing colorings. The teacher carries his vigilance outward with tempo and public presence; the student deepens hers quietly within the academic canon.</p>
          <p class="vb-intro">This exact complementarity – one warns publicly and fast, the other examines slowly and thoroughly – reads as a pattern of academic transmission in which the underlying character type (social Six) is preserved, while the mode of expression shifts to the opposite wing across the generation.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Social Six with a Seven-Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO6w7 shows in Münkler's ability to state complex historical and security-political connections so accessibly that they are heard far beyond specialist circles – a sentinel who actually reaches the community.</p>
          <p class="vb-intro">The shadow lies in the risk that his own appetite for interpretation turns into constant public positioning, which occasionally provokes more contradiction than it resolves – as the "Münkler-Watch" controversy showed. Where an SO6w5 may deliberate too long in silence, the SO6w7 risks losing depth of focus by speaking out on too many fronts at once.</p>
        </blockquote>

        <h2 class="vb-section">6. The Meerkat That Placed His Student on the Rock</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Two meerkats, the same core question of legitimate versus dangerous authority – two entirely different ways of living it: Herfried Münkler (SO6w7) keeps watch by carrying what he sees outward with tempo and reach. Grit Straßenberger (SO6w5), his student, keeps watch by digging deep into the academic canon and examining from within it.</p>
          <p class="vb-intro">What remains is a pattern of transmission rarely seen this clearly: a teacher who warns loudly, and a student who continues the very same watch quietly – two answers to the same question of how a community preserves its freedom.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so6", label:"SO6 – The Meerkat: Subtype Profile"},
        {route:"beruehmte-grit-strassenberger", label:"Portrait: Prof. Dr. Grit Straßenberger (SO6w5)"},
        {route:"beruehmte-anne-applebaum", label:"Portrait: Anne Applebaum (SO6w7)"},
        {route:"beruehmte-donata-hopfen", label:"Portrait: Donata Hopfen (SO6w7)"},
      ])}
    </div>
  `);
}

export function mariaCallasPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-maria-callas-portrait.jpg" alt="Maria Callas – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Maria Callas</p>
        <p class="krim-portrait-typ">SP3w2 &middot; Self-Preservation Type 3 with two wing</p>
        <p class="krim-portrait-subtitle">Soprano, 1923–1977 – pioneer of the bel canto revival – Animal equivalent: Raccoon</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The raccoon who rebuilt her own voice</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>raccoon</strong> is the animal of the self-preservation Three – a creature that builds a working system out of little with skillful hands, quietly and persistently, without waiting for favorable starting conditions. Maria Callas was born in 1923 in New York to Greek immigrant parents, raised by a demanding mother who recognized early on that her daughter's voice was something special – and from then on left no doubt that something had to come of it. At thirteen the family moved to Athens, where Callas began training at the conservatory under Elvira de Hidalgo, the foundation of everything she later mastered.</p>
          <p class="vb-intro">As with Enrico Caruso (SP3w2, see <a href="javascript:void(0)" data-route="beruehmte-enrico-caruso">portrait</a>) – also a self-preservation Three with a two wing – there was no question of effortless talent: what later looked like natural greatness was the result of years of often painful technical work on a voice that only became what revolutionized the music world through discipline.</p>
        </blockquote>

        <h2 class="vb-section">2. Countertype: competence over glamour – a figure who rebuilt herself</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the self-preservation Three the <strong>countertype</strong> of the Three: instead of self-promotion, it shows grounded, often painfully honest work on its own substance. In Callas this pattern shows in one of opera history's best-known self-transformations: between 1953 and 1954 she lost roughly 36 kilograms through disciplined, radical persistence – not as a marketing move, but out of an inner demand to master her stage presence as completely as her technique.</p>
          <p class="vb-intro">Her own understanding of success was unmistakably craft-based: she studied the libretto of a role as thoroughly as the score, working out every dramatic detail instead of relying on pure vocal beauty. That is the mature countertype Three: not owning the most brilliant natural voice of her era, but becoming the defining singer of the century through work on technique and interpretation.</p>
        </blockquote>

        <h2 class="vb-section">3. The two wing: devotion to teacher, role, and audience</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>two wing (w2)</strong> gives the self-preservation Three a deep need for personal connection – not public admiration, but real closeness to a few central people and to the role itself. Callas's bond with her teacher Elvira de Hidalgo remained formative throughout her life; the bel canto technique she learned there carried her through her entire career. Her later, publicly scrutinized relationship with Aristotle Onassis shows the same pattern: the Three's need for genuine, exclusive attention rather than the diffuse admiration of a crowd.</p>
          <p class="vb-intro">This devotion also showed in her work itself: colleagues and directors described how completely she gave herself to every part, until singer and role were barely distinguishable – an almost personal relationship to the characters she embodied, not mere technical interpretation.</p>
        </blockquote>

        <h2 class="vb-section">4. The actual achievement: the bel canto revival</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Callas is considered the most influential soprano of the 20th century because she revived a singing tradition that had been neglected for roughly 75 years: early Romantic bel canto. Works by Bellini (<em>Norma</em>, <em>La sonnambula</em>), Donizetti (<em>Anna Bolena</em>, <em>Lucia di Lammermoor</em>), and Rossini, nearly vanished from the standard repertoire, she brought back to the world's great stages through a combination of technical agility, enormous vocal range, and dramatic intensity – permanently changing what was expected of an opera diva: no longer beautiful sound alone, but the full fusion of singing and dramatic truthfulness.</p>
          <p class="vb-intro">This achievement lies beyond any Enneagram interpretation – pure musical and dramatic pioneering work. What the subtype framework additionally reveals is how much this achievement grew out of persistent technical work rather than effortless talent, as the public myth often suggested.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and shadow of the self-preservation Three</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In its light, the SP3w2 shows up in Callas as an artist who placed real substance over mere shine – developing her own voice, her own body, her own interpretation year after year with discipline, rather than relying on natural gift.</p>
          <p class="vb-intro">The shadow of the Three is <strong>vanity</strong> – not self-infatuation, but confusing one's own worth with the performance delivered. The media's exaggeration into the untouchable "diva" – the rivalry with Renata Tebaldi, publicly fought conflicts – often stood in sharp contrast to a woman who was privately under enormous pressure to maintain her own technical perfection. The radical weight loss that initially boosted her career later, in the assessment of many voice experts, weakened the physical basis of her voice – control over the outward image, bought with the very substance she meant to protect.</p>
        </blockquote>

        <h2 class="vb-section">6. The path to healing: from proving to genuine worth</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Three's path to healing leads from the question <em>Am I only worthwhile when I brilliantly succeed?</em> to the realization <em>My worth does not lie in the performance, but in myself.</em> Callas's career reads as an impressive, but also tragic, approach to that question: an artist who brought back an entire operatic tradition through sheer work, whose voice began to suffer at exactly the point where outward control became more important than inner substance.</p>
          <p class="vb-intro">That she held on to her own perfection to the end, even when her voice no longer fully carried her, shows the unresolved side of this pattern. Her lasting legacy – an entire generation of singers who rediscovered bel canto because of her – is at the same time proof that the raccoon's hard, disciplined work ultimately holds, even when the path there exhausted her.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protection patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/se3", label:"SE3 – The Raccoon: subtype profile"},
        {route:"beruehmte-enrico-caruso", label:"Portrait: Enrico Caruso (SP3w2)"},
      ])}
    </div>
  `);
}

export function vincenzoCalifanoPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-vincenzo-califano-portrait.jpg" alt="Vincenzo Califano" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Vincenzo Califano</p>
        <p class="krim-portrait-typ">SP3w2 &middot; Self-Preservation Type 3 with Two-wing</p>
        <p class="krim-portrait-subtitle">Spiritual teacher (Advaita/Direct Path), b. unknown, Zurich &ndash; Animal correspondence: Raccoon</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Raccoon Who Built a Business Into a Teaching</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Vincenzo Califano lives and teaches in Zurich. By his own account, he had an experience in his youth "for which there was no explanation" – a sudden break in ordinary experience. In parallel, he lived a completely ordinary life for years: he worked, took on responsibility, ran a business. Only after years of intensive seeking – meditation, studying various methods – came the actual turning point: not an event brought about by effort, but the sudden falling away of the seeker itself.</p>
          <p class="vb-intro">The <strong>raccoon</strong> is the animal of the self-preservation Three – unassuming, adaptable, quietly skillful. That's exactly what describes Califano's path: no spectacular appearance as an enlightened master, but someone who, out of a sober entrepreneurial biography, built a structured, functioning teaching practice – satsangs in several cities, a weekly YouTube channel, his own book, fixed programs for one-on-one guidance.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Three: Structure Instead of Spiritual Theater</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation Three (SP3)</strong> is considered the Three's countertype: instead of relying on stage presence, it directs its energy toward competence, construction, and functioning structures. In Califano this shows in the fact that his spiritual teaching isn't organized as loose, informal wandering, but as a clearly structured offering: an "8-week 1:1 accompaniment," individual sessions, a fixed membership ("Inner Circle"), bookable day events with a specific date and countdown on his own website.</p>
          <p class="vb-intro">That's pure SP3 logic, applied to a field that traditionally resists structure: even the teaching of the radical dissolution of the seeking self gets translated by Califano into a reliable, repeatable system – competence and consistency as the foundation, not charisma as an end in itself.</p>
        </blockquote>

        <h2 class="vb-section">3. The Two-Wing: Accompaniment as the Actual Drive</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Two-wing (w2)</strong> gives the self-preservation Three its genuine impulse toward personal warmth. Califano describes his current work explicitly in this language: "I accompany people who are at a similar point… I open a space." This isn't detached lecturing on abstract concepts, but deliberately personal accompaniment – reinforced by regular live chats and Q&A formats in which he responds directly to individual people and their concrete questions.</p>
          <p class="vb-intro">This same warmth explains why he's listed in the German-speaking nondual-teacher scene alongside established names like Gangaji, Mooji, or Byron Katie, even though his reach is considerably smaller: it isn't scale that makes the difference, but the palpable, direct attention to the individual within a space deliberately opened for that purpose.</p>
        </blockquote>

        <h2 class="vb-section">4. The Actual Achievement: An Entrepreneurial Biography Translated Into a Sustainable Teaching Practice</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What distinguishes Califano from many other teachers in the same field is the consistency with which he applies his earlier entrepreneurial experience to his own teaching practice. Since at least 2021 he has regularly held satsangs (including in Munich and Cologne), publishes new content weekly on YouTube, and is listed in established directories of the German-speaking spirituality scene such as Jetzt-TV – alongside teachers who have been established in the field for decades.</p>
          <p class="vb-intro">In his book ›Vom einfachen Finden des Glücks – Über den Sinn des Lebens‹ (›On Simply Finding Happiness – On the Meaning of Life‹), he translates his own experience into accessible, everyday language – without the esoteric jargon typical of many teachers in the field. This translation work, from an abstract awakening experience into a concrete, bookable format, is the actual professional achievement: clarity and structure as a deliberate choice, not a compromise.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Self-Preservation Three with Two-Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP3w2 shows in the fact that Califano turns complex, often inaccessibly worded nondual teachings into a concrete, reliable offering that people can actually reach and use – structure in service of genuine care, not as an end in itself.</p>
          <p class="vb-intro">The Three's fatal flaw is <strong>vanity / deceit</strong> – subtler in the SP3 than in the other Three subtypes: the message "There is nothing to find, no one who needs to arrive" itself becomes a marketable, paid product – individual sessions, a membership, ticketed day events. This tension between a radical message of non-necessity and a clearly structured business built around exactly that message is not unique to Califano in this scene, but deserves particular attention here because it is so unmistakably entrepreneurially organized.</p>
        </blockquote>

        <h2 class="vb-section">6. The Healing Path: From Building to Being</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Three's healing path leads from the question <em>What have I achieved?</em> to the insight <em>I am – beyond all achievement.</em> Califano teaches exactly this as the core of his own message: "It's not about creating a better life. It's about recognizing what is already complete." Notably, he himself states that identification with the seeking itself was the actual obstacle – a very direct, almost literal description of what the Three's healing path is meant to lead away from: fixation on achievement.</p>
          <p class="vb-intro">A revealing comparison within the same subtype is <a href="javascript:void(0)" data-route="beruehmte-sadhguru">Sadhguru</a> (SP3w2): he too shows the same combination of entrepreneurial construction of a spiritual institution and genuine, personally held care for the people who follow him – just scaled many times larger. More in the <a href="javascript:void(0)" data-route="beruehmte-sadhguru">portrait of Sadhguru</a>.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/se3", label:"SE3 – The Raccoon: Subtype Profile"},
        {route:"beruehmte-sadhguru", label:"Portrait: Sadhguru (SP3w2)"},
        {route:"beruehmte-joseph-haydn", label:"Portrait: Joseph Haydn (SP3w2)"},
        {route:"beruehmte-susan-link", label:"Portrait: Susan Link (SP3w2)"},
      ])}
    </div>
  `);
}

export function henryShukmanPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-henry-shukman-portrait.jpg" alt="Henry Shukman – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Henry Shukman</p>
        <p class="krim-portrait-typ">SO7w6 &middot; Social Type 7 with Six-wing</p>
        <p class="krim-portrait-subtitle">Zen teacher, poet, and author, b. 1962 in Oxford &ndash; Animal correspondence: Beaver</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Beaver Who Searched Before It Built</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>beaver</strong> is the animal of the social Seven: alert, constantly in motion — but not an animal that drifts, one that builds. Henry Shukman was born in 1962 in Oxford to two university professors, but grew up with chronic eczema, anxiety, and depression that accompanied him from childhood. At nineteen he had a spontaneous spiritual awakening — an event he himself only gradually learned to understand and integrate over decades.</p>
          <p class="vb-intro">Before becoming a Zen teacher, Shukman worked as a trombonist, a trawlerman, and a travel writer — three completely different life paths he pursued one after another with full commitment. His first book, "Sons of the Moon" (1989), described a journey through Bolivia's most remote regions; it was followed by "Travels with My Trombone," about a year as a calypso and salsa musician in the Caribbean and Colombia, and "Savage Pilgrims," a search for traces of D. H. Lawrence in New Mexico — the very state where, decades later, Shukman would find his spiritual home.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Seven: Variety in Service of a Larger Cause</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social Seven (SO7)</strong> is the countertype of the Seven — unlike the self-preservation or sexual Seven, it doesn't live its gluttony as personal pleasure, but transforms it into duty and service to a greater whole. In Shukman this shows in an almost textbook transition: the restless search of his early years — music, seafaring, travel writing, novels, poems — became, over decades, a single, disciplined training within a traditional Zen lineage, culminating in 2010 with his official appointment as a teacher by Yamada Roshi.</p>
          <p class="vb-intro">In 2012 he became guiding teacher of Mountain Cloud Zen Center in Santa Fe, building it over eleven years into an established spiritual center. In parallel, he co-founded "The Way," a meditation app that makes traditional Zen practice accessible to a global, digital audience — the same variety of expression as in his travel-writing years, but now consistently aimed at a single goal: opening a path to healing for others.</p>
        </blockquote>

        <h2 class="vb-section">3. Craft Substance: Award-Winning Poetry Before the Spiritual Path</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Long before Shukman became known as a Zen teacher, he had already established himself as a serious writer: his poetry debut, "In Dr No's Garden" (1995), won the Jerwood Aldeburgh First Collection Prize, one of Britain's most significant awards for debut poetry collections. His fiction won an Arts Council award and was shortlisted for the prestigious O. Henry Award — not a side activity of a spiritual teacher, but an independent literary career with professional recognition.</p>
          <p class="vb-intro">This combination of poetic precision and spiritual practice is no coincidence: Shukman's early love of Chinese Zen poetry was one of the paths that led him to meditation in the first place. His 2019 memoir, "One Blade of Grass," explicitly braids both strands together — literary craft in service of describing an inner path to healing.</p>
        </blockquote>

        <h2 class="vb-section">4. The Six-Wing: Vigilance and Loyalty to a Transmitted Lineage</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Six-wing (w6)</strong> brings an element of loyalty and caution against premature self-authorization into the enthusiastic SO7 energy. Rather than immediately declaring his spontaneous awakening at nineteen his own teaching authority, Shukman placed himself under the guidance of several recognized teachers over decades — Roshis John Gaynor, Joan Rieck, Ruben Habito, and finally Yamada Roshi, international abbot of the Sanbo Zen lineage — before being officially authorized himself in 2010.</p>
          <p class="vb-intro">This patience — submitting to a structure passed down across generations rather than immediately proclaiming his own, immediate experience — shows the w6 vigilance in its purest form: trust is placed not in one's own intuition alone, but in a tested, reliable lineage.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Social Seven with Six-Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO7w6 shows in not impulsively marketing an early, overwhelming experience, but translating it over decades into a robust teaching accessible to many people — from a single personal experience to a scalable app with global reach.</p>
          <p class="vb-intro">The Seven's passion is <strong>gluttony</strong> — in the social Seven it shows up as a restless collecting of new roles and forms of expression. Shukman's path from trombonist to trawlerman to travel writer to Zen teacher could also be read as a flight from his own childhood-acquired anxiety and depression — a restless trying-on of new identities until one of them carried deep enough to actually heal the underlying pain instead of merely covering it up.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: From Flight to Teaching</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Henry Shukman transformed a childhood full of physical and emotional hardship, along with an early, overwhelming spiritual experience, over decades into a structured, verifiable teaching — accessible both in the traditional retreat format and via a modern app reaching a digital audience of millions.</p>
          <p class="vb-intro">A revealing comparison is <a href="javascript:void(0)" data-route="beruehmte-franz-von-assisi">Francis of Assisi</a> (SO7w6) — he too transformed an early existential crisis over years into a lasting, widely effective spiritual institution. More in the <a href="javascript:void(0)" data-route="beruehmte-franz-von-assisi">portrait of Francis of Assisi</a>.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
        </blockquote>

      </div>
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/so7", label:"SO7 – The Beaver: Subtype Profile"},
        {route:"lebensmusterkompass/so7", label:"Life Pattern Compass: SO7 – Beaver"},
        {route:"beruehmte-franz-von-assisi", label:"Portrait: Francis of Assisi (SO7w6)"},
        {route:"beruehmte-sigourney-weaver", label:"Portrait: Sigourney Weaver (SO7w6)"},
        {route:"beruehmte-billy-bob-thornton", label:"Portrait: Billy Bob Thornton (SO7w6)"},
      ])}
    </div>
  `);
}

export function harrisonFordPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-harrison-ford-portrait.jpg" alt="Harrison Ford" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Harrison Ford</p>
        <p class="krim-portrait-typ">SE1w9 &middot; Self-Preservation Type 1 with a Nine Wing</p>
        <p class="krim-portrait-subtitle">b. 1942 – Han Solo, Indiana Jones, licensed pilot with real-life rescue missions – Animal correspondence: Eagle</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Eagle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>eagle</strong> is the animal of the self-preservation One – an animal whose standing comes not from spectacle, but from the plain fact that it has fully mastered its craft before moving on to the next level. Harrison Ford, born in Chicago in 1942, spent nearly a decade as a professional carpenter after early unsuccessful years as an actor, supporting his family – a craft he practiced with the same care he would later bring to acting, rather than treating it as a mere stopgap.</p>
          <p class="vb-intro">A carpentry job of all things became the turning point: while building office cabinets for George Lucas during the making of "American Graffiti," Ford caught the director's attention – a coincidence that could only turn into a breakthrough because Ford genuinely mastered his craft over years, rather than just playing a role while waiting for the big break.</p>
        </blockquote>

        <h2 class="vb-section">2. The actual achievement: an instinct for real dialogue, real flying</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">It would fall short to attribute Ford's success to charisma alone. His actual acting talent lies in an unerring sense for when written dialogue sounds unnatural – made famous by his line to George Lucas during the filming of "Star Wars": "You can type this shit, George, but you sure can't say it." This ability to reshape lines so they sound like real, spontaneous speech rather than script still defines his distinctive, laconic style as Han Solo and Indiana Jones to this day.</p>
          <p class="vb-intro">In parallel, Ford has been a licensed private pilot since the 1990s who has flown several real rescue missions with his own helicopter and aircraft – including, in 2000, the rescue of a missing Boy Scout in the mountains of Wyoming. Not a publicity stunt, but a genuinely acquired, life-saving skill that shows his love of precise craft reaches far beyond film sets.</p>
        </blockquote>

        <h2 class="vb-section">3. The self-preservation One: craft as a quiet standard</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation One (SE1)</strong> directs its perfectionism not primarily at correcting the world, but first inward: at its own preparation, its own craft, its own integrity. Naranjo called this subtype <em>Worry</em> – the constant, productive concern with truly meeting one's own standard. In Ford this showed during his nearly decade-long carpentry years, in which he never worked to a mediocre standard, even though money was tight and his acting career had stalled.</p>
          <p class="vb-intro">This attitude carried directly into his later behavior on set: Ford is known as an actor who insists on tangible, real stunts over green-screen tricks, breaking his own ankle at age 72 during the filming of "Star Wars: The Force Awakens" in 2015 because he wanted to perform a stunt himself – uncompromising standards for himself, not just for others.</p>
        </blockquote>

        <h2 class="vb-section">4. The Nine wing: withdrawal instead of media circus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Nine wing (w9)</strong> gives the self-preservation One the ability to calmly tend several life domains side by side, rather than concentrating on a single publicly staged area. Ford has been known for decades as one of Hollywood's most tight-lipped interview subjects – terse, impatient with tabloid questions, visibly uncomfortable with the usual promotional circus the job entails.</p>
          <p class="vb-intro">Rather than using public interest for self-promotion, he quietly distributes his energy across woodworking in his own shop, flying, and decades of substantial engagement as Vice Chair of Conservation International – concrete conservation work rather than mere celebrity patronage. The same integrating composure stands out in his fellow SE1w9s Jürgen Klinsmann and Dieter Lange: tending several, often unrelated worlds side by side, without pitting one against the other.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and shadow of the self-preservation One</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SE1w9 shows in Ford's ability to hold onto craft integrity across decades – whether building furniture, fine-tuning dialogue, or at the controls of a rescue helicopter – without fame ever diluting that standard. The ten quiet years as a carpenter were not lost time, but the foundation everything else later stood on.</p>
          <p class="vb-intro">The shadow shows in the flip side of that withdrawal: Ford's notorious terseness with the press is read by many as arrogance or unapproachability, even though it stems more from genuine discomfort with surface-level self-presentation than from contempt – the quiet urgency to wrap up an interview as fast as possible and get back to the actual work.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from clinical practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se1", label:"SP1 – The Worried One: Subtype Profile"},
        {route:"beruehmte-juergen-klinsmann", label:"Portrait: Jürgen Klinsmann (SP1w9)"},
        {route:"beruehmte-dieter-lange", label:"Portrait: Dieter Lange (SP1w9)"},
        {route:"beruehmte-robert-de-niro", label:"Portrait: Robert De Niro (SP1w9)"},
      ])}
    </div>
  `);
}
