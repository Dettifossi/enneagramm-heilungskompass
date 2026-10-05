import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft, animalResearcherMatchBlock } from "../../bundle.js";

export function helgeSchneiderPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-helge-schneider-portrait.jpg" alt="Helge Schneider – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Helge Schneider</p>
        <p class="krim-portrait-typ">SX9w1 &middot; Sexual Type 9 with One-wing</p>
        <p class="krim-portrait-subtitle">Musician, comedian, and director, born 1955 &ndash; Animal correspondence: Sloth</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Sloth on Stage</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sloth</strong> is the animal of the Sexual Nine – an animal that doesn't set itself apart but merges: with the mood, with the moment, with the audience. Helge Schneider, born in 1955 in Mülheim an der Ruhr, walks on stage with no fixed program and no manifesto — what happens arises in the moment itself, out of a fusion with that particular evening's mood, not from a plan laid out in advance.</p>
          <p class="vb-intro">He sees himself primarily as a jazz musician, not as a comedian — as a child he heard Louis Armstrong on the radio, and later fell in love with Thelonious Monk's music after the album cover alone left a deep impression on him. This early, almost wordless fusion with his musical idols carries his entire body of work to this day.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Nine: Fusion Instead of a Fixed Position</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo's <strong>Sexual Nine (SX9)</strong> seeks fulfillment through complete fusion — with a person, a mood, a moment — rather than through a clearly stated position of its own. Schneider consistently refuses to explain his work: no grand programs, no manifesto texts. If you want to understand something, you have to look — not read. This silence is no evasion, but a protection of his own artistic freedom from any outside appropriation of meaning.</p>
          <p class="vb-intro">On stage, he creates situations in which the audience itself has to decide whether to go along or not — musical passages don't illustrate, they carry; pauses are allowed to run deliberately longer than dramaturgical convention would permit. This is exactly the SX9 logic: no path is prescribed, but a space is opened that the audience can step into — or not.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-Wing: Discipline Behind the Apparent Chaos</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>One-wing</strong> gives the Sexual Nine a hidden but unmistakable rigor. What looks like pure chance on stage is in fact the result of decades of musical practice — his timing, his structure, his improvisation are not accidents, but the result of hard work. This very combination of apparent randomness and real, never-flaunted precision is what makes an SX9w1.</p>
          <p class="vb-intro">His relationship to the Ruhr region where he grew up mirrors this wing as well: skill isn't put on display there, it's used. Rather than staging his success, Schneider became visible precisely through restraint — a quiet but unyielding stance that also showed when he simply didn't perform during the pandemic if the outer conditions didn't meet his requirement for closeness and immediacy. Attitude is shown in action, not in a statement.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: From Radio Kid to Cult Musician</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Schneider's commercial breakthrough came in 1992 with the album "Guten Tach"; in 1994 he became known to a broader TV audience — "Katzeklo" entered the German charts. To this day he can't be classified as either a pure musician or a classic comedian; his specialty lies in the simultaneity of seriousness and play. He provokes and surprises with an absurd humor that hardly anyone else would dare to attempt.</p>
          <p class="vb-intro">His heterogeneous audience shares a space without being required to agree — his work connects without uniting. Even laughter itself, with him, is delayed and optional, never a pure reflex. This is exactly the SX9 ability: to create a shared space in which different things can coexist, without forcing anyone into a fixed position.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Sexual Nine with a One-Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX9w1 shows in Schneider in the ability to create, out of pure fusion with the moment, something no fixed concept could ever achieve — an art that stays alive because it never explains itself and never hardens into a formula.</p>
          <p class="vb-intro">The fate pattern of the Nine is <strong>self-forgetting</strong> — in the SX9, turned into a dissolving of one's own contours in favor of fusion with the audience, the music, the moment. The One-wing keeps Schneider from disappearing into pure randomness by lending the fusion an invisible but tangible structure — without that structure, the fusion would become mere chaos, not art.</p>
        </blockquote>

        <h2 class="vb-section">6. The Sloth That Knows Exactly When to Take Its Time</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Helge Schneider's career shows the sexual Nine with a One-wing in a particularly idiosyncratic form: an art that refuses any explanation and precisely through that refusal preserves its freedom, carried by a discipline that never pushes itself into the foreground. The sloth doesn't rush — but when it moves, it does so with a precision that betrays decades of practice.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
          {route:"subtype/sx9", label:"SX9 – The Sloth: Subtype Profile"},
          {route:"kriminalpsychologie-wolfgang-beltracchi", label:"Criminal Psychology: Wolfgang Beltracchi (SX9w1) – also a fusion with someone else's artistic idols, here as art forgery"},
          {route:"beruehmte-sophie-marceau", label:"Portrait: Sophie Marceau (SX9w1)"},
          {route:"beruehmte-adam-sandler", label:"Portrait: Adam Sandler (SX9w1) – the same precision behind apparent casualness"},
        ])}
      </div>
    </div>
  `);
}

export function ajeetKaurPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ajeet-kaur-portrait.jpg" alt="Ajeet Kaur – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ajeet Kaur</p>
        <p class="krim-portrait-typ">SO4w5 &middot; Social Type 4 with Five-wing</p>
        <p class="krim-portrait-subtitle">American singer and mantra artist &ndash; Animal correspondence: Armadillo</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The armadillo that withdrew into music</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>armadillo</strong> is the animal of the Social Four &ndash; a creature that does not hide its difference but wears it visibly on its skin, while its sensitive interior stays protected underneath. The American singer Ajeet Kaur, born Siobhan Moore, grew up in the forests and mountains of New Hampshire, in a household shaped equally by the Sikh tradition and the Roman Catholic faith. At age eight she was diagnosed with Hashimoto's thyroiditis, a chronic autoimmune disease of the thyroid &ndash; an early physical experience of being different that would accompany her for the rest of her life.</p>
          <p class="vb-intro">She encountered Kundalini Yoga through her family even before birth. At eleven, at a women's camp in New Mexico led by Yogi Bhajan, she experienced how deeply music could uplift an entire room of people &ndash; a moment that convinced her there was nothing else she would rather do than offer a healing vibration through sound. At sixteen she began her Kundalini Yoga teacher training.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Four: healing as a communal act</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Social Four (SO4)</strong> seeks its worth not in pure withdrawal, but in a special role within a community &ndash; here: the worldwide Kundalini Yoga and mantra community. With her debut album "Sacred Waters" (2013) and "At the Temple Door" (2014), which featured renowned chant artist Snatam Kaur, Ajeet Kaur established herself as a distinct voice within a genre she remained deeply loyal to. She still tours today both with her own band and alongside Snatam Kaur &ndash; a belonging that never becomes mere conformity.</p>
          <p class="vb-intro">Her own, deeply personal health history flowed directly into her public role as a healer through music: "Mantra and music has always been a big part of managing my own health," she once said. This is typical of the Social Four: one's own suffering is not hidden but becomes the foundation of a role that serves others &ndash; and is seen precisely through that role.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five-wing: music as a sanctuary rather than a stage</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five-wing (w5)</strong> gives the Four an introverted, retreat-oriented note &ndash; one's own emotional world is not put on display but moved into a protected inner space, from which something only later reaches the outside. Ajeet Kaur describes music in exactly these terms: "Music has always been a sanctuary for me. It's a place I can always disappear into and feel reunited with a deeper and more peaceful part of myself. I've retreated into music this way since I was a child and still do today."</p>
          <p class="vb-intro">This language of retreat &ndash; not of performance &ndash; is the purest expression of SO4w5: art and music as "the greatest healers, teachers, and therapists" of her life, as she puts it herself, not primarily as a means of self-presentation. The stage exists, but it is a side effect of a process that is, at its core, private and meditative.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO4w5 is its ability to turn <strong>one's own suffering into a source of healing for others</strong> &ndash; Ajeet Kaur's early experience of illness did not become a mere limitation but the starting point of an artistic path that has accompanied people worldwide in concerts and workshops for decades. From a very personal vulnerability grew a role that offers others genuine comfort.</p>
          <p class="vb-intro">The shadow of the Social Four with a Five-wing shows where retreating into music becomes the only available coping strategy &ndash; where a chronic illness must be carried for a lifetime, and introverted, meditative processing can at times remain harder to access than a more direct, open way of handling pain and vulnerability in daily life.</p>
        </blockquote>

        <h2 class="vb-section">5. The armadillo that turned its vulnerability into sound</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Ajeet Kaur remains one of the most distinctive voices in the contemporary mantra and Kundalini music scene &ndash; an artist who never made a secret of her chronic illness, but instead made it the source of music explicitly meant to be understood as medicine. Her path shows how, out of early physical vulnerability, a life's work can grow that shows others that very vulnerability as something shareable, not shameful.</p>
          <p class="vb-intro">The armadillo that built its shell not out of hardness, but out of sound &ndash; that is the lasting image of the Social Four with a Five-wing: vulnerability that does not put itself on display, but withdraws, in order to touch others from there, in stillness.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/so4", label:"SO4 – The Armadillo: Subtype Profile"},
        {route:"lebensmusterkompass/so4", label:"Life Pattern Compass: SO4 – Armadillo"},
        {route:"beruehmte-mariella-superina", label:"Portrait: Dr. Mariella Superina (SO4w5)"},
        {route:"beruehmte-lauren-gardner", label:"Portrait: Prof. Lauren Gardner (SO4w5)"},
      ])}
    </div>
  `);
}

export function annaAndersonPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-anna-anderson-portrait.jpg" alt="Anna Anderson – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Anna Anderson</p>
        <p class="krim-portrait-typ">SP3w4 &middot; Self-Preservation Type 3 with Four-wing</p>
        <p class="krim-portrait-subtitle">History's most famous impostor, 1896–1984 – Animal correspondence: Raccoon</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Raccoon</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The raccoon is the animal of the self-preservation Three – an animal easy to underestimate. No loud entrance, no stage, just clever hands, a watchful eye for what's needed, and the ability to build a livelihood out of almost nothing. Anna Anderson did exactly that – except the "nothing" she built an existence out of was someone else's identity.</p>
          <p class="vb-intro">In 1920, a young woman was pulled from a Berlin canal after a suicide attempt and admitted to a psychiatric asylum. Shortly afterward she began claiming to be Anastasia Romanov, the youngest daughter of the last Russian tsar – supposedly the sole survivor of the 1918 murder of the imperial family. Under the name Anna Anderson, she lived for decades off the support of wealthy believers convinced by her story.</p>
        </blockquote>

        <h2 class="vb-section">2. The self-preservation Three: Security as a life's project</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">According to Naranjo, the self-preservation Three (SE3) is the subtype he called "Security" – not a Three seeking the big stage, but one tirelessly working on the material foundation, often in the background, often underestimated. In Anna Anderson this pattern surfaced in an extreme, tragic form: her real goal was never public fame for its own sake, but lasting provision by others – housing, food, medical care, a life free of the poverty she likely came from.</p>
          <p class="vb-intro">The identity as Anastasia was not the purpose but the means. For decades she moved from one benefactor's household to the next, always wherever belief and sympathy still meant support. In 1968, shortly before her US visa expired, she married historian John Manahan – a pragmatic arrangement that secured her permanent residence in the United States. That very sobriety at the core of an apparently romantic story is the SE3's signature.</p>
        </blockquote>

        <h2 class="vb-section">3. The Four wing: Tragic uniqueness</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">An SE3 with a more muted Four wing would likely have chosen a less dramatic legend. In Anderson's case, a pronounced pull toward the dramatic, the singular, the irreproducibly tragic came through instead: not just any survivor, but the last daughter of an extinguished imperial house – marked by a trauma no one else had ever lived through. This narrative offered an identity that went far beyond ordinary suffering.</p>
          <p class="vb-intro">Her actual life supported this role in unsettling ways: multiple psychiatric hospitalizations, suicide attempts, extreme mood swings, a life lived in constant emotional crisis. Whether genuine trauma, a learned role, or both interwoven, the Four wing supplied the inner depth that turned a bare claim into a credibly lived, tragic identity.</p>
        </blockquote>

        <h2 class="vb-section">4. The longest civil trial in German history</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Starting in 1938, Anderson sought legal recognition of her identity as Anastasia in order to pursue claims to the Romanov inheritance. The trial dragged on for 32 years and became the longest-running civil case in German legal history. In 1970 the Karlsruhe appeals court upheld the lower court's ruling: her identity could neither be proven nor disproven.</p>
          <p class="vb-intro">Important for how she is classified here: this was a civil case over inheritance claims, not a criminal trial. Anna Anderson was never criminally charged or convicted of fraud or any other offense – which is exactly why she appears here under "Famous Personalities" rather than "Criminal Psychology". Her case remains a borderline figure: a woman whose claim was never judicially established as fraud, even though it later proved to be false.</p>
        </blockquote>

        <h2 class="vb-section">5. The DNA resolution: Franziska Schanzkowska</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Only in 1994, ten years after Anderson's death, did a DNA test on preserved tissue samples bring clarity: her mitochondrial DNA matched neither the Romanov remains nor living relatives of the tsar's family – but it did match a great-nephew of Franziska Schanzkowska, a Polish factory worker who had vanished without a trace in 1920, at the very time Anna Anderson appeared.</p>
          <p class="vb-intro">The SE3 invests enormous energy in securing an identity that holds – to the very end, even beyond death. Even as science contradicted her, Anderson had lived the role so long and so consistently that legend and person could hardly be separated anymore.</p>
        </blockquote>

        <h2 class="vb-section">6. The Raccoon that built itself a crown</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Anna Anderson's story shows the SE3w4 in its most extreme, most ambivalent form: the pragmatic, tireless work of securing herself, combined with an identity of such tragic depth that millions of people believed her – or wanted to – for eight decades. Whether she herself came to believe her own story at some point remains an open question. Perhaps that was exactly the point: the line between survival strategy and lived truth blurs when a role is played long enough.</p>
          <p class="vb-intro">The raccoon builds a working livelihood out of whatever is available – clever, unobtrusive, able to survive under the harshest conditions. Anna Anderson built, out of a trauma, a vanished name, and a fallen dynasty, an existence that held for over six decades. That is not an admirable achievement. But it shows what the self-preservation Three with a Four wing is capable of under extreme pressure.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-judit-polgar", label:"Portrait: Judit Polgár (SP3w4)"},
          {route:"kriminalpsychologie-frank-abagnale-jr", label:"Criminal Psychology: Frank Abagnale Jr. (SO7w6) – The Impostor"},
        ])}
      </div>
    </div>
  `);
}

export function billKaulitzPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-bill-kaulitz-portrait.jpg" alt="Bill Kaulitz – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Bill Kaulitz</p>
        <p class="krim-portrait-typ">SX4w3 &middot; Sexual Type 4 with Three-wing</p>
        <p class="krim-portrait-subtitle">German musician, model &amp; designer, born 1989 &ndash; Animal correspondence: Chihuahua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Chihuahua</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Chihuahua</strong> is the smallest dog breed in the world &ndash; and behaves like the largest. It fears nothing, barks when necessary, and shows no hesitation before what is bigger than itself. Few people have made this contrast so consistently their own stage persona as Bill Kaulitz: slight in build, often in the boldest makeup and most striking wardrobe imaginable, and never at a loss for a provocative statement.</p>
          <p class="vb-intro">The German musician Bill Kaulitz was born on September 1, 1989, in Leipzig, ten minutes after his identical twin brother Tom (SP2w3). When they were six, their parents separated; the divorce followed at seven. In Loitsche, near Magdeburg, where the family grew up afterward, young Bill's unusual look and unusual voice made him anything but inconspicuous &ndash; an early starting point for a life that was never going to be quiet. Tom is also covered in his own portrait in this compass.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Four: Measuring Up to Be Seen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sexual Four (SX4)</strong> carries the pain of the Four into immediate personal intensity. Naranjo called this subtype <em>Rivalry</em> &ndash; the burning conviction that others have what has been denied to oneself, combined with the impulse to measure oneself, to outdo, to stand out. Bill Kaulitz's voice was unusually high and piercing even as a child &ndash; a trait that set him apart from his peers rather than blending him in, and one he never tried to hide.</p>
          <p class="vb-intro">With Tokio Hotel and the debut album <em>Schrei</em> (2005) and its single <em>Durch den Monsun</em>, which reached number one on the German charts within a month, Bill turned exactly this difference into a public statement instead of a hiding place. The SX4 knows: half-hearted is not an option &ndash; and Bill Kaulitz has lived this principle consistently for over two decades, from the stark black-and-white frontman aesthetic of the band's early years to the constantly reinvented, glittering looks of his later public appearances.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: From Frontman to Fashion Icon</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the sexual Four the ability to turn the interior outward and transform it into effect, rather than sinking into its own intensity. Karl Lagerfeld booked Bill Kaulitz for a multi-part photo shoot in German <em>Vogue</em> more than a decade ago; in 2010 he modeled for the label Dsquared2; in 2019 he launched his own fashion brand, "Magdeburg &ndash; Los Angeles" &ndash; named after exactly the two places between which his life has stretched ever since.</p>
          <p class="vb-intro">This drive shows beyond music as well: in 2021, he hosted the ProSieben show <em>Perfect Shot</em>; in 2023, he won the finale of Joko Winterscheidt's <em>Wer stiehlt mir die Show?</em>. The Three-wing keeps asking: how do I turn what moves me inside into an image no one can overlook? For Bill Kaulitz, the answer has stayed the same for more than twenty years &ndash; only the stage keeps changing.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Sexual Four</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX4w3 is the ability not to hide one's own otherness, but to display it so consistently that identity and impact emerge from it at once. Bill Kaulitz lives openly queer and speaks unguardedly about his identity in interviews, on the podcast he shares with his brother, and in public &ndash; a visibility that has made him a point of orientation for many young queer fans in Germany.</p>
          <p class="vb-intro">The fate pattern of the Four is <strong>envy</strong> &ndash; the feeling that others were given something essential that one lacks oneself. In the SX4w3, this envy can become a constant need to visibly stand apart from others, rather than finding calm in one's own uniqueness. Kaulitz's ever-reinvented look &ndash; from the black frontman uniform of the early years to the glittering, often androgynous looks of later years &ndash; shows this restless search just as clearly as his creative strength.</p>
        </blockquote>

        <h2 class="vb-section">5. The Work: Intensity as the Throughline</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Bill Kaulitz's career reads as one continuous translation of inner intensity into outer form: the piercing voice that stood out even as a child became the frontman presence of Tokio Hotel; the provocative look became his own fashion label; the openness about his own identity became a public voice for queer visibility. Since 2021, he and his twin brother Tom have co-hosted the German Podcast Award&ndash;winning podcast <em>Kaulitz Hills &ndash; Senf aus Hollywood</em> &ndash; the same close family bond that also defines Tom's own portrait remains, to this day, the constant behind every public transformation.</p>
          <p class="vb-intro">The Chihuahua is not an animal of the crowd. It is an animal of intensity &ndash; small, loud, impossible to overlook, and underneath, sensitive and intensely attached. Bill Kaulitz's path from a conspicuous child in Loitsche to an internationally visible figure in fashion and music shows exactly this pattern: someone who cannot hide eventually finds out how to turn standing out itself into art.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx4", label:"SX4 – The Chihuahua: Subtype Profile"},
        {route:"beruehmte-tom-kaulitz", label:"Portrait: Tom Kaulitz (SP2w3) – twin brother"},
        {route:"beruehmte-heidi-klum", label:"Portrait: Heidi Klum (SX3w4) – sister-in-law"},
        {route:"beruehmte-freddie-mercury", label:"Portrait: Freddie Mercury (SX4w3)"},
        {route:"beruehmte-billie-eilish", label:"Portrait: Billie Eilish (SX4w3)"},
      ])}
    </div>
  `);
}

export function carlWeathersPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-carl-weathers-portrait.jpg" alt="Carl Weathers – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Carl Weathers</p>
        <p class="krim-portrait-typ">SO2w3 &middot; Social Type 2 with Three-wing</p>
        <p class="krim-portrait-subtitle">American actor &amp; director, 1948&ndash;2024 &ndash; Animal correspondence: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Golden Retriever</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Golden Retriever</strong> is the animal of the social Two &ndash; an animal that doesn't see its role within an ensemble as second choice, but as a distinct, often decisive force. Carl Weathers never became the biggest star of the films he appeared in, and yet he became one of their most indispensable figures &ndash; as an opponent, mentor, or charismatic supporting actor whose presence completed the lead characters around him.</p>
          <p class="vb-intro">Carl Weathers was born on January 14, 1948, in New Orleans, Louisiana, and was first a successful football player at San Diego State University and briefly with the Oakland Raiders before retiring from sports in 1974. The switch from team sports to acting was not a break for him, but a continuation of the same role: being part of something larger, reliably contributing one's share.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Two: The Rival Who Carries an Entire Film Series</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the <strong>social Two (SO2)</strong> <em>Ambition</em>: it doesn't necessarily want to be at the center, but to become indispensable through its impact on the whole. When Weathers auditioned for <em>Rocky</em> in 1976, he remarked after a table read with Sylvester Stallone that they should get him a "real actor" to work with &ndash; not knowing Stallone was both the screenwriter and intended lead. That very directness won Stallone over and secured him the role of Apollo Creed.</p>
          <p class="vb-intro">As Apollo Creed across four <em>Rocky</em> films, Weathers was never the lead &ndash; and yet the entire series is hard to imagine without his rival. His energy consistently served to make the story around him bigger, rather than pulling it toward himself: the social Two, who measures its worth not by its own size but by what it makes possible for the whole work.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: From Football Pro to a Repeatedly Reinvented Career</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the social Two the drive to turn every role into visible, recognizable success. After Apollo Creed, Weathers played the elite soldier Dillon alongside Arnold Schwarzenegger in <em>Predator</em> and the former golf pro Chubbs Peterson in <em>Happy Gilmore</em> &ndash; two completely different registers, each becoming an unforgettable supporting character.</p>
          <p class="vb-intro">Late in life, he found a third major comeback with the role of Greef Karga in <em>The Mandalorian</em>, which earned him an Emmy nomination in 2021 &ndash; and he also directed several episodes of the series. The Three-wing ensures a career keeps reinventing itself, rather than resting on a single role.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Social Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO2w3 lies in the ability to reliably take on roles across decades that let others shine, without losing presence himself. Weathers' shift from acting to directing in the final chapter of his career shows how the same energy can, with growing maturity, also move behind the camera &ndash; from being carried to actively carrying a younger cast.</p>
          <p class="vb-intro">The fate pattern of the Two is <strong>pride</strong> &ndash; the conviction of being indispensable to the success of the whole. In the SO2w3, this can combine with a need to prove, in every new role, that one is still needed &ndash; a drive that led to remarkable versatility across a nearly fifty-year career, but rarely gave cause to rest.</p>
        </blockquote>

        <h2 class="vb-section">5. The Work: From Oakland Raiders Pro to Hollywood's Indispensable Supporting Actor</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">From his football career through Apollo Creed, Dillon, and Chubbs Peterson to Greef Karga and his own directing work, a single thread runs through Weathers' career: the willingness to take on a load-bearing, but never self-centered, role in every team, every cast, every story.</p>
          <p class="vb-intro">The Golden Retriever doesn't need to be the star of the show to become indispensable. Carl Weathers, who died on February 1, 2024, at age 76, left behind a career that proved exactly that: a legacy isn't measured by the size of one's own role, but by how much one carried the whole.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so2", label:"SO2 – The Golden Retriever: Subtype Profile"},
        {route:"beruehmte-bruno-mars", label:"Portrait: Bruno Mars (SO2w3)"},
        {route:"beruehmte-ayo-edebiri", label:"Portrait: Ayo Edebiri (SO2w3)"},
      ])}
    </div>
  `);
}

export function cristianoRonaldoPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-cristiano-ronaldo-portrait.jpg" alt="Cristiano Ronaldo – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Cristiano Ronaldo</p>
        <p class="krim-portrait-typ">SO3w2 &middot; Social Type 3 with Two-wing</p>
        <p class="krim-portrait-subtitle">Footballer, born 1985 &ndash; Animal correspondence: Cheetah</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Cheetah</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Cheetah</strong> is the animal of the social Three &ndash; and it is the fastest animal on Earth. Not the strongest, not the largest. The fastest. What distinguishes the cheetah is not raw force, but precision: every movement optimized, every unit of energy directed at the goal, no waste, no distraction. The cheetah does not hunt with patience like the lion &ndash; it hunts with speed, with technique, with the absolute will to be first.</p>
          <p class="vb-intro">Cristiano Ronaldo is the cheetah in raw form. Five World Player of the Year titles, five Champions League victories, over 900 career goals &ndash; numbers that do not arise from talent alone, but from a drive that anyone who has ever observed him knows: he wants to be the best. Not one of the best. The best. The cheetah does not rest on its laurels. It trains while others celebrate.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Three: Success as Message</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social Three (SO3)</strong> is the amplification type of the Three &ndash; the subtype in which vanity and drive for achievement are most visible. While the self-preservation Three directs performance inward and prefers to work in the background, the social Three needs the stage. Not out of self-satisfaction, but because recognition &ndash; public, collective, measurable recognition &ndash; is the deepest fuel. The SO3 asks: <em>Do they all see me? Does the world know what I have achieved?</em></p>
          <p class="vb-intro">In Cristiano Ronaldo this energy is visible in every celebration. The famous &bdquo;Siuuu&ldquo;, the outstretched arm, the gaze into the stadium &ndash; that has a clear reason. That is the SO3, wanting to savor the moment of recognition fully. No goal without celebration. No achievement without affirmation. Not because he is vain in an empty sense &ndash; but because public recognition is as essential to the social Three as water is to plant growth.</p>
          <p class="vb-intro">The SO3 measures itself against others &ndash; and needs standards to orient itself. Ronaldo&#39;s decades-long rivalry with Lionel Messi is perhaps the purest example of this in sporting history: two men who drive each other to peak performance because neither wants to be second. For the SO3, competition is not stress &ndash; it is fuel.</p>
        </blockquote>

        <h2 class="vb-section">3. The Two-wing: The Star Who Is Also a Brother</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Two-wing (w2)</strong> brings the social Three a decisive human dimension: the genuine impulse toward connection, toward care, toward loyalty. An SO3 with a more muted Two-wing could seem cold &ndash; a success machine that subordinates everything to the result. The Two-wing warms this image from within: here is someone for whom others genuinely matter.</p>
          <p class="vb-intro">Ronaldo&#39;s relationship with his family is the clearest sign of this. He lifted his mother out of poverty, openly integrated his son Cristiano Jr. into his life, speaks regularly in interviews about his origins from Madeira, about the difficult years of childhood, about the father who died young. The SO3 alone might use these stories strategically. The Two-wing makes them real: these are not PR moments &ndash; this is a human being who knows where he comes from and does not forget those who loved him.</p>
          <p class="vb-intro">The Two-wing also explains Ronaldo&#39;s relationship with his teams. He is not a lone wolf &ndash; he wants everyone to win together. He celebrates with his teammates, wears jerseys with their names, praises publicly. The cheetah&#39;s speed remains &ndash; but the Two-wing ensures the finish line is celebrated together.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Social Three</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO3 is its drive toward excellence. Cristiano Ronaldo has helped define what it means to engage professionally with sport: his nutrition regime, his sleep rhythm, his training after training. He has inspired a generation of players who understood: talent is not enough. Will decides. That is the SO3 in its most healing form &ndash; as a model for what is possible when one devotes oneself completely to a goal.</p>
          <p class="vb-intro">The fate pattern of the Three is <strong>vanity / deception</strong> &ndash; the deep need to be perceived as successful, even when inner reality looks different. In the SO3 this manifests as difficulty in truly accepting defeat. Ronaldo has occasionally shown, in moments of criticism or sporting failure, reactions that reveal more about the inner world of the Three than about the situation itself: anger, withdrawal, the need for justification. The cheetah that loses, suffers.</p>
          <p class="vb-intro">The Two-wing brings the risk of using one&#39;s own generosity as part of one&#39;s own image &ndash; unconsciously, but effectively. The boundary between genuine giving and the need to be seen as giving is, for the SO3w2, a lifelong question.</p>
        </blockquote>

        <h2 class="vb-section">5. The Healing Path: From Winning to Being</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Three leads from the question <em>What have I achieved?</em> to the insight <em>I am &ndash; beyond all victories.</em> For the SO3 this means a particularly hard step: releasing the idea that the number of trophies says something about one&#39;s own value. The cheetah that has stopped running must learn: I am even when no stadium is cheering.</p>
          <p class="vb-intro">Cristiano Ronaldo is approaching the end of an unparalleled career &ndash; and the question of who he is when football ends is perhaps the deepest he has ever had to answer. The Two-wing gives him a head start: the love for his family, for his children, for the people who love him not for his goals, is a foundation that remains. On that a identity can be built that is greater than any ranking list.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so3", label:"SO3 – The Cheetah: Subtype Profile"},
        {route:"beruehmte-kai-pflaume", label:"Portrait: Kai Pflaume (SX3w2)"},
        {route:"beruehmte-virgil-van-dijk", label:"Portrait: Virgil van Dijk (SO3w2) – also a world-class footballer, same subtype"},
      ])}
    </div>
  `);
}

