import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft, animalResearcherMatchBlock } from "../../bundle.js";

export function ingmarBergmanPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ingmar-bergman-portrait.jpg" alt="Ingmar Bergman" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ingmar Bergman</p>
        <p class="krim-portrait-typ">SP4w5 · Self-Preservation Type 4 with a Five-Wing</p>
        <p class="krim-portrait-subtitle">Swedish director, 1918–2007 – "The Seventh Seal," "Persona" – Animal correspondence: Dove</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The dove who filmed her own childhood drama</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Ingmar Bergman was born in 1918 in Uppsala, the son of a strict Lutheran pastor who later became chaplain to the Swedish royal family. His father punished him with caning and locked him in dark closets – Bergman later described himself as a child who was "shut in, in every way," and he stammered for years. At 17 he hit his father and left home; afterward he barely spoke to his parents for decades. His grandmother secretly introduced him to the cinema, against his father's wishes.</p>
          <p class="vb-intro">The <strong>dove</strong> is the animal of the self-preservation Four – gentle, vulnerable, with a quiet tenacity that does not put its own suffering on display but transforms it into a sustainable form. Bergman did exactly that with unmatched consistency: his late work "Fanny and Alexander" (1982) directly and explicitly processes his own childhood, and many of his middle-period works – guilt, family estrangement, the search for a silent God – trace directly back to his own upbringing.</p>
        </blockquote>

        <h2 class="vb-section">2. The self-preservation Four: one's own suffering as cinematic material</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation Four (SP4)</strong> processes inner suffering not through public display but through quiet, often decades-long persistence – the processing happens in the work itself. Bergman gave few interviews and rarely spoke publicly about his private life; instead, as he himself put it, he let his work speak for itself. His films – "The Seventh Seal," "Wild Strawberries," the so-called "Silence of God trilogy" – circle almost continuously around guilt, mortality, and his own, very personal despair over faith and family, not abstract, impersonal themes.</p>
          <p class="vb-intro">Even the angry outbursts on set that contemporaries reported, he himself recognized as rooted in his relationship with his father – a direct, unfiltered transfer of his own unresolved family conflict into his work, rather than a cleanly distanced professional facade.</p>
        </blockquote>

        <h2 class="vb-section">3. The five-wing: withdrawal as a condition for the work</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>five-wing (w5)</strong> gives the self-preservation Four an added analytical distance – the ability not just to live through its own emotional material but to disciplinedly systematize it before it steps outward. In Bergman this shows in his retreat to the remote Baltic island of Fårö, where he worked in deliberately sought solitude, far from the public and the social machinery of the industry.</p>
          <p class="vb-intro">The same five-wing shows in his extreme control over his own production process and in a very small, decades-stable circle of close collaborators – cinematographer Sven Nykvist, actors Max von Sydow, Liv Ullmann, and Bibi Andersson – rather than a broad, shifting circle. Knowledge and trust were not generously distributed with him, but invested over years in a few carefully chosen relationships.</p>
        </blockquote>

        <h2 class="vb-section">4. The actual achievement: the close-up as a psychological instrument</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Bergman's concrete contribution to film history lies in his uncompromising use of the close-up of the human face. Together with cinematographers Gunnar Fischer and later Sven Nykvist, he developed a visual language that made the face – every smallest movement, every hesitation – the actual setting of the film. In "Persona" (1966) this technique reached a peak that lastingly changed how faces are filmed in cinema.</p>
          <p class="vb-intro">This innovation was no mere stylistic flourish, but a consistent technical realization of his actual concern: psychological truth was not to be conveyed through plot or dialogue, but made directly visible in the face. Directors such as John Cassavetes, Jean-Luc Godard, Andrei Tarkovsky, and Sergio Leone later took up this technique – a rare case in which a radically personal artistic obsession became a technical innovation that changed the entire international language of film.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and shadow of the self-preservation Four with a five-wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP4w5 shows in Bergman's ability to turn his own, often painful family inheritance into a body of work of extraordinary psychological precision that is still considered one of the most significant careers in film history. Across more than fifty years, the same consistent, uncompromising honesty toward his own inner life remained recognizable.</p>
          <p class="vb-intro">The Four's besetting sin is <strong>envy</strong> – the feeling that others have been given something essential that one lacks oneself. In Bergman the shadow showed in repeated angry outbursts on set and in a series of intense, usually time-limited romantic relationships with his leading actresses, often directly interwoven with the respective film collaboration – an intensity that was not always easy for those involved to bear.</p>
        </blockquote>

        <h2 class="vb-section">6. The path to healing: from the locked door to the opened memory</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Four's path to healing leads from the conviction <em>I am missing something essential that others have</em> to the insight <em>I am complete just as I am.</em> In Bergman this movement can be traced in his late work: "Fanny and Alexander," his self-declared cinematic legacy, returns once more to his own childhood – but this time not as unresolved pain, but with a more reconciled, warmer narrative stance than in his earlier, darker works.</p>
          <p class="vb-intro">It is notable that in his final decades Bergman also renewed contact with some of his nine children, after earlier relationships had been marked by exactly the distance he himself had experienced as a child from his father – a late, if incomplete, break with his own family pattern.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se4", label:"SE4 – The Dove: Subtype Profile"},
        {route:"beruehmte-virginia-woolf", label:"Portrait: Virginia Woolf (SP4w5)"},
        {route:"beruehmte-vincent-van-gogh", label:"Portrait: Vincent van Gogh (SP4w5)"},
        {route:"beruehmte-vanessa-goecking", label:"Portrait: Vanessa Göcking (SP4w5)"},
      ])}
    </div>
  `);
}

export function aliciaKeysPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-alicia-keys-portrait.jpg" alt="Alicia Keys – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Alicia Keys</p>
        <p class="krim-portrait-typ">SO2w3 &middot; Social Type 2 with Three-wing</p>
        <p class="krim-portrait-subtitle">American singer &amp; pianist, born 1981 in New York &ndash; Animal correspondence: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Golden Retriever</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Golden Retriever</strong> is the animal of the social Two &ndash; an animal for whom success only feels complete once it is shared with others. From the start, Alicia Keys combined exceptional musical talent with the need to put that talent in service of something larger than her own career.</p>
          <p class="vb-intro">Alicia Augello Cook was born on January 25, 1981, in New York City, the daughter of an African American father and an Italian American mother. At age twelve she was admitted to New York's Professional Performing Arts School, graduated in 1996 two years early as valedictorian, and dropped out of college after just a month to pursue her music career under a record deal she had already signed at fifteen.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Two: Musical Success as a Foundation for Social Engagement</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the <strong>social Two (SO2)</strong> <em>Ambition</em>: it doesn't just want to be talented, it wants to make that talent visible and effective for others. Her first three albums all reached number one on the Billboard 200, alongside numerous Grammy Awards and millions of records sold &ndash; an exceptional commercial success that, for Keys, never remained an end in itself.</p>
          <p class="vb-intro">In 2003, she co-founded the organization Keep a Child Alive with Leigh Blake, dedicated to the treatment and support of children and families affected by HIV. As co-founder and global spokeswoman for the organization, she has since traveled regularly to Africa and India to draw attention to the situation of affected families &ndash; the SO2 at its clearest: musical fame as a platform that benefits an entire, often overlooked group of people.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: From Child Prodigy to Multiple Grammy Winner</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the social Two the drive to turn talent into visible, measurable success. Keys' path from classically trained piano prodigy to internationally successful R&B and soul artist with multiple number-one albums puts this drive on full display: talent is not nurtured in private, but purposefully translated into a publicly visible, multiply awarded career.</p>
          <p class="vb-intro">Alongside her music career, she built an acting career, continually expanding the stages on which she was visible. The Three-wing ensures that success doesn't happen by accident, but is actively pursued and built up &ndash; as a means of reaching more people and doing more for others.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Social Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO2w3 lies in the ability not to manage early, exceptional success in pure self-focus, but to consistently pair it with engagement that reaches beyond one's own career. That Keys has traveled regularly to Africa and India for more than two decades to advocate for Keep a Child Alive shows a steadiness that goes beyond symbolic engagement.</p>
          <p class="vb-intro">The fate pattern of the Two is <strong>pride</strong> &ndash; the conviction of being indispensable for the wellbeing of others. In the SO2w3, this can combine with a need to keep confirming one's own worth through new, visible achievements and public engagement &ndash; a combination that can lead to exceptional impact, without ever reaching a point where enough feels like enough.</p>
        </blockquote>

        <h2 class="vb-section">5. The Work: From the Professional Performing Arts School to a Global Voice Against HIV</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">From her first piano lessons through her early record deal at fifteen, to three consecutive number-one albums and the founding of an internationally active aid organization, a single thread runs through Keys' work: musical talent that was oriented, from the start, toward impact beyond herself.</p>
          <p class="vb-intro">The Golden Retriever shares its gifts rather than keeping them to itself. Alicia Keys' path from teenage musical prodigy to a global spokeswoman for families affected by HIV distills this drive into a single image: success as a tool that allows for care reaching far more people than any single career ever could on its own.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so2", label:"SO2 – The Golden Retriever: Subtype Profile"},
        {route:"beruehmte-usher", label:"Portrait: Usher (SO2w3)"},
        {route:"beruehmte-will-smith", label:"Portrait: Will Smith (SO2w3)"},
      ])}
    </div>
  `);
}

export function ashtonKutcherPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ashton-kutcher-portrait.jpg" alt="Ashton Kutcher – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ashton Kutcher</p>
        <p class="krim-portrait-typ">SO2w3 &middot; Social Type 2 with Three-wing</p>
        <p class="krim-portrait-subtitle">American actor &amp; entrepreneur, born 1978 in Cedar Rapids, Iowa &ndash; Animal correspondence: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Golden Retriever</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Golden Retriever</strong> is the animal of the social Two &ndash; an animal that wants to use its popularity to do good for as many people as possible. From the start, Ashton Kutcher combined acting success with an interest in technology and social engagement &ndash; three stages he tried to occupy all at once.</p>
          <p class="vb-intro">Christopher Ashton Kutcher was born on February 7, 1978, in Cedar Rapids, Iowa, and began studying biochemical engineering at the University of Iowa before dropping out in favor of an acting career. His breakthrough came with the sitcom <em>That '70s Show</em> &ndash; a springboard he consistently used in the years that followed to keep expanding his reach.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Two: Reach in Service of a Cause</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the <strong>social Two (SO2)</strong> <em>Ambition</em>: it doesn't just want success, it wants to put that success to use for a larger cause. More than a decade ago, Kutcher saw a TV special on the atrocities of child sex trafficking and, as he put it himself, couldn't look away. In 2009, he co-founded with Demi Moore the organization that later became known as Thorn.</p>
          <p class="vb-intro">Thorn developed software called <em>Spotlight</em>, now used by numerous police departments to uncover human trafficking online &ndash; a technology-driven approach that directly connected Kutcher's tech-industry background with his social engagement. The social Two doesn't deploy its public reach at random, but deliberately, for a cause that reaches far beyond its own career.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: From Sitcom Star to Tech Investor</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the social Two the drive to unlock ever new, visible achievements from a platform. Alongside his acting career, Kutcher built a second, equally public career as an early investor in tech companies like Airbnb and Uber &ndash; a change of field that channeled the same ambition in a new direction.</p>
          <p class="vb-intro">Even the format concept of the hidden-camera show <em>Punk'd</em> shows this drive: attention and visibility are not accepted as a byproduct, but actively shaped and translated into ever new formats. The Three-wing ensures that popularity continually generates new, measurable fields of impact.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Social Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO2w3 lies in the ability to turn a single, shattering TV segment into, over years, an effective, technology-driven organization against child trafficking that is actually used by police departments. This is care that doesn't settle for symbolism, but builds concrete tools.</p>
          <p class="vb-intro">The fate pattern of the Two is <strong>pride</strong> &ndash; the conviction of being indispensable for the wellbeing of others, combined with the danger of placing personal loyalty to those close to oneself above other principles. In 2023, Kutcher resigned as board chair of Thorn after writing a character letter in support of his convicted former co-star Danny Masterson &ndash; an error in judgment, as he himself admitted, that threatened to overshadow his own work for the organization. This exact tension between personal loyalty and a larger mission is one of the hardest tests for the SO2w3.</p>
        </blockquote>

        <h2 class="vb-section">5. The Work: From Sitcom to "Digital Defender" of Children</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">From <em>That '70s Show</em> through early technology investments to co-founding Thorn, described as a "digital defender of children," a single thread runs through Kutcher's public life: visibility repeatedly translated into new, concrete fields of action.</p>
          <p class="vb-intro">The Golden Retriever puts its energy where it's needed &ndash; even when the path there isn't always straight. Kutcher's path from television star to co-founder of a globally active organization against child trafficking shows this drive as clearly as its cost: public impact that also makes personal misjudgments visible.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so2", label:"SO2 – The Golden Retriever: Subtype Profile"},
        {route:"beruehmte-alicia-keys", label:"Portrait: Alicia Keys (SO2w3)"},
        {route:"beruehmte-usher", label:"Portrait: Usher (SO2w3)"},
        {route:"krankheitsportraets-ashton-kutcher", label:"Illness Portrait: Ashton Kutcher (SO2w3) – rare autoimmune disease"},
      ])}
    </div>
  `);
}

export function brigitteBardotPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-brigitte-bardot-portrait.jpg" alt="Brigitte Bardot" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Brigitte Bardot</p>
        <p class="krim-portrait-typ">SX3w2 &middot; Sexual Type 3 with Two-wing</p>
        <p class="krim-portrait-subtitle">Actress &amp; Animal Rights Activist, 1934&ndash;2025 &ndash; Animal correspondence: Peacock</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Peacock</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Peacock</strong> is the animal of the sexual Three &ndash; an animal that does not unfurl its plumage out of calculation, but because splendor is its very nature. Not an animal of the stage in the broad sense, but one of immediate impact: whoever encounters a peacock cannot escape its presence. That is not a strategy &ndash; it is expression.</p>
          <p class="vb-intro">The French actress Brigitte Bardot became an international icon overnight with <em>And God Created Woman</em> (1956) &ndash; and shook the bourgeois morality of her time. Not a scandal about her person alone, but the sheer impact of her presence on screen changed how femininity could be portrayed in European cinema. The peacock that transforms an entire audience simply by being what it is.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Three: Magnetism as Life&#39;s Theme</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sexual Three (SX3)</strong> makes personal attraction its life&#39;s work &ndash; not success before the masses as with the social Three, but immediate, physical, direct resonance with the person in front of it. Claudio Naranjo called this subtype <em>Masculinity/Femininity</em>: the embodiment of attractiveness in its purest, most intimate form. The SX3 does not ask <em>Am I admired?</em> but <em>Am I desired?</em></p>
          <p class="vb-intro">Bardot&#39;s entire film career revolved around exactly this energy. She was not the classically polished actress of her time &ndash; she was a presence, a force of nature on camera, whose radiance mattered more than any technique. Director Roger Vadim literally built <em>And God Created Woman</em> around her, because he understood: this woman does not need to act, she only needs to be. That is the clearest expression of SX3 impact.</p>
          <p class="vb-intro">Bardot became a symbol of the sexual liberation of the 1950s and 60s &ndash; not through provocation in a political sense, but through the simple refusal to hide her sensuality. The press coined the term &bdquo;sex kitten,&ldquo; but that fell short: what Bardot radiated was not a pose, but an unfiltered ease within her own body.</p>
        </blockquote>

        <h2 class="vb-section">3. The Two-wing: Care Instead of Facade</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Two-wing (w2)</strong> gives the sexual Three a dimension that goes beyond pure magnetism: the genuine need to care for others, to give care rather than only receive admiration. An SX3 with a weaker Two-wing could become absorbed in its own impact. The Two-wing opens the gaze outward &ndash; toward those who have no voice.</p>
          <p class="vb-intro">In Bardot this shows most clearly in her relationship to animals, which began already during her film career and increasingly occupied her. Her affection was never abstract or representative &ndash; she personally cared for injured and abandoned animals on her estate in Saint-Tropez, tending to them herself, not merely symbolically. The SX3w2 does not give from a distance. It gives with its own hands.</p>
          <p class="vb-intro">This care often stood in contrast to her public image as an unapproachable seductress &ndash; a contradiction that marks many SX3w2s: radiant and desired on the outside, while inwardly carrying a deep need to stand up for something or someone who needs protection.</p>
        </blockquote>

        <h2 class="vb-section">4. From Film Star to Activist: The Second Career</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 1973, at the height of her fame, at not quite 39, Bardot withdrew completely from filmmaking &ndash; a step almost unprecedented in the industry. Not a gradual decline, not a desperate clinging to her own youthfulness, but a deliberate, abrupt cut. The woman whose entire public identity rested on her allure decided that this allure should no longer be the center of her life.</p>
          <p class="vb-intro">In 1986 she founded the Fondation Brigitte Bardot and from then on devoted herself, with the same intensity with which she had once made films, to animal welfare &ndash; campaigns against seal hunting, the fur trade, bullfighting, factory farming. She used her remaining fame as a tool, not as an end in itself. The peacock that no longer wears its plumage for itself, but uses it to draw attention to something that has become more important to it than itself.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Sexual Three</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX3 is its ability to have impact through pure presence &ndash; and, when it matures, to put that impact toward something larger than its own allure. Bardot&#39;s life&#39;s work in animal welfare brought about real political change, from EU import bans on seal products to stricter animal protection laws in France.</p>
          <p class="vb-intro">The fate pattern of the Three is <strong>deception</strong> &ndash; confusing one&#39;s own identity with one&#39;s own impact. In Bardot this pattern showed itself in later decades differently than expected: not as clinging to her own image, but as a radical directness that increasingly turned into provocation and repeatedly court-condemned statements about immigration and Islam. The peacock that has learned throughout its life that causing a stir means attention can apply that same logic even where it wounds rather than moves.</p>
          <p class="vb-intro">The Two-wing brings its own shadow pattern: a care so completely focused on one cause &ndash; here, animals &ndash; that it can become blind elsewhere to human suffering. This tension between radical love of animals and publicly condemned statements hostile to certain groups of people remained one of the most difficult facets of Bardot&#39;s later life.</p>
        </blockquote>

        <h2 class="vb-section">6. The Healing Path: From Impact to Devotion</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Three leads from the question <em>Am I desired?</em> to the insight <em>I am &ndash; even without this impact.</em> For the SX3w2 this means no longer treating one&#39;s own allure as the center of identity, but as one tool among many, one that can be consciously used or set aside.</p>
          <p class="vb-intro">Bardot&#39;s withdrawal from filmmaking was precisely this step in its most radical form: the conscious decision to no longer depend on her impact on others, but to devote her remaining energy to a cause that gives back no admiration. The peacock that at some point no longer asks whether it is being looked at &ndash; but where it itself is looking.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx3", label:"SX3 – The Peacock: Subtype Profile"},
        {route:"beruehmte-kai-pflaume", label:"Portrait: Kai Pflaume (SX3w2)"},
        {route:"beruehmte-lena-meyer-landrut", label:"Portrait: Lena Meyer-Landrut (SX3w2)"},
        {route:"beruehmte-brigitte-macron", label:"Portrait: Brigitte Macron (SX3w2)"},
        {route:"krankheitsportraets-brigitte-bardot", label:"Illness Portrait: Brigitte Bardot (SX3w2)"},
        {route:"beruehmte-iris-berben", label:"Portrait: Iris Berben (SX3w2) – also an actress"},
        {route:"beruehmte-linda-evans", label:"Portrait: Linda Evans (SX3w2)"},
      ])}
    </div>
  `);
}

export function charlotteWellsPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-charlotte-wells-portrait.jpg" alt="Charlotte Wells" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Charlotte Wells</p>
        <p class="krim-portrait-typ">SP4w5 &middot; Self-Preservation Type 4 with Five-wing</p>
        <p class="krim-portrait-subtitle">Scottish film director and screenwriter, b. 1987 &ndash; Animal correspondence: Dove</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Dove</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>dove</strong> is the animal of the Self-Preservation Four – it does not put its deep emotional life on display, but processes it in quiet, often years-long persistence. Charlotte Wells was born in 1987 in Scotland and lost her father as a teenager – a loss she did not process publicly for years, but carried quietly, turned inward, working through it on her own. Only in 2015, with her short film "Tuesday," did she first approach this loss artistically – and once more, seven years later in 2022, with her acclaimed feature debut "Aftersun," loosely based on holidays she took with her father.</p>
          <p class="vb-intro">Before turning to directing, Wells first studied Classics at King's College London and completed a further degree at the University of Oxford – not a direct path into film, but a detour through academic discipline and structure. She then worked for several years in finance and, together with a friend, ran an agency for people working in film, before starting over again in her early thirties.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Four: Loss as a Quiet Burden</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Self-Preservation Four (SP4)</strong> does not carry its suffering outward but endures it stoically – it tells itself: I process better, more quietly, more deeply than others, and precisely there lies my dignity. To this day, Wells remains noticeably guarded with the press about the exact autobiographical connections in "Aftersun" – she confirms neither how much of the film actually mirrors her own life nor speaks at length about her late father. The pain remains visible in the film, but largely hidden in her own words about it.</p>
          <p class="vb-intro">This reticence also shows stylistically: "Aftersun" tells its story almost entirely through suggestion, omission, and mood-driven imagery rather than explicit dialogue or explanatory scenes – a film that trusts its audience to understand what remains unsaid, because the director herself never reveals too much.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five-wing: Life as a Question of System</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five-wing (w5)</strong> gives the Four an analytical distance from its own pain – the feeling is not merely lived through but translated into a carefully considered, methodically built work. Wells did not arrive at directing spontaneously but through an unusually structured path: after Classics and years in finance, she completed both a Master of Fine Arts in film directing and a Master of Business Administration at NYU's Tisch School of the Arts – a rare, deliberately chosen double qualification combining artistic and business systematics.</p>
          <p class="vb-intro">Before "Aftersun," she directed three short films, was named one of Filmmaker magazine's "25 New Faces of Independent Film" in 2018, and was accepted as a fellow into the prestigious Sundance Institute Screenwriters and Directors Labs in 2020 – a craft built systematically over years before she dared approach her most personal subject.</p>
        </blockquote>

        <h2 class="vb-section">4. "Aftersun": A Decade From Loss to Film</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Between her father's death in her youth and the premiere of "Aftersun" at the Cannes Film Festival in 2022 lie nearly two decades – and even then, Wells approached the subject only through the detour of memory: the film is told from the perspective of a grown woman recalling a shared holiday with her father in Turkey, partly mediated through old camcorder footage – a narrative distance that allows her to come close to the pain without ever stating it directly.</p>
          <p class="vb-intro">The film was celebrated internationally, lead actor Paul Mescal received an Oscar nomination, and Wells herself became, practically overnight, one of the most sought-after new directorial voices in cinema – yet she remained noticeably unflustered by it, gave only a few, mostly reserved interviews, and avoided the louder side of sudden fame.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP4w5 lies in its ability to turn <strong>a very personal, decades-quiet loss into a precisely considered, universal work</strong> – "Aftersun" moved millions of viewers worldwide, precisely because Wells did not put her own pain on display, but translated it into an artfully restrained, suggestive form that any viewer can fill with their own experience of loss.</p>
          <p class="vb-intro">The shadow shows in that same reticence: Wells's consistent refusal to lay her own story out in public protects her from being claimed by others, but also leaves open how much emotional processing has actually taken place, or whether the pain, as with many Self-Preservation Fours, was channeled rather than truly resolved.</p>
        </blockquote>

        <h2 class="vb-section">6. The Dove That Told Its Loss Through Suggestion</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Charlotte Wells is among the most remarkable new voices in international cinema – not because she told her own story loudly, but because it took her nearly two decades to approach it at all, quietly and with the utmost craftsmanship.</p>
          <p class="vb-intro">The dove that lost her father as a teenager and processed that loss slowly, methodically – first through a short film, then through an acclaimed feature debut – without ever fully laying it bare, that is the lasting image of this subtype: a quiet, carefully considered struggle for its own truth that would rather suggest than explain.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se4", label:"SP4 – The Dove: Subtype Profile"},
        {route:"beruehmte-leo-tolstoi", label:"Portrait: Leo Tolstoy (SP4w5)"},
        {route:"beruehmte-vincent-van-gogh", label:"Portrait: Vincent van Gogh (SP4w5)"},
        {route:"beruehmte-ludwig-goeransson", label:"Portrait: Ludwig Göransson (SP4w5)"},
        {route:"beruehmte-barney-fishwick", label:"Portrait: Barney Fishwick (SE4w5) – also quiet detail work in film and radio"},
        {route:"beruehmte-mara-wilson", label:"Portrait: Mara Wilson (SE4w5) – also an early loss, processed quietly through writing"},
      ])}
    </div>
  `);
}

export function davidHumePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-david-hume-portrait.jpg" alt="David Hume" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">David Hume</p>
        <p class="krim-portrait-typ">SE9w8 &middot; Self-Preservation Type 9 with Eight-wing</p>
        <p class="krim-portrait-subtitle">Scottish philosopher, 1711&ndash;1776 &ndash; Animal correspondence: Elephant</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Elephant Who Doubted Everything</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>elephant</strong> is the animal of the self-preservation Nine &ndash; patient, grounding, possessing a presence that comes not from volume but from weight. It is not easily rattled, even when it questions the very foundations of the world. It carries its insights calmly, without forcing them on anyone.</p>
          <p class="vb-intro">The Scottish philosopher David Hume was born in 1711 in Edinburgh, briefly studied law, abandoned it, and devoted himself to philosophy instead &ndash; against his family&#39;s wishes. Contemporaries consistently described him as cheerful, agreeable, without a trace of bitterness, even though he spent his life writing against fierce opposition from the church and academic institutions. He was called &bdquo;le bon David&ldquo; &ndash; the good David &ndash; even by circles that considered his ideas dangerous.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Nine: Calm as Method</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation Nine (SP9)</strong> is, according to Naranjo, the subtype he called <em>appetite</em> &ndash; the tendency to settle into comfort and inner peace and to meet conflict with calm rather than escalation. In Hume this calm became the philosophical method itself: he doubted causation &ndash; the assumption that one event necessarily causes another &ndash; the existence of a stable self, and every rational proof of God, and remained remarkably unruffled throughout.</p>
          <p class="vb-intro">His major work <em>A Treatise of Human Nature</em> (1739&ndash;40) was published to near-total indifference &ndash; Hume himself later wrote that it &bdquo;fell dead-born from the press.&ldquo; Rather than fight, he spent decades reworking the ideas into more accessible form, in works like <em>Essays, Moral and Political</em> and the <em>Enquiry Concerning Human Understanding</em> (1748). No outburst, no retreat &ndash; just the patient repetition of the same truth in ever new shapes, until it was finally heard.</p>
        </blockquote>

        <h2 class="vb-section">3. The Eight-wing: The Courage of Radical Doubt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Eight-wing (w8)</strong> gives the self-preservation Nine a strength that is barely visible from outside until its consequences become clear: the willingness to think a position through to its radical end, without flinching from the world&#39;s reaction. A pure SP9 might simply avoid conflict. The SP9w8 draws the consequence &ndash; calmly, but unwaveringly.</p>
          <p class="vb-intro">Hume held a consistent religious skepticism that cost him the coveted professorships at Edinburgh and Glasgow his entire life &ndash; church objections blocked both appointments. His work <em>Dialogues Concerning Natural Religion</em>, which systematically dismantles the classical proofs of God, he had published only after his death out of caution &ndash; not out of cowardice, but the Eight-wing&#39;s cool calculation: the fight isn&#39;t worth having until you can win it. You wait for the right moment.</p>
          <p class="vb-intro">This mixture of agreeableness and unshakeable conviction also showed in his 1766 friendship with the French philosopher Jean-Jacques Rousseau, whom Hume brought from France to England after Rousseau faced political persecution. Rousseau, increasingly paranoid, turned against Hume and publicly accused him of conspiracy. Hume did not respond with a counterattack, but with a measured, widely circulated written defense across Europe &ndash; the Nine stays calm, but the Eight-wing defends its reputation with all necessary force.</p>
        </blockquote>

        <h2 class="vb-section">4. Turtle Soup: Pleasure Without Dogma</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Hume was known his whole life for his love of good food &ndash; especially his fondness for turtle soup, an elaborate delicacy in the 18th century that he regularly had served at social dinners in Edinburgh. There is a fitting coincidence in the fact that the turtle &ndash; in some Enneagram traditions itself a possible animal correspondence for Type 9 &ndash; became his favorite dish: unhurried, armored, unshakeable in its own pace, much like the elephant, only smaller.</p>
          <p class="vb-intro">This love of sensory pleasure was not a contradiction of his philosophy but its practical consequence: whoever doubts ultimate certainties can turn all the more freely toward what is good in this life. Hume rejected asceticism in any form and lived what he thought &ndash; a skeptic who, despite all his doubt, was a deeply contented, sociable man.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow: Freedom and Its Limits</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP9w8 is its ability to combine <strong>radical freedom of thought with inner peace</strong>. Hume loosened the bonds of dogmatic thinking of his age without himself becoming a dogmatist of doubt &ndash; he remained curious, warm, open to contradiction. Adam Smith, his close friend, described him after his death as a man who approached as near the ideal of a perfectly wise and virtuous person as the frailty of human nature would permit.</p>
          <p class="vb-intro">The shadow: Hume&#39;s writings also contain racist passages &ndash; including a widely cited footnote in which he disparaged the intellectual capacities of non-European peoples. This stance, inexcusable and at odds with his own skeptical standards, shows the flip side of the SP9w8: the comfort of appetite can also mean never truly questioning inherited prejudice, even while priding oneself on having questioned everything else.</p>
        </blockquote>

        <h2 class="vb-section">6. The Elephant Who Died as Calmly as He Had Lived</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Nine leads from self-forgetting to <strong>true inner action</strong> &ndash; not disappearing into comfort, but consciously participating in one&#39;s own life. Hume lived this path already: he never avoided the great questions, only refused arguing for its own sake.</p>
          <p class="vb-intro">As Hume lay dying in 1776, the writer James Boswell visited him, wanting to know whether, facing death, he still did not believe in an afterlife. Hume answered calmly and without any fear that there was no reason for concern &ndash; a composure that deeply unsettled Boswell, because it fit so poorly with the expected image of a &bdquo;godless&ldquo; dying man. The elephant from Edinburgh left the world the way he had crossed it: unmoved, curious, needing no illusion for comfort.</p>

          <p class="vb-intro">His chronic bowel disease, progressing over four years, and his remarkable composure while dying are explored in depth in the dedicated <a href="javascript:void(0)" data-route="krankheitsportraets-david-hume">Illness Portrait of Hume</a>.</p>

        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"krankheitsportraets-david-hume", label:"Illness Portrait: David Hume (SE9w8)"},
        {route:"subtype/se9", label:"SE9 – The Elephant: Subtype Profile"},
        {route:"beruehmte-angela-merkel", label:"Portrait: Angela Merkel (SE9w8)"},
        {route:"beruehmte-hans-dietrich-genscher", label:"Portrait: Hans-Dietrich Genscher (SE9w8)"},
        {route:"beruehmte-adam-smith", label:"Portrait: Adam Smith (SO1w9) – his close friend"},
        {route:"beruehmte-immanuel-kant", label:"Portrait: Immanuel Kant (SO6w5) – whom he roused from ‘dogmatic slumber’"},
        {route:"beruehmte-thomas-von-aquin", label:"Portrait: Thomas Aquinas (SE9w8)"},
        {route:"beruhmte-philosophen", label:"Chart: Famous Philosophers in the Enneagram"},
      ])}
    </div>
  `);
}

export function douglasSmithPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-douglas-smith-portrait.jpg" alt="Dr. Douglas W. Smith – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Douglas W. Smith</p>
        <p class="krim-portrait-typ">SX6w5 &middot; Sexual Type 6 with Five-wing</p>
        <p class="krim-portrait-subtitle">Wildlife biologist, leader of the Yellowstone Wolf Project, b. 1960 &ndash; Animal correspondence: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The wolf who brought the wolves back to Yellowstone</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>wolf</strong> is the animal of the Sexual Six &ndash; it meets fear not by retreating but through direct confrontation, finding its deepest meaning in protecting and sustaining the pack. Few life's works show this principle as directly as that of Dr. Douglas W. Smith: hired in 1994 by the National Park Service as project biologist for the reintroduction of wolves to Yellowstone, he led the entire Yellowstone Wolf Project from 1997 onward for decades &ndash; until his retirement in 2022, after 28 years of service to the park.</p>
          <p class="vb-intro">Even before Yellowstone, Smith had worked with wolves on Isle Royale from 1979 to 1992 &ndash; the very same legendary long-term research site where Dr. L. David Mech (SX6w5), the "father of modern wolf research" and himself a leading wolf researcher for over sixty years, began his own career. Both men spent their lives literally in the rough field, decoding the same complex social code of the wolf &ndash; a connection that goes far beyond mere professional collegiality.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Six: crisis management in service of the pack</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sexual Six (SX6)</strong> meets fear counterphobically &ndash; not by avoidance, but by directly taking responsibility exactly where others would shy away. The 1995 reintroduction of wolves to Yellowstone was a high-risk, politically contested project: Smith had to hold his ground not only scientifically but against considerable public opposition from ranchers and hunters to establish the wolves permanently in the park.</p>
          <p class="vb-intro">His life's work impressively documents how the return of a single pack can transform the entire ecological balance of a vast national park &ndash; even reshaping river courses, through changed elk behaviour and the resulting return of streamside vegetation. This very devotion to the survival and protection of an entire community, not just individual animals, is the core of the Sexual Six.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five-wing: scientific depth across decades</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five-wing (w5)</strong> gives the Six an analytical depth clearly visible in Smith's scientific career: his PhD at the University of Nevada focused on cooperative breeding in beavers &ndash; another highly socially organized animal (the animal correspondence of the Enneagram's Social Seven) &ndash; before he brought all of that knowledge into the systematic, decades-long observation of Yellowstone's wolf packs.</p>
          <p class="vb-intro">As co-author of standard works such as "Wolves on the Hunt: The Behavior of Wolves Hunting Wild Prey," he translated decades of fieldwork into verifiable, scientifically grounded knowledge &ndash; the same combination of Six-style responsibility-taking in the field and Five-style systematism in analysis that also defines Mech's life's work.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX6w5 is its ability to <strong>take responsibility for an entire ecological system under considerable pressure and resistance</strong> &ndash; the Yellowstone wolf reintroduction is today regarded as one of the most successful conservation projects in history, and fundamentally changed how science and the public understand the concept of "trophic cascade": how a single predator can stabilize an entire ecosystem.</p>
          <p class="vb-intro">The shadow of the Sexual Six with a Five-wing shows in the enormous personal toll of such a conflict-laden life's work: standing for decades at the center of a politically charged dispute demands a resilience that leaves little room for other areas of life beyond this one, all-consuming task.</p>
        </blockquote>

        <h2 class="vb-section">5. Two wolves, one code</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What Smith gives the world is living proof that a single pack can heal an entire landscape &ndash; a work he accomplished, like Mech, through decades of counterphobic devotion to the very same animal. Two men, both SX6w5, both devoted to the wolf &ndash; not by coincidence, but as two expressions of the same archetypal principle.</p>
          <p class="vb-intro">In the end, one image remains that could hardly stand more fittingly for the Sexual Six with a Five-wing: a man whose archetypal animal is the wolf, who literally brought the wolves back to their home &ndash; while leading a pack of researchers, much as an alpha leads its own pack.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${bookTip("enneagramm-zoo", "27 Animal Portraits – each Subtype animal with character, biology and Enneagram connection.", "Enneagramm-Zoo")}
      ${bookTip("archetypen-der-tiere-im-enneagramm", "The archetypal animals of the 9 types as an inner map – images that work instantly.", "Archetypen der Tiere im Enneagramm")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/sx6", label:"SX6 – The Wolf: Subtype Profile"},
        {route:"lebensmusterkompass/sx6", label:"Life Pattern Compass: SX6 – Wolf"},
        {route:"beruehmte-david-mech", label:"Portrait: Dr. L. David Mech (SX6w5)"},
        {route:"beruehmte-moses", label:"Portrait: Moses (SX6w5)"},
      ])}
      ${animalResearcherMatchBlock("beruehmte-douglas-smith")}
    </div>
  `);
}

export function francisBaconPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-francis-bacon-portrait.jpg" alt="Francis Bacon – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Francis Bacon</p>
        <p class="krim-portrait-typ">SP7w8 &middot; Self-Preservation Type 7 with Eight-wing</p>
        <p class="krim-portrait-subtitle">Philosopher, statesman &amp; founder of empiricism, born 1561, died 1626 &ndash; Animal correspondence: Gorilla</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Gorilla</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Gorilla</strong> is the animal of the Self-Preservation Type 7 &ndash; an animal of enormous strength that lives in a group, whose reach extends over an entire territory, and whose presence fills a room without any effort. The Gorilla thinks in large connections &ndash; and builds its surroundings so it can grow within them.</p>
          <p class="vb-intro">The British philosopher Francis Bacon, born 1561 in London, son of the Lord Keeper Nicholas Bacon, is this Gorilla. Hardly any thinker of his time reached for so much at once: lawyer, politician, philosopher of science, essayist &ndash; and, at the peak of his career, Lord Chancellor of England, the Crown's highest legal office. His declared life's goal was nothing less than the <em>Instauratio Magna</em>, the "Great Renewal" of all human knowledge. A Gorilla does not build a small nest &ndash; it builds a territory that can carry an entire troop.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Seven: Joy in Discovery</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Self-Preservation Seven (SP7)</strong> seeks its joy not on the grand stage but in its own, self-made surroundings &ndash; in the process of creating, collecting and ordering itself. Naranjo called this subtype <em>Family</em>: a nest in which curiosity can unfold undisturbed.</p>
          <p class="vb-intro">Bacon's curiosity knew almost no field too foreign for him. He gathered observations on natural phenomena, experiments, legal cases, affairs of state and moral questions with the same devotion. His work <em>Novum Organum</em> (1620) proposed a radically new foundation for science: no longer deriving knowledge from old authorities such as Aristotle, but arriving at new knowledge through systematic observation and experiment &ndash; the inductive method, still regarded today as the birth of modern empirical science. "Knowledge is power," he wrote &ndash; a sentence that sums up his entire life's project: the SP7's joy in discovery, turned into a system for all of humanity.</p>
        </blockquote>

        <h2 class="vb-section">3. The Eight-Wing: Power and Assertion</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Eight-wing</strong> gives the Self-Preservation Seven an assertiveness a Seven with a weaker Eight wing lacks. Based on decades of experience with this subtype, Naranjo called the Self-Preservation Seven <em>the hidden Eight</em> &ndash; a Seven that carries the Eight's decisiveness and directness within it, without displaying it openly. Where the Seven evades when resistance arises, the SP7w8 seeks confrontation &ndash; and the climb into positions from which it can actually shape things.</p>
          <p class="vb-intro">Bacon's political career shows this assertiveness in its purest form: member of the House of Commons, Solicitor General, Attorney General, Lord Keeper and finally, in 1618, Lord Chancellor of England under King James I &ndash; an unprecedented rise through legal precision, political calculation and persistent courting of favour. But the Eight-wing also has a painful side: in 1601, it was Bacon who, as Crown counsel, played a decisive role in prosecuting his former patron and friend, the Earl of Essex, for treason &ndash; a betrayal of a personal bond in favour of his own career that many contemporaries never forgave him. Power and loyalty were often in competition in Bacon, and power mostly won.</p>
        </blockquote>

        <h2 class="vb-section">4. Rise and Fall: The Lord Chancellor</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 1618 Bacon reached the summit of his career: Lord Chancellor of England, shortly afterwards elevated to Viscount St Alban. He was now the country's highest judge &ndash; and, at the same time, in the middle of work on his great scientific reform project. Two lives, one man: statesman by day, universal scholar in the early morning hours.</p>
          <p class="vb-intro">In 1621 this double life collapsed. Parliament charged Bacon with corruption &ndash; he had, as was not uncommon at the time, accepted gifts from litigants while their cases were pending before him. Bacon admitted the charges without justifying himself, was sentenced to a heavy fine, briefly imprisoned in the Tower of London, and barred from all public office as well as from Parliament and the court. The Gorilla who had wanted to build a territory for all of humanity lost his own within a matter of weeks.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP7w8 is its ability to turn pure joy of discovery into a body of work that outlasts its own lifetime. Bacon's description of the "Idols of the Mind" &ndash; the systematic errors of thought that distort human understanding, from individual prejudice to blind trust in received authority &ndash; anticipates modern epistemology and cognitive psychology by centuries. Without Bacon's method, the whole of modern natural science would look different.</p>
          <p class="vb-intro">The shadow lies in a bitter irony: the man who, like no other, warned against self-deception and distorted judgment ultimately fell victim to exactly the "idols" he himself had described &ndash; the temptation of power, the convenience of accepted gifts, the belief that he stood above his own rules. The core passion of the Seven is <strong>gluttony</strong> &ndash; in the SP7w8 it shows not only as a hunger for knowledge, but also as a hunger for office, influence and recognition that eventually outran his own integrity.</p>
        </blockquote>

        <h2 class="vb-section">6. The Path of Healing: Knowledge That Endures</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Seven leads from the question <em>What do I reach for next?</em> to sobriety: the conscious renunciation of excess in favour of what truly endures. For the SP7w8 this means no longer placing one's own creative force in the service of accumulating power, but in the service of a cause greater than oneself.</p>
          <p class="vb-intro">That is exactly what Bacon did in the five years remaining after his fall. Freed from public office, he devoted himself almost entirely to writing and completed some of his most significant works. His death in April 1626 fits no other subtype so well as the SP7w8: on a carriage ride, the idea struck him that cold might delay decay &ndash; he stopped, bought a chicken, stuffed it with snow with his own hands, and caught a fatal chill in the process. The Gorilla that, to its last breath, reached for the next discovery &ndash; and made one more experiment while dying.</p>
        </blockquote>

        <p class="vb-intro">His decades of gout and the exact circumstances of the fatal chicken experiment are explored in depth in the dedicated <a href="javascript:void(0)" data-route="krankheitsportraets-francis-bacon">Illness Portrait of Bacon</a>.</p>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"krankheitsportraets-francis-bacon", label:"Illness Portrait: Francis Bacon (SP7w8)"},
        {route:"subtype/se7", label:"SP7 – The Gorilla: Subtype Profile"},
        {route:"beruehmte-hans-zimmer", label:"Portrait: Hans Zimmer (SP7w8)"},
        {route:"beruehmte-christoph-kolumbus", label:"Portrait: Christopher Columbus (SP7w8)"},
        {route:"beruehmte-kim-jong-un", label:"Portrait: Kim Jong Un (SP7w8)"},
        {route:"beruehmte-takashi-murakami", label:"Portrait: Takashi Murakami (SP7w8)"},
        {route:"beruehmte-suzan-lori-parks", label:"Portrait: Suzan-Lori Parks (SP7w8)"},
      ])}
    </div>
  `);
}

export function georgeGershwinPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-george-gershwin-portrait.jpg" alt="George Gershwin" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">George Gershwin</p>
        <p class="krim-portrait-typ">SO7w6 &middot; Social Type 7 with a Six-Wing</p>
        <p class="krim-portrait-subtitle">1898&ndash;1937 &ndash; American composer, "Rhapsody in Blue" &ndash; Animal correspondence: Beaver</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Beaver from Brooklyn</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>beaver</strong> is the animal of the social Seven &ndash; a builder who doesn't keep its overflowing energy to itself but turns it into something the whole surrounding landscape benefits from. George Gershwin, born in 1898 in Brooklyn to Russian-Jewish immigrants, was largely self-taught at the piano before entering Tin Pan Alley as a teenager &ndash; New York's music-publishing district, where he worked as a "song plugger," playing other people's songs on the piano to sell them to customers.</p>
          <p class="vb-intro">Out of this apprenticeship in other people's melodies quickly grew something larger: the wish to create a wholly original, genuinely American musical language that would tear down the wall between popular and serious music. The beaver does not build for itself alone &ndash; it builds so that an entire river finds its bed.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Seven: Art in the Service of a Whole Nation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social Seven (SO7)</strong> places the Seven's overflowing enthusiasm in the service of something larger &ndash; not personal pleasure, but a vision that benefits others. Naranjo called this subtype "sacrifice" or "martyr": where the self-preservation Seven hoards abundance for itself, the social Seven forgoes it in favor of an ideal larger than itself.</p>
          <p class="vb-intro">In 1924, at just twenty-six, Gershwin composed "Rhapsody in Blue" within a few weeks for Paul Whiteman's concert "An Experiment in Modern Music" &ndash; an attempt to make jazz socially respectable and grant it the standing of serious concert music. It was never only about his own success, but about proving that American music &ndash; born of jazz, blues, and the streets of New York &ndash; could stand as an equal alongside the European concert tradition. With "Porgy and Bess" (1935), an opera with an all-Black cast at a time of deep racial segregation in the United States, he carried this mission further still.</p>
        </blockquote>

        <h2 class="vb-section">3. The Six-Wing: Diligence Over Self-Overestimation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Six-wing (w6)</strong> gives the social Seven a vigilance that guards against overestimating itself and instead drives systematic self-improvement. Despite his early, overwhelming success, Gershwin took composition lessons throughout his life &ndash; among others with Rubin Goldmark, and later attempted to study with Maurice Ravel and Arnold Schoenberg (both declined, on the grounds that they didn't want to turn an already brilliant Gershwin into a second-rate Ravel or Schoenberg).</p>
          <p class="vb-intro">This persistent search for a reliable teacher, an authority who might further secure his art, is pure Six-wing energy: success alone was not enough proof of his own legitimacy &ndash; he also sought confirmation through tested expertise. His decades-long, close collaboration with his brother Ira Gershwin, who wrote the lyrics to nearly all his songs, shows the same Six-wing note: reliability and loyalty to a small, proven circle rather than constantly changing partnerships.</p>
        </blockquote>

        <h2 class="vb-section">4. "Rhapsody in Blue" and the Proof of a Nation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The premiere of "Rhapsody in Blue" on 12 February 1924 at Aeolian Hall in New York is still regarded as one of the turning points in American musical history. Among the audience sat composers like Sergei Rachmaninoff and Igor Stravinsky &ndash; the European concert world itself bore witness as jazz elements, blues scales, and a clarinet glissando opening now counted among the most famous moments in all of classical music fused into serious concert music.</p>
          <p class="vb-intro">The success was no fluke: with "An American in Paris" (1928) and finally "Porgy and Bess" (1935), Gershwin systematically kept building on this one great work &ndash; proving that an American musical language could exist and hold its own internationally. The beaver does not build a dam and stop; it keeps building on the same great structure for its whole life.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO7w6 is an enthusiasm that genuinely transforms an entire art form. Gershwin opened concert halls to jazz, opera to Broadway, and one of New York's great stages to an all-Black cast &ndash; his work still resonates in film scores, musicals, and concert halls alike.</p>
          <p class="vb-intro">The Seven's shadow is the flight from stillness and pain into ever-new projects. Contemporaries described Gershwin as restlessly productive, almost never at rest &ndash; constantly working on several compositions at once, constantly present at parties and in salons, always at the center of a sociable circle. This inability to pause, one can say in hindsight, also delayed his taking the first health warning signs seriously in his final months.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: A River That Keeps Flowing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Gershwin died in 1937 at only 38 years old of a brain tumor &ndash; a sudden ending, unfathomable to many contemporaries, in the middle of his creative prime. The circumstances of his final months, during which the first symptoms were long misread, are explored in greater depth in a dedicated <a href="javascript:void(0)" data-route="krankheitsportraets-george-gershwin">illness portrait of Gershwin</a>.</p>
          <p class="vb-intro">What remains is a body of work that permanently made the boundary between popular and serious music permeable in the United States. That is the gift of the SO7w6 in its purest form: enthusiasm that does not exhaust itself in personal pleasure, but becomes a structure that carries an entire country. The beaver whose dam still holds, long after the builder himself is gone.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"krankheitsportraets-george-gershwin", label:"Illness Portrait: George Gershwin (SO7w6) – brain tumor"},
        {route:"subtype/so7", label:"SO7 – The Beaver: Subtype Profile"},
        {route:"beruehmte-epikur", label:"Portrait: Epicurus (SO7w6)"},
        {route:"beruehmte-franz-von-assisi", label:"Portrait: Francis of Assisi (SO7w6)"},
        {route:"beruehmte-nikola-tesla", label:"Portrait: Nikola Tesla (SO7w6)"},
      ])}
    </div>
  `);
}

export function hansZimmerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hans-zimmer-portrait.jpg" alt="Hans Zimmer – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hans Zimmer</p>
        <p class="krim-portrait-typ">SP7w8 &middot; Self-Preservation Type 7 with Eight-wing</p>
        <p class="krim-portrait-subtitle">Film composer, arranger &amp; music producer, born 1957 &ndash; Animal correspondence: Gorilla</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Gorilla</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Gorilla</strong> is the animal of the Self-Preservation Type 7 &ndash; and no image describes Hans Zimmer better. The Gorilla is not a soloist. It lives in a group, protects its family, shares food, teaches the younger ones. Its strength does not serve self-presentation but the community. And when it moves &ndash; through the forest, through the room &ndash; one feels its gravitational pull, even though it does not threaten.</p>
          <p class="vb-intro">Hans Zimmer built a studio in Santa Monica called Remote Control Productions &ndash; which from the inside resembles a family of musicians more than a production company. Zimmer has trained, supported and guided dozens of composers there: Junkie XL, Lorne Balfe, Harry Gregson-Williams, Rupert Gregson-Williams, Ramin Djawadi and many others. The Gorilla does not build a territory. It builds a troop.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Seven: Joy as Creation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Self-Preservation Seven (SP7)</strong> finds its joy not in spectacle but in the warmth of creating itself &ndash; in the process, in collaboration, in the act of making. Naranjo called this subtype <em>Family</em>: the SP7 creates its own nest, a space where creativity and a sense of safety come together.</p>
          <p class="vb-intro">Zimmer left school at sixteen. He never had a formal musical education &ndash; and never let that stop him. Instead of studying notation, he experimented: with synthesisers, with orchestral sounds, with anything that produces sound. His joy in discovery remains palpable today. No score sounds like the previous one. Every film is a new adventure.</p>
        </blockquote>

        <h2 class="vb-section">3. The Eight-Wing: Strength That Carries</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Eight-wing</strong> gives the Self-Preservation Seven something not every Seven has access to: assertiveness. A Seven with a weaker Eight wing can lose itself in possibilities, can evade, can redirect when something becomes difficult. The Eight-wing holds firm &ndash; it brings decisiveness, directness, the willingness to endure conflict.</p>
          <p class="vb-intro">Zimmer's music is not delicate. It is massive, archaic, physical &ndash; sound that one feels before one understands it. The brass thunder in <em>Gladiator</em>, the heartbeat of <em>Inception</em>, the waves in <em>Dunkirk</em>. That is the Eight-wing: joy that is not afraid of volume, of weight, of the moment when music overwhelms someone.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: Gluttony as Creative Drive</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the Seven is called <strong>gluttony</strong> &ndash; or excess: the insatiable hunger for experience, for the next project, for the feeling of creating something new. In the Self-Preservation Seven this hunger directs itself not toward excess but toward abundance: more sound, more depth, more connection between music and image.</p>
          <p class="vb-intro">Zimmer has written music for over 150 films. He sleeps little. He works in phases that colleagues describe as intense &ndash; and which he himself calls his natural operating temperature. It is not being driven. It is the Gorilla in its element: creating as a way of life, sound as a language that is never fully spoken.</p>
        </blockquote>

        <h2 class="vb-section">5. The Gift: Emotions That Touch the World</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What Hans Zimmer has given to cinema &ndash; and through cinema to the world &ndash; is the experience that music can be a space. Not background wallpaper, not an emotional marker, but an independent experience: one sits in the cinema, hears the score, and suddenly understands something about the scene, about the character, about oneself.</p>
          <p class="vb-intro">That is the gift of the SP7w8: joy that does not keep to itself. A Gorilla that not only protects its troop but lets it grow &ndash; and whose voice, once heard, cannot be got out of one's head. Hans Zimmer did not study notation. He learned how sound touches people. That is the Self-Preservation Seven with Eight-wing. That is the Gorilla who sings.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se7", label:"SP7 – The Gorilla: Subtype Profile"},
        {route:"beruehmte-jasmin-paolini", label:"Portrait: Jasmine Paolini (SP7w6)"},
      ])}
    </div>
  `);
}