export function dietmarBaerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-dietmar-baer-portrait.jpg" alt="Dietmar Bär" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dietmar Bär</p>
        <p class="krim-portrait-typ">SP9w8 &middot; Self-Preservation Type 9 with Eight-wing</p>
        <p class="krim-portrait-subtitle">Actor, b. 1961 &ndash; since 1997 "Detective Ballauf" in the Cologne Tatort &ndash; Animal correspondence: Elephant</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Elephant</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>elephant</strong> is the animal of Self-Preservation Nine &ndash; massive, comfortable, bound to its own territory and its herd, and yet surprisingly decisive the moment it truly matters. No other animal so precisely embodies a man who has investigated as Detective Max Ballauf in the Cologne "Tatort" since 1997: down-to-earth, without star airs, with a fondness for the hearty and the direct &ndash; and with a center of gravity that is not easily knocked off balance.</p>
          <p class="vb-intro">Dietmar Bär, born in Cologne in 1961, has been tied to the same role for nearly three decades &ndash; one of the longest-running detective pairings in German television history. The elephant does not relocate. It stays at its watering hole, in its herd, in its city &ndash; and this constancy, not spectacular transformation, is the real strength Bär embodies publicly.</p>
        </blockquote>

        <h2 class="vb-section">2. Self-Preservation Nine: Comfort as Foundation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro"><strong>Self-Preservation Nine (SP9)</strong> directs the typical Nine search for peace not primarily toward the group (as with Social Nine) or toward a single merging (as with Sexual Nine), but toward one's own, immediate well-being: food, habits, the familiar home, a life without unnecessary friction. Bär speaks in interviews strikingly often and with visible pleasure about cooking and eating, about Cologne as his fixed center of life, about the importance of rituals and the familiar in everyday life.</p>
          <p class="vb-intro">This is no coincidence but the core of SP9: security arises not through social recognition or a single intense bond, but through the cultivation of one's own immediate comfort. This same down-to-earth quality transfers almost one-to-one to Ballauf &ndash; a detective who never seeks the big entrance, preferring instead to stay within the familiar Cologne milieu he knows inside and out.</p>
        </blockquote>

        <h2 class="vb-section">3. The Eight-Wing: Directness Without Threat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Eight-wing (w8)</strong> gives Self-Preservation Nine something an SP9 with a less developed Eight wing often lacks: a direct, unvarnished manner, a clear edge when needed. In interviews, Bär comes across not as diplomatically reserved, but warm and yet assertive and open &ndash; he says what he thinks, without coming across as aggressive or confrontational.</p>
          <p class="vb-intro">This distinguishes SP9w8 from the pure, unwinged Nine: comfort remains the foundation, but it never becomes conflict avoidance at any cost. His long-standing role as a UNICEF ambassador shows the same mixture &ndash; not loud activism, but steady, reliable commitment to a cause, combined with a clear, unmistakable stance when it comes to children's rights.</p>
        </blockquote>

        <h2 class="vb-section">4. The Role: Ballauf as an Extension of His Own Groundedness</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Max Ballauf is the more emotional, more direct of the two detectives in the Cologne "Tatort" &ndash; one who occasionally raises his voice, who states his opinion bluntly, and who clashes and connects with his colleague Schenk in a way that, over the decades, has come to feel almost familial. This constellation only works so convincingly on screen because it is not merely acted, but carried by two actors who have actually been connected for decades.</p>
          <p class="vb-intro">Bär himself has repeatedly emphasized that the real friendship with his fellow actor matters more to him than any single episode &ndash; a statement that fits the SP9 pattern precisely: constancy, familiarity, and the cultivation of a well-worn, reliable environment weigh more heavily than short-term recognition or a single major success.</p>
        </blockquote>

        <h2 class="vb-section">5. The Man Behind Ballauf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Off camera, Bär has served for many years as an ambassador for UNICEF Germany, advocating publicly for children's rights &ndash; a commitment he cultivates not through grand gestures, but through steady presence over years. He is regularly described in portraits and interviews as humorous, sociable and distinctly pleasure-oriented &ndash; someone who deliberately celebrates the small, sensory joys of everyday life rather than taking them for granted.</p>
          <p class="vb-intro">Also striking is how consistently Bär has maintained a private, largely low-key public role despite decades of fame &ndash; hardly any scandals, hardly any home-story features, hardly any need to stage himself beyond the actual work. That is the quiet consequence of Self-Preservation Nine: one's own comfort and calm matter more than additional visibility.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: The Elephant Who Stays</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Nearly three decades in the same role, in the same city, alongside the same colleague &ndash; a rare constant in the fast-moving television business, and one that draws precisely on the trait that defines the elephant: constancy is not a limitation but a source of strength. The Eight-wing ensures that this constancy never becomes passivity, but remains carried by a clear, direct stance.</p>
          <p class="vb-intro">His fellow actor and longtime companion is <a href="javascript:void(0)" data-route="beruehmte-klaus-j-behrendt">Klaus J. Behrendt</a> (SP6w5), who plays the calmer, more cautious Detective Schenk in the Cologne "Tatort." Both are Self-Preservation types who each avoid the spotlight in their own way &ndash; Bär through cultivating his own comfort, Behrendt through watchful reserve. More on this connection in the <a href="javascript:void(0)" data-route="beruehmte-klaus-j-behrendt">portrait of Klaus J. Behrendt</a>.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-klaus-j-behrendt", label:"Portrait: Klaus J. Behrendt (SP6w5) – his Tatort partner Schenk"},
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/se9", label:"SP9 – The Elephant: Subtype Profile"},
        {route:"beruehmte-johannes-brahms", label:"Portrait: Johannes Brahms (SP9w8)"},
        {route:"beruehmte-hans-dietrich-genscher", label:"Portrait: Hans-Dietrich Genscher (SP9w8)"},
      ])}
    </div>
  `);
}

export function eminemPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-eminem-portrait.jpg" alt="Eminem – portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Eminem</p>
        <p class="krim-portrait-typ">SX1w2 &middot; Sexual Type 1 with Two-Wing</p>
        <p class="krim-portrait-subtitle">Rapper & songwriter, b. 1972 – Marshall Bruce Mathers III, "Slim Shady" – Animal equivalent: Black Mamba</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Black Mamba</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Black Mamba is the animal of the sexual One—lightning-fast, precise, uncompromising, with no detour between feeling and expression. Marshall Bruce Mathers III, born October 17, 1972 in St. Joseph, Missouri, grew up amid constantly shifting living situations between Missouri and the Detroit suburb of Warren—with a single mother, an absent father, and a childhood repeatedly marked by moves and bullying. He dropped out of high school at seventeen.</p>
          <p class="vb-intro">Before the world knew him, he fought his way up through Detroit's battle-rap circles, above all the legendary Hip-Hop Shop—an environment where any weakness is exploited instantly and only the one who strikes faster, harder, and truer than the opponent survives. It is exactly there, in the direct verbal duel, that the mamba shows itself at its purest: it does not bite out of malice, but because it cannot do otherwise once untruth or weakness become visible.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual One: Zeal as a Driving Force</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The sexual One (SX1) directs its demand for perfection not at outer order, but at intensity: at the complete, unpolished revealing of what is true—in one cause, one relationship, one mission, with full force rather than spread thin. Naranjo called this subtype <em>Zeal</em>—an intensified, uncompromising form of indignation and perfectionism that concentrates with missionary force on a single target.</p>
          <p class="vb-intro">Few rappers have lived this pattern out as consistently in their craft as Eminem: a merciless, often furious, highly precise rhyme technique that tolerates no half sentences and tests every syllable for impact. In 1997, he caught Dr. Dre's (SO2w3) attention at the Rap Olympics in Los Angeles, who signed him shortly after—not for a pleasing surface, but for an intensity that could not be faked.</p>
          <p class="vb-intro">His uncompromising nature also shows in the unsparing honesty with which he processes his own failures in his lyrics—drug addiction, his failed marriage to Kim Scott, a difficult childhood, conflict with his own mother. Nothing is softened, nothing smoothed over. And the same intensity drove his feuds: public conflicts with boy bands and peers in the late 1990s, the battle-rap sharpness he never fully set aside, even long after becoming the biggest solo artist in his genre.</p>
        </blockquote>

        <h2 class="vb-section">3. The Two Wing: The Father Behind the Mask</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Two wing (w2) gives the sexual One a second, surprisingly caring note: the need to be there for someone, to look after them, to take on responsibility. In Eminem, this shows most clearly in his role as a single father to his daughter Hailie Jade, born in 1995—a theme that recurs throughout his songs, from tender dedications to open admissions of his own shortcomings as a father.</p>
          <p class="vb-intro">His public processing of his own drug addiction also carries this Two note: after a severe medication overdose in 2007—he came close to death at the time—he has pursued sobriety since April 2008, completed a twelve-step program, and has since repeatedly spoken publicly about his addiction, including acting as a sponsor for others in recovery. This is no longer pure self-exposure, but a return to responsibility for his family—the Two wing translating the mamba's hardness into care.</p>
        </blockquote>

        <h2 class="vb-section">4. The Breakthrough: Slim Shady and the Marshall Mathers LP</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 1999, Eminem released <em>The Slim Shady LP</em>, his breakthrough album on Dr. Dre's newly founded label Aftermath Entertainment—a work that made him known through an aggressive, often shocking alter ego, behind which lay a merciless self-analysis. In 2000 followed <em>The Marshall Mathers LP</em>, which sold over nineteen million copies, won the Grammy for Best Rap Album, and is still considered one of the most influential albums in the genre's history.</p>
          <p class="vb-intro">In 2003, he won the Academy Award for Best Original Song for "Lose Yourself" from the film <em>8 Mile</em>—the first hip-hop artist ever to do so. More Grammys followed, fifteen in total over his career, and with the albums <em>Relapse</em> (2009) and <em>Recovery</em> (2010) he processed his own fall and comeback sober for the first time—the One examining itself most relentlessly.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Sexual One</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the One is called <strong>wrath</strong>—and for Eminem it long showed on both sides: outward in battle-rap feuds and public conflicts, inward in an addiction that nearly cost him his life in 2007. The sexual One tolerates no half measures, not even toward itself—what makes this intensity a strength can also turn unchecked against one's own health.</p>
          <p class="vb-intro">The Two wing kept him from remaining alone in this hardness: the responsibility for Hailie, the publicly shared vulnerability around his sobriety, the role of mentor for other addicts—all of it shows a mamba that bites, but afterward also holds.</p>
        </blockquote>

        <h2 class="vb-section">6. The Gift: Honesty Without Filter</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What Eminem gave pop culture is a radical rejection of the polished pop-star facade: that rage, shame, addiction, and fatherly love can stand in the same song without one disproving the other. That is the gift of the SX1w2—the refusal to pretend, combined with the need to be there for the people who matter most.</p>
          <p class="vb-intro">The Black Mamba with the Two wing does not bite to hurt—it bites because it cannot bear a lie, not even its own, but it also pauses afterward and seeks the closeness that this honesty makes possible in the first place.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/sx1", label:"SX1 – The Black Mamba: Subtype Profile"},
        {route:"beruehmte-robbie-williams", label:"Portrait: Robbie Williams (SX1w2)"},
        {route:"beruehmte-dr-dre", label:"Portrait: Dr. Dre (SO2w3) – his discoverer and mentor"},
        {route:"beruehmte-martin-luther", label:"Portrait: Martin Luther (SX1w2)"},
      ])}
    </div>
  `);
}

export function friedrichMerzPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-friedrich-merz-portrait.jpg" alt="Friedrich Merz" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Friedrich Merz</p>
        <p class="krim-portrait-typ">SO1w9 &middot; Social Type 1 with Nine-wing</p>
        <p class="krim-portrait-subtitle">Federal Chancellor &amp; Politician, born 1955 &ndash; Animal correspondence: Goose</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Goose</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Goose</strong> is the animal of the social One &ndash; and it is a creature that does not decorate but functions. No elegance for elegance&#39;s sake. No shying away from conflicts when the territory must be defended. The goose flies in formation, upholds order, and warns the group when something is wrong. Those who underestimate it are in for a surprise.</p>
          <p class="vb-intro">The German politician Friedrich Merz is a figure in German politics that polarizes &ndash; and not by accident. He says what he thinks. He names what he considers wrong. He is not afraid of uncomfortable positions. That is not a stylistic choice &ndash; that is structure. The goose does not back down when it is convinced it is doing the right thing.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social One: Order as Vocation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social One (SO1)</strong> is the subtype that directs its perfectionism outward &ndash; toward society, institutions, collective values. Not one&#39;s own life stands at the center, but the question: How should the world be structured for it to function justly and in order? The SO1 carries an inner code of rules that it applies to everything &ndash; to laws, to fiscal policy, to the behavior of other politicians.</p>
          <p class="vb-intro">Naranjo called this subtype <em>Inadaptability</em> &ndash; unwillingness toward what deviates. The SO1 has difficulty compromising on what it considers structurally wrong. That makes it the most consistent reformer among the One subtypes &ndash; and the most uncomfortable conversation partner.</p>
          <p class="vb-intro">Friedrich Merz embodies this energy in raw form. As a lawyer, as an economic politician, as CDU chairman and now as Federal Chancellor: for him it is always about principle. About fiscal discipline as a moral question. About the border as a legal duty. About the state as a framework of order that must be maintained. That is not ideology. That is the social One&#39;s view of the world.</p>
        </blockquote>

        <h2 class="vb-section">3. The Nine-wing: Calm Within, Clarity Without</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Nine-wing (w9)</strong> changes the social One in a subtle but decisive way. An SO1 with a weaker Nine-wing can seem heated, accusatory, moralizing &ndash; the anger lies close to the surface. The Nine-wing cools this energy. It brings a certain equanimity, an ability for calm that makes the One&#39;s message more stable and less vulnerable to attack.</p>
          <p class="vb-intro">The Nine-wing also adds a quality frequently observed in Merz: the ability to wait for a long time. The Nine is patient &ndash; almost too patient sometimes. Merz waited years for his political moment, worked in the background after the Merkel era, refused to bend. That is not the energy of a One with a weaker Nine wing. That is the patient persistence of the SO1w9.</p>
          <p class="vb-intro">At the same time the Nine-wing can bring the shadows of the Nine: stubbornness, shielding against differing perspectives, a tendency to suppress inner resistance &ndash; until it suddenly discharges. Those who know Friedrich Merz recognize this too.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Social One</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO1 is its integrity. Friedrich Merz is a politician who comes across as genuinely convinced of what he says. Whether one agrees with him or not &ndash; the stance feels real. In an era of increasingly strategic communication that is a rare quality.</p>
          <p class="vb-intro">The shadow of the SO1 is <strong>anger</strong> &ndash; and the conviction of knowing what is right. The social One tends to confuse moral superiority with factual superiority. It sees clearly how things should be &ndash; and sometimes loses sight of the fact that other perspectives have their validity too. The fate pattern of the One is not malice. It is blindness through certainty.</p>
          <p class="vb-intro">In Merz this shows in moments when pointed statements have caused more damage than intended &ndash; not because they were false, but because they placed principle above context. The goose warns loudly. Sometimes too loudly for the moment.</p>
        </blockquote>

        <h2 class="vb-section">5. The Healing Path: From Judge to Builder</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the One leads from judging to building. From the question <em>What is wrong?</em> to the question <em>What is possible?</em> The growing One keeps its standards &ndash; but learns that order does not arise through control, but through trust. That the good lies not only in correction, but also in allowing.</p>
          <p class="vb-intro">Friedrich Merz has as Federal Chancellor a stage that the SO1w9 rarely receives: power to shape things. The question is whether the energy of the social One shifts from diagnosing to creating. Whether the goose that has warned for decades can now also build. That would be the path &ndash; from strict guardian to quiet architect of an order that carries.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so1", label:"SO1 – The Goose: Subtype Profile"},
        {route:"beruehmte-angelina-jolie", label:"Portrait: Angelina Jolie (SO1w2)"},
        {route:"beruehmte-marcel-reich-ranicki", label:"Portrait: Marcel Reich-Ranicki (SO1w9)"},
      ])}
    </div>
  `);
}

export function gretaGarboPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-greta-garbo-portrait.jpg" alt="Greta Garbo" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Greta Garbo</p>
        <p class="krim-portrait-typ">SX5w4 &middot; Sexual Type 5 with Four-wing</p>
        <p class="krim-portrait-subtitle">Actress, 1905&ndash;1990 &ndash; Hollywood icon of the silent and early sound film era &ndash; Animal correspondence: Hedgehog</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Hedgehog</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>hedgehog</strong> is the animal of the sexual Five &ndash; spiny and unapproachable on the outside, permeated by a warmth that reveals itself only to the very few who come close enough. Hardly any Hollywood figure embodies this image as completely as Greta Garbo. On screen she radiated an intensity that silenced entire movie theaters &ndash; in real life, at age 36, at the height of her fame, she withdrew from public life entirely and remained withdrawn for almost fifty years, until her death in 1990.</p>
          <p class="vb-intro">Greta Lovisa Gustafsson, born 1905 in Stockholm, grew up in modest circumstances, was discovered by Swedish director Mauritz Stiller, and went to Hollywood with him. Within a few years she became the greatest female film star of her era &ndash; and one of the most consistent recluses in film history. Not a contradiction, but the two sides of the same Five: complete immersion in the one, intense encounter in front of the camera, and an equally radical withdrawal before and after it.</p>
        </blockquote>

        <h2 class="vb-section">2. "I Want to Be Let Alone" &ndash; Not Alone, But Left in Peace</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">No sentence is more closely tied to Greta Garbo than the line often misquoted as "I want to be alone." She herself corrected it &ndash; and the correction is the real key to her type: <em>"I never said, 'I want to be alone.' I only said, 'I want to be let alone.' There is all the difference."</em></p>
          <p class="vb-intro">This is not a nuance but the entire core strategy of the Five in a single sentence: it is not about isolation as an end in itself, but about protecting limited inner resources from a world that demands endless amounts of them. The Five does not withdraw because she rejects people &ndash; she withdraws in order to still have something of herself left to give to the very few people who truly matter to her. Garbo's correction reads almost like an Enneagram lesson in itself: the difference between withdrawal from exhaustion and withdrawal from rejection.</p>
        </blockquote>

        <h2 class="vb-section">3. The Sexual Five: Intensity Instead of Distance</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sexual Five (SX5)</strong> differs fundamentally from the cool, security-focused self-preservation Five. She carries an almost volcanic longing for absolute connection &ndash; paired with an equally strong fear of vulnerability. Naranjo describes this subtype as "confidence" or "transparency": the SX5 opens up, but only where she feels completely safe &ndash; and then with an intensity that exceeds every other Five subtype.</p>
          <p class="vb-intro">This quality was exactly Garbo's trademark as an actress: the famous close-up, in which her gaze created an almost hypnotic, deeply private intimacy &ndash; as if she were speaking to a single person in the entire theater. Contemporaries and film historians described precisely this paradox: outwardly unapproachable and enigmatic, in the moment of encounter a devouring, uncompromising presence. It is fitting that her greatest roles &ndash; Mata Hari, Anna Karenina, Camille &ndash; portrayed women who refused the world but sacrificed everything for the one great, absolute love.</p>
        </blockquote>

        <h2 class="vb-section">4. The Four-Wing: Melancholy as a Mode of Expression</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Four-wing (w4)</strong> gave Garbo's Five core the melancholic, aesthetic depth for which she is still celebrated today. Unlike a 5w6, who tends to appear analytical and structured, Garbo transformed existential pain into art &ndash; not through dramatic display, but through a quiet, almost sorrowful intensity that reached the audience directly through the camera. When sound film caused many silent stars to fail, Garbo's smoky, deep voice and her weighty silences fascinated audiences even more.</p>
          <p class="vb-intro">This combination explains why she was often mistakenly read as a Type 4 in public perception: drama, beauty, world-weariness. But the foundation of her behavior points to the Five: not the Four's longing to finally be understood, but the Five's protective strategy of rationing her own energy so carefully that it is preserved &ndash; intensified and refined by the aesthetic depth of the Four-wing.</p>
        </blockquote>

        <h2 class="vb-section">5. The Withdrawal: Protecting Intensity, Not Fleeing It</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 1941, after the commercial failure of the film <em>Two-Faced Woman</em>, Garbo withdrew from filmmaking &ndash; and never returned, even though roles kept being offered to her over the following decades. She lived reclusively in New York from then on, taking long, solitary walks through the city disguised in sunglasses and a hat, largely avoiding parties, small talk, and the Hollywood public &ndash; classic Five behavior: observing the world without being observed herself.</p>
          <p class="vb-intro">But an SX5 does not withdraw because she rejects closeness. Over decades, Garbo maintained highly intense, almost secret connections with a small number of chosen people &ndash; among them the poet Mercedes de Acosta and her early mentor and companion Mauritz Stiller. Not a contradiction to her withdrawal, but its actual purpose: for her, the commercial, public world desecrated what was private and sacred. The withdrawal protected not the absence of feeling, but its purity.</p>
        </blockquote>

        <h2 class="vb-section">6. Light and Shadow of the Sexual Five</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX5w4 is her ability to create depth and truthfulness in the one encounter &ndash; whether with a person or, as with Garbo, with a film camera and a audience of millions &ndash; that admits no distance. This is exactly what made Garbo a legend: her presence felt absolutely real, even though she revealed almost nothing of herself.</p>
          <p class="vb-intro">The shadow shows in the consistency with which the Five pulls the plug the moment she feels exploited or exposed: Garbo's withdrawal in 1941 was final, uncompromising, without interviews, without explanations, without a single word too many. No hesitation, no half-measure &ndash; the typical radicalism of the Five, who would rather disappear completely than let her own energy keep draining away uncontrolled.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/sx5", label:"SX5 – The Hedgehog: Subtype profile"},
        {route:"beruehmte-frederic-chopin", label:"Portrait: Frédéric Chopin (SX5w4)"},
        {route:"beruehmte-tilda-swinton", label:"Portrait: Tilda Swinton (SX5w4)"},
        {route:"beruehmte-andy-warhol", label:"Portrait: Andy Warhol (SX5w4)"},
      ])}
    </div>
  `);
}