export function iceCubePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ice-cube-portrait.jpg" alt="Ice Cube – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ice Cube</p>
        <p class="krim-portrait-typ">SP2w3 &middot; Self-Preservation Type 2 with Three-Wing</p>
        <p class="krim-portrait-subtitle">American rapper, actor &amp; entrepreneur, born 1969 &ndash; Animal correspondence: Hippopotamus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Hippopotamus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Hippopotamus</strong> is the animal of the self-preservation Two &ndash; a creature that knows its environment precisely and moves through it securely because it knows and respects its dangers. It builds its territory firmly, defends it decisively, and returns there after every excursion, back to where it belongs.</p>
          <p class="vb-intro">The American rapper and actor Ice Cube, born O'Shea Jackson on June 15, 1969, in Baldwin Hills, Los Angeles, grew up as the fourth child of an African American family in South Central Los Angeles &ndash; a neighborhood increasingly marked by drugs, guns, and violence. His mother Doris worked as a hospital employee, his father Hosea as a groundskeeper at UCLA. With stable, working parents behind him, young Ice Cube navigated an environment that proved fatal for many of his peers.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Two: Care That Stays Within the Family</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the <strong>self-preservation Two (SP2)</strong> <em>Me First</em>: care first turns toward one's own concrete foundation and closest circle, before it turns outward. In Ice Cube, this shows in remarkable steadiness: since his marriage to Kimberly Woodruff in April 1992 &ndash; over three decades in an industry known for short-lived relationships &ndash; his marriage has remained stable, and together they have five children.</p>
          <p class="vb-intro">This principle becomes clearest in 2015: for the film adaptation of his own life story, <em>Straight Outta Compton</em>, Ice Cube cast his younger self with none other than his own son, O'Shea Jackson Jr. &ndash; after a two-year audition process that his son, as Ice Cube himself put it, "earned fair and square." His own story is not delegated to strangers, but literally passed on within the family &ndash; a trust conceivable only within the closest circle.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: From Rapper to Business Empire</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the self-preservation Two the drive to build visible, publicly effective success out of a secured foundation. At fifteen, Ice Cube met Dr. Dre (SO2w3); together with Eazy-E they founded N.W.A. and sparked a nationwide debate with their hard-hitting, unfiltered gangsta rap. When conflict arose with management, Ice Cube left the group in 1989 and built an independent career with his solo debut <em>AmeriKKKa's Most Wanted</em> (1990) &ndash; gold and later platinum status within weeks.</p>
          <p class="vb-intro">The musician became a multi-hyphenate entrepreneur: as actor, screenwriter, director, and producer of the <em>Friday</em> and <em>Barbershop</em> film franchises, he built his own, recurring brands instead of relying on individual appearances. In 2017, he founded BIG3, his own professional basketball league for former NBA players &ndash; a project he doesn't just support but owns and controls outright. The Three-wing keeps asking: how do I turn what I have into my own, visible institution?</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Self-Preservation Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP2w3 is the ability to build a stable, decades-lasting foundation out of a difficult environment &ndash; for oneself and one's family &ndash; and then translate that stability into visible, publicly effective projects without losing one's family roots. Ice Cube's marriage of over thirty years and his deliberate decision to entrust his own life story to his own son show this rare combination of loyalty and visibility.</p>
          <p class="vb-intro">The fate pattern of the Two is <strong>pride</strong> &ndash; the conviction of being indispensable through one's own care and one's own building. In the SP2w3, this pride can become a constant need to keep expanding and controlling one's own territory &ndash; from record label to film production to owning a sports league &ndash; rather than resting on what has already been achieved. His early, uncompromising break with N.W.A.'s management already shows how decisively the hippopotamus defends its territory the moment it feels taken advantage of.</p>
        </blockquote>

        <h2 class="vb-section">5. The Work: From South Central to His Own Institution</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Ice Cube's artistic work consistently tells the story of his own origins &ndash; South Central Los Angeles, his neighborhood, his family &ndash; and repeatedly translates that very concrete, personal experience into formats with broad reach: albums, film franchises, a sports league of his own. None of it stays abstract; all of it stays tied back to his own biography and his own people.</p>
          <p class="vb-intro">The hippopotamus doesn't leave its territory to please anyone &ndash; it expands its territory in a way that grows without losing its roots. Ice Cube's path from a first-generation rapper to the owner of his own professional league shows exactly this pattern: security, control, and care for the closest circle as the foundation for everything that becomes visible afterward.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se2", label:"SP2 – The Hippopotamus: Subtype Profile"},
        {route:"beruehmte-ai-weiwei", label:"Portrait: Ai Weiwei (SP2w3)"},
        {route:"beruehmte-carlos-santana", label:"Portrait: Carlos Santana (SP2w3)"},
        {route:"beruehmte-harald-gloeockler", label:"Portrait: Harald Glööckler (SP2w3)"},
        {route:"beruehmte-mr-t", label:"Portrait: Mr. T (SP2w3)"},
        {route:"beruehmte-dr-dre", label:"Portrait: Dr. Dre (SO2w3)"},
      ])}
    </div>
  `);
}

export function jasminPaoliniPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jasmine-paolini-portrait.jpg" alt="Jasmine Paolini – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jasmine Paolini</p>
        <p class="krim-portrait-typ">SP7w6 &middot; Self-Preservation Type 7 with Six-wing</p>
        <p class="krim-portrait-subtitle">Tennis player, born 1996 &ndash; Animal correspondence: Gorilla</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Gorilla</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Gorilla</strong> is the animal of the Self-Preservation Type 7 &ndash; and it surprises, because on the surface one does not associate it with lightness. The Gorilla is powerful, calm and deeply family-oriented. It lives in close-knit groups, cultivates bonds, protects its troop. It does not seek confrontation &ndash; but does not avoid it when it matters. Its strength is not aggression. It is reliability.</p>
          <p class="vb-intro">Jasmine Paolini is this Gorilla. On the court: explosive, combative, tireless. Off it: warm, laughing, familial. She celebrates victories with an openness that is contagious, and carries defeats with a dignity that impresses. The Gorilla does not dance &ndash; but when it smiles, the whole forest lights up.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Seven: Joy as Home</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Self-Preservation Seven (SP7)</strong> is, in the Enneagram tradition, the subtype that expresses the Seven's excessiveness through warmth and community. Naranjo called it <em>Family</em>: the SP7 creates its own nest &ndash; a circle of people, rituals and joys that gives it security. Not through control like the Eight, not through rules like the One &ndash; but through connection and a sense of belonging.</p>
          <p class="vb-intro">In Jasmine Paolini one can see this at every tournament: her team, her laughter with her coach, her outbursts of genuine joy after won points. She never appears like someone who plays tennis to harvest fame. She appears like someone who loves tennis &ndash; and shares that love with everyone watching.</p>
        </blockquote>

        <h2 class="vb-section">3. The Six-Wing: Loyalty as Foundation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Six-wing</strong> gives the Self-Preservation Seven something it might lack without it: perseverance. A Seven with a more muted Six wing leaps from experience to experience, shies away from heaviness, seeks the next departure. The Six-wing anchors it &ndash; bringing loyalty, a sense of responsibility, the willingness to keep fighting even when joy is hard to find.</p>
          <p class="vb-intro">Paolini's career is not a straight path upward. For years she played in the middle ranks of the world ranking, working on every detail with her coach Renzo Furlan. No changes, no impatience &ndash; commitment. The Six-wing keeps her grounded when the Seven threatens to take off, and gives her the stamina for the long matches in which joy alone is not enough.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: Excess as Inner Engine</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the Seven is called <strong>gluttony</strong> &ndash; or excess: the insatiable hunger for experience, joy, life. In the Self-Preservation Seven it does not show as excess but as abundance: more warmth, more connection, more of those moments when everything is right.</p>
          <p class="vb-intro">In Paolini one can see this in the game itself. She concedes no points. She tries to reach every ball. She smiles after lost sets and fights her way back. In 2024 she reached the finals of Roland Garros and Wimbledon &ndash; and lost both. Four weeks later she won the WTA Finals. That is the excess of the SP7: not destructive, but inexhaustible. The hunger for the next moment, the next chance, the next serve.</p>
        </blockquote>

        <h2 class="vb-section">5. The Gift: Joy That Does Not Give Up</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What Jasmine Paolini gives to tennis &ndash; and to the audience &ndash; is something that cannot be trained: genuine joy. Not the smile of a brand, not the calculated accessibility of a communications team. But the joy of a woman who is at home on the court, who loves her profession and does not hide it.</p>
          <p class="vb-intro">That is the gift of the SP7w6: joy that holds firm. Not the fleeting enthusiasm that vanishes at the first setback, but a joy anchored deeply enough to survive even defeat. Watching Jasmine Paolini at tennis, one sees a Gorilla in its element: strong, warm, unshakeable. That is the SP7w6. That is joy as home.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se7", label:"SP7 – The Gorilla: Subtype Profile"},
        {route:"beruehmte-hans-zimmer", label:"Portrait: Hans Zimmer (SP7w8)"},
      ])}
    </div>
  `);
}

export function johnnyCashPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-johnny-cash-portrait.jpg" alt="Johnny Cash" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Johnny Cash</p>
        <p class="krim-portrait-typ">SP3w4 &middot; Self-Preservation Type 3 with Four-wing</p>
        <p class="krim-portrait-subtitle">American singer and songwriter, 1932&ndash;2003 &ndash; Animal correspondence: Raccoon</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Raccoon</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>raccoon</strong> is the animal of the Self-Preservation Three – an animal that builds something functioning out of scarce resources through resourceful cleverness rather than strength or display. J. R. Cash was born in 1932 in Kingsland, Arkansas, the son of poor cotton tenant farmers; at age three the family moved to the government resettlement colony of Dyess, where he worked the fields daily until he was fifteen. This scarcity produced no self-pity, but an early-trained sense for what one can actually accomplish with one's own hands.</p>
          <p class="vb-intro">In 1944, his older brother Jack died at fourteen, a week after a severe accident on a circular saw in the school workshop. Jack had been their father Ray Cash's declared favorite son, and Ray let his surviving son feel, for decades, who he believed should have died instead. Johnny carried this guilt his whole life – and began early to build something for himself that no one could take away.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Three: Builder of His Own Career</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Self-Preservation Three (SP3)</strong> is considered the counter-type of the Three: worth arises not from public self-presentation but from a functioning result. Cash never sought the magnetism of the Sexual Three or the constant stage presence of the Social Three – his energy flowed into something lasting: five decades of touring, hundreds of albums, one of the longest and most stable careers in American music history, built despite decades of addiction, several career collapses, and deep family crises.</p>
          <p class="vb-intro">This SP3 logic also showed strategically: his legendary 1968 concert at Folsom State Prison was not a spontaneous gesture but a carefully planned career decision after his sales had collapsed – a calculated fresh start that also became one of his most artistically significant works. Where other musicians of his era faded or reinvented themselves just to stay in the spotlight, Cash systematically built a career structure that could survive setbacks.</p>
        </blockquote>

        <h2 class="vb-section">3. The Four-wing: The Man in Black</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Four-wing (w4)</strong> gives the Self-Preservation Three a dimension that exceeds pure functionality: a hunger for depth, for what lies beneath country music's polished surface. In 1971, Cash explained in his song "Man in Black" why he always performed dressed in black – as vicarious mourning for the poor, the imprisoned, the sick, the elderly, the fallen of the Vietnam War. Not a marketing gimmick, but a deliberately chosen, darkly authentic stage persona that made solidarity with the overlooked part of his own identity.</p>
          <p class="vb-intro">The same Four-depth runs through his songwriting: songs about murder, guilt, prison, and despair – "Folsom Prison Blues," with the line "I shot a man in Reno just to watch him die," which he wrote without ever having killed anyone, purely out of imaginative empathy for the darkest side of human nature. This capacity to inhabit guilt and the abyss was likely also fed by his own, never fully resolved guilt over his brother's death – the Four that translates its own wound into art instead of hiding it.</p>
        </blockquote>

        <h2 class="vb-section">4. Folsom Prison, 1968</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">On January 13, 1968, Cash performed for inmates at Folsom State Prison in California – a concert he had pushed for over years, against resistance from his own label. The audience of convicted offenders responded with an enthusiasm that mirrored Cash's own years-long closeness to addiction, legal trouble, and personal collapse – he himself had been arrested multiple times for drug possession, without ever serving a prison sentence.</p>
          <p class="vb-intro">The resulting live album "At Folsom Prison" became one of the most commercially successful and culturally significant works of his career – the moment when strategic career-building (SP3) and genuine, deeply felt kinship with society's outcasts (w4) became inseparable.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP3w4 lies in the ability to <strong>build a lasting, load-bearing structure out of genuine inner depth</strong>, rather than either hiding depth or displaying it fleetingly. Cash combined one of the most enduring careers in music history with songs still regarded as unflinchingly honest – a rare balance of structure and substance.</p>
          <p class="vb-intro">The Three's fatal flaw is <strong>vanity / deceit</strong> – in Cash this showed in the public facade of the controlled "Man in Black," maintained for years while he was secretly addicted to amphetamines and barbiturates throughout the 1960s, up to the point of physical collapse. Only in 1967/68, with help from June Carter (SP4w3) and her family, did he manage to get clean – a crisis that shows how much strength it costs the SP3 to maintain a functioning image while everything inside has long threatened to break apart.</p>
        </blockquote>

        <h2 class="vb-section">6. The Healing Path: From Image to Vulnerability</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Three's healing path leads from the question <em>What have I built?</em> to the realization <em>I am – even without the image I maintain.</em> For the SP3w4, this means no longer using depth merely as material for songs, but allowing one's own vulnerability to show unadorned.</p>
          <p class="vb-intro">That is exactly what happened in his final years: starting in 1994, Cash recorded the "American Recordings" series with producer Rick Rubin – usually just his voice and an acoustic guitar, without the usual studio staging. His 2002 cover of Nine Inch Nails' "Hurt," recorded shortly before his death, shows a visibly marked, aged man no longer playing a role. The raccoon that spent a lifetime building systems ended with the gesture of showing himself entirely without facade – Johnny Cash died on September 12, 2003, four months after the death of his wife June.</p>
          <p class="vb-intro">This reach extended beyond the US all the way to Germany: singer Gunter Gabriel (SO8w9) translated several of Cash's songs into German and maintained a close personal friendship with him for years – a bond between the structure-minded raccoon and the lion of the social Eight, built on mutual respect between two very different kinds of musicians.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se3", label:"SP3 – The Raccoon: Subtype Profile"},
        {route:"beruehmte-june-carter-cash", label:"Portrait: June Carter Cash (SP4w3)"},
        {route:"beruehmte-osho", label:"Portrait: Osho (SP3w4)"},
        {route:"beruehmte-david-l-rathmer", label:"Portrait: David L. Rathmer (SP3w4)"},
        {route:"beruehmte-norah-jones", label:"Portrait: Norah Jones (SP3w4)"},
        {route:"beruehmte-paul-bocuse", label:"Portrait: Paul Bocuse (SP3w4)"},
        {route:"beruehmte-gunter-gabriel", label:"Portrait: Gunter Gabriel (SO8w9)"},
      ])}
    </div>
  `);
}

export function karolineHerfurthPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-karoline-herfurth-portrait.jpg" alt="Karoline Herfurth" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Karoline Herfurth</p>
        <p class="krim-portrait-typ">SE4w5 &middot; Self-Preservation Type 4 with F\xfcnferfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Actress, director, b. 1984 – Animal equivalent: Dove</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Dove That Observes</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The dove is the animal of the self-preservation Type 4, and in Karoline Herfurth it demonstrates a special quality: this dove does not land right away. It circles first. It observes, perceives, carries internally what it has seen, and then lands right where it is needed. That is the self-preservation Four with a Five wing: a person who fully lives through their inner world before stepping outward.</p>
          <p class="vb-intro">The German actress Karoline Herfurth is one of the few personalities in Germany who embody this synthesis: a powerful emotional presence on screen, quiet restraint beside it. No constant social media stream, no continuous explanations. Instead: films that speak for themselves. An attitude that says more than any interview.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Four: Tenacity Without Drama</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The self-preservation Four (SE4) is the countertype of the Four; outward-facing, it hardly shows what most people expect from a Four: no drama, no displayed suffering, no romantic self-staging. Instead: a quiet tenacity, a readiness to carry a great deal internally without complaining about it.</p>
          <p class="vb-intro">Karoline Herfurth began acting at just 12 years old, was in feature films by 16, and played Grenouille's victim in Tom Tykwer's Perfume: The Story of a Murderer at 18. This early start demanded a maturity that did not push itself forward—she had to be internally stable while others were still finding their footing. That is the SE4: not the one who talks about her pain, but the one who walks through it and makes something out of it afterward.</p>
          <p class="vb-intro">Her filmography speaks this language: she avoids the slick, the comfortable. She chooses roles that exact a cost—characters with fractures, with inner contradictions, with humanity beyond the surface. The defense pattern of the SE4—the tendency to downplay one's own internal experience—paradoxically turns into artistic strength here: she plays real people because she knows how to carry what is real.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five Wing: The Observer Behind the Camera</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Five wing (w5) adds something decisive to the self-preservation Four: the observer, the analyst, the person who understands first before acting. While the Three wing drives the Four forward and makes them visible, the Five wing pulls back into silence, into depth, into considered judgment.</p>
          <p class="vb-intro">Herfurth's transition to directing is perhaps the clearest expression of this wing. As director of Wunderschön (2022)—a film about women and their relationship with their own bodies—she displays a precision in observing human vulnerability that stems not from a screenwriting course, but from decades of quiet watching. The Five wing thinks before it speaks. It knows what it wants to show and what it leaves out.</p>
          <p class="vb-intro">The SE4w5 combination creates a distinctive type: emotionally deep, intellectually precise, withdrawn enough not to reveal everything, yet open enough to touch something genuine. You notice this in her interviews: little self-dramatization, much reflection. She talks about the subject, not about herself.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow: The Beauty in the Vulnerable</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The core pattern of the Four is envy—not as malice, but as the chronic feeling that others received something one lacks oneself. In the SE4, this envy remains hidden; it manifests as an inner restlessness, as the feeling of never being quite finished, never quite arriving. You see something of this in her choice of film themes: it is almost always about people wrestling with themselves, carrying something broken within them, and moving forward nonetheless.</p>
          <p class="vb-intro">The Five wing reinforces the tendency toward withdrawal: the SE4w5 can retreat into the inner world and reduce external contact to a minimum. That protects, but it also carries the risk that one's own richness remains unseen. Herfurth has evidently chosen this path consciously: she reveals little personal information—yet what she delivers on screen is all the more meaningful.</p>
          <p class="vb-intro">The light of this combination: she can make the vulnerable beautiful without artificiality. Her characters in Wunderschön are not heroines; they are real people wrestling with their physical selves, their story, their age. That is SE4w5 in the best sense: shaping the internal into a form that does not leave others alone.</p>
        </blockquote>

        <h2 class="vb-section">5. The Dove That Finds Its Way Home</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Four leads from the question "What am I missing that was given to others?" to the realization "What I am is complete, and it is mine." For the SE4w5, this means experiencing withdrawal not as an escape, but as a silence in which one's own nature becomes clearer.</p>
          <p class="vb-intro">Karoline Herfurth's artistic trajectory points precisely there. From the child who acted, to the teenager testing boundaries, to the young woman who shone in ensemble casts, to the director making her view of the world public—that is a journey from the role to her own voice. A voice that is quiet, but precise. The dove that no longer searches because it knows where it belongs.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/se4", label:"SE4 – The Dove: Subtype Profile"},
        {route:"beruehmte-tim-bendzko", label:"Portrait: Tim Bendzko (SE4w3)"},
      ])}
    </div>
  `);
}

export function laoziPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-laozi-portrait.jpg" alt="Laozi (Lao Tzu)" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Laozi (Lao Tzu)</p>
        <p class="krim-portrait-typ">SE9w1 &middot; Self-Preservation Type 9 with One-wing</p>
        <p class="krim-portrait-subtitle">Philosopher, c. 6th century BCE (legendary) &ndash; Founder of Daoism, traditionally credited as author of the Tao Te Ching &ndash; Animal correspondence: Elephant</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Elephant</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>elephant</strong> is the animal of the self-preservation Nine &ndash; calm, heavy, almost impossible to rattle, and yet, for all its inertia, of enormous strength. It does not fight for territory, does not defend its status &ndash; it simply moves on when the pasture grows thin, leaving behind what no longer sustains it. Few figures in intellectual history embody this image as completely as Laozi, who, according to tradition, ended his life by riding a black ox westward and vanishing into the desert.</p>
          <p class="vb-intro">Little is historically certain about Laozi's existence (also Lao Tzu, literally "old master") &ndash; tradition places him in the 6th century BCE and makes him an older contemporary of Confucius, whom legend even has him meet. He is credited with the <em>Tao Te Ching</em>, a slim text of just over 5,000 Chinese characters that became the foundation of Daoism &ndash; one of the most influential schools of thought in China, still shaping philosophy, medicine, and the art of living today.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Nine: Peace Through Simplicity</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation Nine (SE9)</strong> seeks inner peace not through relationships or social recognition, but through reduction to the essential: comfort, simplicity, merging with a manageable, natural environment. Naranjo aptly calls this subtype "appetite" &ndash; satisfying one's needs through small, physical comforts as a substitute, when the big, uncomfortable questions of life are meant to be kept at a distance.</p>
          <p class="vb-intro">In Laozi, this basic tendency appears in its most mature, philosophically distilled form: he did not want to administer a kingdom, found a school with thousands of students, or lead a political movement. According to legend, he served for a long time as keeper of the imperial archives &ndash; a withdrawn, observing post &ndash; before he could no longer bear the growing decay of the state and withdrew for good. Not a fight for reform, but the quiet departure from a world that, in his view, was destroying itself.</p>
        </blockquote>

        <h2 class="vb-section">3. Wu Wei: Effortlessness as the Highest Principle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The core concept of the Tao Te Ching is <strong>wu wei</strong>, usually translated as "non-action" or "effortless action." This does not mean literally doing nothing, but acting in a way that does not fight against the natural course of things (the Dao), but fits into it &ndash; like water, which offers no resistance to any obstacle and yet, over time, shapes the hardest stone. "The softest thing in the world overcomes the hardest thing in the world," the Tao Te Ching says.</p>
          <p class="vb-intro">This is the Nine in its purest, most highly integrated form: not avoidance out of comfort, but a deliberate refusal to wear oneself out in friction and resistance. Where Confucius (Type 1) sought to create order through rules, duties, and active example, and Buddha (Type 5) penetrated suffering through unsparing analysis, Laozi taught the opposite of both paths: let go, do not interfere, trust the flow of life instead of trying to control it.</p>
        </blockquote>

        <h2 class="vb-section">4. The One-Wing: Quiet Moral Clarity</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>One-wing (w1)</strong> gives the Nine something a more muted One wing would not have: a clear, almost incorruptible inner orientation. Laozi criticized the artificial harshness, the bloated bureaucracy, and the moral over-regulation of his time &ndash; not through struggle or counter-reform, as an Eight or a strongly One-winged personality might have, but through a call to return to natural simplicity, referred to in the Tao Te Ching as <em>pu</em> (the "uncarved block").</p>
          <p class="vb-intro">"The more laws and regulations, the more thieves and robbers," the Tao Te Ching states &ndash; a critique of excessive regulation that simultaneously formulates a clear moral position. The One-wing gives the Nine a direction without driving it into active resistance: not a fighter against the system, but a quiet admonisher who trusts nature's own wisdom.</p>
        </blockquote>

        <h2 class="vb-section">5. The Legend of the Pass: A Quiet Departure</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The best-known account of Laozi's final years shows the self-preservation Nine in raw form: seeing that the state was decaying and reform was hopeless, he mounted a black ox and rode west, turning his back on the collapsing order for good. At the Hangu Pass, the last border post, the gatekeeper Yinxi stopped him and asked him to write down his wisdom before disappearing. Laozi complied, composing the roughly 5,000 characters of the Tao Te Ching in a short span of time &ndash; then rode on into the desert, never to return.</p>
          <p class="vb-intro">No great farewell speech, no school left behind, no successor appointed &ndash; only a slim text, almost reluctantly written down, and a quiet disappearance. This is precisely the signature of the SE9: no loud struggle for impact, but trust that what truly matters will find its own way even without one's continued involvement &ndash; a trust that, two and a half millennia later, has proven remarkably justified.</p>
        </blockquote>

        <h2 class="vb-section">6. Light and Shadow of the Self-Preservation Nine</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SE9w1 is its ability to live peace not as escape, but as a mature, deliberate stance: not fighting the world, but acting in accordance with its natural course. This calm is not indifference &ndash; the Tao Te Ching is threaded through with a quiet but unyielding clarity about what makes a good life and a good order.</p>
          <p class="vb-intro">The shadow of the Nine shows in the consequences of withdrawal: Laozi left behind no institution, no organized succession, no body of rules beyond his text &ndash; unlike Confucius, whose school continued to shape society actively for centuries. The Nine's risk of disengaging from commitment to the concrete, imperfect world is carried within Laozi's legacy too: a philosophy of timeless depth, but without the sustaining structure that secured its practical impact over time &ndash; had it not been for the gatekeeper at the pass.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/se9", label:"SE9 – The Elephant: Subtype profile"},
        {route:"beruehmte-buddha", label:"Portrait: Siddhartha Gautama (Buddha) (SO5w4)"},
        {route:"beruehmte-konfuzius", label:"Portrait: Confucius (Kong Fuzi) (SO1w2)"},
        {route:"beruehmte-cynthia-moss", label:"Portrait: Dr. Cynthia Moss (SE9w1)"},
        {route:"bibel-jakobus", label:"Bible Portrait: James, Son of Alphaeus (SE9w1)"},
      ])}
    </div>
  `);
}

export function lucyCookePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-lucy-cooke-portrait.jpg" alt="Lucy Cooke – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Lucy Cooke</p>
        <p class="krim-portrait-typ">SX9w8 &middot; Sexual Type 9 with Eight-wing</p>
        <p class="krim-portrait-subtitle">British zoologist, bestselling author &ndash; founder of the Sloth Appreciation Society &ndash; Animal correspondence: Sloth</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Sloth Who Became the Sloth's Ambassador</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sloth</strong> is the animal of the Sexual Nine &ndash; not a lazy animal, but one that merges so completely with its environment that the boundary between it and its habitat blurs. Lucy Cooke is exactly this merging: the British zoologist is today one of the world's best-known sloth ambassadors &ndash; founder of the Sloth Appreciation Society, bestselling author, award-winning TV producer, whose entire public life's work is inseparably bound to this one animal.</p>
          <p class="vb-intro">Her background is scientifically grounded: a master's degree in zoology from New College, Oxford, under evolutionary biologist Richard Dawkins. And yet she did not commit herself to scientific detachment, but to an almost loving devotion to a single, long-underestimated animal &ndash; and became, herself, part of what she studies.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Nine: Merging With the Misunderstood</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sexual Nine (SX9)</strong> seeks merging in its most intense form &ndash; with a single being, an ideal, or, as with Cooke, a single, often misunderstood animal. She founded the Sloth Appreciation Society, wrote several books exclusively about sloths (<em>A Little Book of Sloth</em>, <em>The Power of Sloth</em>, <em>Life in the Sloth Lane</em>), and produced viral sloth videos along with her own calendar. Not one side project among many &ndash; the sloth is the red thread running through her entire life's work.</p>
          <p class="vb-intro">'I am attracted to weird and wonderful animals that are often unloved or misunderstood. I love an underdog,' Cooke says of herself. Her achievement lies in rescuing the sloth from the corner of the supposedly stupid and lazy, and bringing the world its fascinating evolutionary biology and its actual social behavior &ndash; yes, even sloths maintain social bonds, as research now shows.</p>
        </blockquote>

        <h2 class="vb-section">3. The Eight-Wing: Vividness Instead of Sluggishness</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Eight-wing (w8)</strong> gives the Sexual Nine exactly what the sloth, by reputation, lacks: full-blooded, physical vividness. Cooke is described as bold, direct, with high, dynamic energy &ndash; she speaks self-deprecatingly about her fieldwork, calls an encounter with an anteater's tongue 'pretty memorable,' and jokingly refers to her tadpole studies as examining her 'underwater booty.' This is not the reserved, principled note of a One-wing, but the forthright, warm, slightly provocative energy of the Eight-wing.</p>
          <p class="vb-intro">Exactly this combination makes her the perfect ambassador: a humorous, sharp, 'vivid' personality that pairs the sluggish rhythm of her animal with sparkling intellectual enthusiasm. The Eight-wing keeps the Nine's merging from tipping into mere accommodation &ndash; instead it becomes a forthright, unmissable voice for an animal that could never have made itself heard on its own.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of SX9w8 is the ability to <strong>turn complete merging with a subject into contagious, publicly effective enthusiasm</strong> &ndash; Cooke's work fundamentally changed how the public thinks about sloths, and her bestseller <em>The Truth About Animals</em> extended this principle to numerous other misunderstood species.</p>
          <p class="vb-intro">The shadow of the Sexual Nine with an Eight-wing shows where one's own identity merges so completely with a single subject that separation becomes almost unthinkable &ndash; a life publicly perceived almost exclusively as 'the sloth woman,' however well-earned that reputation may be.</p>
        </blockquote>

        <h2 class="vb-section">5. The Sloth Who Showed the World What's in the Sloth</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What Lucy Cooke gives the world is proof that slowness is not a weakness but a distinct, highly efficient survival strategy &ndash; and that exactly this principle, told with the right dose of liveliness, can captivate an audience of millions.</p>
          <p class="vb-intro">In the end, one image remains that reads almost like living proof for this compass: a woman whose archetypal animal is the sloth, who devoted herself to that animal with a dedication far exceeding scientific interest &ndash; and who, with contagious energy, apparently unknowingly researched her own deepest pattern along the way.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${bookTip("enneagramm-zoo", "27 Animal Portraits – each Subtype animal with character, biology and Enneagram connection.", "Enneagramm-Zoo")}
      ${bookTip("archetypen-der-tiere-im-enneagramm", "The archetypal animals of the 9 types as an inner map – images that work instantly.", "Archetypen der Tiere im Enneagramm")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/sx9", label:"SX9 – The Sloth: Subtype Profile"},
        {route:"lebensmusterkompass/sx9", label:"Life Pattern Compass: SX9 – Sloth"},
        {route:"beruehmte-mario-barth", label:"Portrait: Mario Barth (SX9w8)"},
        {route:"beruehmte-heike-makatsch", label:"Portrait: Heike Makatsch (SX9w8)"},
        {route:"beruehmte-elizabeth-barrett-browning", label:"Portrait: Elizabeth Barrett Browning (SX9w8)"},
        {route:"beruehmte-ana-salceda", label:"Portrait: Ana Salceda (SX9w1) – also a sloth correspondence"},
        {route:"tierforscher-uebereinstimmung", label:"Animal-Researcher Correspondence: more examples"},
        {route:"beruehmte-kris-marshall", label:"Portrait: Kris Marshall (SX9w1)"},
      ])}
      ${animalResearcherMatchBlock("beruehmte-lucy-cooke")}
    </div>
  `);
}

export function marieKondoPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-marie-kondo-portrait.jpg" alt="Marie Kondo" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Marie Kondo</p>
        <p class="krim-portrait-typ">SE1w2 &middot; Self-Preservation Type 1 with Two-Wing</p>
        <p class="krim-portrait-subtitle">Organizing consultant, author & entrepreneur – b. 1984 – Animal equivalent: Eagle</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Eagle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The eagle is the animal of the self-preservation One, and Marie Kondo embodies it with a purity that is rare. The eagle has a sharp eye for the essential. It sees what is right and what is not right with a precision that needs no argument. It circles, it observes, it discerns. And when it lands, it lands exactly.</p>
          <p class="vb-intro">The Japanese organizing consultant Marie Kondo was born in Tokyo in 1984 and began reading home interior magazines at age five. At nine, she organized the bookshelves in her classroom. At fifteen, she developed the first basic outlines of her later method. That is no career that was planned—that is an eagle following its inner compass before encountering any external pressure of expectations.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation One: Order as an Inner Need</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The self-preservation One (SE1) is the subtype that does not carry its demand for perfection outward, but inward and, above all: home. Naranjo called this subtype Worry: a constant, quiet restlessness about whether one's own environment is truly right, whether one's own life corresponds to the inner standard. This restlessness is not a deficiency. It is the engine of a lifelong refinement.</p>
          <p class="vb-intro">Marie Kondo's KonMari Method is no organization aid like those known from lifehacking books. It is an internal system. The decisive question is not: "Do I need this?" or "Is this practical?" but: "Does it spark joy?" That is the benchmark of an SE1: not utility, not reason, but inner resonance. What corresponds to one's own standard may stay. What is not right goes.</p>
          <p class="vb-intro">The categories, the sequence, the folding technique: everything is precise, everything has its reason, everything is tested. No improvisation. No "roughly like this." The SE1 lives in a universe in which things are either in their right place or not.</p>
        </blockquote>

        <h2 class="vb-section">3. The Two Wing: Helping as a Calling</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Two wing (w2) lends the self-preservation One something that it does not find so easily on its own from within: warmth, contact, the need to touch others. The Two wing wants to give. It wants others to bloom—not because it expects something in return, but because the well-being of others is genuinely close to its heart.</p>
          <p class="vb-intro">Without this wing, Marie Kondo might have remained an extraordinarily tidy private individual. The Two wing is the reason why an inner standard became a method, the method a book, and the book a global phenomenon. She did not just tidy her own home—she decided to help others do the same. Not because it was her job, but because she understood that clearing the outside enables clearing the inside.</p>
          <p class="vb-intro">In her Netflix series Tidying Up with Marie Kondo, one sees this wing in pure form: she enters strangers' houses with complete attentiveness, with genuine curiosity for the people behind the things. She does not judge. She accompanies. That is the Two in the One: precision in the service of connection.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: Wrath as Inner Rigor</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the One is called wrath, and in the SE1w2 it is turned so completely inward that it is hardly visible on the outside. Marie Kondo always appears calm, always friendly, always measured in public. But behind this stillness lies an inner judge who is relentless: a quiet, constant knowledge of what is right and what is not right.</p>
          <p class="vb-intro">This wrath does not show itself as criticism of others. It shows itself as absolute consistency in her own system. The KonMari Method has no exceptions. There is no "but this is an inheritance" rule. There is no "maybe later" category. Either an item sparks joy, or it leaves the house. This uncompromisingness is the wrath of the One: not loud, but complete.</p>
        </blockquote>

        <h2 class="vb-section">5. Gratitude as a Bridge</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">One of the most famous elements of the KonMari Method is gratitude toward items: one thanks a piece of clothing before giving it away. The house is greeted upon arrival. This practice often seems strange to Western observers—but it is the key to Marie Kondo's inner logic.</p>
          <p class="vb-intro">Here, the SE1 demand for perfection meets the relational quality of the Two wing. The SE1 knows: everything has its value, its place, its purpose. The Two wing adds: and this value deserves acknowledgment. Things that have departed have served. Letting go becomes an act of respect and thus something healing, not loss-filled. This connection of order and dignity is the core of Marie Kondo's work.</p>
        </blockquote>

        <h2 class="vb-section">6. The Gift: Joy as a Compass</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What Marie Kondo has given the world goes far beyond tidying tips. She taught an entire generation of people that order is not an end in itself—it is a form of self-respect. And that the decisive question in life is not: "What should I keep?" but: "What sparks joy?"</p>
          <p class="vb-intro">That is the gift of the SE1w2: an inner system that is so clear that others can learn it, and a warmth that is large enough that it wants to pass it on. The eagle has a benchmark. The Two wing turns it into an invitation. Marie Kondo has both.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/se1", label:"SE1 – The Eagle: Subtype Profile"},
        {route:"beruehmte-queen-elizabeth-ii", label:"Portrait: Queen Elizabeth II (SE1w9)"},
        {route:"beruehmte-christoph-waltz", label:"Portrait: Christoph Waltz (SE1w2)"},
      ])}
    </div>
  `);
}

export function mickeyRourkePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-mickey-rourke-portrait.jpg" alt="Mickey Rourke – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Mickey Rourke</p>
        <p class="krim-portrait-typ">SP2w3 &middot; Self-Preservation Type 2 with Three-Wing</p>
        <p class="krim-portrait-subtitle">American actor, born 1952 in Schenectady, New York &ndash; Animal correspondence: Hippopotamus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Hippopotamus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Hippopotamus</strong> is the animal of the self-preservation Two &ndash; a creature that hides its vulnerability under a massive, often intimidating surface and allows real closeness only within its closest, most reliable circle. Few careers show this dual nature as clearly as Mickey Rourke's: a man whose public image is defined by toughness, while for decades his deepest, most faithful bond was with his dogs.</p>
          <p class="vb-intro">Philip Andre Rourke Jr. was born on September 16, 1952, in Schenectady, New York, and found early refuge from a difficult home life in the boxing ring &ndash; at the same Miami gym that had once produced Muhammad Ali (SO2w1). The ring became, for him, a place where pain took on a clear, controllable form instead of remaining diffuse and unpredictable.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Two: When the Dogs Were Everything</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the <strong>self-preservation Two (SP2)</strong> <em>Me First</em>: care turns first to one's own concrete survival and closest circle, before it turns outward. In Rourke, this showed with particular intensity during the loneliest years of his career: when his acting career had essentially collapsed in the 1990s, it was his dogs who remained.</p>
          <p class="vb-intro"><em>The dogs were there when no one else was there</em>, he said later &ndash; <em>they became everything to me</em>. In his 2009 Golden Globe acceptance speech for <em>The Wrestler</em>, he explicitly thanked all his dogs, living and gone: <em>Sometimes when a man's alone, that's all you got is your dog, and they meant the world to me.</em> His Chihuahua-terrier mix Loki, whom he called "like a giant Xanax," died just days before the 2009 Oscars &ndash; a loss that shows how concrete and physical the SP2's care is bound to be, not attached to an abstract idea but to a single, tangible being.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: A Body, Rebuilt Twice</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the self-preservation Two the drive to build, out of a secured foundation, visible, publicly effective success &ndash; and, if necessary, to rebuild one's own image from the ground up. In the 1980s, Rourke was one of the most sought-after screen stars of his generation with films like <em>9½ Weeks</em> and <em>Angel Heart</em>, before giving up acting in 1991 for a professional boxing career.</p>
          <p class="vb-intro">Eight fights, no title shot, but severe facial injuries requiring numerous reconstructive surgeries &ndash; Rourke literally rebuilt his own face before showing it to the public again in 2008 as aging wrestler Randy "The Ram" Robinson in <em>The Wrestler</em>. The parallel between character and performer, both former fighters searching for one last great comeback, made the film one of the most striking self-portrayals in recent film history. The Three-wing translated decades of physically suffered destruction into one of Hollywood's most moving comebacks.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Self-Preservation Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP2w3 lies in the ability to shape, out of the deepest personal loss &ndash; one's own career, one's own face, years of isolation &ndash; a role that turns exactly that pain into something artistically true. Rourke's Golden Globe win for <em>The Wrestler</em> was not an ordinary acting success, but public recognition of a path that led through real, years-long wounds.</p>
          <p class="vb-intro">The fate pattern of the Two is <strong>pride</strong> &ndash; the conviction of being indispensable through one's own toughness and independence. In the SP2w3, this can combine with a willingness to subject one's own career and body to radical, risky reinvention &ndash; a strength that led to one of the most remarkable comebacks in film history, but also demanded a high physical and personal price.</p>
        </blockquote>

        <h2 class="vb-section">5. The Work: From Screen Star Through the Boxing Ring Back to the Screen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">From the early successes of the 1980s through his professional boxing career and years of relative obscurity to the celebrated comeback with <em>The Wrestler</em> and his role as Marv in <em>Sin City</em>, a single thread runs through Rourke's work: a body and a career repeatedly taken apart and put back together, never given up.</p>
          <p class="vb-intro">The hippopotamus does not leave its ancestral waters to please anyone &ndash; it defends what belongs to it, even when no one else is watching. Mickey Rourke's path from Hollywood star through the boxing ring, accompanied only by his dogs, back to the screen shows this drive at its rawest: survival first, then everything else.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se2", label:"SP2 – The Hippopotamus: Subtype Profile"},
        {route:"beruehmte-mr-t", label:"Portrait: Mr. T (SP2w3)"},
        {route:"beruehmte-quentin-tarantino", label:"Portrait: Quentin Tarantino (SP2w3)"},
      ])}
    </div>
  `);
}

export function nateDoggPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-nate-dogg-portrait.jpg" alt="Nate Dogg – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Nate Dogg</p>
        <p class="krim-portrait-typ">SP2w3 &middot; Self-Preservation Type 2 with Three-Wing</p>
        <p class="krim-portrait-subtitle">American singer &amp; rapper, 1969&ndash;2011 &ndash; "King of Hooks" &ndash; Animal correspondence: Hippopotamus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Hippopotamus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Hippopotamus</strong> is the animal of the self-preservation Two &ndash; a creature that draws its strength from a fixed, familiar circle rather than scattering it far and wide. Nate Dogg began his musical life not on a stage but at New Hope Baptist Church in Long Beach, where his own father, Daniel Lee Hale, preached as pastor &ndash; a voice shaped from the ground up within the closest family and community environment.</p>
          <p class="vb-intro">Nathaniel Dwayne Hale was born on August 19, 1969, in Clarksdale, Mississippi, and moved to Long Beach, California, at age fourteen after his parents' divorce. After dropping out of high school at seventeen, he served three years as an ammunition specialist in the US Marine Corps in Japan before returning to Long Beach &ndash; a path through discipline and service before music became his actual calling.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Two: A Voice in Service of the Closest Circle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the <strong>self-preservation Two (SP2)</strong> <em>Me First</em>: care turns first to one's own closest foundation, before it extends further. Back in Long Beach, Nate Dogg formed the group 213 with his childhood friends Snoop Dogg (SX7w8) and Warren G &ndash; not a chance collaboration, but a continuation of the same bond, grown since youth, that carried his entire later body of work.</p>
          <p class="vb-intro">In 1992, he debuted on Dr. Dre's (SO2w3) album <em>The Chronic</em> and signed to Death Row Records in 1993 &ndash; yet instead of standing at the center as a solo artist, his most important contribution across an entire career remained the chorus, the hook, the voice in service of other people's songs. The SP2 doesn't give in order to shine itself, but because its care is directed at the success of the whole.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: "King of Hooks"</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the self-preservation Two the drive to turn a loyal foundation into visible, recognizable success. Nate Dogg's sonorous, unmistakable baritone became, over more than a decade, a fixture on countless hip-hop hits &ndash; sixteen entries on the Billboard Hot 100, including "Ain't No Fun" with Snoop Dogg and "The Next Episode" with Dr. Dre (SO2w3), earned him the nickname "King of Hooks."</p>
          <p class="vb-intro">His three solo albums, meanwhile, never sold more than 500,000 copies each &ndash; a clear mismatch between the impact of his voice on other people's songs and the commercial success of his own work. The Three-wing nonetheless turned this supporting role into an unmistakable, publicly recognized brand: his contribution was small in song length, but enormous in recognizability.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Self-Preservation Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP2w3 lies in the ability to put one's own contribution entirely in service of other people's work without losing one's own distinctiveness. Nate Dogg's voice helped define an entire era of G-funk, even though he himself rarely stood at the center of attention &ndash; a rare case of influence that isn't measured by one's own chart positions.</p>
          <p class="vb-intro">The fate pattern of the Two is <strong>pride</strong> &ndash; the conviction of being indispensable through one's own care. In the SP2w3, this can combine with a tendency to place one's own visibility behind the success of others, even when one's own work remains commercially in the shadow as a result &ndash; a generosity that produced enormous cultural influence but rarely paid off in personal fame.</p>
        </blockquote>

        <h2 class="vb-section">5. The Work: A Voice That Made Other People's Songs Immortal</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">From his father's church through his friendship with Snoop Dogg and Warren G to sixteen Billboard Hot 100 hits as a guest vocalist, a single thread runs through Nate Dogg's work: a voice whose greatest impact unfolded in service of other people's work, not his own.</p>
          <p class="vb-intro">The hippopotamus does not leave its ancestral waters to please anyone &ndash; it carries its strength to wherever it's needed. Nate Dogg died on March 15, 2011, from complications of two strokes. His path from the church pew through his closest circle of friends to "King of Hooks" shows this drive at its purest: care that would rather make other people's songs immortal than put its own voice at the center.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se2", label:"SP2 – The Hippopotamus: Subtype Profile"},
        {route:"beruehmte-ice-cube", label:"Portrait: Ice Cube (SP2w3)"},
        {route:"beruehmte-monica-simpson", label:"Portrait: Monica Simpson (SP2w3)"},
        {route:"beruehmte-dr-dre", label:"Portrait: Dr. Dre (SO2w3)"},
      ])}
    </div>
  `);
}

export function peterFalkPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-peter-falk-portrait.jpg" alt="Peter Falk" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Peter Falk</p>
        <p class="krim-portrait-typ">SO9w1 &middot; Social Type 9 with One-wing</p>
        <p class="krim-portrait-subtitle">Actor, 1927&ndash;2011 &ndash; world-famous as TV detective "Columbo" &ndash; Animal correspondence: Buffalo</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Buffalo</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>buffalo</strong> is the animal of the social Nine &ndash; an animal that never stands out through aggression, but exerts its effect simply through its unhurried presence. It moves slowly, seems almost harmless &ndash; and yet is the animal on the prairie that fewest creatures willingly stand in the way of. Few actors embodied this image as precisely as Peter Falk, and few roles made it as visible as his most famous one: the detective Columbo, in a rumpled trench coat, with a half-smoked cigar and an old Peugeot that always seems on the verge of breaking down.</p>
          <p class="vb-intro">From 1968 to 2003, Falk played this man across 69 episodes &ndash; a detective who never shouts, never threatens, never draws a weapon. His only tool is patience. The buffalo seems as though it could be pushed aside. Every single time, that turns out to be a mistake &ndash; and the role fit Falk so precisely that many still believe he barely acted the part, but simply showed himself.</p>
        </blockquote>

        <h2 class="vb-section">2. Social Nine: Equal Among Unequals</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the <strong>social Nine (SO9)</strong> <em>Participation</em>: the ability to fit into any group, any milieu, any social class, and find peace within it without losing one's own identity. As Columbo, Falk's cases took him through mansions, film studios, law firms, vineyards, and science labs &ndash; and in every one of these settings, he treated every person with the same attentiveness: the butler, the chauffeur, the housekeeper, exactly as much as the millionaire suspect himself.</p>
          <p class="vb-intro">This was no tactic but the very core of SO9 that Falk wrote into his character: he asks the wine steward about the vintage, the director about the camera work, the secretary about her daily routine &ndash; with genuine interest, not as an interrogation technique. This exact ability to fit into any social stratum without bending or ingratiating himself is the character's true superpower: Columbo is never perceived as a threat anywhere, because he genuinely belongs a little everywhere.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-Wing: The Quiet Judge</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>One-wing (w1)</strong> gives the social Nine something a Nine with a less developed One wing often lacks: an unshakable inner compass for right and wrong. Columbo's cases are directed almost without exception at wealthy, powerful, socially untouchable-seeming perpetrators &ndash; doctors, directors, scientists, vintners &ndash; convinced their status places them above the law.</p>
          <p class="vb-intro">Columbo is never impressed by this. He shows no anger, no condescension &ndash; but also not an inch of leniency. "Just one more thing..." is one of the most polite phrases in television history and, at the same time, one of the most relentless: the One within him will not let go until the truth is spoken. Justice, for him, is no act of vengeance but a quiet, almost impersonal necessity, regardless of how likable or brilliant the perpetrator seated across from him may be.</p>
        </blockquote>

        <h2 class="vb-section">4. The Method: Harmlessness as a Tool</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The show's format was revolutionary for its time: the viewer sees the murder within the first few minutes &ndash; the real suspense lies not in "who did it" but in "how will he be caught." This construction works only because Columbo's method itself becomes the spectacle: he appears seemingly distracted, forgetful, almost clumsy, lulling suspects into a false sense of security &ndash; and it is exactly within this false feeling of superiority that they entangle themselves in the small contradictions he has already noticed.</p>
          <p class="vb-intro">Social Nine with the One-wing does not confront directly &ndash; it lets the truth reveal itself while patiently remaining in the room. Not once across the entire series does Columbo draw a weapon. His advantage is purely psychological, purely patient &ndash; and precisely for that reason so difficult to see through. Falk himself once said he never played the character as "cleverly acting," but as genuinely perceiving &ndash; the disguise, for him, was not a tactic but real curiosity about people.</p>
        </blockquote>

        <h2 class="vb-section">5. The Man Behind Columbo</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Peter Falk lost his right eye to a tumor at age three and wore a glass eye for the rest of his life &ndash; a fact he handled openly and with humor, occasionally even using it deliberately in his roles. Before his acting career, he had earned a master's degree in public administration and worked as an efficiency examiner for the Connecticut state budget bureau &ndash; a background that almost prophetically anticipates the methodical, detail-obsessed thoroughness of his later signature role.</p>
          <p class="vb-intro">Away from Columbo, Falk maintained a close friendship with independent director John Cassavetes and appeared in his uncompromising, uncommercial films such as "A Woman Under the Influence" &ndash; the same man who entertained millions as Columbo deliberately sought out the small, honest, unglamorous project on the side. He received four Emmys for the role &ndash; yet the real recognition lay in the fact that generations of viewers loved a character whose strength lay precisely in never wanting to appear strong. Those who knew Falk off-camera described him in similar terms: down-to-earth, curious about everyone in the room, without airs &ndash; the buffalo stayed the same, whether in front of the camera or behind it.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: The Buffalo Who Overlooked No One</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Columbo remains one of the most influential detective characters in television history to this day &ndash; not because of spectacular action, but because of a radically different idea of strength: attentiveness instead of aggression, patience instead of pressure, respect for every person in the room instead of hierarchical thinking. That is exactly the lasting image of the social Nine with the One-wing: it never needs to belittle anyone in order to be proven right in the end.</p>
          <p class="vb-intro">The buffalo that fits into any herd while never forgetting what it stands for &ndash; that was Peter Falk's Columbo. And judging by the biographical traces, it was fitting that he was the one to bring this character to life: the role was not imposed on him &ndash; it was written for him, in every sense that mattered.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/so9", label:"SO9 – The Buffalo: Subtype Profile"},
        {route:"beruehmte-kevin-costner", label:"Portrait: Kevin Costner (SO9w1)"},
        {route:"beruehmte-tom-hanks", label:"Portrait: Tom Hanks (SO9w1)"},
        {route:"beruehmte-steffi-graf", label:"Portrait: Steffi Graf (SO9w1)"},
        {route:"krankheitsportraets-peter-falk", label:"Illness Portrait: Peter Falk – Alzheimer's disease"},
        {route:"bibel-barabbas", label:"Bible Portrait: Barabbas (SO9w1)"},
        {route:"beruehmte-alan-mcelligott", label:"Portrait: Dr. Alan McElligott (SO9w1)"},
      ])}
    </div>
  `);
}