export function hermannHessePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hermann-hesse-portrait.jpg" alt="Hermann Hesse" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hermann Hesse</p>
        <p class="krim-portrait-typ">SP5w6 &middot; Self-Preservation Type 5 with Six-wing</p>
        <p class="krim-portrait-subtitle">Writer, Nobel laureate, 1877&ndash;1962 &ndash; Animal correspondence: Owl</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Owl in the Ticino Garden</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>owl</strong> is the animal of Type 5 &ndash; a creature that withdraws in order to see clearly, that keeps its habitat narrow and knows every corner of it by heart. Few writers lived this logic of retreat as consistently as Hermann Hesse: in 1919, in the middle of the post-war crisis, he left Germany and separated from his first wife, Maria Bernoulli, and their three sons to move alone to Montagnola in Ticino, into a small house called Casa Camuzzi. He lived there for the following forty years &ndash; withdrawn, with a garden, watercolors, and a strictly guarded daily routine that hardly anyone from outside was allowed to disrupt.</p>
          <p class="vb-intro">Hermann Hesse was born in 1877 in Calw, the son of a missionary in a strictly pietist household that early on gave him the feeling of being different from what was expected of him. At fifteen he broke out of the Maulbronn seminary, suffered a severe crisis, and was temporarily admitted to a psychiatric institution. This early experience &ndash; that the world of institutions and expectations was not his place &ndash; shaped a lifelong movement inward, away from communities and toward a self-built, carefully controlled inner space.</p>
        </blockquote>

        <h2 class="vb-section">2. Self-Preservation Five: The Castle in Ticino</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the <strong>self-preservation Five (SP5)</strong> <em>Castle</em>: one's own territory becomes a fortress that limits the world's access as much as possible. Hesse's life in Montagnola followed exactly this pattern. He built himself a strictly regulated daily rhythm of writing, gardening, and painting, received visitors only by prior arrangement, and, when his strength ran low, withdrew completely for weeks at a time. Magazines, manuscripts, and letters piled up in his study &ndash; a territory in which everything had its place and which he ceded to no one.</p>
          <p class="vb-intro">At the same time, Hesse maintained one of the most extensive correspondences in German literary history &ndash; more than 35,000 letters survive. This is the SP5's typical solution to the problem of closeness: contact happens, but filtered, at a distance, on one's own time and at one's own pace. The letter allows connection without having to open the castle. After his nervous breakdown in 1916, he also underwent psychoanalysis with a student of C. G. Jung, Josef Bernhard Lang &ndash; another very Five-like strategy: examining one's own inner disorder not through relationships, but within a clearly defined, therapeutic frame.</p>
        </blockquote>

        <h2 class="vb-section">3. The Six-Wing: Watchful Concern for the World</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Six-wing (w6)</strong> gives the self-preservation Five a watchful, often anxious alertness to threats &ndash; and a wary distrust of any form of mass movement. When the First World War broke out in 1914, Hesse spoke out sharply in the essay "O Friends, Not These Tones!" against the war euphoria rampant among German intellectuals &ndash; a position that earned him the label of traitor to the fatherland back home and made him a permanent outsider. He withdrew even further afterward, though he did practical work caring for German prisoners of war in Switzerland, while avoiding any political co-optation.</p>
          <p class="vb-intro">The same watchful caution showed again in the 1930s: from the safe distance of Switzerland, Hesse observed the rise of National Socialism with growing unease, supported persecuted and emigrated colleagues such as Thomas Mann and Peter Weiss with letters, reviews, and contacts &ndash; but remained himself in his protected retreat. The Six-wing worries about the world without exposing itself to it: vigilance as a protective stance, not a call to action. As the reinforcement type of the Five, the self-preservation Five pursues its search for knowledge and understanding not in moderation but intensified &ndash; in Hesse this showed in a lifelong, almost obsessive engagement with Eastern philosophy, psychoanalysis, and his own inner development, which he worked through again and again in literary form.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: The Individual Between Two Worlds</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Hesse's central literary theme is exactly the SP5's core dilemma: the conflict between retreat into one's own inner world and the longing to still be part of something larger. In "Siddhartha" (1922), an individual seeks his own path to insight apart from all doctrines and communities. In "Steppenwolf" (1927), a man is torn between a bourgeois longing to belong and the certainty that he was not made for society &ndash; an image in which generations of outsiders recognized themselves.</p>
          <p class="vb-intro">"The Glass Bead Game" (1943), his last major work, transposes this conflict into a distant future: a province of scholars, entirely sealed off from the world, where pure knowledge becomes an end in itself &ndash; until the protagonist realizes that even this perfect castle must withstand reality. In 1946, Hesse received the Nobel Prize in Literature for this work, which, true to his logic of retreat, he did not accept in person in Stockholm.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of SP5w6 shows in the clarity and honesty of Hesse's self-observation: scarcely any writer has described the inner conflict of the modern person so precisely and without embellishment. His books became cult works for entire generations &ndash; from the German youth movement of the 1920s to the American counterculture of the 1960s &ndash; precisely because they gave a language to the feeling of not belonging, without romanticizing it.</p>
          <p class="vb-intro">The shadow lies in the price of this retreat: Hesse's first marriage to Maria Bernoulli broke apart in part because of his inability to bear lasting closeness; his relationship with his three sons remained distant throughout his life. Migraines, eye ailments, and recurring depressive crises accompanied him his entire life &ndash; the castle protected him from the world, but it could not dissolve his own inner unrest, only provide a frame within which he could work through it in writing.</p>
        </blockquote>

        <h2 class="vb-section">6. The Owl Who Stayed in the Garden to the End</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Even in old age, Hesse barely changed his life: he stayed in Montagnola, tended his garden, painted watercolors of the Ticino landscape, and continued writing letters to readers from all over the world who had recognized something of themselves in his books. On August 9, 1962, he died there in his sleep, at the age of 85 &ndash; in the place he had built for himself as a safe retreat, and which, unlike Descartes at the end of his life, he never left again.</p>
          <p class="vb-intro">What remained is a body of work that has accompanied millions of people who saw themselves as outsiders &ndash; and that shows that the owl's radical retreat can produce not only isolation, but also a language for what community alone cannot express: the individual's path to themselves.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/se5", label:"SP5 – The Owl: Subtype Profile"},
        {route:"beruehmte-rene-descartes", label:"Portrait: René Descartes (SP5w6)"},
        {route:"beruehmte-spinoza", label:"Portrait: Baruch de Spinoza (SP5w6)"},
        {route:"beruhmte-philosophen", label:"Chart: Famous Philosophers in the Enneagram"},
        {route:"krankheitsportraets-hermann-hesse", label:"Illness Portrait: Hermann Hesse (SP5w6) – migraine and depression"},
      ])}
    </div>
  `);
}

export function jacquelineMarsPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jacqueline-mars-portrait.jpg" alt="Jacqueline Mars – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jacqueline Mars</p>
        <p class="krim-portrait-typ">SE8w7 &middot; Self-Preservation Type 8 with seven wing</p>
        <p class="krim-portrait-subtitle">Entrepreneur & billionaire, b. 1939 in Newark, New Jersey</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Orangutan</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The orangutan is the animal of the self-preservation Type 8, and no image fits Jacqueline Mars more accurately. The orangutan is the most solitary of the great apes: it needs no pack, no stage, no validation. It lives at its own rhythm, on its own territory, surrounded by what it has accumulated over decades. Anyone who does not disturb it will never lay eyes on it. And that is exactly by design.</p>
          <p class="vb-intro">The American businesswoman Jacqueline Mars, born in Newark in 1939, is the granddaughter of Frank C. Mars, founder of the confectionery company of the same name, and daughter of Forrest Mars Sr., who expanded the business into a global giant. Together with her brothers John and Forrest Jr., she owns roughly a one-third stake in Mars, Incorporated, one of the largest private companies in the world. Her net worth is estimated at over 30 billion dollars. She has given virtually no public interviews for decades.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Eight: Satisfaction</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The self-preservation Eight (SE8) expresses the passion of the Eight—lust—through ownership, securing resources, and sensory abundance. Naranjo called this subtype Satisfacción: satisfaction as a life principle. The SE8 wants to have what it needs—and builds the structures that ensure it stays that way. Not tomorrow. Permanently.</p>
          <p class="vb-intro">Jacqueline Mars lived this principle with a consistency barely noticeable from the outside—because she fulfilled it so completely that drama was no longer necessary. The business runs. The territory is secured. The SE8 does not need cameras to maintain control; it needs structures that work. Mars, Incorporated has been family-owned for generations and was never publicly traded—that is not a whim, that is an SE8 decision.</p>
        </blockquote>

        <h2 class="vb-section">3. The Seven Wing: The Joy of Life</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Seven wing gives the self-preservation Eight a quality that an SE8 with a weaker Seven wing does not always show: lightness, curiosity, and a willingness to enjoy life to the fullest. The SE8w7 does not just hoard; it savors. Travel, enjoyment, variety, an appetite for the sensory in all its breadth: this is the Seven wing filling the Eight's territory with color.</p>
          <p class="vb-intro">Jacqueline Mars is an avid equestrian and lives on an estate in The Plains, Virginia—the heart of American horse breeding country. The horse world is a world unto itself: tradition-conscious, exclusive, far from the spotlight. She served for years on the Smithsonian Institution Board of Regents—again, expertise over self-dramatization. The Seven wing does not seek the stage; it seeks quality.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: The Mars Empire</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Mars, Incorporated is the world's largest confectionery company and one of the most prominent pet food manufacturers globally: M&M's, Snickers, Twix, Milky Way, Skittles, Pedigree, Whiskas. Revenue: over 45 billion dollars annually. Since its founding in 1911, the company has remained entirely family-owned—no shares, no analysts, no quarterly reports for the public. Privacy as a business principle.</p>
          <p class="vb-intro">Jacqueline Mars sat on the company's board of directors and was involved in key strategic decisions, even as her brother Forrest Jr. long handled operational leadership. Her influence was real and discreet. This is not modesty; this is the SE8w7 in its mature form: exercising power without having to legitimize it.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow: Power Without a Face</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SE8w7 is its sovereign independence. Jacqueline Mars needs neither applause nor justification. She possesses one of the largest private fortunes in the world and lives a life she shapes herself: horses, nature, connoisseurship, quiet influence. The SE8w7 at its best is not loud; it is complete.</p>
          <p class="vb-intro">The shadow: the invisibility that protects the SE8 also makes it uncontrollable, for better or worse. What moves a company of this scale remains largely hidden: supply chains, working conditions, political influence. Those who never account publicly never have to. That is the flip side of the SE8 strategy: the territory is secured, but no one knows exactly how.</p>
        </blockquote>

        <h2 class="vb-section">6. The Orangutan Who Never Needs to Be Seen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Jacqueline Mars is one of the richest women in the world and one of the most unknown. That is neither shyness nor happenstance. That is the SE8w7 in its ultimate form: territory secured, resources secured, life enjoyed to the fullest—and all of it without a single press conference. The orangutan needs no spectators. It sits enthroned in its tree, high above the noise of the world, knowing exactly what it has.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-umberto-eco", label:"Portrait: Umberto Eco (SE8w7)"},
          {route:"beruehmte-golda-meir", label:"Portrait: Golda Meir (SE8w9)"},
          {route:"beruehmte-toni-morrison", label:"Portrait: Toni Morrison (SE8w9)"},
        ])}
      </div>
    </div>
  `);
}

export function jjLiuPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jj-liu-portrait.jpg" alt="J. J. Liu – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">J. J. Liu</p>
        <p class="krim-portrait-typ">SP2w1 &middot; Self-Preservation Type 2 with One-wing</p>
        <p class="krim-portrait-subtitle">Professional poker player, born 1965 in Taipei, Taiwan &ndash; Animal correspondence: Hippopotamus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Hippopotamus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Hippopotamus</strong> is the animal of the self-preservation Two &ndash; an animal that does not impress through speed or volume, but through the sheer endurance with which it stays in place even when conditions turn uncomfortable. It does not withdraw once things get difficult. It stays, because staying is its strength.</p>
          <p class="vb-intro">J. J. Liu demonstrated exactly this endurance in striking fashion at the 2007 WPT Bay 101 Shooting Star Championship: she played for hours through considerable physical pain, through to the end of what was then the longest televised final table in WPT history &ndash; finishing runner-up, at the time the best result any woman had ever achieved at a WPT Championship event. The Hippopotamus does not leave its water when things get hard. It stays.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Two: Securing One's Own Position</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation Two (SP2)</strong> directs its energy first toward securing its own concrete existence, before turning outward. Naranjo called this subtype <em>Me First</em>: not out of selfishness, but because the SP2 needs a viable foundation of its own before it can endure over the long term.</p>
          <p class="vb-intro">In 2004 Liu made a radical cut: after years as a successful part-time player, she gave up her secure career as a software engineer in Silicon Valley entirely to devote herself to poker &ndash; a step taken only after years of careful assessment of her own abilities, not out of spontaneous enthusiasm. This measured but decisive securing of one's own foundation before taking the big step is at the core of the SP2 movement.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-Wing: Strategy as Inner Order</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>One-wing (w1)</strong> gives the self-preservation Two an inner set of standards, a system it can orient itself by regardless of immediate outcome. It turns intuition into method and transforms care for one's own position into a disciplined, consistently pursued strategy.</p>
          <p class="vb-intro">Liu herself attributes her analytical success at the table to the deliberate application of strategic principles from Sun Tzu's <em>The Art of War</em> &ndash; a self-contained philosophical framework she applies to her game. Her path from engineer to poker professional shows the same mindset: she recognized early that her logical, mathematical mind gave her a structural edge at the table, and built on it systematically rather than relying on luck or instinct alone.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: From Taipei to Silicon Valley to the Final Table</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Liu moved from Taiwan to the United States to earn a master's degree in computer engineering at Bradley University in Illinois, and then worked as a software engineer. Only a visit to the Bay 101 Casino in San Jose led her to poker &ndash; a detour through an entirely different career before she found her true strength.</p>
          <p class="vb-intro">Alongside her legendary runner-up finish at the 2007 WPT Bay 101, she won the WPT Ladies Night IV heads-up against Kelli Griggs in 2006 and finished fourth at the WPT Five Diamond World Poker Classic in 2005. With career tournament earnings exceeding four million US dollars, she ranks among the most successful female poker players in history; in 2012 she was inducted into the Women in Poker Hall of Fame.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Self-Preservation Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP2w1 is the combination of toughness and inner order: the ability to hold to one's own strategy under pressure and even physical pain, rather than being overwhelmed by the situation. Liu's presence at the table &ndash; elegant, cultivated, unruffled &ndash; shows this mature form of SP2 energy: strength that needs no show.</p>
          <p class="vb-intro">The fate pattern of the Two is <strong>pride</strong> &ndash; the conviction of having earned one's own position through skill and persistence. The One-wing can turn this pride into strict self-control: the risk of measuring every decision against one's own inner rulebook, leaving little room for spontaneity or error. In a game that also demands variability and adaptability, this strictness can be both strength and limitation.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se2", label:"SP2 – The Hippopotamus: Subtype Profile"},
        {route:"beruehmte-franka-potente", label:"Portrait: Franka Potente (SP2w1)"},
      ])}
    </div>
  `);
}

export function juliusCaesarPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-julius-caesar-portrait.jpg" alt="Julius Caesar" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Julius Caesar</p>
        <p class="krim-portrait-typ">SO2w3 &middot; Social Type 2 with a Three-Wing &middot; Heart Type</p>
        <p class="krim-portrait-subtitle">100&ndash;44 BC &ndash; General, statesman, dictator for life &ndash; Animal correspondence: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Golden Retriever Who Embraced an Empire</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Golden Retriever</strong> is the animal of the social Two &ndash; devoted, generous, irresistibly driven to be needed and loved. Few historical figures show this pattern as clearly as Julius Caesar. His contemporaries consistently describe a man who won people over by storm: through charm, through generosity, through the ability to make every single person &ndash; legionary, senator, or Roman street crowd &ndash; feel personally important to him.</p>
          <p class="vb-intro">Born in 100 BC into an old but impoverished patrician family, the Roman general Julius Caesar deliberately and dramatically went into debt in his early years to fund public games, cover allies' debts, and hand out favors. Where a frugal strategist would have built reserves, the social Two invested in relationship. The capital he built was not money &ndash; it was affection, loyalty, indebtedness. And that capital eventually paid out in legions and consulships.</p>
        </blockquote>

        <h2 class="vb-section">2. SO2: Ambition as a Form of Love</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo called the social Two <strong>ambition</strong> &ndash; and in Caesar this ambition fuses seamlessly with his care for the people. He wanted not merely to serve Rome: he wanted to be the most indispensable one, the benefactor without whom nothing would work anymore. His famous <em>clementia</em>, his mercy toward defeated enemies, was far more than political calculation &ndash; it was the SO2 reflex in its clearest expression: whoever forgives, binds. Whoever rescues, is needed. Whoever is generous, is loved.</p>
          <p class="vb-intro">This logic runs through his entire public career: the spectacular gladiatorial games and public festivals he funded out of his own pocket, the distribution of land to destitute veterans and citizens, the debt relief for heavily indebted Romans during the civil-war turmoil. Every one of these gestures was politics and a declaration of love at once &ndash; an offer: <em>I provide for you. I see you. Belong to me.</em></p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: Staging in the Service of Connection</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> turns the warmhearted benefactor into a master of self-presentation. Caesar's <em>Commentarii de Bello Gallico</em>, his own campaign account of the Gallic War, is one of the earliest examples of deliberate political image management in world history &ndash; written in the third person to appear objective and heroic at once. The Three-wing gave him stage presence, a strategic instinct for effect, and the ability to turn every victory into narrative before anyone else could seize the interpretation.</p>
          <p class="vb-intro">At the same time, this wing carries the same danger as in every SO2w3: the confusion of public image with inner core. The more honors Caesar accepted &ndash; the purple cloak, the golden chair in the Senate, and finally the title <em>dictator perpetuo</em>, dictator for life &ndash; the more the role of the indispensable benefactor merged with that of a ruler who no longer tolerated equals beside him.</p>
        </blockquote>

        <h2 class="vb-section">4. The Ides of March: When the Golden Retriever Was Betrayed</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">March 15, 44 BC is a typological document of shattering clarity. Among the conspirators who killed Caesar in the Senate with twenty-three dagger blows was Marcus Junius Brutus &ndash; a man Caesar had personally pardoned and promoted with high office, even though Brutus had stood on the opposing side in the civil war. For the social Two, this is the deepest conceivable rupture: the person one saved to secure connection becomes the instrument of one's own destruction.</p>
          <p class="vb-intro">Yet the path there already shows the typical stress point of the Two: under pressure, Type 2 moves into its <strong>Eight stress point</strong> &ndash; and exactly this pattern runs through Caesar's final years. The benefactor who secured relationship through giving increasingly became a man who claimed control over the state without listening to dissent from the Senate anymore. The honors he accepted no longer looked to many like gratitude, but like entitlement. The Golden Retriever who once courted affection began to take it for granted &ndash; and that is exactly what made him vulnerable to, and in the eyes of his opponents dangerous to, his enemies.</p>
          <p class="vb-intro">Contemporary accounts report that Caesar deliberately reduced his bodyguard in the preceding weeks &ndash; a trust in his own indispensability typical of an SO2w3: <em>Surely no one would harm me, I have provided for everyone.</em> It was this trust that ultimately left him unprotected.</p>
        </blockquote>

        <h2 class="vb-section">5. Energetic Effect: A Sun over the Republic</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Caesar's effect on his contemporaries had a sun-like radiance: legionaries followed him for years through cold, hunger, and danger because he marched alongside them himself, knew their names, and returned their loyalty with palpable, personal attention. He would enter a room &ndash; camp or Senate alike &ndash; and become the center around which everything arranged itself. This was no cold technique of power. It was the real, warm energy of a person who lived in connection and drew strength from connection.</p>
          <p class="vb-intro">And yet: behind this sun lay the long shadow of the Two, the passion of <strong>pride</strong> &ndash; the belief that one must be needed in order to have worth, and the difficulty of ever having enough. Caesar had fame, power, the love of the people &ndash; and still the same inner logic kept driving him further: to one more campaign, one more title, one more gesture of generosity. Whether he could have been loved without all of it remained, for him, likely an unanswerable question.</p>
        </blockquote>

        <h2 class="vb-section">6. The Gift: An Empire That Includes Everyone</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What Julius Caesar left the world cannot be reduced to military campaigns. He reformed the Roman calendar into the Julian calendar, still in use today with minor adjustments. He extended Roman citizenship to provincial inhabitants who had never belonged before &ndash; a deeply SO2-typical gesture: create connection, include people, dissolve the line between "us" and "them." His public building projects, foremost the Forum of Caesar, were gifts to a people he understood as his large, extended family.</p>
          <p class="vb-intro">This is the SO2w3 at its farthest-reaching level: a person whose personal need for belonging transformed into structures that outlasted centuries. The Golden Retriever with the Three-wing can unite an empire &ndash; once he learns that true belonging need not be fought for or secured through ever-new proof, but simply is.</p>
        </blockquote>

        <p class="vb-intro">The recurring seizures attested by ancient sources, which Caesar concealed his entire life, are explored in full in the separate <a href="javascript:void(0)" data-route="krankheitsportraets-julius-caesar">illness portrait on Caesar</a>.</p>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"krankheitsportraets-julius-caesar", label:"Illness Portrait: Julius Caesar (SO2w3)"},
        {route:"subtype/so2", label:"SO2 – The Golden Retriever: subtype profile"},
        {route:"beruehmte-will-smith", label:"Portrait: Will Smith (SO2w3)"},
        {route:"beruehmte-jesus-christus", label:"Portrait: Jesus Christ (SO2w1)"},
        {route:"beruehmte-eva-peron", label:"Portrait: Eva Perón (SO2w3)"},
        {route:"beruehmte-truman-capote", label:"Portrait: Truman Capote (SO2w3)"},
      ])}
    </div>
  `);
}

export function kollegahPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-kollegah-portrait.jpg" alt="Kollegah – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Kollegah</p>
        <p class="krim-portrait-typ">SX6w5 &middot; Sexual Type 6 with Five-wing</p>
        <p class="krim-portrait-subtitle">Rapper, artist &amp; entrepreneur, born 1984 &ndash; converted to Islam in 2016 &ndash; Animal correspondence: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Wolf</strong> is the animal of the Sexual Type 6 &ndash; a predator that kills not out of malice but out of necessity. It lives in hierarchies, fights for its position, and bares its teeth not because it enjoys pain but because it knows: whoever does not assert themselves gets pushed aside. The Wolf has fear &ndash; and it transforms that fear into strength.</p>
          <p class="vb-intro">The German rapper Kollegah &ndash; born Felix Antoine Blume in 1984 in Singen &ndash; is this Wolf. One of the commercially most successful German rappers of all time, known for an artistic alter ego that shows no weakness to the outside world: the Boss, the pimp-baron, the superior figure who whispers away every adversary. But the alter ego is armour. Beneath it lies the question that all Sixes know: <em>Am I truly safe? Am I truly strong enough?</em></p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Six: Strength as Counter-Fear</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sexual Six (SX6)</strong> is, according to Naranjo, the <strong>counter-type</strong> of the Six &ndash; the subtype in which the passion of cowardice is least visible because it is turned into its opposite. The SX6 meets its fear not with retreat but with attack. <em>I am dangerous &ndash; therefore I am safe.</em> Naranjo called this subtype <em>Strength</em>: the SX6 seeks power, dominance and intensity because it knows what it means to be weak &ndash; and because it has sworn never to be there again.</p>
          <p class="vb-intro">Kollegah's entire artistic project is a staging of this counter-fear. The Boss narrative, the muscles, the status symbols, the language of dominance &ndash; all of it serves to generate an aura of invulnerability. Anyone who knows the SX6 recognises the pattern immediately: the more someone demonstrates their strength, the more they reveal about what they are trying to conceal. The Wolf that bares its fangs knows exactly why.</p>
          <p class="vb-intro">The SX6's pack is small and loyal. Kollegah worked closely with Farid Bang for years &ndash; enneagrammatically a completely different profile: Farid Bang is a Self-Preservation Type 7 with Eight-wing (SP7w8), not a counter-type but a Seven who combines his hunger for experience and intensity with the directness of the Eight. Two entirely different character structures that complemented each other in their output: the Wolf who attacks out of fear, and the Seven who provokes out of desire. The project <em>Jung, brutal, gutaussehend</em> (2013) is the document of this alliance: an album that elevated provocation to an artistic principle.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five-Wing: The Craftsman</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five-wing (w5)</strong> gives the Sexual Six a precision that distinguishes its style from mere provocation. The SX6w5 does not fight only with volume &ndash; it fights with technique. <em>I do not only want to seem dangerous. I want to be the best. I want to be able to prove it.</em></p>
          <p class="vb-intro">Whatever one thinks of his content, Kollegah is technically one of the most precise rappers in the German-language scene. Multi-syllabic rhymes, complex cadences unusual for the German language, a density of words per bar that few achieve. He studied rapping like an academic discipline &ndash; analysed, systematised, optimised. That is the Five-wing: knowledge as a tool, craft as a shield. <em>What I can do, no one can take from me.</em></p>
          <p class="vb-intro">The Five-wing also explains Kollegah's surprisingly deep engagement with religion. His conversion to Islam in 2016 did not come from nowhere. The SX6w5 seeks a stable foundation for its worldview &ndash; a system it can trust, one that supports it. The Five in the wing makes him a researcher: he reads, analyses, develops positions. This too is a form of the Six's fighting nature: I need something that holds firm.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX6w5 is its capacity to transform intensity into achievement. Kollegah built one of the most successful careers in German hip-hop from a starting position without a network and without a platform. Five number-one albums in a row, multiple Echo award winner, one of the most listened-to acts in German music history. That is not luck. That is the SX6w5: relentlessly disciplined, relentlessly focused, relentlessly intent on control.</p>
          <p class="vb-intro">The core passion of the Six is <strong>cowardice</strong> &ndash; and the SX6's counter-reaction to it is provocation. But when provocation becomes an end in itself, it loses its limits. The Echo scandal of 2018 &ndash; antisemitic lyrics on the joint album with Farid Bang, which led to the award-return uproar &ndash; is the darkest chapter in Kollegah's public life. What began as an aesthetic of boundary-crossing became a real injury. The Wolf that no longer knows what to do with its teeth.</p>
          <p class="vb-intro"><em>Note: This portrait analyses the personality structure. Antisemitic lyrics cannot be relativised &ndash; they are not being defended here but contextualised: as a transgression of a pattern that, at its origin, arises from fear and counter-fear.</em></p>
        </blockquote>

        <h2 class="vb-section">5. The Path of Healing: Strength without Armour</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Six leads from the question <em>How do I protect myself?</em> to the recognition <em>I do not need this protection.</em> For the SX6w5 this means laying down the armour &ndash; not because one is weak, but because one is strong enough to appear without it. The Boss character is a response to an inner need. When that need is heard, the character is no longer required.</p>
          <p class="vb-intro">Kollegah's later work shows traces of this path. The conversion, the conscious engagement with limits, the public distancing from certain aesthetics &ndash; these are not breaks but movements. The Wolf that begins to lead its pack no longer through baring teeth but through calm and direction. The strength remains. The fear behind it grows smaller.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx6", label:"SX6 – The Wolf: Subtype Profile"},
        {route:"beruehmte-alice-schwarzer", label:"Portrait: Alice Schwarzer (SX6w5)"},
        {route:"beruehmte-skylar-grey", label:"Portrait: Skylar Grey (SX6w5) – also music"},
      ])}
    </div>
  `);
}

export function leonardoDiCaprioPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-leonardo-dicaprio-portrait.jpg" alt="Leonardo DiCaprio" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Leonardo DiCaprio</p>
        <p class="krim-portrait-typ">SX1w2 &middot; Sexual Type 1 with Two-wing</p>
        <p class="krim-portrait-subtitle">Actor &amp; Climate Activist, born 1974 &ndash; Animal correspondence: Black Mamba</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Black Mamba</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Black Mamba</strong> is the animal of the sexual One &ndash; and it is a creature under pressure. Not outwardly. Inwardly. The Black Mamba is precise, fast, and relentless. When it strikes, it does not do so from brutality, but from an impulse that can no longer be stopped. It is the animal of a being that holds itself to the highest standards &ndash; and pursues those standards with an intensity others can barely comprehend.</p>
          <p class="vb-intro">The American actor Leonardo DiCaprio has, for every role of his life, entered zones almost no other actor willingly goes. Eaten raw meat. Slept in the snow. Learned languages, transformed bodies, invested decades in characters. That is not ambition. That is the bite of the mamba: complete, precise, without half-measures.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual One: Perfection as Intimate Fire</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sexual One (SX1)</strong> is, in the Enneagram tradition, the most intense of all One subtypes. While the self-preservation One directs its perfection inward and the social One wants to reform the world, the SX1 channels its anger and passion into direct, personal contact &ndash; into the relationship, the project, the cause to which it has dedicated itself. Naranjo called this subtype <em>Jealousy</em>: a burning intensity in experiencing what it loves or rejects.</p>
          <p class="vb-intro">In Leonardo DiCaprio this shows in a lifelong, almost obsessive relationship with his art. He chooses roles that demand something from him far beyond technical skill. Howard Hughes in <em>The Aviator</em> &ndash; he experienced obsessive-compulsive disorder in his own body. Hugh Glass in <em>The Revenant</em> &ndash; he used real cold, real exhaustion, real pain as material. The SX1 cannot be half-hearted. It must be fully present &ndash; or not at all.</p>
          <p class="vb-intro">The same fire shows in his climate activism. Since the 1990s DiCaprio has been committed to protecting the Earth &ndash; not as a side project, but as a second axis of his life. The Leonardo DiCaprio Foundation has invested over 100 million dollars in environmental projects. That is the SX1 in its light: passionate, precise, uncompromising.</p>
        </blockquote>

        <h2 class="vb-section">3. The Two-wing: Warmth Behind the Fire</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Two-wing (w2)</strong> changes the sexual One in a decisive way. An SX1 with a more muted Two-wing can seem consuming &ndash; heated, demanding, hard to reach in its intensity. The Two-wing brings a natural warmth into play: genuine interest in others, joy in giving, the ability to invite others into one&#39;s world instead of keeping them at a distance.</p>
          <p class="vb-intro">In DiCaprio the Two-wing shows in the way he works with directors and colleagues. His long collaboration with Martin Scorsese &ndash; five films, a genuine creative friendship &ndash; is not a strategic alliance. It is affection. The SX1w2 builds deep, loyal bonds with the people it trusts. And it defends these bonds with the same intensity with which it pursues everything else.</p>
          <p class="vb-intro">The Two-wing also comes through in his relationships within the environmental movement: DiCaprio does not only speak &ndash; he connects. He brings together scientists, activists, and politicians. The SX1w2 does not just want to be right. It wants the right people to find each other.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Sexual One</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX1 is its depth. Leonardo DiCaprio does not have a broad body of work &ndash; he has an intense one. Every role is a deep dive. No average, no mediocrity. The fate pattern of the One is <strong>anger</strong> &ndash; and in the SX1 this anger is alive, close to the surface, sometimes barely containable. The intensity that DiCaprio transforms into roles like Jordan Belfort or Calvin Candie does not come from nowhere. It comes from an inner fire that also burns in everyday life.</p>
          <p class="vb-intro">The shadow lies in perfection as a prison. The SX1 can hold such high standards that it is never enough for itself &ndash; even when the world applauds. DiCaprio waited in vain for the Oscar five times. At the sixth nomination &ndash; for <em>The Revenant</em>, 2016 &ndash; he finally won. In his speech he spoke about climate change, not about himself. That is the SX1: even in the moment of triumph, the principle stands before the person.</p>
        </blockquote>

        <h2 class="vb-section">5. The Healing Path: From Fire to Freedom</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the One leads from anger to serenity. From demand to acceptance. The growing One learns: I do not have to be perfect to be complete. The good does not arise only through control &ndash; sometimes it also arises through letting go.</p>
          <p class="vb-intro">For the SX1 this means a particular step: embracing one&#39;s own intensity without being ruled by it. Not extinguishing the fire of the mamba &ndash; but learning to rest in its stillness too. Leonardo DiCaprio is still on this path. The commitment remains. The passion remains. But perhaps a moment comes when the mamba no longer needs to strike in order to know who it is.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx1", label:"SX1 – The Black Mamba: Subtype Profile"},
        {route:"beruehmte-christoph-waltz", label:"Portrait: Christoph Waltz (SP1w2)"},
        {route:"beruehmte-faye-dunaway", label:"Portrait: Faye Dunaway (SX1w2) – also an actress, same subtype"},
      ])}
    </div>
  `);
}

export function marcelProustPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-marcel-proust-portrait.jpg" alt="Marcel Proust – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Marcel Proust</p>
        <p class="krim-portrait-typ">SO4w5 &middot; Social Type 4 with Five-wing</p>
        <p class="krim-portrait-subtitle">French writer, 1871&ndash;1922 &ndash; Animal correspondence: Armadillo</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Armadillo in the Cork-Lined Room</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>armadillo</strong> is the animal of the social Four &ndash; it seeks society, salons, the social field of observation, and carries its sensitive inner life openly, even when it withdraws physically in order to write about what it has seen.</p>
          <p class="vb-intro">Marcel Proust was born in 1871 in Auteuil near Paris, suffered from severe asthma and extraordinary physical sensitivity from early childhood, a condition that shaped his entire life. In his youth and as a young man, he was an eager habitué of Parisian upper-class salons &ndash; observing aristocracy and bourgeoisie with almost scientific precision, before withdrawing, increasingly ill, into his legendary cork-lined bedroom, where he spent nearly all of the last 13 years of his life writing his life's work.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Four: Society as the Stage for One's Own Difference</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social Four (SO4)</strong> needs the group in order to rub against it and recognize its own particularity &ndash; Proust spent years as a recognized, but always slightly outside, observer of Parisian high society, fascinated by its rituals and vanities without ever quite belonging to it. As a gay man in an era of strict social taboos, he lived in constant tension between public facade and hidden self &ndash; a theme that runs through his work implicitly and explicitly.</p>
          <p class="vb-intro">His life's work "In Search of Lost Time" (1913&ndash;1927, seven volumes) is at its core the detailed dissection of exactly this society, from the perspective of an observer who is both part of it and never quite feels he belongs &ndash; the classic position of the social Four.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five-Wing: Memory as a Science</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five-wing (w5)</strong> gives the Four an analytical, almost scientific distance from its own experience &ndash; feeling is not just lived through but dissected down to its finest branches and put into language. Proust's most famous literary invention, the "madeleine episode," in which the taste of a piece of pastry dipped in tea calls up an entire lost childhood, is exactly that: a microscopically precise analysis of how involuntary memory ("mémoire involontaire") works.</p>
          <p class="vb-intro">His entire, more than 4,000-page work is marked by this systematics: a single sentence can span several pages, every observation is broken down into its psychological, social, and philosophical components. This combination of the deepest feeling and seemingly endless analytical precision is the signature of the SO4w5 in its purest literary form.</p>
        </blockquote>

        <h2 class="vb-section">4. A Life's Work Against Time</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Proust worked on his main work until his death, correcting proofs even on his deathbed as his health rapidly deteriorated. The first volume, "Swann's Way" (part of "In Search of Lost Time"), was initially rejected by several renowned publishers before Proust published it at his own expense in 1913 &ndash; a gamble that ultimately paid off with the second volume, which won the Prix Goncourt in 1919.</p>
          <p class="vb-intro">His entire late work was created under the awareness of his own mortality: Proust knew his lung disease would kill him young, and worked with an intensity that allowed for hardly any pauses &ndash; a race against time to fully capture the life he had found in memory, before it was too late.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO4w5 is the ability to turn <strong>fleeting, subjective memory into a universal, meticulously thought-out art form</strong> &ndash; Proust's work is still considered one of the greatest novels in world literature today, because it shows how the seemingly smallest thing (the taste of a pastry) can contain the greatest thing (an entire lost world).</p>
          <p class="vb-intro">The shadow showed itself in his increasing social isolation and hypochondria &ndash; Proust withdrew ever further from direct life in order to describe it all the more precisely from a distance, until his cork-lined room literally became his entire world. The flip side of the social Four with a Five-wing: the analytical distance that makes writing possible can increasingly displace the lived life itself.</p>
        </blockquote>

        <h2 class="vb-section">6. The Armadillo That Rediscovered Lost Time</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Marcel Proust died in 1922 in Paris, shortly after completing the final pages of his life's work &ndash; the last volumes were published posthumously. What began as an observation of a transient society became one of the most profound examinations of time, memory, and identity in all of literary history.</p>
          <p class="vb-intro">The armadillo that withdrew from society in order to understand it all the more precisely, and that turned its own fleeting memory into an imperishable literary edifice &ndash; that is the lasting image of the social Four with a Five-wing: observation that becomes eternity.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so4", label:"SO4 – The Armadillo: Subtype Profile"},
        {route:"beruehmte-gustav-mahler", label:"Portrait: Gustav Mahler (SO4w5)"},
        {route:"beruehmte-john-lennon", label:"Portrait: John Lennon (SO4w5)"},
        {route:"beruehmte-edvard-munch", label:"Portrait: Edvard Munch (SO4w5) – the same withdrawal logic despite persisting belonging"},
        {route:"krankheitsportraets-gustav-mahler", label:"Illness Portrait: Gustav Mahler (SO4w5) – parallel to Proust's race against time"},
        {route:"krankheitsportraets-marcel-proust", label:"Illness Portrait: Marcel Proust (SO4w5) – lifelong asthma"},
        {route:"beruehmte-michael-stipe", label:"Portrait: Michael Stipe (SO4w5)"},
        {route:"beruehmte-alice-miller", label:"Portrait: Alice Miller (SO4w5)"},
        {route:"beruehmte-ole-nymoen", label:"Portrait: Ole Nymoen (SO4w5)"},
      ])}
    </div>
  `);
}

export function matthiasSchweighoeferPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-matthias-schweighoefer-portrait.jpg" alt="Matthias Schweigh&ouml;fer – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Matthias Schweigh&ouml;fer</p>
        <p class="krim-portrait-typ">SX2w1 &middot; Sexual Type 2 with One-wing</p>
        <p class="krim-portrait-subtitle">Actor &amp; Director, born 1981 &ndash; Animal correspondence: Camel</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Camel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Camel</strong> is the animal of the sexual Two &ndash; and it is a creature that carries. Not because it must. But because carrying is its way of making connection. The camel crosses deserts, puts its energy in service of the journey, and asks little in return. But it is not a beast of burden without a life of its own. The camel has dignity. It has warmth. And anyone who has ever encountered a camel knows: it looks at you &ndash; directly, curiously, without shyness.</p>
          <p class="vb-intro">Matthias Schweigh&ouml;fer carries. He carries projects, ensembles, audiences. As an actor he brings an immediate warmth to every role he plays &ndash; whether comic, dramatic, or vulnerable. As a director he takes his crew with him as though every set were a community he holds together. The camel does not simply pass through the desert. It makes sure everyone arrives.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Two: Attraction as a Life Theme</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sexual Two (SX2)</strong> is, in the Enneagram tradition, the subtype that channels the energy of the Two directly into the space between two people. Not into the large group like the social Two, not into securing one&#39;s own existence like the self-preservation Two &ndash; but into direct, personal, sometimes electrifying connection. Naranjo called this subtype <em>Aggressivity</em> &ndash; not in the aggressive sense, but as an active, forward-pushing approach to the other. The SX2 does not wait. It comes toward you.</p>
          <p class="vb-intro">In Matthias Schweigh&ouml;fer this shows in a rare quality: he turns encounter into an experience. Whether in interviews, on stage, or in film &ndash; he creates closeness immediately. Not through strategy, but through genuine interest. The SX2 is fascinated by its counterpart. It wants to know who you are. It wants you to know who it is. From this mutual curiosity a warmth arises that is contagious.</p>
          <p class="vb-intro">His artistic work carries the same energy. From the romantic comedy format to the international Netflix production <em>Army of Thieves</em> &ndash; Schweigh&ouml;fer always tells stories of connection. Of two people who find each other. Of what arises between them. That is no side note. That is the SX2, which transforms its innermost question into art: <em>Can I truly be seen? Can I truly love?</em></p>
        </blockquote>

        <h2 class="vb-section">3. The One-wing: Stance Behind the Warmth</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>One-wing (w1)</strong> brings the sexual Two an important inner axis: the awareness of quality, of what is right, of responsibility. An SX2 with a weaker One-wing could lose itself in the intensity of contact &ndash; always in search of the next moment of connection, without a stable inner compass. The One-wing gives it substance. It says: <em>It is not enough to be loved. What matters too is how.</em></p>
          <p class="vb-intro">In Matthias Schweigh&ouml;fer the One-wing shows in his demand of himself. He is not only a performer, but a director, producer, entrepreneur &ndash; and takes these roles seriously. The quality of his work matters to him, not just the result. He has spoken publicly several times about exhaustion and the limits of his resilience &ndash; that too is One energy: the duty to do well what one does, even when it costs.</p>
          <p class="vb-intro">The One-wing turns the SX2 into someone who not only connects, but also takes responsibility. Schweigh&ouml;fer is a person in German cinema whom many trust &ndash; colleagues, crew, audiences. That trust doesn't come out of nowhere. It is the One-wing that ensures reliability follows the warmth.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Sexual Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX2 is its immediacy. Matthias Schweigh&ouml;fer reaches people directly &ndash; without detours, without distance. He has an ability to make films that do not stand above the audience, but speak with it. That is a rare gift, and it comes from the core of the sexual Two: the genuine longing for contact.</p>
          <p class="vb-intro">The fate pattern of the Two is <strong>pride</strong> &ndash; the deep conviction of needing to be loved, and the difficulty of naming one&#39;s own needs while giving. In the SX2 this expresses itself particularly intensely: the connection to the other can become so important that one&#39;s own center is lost in the process. Whoever is there for others must eventually ask who is there for them.</p>
          <p class="vb-intro">Schweigh&ouml;fer has spoken in interviews about phases in which he overstretched himself &ndash; given too much, received too little. That is the reverse side of the camel: it carries for so long, until it can carry no more. And then it needs water itself.</p>
        </blockquote>

        <h2 class="vb-section">5. The Healing Path: From Giving to Receiving</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Two leads from the question <em>Am I loved?</em> to the insight <em>I am loveable &ndash; even without giving.</em> For the SX2 this means a particularly personal step: allowing the other to carry too. Not only to connect, but also to receive. The camel may drink too.</p>
          <p class="vb-intro">Matthias Schweigh&ouml;fer is on this path &ndash; and the openness with which he speaks about what costs him and what gives to him is itself a sign of that. The SX2 that has learned to ask for help too loses nothing of its warmth. It gains something: the knowledge that connection may flow in both directions.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx2", label:"SX2 – The Camel: Subtype Profile"},
        {route:"beruehmte-nina-chuba", label:"Portrait: Nina Chuba (SO2w3)"},
      ])}
    </div>
  `);
}

export function mosesPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-moses-portrait.jpg" alt="Moses" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Moses</p>
        <p class="krim-portrait-typ">SX6w5 &middot; Sexual Type 6 with Five-wing</p>
        <p class="krim-portrait-subtitle">Prophet, lawgiver, c. 13th century BCE (biblical tradition) &ndash; Leader of the Exodus &ndash; Animal correspondence: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>wolf</strong> is the animal of the sexual Six &ndash; an animal that does not avoid danger, but turns to face it the moment it senses a threat to its pack. No accidental animal for a figure who first does everything he can to escape a calling, and who then, once convinced, fearlessly confronts the most powerful ruler of his time. According to the biblical account in Exodus, Moses was born to enslaved Hebrews and raised in Pharaoh's household, fled into the wilderness of Midian after killing a man, and lived there for decades as a shepherd &ndash; withdrawn, unremarkable, far from any power.</p>
          <p class="vb-intro">Only at the burning bush, in the solitude of the desert, is he confronted with a task that exceeds everything he believes himself capable of: freeing his people from Egyptian slavery. Not a hero who volunteers, but a man who resists the calling with all his strength &ndash; and it is exactly there that the key to his type lies.</p>
        </blockquote>

        <h2 class="vb-section">2. The Burning Bush: Doubt as the First Response</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The burning-bush scene is one of the most striking testimonies to Six-type dynamics in the entire biblical tradition. According to the narrative, Moses objects not once but four times: "Who am I that I should go to Pharaoh?" &ndash; "They will not believe me." &ndash; "I am slow of speech and slow of tongue." &ndash; and finally, bluntly: "Please send someone else." Only after repeated assurances of divine support, including miraculous signs to authenticate his mission, does he accept the task.</p>
          <p class="vb-intro">This is not cowardice, but the classic structure of the Six: she tests, doubts, seeks reassurance before acting &ndash; not out of weakness, but because she weighs the full consequences of a decision from the very start. Unlike an Eight or a Three, who would meet a task impulsively, the Six needs certainty that the ground beneath her will hold before she takes the first step.</p>
        </blockquote>

        <h2 class="vb-section">3. The Sexual Six: From Doubt to Fearlessness</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sexual Six (SX6)</strong> is the counter-type among the Sixes &ndash; the subtype that does not manage the fear characteristic of Type 6 through caution and reassurance-seeking, but through the opposite: through strength, confrontation, and the demonstrative proof that fear holds no power over her. Naranjo called this subtype "strength/beauty" &ndash; the Six who appears more fearless than any other type, precisely because she fights her own fear most actively.</p>
          <p class="vb-intro">This exact pattern shows up in Moses after his calling: the man who had wavered four times at the burning bush now stands repeatedly, without visible hesitation, before Pharaoh &ndash; the most powerful ruler of the known world &ndash; demanding the freedom of an entire enslaved people. Not a single appearance, but a repeated return despite repeated refusal, despite escalating danger. The counterphobic Six does not fight in spite of the fear, but precisely because she refuses to let the fear determine her.</p>
        </blockquote>

        <h2 class="vb-section">4. The Five-Wing: Retreat Before the Storm</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five-wing (w5)</strong> shows itself in the decades before Moses's calling: forty years as a shepherd in the wilderness of Midian, far from any public life, power, or social influence &ndash; a time of withdrawal, observation, and processing. Unlike a 6w7, who would tend to cover insecurity through activity and distraction, the Five-wing seeks distance and clarity before turning back to the world.</p>
          <p class="vb-intro">This combination explains why Moses carries a peculiar dual nature as a leader: on one hand the distant, almost introverted thinker who prefers to meet God in dialogue on the mountain rather than address the crowd; on the other, the resolute confronter once the matter is clear. The Five-wing supplies the depth and withdrawal; the counterphobic Six supplies the assertiveness once the retreat is over.</p>
        </blockquote>

        <h2 class="vb-section">5. The Wolf's Anger: Impulsiveness as Shadow Side</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The counterphobic Six shows her shadow side in sudden, often harsh outbursts when she feels provoked or betrayed. Even before his calling, Moses kills an Egyptian overseer he sees beating a Hebrew slave &ndash; an impulsive, unplanned act of violence that forces him to flee. Decades later, returning from Mount Sinai to find his people dancing around the Golden Calf, he shatters the freshly received tablets of the law in a burst of anger.</p>
          <p class="vb-intro">Both scenes show the same structure: not a calculated exercise of power, as an Eight might display, but a sudden, almost overwhelming reaction to perceived betrayal or injustice &ndash; typical of the Six, whose deepest need for reliability and loyalty has been violated. The wolf that bites when the pack breaks the shared order it has only just painstakingly established.</p>
        </blockquote>

        <h2 class="vb-section">6. Forty Years in the Desert: Security Through Rule and Law</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The forty years of the Exodus through the desert are, from an Enneagram perspective, one long Six-type movement: a people constantly swinging between trust and doubt, longing to return to Egypt the moment things become uncertain, and only becoming a stable community through clear, binding rules &ndash; the Ten Commandments, the entire Mosaic law. It follows a clear logic that a Six-type leader gives this people not a vision, but a body of law as its foundation: law as an external anchor for an internally insecure group.</p>
          <p class="vb-intro">Throughout this entire time, Moses remains the mediating authority between the people and God, repeatedly seeking reassurance, renewing the covenant &ndash; the classic Six function of the trust-anchor who is never entirely free of doubt himself, but precisely because of that understands how badly others need this security.</p>
        </blockquote>

        <h2 class="vb-section">7. Light and Shadow of the Sexual Six</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX6w5 is her ability to move from deep doubt toward growing fearlessness &ndash; not by suppressing the fear, but by consciously overcoming it in service of a cause she believes in. Moses's path from a reluctant shepherd to the unafraid confronter of Pharaoh is one of the most striking examples of this development in the entire tradition.</p>
          <p class="vb-intro">The shadow shows in the consequences of his own need for proof: according to the biblical narrative, Moses himself is not allowed to enter the Promised Land &ndash; punished for acting on his own authority instead of trusting the instruction given to him, in a moment of doubt at the waters of Meribah. A detail that captures the Six's central tension precisely: the struggle between the need to trust and the urge to seize control oneself remains unresolved right to the end.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/sx6", label:"SX6 – The Wolf: Subtype profile"},
        {route:"beruehmte-konfuzius", label:"Portrait: Confucius (Kong Fuzi) (SO1w2)"},
        {route:"beruehmte-mohammed", label:"Portrait: Muhammad ibn Abdullah (SO8w9)"},
      ])}
    </div>
  `);
}

export function ottoVonBismarckPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-otto-von-bismarck-portrait.jpg" alt="Otto von Bismarck – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Otto von Bismarck</p>
        <p class="krim-portrait-typ">SX6w5 &middot; Sexual Type 6 with Five-wing</p>
        <p class="krim-portrait-subtitle">First Chancellor of the German Empire, born 1815 in Schönhausen, died 1898 in Friedrichsruh &ndash; Animal correspondence: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Wolf</strong> is the animal of the Sexual Type 6 &ndash; a pack animal that asserts its position through strength and answers any threat to its territory with bared teeth. The Wolf does not trust easily. It does not charge blindly, but watches, senses, waits for the right moment &ndash; and when it strikes, it does so decisively and without half measures.</p>
          <p class="vb-intro">Otto von Bismarck, born 1815 on the estate of Schönhausen in the Altmark region, is this Wolf in its purest political form. Contemporaries described him as "demonic," as "diabolical" &ndash; terms that capture less his true nature than what he deliberately projected outward: a menace that left no doubt it was dangerous to cross him. His mother died when he was thirteen; his father, a plain country squire, considered his ambitionless, restless son a disappointment throughout his life. Out of this double deficit &ndash; early lost closeness, recognition never granted &ndash; grew not withdrawal but the exact opposite: a compulsive, lifelong pursuit of dominance and validation that no one could escape.</p>
          <p class="vb-intro">His own verdict on himself confirms how much strength it took to maintain this facade: "I am all nerves, so that self-control has always been the greatest task of my life." That is not the sentence of a man without fear. It is the confession of a Wolf who concealed his own nervousness so thoroughly behind displays of menace that entire generations of contemporaries and historians mistook it for cold-bloodedness.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Six: Intimidation Instead of Retreat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sexual Six (SX6)</strong> is, according to Naranjo, the <strong>counter-type</strong> of the Six &ndash; the subtype in which the passion of fear and doubt is least visible, because it is turned into its opposite. The SX6 meets its fear not with caution or avoidance but with preemptive attack. <em>If I am more threatening than the threat itself, then nothing can happen to me.</em> Naranjo called this subtype <em>Strength</em>: the SX6 seeks power because it knows the experience of powerlessness and has sworn never to be at its mercy again.</p>
          <p class="vb-intro">Bismarck's political toolkit rested on exactly this logic. His best-known instrument of power over Kaiser Wilhelm I was the repeated threat of resignation: whenever the Kaiser wanted to resist his course, Bismarck threatened to step down &ndash; a lever he used so often and so effectively that the far older monarch yielded to him on most contested questions, afraid of actually losing his indispensable chancellor. This is not diplomatic concession; it is intimidation as a style of governing &ndash; the threat becomes a weapon because open retreat is never an option for the SX6.</p>
          <p class="vb-intro">Added to this was a pronounced tendency toward projection: Bismarck was deeply convinced he was surrounded by rivals and would-be conspirators &ndash; at court, in the press, in the parliamentary factions. Diaries and correspondence document a compulsive circling around possible betrayal, past slights, imagined coups. This fear was not processed introspectively but projected outward and translated into preemptive strikes: whoever was seen as a danger was politically sidelined before he could strike first. His own pack &ndash; a tight circle of loyal confidants such as Albrecht von Roon and Robert von Keudell &ndash; was accordingly kept close and defended against any outside competition.</p>
        </blockquote>

        <h2 class="vb-section">3. Why Not the Eight? A Necessary Distinction</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In Enneagram discussions, Bismarck is repeatedly filed under <strong>Self-Preservation Eight with Nine-wing (SE8w9)</strong> &ndash; after all, the ruthlessness with which he wielded resignation threats and sidelined rivals fits, at first glance, the image of an Eight defending its territory through raw shows of power. On closer inspection, however, this classification does not hold up.</p>
          <p class="vb-intro">Decisive is Bismarck's own confession: <em>"I am all nerves, so that self-control has always been the greatest task of my life."</em> An Eight, who typically represses vulnerability rather than admitting it openly, would hardly name their own nervousness as a lifelong core struggle. A Six, by contrast, knows exactly this introspective wrestling with one's own fear &ndash; in the SX6 it is merely turned outward into strength, not concealed.</p>
          <p class="vb-intro">The recurring pattern of retreats to Varzin and Friedrichsruh &ndash; weeks spent in bed, plagued by nervous ailments, insomnia, hypochondria &ndash; likewise does not fit an Eight, who tends to actively seek out threats rather than process them lying down. And even granting the Eight framework: the constantly suspicious, threatening, never-settled Bismarck resembles an impulsive Seven-wing far more than the withdrawn, conflict-averse Nine-wing &ndash; making the SE8w9 thesis internally inconsistent to begin with.</p>
          <p class="vb-intro">Finally, the source matters: <strong>Claudio Naranjo</strong> himself, the originator of the subtype teachings, classified Bismarck in his seminars as a Sexual Six &ndash; not an Eight. The popular Eight attribution stems more from Bismarck's outward bearing as a power politician than from a closer analysis of his inner motivation &ndash; helped along by his physical bulk in old age, which makes him look almost bear-like in the many paintings and early photographs, and by the quality of his gaze in these portraits: a look that certainly radiates strength, but one aimed at demonstrating it outward rather than the quieter, more inward-directed sense of power typical of a Self-Preservation Eight with Nine-wing.</p>
        </blockquote>

        <h2 class="vb-section">4. The Five-Wing: Hypochondria and Strategic Depth</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five-wing (w5)</strong> gives the Sexual Six an analytical depth and a tendency to withdraw into its own inner world, adding a second, quieter side to its combative nature. The SX6w5 does not act impulsively &ndash; it observes, weighs options, thinks through constellations far in advance, and, when the tension grows too great, withdraws into brooding isolation rather than discharging it outward.</p>
          <p class="vb-intro">In Bismarck this wing showed itself in two ways: on the one hand, in an extraordinary strategic gift that anticipated European power constellations years in advance and patiently worked toward the right moment &ndash; never the result of blind impulsiveness, but of years of forethought. On the other hand, in a pronounced hypochondria and a tendency to withdraw to his estates for days at a time under stress &ndash; first to Varzin in Farther Pomerania, later to Friedrichsruh in the Sachsenwald. There he spent entire stretches lying in bed, complaining of nervous ailments, insomnia, digestive troubles &ndash; physical symptoms closely interwoven with his chronic mistrust and his tendency to brood. The Wolf that retreats to its den when the hunt has cost too much strength, but from there keeps watch over the whole territory all the same.</p>
          <p class="vb-intro">The health consequences of this pattern &ndash; the exhaustion crisis of the early 1880s and the refused treatment of a gangrene in his final years &ndash; are explored in depth in the dedicated <a href="javascript:void(0)" data-route="krankheitsportraets-otto-von-bismarck">Illness Portrait of Bismarck</a>.</p>
        </blockquote>

        <h2 class="vb-section">5. The Life's Work: Blood and Iron, Founding an Empire, the Welfare State</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Appointed Prussian Minister President in 1862, Bismarck laid out the program of his politics in his famous speech before the Prussian parliament's budget committee: not speeches and majority votes would decide the great questions of the age, but "iron and blood." Three calculated wars followed &ndash; against Denmark in 1864, against Austria in 1866, against France in 1870/71 &ndash; through which he forged the German states together under Prussian leadership. In 1871, the German Empire was proclaimed in the Hall of Mirrors at Versailles, with Bismarck as its first chancellor.</p>
          <p class="vb-intro">After the empire's founding, his course shifted: Germany was now "satiated," further territorial expansion in Europe unnecessary &ndash; instead he built a complex alliance system meant to secure peace on the continent. Domestically he led the Kulturkampf against the Catholic Church and later the Anti-Socialist Laws against the rising Social Democratic movement &ndash; yet at the same time, partly out of exactly this tactical calculation, introduced the world's first social insurance systems: health insurance in 1883, accident insurance in 1884, old-age and disability insurance in 1889. An early form of the welfare state that was at once genuine provision and an instrument to deny the working class fertile ground for revolutionary ideas &ndash; typical of a Wolf who deployed even care strategically as a means of securing his own pack.</p>
          <p class="vb-intro">In 1890, two years after the young, impatient Kaiser Wilhelm II took the throne, Bismarck was dismissed. A cartoon of the time captured the break in four words: "Dropping the Pilot." The man who had governed for three decades through threat and calculation could not fend off the loss of power to a younger ruler by the same means &ndash; pulling the strings only worked as long as the other side feared his departure, and Wilhelm II did not.</p>
        </blockquote>

        <h2 class="vb-section">6. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX6w5 is the ability to turn fear into extraordinary strategic foresight and to provide stability in crises. Bismarck's alliance policy after 1871 held Europe in a fragile but functioning balance for almost two decades &ndash; an achievement many of his successors failed to sustain. His social legislation, too, however tactically intended, reached far beyond its original purpose and became a model for modern welfare states.</p>
          <p class="vb-intro">The core passion of the Six is <strong>fear</strong> &ndash; and the SX6's counter-reaction to it is a toughness that recognises no limit once the perceived threat becomes existential. The Kulturkampf struck the Catholic Church and its followers with laws that imprisoned priests and left dioceses without bishops; the Anti-Socialist Laws banned Social Democratic organisations, assemblies and publications for more than a decade. Both are expressions of the same pattern: whoever was identified as a threat to the pack &ndash; the young empire, his own position of power &ndash; was fought with the full force of the state, regardless of the cost to those affected. This policy deserves independent criticism, irrespective of the psychological framing that explains it but does not justify it.</p>
        </blockquote>

        <h2 class="vb-section">7. The Path of Healing: Safety Without Threats</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Six leads from the question <em>How do I protect myself from the threat?</em> to the recognition <em>I do not need to control the world in order to be safe.</em> For the SX6w5 this means no longer understanding strength as a backdrop of threat, but as an inner firmness that needs no one to be intimidated in order to feel safe.</p>
          <p class="vb-intro">This path remained closed to Bismarck to the end. Even during the eight years of his retirement in Friedrichsruh, until his death in 1898, he held on to mistrust and control &ndash; he publicly grumbled against his imperial successor, commented on current politics unbidden and unreconciled, and to the last cultivated the image of the indispensable statesman who had been wronged. The portrait therefore does not end in reconciliation but in the observation that holds for every counter-type Six: as long as safety is sought only through threat and control over others, the Wolf remains trapped in exactly the fear it spent a lifetime trying to fight. The way out does not lead through more power, but through the trust Bismarck spent his life learning to avoid.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx6", label:"SX6 – The Wolf: Subtype Profile"},
        {route:"beruehmte-wladimir-putin", label:"Portrait: Vladimir Putin (SX6w5)"},
        {route:"beruehmte-friedrich-schiller", label:"Portrait: Friedrich Schiller (SX6w5)"},
        {route:"krankheitsportraets-otto-von-bismarck", label:"Illness Portrait: Otto von Bismarck (SX6w5)"},
      ])}
    </div>
  `);
}