export function robertSchumannPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-robert-schumann-portrait.jpg" alt="Robert Schumann" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Robert Schumann</p>
        <p class="krim-portrait-typ">SX7w8 &middot; Sexual Type 7 with Eight-wing</p>
        <p class="krim-portrait-subtitle">German composer and music critic, 1810&ndash;1856 &ndash; Animal correspondence: Chimpanzee</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Chimpanzee in Two Guises</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>chimpanzee</strong> is the animal of Sexual Type 7 &ndash; a creature that does not live in quiet distance but in immediate, often overflowing contact with the world. Few composers made this dual nature as conscious as Robert Schumann, who split his own personality into two literary figures: the stormy, impulsive <em>Florestan</em> and the dreamy, inward-turned <em>Eusebius</em>. He signed his music reviews alternately with both names &ndash; as if he himself knew that more than one voice spoke within him.</p>
          <p class="vb-intro">The German composer Robert Schumann, born in 1810 in Zwickau as the son of a bookseller and writer, grew up in a house full of literature. The chimpanzee's restlessness showed itself early: law studies here, piano virtuosity there, poetry in between &ndash; before he finally committed himself entirely to music. A self-inflicted hand injury, likely caused by a mechanical practice device, abruptly ended his career as a pianist and redirected all his energy toward composing and writing.</p>
        </blockquote>

        <h2 class="vb-section">2. Sexual Seven: Enthusiasm Without Reservation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro"><strong>Sexual Seven (SX7)</strong> does not seek cautious examination but complete surrender to whatever excites it. Naranjo called this subtype <em>Suggestibility</em>: the ability to draw oneself and others entirely into a state of enthusiasm. Schumann lived this pattern not only in his music but as a critic and discoverer as well.</p>
          <p class="vb-intro">In 1853, three years before his death, he heard a completely unknown 20-year-old pianist named Johannes Brahms play &ndash; and that same evening wrote in his diary that here was someone "called to give ideal expression to the highest expression of the age." Days later he published the essay <em>Neue Bahnen</em> (New Paths), proclaiming the young Brahms, without any reservation, as a coming master &ndash; a leap into enthusiasm that a more cautious critic would never have dared. That is exactly Sexual Seven: not a measured assessment, but the full, contagious outburst of enthusiasm.</p>
        </blockquote>

        <h2 class="vb-section">3. The Eight-Wing: The Fight for Clara</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Eight-wing (w8)</strong> gives the Sexual Seven something Sevens with a less developed Eight wing often lack: the willingness for open combat. Schumann fell in love with Clara Wieck, the highly gifted pianist daughter of his own piano teacher Friedrich Wieck &ndash; and Wieck did everything to prevent the union: smear campaigns, relocations, even a years-long court case.</p>
          <p class="vb-intro">A Seven with a weaker Eight wing would likely have given up on this front and turned to an easier love. Schumann instead fought for years, took the matter to court, and finally forced the marriage in 1840 against his teacher's declared will. That is the Eight-wing of the Sexual Seven: where a more muted Eight wing evades, the SX7w8 stays and prevails &ndash; not out of calculation, but because the longed-for object of enthusiasm cannot be given up at any price.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: Gluttony as Creative Outburst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the Seven is called <strong>gluttony</strong> or <strong>excess</strong> &ndash; the insatiable hunger for more. In Schumann this did not manifest as dispersal but as creative bursts of almost inconceivable density. In the year of his wedding, 1840, he composed over 140 songs &ndash; still known today as his "Liederjahr" (Year of Song). 1841 followed as the "Symphonic Year," 1842 as the "Chamber Music Year." Schumann did not work in an even flow but in waves of total devotion to a single genre, until the next outburst overwrote everything.</p>
          <p class="vb-intro">This excess was both blessing and warning sign. As long as the creative energy found a channel, a body of work of enormous breadth emerged &ndash; piano works, songs, symphonies, chamber music, an opera. But the same inability to slow down that carried his creative power also carried the instability that would later overwhelm his life.</p>
        </blockquote>

        <h2 class="vb-section">5. The Shadow: When Intensity Turns Against Oneself</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Schumann suffered his whole life from severe mood swings that intensified dramatically in his final years &ndash; voices in his head, tormenting anxiety, the loss of the ability to think clearly. In February 1854, in a fit of utter despair, he left his house and jumped into the Rhine. Fishermen pulled him out, barely alive.</p>
          <p class="vb-intro">What happened afterward has rarely been documented as openly as in Schumann's case: he himself asked to be admitted to an asylum near Bonn &ndash; an act in which a last remnant of conscious control still lay over a situation that had long since spiraled out of control. He lived there for two years, largely isolated from Clara, whom he was allowed to see again only shortly before his death in 1856. Only the young Brahms, whom he had discovered three years earlier, visited him regularly and became the family's closest support during this time. That is the flip side of SX7w8: an intensity that knows no resistance can, when turned inward against oneself, become a undertow from which even the fighter in the Eight-wing can no longer find a way out.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: The Discoverer Who Could Not Save Himself</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Robert Schumann's legacy is twofold: as a composer he left behind a body of work in which the full range of SX7w8 is mirrored &ndash; from the tender intimacy of the "Kinderszenen" to the stormy force of his symphonies. As a critic and discoverer he gave music history one of its most consequential moments of enthusiasm: without his unconditional passion for the unknown Brahms, the latter's path would likely have been a different one.</p>
          <p class="vb-intro">And yet the tragedy remains: the man who could so effortlessly carry others along and fight for them found, in the end, no way to save himself from his own undertow. The chimpanzee with the Eight-wing, who fought for Clara and burned for Brahms, lost the final fight against himself &ndash; and left behind a music that still makes audible, to this day, exactly this tension between intoxication and abyss.</p>
        </blockquote>

        <p class="vb-intro">The 1854 leap into the Rhine and the two years in the asylum near Bonn are explored in depth in the dedicated <a href="javascript:void(0)" data-route="krankheitsportraets-robert-schumann">Illness Portrait of Schumann</a>.</p>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"krankheitsportraets-robert-schumann", label:"Illness Portrait: Robert Schumann (SX7w8)"},
        {route:"beruehmte-ludwig-van-beethoven", label:"Portrait: Ludwig van Beethoven (SX6w5)"},
        {route:"beruehmte-franz-schubert", label:"Portrait: Franz Schubert (SE6w5)"},
        {route:"beruehmte-johannes-brahms", label:"Portrait: Johannes Brahms (SE9w8) – discovered by Schumann"},
        {route:"beruehmte-franz-liszt", label:"Portrait: Franz Liszt (SX7w8)"},
        {route:"subtype/sx7", label:"SX7 – The Chimpanzee: Subtype Profile"},
      ])}
    </div>
  `);
}

export function soerenKierkegaardPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-soeren-kierkegaard-portrait.jpg" alt="Søren Kierkegaard" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Søren Kierkegaard</p>
        <p class="krim-portrait-typ">SP2w1 &middot; Self-Preservation Type 2 with One-wing</p>
        <p class="krim-portrait-subtitle">Danish philosopher and theologian, 1813&ndash;1855 &ndash; Animal correspondence: Hippopotamus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Hippopotamus That Stayed in Its Own Waters</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>hippopotamus</strong> is the animal of the self-preservation Two &ndash; an animal that marks its territory with a precision biologists only came to understand late: it scatters its dung along exact, repeated paths, always in the same places, as if every boundary of its territory had to be recorded in writing. No accident, no randomness &ndash; a system any intruder can read, if it looks closely enough.</p>
          <p class="vb-intro">The Danish philosopher Søren Kierkegaard barely left Copenhagen his entire life, remaining almost exclusively within his own city, his own mind, his own inner waters &ndash; and from there defended, with unrelenting consistency, what he held to be the truth about human existence.</p>
          <p class="vb-intro">Born in 1813, the youngest of seven children of a wealthy but deeply melancholic wool merchant, he grew up in a household steeped in guilt and religious dread: his father later confessed to him that in his youth he had cursed God, and that he had had an affair before marrying Kierkegaard's mother &ndash; a confession that convinced the young Søren his family lived under a divine curse. Five of his siblings died before he reached adulthood himself. The hippopotamus learned early: survival means looking closely at what is truly threatening.</p>
        </blockquote>

        <h2 class="vb-section">2. Self-Preservation Two: One's Own Existence as the Testing Ground</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation Two (SP2)</strong> directs the Two's energy first toward its own foundation of existence &ndash; Naranjo called this subtype <em>Me First</em>, not in the egotistical but in the existential sense: before I can care for others, I must know how I myself survive. Kierkegaard's entire philosophical project can be read as exactly this question, thought through radically: how does a single human being actually live, in the face of anxiety, guilt, and the necessity of choosing oneself?</p>
          <p class="vb-intro">His central concept, "the single individual" (den Enkelte), places one's own, irreplaceable existence radically at the center &ndash; against the anonymity of the crowd, against Hegel's abstract system, which for Kierkegaard explained everything except what mattered most: how a concrete person actually has to live their own life. His meticulous, often daily journals &ndash; tens of thousands of pages &ndash; are the record of an SP2 who had to name her own inner reality as precisely as possible in order to endure it at all.</p>
          <p class="vb-intro">The SP2 has also been described as the "child in adult's clothing" &ndash; an image that fits Kierkegaard with striking precision. Behind the stern, often gloomy-seeming thinker lay a man who remained shaped his whole life by the fear and vulnerability of his childhood: readers of his journals repeatedly meet a wounded self searching for footing beneath the philosophical armor &ndash; the child who had learned, in a household steeped in guilt and dread, to appear grown-up early, without ever quite becoming so on the inside.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-Wing: The Attack Upon Christendom</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>One-wing (w1)</strong> gives the self-preservation Two an inner code that carries independently of others' approval: there is a right and a wrong, and the Two knows which side it stands on. In Kierkegaard, this wing reached its most radical form in the final months of his life: in the pamphlet series "The Moment," he openly attacked the Danish state church in 1854/55, calling established Christendom a falsification of original Christianity and accusing its bishops, above all the recently deceased Bishop Mynster, of hypocrisy.</p>
          <p class="vb-intro">This attack cost him nearly his entire social standing &ndash; but the SP2w1 does not first ask what something costs, but whether it is right. The same wing had shown itself years earlier: when in 1846 he publicly accused the satirical paper "The Corsair" of journalistic irresponsibility, he provoked months of merciless public mockery &ndash; caricatures of his trousers, his slightly crooked back, his gait on the streets of Copenhagen. He could have stayed silent. The One-wing would not allow it.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow: Regine Olsen and the Art of Indirect Communication</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of SP2w1 shows in Kierkegaard's uncompromising honesty toward himself &ndash; and in the literary skill with which he made that honesty accessible to others. In 1840 he became engaged to seventeen-year-old Regine Olsen, but broke off the engagement a year later, convinced that his deep melancholy and his sense of religious vocation could not be reconciled with ordinary married life. This decision, which he himself described as one of the most painful of his life, became the hidden motive behind nearly all of his early work.</p>
          <p class="vb-intro">Rather than asserting his position directly, Kierkegaard wrote under a multitude of pseudonyms &ndash; Johannes de Silentio, Victor Eremita, Johannes Climacus &ndash; letting different "stages of existence" (the aesthetic, the ethical, the religious) argue against one another through fictional voices, without taking sides himself. The shadow of this method: a man who was in fact deeply direct hid behind masks, because the full truth about himself was too painful to say without detour. The hippopotamus defended its innermost self by rarely showing it whole.</p>
        </blockquote>

        <h2 class="vb-section">5. The Legacy: Consistent to the Last Breath</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In October 1855, in the midst of his campaign against the state church, Kierkegaard collapsed in the street and was taken to Frederiks Hospital. He died a few weeks later, at the age of 42 &ndash; by then he had spent his entire inherited fortune on self-publishing his works and was nearly penniless. To the last, he refused to receive communion from an official clergyman of the church he had publicly accused of dishonesty &ndash; a final, radical act of alignment between conviction and action.</p>
          <p class="vb-intro">The hippopotamus with the One-wing thus left behind no comfortable system, but a method of radically honest existing that only unfolded its full impact decades later: Kierkegaard is regarded today as one of the founders of existentialism, his thought shaping philosophers such as Heidegger, Sartre, and Camus. A man who never made his own survival dependent on the world's applause became, against his own often desperate resistance, one of the most influential voices in modern philosophy.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/se2", label:"SP2 – The Hippopotamus: Subtype Profile"},
        {route:"beruehmte-greta-thunberg", label:"Portrait: Greta Thunberg (SP2w1)"},
        {route:"beruehmte-margot-friedlaender", label:"Portrait: Margot Friedländer (SP2w1)"},
        {route:"beruehmte-franka-potente", label:"Portrait: Franka Potente (SP2w1)"},
        {route:"beruehmte-immanuel-kant", label:"Portrait: Immanuel Kant (SO6w5)"},
        {route:"beruehmte-heraklit", label:"Portrait: Heraclitus (SO4w5)"},
        {route:"beruehmte-georg-wilhelm-friedrich-hegel", label:"Portrait: Georg Wilhelm Friedrich Hegel (SO5w6) – lifelong adversary of 'the System'"},
      ])}
    </div>
  `);
}

export function thomasGottschalkPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-thomas-gottschalk-portrait.jpg" alt="Thomas Gottschalk" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Thomas Gottschalk</p>
        <p class="krim-portrait-typ">SX7w6 &middot; Sexual Type 7 with Six-wing</p>
        <p class="krim-portrait-subtitle">Television presenter, entertainer &amp; actor, born 1950 &ndash; Animal correspondence: Chimpanzee</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Chimpanzee</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Chimpanzee</strong> is the animal of the Sexual Type 7 &ndash; and no image fits Thomas Gottschalk better. The Chimpanzee is the most vivid, most curious, most unpredictable of the great apes. It needs stimulation: contact, play, surprise, connection. It learns through imitation, through interaction, through direct contact with the other. In captivity it withers &ndash; not because it falls ill, but because it lacks what it needs most: the spark of the moment.</p>
          <p class="vb-intro">Thomas Gottschalk presented before an audience of millions for 23 years &ndash; and never appeared to be playing a role. He was always himself: volatile, charming, direct, sometimes surprising, sometimes uncomfortable, always vivid. The Chimpanzee is not programmable. It reacts to what is happening right now. And that is precisely what makes it the most fascinating animal in the room.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Seven: Enthusiasm as a Spark</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sexual Seven (SX7)</strong> is the subtype of the Seven in which energy does not turn inward (SP7) or into society (SO7) but directly into contact: into the other person, into the moment, into the connection. Naranjo called this subtype <em>Suggestibility</em> &ndash; the capacity for enthusiasm that is transmitted. The SX7 infects others. Not with a message, but with its sheer energy.</p>
          <p class="vb-intro">Thomas Gottschalk was never a brand. He was an energy. Viewers did not tune in to <em>Wetten, dass..?</em> for the bets. They tuned in because they wanted to know what would happen when Gottschalk was on stage &ndash; what he would say, what would excite him, what he would surprise them with this time. That is the SX7: it is not the format that draws people in, but the person. Not the concept, but the spark.</p>
        </blockquote>

        <h2 class="vb-section">3. The Six-Wing: Loyalty and Reliability</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Six-wing</strong> gives the Sexual Seven a quality that is not immediately visible: loyalty. The Six-wing seeks belonging, reliability, the feeling of being part of something. Combined with the SX7, this creates someone who is simultaneously absolutely free-spirited and deeply loyal &ndash; to people, to values, to habits.</p>
          <p class="vb-intro">Gottschalk did not leave <em>Wetten, dass..?</em> because he had had enough. After the accident involving Samuel Koch in 2010, he paused the show out of a sense of responsibility &ndash; and returned in 2021 at the express request of ZDF. The Six-wing explains why a man like him remained loyal to the same format over decades: not duty, but loyalty. The Chimpanzee stays in the troop.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: Gluttony or Excess</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the Seven is called <strong>gluttony</strong> or also <strong>excess</strong>: the insatiable hunger for experience, contact, adventure. In the Sexual Seven this hunger is directed toward the moment &ndash; toward the next spark, the next connection, the next surprise. Gottschalk has said in interviews that he never pursued a goal. He moved from opportunity to opportunity, from encounter to encounter &ndash; and each time made the best of it.</p>
          <p class="vb-intro">That is not being driven. That is the Chimpanzee living in the moment &ndash; because the moment is the only thing that truly counts. The next guest, the next laugh, the next unexpected remark. The Chimpanzee needs no goal. It needs movement.</p>
        </blockquote>

        <h2 class="vb-section">5. The Gift: The Stage as a Living Space</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What Thomas Gottschalk gave to German television is hard to replace: the experience that a show breathes. That it is not the script that carries but the person. That the audience does not watch but participates. 212 editions of <em>Wetten, dass..?</em>, decades on radio, in film, in books &ndash; and always the same fundamental note: here is someone who is genuinely enjoying themselves right now. The audience feels it. And laughs with them.</p>
          <p class="vb-intro">That is the gift of the SX7w6: enthusiasm that is transmitted. A Chimpanzee that dances &ndash; and in doing so carries everyone in the room along, without asking a single one of them whether they want to dance. Thomas Gottschalk never planned to become a phenomenon. He simply always kept going. That is the Sexual Seven. That is the Chimpanzee.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx7", label:"SX7 – The Chimpanzee: Subtype Profile"},
        {route:"beruehmte-hazel-brugger", label:"Portrait: Hazel Brugger (SO7w8)"},
        {route:"beruehmte-jerry-lewis", label:"Portrait: Jerry Lewis (SX7w6)"},
        {route:"beruehmte-horst-lichter", label:"Portrait: Horst Lichter (SX7w6)"},
      ])}
    </div>
  `);
}

export function usherPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-usher-portrait.jpg" alt="Usher – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Usher</p>
        <p class="krim-portrait-typ">SO2w3 &middot; Social Type 2 with Three-wing</p>
        <p class="krim-portrait-subtitle">American R&amp;B singer, born 1978 in Dallas &ndash; Animal correspondence: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Golden Retriever</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Golden Retriever</strong> is the animal of the social Two &ndash; an animal that doesn't keep its warmth to itself, but strives from an early age to reach an entire audience. Usher Raymond IV was already performing in talent shows at age ten, singing the Boyz II Men song <em>End of the Road</em> on <em>Star Search</em> &ndash; early proof of how much his sense of self was tied to an audience from the very start.</p>
          <p class="vb-intro">Usher was born in 1978 in Dallas, Texas, and grew up in Chattanooga and Atlanta. His <em>Star Search</em> performance earned him a record deal, and at just 15 he released his self-titled debut album &ndash; an extremely early start into a public career in which the audience was the central reference point from day one.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Two: Ambition as a Way of Reaching an Entire Audience</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the <strong>social Two (SO2)</strong> <em>Ambition</em>: it doesn't just want to please, it wants to be indispensably loved &ndash; by as wide a circle as possible. Usher's 2004 album <em>Confessions</em> is still considered the best-selling album of the 2000s decade: a starkly honest narrative about his own infidelity and guilt that also earned him the reputation of a new Michael Jackson.</p>
          <p class="vb-intro">Instead of hiding his own failings, Usher made them the central subject of an album meant to reach a mass audience &ndash; vulnerability as a bridge to as many people as possible, not as a private confession. This is exactly where the SO2 shows itself: closeness is not sought in a small circle, but built in public.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: From Child Star to His Own Label</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the social Two the drive to turn public affection into visible, measurable success. Usher didn't stop at his own career: he founded his own record label, US Records, and became a mentor to younger artists, most notably Justin Bieber (SX4w3), whom he helped cope with the pressure of sudden global fame.</p>
          <p class="vb-intro"><em>Prepare to have this for the rest of your career because it's not going to stop</em>, Usher once told Bieber about dealing with fame &ndash; a form of care that reached beyond his own stage and continued into the next generation of artists. The Three-wing turns the need for recognition into a visible, entrepreneurial structure: the label as a stage for others.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Social Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO2w3 lies in the ability to openly show one's own mistakes and vulnerability and turn them into something that moves a broad audience instead of repelling it. <em>Confessions</em> could have failed as a mere confessional album &ndash; instead it became a commercial milestone because Usher turned shame into a story many people recognized themselves in.</p>
          <p class="vb-intro">The fate pattern of the Two is <strong>pride</strong> &ndash; the conviction of needing to be loved in order to be of value. In the SO2w3, this can combine with a need to keep proving affection anew through visible success, rather than accepting it as a given &ndash; a drive that sustains a career for decades but never fully settles.</p>
        </blockquote>

        <h2 class="vb-section">5. The Work: From Talent-Show Kid to Mentor of a New Generation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">From his first performances at age ten through his debut album at 15, his breakthrough with <em>Confessions</em>, to his own role as a mentor, a single thread runs through Usher's career: never treating the audience as a mere recipient, but as part of his own story.</p>
          <p class="vb-intro">The Golden Retriever doesn't give its warmth sparingly, but generously &ndash; and passes it on the moment it can. Usher's path from child star to mentor of the next generation sums up this drive in one gesture: not keeping success to oneself, but passing it on to others.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so2", label:"SO2 – The Golden Retriever: Subtype Profile"},
        {route:"beruehmte-will-smith", label:"Portrait: Will Smith (SO2w3)"},
        {route:"beruehmte-nina-chuba", label:"Portrait: Nina Chuba (SO2w3)"},
      ])}
    </div>
  `);
}