export function rasputinPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-rasputin-portrait.jpg" alt="Grigori Rasputin" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Grigori Rasputin</p>
        <p class="krim-portrait-typ">SX1w9 &middot; Sexual Type 1 with Nine-wing</p>
        <p class="krim-portrait-subtitle">Wandering monk &amp; healer, 1869&ndash;1916 &ndash; Animal correspondence: Black Mamba</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Black Mamba</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Black Mamba</strong> is the animal of the sexual One &ndash; an animal that works not through volume, but through the sheer inevitability of its presence. Anyone who comes too close feels an intensity that is almost impossible to escape. This animal is no random choice: the mamba does not strike out of rage, but out of an inner compulsion toward purity &ndash; a force that knows no half measures.</p>
          <p class="vb-intro">Contemporaries of the Russian mystic Rasputin described his gaze as the first thing anyone noticed about him &ndash; piercing, impossible to ignore, unsettling to some, healing to others. Ladies of St. Petersburg's salons reported feeling completely seen under that gaze, stripped down to the core. This is the Black Mamba at work: not a charisma that flatters, but one that penetrates.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual One: Purity as a Burning Desire</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sexual One (SX1)</strong> is the most intense of all One subtypes. While the self-preservation One directs its perfectionism inward and the social One wants to reform the world, the SX1 channels its passion into direct, personal contact &ndash; into the one relationship, the one cause, the one concern to which it devotes itself completely. Naranjo called this subtype <em>Jealousy</em> &ndash; a possessive intensity in experiencing whatever it holds to be true and pure.</p>
          <p class="vb-intro">Rasputin's entire path begins with this logic. As a young man in Siberia he went through a religious crisis that turned him into a wandering pilgrim &ndash; monasteries, Mount Athos, Jerusalem. He returned convinced that true purity is not reached through renunciation but through fully living out and overcoming sin. This is SX1 logic in its most idiosyncratic form: not a gentle ideal, but a fire that must burn through contradiction itself in order to become pure.</p>
          <p class="vb-intro">The same absoluteness carried him to court. When Tsarevich Alexei suffered from hemophilia and doctors stood helpless, Tsarina Alexandra turned to Rasputin &ndash; and again and again he succeeded, where medicine had failed, in easing the bleeding. Whether through suggestion, calm, or an actual gift, the SX1 throws its whole self into the one cause it has committed to. For Rasputin, that cause was saving this one child &ndash; and through it, a bond to the Tsar's family that would come to define both his life and his death.</p>
        </blockquote>

        <h2 class="vb-section">3. The Nine-Wing: Calm at the Center of the Storm</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Nine-wing (w9)</strong> changes the sexual One in a decisive way. An SX1 with a weaker Nine-wing can seem demanding, hot-tempered, almost impossible to contain. The Nine-wing brings a countervailing calm into play &ndash; a spaciousness, an apparent serenity that softens the One's fire on the outside without ever extinguishing it. Outwardly: peace. Inwardly: the same relentless drive.</p>
          <p class="vb-intro">This combination explains why Rasputin appeared so differently to so many people. At court he seemed like a rock of calm &ndash; simple, earthy, unmoved by courtly ceremony, radiating a presence that soothed others even as they panicked. At the same time he lived a double life of excess and penance that knew no rest: drinking bouts, extramarital affairs, religious ecstasy in constant alternation. The Nine-wing conceals the One's intensity &ndash; makes it accessible, warm, almost sleepy &ndash; while the actual fire burns on unchanged.</p>
          <p class="vb-intro">His teaching bore the same signature. Rasputin preached that one should not avoid sin but surrender to it calmly, without inner struggle, in order to find grace by passing through it. Not the typical severity of the One, but a Nine-like ease toward one's own wrongdoing &ndash; combined with the unshakeable SX1 conviction of being in the right.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Sexual One</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX1 is its capacity for complete devotion. Rasputin's attention to the ailing Tsarevich, his presence in the family's darkest moments, his ability to ease fear through mere presence &ndash; none of it was calculation. It was the Mamba placing itself entirely in service of a cause it had committed to.</p>
          <p class="vb-intro">The One's fateful pattern is <strong>anger</strong> &ndash; and in the SX1 that anger lives close to the surface, disguised as moral certainty. Rasputin's conviction that he was a healer sent by God tipped increasingly into self-righteousness: he let himself be venerated at court, meddled in affairs of state and the appointment of bishops, and surrounded himself with followers who took his teaching of purification through sin literally. The press turned him into a legendary figure of depravity &ndash; not entirely without cause, but also distorted by the scandal that his mere presence at court provoked.</p>
          <p class="vb-intro">On December 30, 1916, he was murdered by a group of noble conspirators who believed his death could save the monarchy. The countless legends surrounding his death &ndash; poisoned, shot, drowned, supposedly impossible to kill &ndash; say less about Rasputin himself than about the force with which the SX1 presence gripped the people around him: no one could escape it, not even in his dying.</p>
        </blockquote>

        <h2 class="vb-section">5. The Path of Healing: From Compulsion to True Purity</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the One leads from anger to serenity, from the demand for perfection to acceptance of what is. The growing One discovers that purity is not a state to be forced or fought for. It is already present the moment the struggle against oneself stops.</p>
          <p class="vb-intro">Rasputin's path remained one of compulsion &ndash; the conviction that purity could only be reached by living through excess kept him trapped in a loop he never escaped. The Nine-wing could have given him the quiet presence in which perfection no longer needs to be proven. Instead, the Mamba stayed on the attack until the very end: a man who brought healing to others and never once found peace of his own.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth \u2013 protective patterns, passions, and the path to essence.", "Who You Really Are \u2013 Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared \u2013 how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx1", label:"SX1 \u2013 The Black Mamba: Subtype Profile"},
        {route:"beruehmte-marie-agnes-strack-zimmermann", label:"Portrait: Marie-Agnes Strack-Zimmermann (SX1w9)"},
        {route:"beruehmte-jamie-lee-curtis", label:"Portrait: Jamie Lee Curtis (SX1w2)"},
      ])}
    </div>
  `);
}

export function samuelHahnemannPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-samuel-hahnemann-portrait.jpg" alt="Dr. Samuel Hahnemann – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Samuel Hahnemann</p>
        <p class="krim-portrait-typ">SO1w9 &middot; Social Type 1 with Nine-wing</p>
        <p class="krim-portrait-subtitle">German physician, founder of homeopathy, 1755&ndash;1843 &ndash; Animal correspondence: Goose</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Goose Who Demanded a Gentler Medicine</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>goose</strong> is the animal of the social One &ndash; watchful, incorruptible, with an unerring sense for when something is fundamentally wrong. It tolerates no half-measures once convinced that the order itself is sick. Few life stories illustrate this stance more vividly than Samuel Hahnemann&#39;s, who considered the medicine of his time so dangerous that he turned his back on it for years &ndash; only to found, in the end, a coherent medical system of his own that still accompanies millions of people worldwide today.</p>
          <p class="vb-intro">The German physician Christian Friedrich Samuel Hahnemann was born on April 10, 1755, in Meissen, the son of a porcelain painter. Even as a child he was considered exceptionally gifted and curious; his teacher is said to have allowed him at times to help shape the lessons himself. His talent showed early in a remarkable gift for languages: besides Latin and Greek, he came to command English, French, Italian, Arabic, Hebrew, Syriac, and Chaldean &ndash; a versatility reminiscent of polymaths of his era such as Goethe. This linguistic gift later became his economic lifeline: for years he supported his family as a sought-after translator of medical, chemical, and scientific literature from English and French. He studied medicine in Leipzig, Vienna, and Erlangen, earning his doctorate in 1779 &ndash; a path that should have led him straight into the medical profession. But what he witnessed there as standard practice never let him rest.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social One: Outrage at a Sick System</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social One (SO1)</strong> seeks perfection not in the private sphere but on the larger social scale &ndash; it recognizes wrongs not as isolated cases but as symptoms of a flawed system it feels called to correct. The medicine of the late 18th century worked with bloodletting, high doses of mercury and antimony, purgatives and emetics &ndash; procedures that often harmed patients more than they helped. Hahnemann, himself a practicing physician, was so shaken by this &bdquo;heroic medicine&ldquo; that for several years he nearly abandoned medical practice altogether, unable to justify continuing to harm his patients.</p>
          <p class="vb-intro">This translation work carried him and his growing family for years &ndash; a withdrawn, financially difficult life that the social One accepts when the alternative means acting against its own conviction. It was precisely this stance &ndash; uncompromising honesty toward his own conscience &ndash; from which one of the most consequential medical discoveries of the modern era would emerge.</p>
        </blockquote>

        <h2 class="vb-section">3. The Nine-wing: The Patience That Let a System Mature</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Nine-wing (w9)</strong> gives the One, where more strongly developed, a balancing calm and persistence &ndash; the ability not to force a conviction through in a burst, but to work it out over decades with painstaking thoroughness, testing, refining. This is exactly what characterizes Hahnemann&#39;s life work: from the first insight in 1790 to the sixth and final, posthumously published edition of his major work, the <em>Organon of the Healing Art</em>, more than fifty years of relentless refinement passed. Not a doctrine he proclaimed once and then defended, but a system he kept developing, correcting, and sharpening his whole life.</p>
          <p class="vb-intro">This patient systematics also shows in his working method: Hahnemann first tested every new remedy on himself and on healthy colleagues &ndash; the so-called &bdquo;drug provings&ldquo; &ndash; before ever giving it to a patient. A methodological rigor decades ahead of its time, one hardly conceivable without the calm, thorough Nine-wing.</p>
        </blockquote>

        <h2 class="vb-section">4. The Cinchona Bark Self-Experiment: The Birth of Homeopathy</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 1790, while translating a materia medica by the Scottish physician William Cullen, Hahnemann came across an explanation for the effect of cinchona bark against malaria that failed to convince him. He did what suited his character: he tested it himself. He repeatedly took cinchona bark extract &ndash; and developed symptoms strikingly similar to malaria itself: fever, chills, aching limbs. A substance that cured the disease it was used against could apparently, in a healthy person, produce those very symptoms.</p>
          <p class="vb-intro">From this single, precisely documented self-experiment, Hahnemann derived his founding principle: <em>Similia similibus curentur</em> &ndash; let like be cured by like. A remedy that triggers certain symptoms in a healthy person could, given in highly diluted form, promote healing in a sick person showing those same symptoms. This observation, born of meticulous self-observation, became the foundation of a medical system that has endured to the present day &ndash; proof of how much a single, honestly conducted trial can achieve when carried out by a One with an unconditional commitment to truth.</p>
        </blockquote>

        <h2 class="vb-section">5. The Organon: A System of Rare Clarity</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 1810 Hahnemann published the <em>Organon of the Healing Art</em>, his central work, in which he systematically laid out the principles of homeopathy: the law of similars, the individualization of every treatment to the exact symptom picture of each patient, and the method of potentization &ndash; the stepwise dilution of a substance combined with vigorous shaking (succussion), which he believed released and strengthened the remedy&#39;s healing power while reducing unwanted side effects. He also coined the term by which his system is still known worldwide today: <em>homeopathy</em>, from the Greek for &bdquo;similar suffering.&ldquo;</p>
          <p class="vb-intro">The work is marked by a systematics unusual for its time &ndash; numbered paragraphs, clear definitions, a self-contained body of rules. Exactly the signature of the social One: not a loose bundle of observations, but an ordering system that allows every successor to apply the same principles in a traceable way &ndash; a structure that let homeopathy spread far beyond Hahnemann&#39;s own practice and be taught in dedicated training programs worldwide even today.</p>
        </blockquote>

        <h2 class="vb-section">6. Resistance from the Apothecaries: The Price of Conviction</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Hahnemann&#39;s practice of preparing his own remedies and dispensing them directly to patients, rather than having them filled by pharmacies, put him in direct economic conflict with Leipzig&#39;s guild of apothecaries. In 1820, a court ruling barred him from dispensing his own remedies in Leipzig &ndash; a bitter setback for a man who had built his entire system on exact control over the preparation and administration of his medicines.</p>
          <p class="vb-intro">But the social One, reinforced by the Nine-wing, does not give up &ndash; it looks for a new way. Duke Ferdinand of Anhalt-Köthen, himself convinced by Hahnemann&#39;s method, invited him to settle in Köthen and granted him the right to dispense his own remedies there. For fourteen years, from 1821 to 1835, Hahnemann practiced and taught undisturbed in Köthen &ndash; a period in which homeopathy began to spread beyond Germany across Europe and to the United States, carried by physicians who had read his writings and followed his method.</p>
        </blockquote>

        <h2 class="vb-section">7. The Cholera Epidemics: Proving Itself in Crisis</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">When cholera swept through large parts of Europe in 1831, Hahnemann, by then over seventy and even before the epidemic had reached Germany in full force, published a treatise titled <em>&bdquo;Sichere Heilung und Verh\u00fctung der orientalischen Cholera&ldquo;</em> (&bdquo;Certain Cure and Prevention of Asiatic Cholera&ldquo;) &ndash; a detailed treatment guide that recommended the early use of Camphora above all, supplemented, depending on how symptoms progressed, by remedies such as Cuprum metallicum and Veratrum album.</p>
          <p class="vb-intro">The documented treatment figures from that era are striking: at the Homeopathic Hospital in Vienna, Dr. Wilhelm Fleischmann recorded a mortality rate of 33 percent among 732 cholera patients in 1836 (244 deaths) &ndash; compared with 66 to 70 percent in the city&#39;s other hospitals during the same period. During the 1854 epidemic in Naples, Dr. Rocco Rubini treated 200 cholera patients at the Reale Albergo dei Poveri hospital following Hahnemann&#39;s instructions &ndash; not a single patient died. That same year, during an outbreak among Swiss soldiers in Naples, 166 patients were treated at the local homeopathic institute; all 166 survived, while of the 17 soldiers from the same regiment admitted to the regular military hospital, 15 died &ndash; a mortality rate of 88 percent. And in London, the London Homeopathic Hospital recorded a mortality rate of just 16.4 percent during the 1854 cholera epidemic, compared with 51.8 percent in the city&#39;s conventionally run hospitals &ndash; figures from an official report to the London Board of Health that, tellingly, was left out of the committee&#39;s published final report. In the combined records of European and American homeopathic physicians across several waves of the epidemic between 1831 and 1854, the average mortality rate among homeopathically treated patients was 7 to 10 percent, while the general mortality rate under conventional treatment ranged from 40 to 60 percent.</p>
          <p class="vb-intro">These historical accounts contributed substantially to winning the young discipline of homeopathy public trust during one of the greatest health crises of the 19th century, and helped fuel its rapid spread across Europe and the United States. For the social One, this is the real vindication: not abstract systemic debate, but concrete proof under real conditions, when human lives are at stake. Hahnemann himself understood his entire work as service to a suffering humanity &ndash; an attitude deeply consistent with the social One&#39;s inherent principle: conviction that isn&#39;t exhausted in theory, but is measured by its effect in the lives of the sick.</p>
        </blockquote>

        <h2 class="vb-section">8. Late Fame: Paris and the Second Marriage</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 1835, at the age of eighty, Hahnemann married the much younger French painter Mélanie d&#39;Hervilly and moved with her to Paris. What might seem an unusual chapter for a man of his age became one of the most successful phases of his career: in Paris he treated a large, often wealthy and influential clientele until his death, including members of the aristocracy, and finally enjoyed the social recognition long denied him in Germany.</p>
          <p class="vb-intro">Samuel Hahnemann died in Paris on July 2, 1843, at the age of 88 &ndash; an exceptionally long life for his era, one he liked to cite himself as living proof of his method&#39;s effectiveness. He was buried in the Père Lachaise cemetery, where his tomb is still visited today by followers of homeopathy from around the world.</p>
        </blockquote>

        <div style="display:flex;gap:0.6rem;flex-wrap:wrap;justify-content:center;margin:1.2rem 0 0.4rem;">
          <img src="../assets/portraits/beruehmte-samuel-hahnemann-grab-1.jpg" alt="Hahnemann's tomb at Père Lachaise cemetery, Paris" loading="lazy" style="width:140px;height:140px;object-fit:cover;border-radius:10px;border:2px solid #8b5e3c;box-shadow:0 3px 12px rgba(0,0,0,0.22);" />
          <img src="../assets/portraits/beruehmte-samuel-hahnemann-grab-2.jpg" alt="Hahnemann's tomb at Père Lachaise cemetery, Paris" loading="lazy" style="width:140px;height:140px;object-fit:cover;border-radius:10px;border:2px solid #8b5e3c;box-shadow:0 3px 12px rgba(0,0,0,0.22);" />
          <img src="../assets/portraits/beruehmte-samuel-hahnemann-grab-3.jpg" alt="Hahnemann's tomb at Père Lachaise cemetery, Paris" loading="lazy" style="width:140px;height:140px;object-fit:cover;border-radius:10px;border:2px solid #8b5e3c;box-shadow:0 3px 12px rgba(0,0,0,0.22);" />
        </div>
        <p style="text-align:center;font-size:0.8rem;color:var(--muted);margin:0 0 1.2rem;font-style:italic;">Samuel Hahnemann's tomb, Père Lachaise cemetery, Paris &ndash; personal photographs from an on-site visit.</p>

        <h2 class="vb-section">9. Legacy: A Medicine That Still Accompanies Millions Today</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO1w9 is the ability to build something fundamentally new out of deep outrage at a flawed system &ndash; not in a fit of anger, but through decades of patient, meticulous work. What Hahnemann began as a lone critic of the &bdquo;heroic medicine&ldquo; of his day is today a globally practiced healing system: according to World Health Organization estimates, several hundred million people in more than eighty countries use homeopathic remedies; in countries like India, homeopathy is a firmly established part of the official healthcare system; and in Germany, France, and many other countries it has been part of the lived health culture of countless families for generations.</p>
          <p class="vb-intro">Current research, too, offers evidence that homeopathy&#39;s effects go beyond a pure placebo response: a 2023 meta-synthesis by Dr. Harald J. Hamre and his team, published in the journal <em>Systematic Reviews</em>, evaluated every systematic review to date of placebo-controlled homeopathy trials &ndash; five of the six comprehensive meta-analyses found a statistically significant advantage for homeopathic treatment over placebo, an effect that persisted in most of the analyses even when restricted strictly to methodologically high-quality studies. As early as 1997, Dr. Klaus Linde and his team had reached a similar conclusion in the renowned journal <em>The Lancet</em>: their analysis of 89 clinical trials found that the observed clinical effects of homeopathy could not be explained by the placebo effect alone.</p>
          <p class="vb-intro">His lasting legacy is more than the sum of his remedy pictures: he was among the first to place the individual, with their unique symptom picture, at the center of treatment; he called for a gentler medicine that did not further weaken the body at a time when bloodletting and mercury were the standard; and with the systematic proving of remedies on healthy people, he founded a methodology far ahead of its time. The goose that once stood alone against the established medical profession of its day has left behind a formation that still accompanies millions of people on their path to health &ndash; a legacy to which this compass, with its homeopathic recommendations for all 27 subtypes, remains explicitly committed.</p>
        </blockquote>

      </div>
      <a class="book-tip" href="https://www.verlagshausrathmer.com/homoeopathie.html" target="_blank" rel="noopener">
        <span class="book-tip__icon">🌿</span>
        <div class="book-tip__text">
          <strong>For professionals: »Homöopathie &amp; Naturheilkunde«</strong>
          <span>Professional books, repertories, and teaching materials for homeopaths and practitioners – the complete homeopathic professional literature at Verlagshaus Rathmer.</span>
        </div>
        <span class="book-tip__arrow">→</span>
      </a>
      ${bookTip("rathmer-s-repertorium-gebundene-ausgabe", "The world's most comprehensive homeopathic mind repertory – 1568 pages, 20,000 rubrics.", "Rathmer’s Repertorium")}
      ${bookTip("der-kern-der-heilmittel-the-core-of-the-remedies-gebunden", "The spiritual essence of the 500 most important homeopathic remedies – over 8,500 single-rubrics.", "Der Kern der Remedies")}
      ${bookTip("enneagramm-homoeopathie-band-1", "The foundation of Enneagram-Homeopathy – how personality type and remedy selection are connected.", "Enneagramm-Homöopathie – Band 1")}
      ${bookTip("enneagramm-homoeopathie-band-2", "Deepening and expansion: The 27 Subtypes and their individual homeopathic remedies.", "Enneagramm-Homöopathie – Band 2")}
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-enneagramm-aromatherapie", "9 types, 9 core wounds, 9 soul scents – natural healing in the Enneagram.", "Die Enneagramm-Aromatherapie")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/so1", label:"SO1 – The Goose: Subtype Profile"},
        {route:"enneagramm-homoeopathie", label:"Enneagram meets Homeopathy – 9 case studies"},
        {route:"beruehmte-adam-smith", label:"Portrait: Adam Smith (SO1w9)"},
        {route:"beruehmte-friedrich-merz", label:"Portrait: Friedrich Merz (SO1w9)"},
        {route:"beruehmte-george-vithoulkas", label:"Portrait: Prof. George Vithoulkas (SO3w4) – major 20th-century homeopath"},
      ])}
    </div>
  `);
}

export function sundarPichaiPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-sundar-pichai-portrait.jpg" alt="Sundar Pichai – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Sundar Pichai</p>
        <p class="krim-portrait-typ">SE6w5 &middot; Self-Preservation Type 6 with F\xfcnferfl\xfcgel</p>
        <p class="krim-portrait-subtitle">CEO of Google and Alphabet, b. 1972 – Animal equivalent: Rabbit</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Rabbit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The rabbit is the animal of the Self-Preservation Type 6—alert, endearing, adaptable. It does not run toward confrontation. It listens before it moves. It builds networks of trust, knows every escape route in its territory—and stays calm precisely when others panic, because it analyzed the situation long before it escalated.</p>
          <p class="vb-intro">Sundar Pichai has been the CEO of Google since 2015 and CEO of Alphabet—the parent company of Google—since 2019. He leads one of the most powerful technology companies in the world without ever raising his voice. No provocative tweets. No divisive statements. No step taken without a safety net. In an industry full of egomaniacs, Pichai is the rabbit: always present, rarely graspable, capable of surviving in a way one only understands upon closer inspection.</p>
        </blockquote>

        <h2 class="vb-section">2. Warmth: Security Through Belonging</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo named the Self-Preservation Type 6 "Warmth"—because this subtype does not seek security through rules or confrontation, but through human closeness. The SP6 bonds with people, groups, and institutions it can trust. It is endearing, collegiate, reliable—and thereby indispensable. Those who feel safe because they are needed do not have to fear being abandoned.</p>
          <p class="vb-intro">Pichai joined Google in 2004 as a product manager—and stayed. Microsoft offered him the CEO position. Twitter courted him. He declined. Not because Google made the best offer, but because he had planted roots there. The Self-Preservation Six knows this feeling: You do not leave what you know and trust. That would be far more dangerous than treading new paths.</p>
          <p class="vb-intro">His leadership quality stems from this exact trait. He is known for listening before making a decision. Teams enjoy working with him—he does not dominate a meeting, he moderates it. He is the man whom engineers, product managers, and investors trust simultaneously because he hurts no one's feelings. That is warmth as a strategy: security through indispensability.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five Wing: Quiet Depth</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Five wing (w5) brings the Self-Preservation Six something not immediately obvious from the outside: analytical depth, introversion, and the ability to immerse oneself in technical issues before speaking. The SP6w5 does not speak to persuade. It listens to understand. And when it speaks, it has already pondered the arguments from all angles.</p>
          <p class="vb-intro">Pichai is known for his phenomenal memory. Colleagues report that he remembers names, figures, and details from meetings months after the fact. That is no mere talent—that is the SP6w5 in action: continuous information processing, because information means security. Those who know everything cannot be surprised by anything.</p>
          <p class="vb-intro">Raised in Madurai, Tamil Nadu, in a family without great wealth—his father slept on the floor with him as a child until the family could afford beds—Pichai developed this drive early on: knowledge is the way up. IIT Kharagpur, Stanford, Wharton—he dropped out of his MBA studies when Google hired him in 2004. The Five wing says: If I know enough, I am safe. The rabbit nods.</p>
        </blockquote>

        <h2 class="vb-section">4. The Body of Work: From Chrome to Gemini</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Pichai's career at Google is the story of a man who was never loud—and yet changed everything. In 2008, he led the development of Google Chrome. Today, Chrome commands a market share of over 60 percent among global web browsers—a project once considered too risky internally and opposed by parts of management. Pichai pushed it through. Quietly, persistently, with data.</p>
          <p class="vb-intro">After that: Chrome OS, Google Drive, Google Maps, the realignment of the Android ecosystem. In 2015, Larry Page appointed him CEO of Google—and in 2019, as Alphabet's holding structure expanded further, Pichai stepped up to lead the entire conglomerate. Today, he is the highest-paid CEO of one of the five most valuable companies in the world.</p>
          <p class="vb-intro">Under his leadership, Google entered the AI race with Gemini (formerly Bard)—late, hectic, under pressure from ChatGPT. Pichai commented on the moment calmly. Internally, employees reported, the pressure was immense. That is the SP6w5 in crisis: outwardly composed, inwardly on highest alert. The rabbit does not immediately run away. First, it calculates every risk.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP6w5 is its reliability—the ability to be the calm center in turbulent situations. Pichai has navigated Google through multiple crises—political headwinds, antitrust lawsuits, the AI transformation—without ever losing his composure. Employees praise his accessibility, his listening, his consistency. That is the SP6w5 at its best: stability as a leadership quality.</p>
          <p class="vb-intro">The shadow: In January 2023, Alphabet laid off roughly 12,000 employees—twelve percent of its workforce, the largest mass layoff in the company's history. Pichai explained in an email that he took personal responsibility. In that same fiscal year, he received a total compensation package of around $226 million. That is the shadow of the SP6w5: the warmth that radiates inward can turn cold toward the outside—when the system one serves demands it.</p>
          <p class="vb-intro">The passion of Type Six is fear—and in the Self-Preservation subtype, it manifests as chronic self-protection and hedging. Pichai hedges his bets: in his wording, in consensus, in avoiding polarization. That protects him. It protects Google. And sometimes, it veils what was actually decided—and by whom.</p>
        </blockquote>

        <h2 class="vb-section">6. The Rabbit That Remains</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Sundar Pichai is married to Anjali Pichai, whom he met during his engineering studies at IIT Kharagpur—his childhood sweetheart. They have two children. Little is known about his private life; he rarely speaks about it. The rabbit keeps its burrow to itself.</p>
          <p class="vb-intro">What remains is the image of a man who won through quietness in one of the loudest industries in the world. Who did not provoke, but convinced. Who did not dominate, but showed endurance. In a tech world that rewards megalomania, Sundar Pichai is proof that the rabbit also survives—sometimes longer than the lion sitting next to it.</p>
          <p class="vb-intro">That is the SP6w5: persistence through trust, depth through restraint, security through competence. And the quiet conviction that one does not need to be loud to be heard.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/se6", label:"SE6 – The Rabbit: Subtype Profile"},
        {route:"beruehmte-herbert-kickl", label:"Portrait: Herbert Kickl (SE6w5)"},
        {route:"beruehmte-malaika-mihambo", label:"Portrait: Malaika Mihambo (SP6w5)"},
      ])}
    </div>
  `);
}

export function trumanCapotePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-truman-capote-portrait.jpg" alt="Truman Capote" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Truman Capote</p>
        <p class="krim-portrait-typ">SO2w3 &middot; Social Type 2 with a Three-Wing</p>
        <p class="krim-portrait-subtitle">1924&ndash;1984 &ndash; American writer, "In Cold Blood" &ndash; Animal correspondence: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Golden Retriever Who Opened Every Door</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Golden Retriever</strong> is the animal of the social Two &ndash; devoted, warm-hearted, irresistibly driven to be needed and loved. Truman Capote, born in 1924 in New Orleans, grew up largely abandoned by his parents in the care of relatives in Alabama &ndash; an early experience of being unwanted that turned into a lifelong, almost unquenchable need to belong everywhere and be indispensable to everyone.</p>
          <p class="vb-intro">Even as a young man in New York, he charmed his way into the city's most exclusive circles with a mix of wit, charisma, and attentive care &ndash; publishers, society women, film stars. The Golden Retriever doesn't wag its way into a society's heart by accident; it studies exactly whom to win over and how, and Capote mastered that game like almost no one else.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Two: Belonging as a Life's Project</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social Two (SO2)</strong> seeks belonging not in a single relationship but in the larger social field. Naranjo called this subtype <em>ambition</em> &ndash; the drive to become indispensable through impact and presence in the community. In Capote this showed up as a network of intense friendships with the so-called "Swans" &ndash; a group of wealthy, powerful New York society women, among them Babe Paley, to whom he offered himself as closest friend, confidant, and confessor.</p>
          <p class="vb-intro">These friendships were no superficial acquaintances. Capote listened for hours, shared the most intimate secrets, became an emotional anchor through marital crises and family dramas &ndash; and wove himself deep into these women's lives. The Golden Retriever doesn't walk alongside the pack; it becomes its center.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: The Writer as Event</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the social Two the drive toward visible impact, staged appearance, proof through public image. In Capote this showed up as an unparalleled talent for self-promotion: flamboyant clothing, an unmistakable, often-imitated way of speaking, provocative television appearances. His 1966 <em>Black and White Ball</em> at the Plaza Hotel is still considered one of the most legendary society events of the twentieth century &ndash; a party he curated himself, precisely to demonstrate how powerful his social network had become.</p>
          <p class="vb-intro">His literary masterpiece carries the same signature: for <em>In Cold Blood</em> (1966) he spent years immersing himself in the community where the murders occurred and in an intense personal relationship with one of the two convicted killers &ndash; a closeness that went far beyond journalistic research. The Three-wing didn't just want to write a book, it wanted to create a literary event that would make him immortal &ndash; and, with "New Journalism," ultimately an entire literary genre.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Social Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO2w3 is a rare gift for listening, paired with the ability to shape it into great art. Capote's <em>In Cold Blood</em> is still regarded as a milestone of literary narrative journalism &ndash; a work that could only exist because he truly got close to people, earned their trust, and captured their stories with genuine attention.</p>
          <p class="vb-intro">The Two's fateful pattern is <strong>pride</strong> &ndash; the deep conviction of being indispensable, and the difficulty of recognizing the neediness hidden beneath it. In Capote this became, in 1975, a consequential transgression: he published in Esquire the chapter "La Côte Basque 1965" from his planned novel <em>Answered Prayers</em> &ndash; in it, barely disguised, he processed the most intimate secrets of exactly the "Swans" who had trusted him blindly for years. Affairs, murders, family secrets &ndash; everything they had confided in him, he poured into literary form.</p>
        </blockquote>

        <h2 class="vb-section">5. The Betrayal That Broke the Pack</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The reaction was devastating. Almost overnight, the "Swans" cast him out &ndash; friends of decades, to whom he had presented himself as their most loyal confidant, never spoke to him again. Babe Paley, his closest friend, never forgave him before her death in 1978. Capote himself seemed genuinely surprised by the consequences &ndash; a pattern typical of the social Two: someone who believes boundless devotion has made them untouchable can hardly grasp that this very devotion can also be betrayed.</p>
          <p class="vb-intro">Losing his pack hit him to the core. Without the belonging that had carried his entire life, Capote sank increasingly into alcohol and pills, never finished <em>Answered Prayers</em>, and died in 1984 at the age of 59 &ndash; a Golden Retriever who had lost his own pack because he had sacrificed it for a story.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: A Closeness That Became Literature</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What Truman Capote left behind cannot be reduced to a single scandal. With New Journalism, he shaped a literary form in which fact fuses with narrative craft, and with <em>In Cold Blood</em> he wrote one of the most influential works of twentieth-century American literature.</p>
          <p class="vb-intro">That is the ambivalent gift of the SO2w3 in its rawest form: a closeness to people deep enough to make great art from it &ndash; and, at the same time, a hunger for impact so intense that it ultimately destroyed that very closeness. The Golden Retriever who wanted into the pack because he loved it &ndash; and lost it because he needed it, at the same time, to be admired.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so2", label:"SO2 – The Golden Retriever: Subtype Profile"},
        {route:"beruehmte-julius-caesar", label:"Portrait: Julius Caesar (SO2w3)"},
        {route:"beruehmte-eva-peron", label:"Portrait: Eva Perón (SO2w3)"},
        {route:"beruehmte-kamala-harris", label:"Portrait: Kamala Harris (SO2w3)"},
      ])}
    </div>
  `);
}

export function wilsonGonzalezOchsenknechtPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-wilson-gonzalez-ochsenknecht-portrait.jpg" alt="Wilson Gonzalez Ochsenknecht – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Wilson Gonzalez Ochsenknecht</p>
        <p class="krim-portrait-typ">SP2w3 &middot; Self-Preservation Type 2 with Three-wing</p>
        <p class="krim-portrait-subtitle">German actor &amp; musician, born 1990 &ndash; Animal correspondence: Hippopotamus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Hippopotamus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Hippopotamus</strong> is the animal of the self-preservation Two &ndash; a creature that builds its territory firmly within its closest family bond and grows out into the world from there. Wilson Gonzalez Ochsenknecht carries this pattern in his very name: named after soul legend Wilson Pickett, with the tongue-in-cheek addition Gonzalez as a nod to the cartoon character Speedy Gonzales &ndash; a name that, from the start, tells of his parents' taste and humor.</p>
          <p class="vb-intro">The German actor Wilson Gonzalez Ochsenknecht was born on March 18, 1990, in Munich, the eldest son of Uwe and Natascha Ochsenknecht. Alongside his brother Jimi Blue, two years younger, and his later-born sister Cheyenne, he grew up in a family where acting and public visibility were part of everyday life from the start.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Two: A First Step Taken Alongside His Father</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the <strong>self-preservation Two (SP2)</strong> <em>Me First</em>: care turns first to one's own concrete foundation and closest circle, before it turns outward. For Wilson Gonzalez Ochsenknecht, that circle was his family from the very beginning: at age ten, he stood in front of a camera for the first time alongside his father Uwe and brother Jimi Blue in Doris Dörrie's <em>Erleuchtung garantiert</em> &ndash; his first professional step happened not alone, but literally side by side with his closest people.</p>
          <p class="vb-intro">He became widely known shortly after with the children's film series <em>Die Wilden Kerle</em>, in which he and Jimi Blue shaped an entire generation of German moviegoers. This principle continues to this day: for about a year now he has been a father himself, and by his own account, shoots and projects are now always planned with his daughter in mind first &ndash; "everything else takes a back seat for now." The closest family foundation remains the starting point for every professional decision.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: From Child Star to Multi-Hyphenate Artist</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the self-preservation Two the drive to build visible, publicly effective success across several fields out of a secured foundation. Between 2006 and 2007, Wilson Gonzalez Ochsenknecht attended the California Art Academy in Los Angeles, where he gained early experience in the music business alongside acting; in May 2008, his debut album <em>Cookie</em>, an alternative pop-rock record, was released.</p>
          <p class="vb-intro">Since then, he has developed well beyond a purely acting role into a multi-hyphenate artist: as a musician, as a developer of his own series formats, and in 2025, with the lead role in the ZDF sitcom <em>Späti</em>, back in front of the camera in force as well. The Three-wing keeps asking: how do I build several visible pillars out of what I can do, instead of limiting myself to just one?</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Self-Preservation Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP2w3 is the ability to develop an independent, versatile artistic identity out of a childhood career closely intertwined with one's own family, without losing that family foundation along the way. Wilson Gonzalez Ochsenknecht himself has said that the joint reality documentary <em>Diese Ochsenknechts</em> created "a more positive image" of the family &ndash; an active contribution to his own family's narrative, rather than leaving it to others.</p>
          <p class="vb-intro">The fate pattern of the Two is <strong>pride</strong> &ndash; the conviction of being indispensable through one's own care and effort. In the SP2w3, this pride can become a need to fill several roles at once &ndash; actor, musician, series developer, father &ndash; rather than focusing on just one. That he now consciously sets priorities and subordinates projects to his own daughter shows a mature form of this pattern: care that limits itself, rather than spreading itself too thin.</p>
        </blockquote>

        <h2 class="vb-section">5. The Work: A Career That Begins With Family and Keeps Growing With It</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Wilson Gonzalez Ochsenknecht's path reads as one continuous line: his first film appearance alongside father and brother, his breakthrough with <em>Die Wilden Kerle</em> next to Jimi Blue, his return to his own family story in the reality documentary, and today his own fatherhood as the new fixed point of every professional decision.</p>
          <p class="vb-intro">The hippopotamus doesn't build its territory alone, but together with its own pod, letting that pod grow along with it. Wilson Gonzalez Ochsenknecht's path from child star to multi-hyphenate artist and father shows exactly this pattern: success that is never conceived apart from family, but always in relation to it.</p>
        </blockquote>

        <h2 class="vb-section">6. The Brothers' Parallel: Two Paths Through the Same Fixation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro"><strong>The same first step, at the same time:</strong> For most siblings with similar career paths, there's a gap in time, or a separate route to public life, between each one's first success. Not for Wilson Gonzalez and his brother, two years younger, Jimi Blue Ochsenknecht (SP2w3): both appeared in a film together for the first time in 2000, in front of the same camera, with the same father. For both, their own professional identity didn't emerge alongside the family, but literally out of it, in the same place, at the same moment &ndash; a pattern characteristic of the self-preservation Two: safety and initial visibility aren't conquered alone, but entered together, within the closest circle.</p>
          <p class="vb-intro"><strong>Two pillars, on almost the same timeline:</strong> The Three-wing, too, shows up in both brothers with almost identical timing: Jimi Blue released his album <em>Mission Blue</em> in 2007; Wilson Gonzalez followed in 2008 with <em>Cookie</em> &ndash; barely a year apart, both built a second, publicly visible stage as musicians alongside their acting careers, rather than settling on a single field. How this shared underlying pattern continues through periods of crisis and through the shared family stage of the reality documentary <em>Diese Ochsenknechts</em> is shown in the portrait of Jimi Blue Ochsenknecht (SP2w3).</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se2", label:"SP2 – The Hippopotamus: Subtype Profile"},
        {route:"beruehmte-jimi-blue-ochsenknecht", label:"Portrait: Jimi Blue Ochsenknecht (SP2w3) – brother"},
        {route:"beruehmte-uwe-ochsenknecht", label:"Portrait: Uwe Ochsenknecht (SX6w7) – father"},
        {route:"beruehmte-natascha-ochsenknecht", label:"Portrait: Natascha Ochsenknecht (SO8w7) – mother"},
        {route:"beruehmte-cheyenne-ochsenknecht", label:"Portrait: Cheyenne Ochsenknecht (SP3w4) – sister"},
      ])}
    </div>
  `);
}

export function takashiMurakamiPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-takashi-murakami-portrait.jpg" alt="Takashi Murakami – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Takashi Murakami</p>
        <p class="krim-portrait-typ">SP7w8 &middot; Self-Preservation Type 7 with Eight-wing</p>
        <p class="krim-portrait-subtitle">Japanese artist &amp; entrepreneur, born 1962 in Tokyo &ndash; Animal correspondence: Gorilla</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Gorilla That Built an Entire World of Goods Around Itself</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>gorilla</strong> is the animal of the self-preservation Seven &ndash; an animal of enormous strength that lives in a group and whose reach extends over an entire territory. Takashi Murakami, born 1962 in Tokyo, earned a doctorate at the Tokyo University of the Arts in Nihonga, traditional Japanese painting &ndash; a strictly regulated, centuries-old discipline. But instead of remaining within that tradition, he turned to Japan's otaku and anime culture and, from it, founded the art movement "Superflat," which deliberately flattens the boundary between fine art, anime, and consumer goods.</p>
          <p class="vb-intro">In 2001 he founded the company Kaikai Kiki Co., a veritable art-production studio modeled on Andy Warhol's "Factory," which today employs over a hundred people and manages, alongside Murakami's own art, merchandise, fashion collaborations, and the careers of young Japanese artists. The gorilla that does not leave its territory to chance, but systematically fills it with abundance.</p>
        </blockquote>

        <h2 class="vb-section">2. The Hidden Eight: A Merchandise Empire as Practical Abundance</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">This variant of the Seven gains its security not through shared knowledge or a single intense bond, but through concrete, tangible enjoyment within its own closest surroundings &ndash; in Murakami this shows in an empire that reaches far beyond galleries and museums: plush figures, keychains, skateboards, perfumes, and limited sneaker editions all carry his recurring motifs, above all the smiling flower from the "Flower of Life" series.</p>
          <p class="vb-intro">In 2003 he designed an entire handbag collection with colorful monogram motifs for Louis Vuitton under creative director Marc Jacobs &ndash; one of the most commercially successful collaborations in fashion history, which turned Murakami from an art-world insider into a globally known name. In Murakami, the self-preservation Seven's abundance never stays abstract, but translates into hundreds of concrete, purchasable products.</p>
        </blockquote>

        <h2 class="vb-section">3. The Eight-Wing: Uncompromising Control Over One's Own Territory</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">That assertiveness is the Eight-wing's gift to the self-preservation Seven &ndash; without it, this same rigor would be missing. Murakami runs Kaikai Kiki with a rigor repeatedly described in interviews and media reports as harsh and demanding &ndash; long hours, high expectations of precision, a studio that operates by its own strict rules. The gorilla that holds its troop together not with gentleness, but with clear, unyielding structure.</p>
          <p class="vb-intro">His public role as an art theorist is likewise confrontational: his "Superflat" manifesto of 2000 attacked the established Western art world directly, exposing its hierarchy between "high" and "low" art as an arbitrary, ultimately colonial construct &ndash; an offensive, not a defensive, positioning. Where the Seven evades when resistance arises, the SP7w8 seeks confrontation, even on the level of art theory itself.</p>
        </blockquote>

        <h2 class="vb-section">4. From Kanye West to the Museum: A Territory Without Borders</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 2007 Murakami designed the cover art for Kanye West's "Graduation" &ndash; another step into a pop-cultural sphere that classical gallery artists traditionally avoid. Collaborations with Pharrell Williams, Virgil Abloh, and Billie Eilish followed later. At the same time, Murakami remained present in the high-culture art world: major solo exhibitions at the Brooklyn Museum, the Mori Art Museum Tokyo, and numerous other international institutions.</p>
          <p class="vb-intro">In 2002 he also founded the GEISAI art fair, to give young, unknown Japanese artists a platform without the usual gallery gatekeepers &ndash; an infrastructure of his own, under his control, that is at once patronage and territorial claim. The gorilla that does not merely fill its own territory, but builds an entire ecosystem around itself.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Self-Preservation Seven</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP7w8 shows in Murakami's ability to turn his own search for abundance into a sustaining structure that provides for dozens of employees and young artists, while dissolving, visibly and worldwide, the rigid separation between "serious" art and popular culture &ndash; an influence that reaches far beyond his own artistic career.</p>
          <p class="vb-intro">The shadow shows in repeated reports of harsh working conditions at Kaikai Kiki, as well as in criticism that Murakami has turned his own artistic signature so consistently into a commercial franchise that the line between art and pure brand exploitation at times disappears entirely. The Eight-wing Seven's uncompromising territorial defense shows here not in violence, but in a market control that leaves no field &ndash; from the gallery to the keychain &ndash; untapped.</p>
        </blockquote>

        <h2 class="vb-section">6. Legacy: The Gorilla That Tore Down the Line Between Art and Merchandise</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Murakami remains active to this day &ndash; as an artist, as an entrepreneur, as a patron of an entire generation of Japanese artists under the roof of his own company. His work has lastingly changed the global art market: the idea that an artist can be both a museum star and a fashion-label partner without losing artistic credibility is, to a large degree, his achievement.</p>
          <p class="vb-intro">Like Francis Bacon (SP7w8, see <a href="javascript:void(0)" data-route="beruehmte-francis-bacon">portrait</a>), who poured his entire knowledge into a single, vast reform project, Murakami too turned his search for abundance into a territory that reaches far beyond his own person &ndash; except his territory is not a library, but a global universe of goods. The gorilla that filled its territory so thoroughly that it has long since burst the boundaries of the art world itself.</p>
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
        {route:"beruehmte-suzan-lori-parks", label:"Portrait: Suzan-Lori Parks (SP7w8)"},
      ])}
    </div>
  `);
}