export function xanthippePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-xanthippe-portrait.jpg" alt="Xanthippe" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Xanthippe</p>
        <p class="krim-portrait-typ">SO1w9 &middot; Social Type 1 with Nine-wing</p>
        <p class="krim-portrait-subtitle">Wife of Socrates, c. 5th century BC &ndash; Animal correspondence: Goose</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Goose Turned Into a Term of Abuse</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>goose</strong> is the animal of Social Type 1 &ndash; watchful, principled, incorruptible in its sense of right and wrong. Few names from antiquity have become as thoroughly an insult as Xanthippe's: in German, "eine Xanthippe" still means a nagging, domineering wife to the present day. Astonishingly little about the historical Xanthippe herself is actually established &ndash; almost everything handed down about her comes from the pens of men writing about the wife of the most famous philosopher of their time, not from her.</p>
          <p class="vb-intro">She was the wife of Socrates, considerably younger than him, and according to tradition bore him three sons &ndash; Lamprocles, Sophroniscus, and Menexenus. The marriage fell in a period when Socrates had already established his reputation as a street philosopher: a man who spent his days in unpaid conversation in the marketplace while a family had to be provided for at home. It is exactly this constellation that lies at the root of what posterity caricatured as "Xanthippe's temper."</p>
        </blockquote>

        <h2 class="vb-section">2. Social One: Indignation at an Unfair Arrangement</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro"><strong>Social One (SO1)</strong> seeks justice not in the abstract but in very concrete shared life &ndash; it insists that duties be fairly distributed and responsibility taken seriously. What the ancient sources dismiss as "shrewishness" can equally be read as the justified indignation of a woman who had to carry the household and three children largely alone, while her husband devoted his fortune and his time to philosophy without payment and consistently avoided public office or paid work.</p>
          <p class="vb-intro">Xenophon reports in his "Memorabilia" that Socrates dismissed his wife's complaints with a comparison: whoever learns to live with a difficult woman can afterward handle any person &ndash; like a rider who deliberately chooses a wild horse in order to truly master horsemanship. This anecdote says more about Socrates's need to justify himself than about Xanthippe's character: where a Social One insists on a fair distribution of burdens, the more comfortable party is often quick to declare her a moody disruption of the peace.</p>
        </blockquote>

        <h2 class="vb-section">3. The Nine-Wing: Decades of Patience, the Occasional Outburst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Nine-wing (w9)</strong>, where strongly developed, softens the sharpness of the One into an attitude that endures and accommodates over long stretches &ndash; until the accumulated tension discharges in a single, but then clearly visible, outburst. Exactly this pattern shows in the most famous anecdote about her, handed down only centuries later by Diogenes Laertius: after Xanthippe had loudly confronted Socrates, she is said to have poured a bucket of water over his head. Socrates reportedly remarked dryly: "After such thunder, rain had to follow."</p>
          <p class="vb-intro">This story is traditionally told as evidence of Xanthippe's supposed lack of self-control &ndash; but it can just as easily be read as an image of years of quietly endured strain that eventually had to break through. Social One with the Nine-wing holds on to order and duty for a long time before it erupts; the outburst itself is then not a character flaw but the release valve of a patience that has reached its limit.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: Anger as a Response to Real Hardship</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the One is called <strong>anger</strong> &ndash; in SO1w9 mostly suppressed, patiently held back, until it breaks through in isolated moments. The family's material situation was, according to tradition, strained: Socrates apparently possessed no notable fortune and, unlike the sophists of his time, fundamentally refused payment for his teaching. Whoever raised three children under these circumstances had good reason for worry and frustration &ndash; not merely a "bad mood."</p>
          <p class="vb-intro">The distortion of her image began already in her lifetime: in Aristophanes's comedy "The Clouds" and in numerous later anecdotal accounts, Xanthippe becomes a mere supporting figure whose sole function is to heighten the philosopher's composure by contrast. A man who provoked Athenian society with uncomfortable questions was stylized into a hero &ndash; the woman who bore the practical consequences of that discomfort every day was reduced to a caricature.</p>
        </blockquote>

        <h2 class="vb-section">5. The Death of Socrates: Grief, Not Caricature</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Of all sources, it is precisely the one that shows Xanthippe most fully that presents the most nuanced picture: Plato's dialogue "Phaedo," which describes Socrates's last day in prison. Xanthippe is present there, holding the youngest of the three children, and breaks into loud lamentation at the sight of her husband condemned to death. Socrates asks Crito to have her taken home so that the philosophical conversation with his students can continue undisturbed.</p>
          <p class="vb-intro">This brief scene fundamentally contradicts the caricature of the unfeeling shrew: here a woman is shown who grieves deeply for her husband, whose pain is so immediate and unfiltered that it finds a place even in a philosophical text meant to celebrate Socrates's Stoic composure. Social One with the Nine-wing upholds order for a long time &ndash; but when the loss becomes real, the held-back emotion breaks through unvarnished.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: From Term of Abuse to Reappraisal</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Nothing is known about Xanthippe's further life after Socrates's execution in 399 BC. What remained was solely the image male authors drew of her &ndash; an image that would harden over centuries into a byword for the "nagging wife," while the man whose life's design considerably burdened her existence was revered as a martyr for truth.</p>
          <p class="vb-intro">Feminist scholarship has rightly challenged this image in recent decades: what was handed down as shrewishness can equally be read as what it likely actually was, from the perspective of a Social One with the Nine-wing &ndash; the patient, decades-long care for a family under difficult conditions, punctuated by justified outbursts of anger, and in the end a grief deeper than the ancient sources were willing to grant her. The goose who became a term of abuse still awaits her fairer telling.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/so1", label:"SO1 – The Goose: Subtype Profile"},
        {route:"beruehmte-sokrates", label:"Portrait: Socrates (SO8w7) – her husband"},
        {route:"beruehmte-platon", label:"Portrait: Plato (SX6w5)"},
        {route:"beruehmte-adam-smith", label:"Portrait: Adam Smith (SO1w9)"},
      ])}
    </div>
  `);
}

export function giacomoCasanovaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-giacomo-casanova-portrait.jpg" alt="Giacomo Casanova" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Giacomo Casanova</p>
        <p class="krim-portrait-typ">SX2w3 &middot; Sexual Type 2 with Three-wing</p>
        <p class="krim-portrait-subtitle">Venetian writer and adventurer, 1725&ndash;1798 &ndash; Animal correspondence: Camel</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The camel that claimed every new encounter fully for itself</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>camel</strong> is the animal of the Sexual Two &ndash; an animal that carries what becomes too heavy for others, and that offers closeness rather than demanding it, turned entirely toward one single companion. Giacomo Girolamo Casanova was born in 1725 in Venice, the son of two actors, raised largely by his grandmother while his parents toured. An unusual quickness of mind showed early: he completed his law degree in Padua at seventeen.</p>
          <p class="vb-intro">Yet instead of a legal or clerical career &ndash; he was initially trained for the clergy and expelled from seminary &ndash; a life followed that crossed nearly every court and society in Europe: secret agent, librarian, freemason, card sharp, diplomat, violinist, prison escapee. What connected all these roles was not a profession, but a constant: the ability to attune himself instantly, in any new setting, to the one decisive person in the room.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Two: devotion to the one person in the room</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sexual Two (SX2)</strong> directs the Two's energy not toward the large group, but toward the direct, personal space between two people. Naranjo called this subtype <em>Aggression/Seduction</em> &ndash; an active, forward-moving approach toward the other. Casanova's own memoirs, spanning twelve volumes and describing well over a hundred and twenty relationships, read less like a catalog of conquests and more like an endless series of individually, intensely conducted relationships &ndash; each with its own name, its own story, its own emotional weight.</p>
          <p class="vb-intro">Contemporary and later biographers alike emphasize something that runs against the popular cliché of the cool seducer: Casanova repeatedly describes himself as someone who genuinely engaged in each encounter, who listened, who helped &ndash; with dowries, escape plans, careers &ndash; who wanted to make himself indispensable to each woman, not merely desirable. This exact person-focused, situational devotion to the one companion standing in front of him is the core of the Sexual Two.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-wing: one's own reputation as a life's work</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the Sexual Two the drive to turn personal impact into a visible, verifiable project. Casanova was no accidental charmer, but a man who systematically cultivated his own reputation: he deliberately associated with the most influential figures of his time &ndash; Voltaire, Catherine the Great, Frederick the Great, Mozart, whom he may even have assisted with "Don Giovanni" &ndash; collected letters of recommendation, maintained a self-bestowed noble title, the "Chevalier de Seingalt," and kept meticulous track of his own biography.</p>
          <p class="vb-intro">This wing shows most clearly in the great work of his final years: the "Histoire de ma vie," his twelve-volume memoirs, in which he not only recorded his own life but deliberately composed it into a coherent, effective whole &ndash; a self-staging meant to reach far beyond his own death, and one that still does. The Three-wing supplied the strategic self-presentation; the Sexual Two underneath supplied the actual, personal warmth that gave that staging its life.</p>
        </blockquote>

        <h2 class="vb-section">4. A life across Europe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Casanova's path took him through nearly every major city in Europe &ndash; Paris, London, Vienna, St. Petersburg, Warsaw, Madrid, Constantinople &ndash; often driven by scandal, duels, gambling debts, or the wrath of a betrayed husband. In 1755 he was imprisoned in Venice's notorious Leads, the lead-roofed cells of the Doge's Palace, on charges of alleged heresy and freemasonry; his spectacular escape in 1756, one of the very few successful breakouts from that prison, made him famous across Europe even before his memoirs appeared.</p>
          <p class="vb-intro">Yet the same restlessness that drove him to hundreds of intense encounters also prevented any lasting attachment to a place, a profession, or a single relationship. Wealth and destitution alternated throughout his life, often within the same decade.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX2w3 is the ability to <strong>build genuine, intense closeness with a great many different people and shape from it a life of extraordinary breadth</strong> &ndash; Casanova moved between every social stratum of his time, from beggars to monarchs, and left behind, in his memoirs, one of the most detailed eyewitness accounts of the eighteenth-century European world.</p>
          <p class="vb-intro">The Two's fatal flaw is <strong>pride</strong> &ndash; in the Sexual Two, closely bound up with the question of whether one is indispensable enough to the one person who matters in the moment. For Casanova, this showed in his tendency to measure his entire worth again and again by his most recent conquest, his most recent patron, his most recent admiration &ndash; almost never by anything lasting. This dependence on ever-new, immediate confirmation drove him restlessly across all of Europe, but also meant he never truly arrived anywhere.</p>
        </blockquote>

        <h2 class="vb-section">6. The camel that, in the end, moved on alone through its own story</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Casanova is among the best-known figures of eighteenth-century Europe &ndash; less because of any single great achievement than because of a life he told so convincingly himself that his name became, to this day, a generic term for the charming seducer, even though his own memoirs paint a far more layered picture.</p>
          <p class="vb-intro">From the restless young secret agent, through the prison escapee admired across Europe, to the aging librarian who wrote his own story for posterity: this is the Sexual Two with a Three-wing in one of its most far-reaching forms &ndash; a devotion to countless individual people that, in the end, transformed itself into a single, carefully composed work about one life.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx2", label:"SX2 – The Camel: Subtype Profile"},
        {route:"beruehmte-mata-hari", label:"Portrait: Mata Hari (SX2w3)"},
        {route:"beruehmte-isadora-duncan", label:"Portrait: Isadora Duncan (SX2w3)"},
        {route:"beruehmte-cleopatra", label:"Portrait: Cleopatra (SX2w3)"},
        {route:"beruehmte-ryan-gosling", label:"Portrait: Ryan Gosling (SX2w3)"},
        {route:"beruehmte-elvis-presley", label:"Portrait: Elvis Presley (SX2w3)"},
        {route:"krankheitsportraets-giacomo-casanova", label:"Illness Portrait: Giacomo Casanova (SX2w3)"},
      ])}
    </div>
  `);
}

export function kimJongUnPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-kim-jong-un-portrait.jpg" alt="Kim Jong Un – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Kim Jong Un</p>
        <p class="krim-portrait-typ">SP7w8 &middot; Self-Preservation Type 7 with Eight-wing</p>
        <p class="krim-portrait-subtitle">Ruler of North Korea, born 1984 &ndash; Animal correspondence: Gorilla</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Gorilla That Secured Its Territory With Abundance</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>gorilla</strong> is the animal of the self-preservation Seven &ndash; an animal of enormous strength that lives in a group and whose presence fills a room without any effort. Kim Jong Un, born around 1984 as the youngest son of North Korean ruler Kim Jong Il, spent part of his youth under a false name at a Swiss school in Bern &ndash; a stay that familiarized him with Western consumption, NBA basketball, and an abundance that was out of reach for almost everyone in the tightly sealed-off North Korea of his origin.</p>
          <p class="vb-intro">This portrait analyzes a personality structure according to the Enneagram model. It explains behavioral patterns; it justifies nothing. The systematic oppression of the North Korean population, the political prison camps (kwanliso), extrajudicial executions, and North Korea's nuclear program are facts to be judged on their own terms, independent of any psychological framing.</p>
        </blockquote>

        <h2 class="vb-section">2. The Hidden Eight: Abundance for One's Own, Closest Territory</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">This subtype secures itself, unlike the social or sexual Seven, not through a shared body of knowledge or a single intense bond, but through concrete, tangible enjoyment and practical abundance within its own immediate surroundings &ndash; in Kim Jong Un this shows in a pronounced fondness for imported Swiss cheese, French cognac, luxury yachts, and leisure facilities built specifically for him, while at the same time large parts of the North Korean population have been affected by malnutrition and recurring food crises for decades.</p>
          <p class="vb-intro">In 2014 he opened an amusement park with water slides and rides in Pyongyang, in 2018 a ski resort in the mountains near Wonsan, and later a large-scale beach resort complex on the same coast &ndash; abundance that consistently stays within his own, closest circle of power rather than reaching the broader population. The gorilla that fills its territory with stores it does not share.</p>
        </blockquote>

        <h2 class="vb-section">3. The Eight-Wing: Where Resistance Arises, He Seeks Confrontation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Eight-wing gives the self-preservation Seven an assertiveness a Seven with a weaker Eight wing would lack. Where the Seven evades when resistance arises, the SP7w8 seeks confrontation &ndash; uncompromisingly. In 2013 Kim had his own uncle and longtime mentor Jang Song-thaek, the most powerful man in the state after himself, executed on charges of treason. In 2017 his half-brother Kim Jong-nam was killed with the nerve agent VX at Kuala Lumpur airport &ndash; an attack that, according to international investigations, was ordered by him.</p>
          <p class="vb-intro">North Korea's nuclear and missile program, which he has pushed massively since taking office, follows the same logic: a demonstration of unassailable strength outward, meant to preemptively deter any perceived threat to his own territory. The gorilla that does not rely on negotiation, but on visible, unmistakable power.</p>
        </blockquote>

        <h2 class="vb-section">4. Banquets and Famine: Two Territories, One Border</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Reports from defectors and international observers describe extensive, opulent banquets within the innermost leadership circle &ndash; at times featuring imported delicacies said to cost billions of won &ndash; while the United Nations repeatedly reported chronic undernourishment among large parts of the North Korean population. The self-preservation Seven's abundance is not shared here, but becomes a sharp border between the protected inner circle and everyone else.</p>
          <p class="vb-intro">At the same time, the state maintains a system of political prison camps in which, by human rights organizations' estimates, tens of thousands of people are held under life-threatening conditions &ndash; often without trial, at times across several generations of a single family (so-called guilt-by-association). This practice has existed for decades and is continued, not abolished, under Kim Jong Un.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Self-Preservation Seven</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">A "light" in the usual sense of this portrait format can hardly be identified here without distorting reality. At most, within the logic of the system itself, one could note that Kim has consolidated his rule over more than a decade and secured the regime's dynastic continuity &ndash; a standard that holds only within the power apparatus itself.</p>
          <p class="vb-intro">The shadow here is not a marginal aspect but the defining element: the Eight-wing Seven's uncompromising defense of territory, directed against anyone perceived as a threat to his own position &ndash; family members included &ndash;, combined with an abundance systematically reserved for the innermost circle while the provisioning of the rest of the population is treated as secondary. Human rights organizations and a UN commission of inquiry documented systematic, widespread, and grave human rights violations in 2014, which they compared to crimes against humanity.</p>
        </blockquote>

        <h2 class="vb-section">6. An Ongoing Pattern With No Visible Turn</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Unlike many people in this Compass, this portrait does not end with a look back on a completed life, but on an ongoing rule with no visible change to the patterns described. Kim Jong Un has consolidated his position since 2011 through the same combination of uncompromising territorial defense and exclusive abundance within his own circle of power &ndash; with no sign that this will change.</p>
          <p class="vb-intro">The gorilla that defends its territory with full force against any perceived threat &ndash; and whose abundance never extends beyond the boundaries of its own, closest troop.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/se7", label:"SP7 – The Gorilla: Subtype profile"},
        {route:"beruehmte-francis-bacon", label:"Portrait: Francis Bacon (SP7w8)"},
        {route:"beruehmte-christoph-kolumbus", label:"Portrait: Christopher Columbus (SP7w8)"},
        {route:"beruehmte-wladimir-putin", label:"Portrait: Vladimir Putin (SX6w5)"},
      ])}
    </div>
  `);
}

export function tomHanksPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/tom-hanks-portrait.jpg" alt="Tom Hanks – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Tom Hanks</p>
        <p class="krim-portrait-typ">SO9w1 &middot; Social Type 9 with One-wing</p>
        <p class="krim-portrait-subtitle">American actor, born 1956 &ndash; Animal correspondence: Buffalo</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Buffalo That Adapted to Every Herd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>buffalo</strong> is the animal of the social Nine — a herd animal that sets its own profile aside for the sake of the group, and finds security precisely in being needed and included. Tom Hanks, born in 1956 in Concord, California, grew up after his parents' divorce in what he himself called a "fractured" family: "three mothers, four fathers, five schools, ten houses" — by age ten, he had already lived in ten different houses.</p>
          <p class="vb-intro">This constant need to adapt again and again to new environments, new stepparents, and new classmates is the fertile ground on which an SO9 pattern grows: the self becomes flexible, moldable, serving — not out of weakness, but as a survival strategy in an unstable environment.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Nine: Dissolving Into the Community as Home</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social Nine (SO9)</strong> seeks belonging by letting its own needs recede behind those of the group — Naranjo called this subtype "social adaptation": the self dissolves into service, harmony, and belonging. Hanks has been called Hollywood's "nicest guy" for decades — a reputation that rests not on PR staging, but on consistently documented behavior: he learns the names of every crew member on set, regardless of their position, treats everyone with the same attentiveness, and helps strangers unasked in everyday life.</p>
          <p class="vb-intro">This almost reflexive fitting into every social situation, without putting his own neediness in the foreground, is the signature of the SO9: identity is defined not through boundary-setting, but through frictionless dissolving into shared togetherness.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-Wing: Professionalism as a Quiet Obligation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>One-wing (w1)</strong> lends the Nine an inner obligation to do things "right" — not as loud self-righteousness, but as quiet conscientiousness. Hanks's reputation for professionalism on set is legendary: punctual, prepared, respectful toward everyone involved, regardless of rank.</p>
          <p class="vb-intro">The One-wing is especially visible in his decades-long commitment to World War II history — as co-creator and producer of "Band of Brothers" and "Saving Private Ryan," he was driven by an almost moral insistence on historical accuracy and honoring the veterans. When a veteran told him the series lacked authenticity, he reportedly replied that they'd be lucky if Hollywood got "twelve percent" of the truth right — a mixture of humility and the firm insistence on getting it as right as humanly possible anyway.</p>
        </blockquote>

        <h2 class="vb-section">4. The Everyman: Roles as a Mirror of His Own Adaptability</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Hanks's best-known roles — Forrest Gump, Woody in "Toy Story," the air traffic controller in "Sully," the captain in "Captain Phillips" — share one thing: they are consistently characters who set themselves aside, serve the whole, and remain calm, reliable, and unvain in extreme situations. This consistent choice of roles is no accident, but mirrors the SO9's basic stance: better to be the quiet anchor for others than to stand in the spotlight oneself.</p>
          <p class="vb-intro">Even his own quote, "I lead a modest life. Well, valuable, but modest," shows the same attitude: despite two Oscars and decades of global fame, he insists on normalcy over star behavior — a deliberate choice not to place himself above the community.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO9w1 is the ability to <strong>create trust and warmth through genuine, unvain attentiveness</strong> without sacrificing integrity or care — Hanks's reputation as "America's Dad" rests on decades of consistent behavior, not a single staged moment.</p>
          <p class="vb-intro">The shadow of the SO9 shows itself where one's own neediness disappears entirely behind concern for others. His son Chet Hanks has spoken publicly about feeling "completely worthless" despite his famous father, and about struggling with his own addiction issues — a sign that the closeness an SO9 embodies outwardly does not automatically translate into the same emotional presence for their own children when attention is primarily directed outward, toward the larger community.</p>
        </blockquote>

        <h2 class="vb-section">6. The Buffalo That Became the Whole Herd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Tom Hanks has defined American cinema for over four decades — not through spectacular self-promotion, but through the quiet consistency with which he sustains the same attentive, unvain stance role after role, set after set, encounter after encounter.</p>
          <p class="vb-intro">The buffalo who, out of a fractured childhood, lived his way into an entire nation as family, and who, even at the height of world fame, never stopped learning every name on set — that is the lasting image of this particular social Nine with a One-wing.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so9", label:"SO9 – The Buffalo: Subtype Profile"},
        {route:"beruehmte-kevin-costner", label:"Portrait: Kevin Costner (SO9w1)"},
        {route:"beruehmte-peter-falk", label:"Portrait: Peter Falk (SO9w1)"},
        {route:"beruehmte-sandra-hueller", label:"Portrait: Sandra Hüller (SO9w1)"},
        {route:"beruehmte-bastian-schweinsteiger", label:"Portrait: Bastian Schweinsteiger (SO9w1)"},
      ])}
    </div>
  `);
}