export function alanWattsPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/alan-watts-portrait.jpg" alt="Alan Watts – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Alan Watts</p>
        <p class="krim-portrait-typ">SO4w3 &middot; Social Type 4 with Three-wing</p>
        <p class="krim-portrait-subtitle">British-American philosopher and spiritual teacher, 1915&ndash;1973 &ndash; Animal correspondence: Armadillo</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Armadillo That Changed Its Facade</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>armadillo</strong> is the animal of the social Four — it seeks society, an audience, a stage, in order to sharpen its own difference against it, while carrying its sensitive interior visibly outward. Alan Watts, born in 1915 in Chislehurst, England, discovered his fascination with China at age eleven through Fu Manchu novels, joined the Buddhist Lodge in London at fifteen, and by seventeen was already editor of its journal, "The Middle Way."</p>
          <p class="vb-intro">Yet rather than staying on a straight path with Buddhism, he studied theology and became an Anglican priest in 1945 — a role he left again in 1950 to move to California and devote himself to interpreting Eastern philosophy for the West. This early chain of public role changes — Buddhist, priest, then Zen popularizer — is already the blueprint for his entire life: a constant search for the role in which his own difference could show itself most effectively.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Four: Difference as a Public Stage</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social Four (SO4)</strong> needs the group in order to rub against it and make its own particularity visible — Watts did exactly that by moving throughout his life between worlds: neither fully East nor fully West, neither academic scholar nor churchman, neither guru nor mere entertainer, but something in between that had not existed before. He carved out a niche of his own making and became, within it, an unmistakable voice for an entire generation.</p>
          <p class="vb-intro">His home from the mid-1960s on — alternating between a houseboat in Sausalito and a cabin near Mount Tamalpais — became a gathering place for an entire counterculture scene: legendary parties with Timothy Leary, Allen Ginsberg, and Gary Snyder took place there. The Four does not seek distance from community, but its closeness, as long as that closeness confirms its own uniqueness.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: The "Philosophical Entertainer"</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the Four a pronounced sense for impact, audience, and marketability — inner experience is not just expressed, but deliberately shaped into an appealing, saleable form. Watts openly called himself a "philosophical entertainer" — not a scholar keeping distance from his audience, but someone who made complex Eastern philosophy radio-friendly and mass-accessible through wit, imagery, and paradox.</p>
          <p class="vb-intro">His decades-long media presence — the radio series "The Great Books of Asia," later the television series "Eastern Wisdom and Modern Life" — shows exactly this Three-wing signature: public visibility as a deliberately cultivated instrument, not a side effect. Critics even accused him of "spiritual marketing" — an accusation that only arises against someone keenly aware of their image and its commercial potential.</p>
        </blockquote>

        <h2 class="vb-section">4. Between Public Polish and Private Chaos</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">While Watts appeared publicly as the composed interpreter of Eastern wisdom, his private life was, as one observer put it, "turbulent, maybe closer to messy": two failed marriages, a third marriage caught in a spiral of alcoholism, and heavy alimony payments that forced him into overwork and touring in his final years. This contrast between a flawless public role and unresolved private turmoil is typical of the SO4w3: the outwardly cultivated image can drift far from the actual inner state without the public performance immediately revealing it.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO4w3 is the ability to <strong>translate deeply personal, existential searching into a broadly accessible, effective form</strong> — Watts made complex Eastern concepts accessible to an entire generation without flattening them, and decisively shaped how the West still talks about Zen, Tao, and meditation today.</p>
          <p class="vb-intro">The shadow showed itself in exactly that gap between public image and private state: a man who helped others find calm wrestled his entire life with alcohol, failed relationships, and financial pressure. The Three-wing danger of the SO4 lies exactly here — the perfected public role can absorb so much energy that the private reality behind it remains unaddressed.</p>
        </blockquote>

        <h2 class="vb-section">6. The Performance That Outlasted the Life Behind It</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Alan Watts died in 1973 at age 58 in Marin County, California. His radio talks are streamed by the millions to this day, his books are still widely read — his public voice has, in a sense, outlived his actual life.</p>
          <p class="vb-intro">Anyone wanting to see how a social Four with a Three-wing turns its own inner conflict into a stage on which millions learn something about themselves finds, in Watts's life story, both the blueprint for doing so — and the warning that a perfectly staged role does not automatically resolve the restlessness behind it.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so4", label:"SO4 – The Armadillo: Subtype Profile"},
        {route:"beruehmte-cat-stevens", label:"Portrait: Cat Stevens / Yusuf Islam (SO4w3) – another radical spiritual reinvention"},
        {route:"beruehmte-hans-christian-andersen", label:"Portrait: Hans Christian Andersen (SO4w3)"},
        {route:"beruehmte-heinrich-heine", label:"Portrait: Heinrich Heine (SO4w3)"},
      ])}
    </div>
  `);
}

export function bastianSchweinsteigerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-bastian-schweinsteiger-portrait.jpg" alt="Bastian Schweinsteiger – portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Bastian Schweinsteiger</p>
        <p class="krim-portrait-typ">SO9w1 &middot; Social Type 9 with a One-Wing</p>
        <p class="krim-portrait-subtitle">Footballer, b. 1984 &ndash; Animal correspondence: Buffalo</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The buffalo that never ran alone</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>buffalo</strong> is the animal of the social Type 9 – an animal that doesn't appear as a lone individual, but draws its strength from the herd it merges with. Over two decades, Bastian Schweinsteiger became the embodiment of this pattern: midfielder for FC Bayern Munich, captain of the German national team, 2014 World Cup winner – and throughout his entire career, someone who noticeably rarely spoke about himself, almost always about the team.</p>
          <p class="vb-intro">The image that remains of him is not a solo moment. It is a blood-streaked face in the 2014 World Cup final against Argentina – injured, playing on, until the trophy rested in the hands of the whole team, not his alone.</p>
        </blockquote>

        <h2 class="vb-section">2. The social Nine: identity through belonging, not through the individual person</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called this subtype <strong>"participation"</strong>: the self does not appear as an individual, but merges with a group, an idea, a larger cause. In Schweinsteiger this showed as a remarkably consistent modesty toward his own star status across his entire career – despite world-class ability, despite the captain's armband, despite a 2013 Champions League title, he almost always spoke of "we" in interviews, rarely of "I."</p>
          <p class="vb-intro">He shares this basic stance with Tom Hanks (also SO9w1), whose legendary habit of learning the names of every crew member on set shows exactly the same principle: his own significance comes not from star status, but from dissolving frictionlessly into the shared whole.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-wing: discipline and principle instead of mere adaptation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>One-wing</strong> gives the social Nine an additional note of discipline, orderliness, and an inner standard for one's own play that goes beyond simply going along with the group. Schweinsteiger's meticulous training discipline, his tactical understanding in midfield, and his reputation as a "model professional" – despite years of injury problems that he consistently trained through rather than giving up – show this One-component clearly.</p>
          <p class="vb-intro">Without the wing, the Nine tends to remain purely dissolved in the group. With the One-wing, an additional inner standard is added: not just belonging, but also doing it right – a motif that runs through his entire, unusually long career at the highest level.</p>
        </blockquote>

        <h2 class="vb-section">4. Calm leadership the team followed</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">As captain, Schweinsteiger never led through loudness or demonstrative statements. Teammates and coaches repeatedly described him as a calm anchor in the locker room – someone who worked through presence and reliability, not dominance. That is exactly the pattern the life-pattern compass describes for Ronald Reagan: "The buffalo does not lead by command, but by movement: when it moves, the herd moves with it."</p>
          <p class="vb-intro">His transformation, begun in 2010 under Louis van Gaal, from an offensive winger into a central midfield playmaker also happened without public drama – a quiet adaptation to the team's needs that brought his career to its true peak.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO9w1 shows in Schweinsteiger's ability to hold an entire team together for years without putting himself at the center – a rare constant in a sport that often places individual brilliance above the collective.</p>
          <p class="vb-intro">The shadow shows in how long he silently endured physical warning signs: for years he played on with chronic knee and ankle problems, until his body increasingly demanded its toll in 2015/16 – a patient carrying of the load, as the compass describes for Nick Leeson and Willy Brandt, only here in athletic rather than political form.</p>
        </blockquote>

        <h2 class="vb-section">6. The buffalo that never left the herd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Bastian Schweinsteiger's career shows the social Nine with a One-wing in its most successful form: a world-class player whose greatest strength was never his own spotlight, but the whole he served. The buffalo doesn't roar – it carries the herd until they arrive together.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from clinical practice.", "The Hidden Dynamics of the 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
          {route:"subtype/so9", label:"SO9 – The Buffalo: Subtype Profile"},
          {route:"beruehmte-tom-hanks", label:"Portrait: Tom Hanks (SO9w1) – also SO9w1"},
        ])}
      </div>
    </div>
  `);
}

export function virgilVanDijkPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-virgil-van-dijk-portrait.jpg" alt="Virgil van Dijk – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Virgil van Dijk</p>
        <p class="krim-portrait-typ">SO3w2 &middot; Social Type 3 with a Two Wing</p>
        <p class="krim-portrait-subtitle">Football professional, captain of Liverpool FC and the Dutch national team, born 1991 &ndash; Animal equivalent: Cheetah</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Cheetah Who Almost Never Woke Up Again</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>cheetah</strong> proves its strength only once the threat was real. Virgil van Dijk, born in 1991 in Breda, was rejected by several Dutch clubs as a young player over doubts about his physique before finding his way into professional football through the youth academies of Willem II and FC Groningen. At 20, still at Groningen, he fell ill after a league match with what was initially misdiagnosed appendicitis, which developed into life-threatening peritonitis with kidney failure – he lost over twelve kilograms, spent nearly two weeks in hospital, and signed a will during treatment.</p>
          <p class="vb-intro">His youth coach at the time, Dick Lukkien, still sees that experience today as the catalyst for the mentality that later made van Dijk a Champions League winner and Ballon d'Or contender.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Three: The World's Most Expensive Defender as Captain of Two Nations</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">According to Naranjo, the <strong>Social Three (SO3)</strong> seeks status where success is publicly measurable – and few areas in football make value as immediately visible as a transfer record. In 2018, van Dijk moved to Liverpool FC for around €84.5 million – at the time the highest fee ever paid for a defender. Rather than settling for the transfer fee alone, he took the captain's armband at Liverpool in 2023 and led the team to their 20th English league title in 2024/25; already in 2018 he had been named captain of the Dutch national team, which he led to the Euro 2024 semi-final.</p>
          <p class="vb-intro">Visible leadership is no side effect for van Dijk but a stated principle: he describes body language itself as "one of the first messages a captain sends on the pitch" – calm is deployed deliberately as a leadership tool, not lived by accident.</p>
        </blockquote>

        <h2 class="vb-section">3. The Two Wing: The Woman Who Was There Before the Fame</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Two Wing</strong> gives the Social Three a personal, relationship-oriented note – status is never pursued in isolation, but embedded in close, reliable bonds. Van Dijk's wife Rike Nooitgedagt, his partner since their teenage years in Breda, gave up her own career as a fashion sales manager to move with him to Glasgow when he transferred to Celtic – long before fame or money were on the horizon.</p>
          <p class="vb-intro">Van Dijk himself describes his family – Rike and their four children – as what gives him "balance and perspective," because "life is way bigger than football." On the pitch, the same trait shows in his uninterrupted communication with teammates: constant instructions, encouragement, deliberately holding the formation together – leadership that cares for others, not just its own position.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: From Near Elimination to World Class</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">From Groningen through Celtic Glasgow to the record transfer to Liverpool runs a continuous upward line: Champions League title in 2019, Premier League championship with a club-record 99 points in 2019/20, the captaincy at both club and national team. Van Dijk himself sums up his path this way: "My mentality comes from what I've experienced over the years. I've been working hard for every step of the way. I never had an easy route to where I am."</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Social Three with a Two Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO3w2 shows in van Dijk in a form of leadership that never pits status against care: the most visible defender of his generation is also the one who carries his teammates through matches with constant verbal support. Critics such as Ruud Gullit and Marco van Basten at times accused him of appearing "arrogant" or "too easygoing" – to which van Dijk responded publicly without losing his composure.</p>
          <p class="vb-intro">The shadow of the Three shows in the need to keep success permanently measurable – transfer record, trophy collection, captaincy of two teams at once. The Two Wing softens this by never pursuing success detached from the people who carry it.</p>
        </blockquote>

        <h2 class="vb-section">6. The Cheetah Who Never Lost Sight of the Herd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Virgil van Dijk's path shows the Social Three with a Two Wing in a particularly vivid form: visible, measurable success on the biggest stage of world football, carried by a woman who was there before the fame, and a leadership that never cares only about its own position. The cheetah runs fastest when it knows the pack stands behind it.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
          {route:"subtype/so3", label:"SO3 &ndash; The Cheetah: Subtype Profile"},
          {route:"beruehmte-cristiano-ronaldo", label:"Portrait: Cristiano Ronaldo (SO3w2) – also a world-class footballer, same subtype"},
          {route:"beruehmte-christiaan-barnard", label:"Portrait: Dr. Christiaan Barnard (SO3w2)"},
          {route:"beruehmte-will-yun-lee", label:"Portrait: Will Yun Lee (SO3w2)"},
          {route:"beruehmte-leon-goretzka", label:"Portrait: Leon Goretzka (SO3w4) – also a professional footballer"},
        ])}
      </div>
    </div>
  `);
}

export function haraldVPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-harald-v-portrait.jpg" alt="King Harald V" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">King Harald V</p>
        <p class="krim-portrait-typ">SE1w9 · Self-Preservation Type 1 with a Nine Wing</p>
        <p class="krim-portrait-subtitle">King of Norway 1991–2026, 1937–2026 – Animal equivalent: Eagle</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Eagle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>eagle</strong> is the animal of the self-preservation One – an animal that never abandons its post, needs no stage, and seeks no applause. Harald was born in 1937 to Crown Prince Olav and Princess Märtha at the Skaugum estate. When the Wehrmacht occupied Norway in 1940, the royal family fled – he spent his childhood years in exile in Sweden and the United States, including Washington, D.C., where in 1945 he stood behind Franklin D. Roosevelt at his fourth inauguration.</p>
          <p class="vb-intro">In 1957 his grandfather King Haakon VII died, and at twenty Harald became Crown Prince. He studied at the military academy and at Balliol College, Oxford, reading history, economics, and politics. When his father died on January 17, 1991, he ascended to the throne – the first Norwegian-born monarch since 1387. He remained on that post for thirty-five years, until his death on August 28, 2026, at age 89.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation One: The Oath That Wasn't Negotiable</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation One (SE1)</strong> carries its perfectionism inward rather than outward – Naranjo called this subtype <em>Worry</em>: the constant inner question of whether one is truly doing justice to one's task. In Harald V this showed with a consistency unusual even for a monarch: despite bladder cancer (2003), two heart surgeries (2005 and 2020), several leg operations, repeated respiratory infections, Covid-19 twice, and a permanent pacemaker (2024), he never seriously considered abdicating. Asked by the press, he replied in essence that he stood by his constitutional oath – for life.</p>
          <p class="vb-intro">That is the SE1: not a publicly performed sense of duty, but a private, inwardly carried obligation that holds even when nobody demands it. His own body became a secondary concern for as long as the oath still had to be kept.</p>
        </blockquote>

        <h2 class="vb-section">3. The Nine Wing: Nine Years of Waiting Without a Fight</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Nine wing (w9)</strong> gives the self-preservation One something a SE1 with a more weakly developed Nine wing would not have to the same degree: the ability to hold quietly, without escalation but also without yielding, to a decision recognized as right. Harald met commoner Sonja Haraldsen in 1959. His father initially opposed the match firmly. Nine years followed – no open rupture, no scandal, just a quiet, immovable persistence, until in 1968 Harald declared he would either marry Sonja or no one. His father relented.</p>
          <p class="vb-intro">The same quality carried his nearly sixty-year passion for sailing: three Olympic appearances (1964, 1968, 1972), a World Championship gold in 1987 and bronze in 1988, founding president of the Norwegian Sailing Federation, active until 2022. Not a loud sport, but a single, quiet discipline tended across an entire lifetime – the Nine wing needs its anchor, and it found one on the water.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: Anger as Quiet Persistence</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the One is called <strong>anger</strong> – for the SE1w9 not as visible harshness, but as an unrelenting inner discipline nobody from outside notices. In Harald V this showed as the very opposite of severity: he was loved as the "grandfather of the nation," with quiet humor and a reassuring presence during the 1992 New Year's storm, the 2011 Utøya attacks, and the Covid-19 pandemic. The One's anger turned inward, against his own lapses – never outward, against others.</p>
          <p class="vb-intro">This pattern shows most clearly in his 2016 anniversary speech: "Norwegians are girls who love girls, boys who love boys... Norwegians believe in God, Allah, the Universe and nothing." No accusation, no confrontation – just the One's quiet moral insistence on naming what is right, carried by the Nine wing in a form that excluded no one.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Self-Preservation One</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SE1w9 is a constancy that holds for decades without pushing itself into the foreground. Harald V held the center of a country that transformed around him for thirty-five years – oil boom, EU debates, social liberalization, pandemic – without himself ever becoming a point of contention. When roughly 10,000 people lined Oslo's streets with flowers and flags on the day of his death, it showed how deeply this quiet reliability had taken hold.</p>
          <p class="vb-intro">The shadow of the SE1w9 lies in the fact that this inner sense of duty keeps going even when the body has long been asking for rest. Harald V could have stepped down at the latest after his second heart procedure in 2020, as other European monarchs did. He did not. The eagle stayed on its cliff until there was no other way left.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: The Eagle Who Never Left Its Post</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">King Harald V embodied the self-preservation One with a Nine wing in a form that shows striking parallels to <a href="#beruehmte-queen-elizabeth-ii">Queen Elizabeth II (SE1w9)</a>: an office held for life, filled to the very last breath; a public reserve never read as coldness but as reliability; a private anchor – for Elizabeth the corgis and Balmoral, for Harald the sailing and the nine patiently endured years before his own marriage.</p>
          <p class="vb-intro">After 35 years on the throne, his son Haakon succeeded him as king. The eagle has left its cliff – but the reliability he stood for is what an entire country will remember for a long time to come.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se1", label:"SE1 – The Eagle: Subtype Profile"},
        {route:"beruehmte-queen-elizabeth-ii", label:"Portrait: Queen Elizabeth II (SE1w9)"},
        {route:"beruehmte-sting", label:"Portrait: Sting (SE1w9)"},
        {route:"beruehmte-reinhold-messner", label:"Portrait: Reinhold Messner (SE1w9)"},
      ])}
    </div>
  `);
}

export function ninaDobrevPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-nina-dobrev-portrait.jpg" alt="Nina Dobrev – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Nina Dobrev</p>
        <p class="krim-portrait-typ">SO2w3 &middot; Social Type 2 with a Three-Wing</p>
        <p class="krim-portrait-subtitle">Actress, born 1989 – Animal correspondence: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Golden Retriever Who Held an Entire Set Together</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Golden Retriever</strong> is the animal of the Social Two: warm, irresistibly driven to win over an entire environment. Nina Dobrev was born in 1989 in Sofia, Bulgaria, and emigrated to Canada with her family at age two, growing up in Toronto. Her breakthrough came in 2009 as Elena Gilbert – and in a dual role as Katherine Pierce – in "The Vampire Diaries."</p>
          <p class="vb-intro">Already during her six years on set, she was publicly described as one of the most approachable, warmest figures of her generation in Hollywood – someone who felt deeply connected to fans and colleagues alike. The Golden Retriever does not seek the one exclusive bond, but the warmth of an entire circle.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Two: Indispensable to the Group, Not to One Person</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Social Two (SO2)</strong> seeks significance not in a single, exclusive relationship, but in its indispensability to a larger collective. Naranjo called this subtype <em>Ambition</em>: the drive to make oneself irreplaceable through service to an entire group. When her real-life relationship with co-star Ian Somerhalder ended during ongoing production, Dobrev managed to continue the professional collaboration and on-screen chemistry without visible fallout – a loyalty to the entire ensemble and production placed above the private disappointment.</p>
          <p class="vb-intro">Her public image is also marked by a strikingly large, tightly connected circle of friends from the film industry, with whom she regularly shares publicly visible outings. The Social Two feels strongest where it is noticeably important to an entire community – not in quiet togetherness with one person.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: Visible Success as Confirmation of One's Own Significance</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing</strong> gives the Social Two a goal-directed, achievement-oriented note. Dobrev deliberately left "The Vampire Diaries" in 2015 after the sixth season at the show's peak to pursue new projects and a film career, rather than settling for an already established role. Beyond acting, she invested in several companies, including the fashion brand Represent, building a second, entrepreneurial foothold for herself.</p>
          <p class="vb-intro">This combination of care for the group and visible, measurable success is typical of the SO2w3: significance arises not only through emotional closeness, but also through outwardly recognizable achievement that further underpins one's own indispensability.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: Pride as the Need to Matter to Everyone</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the Two is called <strong>pride</strong> – the conviction of being indispensable to the success of the whole. In Dobrev this shows in her intense, publicly visible engagement with her fan base: she is regarded as one of the most accessible celebrities on social media, regularly interacting directly with followers rather than maintaining distance.</p>
          <p class="vb-intro">This pride does not show as arrogance, but as a deeply rooted need to be noticeably present and important to as many people as possible at once – a drive that generates warmth, but also allows little pause from constant availability to others.</p>
        </blockquote>

        <h2 class="vb-section">5. The Crisis as a Mirror: Vulnerability Shared Publicly</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 2022, Dobrev suffered fractures to her spine in a dirt-biking accident. Rather than withdrawing to recover privately, she openly documented her healing process on social media – with photos from the hospital, honest accounts of setbacks, and a consistently positive, grateful tone toward her community.</p>
          <p class="vb-intro">From an Enneagram perspective, this is not mere openness, but the pattern's logic at work: for the Social Two, even one's own vulnerability remains an occasion to deepen the connection to the group rather than withdraw from it – even in a hospital bed, the community remains the point of reference.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: Warmth That Carried an Entire Fan Base</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Nina Dobrev remains one of the actresses whose greatest strength lies not in acting craft alone, but in the ability to emotionally carry an entire ensemble, a fan base, and a professional network all at once. From "The Vampire Diaries" to her entrepreneurial projects, the same pattern recurs: success always understood as a shared achievement of a community.</p>
          <p class="vb-intro">This is the Social Two with a Three-wing at its warmest: a Golden Retriever who does not seek its own significance in the one relationship, but in being noticeably indispensable to an entire environment.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so2", label:"SO2 – The Golden Retriever: Subtype Profile"},
        {route:"beruehmte-carl-weathers", label:"Portrait: Carl Weathers (SO2w3)"},
        {route:"beruehmte-will-smith", label:"Portrait: Will Smith (SO2w3)"},
        {route:"beruehmte-usain-bolt", label:"Portrait: Usain Bolt (SO2w3)"},
      ])}
    </div>
  `);
}

export function benBerndtPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ben-berndt-portrait.jpg" alt="Ben Berndt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ben Berndt</p>
        <p class="krim-portrait-typ">SE1w2 &middot; Self-Preservation One with a Two-Wing</p>
        <p class="krim-portrait-subtitle">Podcaster &amp; Entrepreneur, born 1984 &ndash; Animal correspondence: Eagle</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Eagle That Decrees Its Own Incorruptibility</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Ben Berndt, born in 1984 in Berlin, completed a dual degree in business administration with the airline Lufthansa and later a Master of Business Administration – a postgraduate, practice-oriented business degree – at EBS University of Business and Law – before building "ungeskriptet" into one of the most-listened-to German-language interview podcasts: multi-hour, largely uncut conversations with guests from politics, media, business, and society's margins. His own standard for the format reads like a self-imposed law: "raw, uncut, and uncensored – exactly as people really are."</p>
          <p class="vb-intro">This uncompromising stance – no coordination with guests beforehand, no editing afterward – is no accident but a self-set rule he holds himself to without exception. This is precisely the signature of the eagle of the Self-Preservation One: not demanding correctness from others, but imposing a principle on oneself and following it without compromise.</p>
        </blockquote>

        <h2 class="vb-section">2. Worry: One's Own Code of Honor as the Standard</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo called the Self-Preservation One <strong>Worry</strong> – an inner critic directed first at one's own lack of integrity. Berndt's own positioning – that he is "not a journalist, but a friendly host" – sounds modest, yet it marks a strict demand: he refuses to abuse either role, neither faking journalistic neutrality nor smoothing over the truth as a host.</p>
          <p class="vb-intro">His openly stated criticism, that many journalists consider themselves more neutral than they really are, reads like a One's typical demand for integrity – directed less at others than at his own commitment not to fall into that exact trap himself.</p>
        </blockquote>

        <h2 class="vb-section">3. The Two-Wing: The Friendly Host, Not the Detached Interviewer</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Two-wing (w2)</strong> shows in exactly this self-description as a "friendly host" rather than a detached questioner. A Self-Preservation One with a weakly developed two-wing – or even a Self-Preservation One with a nine-wing – would more likely insist on strict factual correctness and hold back more; the two-wing opens Berndt's format toward the personal, often hours-long closeness to the guest that sets "ungeskriptet" apart from classical interview journalism.</p>
          <p class="vb-intro">The same wing coloring – discipline and strict principle turned inward, warmth and personal closeness turned outward – appears in Anne Will (SE1w2): here too a self-imposed code of honor, combined with a motto of "asking personally" rather than merely reporting factually.</p>
        </blockquote>

        <h2 class="vb-section">4. From the Fight Ring to Calm: Worry No Longer Directed Outward</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Before his time as a podcaster, Berndt reportedly took part in an "illegal underground fight club" and was once knocked out in a fight – an experience that, in his own words, made him "calmer" and led him to stop trying to please everyone. This reads like the typical maturation path of the Self-Preservation One: from worrying about meeting outward expectations, toward a self-set, inwardly grounded standard.</p>
          <p class="vb-intro">Multiple countries, multiple ventures built (including the baby-carrier brand Rookie), several completed degrees, the fight ring – the same relentless discipline appears across entirely different areas of life, never as casual experimentation, but as repeated, serious proving of oneself against one's own standard.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Self-Preservation One with a Two-Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SE1w2 shows in Berndt's ability to offer guests a space in which they can open up for hours without filters – a rare combination of strict formal discipline (no editing, no coordination) and genuine personal warmth.</p>
          <p class="vb-intro">The shadow lies in the risk that the principle of leaving things uncut becomes an end in itself. One example is the more than four-hour 2026 conversation with the AfD politician Björn Höcke: there, Höcke was allowed to claim, uncontradicted, that the NSDAP's SA had no slogan. That is historically false. A final 2006 ruling by the Hamm Higher Regional Court holds "Alles für Deutschland" to be the SA's slogan – independently confirmed by museum and weapons-history documentation as well, since the SA service dagger introduced in 1933 carried exactly this inscription, etched into the blade. The claim also contradicts Höcke's own legal history: he was criminally convicted twice for publicly using that exact banned phrase. North Rhine-Westphalia's state media authority subsequently formally admonished Berndt to observe journalistic due-diligence obligations and to provide the missing correction.</p>
          <p class="vb-intro">Berndt's own response to this criticism is telling: he points out that he is not a journalist and speaks of censorship, rather than reconsidering his own rule in this specific case. The very same One's discipline that inspires so much trust in the light shows its flip side here: holding to a self-imposed law without exception also shields it from justified criticism – not only from unjustified criticism.</p>
          <p class="vb-intro">This is precisely the weak point of the "I'm not a journalist, just a host" principle: it presupposes an exceptionally media-literate audience that fact-checks every uncontested claim itself. How time-consuming the research behind just one single false statement can be becomes clear the moment one actually attempts it – most listeners have neither the time nor the means for that. A principle that admits no exception effectively shifts the entire burden of journalistic due diligence onto an audience that can barely carry it.</p>
        </blockquote>

        <h2 class="vb-section">6. The Eagle That Turned His Own Format Into a Code of Honor</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What remains is the image of a man who imposed a strict format law on himself – uncensored, uncut, uncoordinated – and has upheld it without compromise for years, entirely against the trend of editorially curated media formats.</p>
          <p class="vb-intro">From the fight club to Germany's most-listened-to interview podcast: the same inner discipline, minus the fists – the Self-Preservation One with a two-wing, who would rather fail by his own chosen standard than soften it.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se1", label:"SE1 – The Eagle: Subtype Profile"},
        {route:"beruehmte-anne-will", label:"Portrait: Anne Will (SE1w2)"},
        {route:"beruehmte-alain-delon", label:"Portrait: Alain Delon (SE1w2)"},
        {route:"beruehmte-christoph-waltz", label:"Portrait: Christoph Waltz (SE1w2)"},
      ])}
    </div>
  `);
}