export function alexanderGerstPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-alexander-gerst-portrait.jpg" alt="Alexander Gerst – portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Alexander Gerst</p>
        <p class="krim-portrait-typ">SO2w1 &middot; Social Type 2 with a One-Wing</p>
        <p class="krim-portrait-subtitle">Astronaut, b. 1976 &ndash; Animal correspondence: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Golden Retriever in space</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Golden Retriever</strong> is the animal of the social Type 2 – warm, immediately oriented toward connection, but not with a single person, rather with as many people as possible at once. Alexander Gerst, a German geophysicist and ESA astronaut, spent more than 360 days in space in total, including a stint in 2018 as the first German commander of the International Space Station (ISS).</p>
          <p class="vb-intro">He became better known, however, for something else: from orbit, he built a direct, personal connection to a millions-strong audience through social media, blog posts, and photo series – spaceflight not as a closed-off expert project, but as a shared experience for anyone who wanted to watch.</p>
        </blockquote>

        <h2 class="vb-section">2. The social Two: care directed at the whole community</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social Two (SO2)</strong> directs its care not at the one relationship, but at a collective – an audience, a nation, everyone within reach. In Gerst this showed as his role as one of the first astronauts to actively, understandably, and with palpable warmth pass on the experience of weightlessness, the view of Earth, and daily life aboard the ISS to a broad public, rather than treating it as specialist knowledge.</p>
          <p class="vb-intro">His numerous school projects and video messages to children from space – answering submitted questions directly from the station – show the same basic stance the life-pattern compass describes for Ranga Yogeshwar: never thinking of a single target group, but of as broad a public as possible, to whom complex knowledge should be made understandable.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-wing: scientific rigor and moral seriousness</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>One-wing (w1)</strong> gives the social Two an inner axis of diligence and a need to pass on only what is well substantiated. In Gerst this shows in his doctorate in geophysics and in the precision with which he explained complex scientific experiments aboard the ISS – on materials research or Earth observation, for instance – to the public correctly and without populist simplification.</p>
          <p class="vb-intro">He shares this with Ranga Yogeshwar (also SO2w1): for both, it is not enough to merely make complicated matters understandable – they are placed in a moral context at the same time, for instance when Gerst uses the "overview effect" to point to the planet's vulnerability and the shared responsibility of all people. Science communication thereby becomes an ethical task, not merely a didactic one.</p>
        </blockquote>

        <h2 class="vb-section">4. The view from above as a message to all of humanity</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Gerst repeatedly described how the view of Earth from space – the so-called "overview effect" – changed his own understanding of togetherness: no national borders, no dividing lines, just one vulnerable blue planet. Rather than keeping this experience to himself, he repeatedly made it central to his public communication, for instance in talks on climate change and global responsibility.</p>
          <p class="vb-intro">His 2014 video recorded in space, accompanied by a loop-pedal guitar – an improvised serenade for the German national team during the World Cup – shows the same basic stance: a private enthusiasm deliberately shared to let an entire nation take part in a special moment.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO2w1 shows in Gerst's ability to make a technically complex, often distantly perceived field like spaceflight emotionally accessible to a broad public without losing technical substance.</p>
          <p class="vb-intro">The shadow of the social Two shows where one's own significance remains strongly tied to the reach of one's own message – the urge to be visible in the name of a great cause can easily lead to exhaustion when the public role never pauses, a risk that long spaceflights with constant media accompaniment intensify further.</p>
        </blockquote>

        <h2 class="vb-section">6. The astronaut who never lost sight of Earth</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Alexander Gerst's career shows the social Two with a One-wing in one of its rarest forms: technical and scientific excellence paired with the persistent wish to leave no one out of his own experience. The Golden Retriever doesn't orbit Earth alone for its own sake – it wants everyone watching along.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from clinical practice.", "The Hidden Dynamics of the 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so2", label:"SO2 – The Golden Retriever: Subtype Profile"},
        {route:"beruehmte-ranga-yogeshwar", label:"Portrait: Ranga Yogeshwar (SO2w1) – also SO2w1"},
        {route:"beruehmte-muhammad-ali", label:"Portrait: Muhammad Ali (SO2w1)"},
        ])}
      </div>
    </div>
  `);
}

export function jonHammPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jon-hamm-portrait.jpg" alt="Jon Hamm – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jon Hamm</p>
        <p class="krim-portrait-typ">SO8w7 &middot; Social Type 8 with Seven-wing</p>
        <p class="krim-portrait-subtitle">Actor, born 1971 &ndash; Don Draper in "Mad Men" &ndash; Animal correspondence: Lion</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Lion Who Stood for Others Before Being Seen Himself</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Lion</strong> is the animal of Social Type 8 – strength deployed not for self-assertion, but for the protection and cohesion of a community. Jon Hamm, born in 1971 in St. Louis, lost his mother to cancer at age ten and his father at twenty – before he became a celebrated actor himself, he worked as a drama teacher at his old high school, teaching, among others, the future actress Ellie Kemper.</p>
          <p class="vb-intro">Kemper later described him as "a generous, selfless kind of guy" – when she performed her own comedy solo show in Los Angeles, Hamm, by then world-famous from "Mad Men," simply showed up to support her. This is exactly the SO8 core stance: strength is not hoarded, but made available to those who belong to one's own community.</p>
        </blockquote>

        <h2 class="vb-section">2. Social Eight: Presence Instead of Constant Roaring</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo's <strong>Social Eight (SO8)</strong> deploys strength not for self-assertion, but in the service of friendship and cohesion – authority arises not through constant displays of power, but through a physical and mental presence that becomes felt the moment it enters a room. Hamm set himself a clear deadline: to be able to make a living from acting by age thirty. It took another six years before "Mad Men" brought him his breakthrough at 36 – a patient, unyielding persistence rather than loud self-promotion.</p>
          <p class="vb-intro">The very role of Don Draper – a man whose controlled outer authority masks a deep inner wound – met real, lived experience in Hamm: memories of his father, by his own account, flowed directly into the character. The SO8 rarely shows its own vulnerability outwardly; instead, it transforms it into presence, into the capacity to carry others.</p>
        </blockquote>

        <h2 class="vb-section">3. The Seven-Wing: Versatility Instead of a Single Role</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Seven-wing</strong> opens the Social Eight to lightness, humor, and versatility that go beyond the sheer seriousness of a role. Alongside the somber Don Draper character, Hamm also showed up in exuberant comedy appearances on "Saturday Night Live," in "30 Rock," in "Bridesmaids," and as a voice role in "Toy Story 4" – a range that refuses to settle into a single image.</p>
          <p class="vb-intro">This combination of load-bearing, protective presence and playful adaptability is typical SO8w7: the lion remains a lion, even while doing something silly – the underlying strength and reliability never fully disappear.</p>
        </blockquote>

        <h2 class="vb-section">4. Wound and Rebuilding: Naming One's Own Crisis Openly</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">After his father's death in 1991, Hamm fell into severe depression for years – he dropped out of school, moved into the basement of his half-sister's house, and slept until late afternoon. It was his sister who finally made clear to him that he needed professional help; he began therapy and was prescribed antidepressants. In 2015, he additionally completed a 30-day rehab treatment for alcohol addiction.</p>
          <p class="vb-intro">That Hamm named these phases publicly instead of hiding them behind the polished facade of success fits the mature SO8: strength here doesn't mean having no weakness, but acknowledging one's own vulnerability without breaking under it – and eventually becoming able to carry others again.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Social Eight with a Seven-Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO8w7 shows in Hamm in the ability to embody load-bearing presence and lightness at the same time – as a teacher who opened the stage for a future actress, as a colleague who years later simply showed up to her performance, as an actor whose range spans from deepest seriousness to outright silliness.</p>
          <p class="vb-intro">The shadow of the Eight showed in the years after his father's death, when his own strength was no longer enough and instead discharged into withdrawal, depression, and eventually alcohol – until the insight grew that strength can also mean letting oneself be helped.</p>
        </blockquote>

        <h2 class="vb-section">6. The Lion Who Came Back to Applaud</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Jon Hamm's path shows the Social Eight with a Seven-wing in a reconciled form: strength deployed early for others, before it became publicly visible himself; a deep personal crisis named openly instead of repressed; and a versatility that never forgets where its own capacity to carry others comes from. The lion doesn't roar constantly – but when a former student is on stage, he's there.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/so8", label:"SO8 – The Lion: Subtype Profile"},
        {route:"beruehmte-fritz-perls", label:"Portrait: Fritz Perls (SO8w7) – also a teacher/mentor with strength in service of others"},
        {route:"beruehmte-sokrates", label:"Portrait: Socrates (SO8w7)"},
        ])}
      </div>
    </div>
  `);
}

export function olenaZelenskaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-olena-zelenska-portrait.jpg" alt="Olena Zelenska – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Olena Zelenska</p>
        <p class="krim-portrait-typ">SX6w7 &middot; Sexual Type 6 with a Seven Wing</p>
        <p class="krim-portrait-subtitle">First Lady of Ukraine, screenwriter, born 1978 &ndash; Animal equivalent: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Wolf Who Waited Eight Years Out of Sight</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>wolf</strong> is intensely loyal – but first checks whether it can truly trust, before showing itself. Olena Zelenska, born in 1978 in Kryvyi Rih as Olena Volodymyrivna Kyiashko, met her future husband while studying architecture. The two were a couple for eight years before marrying in 2003 – a long bond deliberately kept private long before any of it became public.</p>
          <p class="vb-intro">Although she holds an architecture degree, she never worked as an architect, becoming a screenwriter for Studio Kvartal 95 instead – the very company whose series made her husband a presidential candidate.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Six: When Fear Becomes Direct Confrontation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">According to Naranjo, the <strong>Sexual Six (SX6)</strong> meets fear not with withdrawal, but with strength and direct engagement – the counterphobic variant of the type, which faces the threatening head-on instead of fleeing it. When Russia invaded Ukraine in February 2022, Zelenska stayed in the country with their children even as President Zelensky publicly stated that his family was "target number two" for the Russian attackers. Immediately after the invasion, she wrote on Instagram: "I will not have panic and tears."</p>
          <p class="vb-intro">She later admitted feeling "acute fear" in those first days of war – but that admission came not as retreat, but as an active public role: she became a voice for mental health in wartime, initiated the nationwide "How Are You?" program, and stated: "90 percent of our people constantly feel anxiety and stay in a state of constant stress." Fear is not suppressed, but made the subject of direct, public engagement.</p>
        </blockquote>

        <h2 class="vb-section">3. The Seven Wing: Hope as a Strategy Against Paralysis</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Seven Wing</strong> gives the Sexual Six a forward-looking, hopeful note – fear is not just confronted, but actively converted into action and perspective. Zelenska repeatedly emphasized that feelings of "sadness, despair and fear almost every day" don't have to mean they "paralyze us or make us give up" – and made the phrase "It's okay not to be okay" a central tenet of her mental health program.</p>
          <p class="vb-intro">Her 2022 "Vogue" portrait with photographer Annie Leibovitz, titled "Portrait of Bravery," shows the same double movement: about herself, she said, "My husband is always on the forefront, while I feel more comfortable in the shade. I am not the life of the party, I do not like to tell jokes" – yet she used the public stage anyway, deliberately, because she saw in it a chance to draw attention to important social issues. The Seven Wing seeks the way forward, even when one's own nature leans reserved.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: From Screenwriter to a Global Voice for Mental Health</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">From her work as a screenwriter on 'Servant of the People' through her role as First Lady since 2019 to international health diplomacy runs a continuous line: Zelenska initially focused her office on school meals and cultural diplomacy, before the war made her the initiator of the mental health program "How Are You?", which she called "the foundation of resilience" at the 2023 Kyiv Economic Forum.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Sexual Six with a Seven Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX6w7 shows in Zelenska's ability to not hide personal fear but transform it into collective action – a program that helps millions of Ukrainians talk about their own psychological burden grew directly out of her own openly named fear.</p>
          <p class="vb-intro">The shadow of the Six shows in the permanent vigilance a life under constant threat demands – the family stayed separated for months while Zelenska went into hiding with the children at a safe location. The Seven Wing softens this burden through active future-orientation, but can also tempt one to hide exhaustion behind constant public capability to act.</p>
        </blockquote>

        <h2 class="vb-section">6. The Quiet Loyalty That Became the Loudest Voice</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Olena Zelenska's path shows the Sexual Six with a Seven Wing in a particularly vivid form: a woman who stayed loyally out of sight for eight years before becoming an internationally heard voice for mental health under existential threat. The wolf reveals its strength only once it knows what it's fighting for.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx6", label:"SX6 &ndash; The Wolf: Subtype Profile"},
        {route:"beruehmte-wolodymyr-selenskyj", label:"Portrait: Wolodymyr Selenskyj (SE3w2) – her husband"},
        {route:"beruehmte-eva-mendes", label:"Portrait: Eva Mendes (SX6w7)"},
        {route:"beruehmte-jennifer-aniston", label:"Portrait: Jennifer Aniston (SX6w7)"},
        {route:"beruehmte-scarlett-johansson", label:"Portrait: Scarlett Johansson (SX6w7)"},
        ])}
      </div>
    </div>
  `);
}

export function eltonJohnPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-elton-john-portrait.jpg" alt="Elton John" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Elton John</p>
        <p class="krim-portrait-typ">SE7w6 · Self-Preservation Type 7 with a Six Wing</p>
        <p class="krim-portrait-subtitle">Musician, composer, EGOT winner, born 1947 – Animal equivalent: Gorilla</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Gorilla</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>gorilla</strong> is the animal of the self-preservation Seven: pleasure-seeking, territorial, always working to build itself a protected domain of abundance and safety. Reginald Kenneth Dwight was born in 1947 in Pinner, into a home full of tension – his father, a Royal Air Force officer, rejected his musical ambitions and wanted a conventional banking career for him. There were, by all accounts, fierce arguments at home that weighed heavily on the boy. His parents divorced when he was fourteen.</p>
          <p class="vb-intro">His mother and grandmother raised him more generously and freely – at their piano, as a small boy, he learned to play classical pieces by ear. At eleven he won a scholarship to the Royal Academy of Music. The gorilla learned early to carve out a first domain of his own using talent – a place away from a cramped childhood home, where his own rules applied.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Seven: Pleasure as a Counterweight</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation Seven (SE7)</strong> secures safety and well-being not through restraint but through active enjoyment and the ability to provide for oneself. Elton John himself said his wild stage costumes and performances were his way of letting go after a restrictive childhood. Ostrich feathers, $5,000 glasses spelling out his name in lights, costumes as the Statue of Liberty, Donald Duck, or Mozart – the most famous of all at his 1975 Dodger Stadium shows in a sequined baseball uniform.</p>
          <p class="vb-intro">This abundance of color, fabric, and staging is the SE7 in its purest form: not restraint, but excess as a path to one's own safety. Yet the same pursuit of pleasure tipped, over two decades, into severe cocaine and alcohol addiction, compounded by bulimia – until by 1990 nothing was left that still gave him any sense of safety.</p>
        </blockquote>

        <h2 class="vb-section">3. The Six Wing: Loyalty as a Lifeline</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Six wing (w6)</strong> gives the self-preservation Seven something a SE7 with a more weakly developed Six wing would not have to the same degree: the ability to stabilize through one firm, loyal bond rather than relying solely on ever-new stimulation. On April 8, 1990, Elton John sat at the bedside of sixteen-year-old Ryan White, a teenager dying of AIDS with whom he had built a close friendship. "Ryan was the spark that helped me to recover from my addictions and start the AIDS foundation," he later said.</p>
          <p class="vb-intro">A few months later, on July 29, 1990, he checked himself into Parkside Lutheran Hospital in Chicago – one of the few clinics at the time able to treat bulimia alongside cocaine and alcohol addiction. He has remained sober ever since. In 1992 he founded the Elton John AIDS Foundation, which has since raised over $600 million for HIV programs in more than 55 countries – a lasting, reliable structure that provides exactly the safety the Six wing has always sought.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: Gluttony as a Life Principle and as a Trap</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the Seven is called <strong>gluttony</strong> – for the SE7w6 not just as an appetite for experience, but as a fundamental strategy of protecting oneself against scarcity by stocking up on everything available. His partnership with lyricist Bernie Taupin, unbroken since 1967, worked on the same principle of effortless abundance: Taupin often wrote a lyric in under an hour, John composed the music for it in about thirty minutes – an output that barely let up for decades.</p>
          <p class="vb-intro">This same abundance became a trap during the addiction years: always more, never enough, until the body itself drew the line. He recorded his 1992 album "The One" fully sober for the first time – "I was used to making records under the haze of alcohol or drugs, and here I was, 100% sober, so it was tough," he reflected in 2020.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Self-Preservation Seven</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SE7w6 shows in how boundless pleasure can turn into equally boundless generosity: over 300 million records sold, EGOT status (Emmy, Grammy, Oscar, Tony), a knighthood in 1998 – and alongside it, one of the world's most influential AIDS foundations, whose annual Oscar party has long become one of Hollywood's most significant charity events.</p>
          <p class="vb-intro">The shadow showed in the two lost decades of addiction and in a marriage to Renate Blauel, entered in 1984 and lasting only three years – an attempt to force himself into a conventional form that did not fit his true identity. Only with David Furnish, a civil partnership since 2005 and married since 2014, did he find the stable, loyal bond the Six wing had always been searching for.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: From a Restless Territory-Builder to a Reliable Advocate</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Elton John has traveled the full range of the SE7w6 path: from the boy who built himself a first domain of his own at his grandmother's piano, through the gorilla in ostrich feathers who outshone a cramped childhood home with boundless stage splendor, to the addict who only found the anchor he needed at the bedside of a sixteen-year-old friend.</p>
          <p class="vb-intro">His "Farewell Yellow Brick Road" tour (2018–2023) became the most successful tour in music history – one last, extended indulgence, this time without the escape reflexes of earlier decades.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se7", label:"SE7 – The Gorilla: Subtype Profile"},
        {route:"beruehmte-larry-king", label:"Portrait: Larry King (SE7w6)"},
        {route:"beruehmte-junko-tabei", label:"Portrait: Junko Tabei (SE7w6)"},
        {route:"beruehmte-jeanne-calment", label:"Portrait: Jeanne Calment (SE7w6)"},
      ])}
    </div>
  `);
}

export function peterMaffayPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-peter-maffay-portrait.jpg" alt="Peter Maffay – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Peter Maffay</p>
        <p class="krim-portrait-typ">SX9w1 &middot; Sexual Type 9 with a One-Wing</p>
        <p class="krim-portrait-subtitle">Musician, born 1949 – Animal correspondence: Sloth</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Sloth Behind the Rock Star</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sloth</strong> is the animal of the Sexual Nine – an animal that does not push, but lives fully present at its own pace. Peter Maffay was born in 1949 in Kronstadt (Romania) as a member of the German-speaking Transylvanian Saxon minority and emigrated with his family to West Germany in 1963. Despite more than fifty years as one of Germany's most successful rock musicians – over 40 million records sold – he remained noticeably reserved and undramatic in interviews, almost the opposite of the classic rock-star overstatement.</p>
          <p class="vb-intro">Rather than defining himself through countless stage appearances and media self-promotion, Maffay repeatedly withdrew to his finca on Mallorca – a retreat where he kept his private life largely out of public view. The sloth does not seek the stage for its own sake, but the one thing it can fully merge with.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Nine: Merging With a Single Life's Work</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sexual Nine (SX9)</strong> is, according to Naranjo, the variant of the passion of sloth that expresses itself through complete merging with a single, all-encompassing work or counterpart – the self steps back to fully dissolve into it. For Maffay, that one work is the little dragon Tabaluga: created in 1983 as a concept album, the figure grew over four decades into a musical, an animated series, and eventually the namesake of his own foundation.</p>
          <p class="vb-intro">Unlike many musicians of his generation who spread their creative energy across shifting projects, bands, or genres, Maffay stayed with this one figure throughout his later career – not as a side project alongside his music career, but increasingly as its actual center. This is the SX9 at its most productive: not spread across many bonds, but fully merged into the one.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-Wing: Disciplined Structure Instead of Diffuse Charity</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">An SX9 with a weaker One-wing would likely have left its commitment to Tabaluga at music and merchandising. In Maffay, a strict, principle-driven rigor emerged instead in 1999: he founded the Peter Maffay Foundation and built the Tabaluga children's villages into a pedagogically clearly structured system of therapeutic residential groups for traumatized and neglected children – first on Mallorca, later at several locations in Germany.</p>
          <p class="vb-intro">These children's villages follow a fixed pedagogical concept developed over years, not spontaneous or diffuse charity. The One-wing shows itself in exactly this combination of devotion and order: not loud fundraising, but the patient, disciplined construction of an institution that, even decades later, still operates by the same clear principles.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: Sloth as Withdrawal From One's Own Fame</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the Nine is called <strong>sloth</strong> – not physical laziness, but a forgetting of one's own significance in favor of whatever one merges with. In Maffay this shows in his consistent refusal to spread his private life – several marriages, personal relationships – across the public sphere, even though his profession has placed him at the center of media attention for decades.</p>
          <p class="vb-intro">His extended, often weeks-long motorcycle journeys – including through Mongolia, which inspired his album "Nomade" – follow the same pattern: not a tourist's checklist of sights, but a slow, contemplative merging with landscape and expanse, far from any public stage.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Sexual Nine with a One-Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX9w1 shows in how Maffay turned his own childhood experience as a member of a minority caught between two countries into a lifelong, structured care for children who themselves stand between the front lines of neglect and trauma – an empathy that does not exhaust itself in words, but in an institution built to last for decades.</p>
          <p class="vb-intro">The shadow lies in the flip side of that same reserve: his consistent media distance has repeatedly been read by journalists as guardedness or a need for control. But for the Sexual Nine, what counts is not public self-disclosure, but the quiet, undivided devotion to the one work that truly matters.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: A Dragon That Became a Life's Work</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Peter Maffay remains the musician whose greatest work is not a single album, but a figure grown over forty years – from concept album to musical, from animated series to a foundation that today gives traumatized children a new home. From the first Tabaluga songs to the children's villages, the same pattern recurs: complete, disciplined merging with the one thing that carries.</p>
          <p class="vb-intro">This is the Sexual Nine with a One-wing at its most effective: a sloth that never grows loud, but builds, out of quiet, decades-long devotion, a life's work reaching far beyond its own music career.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx9", label:"SX9 – The Sloth: Subtype Profile"},
        {route:"beruehmte-jane-goodall", label:"Portrait: Dr. Jane Goodall (SX9w1)"},
        {route:"beruehmte-craig-foster", label:"Portrait: Craig Foster (SX9w1)"},
        {route:"beruehmte-sophie-marceau", label:"Portrait: Sophie Marceau (SX9w1)"},
      ])}
    </div>
  `);
}

export function heinzRuehmannPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-heinz-ruehmann-portrait.jpg" alt="Heinz Rühmann" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Heinz Rühmann</p>
        <p class="krim-portrait-typ">SE1w9 &middot; Self-Preservation Type 1 with Nine-Wing</p>
        <p class="krim-portrait-subtitle">German actor, 1902–1994 &ndash; Animal correspondence: Bald Eagle</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Eagle Playing the Harmless Neighbor</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>bald eagle</strong> is the animal of the self-preservation One: a watchful, inward-turned gaze that keeps its own small world in order without putting itself loudly on display. Heinz Rühmann, one of the most successful German film actors for nearly seventy years, built his entire career on exactly this principle: he almost always played the honest, shy, humorous ordinary man struggling with the small adversities of everyday life – never the hero, never the powerful.</p>
          <p class="vb-intro">Contemporaries described him off-camera as a strikingly quiet, reserved man – a contrast to his comedic screen persona that lays bare exactly the self-preservation One's logic: public presence is generated through a carefully controlled role, while the actual self stays protected in the background.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation One: Perfection Within One's Own, Manageable Domain</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation One</strong> seeks perfection not on the grand social stage, but within its own, clearly bounded sphere – its own craft, its own discipline, its own small order. Right after his breakthrough with ›Die Drei von der Tankstelle‹, Rühmann used his own savings to earn his pilot's license in 1932 – a highly demanding technical skill he taught himself, meticulously and away from the public eye, and maintained for decades, until he was regarded as a serious sport pilot within aviation circles.</p>
          <p class="vb-intro">This precision carried over into his craft: his comedic timing, the exact control of tone and pause, was described by contemporaries as so deliberate that the seemingly effortless role of the bumbling everyman became a highly precise acting construction – perfection disguised as ease.</p>
        </blockquote>

        <h2 class="vb-section">3. The Nine-Wing: Merging Into the Harmless Role Instead of Open Confrontation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Nine-wing</strong> shows up in Rühmann as a persistent tendency to sidestep conflict and moral confrontation by fully dissolving into his harmless, comedic stage persona. Before the denazification committee in 1946, he explained the seamless continuation of his career with the simple sentence: "I am after all an actor and I like to play" – a self-minimization that preemptively deflects any political or moral reckoning with his own role under the Nazi system by declaring the question itself out of place.</p>
          <p class="vb-intro">This evasive move remained effective for life: rather than publicly confronting the ambivalence of his stance during National Socialism, he stayed after 1945 in the already-established, apolitical role of the likeable audience favorite – a retreat into the familiar that permanently avoided confrontation instead of seeking it.</p>
        </blockquote>

        <h2 class="vb-section">4. The 1938 Divorce: Quiet Care Under Outside Pressure</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Ten days after the November pogroms of 1938, Rühmann met with Hermann Göring, arranged through Gustav Gründgens, to try to avert the persecution of his wife Maria Bernheim, who was classified as Jewish. Göring made clear that divorce was unavoidable – a directive that applied to all prominent artists in "mixed" marriages. Rühmann complied with this demand rather than risk public resistance; historians still disagree today on whether career pressure or sheer existential fear predominated.</p>
          <p class="vb-intro">What happened afterward is notable: Maria Bernheim managed to emigrate through a new marriage to a Swedish actor, and Rühmann continued to support her financially even after her emigration. That is exactly the double movement of the Nine-wing and the One's core: outwardly, conflict-avoidant compliance with an overwhelming authority, but privately, the quiet continuation of what his own inner order held to be right – responsibility that is not negotiated publicly, but carried forward silently.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Self-Preservation One with a Nine-Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SE1w9 shows in the reliability with which Rühmann maintained a high craft standard for nearly seventy years, without ever needing scandal or self-promotion – over 100 films, carried by quiet discipline rather than loud self-display.</p>
          <p class="vb-intro">The shadow lies in exactly the evasive move that accompanied him throughout his life: the moral ambivalence of his stance under National Socialism was never publicly worked through, but hidden behind the same friendly, harmless character that had secured his career in the first place. For the self-preservation One with a Nine-wing, one's own conflict avoidance can become a convenient excuse not to face one's own responsibility.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: The Eagle That Circled Unseen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 1995, Heinz Rühmann was posthumously honored with the Golden Camera as "the greatest German actor of the century" – a recognition that continues exactly the paradox of his life: publicly the modest, approachable audience favorite, at his core a man who avoided confrontation and instead drove his own, manageable craft to the highest possible perfection.</p>
          <p class="vb-intro">A revealing comparison is <a href="javascript:void(0)" data-route="krankheitsportraets-anthony-hopkins">Anthony Hopkins</a> (SP1w9) &ndash; in him too, the same combination of decades of precisely disciplined acting craft and a withdrawn private person barely put on public display shows up. More in the <a href="javascript:void(0)" data-route="krankheitsportraets-anthony-hopkins">illness portrait of Anthony Hopkins</a>.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se1", label:"SE1 – The Bald Eagle: Subtype Profile"},
        {route:"krankheitsportraets-anthony-hopkins", label:"Illness Portrait: Anthony Hopkins (SP1w9)"},
        {route:"krankheitsportraets-konrad-adenauer", label:"Illness Portrait: Konrad Adenauer (SP1w9)"},
      ])}
    </div>
  `);
}

export function leaMichelePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-lea-michele-portrait.jpg" alt="Lea Michele – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Lea Michele</p>
        <p class="krim-portrait-typ">SO2w3 · Social Type 2 with Three-wing</p>
        <p class="krim-portrait-subtitle">American singer and actress, b. 1986 – Animal correspondence: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Golden Retriever on Stage</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Golden Retriever</strong> is the animal of the social Two – devoted, irresistibly drawn to being needed and loved, with a devotion that likes to express itself in big, visible gestures. Lea Michele Sarfati, born 1986 in the Bronx, was already on Broadway at age eight – her first engagement in "Les Misérables," long before she was even a teenager. After an acclaimed lead role in "Spring Awakening," she left the production in 2008 to turn toward a new, even bigger stage.</p>
          <p class="vb-intro">In 2009 she was cast as Rachel Berry in the musical series "Glee" – the ambitious, recognition-hungry leader of a high school glee club. The role fit the young actress playing her almost eerily well: a character whose entire self-worth hinged on being seen, needed, and ultimately loved.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Two: Love That Wants to Be Seen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social Two (SO2)</strong> looks for belonging not in quiet devotion to individuals, but in the big, public proof of her own indispensability to a group. Michele campaigned publicly for more than a decade for the role of Fanny Brice in "Funny Girl" – the legendary Broadway role shaped by Barbra Streisand – and made no secret of that wish, turning it instead into a years-long, almost affectionate public campaign.</p>
          <p class="vb-intro">Her relationship with her "Glee" co-star Cory Monteith, public from 2012 on, showed the same underlying stance: closeness that wasn't kept hidden, but lived openly. After his death in 2013 from an overdose, she had his last words to her tattooed on her skin – affection expressed in a lasting, visible mark, not only in private grief.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-wing: A Decade-Long Dream as a Career Goal</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the social Two a sharp sense for image, success, and the right stage at the right time. When Beanie Feldstein left the "Funny Girl" revival early in 2022, Michele took over the role starting September 6, 2022 – the culmination of a publicly celebrated, years-long campaign for exactly this one role, at exactly this moment.</p>
          <p class="vb-intro">Her work beyond "Glee" carries the same signature: four studio albums, two New York Times bestselling books, a consistently maintained public image as a Broadway prodigy. The Three makes sure devotion isn't just felt, but also translated visibly into success.</p>
        </blockquote>

        <h2 class="vb-section">4. The Actual Achievement: Vocal Precision Since Childhood</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What actually distinguishes Michele is a technically exceptionally clean singing voice, trained since childhood: even in high registers, where many singers have to break, strain, or switch to a thinner head-voice sound, she holds a full, powerful chest-voice sound all the way through – known in musical theater as "belting." Belting reads louder, more direct, and more emotionally forceful than the softer head voice, but also demands far more vocal control to avoid straining the vocal cords in the process – a Broadway craft that develops not through talent alone, but through decades of disciplined stage practice. This technique carried "Glee," a show that demanded live-sung, camera-ready vocal performances week after week – a load under which many classically trained singers would have struggled.</p>
          <p class="vb-intro">That very substance is what allowed her, in 2022, to take on one of the most demanding female lead roles in American musical theater: Fanny Brice requires comedic timing, dramatic depth, and a vocal range measured against Streisand's own recording. That Michele not only landed the role but held her own in it was not pure PR – it was earned craft.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In the light, Michele's SO2w3 shows itself as total devotion to her own craft and to the people she loves – public, visible, without false restraint.</p>
          <p class="vb-intro">The shadow of the Two showed clearly in 2020: her former "Glee" co-star Samantha Marie Ware publicly accused her of creating a toxic environment on set and subjecting her to "traumatic microaggressions." Michele apologized publicly, while also stating she did not remember the specific incidents – a response many criticized as insufficient. This is exactly where the flip side of the SO2 with Three-wing shows: the same intensity with which affection and recognition are sought can turn into control and harshness toward those who stand in the way or don't give enough back – behind the publicly maintained facade of the lovable star.</p>
        </blockquote>

        <h2 class="vb-section">6. The Healing Path</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Two's healing path leads from the question <em>Am I loved if I don't constantly prove how needed I am?</em> to the realization <em>I am lovable, even without the grand gesture.</em> Michele herself responded to the 2020 criticism with a public apology – a first, if incomplete, step away from pure self-presentation as the flawlessly lovable one, toward actually taking responsibility.</p>
          <p class="vb-intro">Her 2022 Broadway comeback, after more than a decade of openly campaigning for this one role, shows the mature side of the same pattern at the same time: a dream that wasn't secretly nursed, but openly pursued and finally redeemed through her own achievement. The golden retriever who finally found the stage where devotion and skill no longer stood in contradiction.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protection patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/so2", label:"SO2 – The Golden Retriever: subtype profile"},
        {route:"beruehmte-eva-peron", label:"Portrait: Eva Perón (SO2w3)"},
        {route:"beruehmte-will-smith", label:"Portrait: Will Smith (SO2w3)"},
        {route:"beruehmte-zoe-saldana", label:"Portrait: Zoe Saldaña (SO2w3)"},
      ])}
    </div>
  `);
}

export function michaelMinaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-michael-mina-portrait.jpg" alt="Michael Mina" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Michael Mina</p>
        <p class="krim-portrait-typ">SP3w2 · Self-Preservation Type 3 with Two Wing</p>
        <p class="krim-portrait-subtitle">Celebrity chef and restaurateur, born 1969 – animal correspondence: Raccoon</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Raccoon</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>raccoon</strong> is the animal of the self-preservation Three – pragmatic, adaptable, with an unerring instinct for what actually works. Michael Mina was born in 1969 in Cairo and grew up in rural Ellensburg, Washington – the child of Egyptian immigrants in a small town that had little to do with fine dining. At sixteen, when his employer suffered a heart attack, he single-handedly ran the restaurant for weeks – an early confrontation with responsibility, long before it became a career.</p>
          <p class="vb-intro">This mix of unremarkable origins and early proven practical competence is pure SE3 handwriting: no overnight breakout through a talent show or a famous name, but the patient proof that one can step up when it counts.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Three: Security Through an Empire of Substance</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation Three (SE3)</strong> seeks security not through stage presence or media self-promotion, but through demonstrable, repeatable performance. After training at the Culinary Institute of America, Mina first worked unpaid weekend shifts under Charlie Palmer at New York's Aureole, before gaining a foothold with George Morrone at the Hotel Bel-Air. Together they developed the concept for the restaurant Aqua in San Francisco in 1991, where Mina served as executive chef from 1993 to 2002 and won two James Beard Foundation awards (Rising Star Chef of the Year 1997, Best California Chef 2002).</p>
          <p class="vb-intro">From this craft-based foundation, he built the Mina Group starting in 2002 – today more than 40 restaurants, from his own namesake restaurants each holding a Michelin star (San Francisco, Las Vegas) to the steakhouse concept Bourbon Steak and the barbecue format International Smoke. Not a one-man show, but a system of repeatable quality across dozens of locations – exactly the kind of scaled, resilient security the SE3 seeks, rather than relying on a single, glamorous TV career.</p>
        </blockquote>

        <h2 class="vb-section">3. The Professional Substance: Tableside as Signature</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What distinguishes Mina culinarily isn't a single signature dish, but a service principle: his ahi tuna tartare – sashimi-grade tuna, mixed tableside right in front of the guest with chili, mint, garlic, toasted pine nuts, Korean pear, and habanero sesame oil – has remained on his menus almost unchanged for nearly thirty years, since the Aqua days. Preparing the dish in front of the guest, rather than invisibly in the kitchen, turns a single dish into a repeatable, choreographed service experience that can be reproduced consistently across every restaurant in the group.</p>
          <p class="vb-intro">This is exactly where his real professional achievement lies: not inventing ever-new, singular creations, but standardizing a service ritual precisely enough that it works, with consistent quality, at forty different locations – craft that scales without losing substance.</p>
        </blockquote>

        <h2 class="vb-section">4. The Two Wing: Hospitality as Principle, Not Pose</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Two wing (w2)</strong> shows up in Mina less as emotional expressiveness than as a consistent caring stance toward guests and staff. His publicly stated culinary philosophy repeatedly circles around "thoughtful service," "care and attention," and "balance and harmony" – the guest's well-being takes center stage, not individualistic artistic self-expression, as a Four-winged chef would more likely emphasize.</p>
          <p class="vb-intro">This caring orientation also shows structurally: instead of running his empire as a one-man show, Mina has trained and promoted numerous chefs within the Mina Group over the decades – scaling through people and mentorship, not through an unmistakable singular vision. The tableside-prepared dish itself is, at its core, a relational moment with the guest, not an introspective artistic statement.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Self-Preservation Three</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SE3w2 is the ability to <strong>turn hard, unglamorous work over decades into reliable, warmly delivered quality</strong>. Mina himself describes his relationship to work plainly: "I work hard, and I play hard with my family" – performance as foundation, family as retreat, not another stage.</p>
          <p class="vb-intro">The shadow of the self-preservation Three lies in the danger of defining one's own worth exclusively through demonstrable performance – running more than forty restaurants also means that a plateau or a single failure can quickly feel like personal failure. The flip side of a life organized almost entirely around work and results is the question of who one is when there's nothing to accomplish right now.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: The Raccoon Who Turned a Ritual Into a System</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Michael Mina represents a particular kind of culinary success: not a one-dish wonder or a television personality, but a craft-based system that reliably reproduces itself across forty locations – carried by a single, nearly thirty-year-old tableside ritual that he never replaced, only perfected.</p>
          <p class="vb-intro">From a small-town boy with Egyptian roots who kept a restaurant running at sixteen, to the head of an international restaurant empire: this is the self-preservation Three with a Two wing at its most productive – security through proven, repeatable substance, carried by genuine care for the people sitting at the table.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protection patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/se3", label:"SE3 – The Raccoon: subtype profile"},
        {route:"beruehmte-horst-tappert", label:"Portrait: Horst Tappert (SP3w2)"},
        {route:"beruehmte-bastian-pastewka", label:"Portrait: Bastian Pastewka (SP3w2)"},
        {route:"beruehmte-lang-lang", label:"Portrait: Lang Lang (SP3w2)"},
        {route:"beruehmte-enrico-caruso", label:"Portrait: Enrico Caruso (SP3w2)"},
        {route:"beruehmte-paul-bocuse", label:"Portrait: Paul Bocuse (SP3w4)"},
        {route:"beruehmte-gordon-ramsay", label:"Portrait: Gordon Ramsay (SX3w4)"},
      ])}
    </div>
  `);
}

export function dmitriShostakovichPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-dmitri-schostakowitsch-portrait.jpg" alt="Dmitri Shostakovich" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dmitri Shostakovich</p>
        <p class="krim-portrait-typ">SO5w4 &middot; Social Type 5 with Four-wing</p>
        <p class="krim-portrait-subtitle">Soviet composer, 1906&ndash;1975 &ndash; Animal correspondence: Octopus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Octopus Inside a System's Armor</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>octopus</strong> is the animal of the social Five – a creature that grasps with eight arms at once, reacts with remarkable intelligence, and yet, the moment danger appears, withdraws into a sheltering den or vanishes behind a shift of color. Dmitri Shostakovich, born on 25 September 1906 in St. Petersburg, showed his extraordinary musical talent early: at nineteen he submitted his First Symphony as his graduation piece at the Leningrad Conservatory – a work performed internationally within a short time and one that made him famous almost overnight.</p>
          <p class="vb-intro">But this early fame fell into an era in which an artist with a public voice could pay for that voice with his life. Shostakovich spent his entire adult life inside a political system that needed his art and distrusted it in equal measure – a tension that shaped his career as it did almost no other composer of the twentieth century.</p>
        </blockquote>

        <h2 class="vb-section">2. The Totem: Music in Service of a System Larger Than Himself</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the <strong>social Five</strong> the <strong>Totem</strong>: knowledge and skill are not hoarded as private property but placed at the disposal of a larger system or cause – meaning comes from one's function within that system. From 1960, under considerable political pressure, Shostakovich took the chairmanship of the Union of Composers of the Russian SFSR and held the post until 1968 – a role that made him, officially, the country's highest-ranking musical representative.</p>
          <p class="vb-intro">For him this was no ceremonial honor but a concrete administrative task within a vast state apparatus: funding applications, young composers, the official representation of Soviet music abroad. The octopus did not find its place outside the system but at its very center – as the one whose specialized knowledge kept the system running.</p>
        </blockquote>

        <h2 class="vb-section">3. The Four-Wing: The Private Truth in Code</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Four-wing (w4)</strong> gives the social Five the need to express insight not in purely abstract terms but bound to one's own, often painful, personal truth. From his Violin Concerto (1947/48) through his final, Fifteenth Symphony (1971), Shostakovich wove a four-note monogram into his music: the DSCH motif, the note sequence D–E♭–C–B natural. In German note names these are D, Es, C, H; read as letters they spell D-S-C-H, the initials of Dmitri SCHostakowitsch in German transliteration. In the Eighth String Quartet (1960), the motif runs through literally every single movement.</p>
          <p class="vb-intro">A system that tolerated no open personal statement got one anyway – only encoded, audible only to those who knew the cipher. That is exactly the logic of the Four-wing: the deepest, most individual truth does not disappear, it merely shifts into a form that looks harmless on the surface.</p>
        </blockquote>

        <h2 class="vb-section">4. The Professional Substance: Counterpoint as a Lived Contest with Bach</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What distinguished Shostakovich as a craftsman shows concretely in August 1950: serving on the jury of the Leipzig Bach Competition marking the 200th anniversary of Bach's death, he watched the 26-year-old Tatiana Nikolayeva play any of the 48 preludes and fugues from Bach's Well-Tempered Clavier on request, and win the gold medal for it. Struck by this living command of counterpoint, he began, already on 10 October 1950, his own cycle of 24 Preludes and Fugues, Op. 87 – one prelude and fugue for every major and minor key – completed on 23 February 1951 and premiered by Nikolayeva herself in Leningrad in December 1952.</p>
          <p class="vb-intro">Writing a complete, technically demanding cycle at that pace, one that penetrates every single key contrapuntally, is not mere diligence – it is concrete proof of a mastery of strict fugue technique that scarcely any composer since Bach had demonstrated with this completeness. His Seventh Symphony, 'Leningrad', showed his orchestral mastery from another angle entirely: on 9 August 1942, in the midst of the months-long siege of Leningrad, the few surviving, partly starving musicians of the Leningrad Radio Orchestra – three died during rehearsals – gave the work its first performance in the city itself, reinforced by military musicians, after months of rehearsals that kept being interrupted because players fainted from hunger and cold.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Social Five</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO5w4 shows itself in exactly that Leningrad performance: music as a function within a larger struggle for survival, broadcast by loudspeaker even toward the besieging German troops – knowledge and skill placed entirely in service of a community that was fighting, quite literally, to survive.</p>
          <p class="vb-intro">The shadow of the Five is <strong>avarice</strong> – in Shostakovich's case, it showed itself not as withholding knowledge but as a radical split between public function and private truth. After the anonymous Pravda campaign 'Muddle Instead of Music' in January 1936, ordered directly by Stalin, he reportedly slept for weeks fully dressed with a packed suitcase under his bed, according to his biographer Solomon Volkov, in constant expectation of a night-time arrest. In 1960, in order to officially take the chairmanship of the Union of Composers, he had to join the Communist Party – a decision that, according to his son Maxim, reduced him to tears and about which he told his wife he had been 'blackmailed'. The octopus hoarded its real truth so thoroughly that it only becomes fully graspable today through the code – the DSCH monogram, the symphonies' double meanings.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: Four Letters That Outlived Him</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Dmitri Shostakovich died in Moscow on 9 August 1975. His music is still heard on two levels today: as official Soviet repertoire, performed by the world's greatest orchestras, and at the same time as a body of work full of encoded personal statements whose precise meaning musicologists still dispute – not least because of the posthumously published, disputedly authentic 'Testimony' (1979), which Solomon Volkov presented as Shostakovich's secret memoirs.</p>
          <p class="vb-intro">The DSCH motif itself outlived its creator: composers such as Benjamin Britten took it up as a tribute. The octopus, who navigated an entire lifetime between official function and hidden truth, left behind, in the end, four notes that did what there had been no room for in life – to carry his name out in the open.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/so5", label:"SO5 – The Octopus: Subtype Profile"},
        {route:"beruehmte-albert-einstein", label:"Portrait: Albert Einstein (SO5w4)"},
        {route:"beruehmte-hannah-arendt", label:"Portrait: Hannah Arendt (SO5w4)"},
        {route:"beruehmte-lise-meitner", label:"Portrait: Lise Meitner (SO5w4)"},
        {route:"beruehmte-david-hockney", label:"Portrait: David Hockney (SO5w4)"},
        {route:"beruehmte-leonardo-da-vinci", label:"Portrait: Leonardo da Vinci (SO5w4)"},
        {route:"beruehmte-johannes-brahms", label:"Portrait: Johannes Brahms (SE9w8) – composer, 21 years on the 1st Symphony"},
      ])}
    </div>
  `);
}

export function amberBensonPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-amber-benson-portrait.jpg" alt="Amber Benson – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Amber Benson</p>
        <p class="krim-portrait-typ">SX9w1 &middot; Sexual Type 9 with One-wing</p>
        <p class="krim-portrait-subtitle">American actress, writer and director, born 1977 &ndash; Animal correspondence: Sloth</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Sloth Known for a Supporting Role</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sloth</strong> is the animal of the Sexual Type 9: it hangs in the tree seemingly uninvolved, and whoever looks closer notices how firmly it holds on to the one thing it has chosen. Amber Benson, born on 8 January 1977 in Birmingham, Alabama, the daughter of a psychiatrist, danced at six in the Alabama Ballet's 'Nutcracker', moved to Orlando at twelve and to Los Angeles at fourteen to become an actress. Her first film role came in 1993 in Steven Soderbergh's 'King of the Hill', as the epileptic Ella McShane.</p>
          <p class="vb-intro">She became known worldwide as Tara Maclay in 'Buffy the Vampire Slayer', a gentle, shy witch who appeared in the fourth season and died in the sixth. The role still shapes her public image. That is telling for the Nine: she is remembered above all as the character who stood in the background, even though she has since written books, directed films and produced audio dramas.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Nine: Merging with One Creative Counterpart</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">According to Naranjo, the <strong>Sexual Nine (SX9)</strong> seeks not general harmony but merging with a single, especially meaningful bond. For Benson that bond is a writing partnership: with the author Christopher Golden she published the comic 'WannaBlessedBe' in 2001 and 'Wilderness' in 2002, then the novel series 'Ghosts of Albion' (2004–2006) and, most recently in October 2023, the Audible audio drama 'Slayers: A Buffyverse Story', which she wrote with Golden, directed and voiced herself. That is over twenty years of collaboration with the same person, across changing formats.</p>
          <p class="vb-intro">The film 'Drones' (2010) was made together with Adam Busch, likewise a long-time companion from the Buffy years. The pattern is striking: Benson rarely works alone and rarely with changing strangers, but again and again with the same few people. The merging here is directed not at one person in private life but at the shared work.</p>
        </blockquote>

        <h2 class="vb-section">3. Which Wing Dominates? The One-Wing Dominates, the Eight-Wing Is Called Upon Situationally</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In the typing, SX9w1 stood against SX9w8. Several observations speak for the <strong>One-wing (w1)</strong>. First, the rhythm: the novels of the 'Death's Daughter' series appeared from 2009 to 2013 each at the end of February, year after year, followed by 'The Witches of Echo Park' (2014–2017). That is persistent, orderly production, not erratic working. Second, the manner of her statements: in February 2021 she backed the allegations of her former colleague Charisma Carpenter against the series creator Joss Whedon and described the set as a 'toxic environment' with long-lasting effects. The wording is moral and factual, not angry. Third, her early involvement in Barack Obama's 2008 campaign in an ad by MoveOn.org.</p>
          <p class="vb-intro">An <strong>Eight-wing (w8)</strong> is also present in her, but emerges only in certain situations. That is not a contradiction but rather a healthy sign: in the Enneagram it is said that one flies best through life with two wings. Usually one of the two is dominant, here the One-wing, and the other is activated when needed. It is precisely in such moments that the second wing can be recognized. In Benson's case it shows in the insistence on keeping her own work in her own hands: for 'Chance' (2002) she co-wrote, directed, produced and edited the film and played the lead; 'Lovers, Liars &amp; Lunatics' (2006) she partly financed through sales of a limited-edition action figure. And it shows in February 2021: she publicly stood behind her former Buffy colleague Charisma Carpenter, who had accused the series creator Joss Whedon of misconduct, and thereby spoke up directly, regardless of the consequences, for a fellow cast member against a powerful man. That is Eight energy that does not set the tone permanently but is called upon when justice and loyalty demand it.</p>
          <p class="vb-intro">That the One-wing nevertheless predominates is shown by the rest of the picture: a permanently dominant Eight-wing would generally show up earlier, more directly and more physically, whereas Benson appears quiet, orderly and persistent in everyday life and work. In the Enneagram the rule of thumb is that one flies through life better with two wings than with one. That Benson, besides her dominant One-wing, also uses the Eight-wing when needed is therefore a healthy development. Whoever, by contrast, lives only one wing very one-sidedly and shows no trace of the other in behavior is rather caught in an unhealthy one-sidedness.</p>
        </blockquote>

        <h2 class="vb-section">4. The Substance: Author, Director, Singer and Narrator in One Person</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Benson's achievement lies in the breadth hidden behind the label of actress. In the series' musical special, 'Once More, with Feeling', she sang, among others, the solo 'Under Your Spell', and she appeared as a singer on Anthony Stewart Head's album 'Music for Elevators' (2002). As an author she wrote, with 'Ghosts of Albion', a fantasy series around British folklore, from which animated films for the BBC with Cosgrove Hall also emerged, and with the five 'Death's Daughter' novels the story of a young woman who learns that she is the daughter of Death.</p>
          <p class="vb-intro">As a director and narrator she broadened the range further: in 2014 she read John Scalzi's 'Lock In' as an audiobook, in 'Slayers: A Buffyverse Story' she directed and brought James Marsters, Charisma Carpenter and Anthony Stewart Head to the microphone, and in 2024 she acted in 'I Saw the TV Glow'. This is typical for the Nine: the ability lies not in a single showpiece but in a reliable, versatile craft that she practices without much fuss.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Sexual Nine with a One-Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX9w1 shows in constancy: a creative bond that carries over two decades, and a stance that needs no volume but holds a clear line. That she spoke for a colleague in 2021 instead of staying silent shows that this calm is not indifference.</p>
          <p class="vb-intro">The shadow of the Nine is <strong>self-forgetting (sloth)</strong>: one's own wanting steps behind the counterpart or the role. In Benson's case this shows in the fact that her public image stuck to a character she played for only a few seasons, while her own body of work is far less known. Whether she wants to change that, she has not let on.</p>
        </blockquote>

        <h2 class="vb-section">6. The Comparison: The Same Sloth, Different Works</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Closest to her stands <a href="#beruehmte-owen-wilson">Owen Wilson (SX9w1)</a>: his thirty-year writing partnership with Wes Anderson is the parallel to Benson's collaboration with Golden, and both lead private lives that hardly become a public topic. <a href="#beruehmte-sophie-marceau">Sophie Marceau (SX9w1)</a> shares with her the path from actress to director without taking on the role of the loud star. A contrast worth drawing is <a href="#beruehmte-dakota-johnson">Dakota Johnson (SX9w8)</a>: her portrait describes claws you only see once you get too close, while Benson's consistency shows as quiet persistence.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protection patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
          {route:"subtype/sx9", label:"SX9 – The Sloth: Subtype Profile"},
          {route:"beruehmte-owen-wilson", label:"Portrait: Owen Wilson (SX9w1) – decades-long writing partnership"},
          {route:"beruehmte-sophie-marceau", label:"Portrait: Sophie Marceau (SX9w1) – actress and director"},
          {route:"beruehmte-dakota-johnson", label:"Portrait: Dakota Johnson (SX9w8) – same subtype, different wing"},
        ])}
      </div>
    </div>
  `);
}