export function joshSafdiePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-josh-safdie-portrait.jpg" alt="Josh Safdie" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Josh Safdie</p>
        <p class="krim-portrait-typ">SO7w6 &middot; Social Type 7 with Six-Wing</p>
        <p class="krim-portrait-subtitle">American director, writer, and producer, b. 1984 &ndash; Animal correspondence: Beaver</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Beaver Who Maps Entire Worlds</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>beaver</strong> is the animal of the social Seven: restless, systematic, always busy creating something larger that everyone is meant to benefit from in the end. Josh Safdie, born in 1984 in New York, became known together with his younger brother Benny as one half of the "Safdie Brothers" &ndash; with films like ›Good Time‹ (2017) and ›Uncut Gems‹ (2019) that show New York as a feverish, almost unbearably dense nervous-system landscape. Where <a href="javascript:void(0)" data-route="beruehmte-benny-safdie">his brother Benny</a> (SO4w5) withdraws into quiet, precise detail work, Josh pushes outward: into new milieus, new communities, new obsessions he wants to fully penetrate before filming them.</p>
          <p class="vb-intro">Together with Benny, he spent more than a decade researching New York's Diamond District before making ›Uncut Gems‹ &ndash; not out of academic interest, but because his father had worked there himself, and Josh wanted to know that world from the inside, complete with its own rules, its own language, its own logic.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Seven: Giving One's Own Fascination Back to the Community</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo describes the social Seven through the theme of <em>sacrifice</em>: instead of living out the desire for ever-new experience purely privately, it is put in the service of a larger cause or community &ndash; an idealistic head type who translates their thirst for knowledge into a project for others. That is exactly what Safdie's own explanation of his fascination with subcultures describes: they interested him because they were "usually indicative of a grander culture in some way in their rejection or in the rejection of their culture." That's not mere curiosity, but the attempt to immediately place the individual phenomenon within a larger societal context.</p>
          <p class="vb-intro">This translation of personal fascination into a project for a wider audience shows up consistently: the real street-drug scene around Arielle Holmes in ›Heaven Knows What‹, the bail-bondsman milieu in ›Good Time‹, now the table-tennis hustler world in ›Marty Supreme‹. Safdie even cast the Diamond District jewelers as themselves in the film &ndash; not to exploit their world, but to give it a stage with the greatest possible accuracy.</p>
        </blockquote>

        <h2 class="vb-section">3. The Six-Wing: Two Decades of Loyalty Instead of Constant New Alliances</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Six-wing</strong> shows up in Safdie not as reserve, but as the constancy of his closest bonds. With Ronald Bronstein, whom he met at SXSW in 2007, he still shares one of the central creative partnerships of his life &ndash; together they founded the production company Central Pictures, together they wrote and edited ›Good Time‹, ›Uncut Gems‹, and ›Marty Supreme‹. Actress Eleonore Hendricks, cinematographer Sean Price Williams, and actor Buddy Duress keep returning across multiple films &ndash; a kind of found family that has barely changed over almost two decades.</p>
          <p class="vb-intro">Where a socially oriented Seven with an Eight-wing would rather conquer and dominate new alliances, Safdie seeks the reliable, deeply rooted bond with a fixed circle of trusted people &ndash; security through continuity, not through constantly changing new relationships.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: The Hustle That Starts to Own You</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the Seven is called <strong>gluttony</strong> &ndash; the restless grasping for ever more experience, ever new possibilities, out of fear of missing out. About his 2025 film ›Marty Supreme‹, Safdie himself said: "It's about a kid who thinks he's in control of the hustle &ndash; until he realizes the hustle owns him." That's a rare, open self-reflection about one's own trap: the restless expenditure that was supposed to serve one's own expansion at some point tips over into a compulsion that takes on a life of its own.</p>
          <p class="vb-intro">On the set of ›Marty Supreme‹, Safdie is said to have confiscated a crew member's phone because they were live-posting during a scene &ndash; his instruction: "Get in the scene. Stop documenting your life and start living it." That, too, is typical Seven logic: the permanent mental distance created by documentation, planning, and looking ahead is meant to be overcome in favor of fully, unrestrainedly immersing oneself in the moment.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Social Seven with a Six-Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO7w6 shows in how Safdie doesn't keep his fascination with overlooked American subcultures to himself, but invests years of relationship-building to bring them to the screen with dignity &ndash; the jewelers of the Diamond District became friends, not just research subjects, and remained so after filming wrapped.</p>
          <p class="vb-intro">The shadow lies in the flip side of that same intensity: the willingness to go to real limits for the larger truth of a scene has repeatedly led to controversial incidents on set &ndash; former collaborators have criticized that the pursuit of authenticity came "at too high a cost." In its shadow side, the social Seven easily confuses its own mission with the right to demand too much of others in service of that mission.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: Two Brothers, Two Paths Through the Same City</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">For over a decade, Josh Safdie was publicly inseparable from his brother Benny. In 2024 the two split professionally &ndash; by their own account amicably, as "a natural progression of what we each want to explore." With ›Marty Supreme‹ (2025), Josh directed alone for the first time since ›The Pleasure of Being Robbed‹ (2008), earning four Academy Award nominations &ndash; almost simultaneously with Benny's own solo outing, ›The Smashing Machine‹, which won him the Silver Lion in Venice.</p>
          <p class="vb-intro">Two brothers, who came from the same New York, the same shared childhood split between Queens and Manhattan, and who made films together for over a decade &ndash; and who, in the end, fanned out into two very different Enneagram patterns: Benny's quiet, withdrawn obsession with detail as a social Four, against Josh's outward-facing, community-building restlessness as a social Seven. Both truly found their own voice only once they stopped searching for it together.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so7", label:"SO7 – The Beaver: Subtype Profile"},
        {route:"beruehmte-benny-safdie", label:"Portrait: Benny Safdie (SO4w5) – the brother Josh co-directed with for over a decade"},
        {route:"kriminalpsychologie-frank-abagnale-jr", label:"Criminal psychology portrait: Frank Abagnale Jr. (SO7w6)"},
      ])}
    </div>
  `);
}

export function guntherVonHagensPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-gunther-von-hagens-portrait.jpg" alt="Gunther von Hagens" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Gunther von Hagens</p>
        <p class="krim-portrait-typ">SX1w9 &middot; Sexual Type 1 with Nine-Wing &middot; Countertype of One</p>
        <p class="krim-portrait-subtitle">Anatomist, inventor of plastination, 1945&ndash;2026 &ndash; "Body Worlds," "Dr. Death" &ndash; Animal correspondence: Black Mamba</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Black Mamba Under the Hat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Gunther von Hagens was born in 1945 as Gunther Liebchen near Posen. In 1977, while working at the University of Heidelberg, he invented plastination – a process that replaces bodily fluids and fats in biological tissue with reactive polymers, permanently preserving specimens odorlessly and without loss of shape. In 1993 he founded the Institute for Plastination in Heidelberg, and in 2006 the Plastinarium in Guben. His touring exhibition "Body Worlds," first shown in Tokyo in 1995, drew more than 58 million visitors worldwide by the time of his death in 2026.</p>
          <p class="vb-intro">The <strong>black mamba</strong> is the animal of the sexual One – fast, precise, uncompromising once it has committed to something. Von Hagens's trademark was his hat, which, by his own account and his wife Angelina Whalley's, he never took off – a deliberate symbol of being different, modeled on the hat-wearing anatomists of the Renaissance and evoking <a href="javascript:void(0)" data-route="beruehmte-joseph-beuys">Joseph Beuys</a> (SX1w9) – von Hagens himself named Beuys's felt hat as one of his models, see the <a href="javascript:void(0)" data-route="beruehmte-joseph-beuys">portrait of Joseph Beuys</a>. Not a random accessory, but a daily, publicly visible declaration of war against convention.</p>
          <p class="vb-intro">The very same unmistakable black hat, worn daily and never taken off, is also the signature of <a href="javascript:void(0)" data-route="beruehmte-udo-lindenberg">Udo Lindenberg</a> (also SX1w9) – for both, the hat isn't a fashion detail but a daily, publicly visible assertion of their own nonconformity. More in the <a href="javascript:void(0)" data-route="beruehmte-udo-lindenberg">portrait of Udo Lindenberg</a>.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual One: Zeal Against the Taboo of Death</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sexual One (SX1)</strong> is the One's countertype – the subtype that looks least like controlled adherence to principle, yet lives it most intensely. Naranjo called this subtype <em>Zeal</em>: a burning urge to stand up for one's own truth, less filtered than in the other One subtypes. Von Hagens lived this in its purest form: "Controversies are a sign that my work touches people, makes them think, and sparks discussions – that was my goal from the beginning," he said of the resistance his work provoked.</p>
          <p class="vb-intro">In November 2002 he performed Britain's first public autopsy in 170 years before 500 spectators and a television crew in London – despite an explicit threat of prosecution and police action from the government's anatomy overseer, Jeremy Metters. Von Hagens went ahead with the autopsy anyway. That's SX1 zeal in its purest form: one's own conviction isn't up for negotiation, even when the law and the police explicitly threaten otherwise.</p>
        </blockquote>

        <h2 class="vb-section">3. The Nine-Wing: Decades of Building Instead of a Single Provocation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Nine-wing (w9)</strong> gives the sexual One a peculiar breadth and stamina: instead of exhausting itself in a single spectacular act, the zeal widens into decades of systematic institution-building. Von Hagens didn't stop at the one spectacular London autopsy – over nearly fifty years he built an institute, his own plastination plant in Guben, a global body-donation program with over 16,000 registered donors at the end, and an exhibition that toured the world continuously.</p>
          <p class="vb-intro">His public handling of his own Parkinson's disease shows the same w9 breadth: instead of withdrawing, he publicly announced the diagnosis and kept working as long as he could – persistence across decades rather than a single loud gesture.</p>
        </blockquote>

        <h2 class="vb-section">4. The Actual Achievement: A Chemical Invention That Democratized Anatomy</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What distinguishes von Hagens professionally is not mere showmanship, but a genuine technical-chemical invention: plastination replaces water and fat in tissue, through a multi-stage vacuum process, with reactive silicones, epoxy resins, or polyesters that then harden. The result is odorless, indefinitely durable anatomical specimens – an innovation that changed medical education worldwide long before the first "Body Worlds" visitors ever heard of it.</p>
          <p class="vb-intro">The real achievement lies in bringing this specialist technique out of the lecture hall and into the public exhibition space: 58 million people thereby saw real human anatomy they would otherwise never have laid eyes on – a democratization of anatomical knowledge on a scale no anatomist had ever achieved before.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Sexual One with Nine-Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX1w9 shows in deliberately breaking a social taboo – the direct sight of the dead body – to make scientific education accessible to millions who would otherwise never have had access to it.</p>
          <p class="vb-intro">The One's fatal flaw is <strong>anger</strong> – least filtered in the sexual One. In 2004, von Hagens had to return seven corpses to China after evidence mounted that they might have been executed prisoners; he firmly rejected broader accusations of unclear body origins, pointing to over 13,000 registered body donors, mostly from Germany and the US. The major churches spoke of undignified treatment of the deceased, and the cities of Augsburg and Cologne banned him from depicting sexual scenes with corpses. Von Hagens responded to all of this not with withdrawal or self-doubt, but with unyielding defense of his own position – the characteristic SX1 refusal to compromise, which barely treats even legitimate ethical concerns as reason for a course correction.</p>
        </blockquote>

        <h2 class="vb-section">6. The Healing Path: One's Own Body as the Final Consequence</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The One's healing path leads from the conviction <em>Only what is absolutely correct counts</em> to the insight <em>I am allowed to be imperfect and still good.</em> In von Hagens, this path takes a particular turn: he publicly announced his own terminal illness and openly planned to have his own body plastinated and exhibited after his death – the final, radically consistent union of teaching and his own life. His family, above all his wife Angelina Whalley, has confirmed that they intend to honor this wish; since fully plastinating a human body takes months to years, however, a finished, publicly displayed specimen should not be expected any time soon.</p>
          <p class="vb-intro">According to his wife Angelina Whalley, he wanted to enable people "to look under the skin – not for sensationalism, but from the deep conviction that knowledge about one's own body can contribute to a more conscious, healthier, and more responsible life." A revealing comparison within the same subtype is <a href="javascript:void(0)" data-route="beruehmte-michel-foucault">Michel Foucault</a> (SX1w9): he too shows the same uncompromising zeal in defending his own truth against established institutions – in Foucault's case in the archive, in von Hagens's case in the dissection hall. More in the <a href="javascript:void(0)" data-route="beruehmte-michel-foucault">portrait of Michel Foucault</a>.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx1", label:"SX1 – The Black Mamba: Subtype Profile"},
        {route:"beruehmte-michel-foucault", label:"Portrait: Michel Foucault (SX1w9)"},
        {route:"beruehmte-klaus-kinski", label:"Portrait: Klaus Kinski (SX1w9)"},
        {route:"beruehmte-marie-agnes-strack-zimmermann", label:"Portrait: Marie-Agnes Strack-Zimmermann (SX1w9)"},
        {route:"beruehmte-udo-lindenberg", label:"Portrait: Udo Lindenberg (SX1w9) – the same hat, the same principle"},
      ])}
    </div>
  `);
}

export function viktorFranklPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-viktor-frankl-portrait.jpg" alt="Viktor Frankl – portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Viktor Frankl</p>
        <p class="krim-portrait-typ">SP1w9 &middot; Self-Preservation Type 1 with Nine-Wing</p>
        <p class="krim-portrait-subtitle">Psychiatrist, neurologist, and founder of logotherapy, 1905&ndash;1997 &ndash; Animal correspondence: Eagle</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Eagle who climbed to its height in silence</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Eagle</strong> flies alone and holds itself to high standards – standards aimed at itself, not at others. Viktor Frankl, born in Vienna in 1905, was already running free youth counseling centers by 1928–1930 that drove Vienna's teen suicide rate during report-card season down to zero. From 1933 to 1937 he ran the women's suicide-prevention pavilion at Vienna's Am Steinhof psychiatric hospital, treating roughly 3,000 patients a year – a quiet, concrete practice long before his name became known worldwide.</p>
          <p class="vb-intro">After the 1938 Anschluss, he took over neurology at Vienna's Rothschild Hospital, the last institution still permitted to treat Jewish patients – and, at mortal risk, falsified diagnoses there to protect patients from Nazi "euthanasia." No public resistance, no gesture meant for an audience: a private, dangerous act of consequence that needed no witness to matter.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation One: finding meaning instead of proclaiming it</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation One (SP1)</strong> directs its perfectionism not at public correctness but at its own, mostly unwitnessed way of living. Naranjo called this subtype <em>worry</em> – concern with doing the right thing in very practical terms. In Frankl, this shows in how his core conviction – that people find meaning rather than invent it – never stayed abstract philosophy but was translated into concrete clinical technique: paradoxical intention and dereflection, both still used in behavioral therapy today.</p>
          <p class="vb-intro">In 1944 he was deported to Auschwitz; the 250-page manuscript of his logotherapy theory, which his wife Tilly had sewn into the lining of his coat, was confiscated on arrival. Rather than mourning the loss, Frankl reconstructed the theory from memory – first on stolen scraps of paper in the camp, then, after liberation, as a complete book. Nine months after his liberation, he dictated "Man's Search for Meaning" in just nine days.</p>
        </blockquote>

        <h2 class="vb-section">3. The Nine-Wing: conviction without a pulpit tone</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Nine-wing</strong> softens the One's sharp, publicly corrective edge and replaces it with a calm, humor-tempered composure. Frankl explicitly understood humor as a tool of inner distancing, not a stage performance – a skill he cultivated even in the camps, so as not to be entirely at the mercy of his own suffering. Colleagues and students consistently described him as a serious, warm clinician and teacher, not as a dramatic public performer.</p>
          <p class="vb-intro">This same restraint showed in his private life in the mountains: his second wife Eleonore recalled that while climbing he was "just Viktor" – a genuine friend among equals, not an exceptional figure who needed to demonstrate his own importance. At 67 he still earned his pilot's license; past 80 he kept climbing mountains – quiet, physical discipline that had nothing to prove to anyone.</p>
        </blockquote>

        <h2 class="vb-section">4. Professional substance: the Third Viennese School of psychotherapy</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Frankl's real professional achievement lies in the methodological rigor with which he distinguished logotherapy from mere self-help philosophy. As the "Third Viennese School" after Freud's will to pleasure and Adler's will to power, he posited the will to meaning as the primary human drive – while insisting, with clinical precision, that meaning has to be found, in work, love, or unavoidable suffering, not invented at will. This distinction sharply separated his approach from a purely relativist existentialism.</p>
          <p class="vb-intro">His work was no single achievement of his middle years: he kept teaching into old age at universities from Vienna to Harvard and Stanford, continuously publishing new books and lectures across decades – a disciplined, sustained professional practice, not a one-time stroke of genius.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and shadow of the self-preservation One with Nine-wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP1w9 shows in Frankl's ability not to preach an existential conviction but to live it out in his own, verifiable practice – from falsifying diagnoses at Rothschild Hospital to decades of daily clinical work. His second marriage to the practicing Catholic Eleonore, in which synagogue and church, Christmas and Chanukah stood side by side as equals, shows the same undogmatic, unshowy consistency in his private life.</p>
          <p class="vb-intro">The One's shadow shows in the quiet severity with which one's own standards had to be upheld even under the most extreme pressure – Frankl lost his first wife Tilly, his parents, and his brother in the Holocaust, while surviving four different camps himself. That he developed an entire school of therapy out of exactly this experience, rather than being broken by it, expresses the pattern just as much as its risk: the compulsion to keep finding meaning even in the greatest suffering.</p>
        </blockquote>

        <h2 class="vb-section">6. The healing path: from quiet standard to settled certainty</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The One's healing path leads from anger to serenity – from the question <em>Am I living rightly enough?</em> to the insight <em>My standard for myself needs no audience to be true.</em> Frankl lived out this maturity into old age: he died in 1997 at 92, having held to the same practical conviction his entire life without ever turning it into a loud mission.</p>
          <p class="vb-intro">A revealing comparison is <a href="javascript:void(0)" data-route="beruehmte-reinhold-messner">Reinhold Messner</a> (SP1w9) – he too combines physical discipline into old age with a public restraint that never turns his own standard into a show. More in the <a href="javascript:void(0)" data-route="beruehmte-reinhold-messner">portrait of Reinhold Messner</a>.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
        </blockquote>

      </div>
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se1", label:"SP1 – The Eagle: Subtype Profile"},
        {route:"lebensmusterkompass/se1", label:"Life Pattern Compass: SP1 – Eagle"},
        {route:"beruehmte-reinhold-messner", label:"Portrait: Reinhold Messner (SP1w9)"},
        {route:"beruehmte-robert-de-niro", label:"Portrait: Robert De Niro (SP1w9)"},
        {route:"beruehmte-anthony-hopkins", label:"Portrait: Anthony Hopkins (SP1w9)"},
      ])}
    </div>
  `);
}

export function raulAguayoKrauthausenPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-raul-aguayo-krauthausen-portrait.jpg" alt="Raúl Aguayo-Krauthausen" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Raúl Aguayo-Krauthausen</p>
        <p class="krim-portrait-typ">SE6w7 &middot; Self-Preservation Type 6 with a Seven Wing</p>
        <p class="krim-portrait-subtitle">b. 1980 – disability rights activist, co-founder of Wheelmap.org and Sozialhelden e.V. – Animal correspondence: Rabbit</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Rabbit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>rabbit</strong> is the animal of the self-preservation Six – vigilant to the point of exhaustion, constantly checking whether the immediate surroundings are safe, and happiest in a familiar, reliably secured burrow. Raúl Aguayo-Krauthausen, born in Lima in 1980 and raised in Berlin, has known this vigilance firsthand since childhood: he lives with osteogenesis imperfecta (brittle bone disease) and has suffered more than a hundred bone fractures over the course of his life – any unsecured environment is, for him, literally a potential danger, not just an uneasy feeling.</p>
          <p class="vb-intro">Out of this very concrete, physically enforced vigilance grew not paralysis but one of Germany's most effective disability-inclusion movements: in 2004 he co-founded the nonprofit Sozialhelden e.V. – a fixed, reliable circle of collaborators that remains the organizational home of his work to this day.</p>
        </blockquote>

        <h2 class="vb-section">2. The actual achievement: safety as mapped infrastructure</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">It would fall short to attribute Aguayo-Krauthausen's impact solely to his public presence as an activist. In 2010, together with Sozialhelden, he launched Wheelmap.org – a globally usable map, built on OpenStreetMap, on which users can mark the wheelchair accessibility of places. The very personal question "Can I even get in there?" became a concrete, technical tool that today lists hundreds of thousands of locations worldwide – safety that is not merely hoped for, but actually mapped and thereby made verifiable.</p>
          <p class="vb-intro">In parallel, he founded Leidmedien.de, a project that gives journalists concrete language guidelines for respectful, non-stigmatizing reporting on disability – by now an established reference in German newsrooms. In 2011, at just 31, he received the Order of Merit of the Federal Republic of Germany for this work, one of the country's highest honors for civic engagement.</p>
        </blockquote>

        <h2 class="vb-section">3. The self-preservation Six: security through verifiable structures</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation Six (SE6)</strong> is, according to Naranjo, the subtype he called <em>Warmth</em> – security here arises not through control over the whole world, but through carefully securing one's own immediate surroundings. In Aguayo-Krauthausen, however, this pattern expands logically: his own physical vulnerability made him vigilant not only for his own safety, but for that of everyone who depends on reliable, verified information about accessible places.</p>
          <p class="vb-intro">Wheelmap is perhaps the most consistent SE6 solution imaginable: instead of relying on vague assurances, the safety of an environment is collectively checked, documented, and thereby made reliable by a community – each single map point a small, verifiable certainty in a world that often remains unpredictable for people with disabilities.</p>
        </blockquote>

        <h2 class="vb-section">4. The Seven wing: humor as a tool against heaviness</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Seven wing (w7)</strong> gives the self-preservation Six a characteristic lightness: the impulse to turn one's own vulnerability not into gloom but into pace, wit, and an almost tireless variety of projects. Aguayo-Krauthausen is known for his pointed, often self-deprecating humor about his own body and his own disability – a deliberate strategy to lower the other person's apprehension rather than invite pity.</p>
          <p class="vb-intro">The same Seven-energy shows in the sheer number of his projects: books, his own podcast, talks, columns, an active social media presence – there is hardly a format he is not active in. The Seven wing drives him to pick up the next topic before the weight of any single one can settle in.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and shadow of the self-preservation Six</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SE6w7 shows in Aguayo-Krauthausen's ability to build, out of a very personal, physically enforced vigilance, an infrastructure that benefits hundreds of thousands of people he will never personally meet. The fear of an inaccessible, dangerous environment was not repressed but transformed into a verifiable, collectively maintained tool.</p>
          <p class="vb-intro">The shadow of the Seven wing lies in the risk that constant movement toward ever-new projects makes true stillness harder to reach – that humor and pace can also serve as a shield that papers over real exhaustion or pain more easily than it allows it. How much room remains for exactly that pause in the everyday life of someone this consistently active is a question that keeps resurfacing with the SE6w7.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from clinical practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se6", label:"SP6 – The Rabbit: Subtype Profile"},
        {route:"beruehmte-woody-allen", label:"Portrait: Woody Allen (SP6w7)"},
        {route:"beruehmte-beatrice-chebet", label:"Portrait: Beatrice Chebet (SP6w7)"},
      ])}
    </div>
  `);
}
