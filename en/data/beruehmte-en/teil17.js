import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft, animalResearcherMatchBlock } from "../../bundle.js";

export function claraLoeselPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-clara-loesel-portrait.jpg" alt="Clara Lösel" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Clara Lösel</p>
        <p class="krim-portrait-typ">SX6w5 · Sexual Type 6 with a Five-Wing</p>
        <p class="krim-portrait-subtitle">Poet, author, b. 1999/2000 – Spiegel bestselling author of "Wehe du gibst auf" – Animal correspondence: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The wolf who says her fear out loud</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Clara Lösel, from Gießen, found an unusual path to literary public life with a completed teaching degree and her work as a poet: through short, pointed poetry performances on Instagram and TikTok. With her project "100 Gedichte in 100 Tagen" ("100 Poems in 100 Days"), she publicly committed herself to a strict daily writing discipline – no spontaneous occasional poetry, but a self-imposed, consistently maintained system.</p>
          <p class="vb-intro">The <strong>wolf</strong> is the animal of the sexual Six – an animal that responds to threat not with withdrawal but with confrontation. Today Lösel reaches around two million people monthly across her channels; her debut, "Wehe du gibst auf" ("Don't You Dare Give Up"), reached number 1 on the Spiegel bestseller list. About the hate comments she regularly receives, she herself says: "Hate comments sometimes scare me. But I won't let hateful people silence me."</p>
        </blockquote>

        <h2 class="vb-section">2. The sexual Six: fear spoken publicly instead of hidden</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">According to Naranjo, the <strong>sexual Six (SX6)</strong> meets insecurity not with adaptation or withdrawal but with direct, often uncompromising confrontation of the fear itself. Lösel's poems explicitly circle around self-doubt, the feeling of being "too much," loneliness, and hopelessness – themes she does not discreetly conceal but speaks aloud on open stages in front of an audience of millions.</p>
          <p class="vb-intro">Her own handling of hate comments shows the same movement: the fear is named, not denied – and it is precisely from that naming that the refusal to be silenced arises. This is the classic SX6 dynamic: it is not the absence of fear that makes one strong, but the open confrontation with it, in public and without varnish.</p>
        </blockquote>

        <h2 class="vb-section">3. The five-wing: discipline as the foundation of stage presence</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>five-wing</strong> shows in Lösel in the almost systematic structure of her work: "100 Gedichte in 100 Tagen" is no spontaneous creative project but a self-imposed, methodically maintained set of rules – a daily discipline that goes far beyond occasional inspiration. The same structure shows in that, alongside her poetry, she also appears as a speaker and workshop leader, deliberately teaching techniques of speaking and writing rather than practicing her craft purely by intuition.</p>
          <p class="vb-intro">The five-wing thus gives the sexual Six the scaffolding with which she carries her public appearances – not from raw stage presence alone, but from a worked-out, repeatable method that also gives structure to her handling of fear itself.</p>
        </blockquote>

        <h2 class="vb-section">4. The actual achievement: a new stage for poetry</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Lösel's concrete contribution lies in making poetry – a traditionally marginal literary genre – accessible to a social-media audience of millions without sacrificing substance. Her short form, born from the technical limits of Instagram and TikTok, compresses complex emotional states into a few pointed lines – a distinct craft form clearly different from classic book poetry, yet taken seriously as literature, evidenced by several literary awards and her first book reaching number 1 on the Spiegel bestseller list.</p>
          <p class="vb-intro">This is not a matter of reach alone: she has opened a new access to poetic language for an entire generation that often does not feel addressed by classic poetry – through themes drawn directly from that generation's own everyday life and its own fears.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and shadow of the sexual Six with a five-wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX6w5 shows in Lösel's ability to develop, out of her own publicly admitted insecurity, a voice that gives others the feeling of not being alone with their fears. Her unsparing directness – about heartbreak, toxic comments, the feeling of never being enough – strikes a genuine nerve with a broad, young audience.</p>
          <p class="vb-intro">The shadow lies in the flip side of that same willingness to confront: the constant public engagement with hate and criticism, which she consciously does not withdraw from, is an ongoing strain she openly acknowledges. For the sexual Six with a five-wing, speaking the fear aloud counts for more than self-protection through retreat – even when that demands a high personal price.</p>
        </blockquote>

        <h2 class="vb-section">6. The path to healing: from fear to one's own voice</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Six's path to healing leads from the conviction <em>I cannot trust anyone, least of all myself</em> to the insight <em>I carry my own inner guidance within me.</em> For the SX6w5, that means no longer treating its own fear only as a declaration of war, but as something that may be heard and then released, instead of having to be constantly reaffirmed.</p>
          <p class="vb-intro">The title of her debut, "Wehe du gibst auf," is itself already a movement in that direction: not a denial of fear, but a defiant, encouraging exhortation – to others as much as to herself – to keep going despite the fear, rather than being paralyzed by it.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx6", label:"SX6 – The Wolf: Subtype Profile"},
        {route:"beruehmte-natalie-dormer", label:"Portrait: Natalie Dormer (SX6w5)"},
        {route:"beruehmte-bobby-fischer", label:"Portrait: Bobby Fischer (SX6w5)"},
      ])}
    </div>
  `);
}

export function anaSalcedaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ana-salceda-portrait.jpg" alt="Ana Salceda – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ana Salceda</p>
        <p class="krim-portrait-typ">SX9w1 &middot; Sexual Type 9 with One-wing</p>
        <p class="krim-portrait-subtitle">Journalist &amp; filmmaker &ndash; director of "A Sloth Named Velcro" (PBS Nature, 2014) &ndash; Animal correspondence: Sloth</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Sloth</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sloth</strong> is the animal of the sexual Nine &ndash; an animal defined not by activity, but by complete devotion to the one being it clings to. Ana Salceda, a Spanish print and television journalist, moved to Panama in 2000 &ndash; and, with no intention of doing so, became the caregiver of an orphaned baby pygmy sloth she named "Velcro," because it clung to her the way velcro sticks together.</p>
          <p class="vb-intro">Unlike the other animal-researcher portraits in this compass, Salceda is not a scientist and does not claim to be a research authority. Her case is placed deliberately outside that series &ndash; as a standalone, remarkable example of the same archetypal principle showing up outside of science entirely: a woman who, purely personally and with no professional intention, fell into a merging relationship with a single sloth &ndash; and turned it into an award-winning film.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Nine: Merging as a Way of Life</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">According to Naranjo, the <strong>sexual Nine (SX9)</strong> does not seek belonging to a group, but complete merging with a single beloved counterpart. For nearly two years, Salceda literally carried Velcro on her body without interruption &ndash; for the young animal's thermoregulation, but also as a daily, physical closeness that went far beyond ordinary caregiving. She later described the bond in words that show the SX9 in its purest form: "Velcro taught me to appreciate silence, to see nature from the inside out." And: "It was one of the best things that ever happened to me."</p>
          <p class="vb-intro">This language &ndash; silence, merging, immersion into the inner rather than distant observation &ndash; almost exactly echoes what Craig Foster (SX9w1) said about his octopus, or Jane Goodall (SX9w1) about her first trusted chimpanzee, David Greybeard. Not the species, but the one individual being stands at the center &ndash; that is the sexual, not the social or self-preservation, instinctual variant.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-Wing: Personal Experience Becomes Responsibility</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">An SX9 with a more muted One-wing would likely have left the experience with Velcro as a private, personal episode. In Salceda, it instead became a mission: when the time came to release Velcro back into the wild, Salceda stayed committed to the subject, returning years later to Central America to document how the situation for sloths had changed since Velcro entered her life &ndash; and who was now working to protect them.</p>
          <p class="vb-intro">The result, in 2014, was the PBS Nature documentary "A Sloth Named Velcro" &ndash; filmed in Panama, Costa Rica, and Colombia, with an IMDb rating of 8.5. The film tells not only her own story but that of an entire network of people devoted to protecting sloths. This translation of a deeply personal bond into a careful, publicly researched narrative is the signature of the One-wing: private experience becomes an obligation one sees through with seriousness and precision.</p>
        </blockquote>

        <h2 class="vb-section">4. A Case Outside Science &ndash; and Still Consistent</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Salceda's example shows that the match between animal correspondence and life's work is not limited to academic research careers. She did not become a sloth expert because she planned or studied it &ndash; she became one because, following her own archetypal pattern, she gave herself completely to a single being, and then pursued that experience with the same inner seriousness that characterizes the One-wing.</p>
          <p class="vb-intro">This case is deliberately not mixed in with this compass's scientist animal-researcher portraits, but honored as a standalone, joyful example: another, independent confirmation of the same archetypal principle, this time outside of science.</p>
        </blockquote>

        <h2 class="vb-section">5. The Sloth That Clung to a Human &ndash; and Vice Versa</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Ana Salceda's story shows the sexual Nine with a One-wing in its most personal form: not a planned career, but a chance, deeply personal merging with a single animal that, over the years, turned into a serious, responsible narrative.</p>
          <p class="vb-intro">The sloth clings to what is close to it, and moves slowly, but with complete devotion. That is exactly what Salceda did &ndash; and in doing so, became something of a sloth herself, in a figurative sense: slow, devoted, unshakeably loyal to the one being that changed her life.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
          ${bookTip("enneagramm-zoo", "27 Animal Portraits – each Subtype animal with character, biology and Enneagram connection.", "Enneagramm-Zoo")}
          ${bookTip("archetypen-der-tiere-im-enneagramm", "The archetypal animals of the 9 types as an inner map – images that work instantly.", "Archetypen der Tiere im Enneagramm")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
          {route:"subtype/sx9", label:"SX9 – The Sloth: Subtype Profile"},
          {route:"beruehmte-jane-goodall", label:"Portrait: Jane Goodall (SX9w1)"},
          {route:"beruehmte-craig-foster", label:"Portrait: Craig Foster (SX9w1)"},
          {route:"beruehmte-lucy-cooke", label:"Portrait: Lucy Cooke (SX9w8) – also a sloth correspondence"},
          {route:"tierforscher-uebereinstimmung", label:"Animal-Researcher Correspondence: more examples"},
        ])}
        ${animalResearcherMatchBlock("beruehmte-ana-salceda")}
      </div>
    </div>
  `);
}

export function baerbelBasPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-baerbel-bas-portrait.jpg" alt="Bärbel Bas" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Bärbel Bas</p>
        <p class="krim-portrait-typ">SP9w1 &middot; Self-Preservation Type 9 with One-wing</p>
        <p class="krim-portrait-subtitle">Politician, President of the Bundestag since 2021, born 1968 &ndash; Animal correspondence: Elephant</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Elephant</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Elephant</strong> is the animal of Type 9 &ndash; and few images fit Bärbel Bas better. The elephant is not a spectacle animal. It is not a vanity animal. It is an animal of endurance, memory, and the quiet presence that cannot be overlooked, even when one tries. The elephant needs no noise to have an effect &ndash; its mere presence changes the room.</p>
          <p class="vb-intro">The German politician Bärbel Bas has exactly this quality. The President of the Bundestag from Duisburg is not a politician who stands out through grand gestures. She is one who works through reliability, through fairness, through the persistent effort to maintain order in a chamber that has grown increasingly restless. The elephant guards the herd. Bärbel Bas guards the parliament.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Nine: Appetite</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Self-Preservation Nine (SP9)</strong> is what Naranjo called <em>Appetite</em>: the SP9 seeks peace and persistence through the body &ndash; through rhythm, routine, familiarity, through enjoying the small, safe things in life. She is not a climber and not a revolutionary. She is someone who knows her place, knows her task, and fulfils this task with quiet consistency.</p>
          <p class="vb-intro">Bärbel Bas embodies this energy in German politics: growing up in Duisburg-Walsum as the daughter of a working-class family, trained as a health insurance specialist, active in health policy for years &ndash; without glamorous career leaps, without media staging. The SP9 works. She works steadily, reliably, and without fuss &ndash; and suddenly she is where no one expected her.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-wing: The Duty to Form</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>One-wing</strong> gives the Self-Preservation Nine a special quality: a sense of order, of what is right, of the form that first makes content possible. The <strong>SP9w1</strong> is not only patient &ndash; she is also true to principles. She tolerates no arbitrariness, no chaos born of convenience, no injustice that could simply be overlooked.</p>
          <p class="vb-intro">As President of the Bundestag, Bärbel Bas has shown this wing clearly. She chairs the parliament with quiet firmness, intervenes when the limits of acceptable speech are crossed, and insists on the rules of the chamber &ndash; not out of pedantry, but because she knows that without form no genuine debate is possible. The One-wing gives her the courage to say: this far and no further.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: Inertia as Protection</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the Nine is called <strong>Inertia</strong> &ndash; but not in the sense of laziness. It is an inner inertia, a tendency to stay with the existing, an inclination to overlook one's own will and one's own needs so as not to endanger the peace. The Nine does not sleep. She slumbers &ndash; and waits for the moment to come when she wakes.</p>
          <p class="vb-intro">In Bärbel Bas the overcoming of this inertia shows itself in her political path: it took a long time before she stepped into the foreground. Decades of quiet work, until 2021 brought the step to the top of the Bundestag &ndash; an office she did not seek, but which she fills with a consistency that shows that the Nine, once awakened, can be unshakeable.</p>
        </blockquote>

        <h2 class="vb-section">5. The Gift: The Silence That Binds</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What Bärbel Bas has brought to the office of President of the Bundestag is something that has become rare: the ability to treat everyone equally. Not as an abstract principle, but as a lived attitude. She is not a party politician at the podium &ndash; she is the host of the chamber. She listens before she speaks. She weighs before she decides.</p>
          <p class="vb-intro">The gift of the SP9w1 is this integrating force: the ability to hold together people who actually want to drift apart, and to give discourse a framework within which it can take place at all. The elephant remembers everything. It forgets no injustice &ndash; but it does not make a scene about it every day. It carries. Quietly, persistently, and without needing applause.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se9", label:"SP9 – The Elephant: Subtype Profile"},
        {route:"kriminalpsychologie-alfons-schuhbeck", label:"Portrait: Alfons Schuhbeck (SP9w1)"},
      ])}
    </div>
  `);
}

export function buddhaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-buddha-portrait.jpg" alt="Siddhartha Gautama (Buddha)" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Siddhartha Gautama (Buddha)</p>
        <p class="krim-portrait-typ">SO5w4 &middot; Social Type 5 with Four-wing</p>
        <p class="krim-portrait-subtitle">Religious founder, c. 563&ndash;483 BCE &ndash; Founder of Buddhism &ndash; Animal correspondence: Octopus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Octopus Who Wanted to Hold a Knowledge for Everyone</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>octopus</strong> is the animal of the social Five &ndash; a creature that does not linger in solitude but carries its gathered knowledge out into the world with several reaching arms at once, until it becomes a system many can carry. No accidental animal for a man who left his palace, his wife, and his newborn son to dissect a single question with cutting rigor: What is the cause of suffering? No prayer, no offering, no devotion to a creator god &ndash; but a radical, almost clinical analysis of reality as it is.</p>
          <p class="vb-intro">Siddhartha Gautama, born a prince of a small kingdom in what is now the border region of India and Nepal, turned away from security, status, and family at the age of 29. For six years he passed through the most extreme schools of his time &ndash; first with the greatest meditation masters, then through an asceticism that nearly cost him his life &ndash; before attaining enlightenment under a Bodhi tree in Bodhgaya. But unlike a hermit who keeps his knowledge to himself, his attention turned immediately after enlightenment to the question of how what he had realized could be carried forward &ndash; the octopus that stretches out eight arms to gather a knowledge meant, in the end, to belong to the whole community.</p>
        </blockquote>

        <h2 class="vb-section">2. The Totem: A Teaching, Systematically Ordered for a Growing Community</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo called the social Five the <strong>Totem</strong> &ndash; the linking of knowledge with belonging and standing. The SO5 does not hold its knowledge back the way the introverted SE5 does, but orders it into a system a whole community can carry. That is exactly what Gautama did: his first teaching after enlightenment was addressed to his five former companions from his ascetic years in Sarnath &ndash; the opening of a teaching he spent the following 45 years systematically building into an ordered whole: the Four Noble Truths, the Eightfold Path, a precise conceptual framework that could be taught, memorized, and passed on.</p>
          <p class="vb-intro">Even in his personal encounters, he was never after exclusive closeness with individuals, but wanted the insight to become part of a shared body of knowledge: when the grieving Kisa Gotami came to him with her dead child, he sent her to fetch a mustard seed from a house where no one had ever died &ndash; she returned empty-handed, but with an insight she went on to share with others who carried the same grief. The Totem-knowledge is shared because it wants to be shared, not kept as private property between two people.</p>
        </blockquote>

        <h2 class="vb-section">3. The Four-Wing: Existential Pain as Trigger</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Four-wing (w4)</strong> adds something to the Five's cool analytical sharpness that a pure 5w6 rarely shows at this depth: existential pain as a driving force. In tradition it is the "four sights" &ndash; an old man, a sick man, a dead man, and an ascetic &ndash; that Siddhartha encounters on excursions from the palace and that shake him to his core. Not intellectual curiosity alone, but a deeply felt wound in the face of age, illness, and death &ndash; the typical motif of the Four, who does not rationalize away the pain of existence but allows it, until it becomes the driving force.</p>
          <p class="vb-intro">This combination explains why Buddha's teaching never remained pure dry logic, but carries a contemplative, almost poetic quality &ndash; visible for instance in the parables of the Pali Canon, the image of the poisoned arrow, or the raft that is carried across the river but not dragged along afterward. The Five's mind dissects reality; the Four-wing ensures that this dissection never stays cold, but is carried by genuine empathy.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: Avarice, Overcome for the Sake of Community</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the Five is called <strong>avarice</strong> (Avaritia) &ndash; hoarding one's own inner resources out of fear of being overwhelmed by the world's demands. In Siddhartha this passion appears in a radical inversion: he does not hoard possessions, but gives up all material wealth entirely &ndash; and instead spends six years wrestling for the one knowledge that will, in the end, not remain his private possession but belong to the whole community: truth itself. The octopus that first dives alone into the depths, only to carry back to the surface what it finds there.</p>
          <p class="vb-intro">According to tradition, immediately after enlightenment he first considers keeping what he has realized to himself, believing it too subtle to convey to the world. Only an inner call to compassion &ndash; personified in legend as the deity Brahma Sahampati &ndash; moves him to teach after all, and not merely a narrow circle, but, as the following 45 years show, a steadily growing community. The Five, who initially wants to hoard its most precious possession, finds a way to share it systematically and accessibly, without losing itself.</p>
        </blockquote>

        <h2 class="vb-section">5. Leadership Without Power: The Kosambi Conflict</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">How a Five handles conflict is shown exemplarily in the Kosambi crisis: a dispute between two monks splits the entire community into hostile camps. Buddha urges reconciliation &ndash; but is rebuffed by the disputants, who tell him to stay out of it. Rather than asserting his authority as founder or imposing punishments, he silently packs his bowl and withdraws alone into the Parileyyaka forest for months.</p>
          <p class="vb-intro">No power struggle, no insistence on his own position at any cost &ndash; but energy conservation when emotional confusion threatens, and trust that cause and effect will bring their own clarification. Only the pressure of lay followers, who withhold alms from the quarreling monks, resolves the conflict. The octopus that does not entangle itself in the senseless, but withdraws for a time and waits until insight ripens on its own within the community.</p>
        </blockquote>

        <h2 class="vb-section">6. No Successor, No Institution for Its Own Sake</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Before his death, Buddha refuses to name a successor at the head of the Sangha. His last instruction states, in essence, that the teaching itself and the monastic rules shall be the authority after his death &ndash; not a person. No interest in power structures for their own sake, but the consistent stance of a Five whose loyalty belongs to the truth, not the organization. The Sangha was never a political project for him, but a resonance space for truth-seekers &ndash; a natural byproduct of his teaching, not a goal pursued from the start.</p>
          <p class="vb-intro">Even when his own cousin Devadatta tries to take over the Sangha with stricter rules and splits off part of the monks, Buddha does not respond with counter-power, but sends his closest disciples Sariputta and Moggallana to clarify matters for those who were misled, using clear arguments. Persuasion through insight, not through domination &ndash; this too is the signature of the Five.</p>
        </blockquote>

        <h2 class="vb-section">7. Light and Shadow of the Social Five</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO5w4 is its ability to recognize the cause of suffering with unsparing clarity &ndash; and instead of hoarding this insight as exclusive secret knowledge, to shape it into an ordered system accessible to an entire community. The three marks of existence &ndash; impermanence (Anicca), non-self (Anatta), and unsatisfactoriness (Dukkha) &ndash; are not an abstract cosmology, but the result of a Five who dissects reality like a diagnostician until nothing unexamined remains, then orders that analysis so others can take it up. "Do not believe anything blindly, test it like gold in fire" &ndash; a classic Five stance that only accepts knowledge once it has been fully penetrated.</p>
          <p class="vb-intro">The shadow shows itself in the permanent temptation of withdrawal: the impulse, after enlightenment, to retreat entirely from the world and keep the insight to oneself instead of passing it on systematically. Only the inner call to compassion &ndash; and, from the perspective of subtype theory, the Four-wing with its deep empathy for the suffering of others &ndash; overcomes this pull toward withdrawal. The social Five that opens its Totem-knowledge without losing itself to any one individual.</p>
        </blockquote>

        <h2 class="vb-section">8. The Middle Way: Neither Attachment Nor Denial</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">After six years between radical asceticism and the abundance of palace life, Buddha finds the "Middle Way" &ndash; neither extreme materialism nor self-destructive renunciation. Famous is his parable of the poisoned arrow: whoever is struck by an arrow does not first ask the name of the archer or the wood of the arrow &ndash; they pull it out. His entire teaching was less cosmology than practical instruction for liberating the mind, radically pragmatic, free of speculation for its own sake.</p>
          <p class="vb-intro">Even the principle of dependent origination (Paticcasamuppada) &ndash; "When this exists, that exists; when this arises, that arises" &ndash; is pure causality without divine will: one's own actions (karma) shape one's own reality. No fate, no revelation &ndash; but the investigation of causes as a worldview, cast into a teaching structure that could be passed on. The Five that refuses to believe anything it has not penetrated for itself.</p>
        </blockquote>

        <h2 class="vb-section">9. Legacy: 2,500 Years of Impact from a Shared Knowledge</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">For 45 years, from his enlightenment at 35 to his death at 80, Buddha wanders through northern India while systematically building the Sangha &ndash; a monastic community with fixed rules, an ordered structure, and its own ordination ceremony, securing his knowledge institutionally beyond the single teaching moment. Not a mass project from the outset, but built from the beginning for growth and transmission &ndash; today this community still shapes over 500 million people.</p>
          <p class="vb-intro">His death, probably from food poisoning, occurs among his closest monks &ndash; no grand ending, but the final consequence of a life that was never oriented toward outward effect, but always toward the one unshakeable truth, which he spent his life translating into a system accessible to others. The octopus that kept passing on its gathered knowledge with many arms at once to the very end &ndash; and whose Totem has not faded to this day.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/so5", label:"SO5 – The Octopus: Subtype profile"},
        {route:"beruehmte-albert-einstein", label:"Portrait: Dr. Albert Einstein (SO5w4)"},
        {route:"beruehmte-claudio-naranjo", label:"Portrait: Dr. Claudio Naranjo (SO5w4)"},
        {route:"beruehmte-milarepa", label:"Portrait: Milarepa (SO5w4)"},
      ])}
    </div>
  `);
}

export function christianRaetschPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-christian-raetsch-portrait.jpg" alt="Dr. Christian Rätsch – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Christian Rätsch</p>
        <p class="krim-portrait-typ">SP5w4 &middot; Self-Preservation Type 5 with Four-wing</p>
        <p class="krim-portrait-subtitle">Ethnologist &amp; Ethnopharmacologist, 1957&ndash;2022 &ndash; Animal correspondence: Owl</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Owl</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Owl</strong> is the animal of the Self-Preservation Type 5 &ndash; and it is an animal of silence and depth. It sees what others cannot: in the darkness, in the spaces between, where the ordinary eye fails. The Owl is not a social animal. It observes from a distance, hoards its knowledge, waits &ndash; and when it acts, it does so with a precision that wastes no energy. It is not an animal of grand gestures. It is an animal of concentrated force.</p>
          <p class="vb-intro">The German ethnopharmacologist Christian Rätsch was one of the most significant ethnopharmacologists of his time &ndash; a researcher who devoted his life to knowledge of medicinal plants, incense substances and shamanic traditions. His standard work <em>Encyclopedia of Psychoactive Plants</em> is considered the most comprehensive botanical-ethnological reference work in the field. He did not popularise. He documented, systematised, preserved. The Owl that sees in the darkness &ndash; where others do not want or are not permitted to look.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Five: The Castle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Self-Preservation Five (SP5)</strong> is the <strong>reinforcement type</strong> of the Five: here the passion of the Five &ndash; <em>avarice</em>, the hoarding of energy, time and space &ndash; is lived most intensely and most openly. Naranjo called this subtype <em>Castle</em>: one's own home, one's own territory becomes a fortress, a protective stronghold behind whose walls the outside world remains. The SP5 is one of the most isolated types in the entire Enneagram &ndash; not from coldness, but because retreat into silence and knowledge is the only place where the self feels safe.</p>
          <p class="vb-intro">In Christian Rätsch this showed in the way he researched: not from university chairs, not as part of institutional structures, but as an independent scholar who went his own way. He spent decades within shamanic traditions &ndash; among the Maya in Mexico, among peoples in South America and Asia &ndash; not as a detached observer but as someone who wanted to understand what was really happening. Yet he always remained the researcher behind the subject: observing, noting, systematising &ndash; and within his castle.</p>
          <p class="vb-intro">The self-preservation instinct directs the Five toward the question: <em>Do I have enough? Am I safe? Do I have sufficient resources &ndash; in knowledge, in space, in time &ndash; to survive?</em> For Rätsch this question became the structure of his life: knowledge of plants was his castle &ndash; a safe territory in a world that often met this knowledge with suspicion or hostility.</p>
        </blockquote>

        <h2 class="vb-section">3. The Four-Wing: Depth over Breadth</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Four-wing (w4)</strong> gives the Self-Preservation Five a characteristic coloring: the need for uniqueness, for the distinctive, for what others do not see or do not want to see. The pure SP5 might be absorbed in the breadth of knowledge &ndash; collecting, systematising, archiving. The Four-wing asks the deeper question: <em>What is special? What carries its own soul? What is more than mere information?</em></p>
          <p class="vb-intro">In Christian Rätsch the Four-wing showed in his particular affinity for the spiritual and ritual dimension of plants. He researched not only active substances &ndash; he researched meaning. The question of what a plant means to a culture, how it is used in rituals, what worldviews lie behind its use. That is the SP5w4: knowledge that seeks depth, not only breadth. Insight that wants to touch, not only explain.</p>
          <p class="vb-intro">The Four-wing also explains Rätsch's close collaboration with artists and musicians &ndash; particularly with the psychedelic scene, with bands such as Brainticket or the circle around Timothy Leary. The SP5w4 knows: some truths cannot be contained in encyclopedias alone. They require art, ritual, experience.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Self-Preservation Five</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP5w4 is its capacity for complete dedication to a subject &ndash; without distraction, without compromise, without the desire for social validation. Christian Rätsch built a body of work without equal: over 30 books, including standard works translated into numerous languages. That is not a career. That is a calling. The Owl that looks into the darkness its whole life long &ndash; and finds light there.</p>
          <p class="vb-intro">The core passion of the Five is <strong>avarice</strong> &ndash; not in the material sense, but as the hoarding of energy, time and knowledge: <em>I do not have enough to give. If I give, I lose.</em> In the SP5 this manifests as a tendency toward withdrawal &ndash; behind the books, behind the research, behind the clear boundaries of one's own territory. Contact costs energy. And energy is precious.</p>
          <p class="vb-intro">The Four-wing carries the danger of isolation through uniqueness: when a subject becomes so specific that almost no one can follow along, the SP5w4 can disappear into its own world &ndash; rich in knowledge, poor in connection. That is not a flaw. But it is a price.</p>
        </blockquote>

        <h2 class="vb-section">5. The Path of Healing: From Hoarding to Sharing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Five leads from the question <em>Do I have enough to give?</em> to the recognition <em>Knowledge grows larger when I share it &ndash; not smaller.</em> For the SP5w4 this means using one's own territory not as a fortress but as a starting point: <em>What I know can help others. What I have gathered can live on.</em></p>
          <p class="vb-intro">Christian Rätsch took this step in his work &ndash; by making accessible, over decades, knowledge that would otherwise have been lost. The Owl that sees in the darkness and puts what it sees into words &ndash; so that others can see it, even when it has grown light. That is the gift of the SP5w4: knowledge that is not guarded for itself, but for those who seek it.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se5", label:"SP5 – The Owl: Subtype Profile"},
        {route:"beruehmte-clemens-arvay", label:"Portrait: Clemens G. Arvay (SP4w5)"},
        {route:"beruehmte-xu-bing", label:"Portrait: Xu Bing (SP5w4)"},
      ])}
    </div>
  `);
}

export function davidMechPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-david-mech-portrait.jpg" alt="Dr. L. David Mech – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. L. David Mech</p>
        <p class="krim-portrait-typ">SX6w5 &middot; Sexual Type 6 with Five-wing</p>
        <p class="krim-portrait-subtitle">Biologist, "father of modern wolf research," b. 1937 &ndash; Animal correspondence: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The wolf who spent his life studying the wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>wolf</strong> is the animal of the Sexual Six &ndash; it meets fear not by retreating but through direct confrontation, seeking the test, the pack, the structure that holds up when it truly matters. Few scientists embody this principle as literally as Dr. L. David Mech: since 1958 &ndash; over sixty years &ndash; he has studied wolves in Minnesota, on Isle Royale, in Alaska, in Yellowstone National Park, and on the Arctic's Ellesmere Island, and is regarded worldwide as the leading authority on the subject.</p>
          <p class="vb-intro">The American wolf researcher L. David Mech, born in 1937 in Auburn, New York, turned a single, decades-long research question into a life's work: roughly 380 scientific publications, eleven books, including the still-definitive standard work "The Wolf: The Ecology and Behavior of an Endangered Species" (1970). In 1985 he additionally founded the International Wolf Center to bring his knowledge to a broader public.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Six: direct confrontation instead of avoidance</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sexual Six (SX6)</strong> meets its own fear counterphobically &ndash; not through avoidance, but through direct, often decades-long engagement with exactly what others would fear. Mech spent countless weeks in the Arctic winter on Ellesmere Island observing wild wolf packs at close range &ndash; a research method that demands extraordinary physical toughness and a willingness to expose oneself to extreme cold and isolation over long periods.</p>
          <p class="vb-intro">Also telling is his intellectual willingness to confront himself: in the 1970s, Mech significantly shaped the popular concept of the "alpha wolf" within a strict dominance hierarchy &ndash; and later publicly corrected this very theory himself, once became world-famous, when newer field observations showed that a wolf pack is usually a family structure of parents and offspring, not a hierarchy of rank battles. Questioning one's own, once-defended certainty the moment new facts demand it is pure Sexual Six.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five-wing: decades of meticulous fieldwork</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five-wing (w5)</strong> gives the Six an analytical depth and the willingness to immerse itself in a single field of knowledge over extremely long periods. Roughly 380 scientific publications on a single animal, spread across more than six decades, represent a degree of systematic persistence that goes far beyond a typical academic career.</p>
          <p class="vb-intro">This combination of Six-style willingness to confront the field directly and Five-style systematism in analysis made Mech the incorruptible, fact-based authority on everything to do with wolf behaviour &ndash; an authority resting not on charisma, but on decades of collected, verifiable observational data.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX6w5 is its ability to turn <strong>direct, often uncomfortable confrontation with reality into reliable, self-correcting knowledge</strong> &ndash; Mech's research fundamentally changed how science and the public understand wolves, and his International Wolf Center continues to shape conservation and environmental education worldwide.</p>
          <p class="vb-intro">The shadow of the Sexual Six with a Five-wing shows in how tightly one's own identity can become bound to a single, doggedly pursued subject &ndash; a life devoted almost exclusively to one animal for over sixty years leaves little room for other roles beyond this one, all-consuming research question.</p>
        </blockquote>

        <h2 class="vb-section">5. The wolf who sought the truth about the wolf, even against himself</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What Mech gives the world is not merely knowledge about a single animal, but a model of how science should work: with the willingness to retract even one's own, world-famous theory the moment the facts demand it. That is rare &ndash; and deeply Sexual Six.</p>
          <p class="vb-intro">In the end, one image remains that could hardly stand more fittingly for the Sexual Six with a Five-wing: a man whose archetypal animal is the wolf, who devoted his entire life to the incorruptible study of that very animal &ndash; and, apparently unconsciously, studied his own deepest pattern along the way.</p>
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
        {route:"beruehmte-douglas-smith", label:"Portrait: Dr. Douglas W. Smith (SX6w5)"},
        {route:"beruehmte-moses", label:"Portrait: Moses (SX6w5)"},
      ])}
      ${animalResearcherMatchBlock("beruehmte-david-mech")}
    </div>
  `);
}

export function eckhardFreisePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-eckhard-freise-portrait.jpg" alt="Eckhard Freise – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Prof. Dr. Eckhard Freise</p>
        <p class="krim-portrait-typ">SO5w6 &middot; Social Type 5 with six wing</p>
        <p class="krim-portrait-subtitle">Historian, professor of medieval history, b. 1944 – Animal equivalent: Octopus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Octopus with the Groping Arms</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The octopus is the animal of the social Type 5—a creature that gropes, grasps, and tests with several arms at once before committing to anything. In Eckhard Freise this image shows itself in a particularly immediate, physical way: when he explains an answer on television, his hands fall into a peculiar motion—the fingers dart forward almost tentacle-like, pull back again, dart forward once more, in a wave-like back-and-forth that appears entirely involuntary. It is as if the knowledge itself were searching for a graspable form before being put into words—eight arms feeling through the water of memory before one of them finally closes around something.</p>
          <p class="vb-intro">Freise was born in 1944, studied Latin, history, and philosophy in Münster from 1966 onward, earned his doctorate there in 1979 under Joachim Wollasch, and completed his habilitation in 1987. Professorships followed in Mannheim (1989–1996) and at the Bergische Universität Wuppertal (1996–2011). A life spent for decades in the quiet depths of medieval historical research—until, on December 2, 2000, a single television evening suddenly washed this octopus up to the surface.</p>
        </blockquote>

        <h2 class="vb-section">2. The Totem: Knowledge That Suddenly Belonged to the Whole Nation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo called the social Type 5 the Totem—the linking of knowledge with belonging and prestige. The SO5 does not withhold its knowledge the way the introverted SE5 tends to, but carries it into the community and thereby becomes an authority. On December 2, 2000, on <em>Wer wird Millionär?</em> with Günther Jauch (SO5w6, see <a href="javascript:void(0)" data-route="beruehmte-guenther-jauch">portrait</a>), Freise became the first contestant in the show's history to win the full million—at the time, one million Deutsche Mark. The deciding question asked who stood with Edmund Hillary at the summit of Mount Everest in 1953. Freise knew the answer without needing a single lifeline.</p>
          <p class="vb-intro">Telling is how he himself speaks about that moment: it was never about the money, he says—his son needed a new computer—and the sums of money felt surreal at first, more like play money. That is the SO5 at its core: totem knowledge is shared because it wants to be shared, not primarily to be turned into capital. And entirely in keeping with the Six wing's emphasis on reliability and continuity, his own comment afterward: ›We stayed exactly as we were before.‹ No upheaval, no new life—only a system that had grown one facet richer.</p>
          <p class="vb-intro">His relationship to his own title also shows the Totem pattern in its modest, non-self-dramatizing form: when addressed formally with his professorial title, he responded with a curt ›For heaven's sake—please don't!‹ Knowledge as a service to the community, not as a status one carries in front of oneself.</p>
        </blockquote>

        <h2 class="vb-section">3. The Six Wing: The Hersfeld Memorial Tradition as Life's Work</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Six wing (w6) brings the social Five a deep need for reliability and a system solid enough to work on for decades. That is exactly what Freise's academic career shows: he became a recognized expert on the <strong>Hersfeld memorial tradition</strong>—the medieval commemorative record of Hersfeld Abbey, which lists whose names were to be remembered in liturgical prayer for the dead. His years of preparatory work laid the foundation for a scholarly edition only published in 2018—a research subject that is itself a system of continuity and reliable commemoration across centuries. One is tempted to call it a Six-wing discovery in its own right: an SO5w6 devotes his scholarly life's work to precisely the question of how a community reliably remembers its members across time.</p>
          <p class="vb-intro">This pattern held even after television fame arrived: Freise continued his professorship through his regular retirement in 2011 and kept teaching for several more years afterward. He turned down his own permanent television format—the obvious way to capitalize on his sudden fame—because it would have tied him down too much. The Six wing holds on to the proven system—here, the academic career—rather than being swept away by a short-lived hype.</p>
        </blockquote>

        <h2 class="vb-section">4. The Old Man of Quiz Mountain</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Unlike Günther Jauch, who withdrew from public life almost entirely after achieving television fame, Freise stayed connected to it in his own, gentler way—as a recurring guest on quiz formats: <em>Quizduell</em> (2015), <em>Wer weiß denn sowas?</em> (2015, 2020), <em>Der Super Champion</em> (2012), and, since 2016, as a member of the ›Olymp‹ team on <em>Quizduell – Olymp</em>. An IQ test in 2001 credited him with a score of 132. But more telling than the number is how he himself describes his relationship to quizzing: the most important virtues of a quizzer, he says, are unshakeable calm (ataraxia) and the ability to belittle oneself. He sees himself as an ›amateur,‹ not an athlete—and calls himself, with dry self-mockery, ›the old man of quiz mountain.‹</p>
          <p class="vb-intro">This self-irony is typical of the mature SO5w6: the knowledge is taken seriously, the person is not. Freise openly admits where his limits lie—on questions about lifestyle and fashion he can at best ›guess intelligently,‹ and age-related memory gaps now make quick answers harder. No hiding behind the fame of 2000, but a sober, almost scholarly look at his own limits—the same look with which he has examined medieval sources for decades.</p>
          <p class="vb-intro">His verdict on the genre he owes his fame to is just as precise as it is detached: quiz shows are ›society's good-humored parody of its own knowledge.‹ And regarding other countries where quiz millionaires become national heroes, he notes the German case rather soberly—an observation from the outside, of a kind only someone who stood right in the middle of it and still kept their distance could make.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Social Five</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In the light, the SO5w6 shows itself in Freise as a scholar who understands knowledge as service—whether in decades of painstaking work on medieval sources or in front of a Saturday-night audience of millions. For him, both are the same movement: look closely, understand, pass it on. That he did not turn fame into an end in itself, but integrated it into his existing, reliable career, is mature Six-wing behavior: security not through new stages, but through holding on to a system solid enough to carry.</p>
          <p class="vb-intro">The shadow of the Five is <strong>avarice</strong>—holding back not just possessions, but oneself. In Freise this does not show as stinginess, but in the deliberate limit he places on how much of himself he reveals: he remained a scholar, not a public self-promoter, and turned down the format that would have put him permanently on display. The groping, tentacle-like hand movements with which he explains his answers can, in this light, also be read this way: a body that reaches outward to hand over knowledge, yet never fully opens—the arms dart forward and pull back immediately, before they ever fully extend.</p>
        </blockquote>

        <h2 class="vb-section">6. The Healing Path: From Hoarding to Sharing Out of Abundance</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Five leads from the question <em>Is my knowledge, my energy, my time even enough?</em> to the realization <em>I have enough to give without losing myself.</em> Freise's biography reads like a successful approach to this realization: a researcher who accumulated knowledge over decades in quiet depth was able, in the one decisive moment it was publicly demanded of him, to answer without hesitation and without fear of failure—and remained the same person afterward.</p>
          <p class="vb-intro">That he still appears on quiz shows decades after his million-mark win—not out of necessity, but visibly for the joy of the thing itself—shows a Five who has learned to share her knowledge without fear of depletion. The octopus, whose arms still dart forward gropingly when he explains an answer—no longer out of uncertainty, but out of the sheer joy of thinking itself, which was the true home of an entire life of scholarship.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/so5", label:"SO5 – The Octopus: Subtype Profile"},
        {route:"beruehmte-guenther-jauch", label:"Portrait: Günther Jauch (SO5w6) – host of the same show"},
        {route:"beruehmte-dirk-rossmann", label:"Portrait: Dirk Rossmann (SO5w6)"},
        {route:"beruehmte-simone-de-beauvoir", label:"Portrait: Simone de Beauvoir (SO5w6)"},
      ])}
    </div>
  `);
}

export function fransDeWaalPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-frans-de-waal-portrait.jpg" alt="Prof. Dr. Frans de Waal – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Prof. Dr. Frans de Waal</p>
        <p class="krim-portrait-typ">SX7w6 &middot; Sexual Type 7 with Six-wing</p>
        <p class="krim-portrait-subtitle">Primatologist, "bridge-builder between humans and chimpanzees," 1948&ndash;2024 &ndash; Animal correspondence: Chimpanzee</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The chimpanzee who discovered chimpanzee politics</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>chimpanzee</strong> is the animal of the Sexual Seven &ndash; clever, playful, socially highly intelligent, with a preference for intense bonds and intellectual boundary-crossing. Few scientists embodied this principle as fully as Prof. Dr. Frans de Waal: the Dutch-American primatologist is regarded as the most influential behavioural researcher in his field worldwide and became known as the "bridge-builder between humans and chimpanzees."</p>
          <p class="vb-intro">Born in 1948 in 's-Hertogenbosch, de Waal earned his doctorate in Utrecht in 1977. His groundbreaking first book, "Chimpanzee Politics" (1982), documented the complex power alliances and shifting coalitions of chimpanzees at Arnhem Zoo &ndash; and introduced the concept of "Machiavellian intelligence" into primatology. De Waal died in 2024 at the age of 75.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Seven: the one intense bond instead of the wide stage</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sexual Seven (SX7)</strong> finds its fulfillment not in institutional group belonging, but in intense, meaningful one-on-one connections &ndash; an idealizing, almost enamored devotion to a person, an idea, or a being. De Waal's scientific legacy circles around exactly this theme: reconciliation, empathy, and bonding stood at the center of his later bonobo research, captured in books such as "The Age of Empathy" and "The Bonobo and the Atheist."</p>
          <p class="vb-intro">Tellingly, de Waal's research focus shifted increasingly over his career from chimpanzees toward bonobos &ndash; a primate species known, among all great apes, for its exceptionally intense, physically sexual conflict resolution and bonding rituals. Hardly any animal embodies the sexual instinctual principle as directly as the bonobo, and that a Sexual Seven, over the course of his life, found his way ever more strongly to precisely this animal fits coherently into the overall picture.</p>
          <p class="vb-intro">Colleagues describe him as someone who sought direct, personal intellectual exchange &ndash; individual conversations, personal responses to individual colleagues' work, rather than losing himself in institutional networks. This very preference for the one meaningful connection, not the broad stage, is the core of the Sexual Seven.</p>
        </blockquote>

        <h2 class="vb-section">3. The Six-wing: alliances and loyalty as a research subject</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Six-wing (w6)</strong> gives the Seven a fine sense for security, loyalty, and the dynamics of alliances &ndash; exactly the themes de Waal studied throughout his career. His early work showed that power among chimpanzees does not arise from raw aggression, but from relationships defined by generosity and impartiality &ndash; a deeply Six-style understanding of security through alliance-tending rather than dominance.</p>
          <p class="vb-intro">This combination of Seven-style intellectual curiosity and Six-style sensitivity to loyalty structures made him a researcher who broke conventions with playful brilliance: he showed how much human there is in the animal, and how much animal there is in the human &ndash; never as provocation for its own sake, but always carefully documented and methodically secured.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX7w6 is its ability to turn <strong>intellectual excitement and intense capacity for bonding into a life's work that redrew the line between human and animal</strong> &ndash; de Waal's books were translated into twenty languages and made him one of the world's most publicly visible primatologists.</p>
          <p class="vb-intro">The shadow of the Sexual Seven with a Six-wing shows in how much one's own scientific authority can become tied to intense personal bonds rather than broad institutional backing &ndash; an approach that was at once his greatest strength and his greatest vulnerability.</p>
        </blockquote>

        <h2 class="vb-section">5. The chimpanzee who showed how much human there is in the animal</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What de Waal gave the world is a fundamentally changed understanding of what animals can feel, plan, and know &ndash; a legacy that reached far beyond academia into the public debate about animal consciousness and empathy.</p>
          <p class="vb-intro">In the end, one image remains that could hardly fit this compass more fittingly: a man whose archetypal animal is the chimpanzee, who devoted his entire life to that clever, playful, deeply bonding animal &ndash; and, apparently unconsciously, studied his own deepest pattern along the way.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${bookTip("enneagramm-zoo", "27 Animal Portraits – each Subtype animal with character, biology and Enneagram connection.", "Enneagramm-Zoo")}
      ${bookTip("archetypen-der-tiere-im-enneagramm", "The archetypal animals of the 9 types as an inner map – images that work instantly.", "Archetypen der Tiere im Enneagramm")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/sx7", label:"SX7 – The Chimpanzee: Subtype Profile"},
        {route:"lebensmusterkompass/sx7", label:"Life Pattern Compass: SX7 – Chimpanzee"},
        {route:"beruehmte-christophe-boesch", label:"Portrait: Prof. Dr. Christophe Boesch (SX7w8)"},
        {route:"beruehmte-jill-pruetz", label:"Portrait: Dr. Jill Pruetz (SX7w6)"},
        {route:"krankheitsportraets-frans-de-waal", label:"Illness Portrait: Frans de Waal (SX7w6) – stomach cancer, active until the end"},
      ])}
      ${animalResearcherMatchBlock("beruehmte-frans-de-waal")}
    </div>
  `);
}

export function gertrudeElionPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-gertrude-elion-portrait.jpg" alt="Gertrude Belle Elion – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Gertrude Belle Elion</p>
        <p class="krim-portrait-typ">SO5w4 &middot; Social Type 5 with Four-wing</p>
        <p class="krim-portrait-subtitle">Biochemist &amp; pharmacologist, 1918&ndash;1999 &ndash; Animal correspondence: Octopus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Octopus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>octopus</strong> is the animal of the social Type 5 &ndash; and it is one of the most intelligent creatures on earth. Eight arms, each with its own nervous system, each capable of thinking and acting independently. The octopus solves problems no other animal of its kind can solve. It adapts, it observes, it understands connections &ndash; and it does so mostly in concealment, without fanfare, without an audience.</p>
          <p class="vb-intro">Gertrude Belle Elion was this octopus: a scientist who thought simultaneously in multiple directions, who saw connections others did not see &ndash; and whose work saved millions of human lives, without most people today knowing her name. In 1988 she received the Nobel Prize in Physiology or Medicine. But her actual work had begun decades earlier &ndash; in a laboratory that initially did not want to let her in at all.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Five: Knowledge as Contribution</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social Five (SO5)</strong> is, according to Naranjo, the subtype that most strongly overcomes the isolation of the Five &ndash; not through emotionality, but through the desire to make one&apos;s knowledge available to the community. Naranjo named this subtype <em>Totem</em>: knowledge becomes an identity marker, a contribution to the group, a bond between the individual and the world. The SO5 does not research only for itself &ndash; it researches because it believes knowledge can change things.</p>
          <p class="vb-intro">In Gertrude Elion, this showed in what she called <em>rational drug design</em>: rather than systematically testing thousands of substances blindly, she first understood the biochemistry of the enemy &ndash; cancer, virus, disease &ndash; and then designed targeted molecules that attack where they are effective. This was revolutionary at the time. Her discoveries include drugs against leukemia, against organ transplant rejection, against herpes &ndash; and they laid the groundwork for the development of the first HIV medications.</p>
          <p class="vb-intro">The SO5 does not ask: <em>What does this knowledge benefit me?</em> It asks: <em>What can this knowledge achieve?</em> Elion researched her whole life for people she would never meet. That is Totem &ndash; knowledge that points beyond the individual.</p>
        </blockquote>

        <h2 class="vb-section">3. The Four-wing: Depth and Perseverance</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Four-wing (w4)</strong> brings the social Five a characteristic depth: the need for uniqueness, for the distinctive, for work that is not only useful but also <em>meaningful</em>. The SO5w4 does not just seek knowledge &ndash; it seeks knowledge that matters. Insight that truly changes something.</p>
          <p class="vb-intro">In Gertrude Elion, the Four-wing showed in her particular perseverance in the face of exclusion. As a woman and as a Jew she was rejected from doctoral programs and denied positions commensurate with her abilities. She did not allow herself to be defined by this. She worked as a teacher, as a food chemist &ndash; and continued to research on the side until a door opened. That stubbornness is SO5w4: <em>I know what I have to give. I will wait until it is accepted.</em></p>
          <p class="vb-intro">The Four-wing also explains Elion&apos;s lifelong connection to her work as personal expression. Her drive to research arose when her grandfather died of cancer &ndash; she was fifteen. From a personal loss came a scientific life&apos;s work. That is the SO5w4: knowledge that comes from within and works outward.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Social Five</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO5w4 is its ability to penetrate complex knowledge with dedication and endurance and from it create something that benefits the world. Gertrude Elion did not popularize, did not simplify, did not sell. She researched &ndash; precisely, patiently, for decades &ndash; and the result extended and saved the lives of countless people.</p>
          <p class="vb-intro">The karmic pattern of the Five is <strong>avarice</strong> &ndash; the withholding of energy and contact. The SO5 overcomes this pattern most strongly through its contribution to the community. But it too knows the temptation of withdrawal: behind the research, behind the laboratory, behind the subject. Elion remained relatively in the background throughout her life &ndash; until the Nobel Prize pushed her into a spotlight she had not sought.</p>
        </blockquote>

        <h2 class="vb-section">5. The Healing Path: From Knowledge to Impact</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Five leads from the question <em>Do I have enough?</em> to the realization <em>What I know can be used &ndash; now, here, by real people.</em> For the SO5w4 this means not only completing the knowledge but releasing it: giving it to the world without retaining control over what becomes of it.</p>
          <p class="vb-intro">Gertrude Elion took this step &ndash; not in a single moment, but over an entire research life. The octopus that thinks in eight arms simultaneously, that recognizes connections others do not see &ndash; and that transformed its knowledge into molecules that heal people. That is the gift of the SO5w4: intelligence that does not shine for itself, but for those sitting in the dark.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so5", label:"SO5 – The Octopus: Subtype Profile"},
        {route:"beruehmte-christian-raetsch", label:"Portrait: Christian Rätsch (SP5w4)"},
      ])}
    </div>
  `);
}

export function hazelBruggerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hazel-brugger-portrait.jpg" alt="Hazel Brugger" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hazel Brugger</p>
        <p class="krim-portrait-typ">SO7w8 &middot; Social Type 7 with Eight-wing</p>
        <p class="krim-portrait-subtitle">Comedian, cabaret artist &amp; author, born 1993 &ndash; Animal correspondence: Beaver</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Beaver</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Beaver</strong> is the animal of the Social Type 7 &ndash; and Hazel Brugger is a Beaver who builds on stage. The Beaver creates something where nothing was before: it dams water, transforms landscapes, turns stillness into movement. Hazel Brugger steps onto the stage &ndash; and afterwards the room is different. Not because she is loud. But because her thoughts build dams that hold back the water of reality and redirect it in another direction.</p>
          <p class="vb-intro">Beavers are solitary animals that nevertheless build for others. They construct their habitat not for show but because they cannot do otherwise &ndash; and what they create benefits the entire ecosystem. Hazel Brugger writes books, performs on stage, presents, blogs, podcasts, slams. The Beaver always has a new project. And everyone watching benefits from it.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Seven: Humour as World-Shaping</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Social Seven (SO7)</strong> is the subtype of the Seven that acts most strongly outward &ndash; the one in which joy does not remain personal but becomes a social project. Naranjo described this subtype as <em>Sacrifice</em>: the SO7 places its own energy in the service of a larger idea &ndash; and finds its real joy there.</p>
          <p class="vb-intro">For Hazel Brugger humour is not an entertainment format. It is a form of cognition. She takes everyday observations &ndash; about relationships, bodies, society, language &ndash; and stretches them until the absurdity that was always there becomes visible. That is the SO7 at work: arranging reality so that others can suddenly see it differently. The Beaver does not build a dam for itself. It builds it so the water can gather.</p>
        </blockquote>

        <h2 class="vb-section">3. The Eight-Wing: Edge Behind the Laughter</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Eight-wing</strong> gives the Social Seven a quality not every Seven has access to: striking power. A Seven with a weaker Eight wing can evade, minimise, dissolve the uncomfortable in humour before it really lands. The Eight-wing holds firm. It says: no, this is also allowed to hit. Humour does not always need to be cosy.</p>
          <p class="vb-intro">Hazel Brugger is not only funny &ndash; she is precise. Her punchlines have teeth. She dissects social self-evident truths with a directness that reveals the Eight-wing: no topic is too hot, no observation too uncomfortable to be spoken on stage. The Beaver with Eight-wing does not fell the tree hesitantly. It fells it exactly where it is needed &ndash; and is not surprised when the impact is felt.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: Gluttony or Excess</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the Seven is called <strong>gluttony</strong> or also <strong>excess</strong>: the insatiable hunger for experience, expression, meaning. In the Social Seven this hunger directs itself not toward enjoyment in the private sense but toward impact. More formats, more perspectives, more topics, more reach. Hazel Brugger does not only stand on one stage. She writes, blogs, podcasts, presents, slams, publishes. The Beaver does not rest as long as there is still something to build.</p>
          <p class="vb-intro">That is not being driven in a neurotic sense &ndash; it is the Seven finding its home in the abundance of expression. It is not fear that drives the Beaver. It is the joy of the next dam that is not yet finished.</p>
        </blockquote>

        <h2 class="vb-section">5. The Gift: A Laughter That Thinks</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What Hazel Brugger gives her audience is rarer than it sounds: a laughter that thinks. Not entertainment as anaesthesia, but humour as a path to insight. One leaves her shows seeing the world slightly more askew &ndash; and because one sees it more askew, one sees it more clearly. That is the gift of the SO7w8: joy that sharpens rather than numbs.</p>
          <p class="vb-intro">The Beaver changes what it touches. Hazel Brugger changes how one thinks &ndash; with pace, depth and the Eight-wing that ensures the punchline lands even when it hurts. That is the Social Seven with Eight-wing. That is the Beaver on stage.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so7", label:"SO7 – The Beaver: Subtype Profile"},
        {route:"beruehmte-elon-musk", label:"Portrait: Elon Musk (SO7w6)"},
      ])}
    </div>
  `);
}

export function inaMuellerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ina-mueller-portrait.jpg" alt="Ina Müller" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ina Müller</p>
        <p class="krim-portrait-typ">SX7w8 &middot; Sexual Type 7 with Eight-wing</p>
        <p class="krim-portrait-subtitle">Singer, cabaret artist &amp; presenter, born 1965 &ndash; Animal correspondence: Chimpanzee</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Chimpanzee</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Chimpanzee</strong> is the animal of the Sexual Type 7 &ndash; and Ina Müller is a Chimpanzee through and through. The Chimpanzee needs contact: direct, vivid, unfiltered. It learns not from books but through encounter. It is curious, full of energy, sometimes loud, sometimes tender &ndash; but always present. And when it laughs, the whole forest laughs with it.</p>
          <p class="vb-intro">The German host Ina Müller created with <em>Inas Nacht</em> a format that is unique in the German television landscape: no couch, no desk, no distance. A bar, a piano, a guest, a conversation &ndash; and a host who genuinely listens. The Chimpanzee does not sit opposite. It sits beside. And that makes all the difference.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Seven: Intensity in the Moment</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sexual Seven (SX7)</strong> seeks intensity &ndash; not in grand spectacle but in genuine contact. Naranjo called this subtype <em>Suggestibility</em>: the capacity to engage completely with what is happening right now, and to carry others along. The SX7 is contagious. Its enthusiasm is transmitted not through argument but through presence.</p>
          <p class="vb-intro">Ina Müller on stage is not a concept &ndash; she is an experience. Whether she sings, plays, presents or simply talks: one has the feeling that she wants to be exactly here, exactly now. That is the SX7 in its clearest expression: not planning, but encounter. Not career, but contact. The Chimpanzee does not want to impress. It wants to touch.</p>
        </blockquote>

        <h2 class="vb-section">3. The Eight-Wing: Directness without Detours</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Eight-wing</strong> gives the Sexual Seven something one senses in her immediately: fearlessness. A Seven with a weaker Eight wing evades when things become uncomfortable. The Eight-wing holds firm. It says what it thinks. It does not shy from confrontation &ndash; not from aggression but from the deep trust that truth connects more than politeness.</p>
          <p class="vb-intro">Ina Müller asks uncomfortable questions &ndash; and does so in a way that makes the guest feel not pressured but seen. That is the artistry of the Eight-wing in the Seven: directness that does not wound because it comes from genuine curiosity. The Chimpanzee with Eight-wing reaches for the other not to tear but to hold.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: Gluttony or Excess</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the Seven is called <strong>gluttony</strong> or also <strong>excess</strong>: the hunger for the full experience, for the next laugh, the next song, the next genuine conversation. In the Sexual Seven this hunger directs itself toward people &ndash; toward the abundance of contact, toward the depth of the moment. Ina Müller sings, plays, presents, tours, writes &ndash; and has always expressed the feeling that she cannot get enough of life.</p>
          <p class="vb-intro">That is not excess in a negative sense. It is the SX7w8 that wants to take the world whole &ndash; and gives itself whole in return. The Chimpanzee reaches for everything that lives. Not out of greed. Out of love for life itself.</p>
        </blockquote>

        <h2 class="vb-section">5. The Gift: Closeness as Art</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What Ina Müller has given to German television &ndash; and to music &ndash; is a quality that cannot be produced: genuine closeness. <em>Inas Nacht</em> is not a format that can be copied. It lives from her. From her willingness to truly engage. From her courage to remain in the silence when a guest says something heavy. From her laughter, which is not performed.</p>
          <p class="vb-intro">That is the gift of the SX7w8: intensity that carries. A Chimpanzee that not only plays &ndash; but feels. Ina Müller has never needed a mask. Her face is her programme. And that is the rarest thing in show business.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx7", label:"SX7 – The Chimpanzee: Subtype Profile"},
        {route:"beruehmte-thomas-gottschalk", label:"Portrait: Thomas Gottschalk (SX7w6)"},
      ])}
    </div>
  `);
}

export function jeanneCalmentPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jeanne-calment-portrait.jpg" alt="Jeanne Calment – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jeanne Calment</p>
        <p class="krim-portrait-typ">SP7w6 &middot; Self-Preservation Type 7 with Six-wing</p>
        <p class="krim-portrait-subtitle">Oldest verified woman in human history, 1875–1997 – Animal correspondence: Gorilla</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Gorilla</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The gorilla is the animal of the self-preservation Seven – not a restless wanderer, but an animal that knows its territory, stays there, and enjoys life fully right where it is. Not an animal of the long journey, but one of deep rootedness – strong, calm, at ease within itself. Jeanne Calment, born in Arles in 1875, spent practically her entire life there – and reached, at 122 years and 164 days, the most thoroughly documented lifespan in human history.</p>
          <p class="vb-intro">She rode a bicycle well into old age, still fenced at 85, smoked from 21 to 117, ate nearly a kilogram of chocolate a week, and enjoyed port wine. Not an ascetic life, but a distinctly pleasure-filled long one – carried by a calm that survived even severe losses without turning bitter.</p>
        </blockquote>

        <h2 class="vb-section">2. The self-preservation Seven: Abundance in a single place</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">According to Naranjo, the self-preservation Seven (SE7) is the most grounded of the three Seven subtypes – no restless wanderlust like the sexual Seven, no need for a public stage like the social Seven, but a pragmatic capacity for enjoyment that finds security in a network of small, reliable pleasures. Calment stayed in Arles her entire life, even though financial means and family connections would easily have allowed her to travel.</p>
          <p class="vb-intro">This is the SE7 at its healthiest: the world does not need to be vast – one's own life, lived in a familiar place, is enough. Chocolate, port wine, olive oil, the bicycle, fencing – an abundance of small, recurring pleasures that, over more than a century, sustained an extraordinarily stable, contented life.</p>
        </blockquote>

        <h2 class="vb-section">3. The Six wing: Loyalty to the familiar</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">An SE7 with a more muted Six wing would likely have lived without strong attachment to any particular place. In Calment's case, a pronounced loyalty to place and family emerged instead: she remained faithful to her hometown, her family, and her habits for more than a century, even as her husband, daughter, and grandson died one after another.</p>
          <p class="vb-intro">The Six wing brings not anxiety here, but constancy and a warm, anecdotal way of telling stories – not the confrontational edge of an Eight wing, but a quick-witted, likeable manner with which Calment entertained journalists and visitors well into old age.</p>
        </blockquote>

        <h2 class="vb-section">4. Van Gogh and the viager deal: Wit as a way of life</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">As a teenager, Calment reportedly met Vincent van Gogh in her father's shop, which sold paint and drawing supplies. Her memory of him was less than flattering: "ugly as sin, bad-tempered, and smelled of alcohol" – though she said she had forgiven him his bad manners in retrospect. This blunt, humorous directness remained her trademark for life.</p>
          <p class="vb-intro">At 90, she entered into a "viager" contract: a 47-year-old lawyer paid her a monthly annuity in exchange for the promise of inheriting her apartment upon her death. He expected to collect within a few years – instead he paid for 30 years, died himself at 77, and his widow had to continue the payments until Calment's death. Her comment on it: "You're never too old to make a good deal." That is exactly the SE7 with a Six wing: not cold calculation, but a warm, humorous cheek that treats life as a series of pleasant opportunities.</p>
        </blockquote>

        <h2 class="vb-section">5. The doubts about her age</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 2018, Russian gerontologist Valery Novoselov and statistician Nikolay Zak put forward a theory that drew international attention: the real Jeanne Calment had actually died in 1934, and her daughter Yvonne had subsequently assumed her identity – to avoid inheritance tax. The woman who died in 1997 would then actually have been Yvonne, with a real age of about 99 rather than 122. As evidence, the researchers cited, among other things, inconsistencies in identity documents.</p>
          <p class="vb-intro">An international team led by demographer Jean-Marie Robine, along with French genealogists and local historians from Arles, examined the allegations thoroughly and considered such an identity swap highly unlikely – in a town where the Calment family was well known, such a deception could hardly have gone undetected for sixty years. The majority of the scientific community and French authorities continue to regard her age as well documented. This point is mentioned here transparently, without presenting it as proven – the personality described in this portrait refers to the woman whose well-documented life up to 1997 is publicly recorded.</p>
        </blockquote>

        <h2 class="vb-section">6. The Gorilla that lived a whole century in one place</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Jeanne Calment's life shows the self-preservation Seven with a Six wing at its healthiest, most mature: capacity for pleasure without excess, constancy without confinement, humor without bitterness – even in the face of losing a husband, a daughter, and a grandson. She did not need to travel to live a full life. She did not need to be in the spotlight to be remarkable.</p>
          <p class="vb-intro">The gorilla stays within its territory – and it was exactly there, among chocolate, port wine, and the bicycle, that one of the most remarkable lives of the modern era unfolded. Not a loud record, but the quiet, decades-long art of living deeply and long in a single place.</p>
          <div style="display:flex;gap:0.8rem;flex-wrap:wrap;margin:1.5rem 0;justify-content:center;align-items:flex-start;">
            <div style="width:45%;min-width:150px;aspect-ratio:3/4;overflow:hidden;border-radius:6px;">
              <img src="../assets/portraits/beruehmte-jeanne-calment-1895.jpg" alt="Jeanne Calment around 1895, at about age 20" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center 25%;display:block;" />
            </div>
            <div style="width:45%;min-width:150px;aspect-ratio:3/4;overflow:hidden;border-radius:6px;">
              <img src="../assets/portraits/beruehmte-jeanne-calment-1900er.jpg" alt="Jeanne Calment around 1900–1910, at about age 40" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center 15%;display:block;" />
            </div>
          </div>
          <p style="font-size:0.85rem;color:var(--muted);text-align:center;margin-top:-0.8rem;">Jeanne Calment as a young woman, around 1895 and around 1900–1910 (photographer: Gustave Ouvière, public domain).</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-larry-king", label:"Portrait: Larry King (SE7w6)"},
          {route:"beruehmte-jasmin-paolini", label:"Portrait: Jasmine Paolini (SE7w6)"},
          {route:"beruehmte-elton-john", label:"Portrait: Elton John (SE7w6)"},
        ])}
      </div>
    </div>
  `);
}

export function jonathanGroffPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jonathan-groff-portrait.jpg" alt="Jonathan Groff – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jonathan Groff</p>
        <p class="krim-portrait-typ">SO2w1 &middot; Social Type 2 with One-wing</p>
        <p class="krim-portrait-subtitle">American actor &amp; singer, born 1985 in Lancaster, Pennsylvania &ndash; Animal correspondence: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Golden Retriever</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Golden Retriever</strong> is the animal of the social Two &ndash; an animal that wants to make its warmth accessible to as many people as possible, across age and background. Jonathan Groff reaches his audience on an unusually wide range of levels at once: as a Broadway stage star, as the voice of the reindeer-loving Kristoff in Disney's <em>Frozen</em> franchise for an audience of millions of children, and as a serious television actor in series like <em>Mindhunter</em>.</p>
          <p class="vb-intro">Jonathan Groff was born on March 26, 1985, in Lancaster, Pennsylvania, into a Mennonite family; his father trained standardbred horses. His interest in theater awakened at age three after watching <em>Mary Poppins</em>. Rather than enrolling at Carnegie Mellon University, he moved straight to New York City to pursue theater &ndash; an early, decisive turn toward the stage.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Two: A Public Coming Out as an Act of Care</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the <strong>social Two (SO2)</strong> <em>Ambition</em>: the drive to care for an entire collective through influence and public presence. In October 2009, Groff publicly came out as gay during the National Equality March &ndash; a deliberately public, collective setting rather than a purely private disclosure, carrying the risk of jeopardizing his own career.</p>
          <p class="vb-intro">He later described his role in HBO's <em>Looking</em> (2014–2015), the network's first series centering on the lives of gay men, as the most personal project of his career. He also serves on the board of trustees of Broadway Cares/Equity Fights AIDS &ndash; care that is not limited to his own career, but is directed concretely at an entire community.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-Wing: Seriousness Behind Every Role</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>One-wing (w1)</strong> gives the social Two an inner axis of seriousness and a need to back every public presence with real substance. As early as 2006, Groff's debut role as Melchior Gabor in <em>Spring Awakening</em> was praised by critics for its "ardency and thoughtfulness" &ndash; qualities that go far beyond mere stage presence.</p>
          <p class="vb-intro">In 2024, he won the Tony Award for Best Actor in a Musical for his role as Franklin Shepard in <em>Merrily We Roll Along</em> &ndash; following nominations for <em>Spring Awakening</em>, <em>Hamilton</em>, and <em>Just in Time</em>. The One-wing shows in this persistence: holding to the same high artistic standard for nearly two decades until recognition follows.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Social Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO2w1 lies in the ability to turn personal risk &ndash; a public coming out in the middle of a rising career &ndash; into a source of strength for an entire community, rather than concealing it. Groff's path from a Mennonite childhood in Pennsylvania to one of the most visible queer voices in American theater shows how personal honesty can translate into societal impact.</p>
          <p class="vb-intro">The fate pattern of the Two is <strong>pride</strong> &ndash; the conviction of being indispensable for the wellbeing of others. In the SO2w1, this can combine with a demand to be equally serious and effective in every role and every public engagement &ndash; a standard that produces extraordinary versatility, but rarely pauses.</p>
        </blockquote>

        <h2 class="vb-section">5. The Work: From a Mennonite Childhood to a Tony Award Winner</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">From his first community theater performances in Pennsylvania through his Broadway breakthrough with <em>Spring Awakening</em>, the voice in <em>Frozen</em>, the lead role in <em>Mindhunter</em>, to the 2024 Tony Award, a single thread runs through Groff's work: a presence that repeatedly seeks the broadest possible audience without losing its own seriousness.</p>
          <p class="vb-intro">The Golden Retriever doesn't push into the spotlight out of vanity, but because that's where it can do the most for its pack. Jonathan Groff's path from a Mennonite childhood to a public coming out to a multiply awarded actor shows this drive at its most constructive: personal truth that becomes care for an entire community.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so2", label:"SO2 – The Golden Retriever: Subtype Profile"},
        {route:"beruehmte-joe-navarro", label:"Portrait: Joe Navarro (SO2w1)"},
        {route:"beruehmte-david-lurey", label:"Portrait: David Lurey (SO2w1)"},
      ])}
    </div>
  `);
}

export function katjaRiemannPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-katja-riemann-portrait.jpg" alt="Katja Riemann – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Katja Riemann</p>
        <p class="krim-portrait-typ">SX6w7 &middot; Sexual Type 6 with Seven-wing</p>
        <p class="krim-portrait-subtitle">Actress &amp; musician, born 1963 in Bad Kreuznach &ndash; Animal correspondence: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>wolf</strong> is the animal of the sexual Type 6 &ndash; an animal that does not avoid threat, but looks it straight in the eye. It tests, holds eye contact, bares its teeth when it must. Hardly any German actress embodies this directness as consistently as Katja Riemann: known not only for her roles, but for interviews in which she holds nothing back.</p>
          <p class="vb-intro">The German actress Katja Riemann, born in 1963 in Bad Kreuznach and trained at the Folkwang drama school in Essen, became a star of German cinema overnight with <em>Der bewegte Mann</em> (1994), alongside Til Schweiger (SO4w3). But unlike many who follow their first major success with something similar, she has since shifted consistently between comedy, musical film, and historical drama &ndash; with a willingness to take risks that has become rare.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Six: Plain Speech Over Diplomacy (Countertype)</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sexual Six (SX6)</strong> is the countertype of the Six: it does not show its fear through withdrawal, but meets it with strength, directness, and a presence that shies away from no confrontation. Naranjo called this subtype <em>Strength</em>. Rather than avoiding conflict, the SX6 tends to seek it out &ndash; because clarity gives it more security than diplomatic silence.</p>
          <p class="vb-intro">For decades, Riemann has been known for exactly this stance: in interviews, she speaks bluntly on political and social issues &ndash; war, the causes of displacement, social inequality &ndash; often with a sharpness that has drawn public disagreement and criticism. She does not shy away from it. Whoever attacks her publicly gets an answer, not a retreat. This is exactly what defines the sexual Six: taking a stand, even when it becomes uncomfortable.</p>
        </blockquote>

        <h2 class="vb-section">3. The Seven-Wing: Versatility as Appetite</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Seven-wing</strong> gives the sexual Six a quality an SX6 with a weaker Seven wing would not have: an appetite for the new, playfulness, the pleasure of venturing again and again into unfamiliar territory. Where a more muted Seven wing might feel safe in a proven role, the SX6w7 seeks out the next risk &ndash; not out of restlessness, but out of genuine curiosity.</p>
          <p class="vb-intro">Riemann's filmography shows exactly this range: the screwball comedy <em>Der bewegte Mann</em> (1994), the musical drama <em>Bandits</em> (1997), in which she played drums and sang herself as part of a fictional all-female band, the serious historical drama <em>Nowhere in Africa</em> (2001, Academy Award for Best Foreign Language Film), and <em>Rosenstrasse</em> (2003), about German women protesting the deportation of their Jewish husbands. No genre in which she settled permanently. The Seven-wing keeps pushing her further.</p>
        </blockquote>

        <h2 class="vb-section">4. The Music: A Second Foothold</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">That Riemann recorded her own vocal and instrumental parts for <em>Bandits</em> was no one-time exercise: she later released her own music projects and performed as a singer outside of film as well. For an established actress of her stature, this is an unusual step &ndash; one that carries the risk of being judged in an unfamiliar field, where she had no established reputation to lose, but also none to gain.</p>
          <p class="vb-intro">This is typical for the SX6w7: security arises not from clinging to what is proven, but from the repeated experience of holding one's own even in uncertainty. Each new territory successfully entered confirms that inner certainty anew.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX6w7 is her courage to take a public stand where others prefer to stay silent, while remaining artistically mobile instead of relying on a once-successful formula. Over three decades, Riemann has established herself as one of the most versatile German actresses &ndash; honored, among other awards, with multiple Bambis, the Bavarian Film Award, and the Golden Camera.</p>
          <p class="vb-intro">The shadow of the SX6 shows in the uncompromising way she defends her positions: what begins as courage to take a clear stance can also, in public debate, be perceived as a taste for confrontation that leaves little room for nuance. For the sexual Six, this is the price of its own strength &ndash; whoever never withdraws inevitably also collides where a retreat would have been wiser.</p>
        </blockquote>

      </div>
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx6", label:"SX6 – The Wolf: Subtype Profile"},
        {route:"beruehmte-til-schweiger", label:"Portrait: Til Schweiger (SO4w3) – co-star in ‘Der bewegte Mann’"},
        {route:"beruehmte-byron-katie", label:"Portrait: Byron Katie (SX6w7)"},
        {route:"beruehmte-uwe-ochsenknecht", label:"Portrait: Uwe Ochsenknecht (SX6w7)"},
      ])}
    </div>
  `);
}

export function laurenGardnerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-lauren-gardner-portrait.jpg" alt="Prof. Lauren Gardner – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Prof. Lauren Gardner</p>
        <p class="krim-portrait-typ">SO4w5 &middot; Social Type 4 with Five-wing</p>
        <p class="krim-portrait-subtitle">Engineer and epidemiologist, Johns Hopkins University &ndash; Animal correspondence: Armadillo</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The armadillo that navigated the world through a pandemic</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>armadillo</strong> is the animal of the Social Four &ndash; it does not seek belonging by blending into the crowd, but through an entirely its own, unmistakable role within a community, a role that is what makes it visible in the first place. The American civil engineer and epidemiologist Prof. Lauren Gardner earned her PhD in transportation engineering at the University of Texas at Austin, first taught at the University of New South Wales in Sydney, and joined Johns Hopkins University in 2019 as Associate Professor of Civil and Systems Engineering, with a joint appointment at the Bloomberg School of Public Health.</p>
          <p class="vb-intro">On January 22, 2020, she and her doctoral student Ensheng Dong published an interactive online dashboard that made the spread of a then still largely unknown virus visible in real time &ndash; built for their own small research community, assembled in a single night. Within weeks it became the most used, most cited data source of the entire pandemic: more than 200 billion feature requests, at times 4.5 billion hits in a single day.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Four: significance through an irreplaceable role</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Social Four (SO4)</strong> seeks its worth not in withdrawal, but in a special, irreplaceable standing within a community &ndash; it does not want to be just any member, but the one whose absence would leave something essential missing. Gardner filled exactly that gap: while major global institutions still lacked reliable, publicly accessible real-time data, her dashboard became the central reference for governments, health authorities, media outlets, and millions of private individuals all at once &ndash; a role that simply had not existed before.</p>
          <p class="vb-intro">In 2020, TIME magazine named her one of the 100 most influential people in the world, crediting her with "democratizing data" and filling "a void of public health leadership." Tellingly, Gardner repeatedly stressed in interviews that the work was never a solo project but the result of an entire team &ndash; including colleagues at the Applied Physics Laboratory, students in her Center for Systems Science and Engineering, and partners at Esri. This is the Social Four exactly: one's own uniqueness arises not against the community, but through a special role within it.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five-wing: responsibility instead of performance</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five-wing (w5)</strong> gives the Four an analytical sobriety and a deep sense of duty toward its own expertise &ndash; attention is not sought, but accepted as the necessary consequence of one's own responsibility. "I feel like it's my responsibility to share things that I know," Gardner said of her decision to keep the data running despite the growing public burden. Her concern lay less with her own visibility than with the quality of communication: "Humans are horrible at statistics," she stressed, "presenting raw numbers is really tricky."</p>
          <p class="vb-intro">When the dashboard became the pandemic's most closely watched tool within days, Gardner herself described uncertainty rather than pride: in late March 2020, she publicly questioned whether publishing it had even been the right decision, while the project claimed "150 percent" of her team's time. This Five-wing distance from her own sudden fame &ndash; scrutinizing the matter itself rather than enjoying the attention &ndash; is the purest expression of SO4w5: the Four carries the unique responsibility, the Five-wing keeps a cool, analytical head while doing it.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO4w5 is its ability to turn <strong>its own uniqueness into an irreplaceable role within society</strong> &ndash; Gardner's academic niche expertise in traffic modeling and disease spread became, at the decisive moment, infrastructure that literally the entire world relied on. In 2022 she received the Lasker~Bloomberg Public Service Award, America's most significant medical prize, which she accepted "deeply honored and humbled" for an achievement that "required the hard work and dedication of many others."</p>
          <p class="vb-intro">The shadow of the Social Four with a Five-wing shows in how unprepared a reserved researcher, built for depth rather than exposure, can be when she meets unprecedented global attention: a tool for her own small research community became, overnight, a reference point for billions of people &ndash; a burden that at times made Gardner herself doubt her own decision, even as the dashboard had long since proven indispensable.</p>
        </blockquote>

        <h2 class="vb-section">5. The armadillo that became the reference point of an entire pandemic</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What Gardner gave the world was not merely a technical tool, but a role no one had filled before: that of a reliable, independent voice amid contradictory information. The Social Four with a Five-wing does not ask: how do I stand out? It asks: which role is still missing that only I, with my expertise, can fill?</p>
          <p class="vb-intro">In the end, one image remains that could hardly stand more fittingly for this pattern: an engineer who, out of one night of meticulous data work, became the most used information source of a global crisis &ndash; not through a pursuit of visibility, but through a responsibility that no one else could have taken on quite so precisely.</p>
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
      ])}
    </div>
  `);
}

export function ludwigVanBeethovenPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ludwig-van-beethoven-portrait.jpg" alt="Ludwig van Beethoven – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ludwig van Beethoven</p>
        <p class="krim-portrait-typ">SX6w5 &middot; Sexual Type 6 with Five-wing</p>
        <p class="krim-portrait-subtitle">German composer, 1770&ndash;1827 &ndash; Animal correspondence: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Wolf Who Defied His Own Deafness</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>wolf</strong> is the animal of Sexual Type 6 &ndash; a pack animal that asserts its position through strength and answers every threat with teeth rather than retreat. Few artists embody this pattern as unbrokenly as Ludwig van Beethoven, whose life was one long, decades-spanning fight against a threat that would have forced most people to give up.</p>
          <p class="vb-intro">Born in 1770 in Bonn as the son of an alcoholic, violent court singer, young Ludwig was forced by his father Johann to practice piano, often at night, often under blows &ndash; the father hoped to produce a second Mozart-like child prodigy and sacrificed his son's childhood and safety for it. Out of this early experience of threat within his own home grew a foundational pattern that shaped his entire life: someone who learns as a child that vulnerability gets punished learns to preempt it with hardness.</p>
        </blockquote>

        <h2 class="vb-section">2. Sexual Six: Strength as Counter-Fear</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro"><strong>Sexual Six (SX6)</strong> is, according to Naranjo, the <strong>counter-type</strong> of the Six &ndash; the subtype in which the passion of fear is least visible, because it is turned into its opposite. SX6 meets threat not with withdrawal but with demonstrated strength. Naranjo called this subtype <em>strength</em>: whoever makes themselves unassailable can no longer be hurt.</p>
          <p class="vb-intro">Beethoven's reputation as a difficult, combative character bears the unmistakable signature of this pattern. He broke demonstratively with noble patrons on whom he depended financially, refused to remove his hat before aristocrats, and is said to have hurled at Prince Lichnowsky, who wanted to pressure him into playing for French officers: "Prince, what you are, you are by accident of birth; what I am, I am through myself. There have been and will be thousands of princes; there is only one Beethoven." No deferential artist could have afforded this &ndash; but Sexual Six secures its position not through submission, but through demonstrated unbending will.</p>
          <p class="vb-intro">His famous outbursts of temper, the tearing up of scores, the years-long, bitter custody battle over his nephew Karl against the boy's own mother &ndash; all of this shows the pack animal defending its territory with teeth the moment it feels threatened.</p>
          <p class="vb-intro">Naranjo named this subtype more precisely <em>strength/beauty</em>: the counter-phobic stance of the Sexual Six need not always show itself as open combativeness &ndash; it can equally appear as strikingly attractive, impressive presentation that wards off threat by another route, namely irresistibility rather than fighting power. Both expressions serve the same purpose: to make oneself unassailable. This beauty aspect of SX6 is more often described in women, but appears in men too, for instance as demonstrative elegance or a stylized appearance used as a shield. In Beethoven, the strength side clearly dominated; the beauty side remained largely denied to him &ndash; unlike, say, the polished, socially dazzling presence of some SX6 contemporaries &ndash; and instead surfaced sublimated, in the uncompromising beauty of his music itself.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five-Wing: Retreat into Structure</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five-Wing (w5)</strong> gives the Sexual Six analytical depth and the ability to retreat into compositional structure until every possibility has been thought through. Beethoven's sketchbooks &ndash; thousands of pages of endless reworkings of individual themes, often over years &ndash; show a composer who worked a motif until no weakness remained.</p>
          <p class="vb-intro">In his final years, increasingly isolated by complete deafness, he immersed himself in intensive study of the counterpoint of Bach and Handel and composed the late string quartets &ndash; works of a structural complexity and introspective depth that initially overwhelmed even his contemporaries. The Five-Wing turned the Six's vigilance into compositional precision: whoever has thought through every possibility can no longer be surprised by any criticism.</p>
        </blockquote>

        <h2 class="vb-section">4. The Heiligenstadt Testament: Seizing Fate by the Throat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">From around 1798, Beethoven noticed the first signs of progressive hearing loss &ndash; for a composer, the most existential threat imaginable. In 1802 he withdrew to the village of Heiligenstadt near Vienna and wrote a devastating, never-sent letter to his brothers, the so-called <em>Heiligenstadt Testament</em>: a document of the deepest despair, in which he openly wrote of suicidal thoughts and described his fear of being publicly exposed and mocked as a deaf composer.</p>
          <p class="vb-intro">Yet it is precisely at this lowest point that SX6 shows itself in pure form: rather than giving up, Beethoven made a defiant decision to keep living &ndash; for his art. "It was only my art that held me back," he wrote, "it seemed to me impossible to leave the world before I had brought forth all that I felt was within me." Years later, while working on his Fifth Symphony, he is said to have described the famous opening motif: "Thus Fate knocks at the door." SX6's counter-fear became a world-formula here: not evading fate, but literally seizing it by the throat.</p>
        </blockquote>

        <h2 class="vb-section">5. Energetic Effect: Music That Tore Down Walls</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Beethoven's effect on his contemporaries carried a raw, immediate force. Those around him described his piano playing as almost violently intense; his improvisations could move listeners to tears. When he originally intended to dedicate his Third Symphony, the <em>Eroica</em>, to Napoleon Bonaparte (SO2w3), and then learned that Napoleon had crowned himself emperor, legend has it he tore through the title page so violently that it left a hole in the paper, furiously striking out Napoleon's name &ndash; a wolf withdrawing its loyalty the instant the honoree revealed himself as a tyrant.</p>
          <p class="vb-intro">And yet: behind this raw power lay the same vulnerability he spent his life trying to cover. His music &ndash; from the tender slow movements to the ecstatic finales &ndash; reveals an emotional depth that, in direct contact with people, often stayed hidden behind gruffness and mistrust. SX6's strength is always also armor over a heart too afraid to be shown unprotected.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: The Ninth, Composed in Complete Silence</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 1824, at the premiere of his Ninth Symphony with its world-famous <em>Ode to Joy</em>, Beethoven was already completely deaf. Legend has it that a singer had to turn him by the sleeve so he could at least see the audience's thunderous applause &ndash; he could not hear it. A man who could no longer perceive music had just created one of the most significant works in music history, a hymn to universal brotherhood, composed from the deepest interior of a man who himself remained isolated his entire life.</p>
          <p class="vb-intro">This is SX6w5 at its fullest expression: a threat that would have silenced anyone else became the starting point for music that still tears down walls between people today. The wolf who defied his own deafness left posterity not surrender, but a defiance that became joy.</p>
        </blockquote>

        <p class="vb-intro">The far less known illness of the abdomen and liver that ran parallel to his deafness is explored in full in the separate <a href="javascript:void(0)" data-route="krankheitsportraets-ludwig-van-beethoven">illness portrait on Beethoven</a>.</p>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"krankheitsportraets-ludwig-van-beethoven", label:"Illness Portrait: Ludwig van Beethoven (SX6w5)"},
        {route:"beruehmte-franz-schubert", label:"Portrait: Franz Schubert (SE6w5) \u2013 who revered him his whole life"},
        {route:"beruehmte-robert-schumann", label:"Portrait: Robert Schumann (SX7w8)"},
        {route:"beruehmte-wolfgang-amadeus-mozart", label:"Portrait: Wolfgang Amadeus Mozart (SE2w3) \u2013 whom he may have played for"},
        {route:"beruehmte-johann-sebastian-bach", label:"Portrait: Johann Sebastian Bach (SX1w9)"},
        {route:"beruehmte-joseph-haydn", label:"Portrait: Joseph Haydn (SE3w2) \u2013 his brief teacher"},
        {route:"subtype/sx6", label:"SX6 \u2013 The Wolf: Subtype Profile"},
        {route:"beruehmte-friedrich-schiller", label:"Portrait: Friedrich Schiller (SX6w5) \u2013 whose \u2018Ode to Joy\u2019 he set to music in the Ninth"},
        {route:"beruehmte-wladimir-putin", label:"Portrait: Vladimir Putin (SX6w5)"},
        {route:"beruehmte-alice-schwarzer", label:"Portrait: Alice Schwarzer (SX6w5)"},
        {route:"beruehmte-napoleon-bonaparte", label:"Portrait: Napoleon Bonaparte (SO2w3)"},
        {route:"beruehmte-bella-hadid", label:"Portrait: Bella Hadid (SX6w5)"},
      ])}
    </div>
  `);
}

export function marioBarthPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-mario-barth-portrait.jpg" alt="Mario Barth – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Mario Barth</p>
        <p class="krim-portrait-typ">SX9w8 &middot; Sexual Type 9 with Eight-wing</p>
        <p class="krim-portrait-subtitle">Comedian, born 1972 in Berlin &ndash; Animal correspondence: Sloth</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Sloth</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sloth</strong> is the animal of Sexual Type 9 &ndash; an animal that does not fight, but merges. It hangs relaxed in the branches, lets the world drift past, and dissolves entirely into its surroundings. But anyone who thinks the sloth is defenseless is mistaken: touched in the wrong spot, it suddenly responds with surprising force.</p>
          <p class="vb-intro">The German comedian Mario Barth, born 1972 in Berlin-Mariendorf, one of six siblings, first trained as a telecommunications electrician before turning to comedy. In 2001 he debuted with his first stage show &ndash; and from then on merged with a stage persona that spoke to a mass audience: the Berlin everyman who nails the eternal friction between men and women.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Nine: Merging with the Crowd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sexual Nine (SX9)</strong> is what Naranjo called <em>Fusion</em>: peace through complete absorption into another person, an audience, a mood. The SX9 does not lose itself in this &ndash; it finds itself precisely in this state of oneness with the other.</p>
          <p class="vb-intro">Barth's stage shows &ndash; “Männer sind Schweine, Frauen aber auch,” “Männer sind primitiv, aber glücklich!,” “Männer sind peinlich, Frauen manchmal auch!” &ndash; live off exactly this fusion: he doesn't talk about the audience, he becomes the voice of the audience. Every joke about everyday friction between men and women only works because millions instantly recognize themselves in it. This isn't observation from the outside &ndash; it's oneness with collective experience.</p>
        </blockquote>

        <h2 class="vb-section">3. The Eight-Wing: Force Behind a Relaxed Presence</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Eight-wing</strong> gives the Sexual Nine a force an SX9 with a weaker Eight-wing lacks: assertiveness, directness, a certain entrepreneurial toughness. The <strong>SX9w8</strong> appears relaxed and easygoing &ndash; and is at the same time capable of fighting with full force for its own cause.</p>
          <p class="vb-intro">On 12 July 2008, Barth set a world record at Berlin's Olympic Stadium with 70,000 spectators for the largest live comedy show &ndash; in 2014 he outdid himself with 116,498 spectators within 24 hours. Scale like that doesn't come from mere easygoingness alone: it took the Eight-wing to turn a relaxed stage persona into a business with its own publishing arm, its own foundation, and multi-million-euro tours. The sloth hangs in the tree &ndash; but it's the tree of an entire forest it has conquered.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: Everyday Life as a Grand Stage</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Barth's humor isn't based on political satire or intellectual wordplay, but on what everyone knows: arguments over driving, tidying up, communication between the sexes. He merges so completely with the common denominator of everyday life that his audience doesn't feel lectured, but understood.</p>
          <p class="vb-intro">Beyond the stage, he built a media empire: his own publishing projects, a foundation, TV formats. In 2016 he founded the Mario Barth Foundation, which supports, among other things, children's and youth projects. Here too, the pattern of the SX9w8 shows itself: the sloth's relaxed presence, combined with the Eight-wing's drive that turns sympathy into lasting structures.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX9w8 is its <strong>ability to merge with an enormous crowd without ever pretending to be someone else</strong>. On stage, Barth comes across as though he were speaking to every single person in the stadium personally &ndash; a rare gift that arises from genuine connection, not technique.</p>
          <p class="vb-intro">The shadow shows in the criticism that has followed him for years: his humor has repeatedly been called crude, clichéd, and repetitive, his topics an unchanging men-versus-women routine with no development. The SX9w8, merging so completely with what already works, finds it hard to deviate &ndash; out of fear of losing the very connection to the audience that this familiar pattern created in the first place.</p>
        </blockquote>

        <h2 class="vb-section">6. The Sloth That Filled a Stadium</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Mario Barth remains even today one of the most successful German-speaking comedians &ndash; his stage shows have repeatedly filled the country's largest stadiums and arenas. His records at the Olympic Stadium remain unmatched: no other comedian in the world has ever performed live in front of so many people at once.</p>
          <p class="vb-intro">What remains is the image of a sloth that doesn't withdraw, but merges with the largest possible crowd imaginable &ndash; and in doing so develops exactly the force needed to fill an entire stadium. Ease and impact, comfort and assertiveness: this is the SX9w8 in its most crowd-pleasing form.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
          {route:"subtype/sx9", label:"SX9 – The Sloth: Subtype Profile"},
          {route:"beruehmte-heike-makatsch", label:"Portrait: Heike Makatsch (SX9w8)"},
          {route:"beruehmte-juergen-von-der-lippe", label:"Portrait: Jürgen von der Lippe (SO9w8) – also crude humor as audience closeness (social Nine, same wing)"},
          {route:"beruehmte-dakota-johnson", label:"Portrait: Dakota Johnson (SX9w8)"},
          {route:"beruehmte-lucy-cooke", label:"Portrait: Lucy Cooke (SX9w8)"},
          {route:"beruehmte-elizabeth-barrett-browning", label:"Portrait: Elizabeth Barrett Browning (SX9w8)"},
        ])}
      </div>
    </div>
  `);
}

export function mileyCyrusPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-miley-cyrus-portrait.jpg" alt="Miley Cyrus – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Miley Cyrus</p>
        <p class="krim-portrait-typ">SX7w6 &middot; Sexual Type 7 with Six-wing</p>
        <p class="krim-portrait-subtitle">Singer, songwriter &amp; actress, born 1992 in Franklin, Tennessee &ndash; Animal correspondence: Chimpanzee</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Chimpanzee</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Chimpanzee</strong> is the animal of the Sexual Type 7 &ndash; lively, contact-seeking, constantly in motion. It does not learn from a distance, but through direct contact with what surrounds it. It transforms when its environment changes &ndash; and does so without false shyness, often right in front of everyone's eyes.</p>
          <p class="vb-intro">The American singer Miley Cyrus, born 1992 in Franklin, Tennessee, daughter of country singer Billy Ray Cyrus, is a Chimpanzee who grew up in public &ndash; from Disney child star to independent artist, from the well-behaved girl in a blonde wig to a startlingly self-assured pop icon, and further into the reflective, self-possessed singer who today touches whole generations with “Flowers”. Every one of these sheddings of skin was loud, visible &ndash; and honest.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Seven: Transformation as a Way of Life</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sexual Seven (SX7)</strong> seeks intensity in immediate experience, not in planned progress. Naranjo called this subtype <em>Suggestibility</em>: the readiness to give oneself completely to a moment, an idea, a relationship &ndash; and to reinvent oneself in the process. Where other people hold on to one identity, the SX7 tries on several, because the new itself is the appeal.</p>
          <p class="vb-intro">Hardly any pop career shows this more clearly than Miley Cyrus's: Hannah Montana, the shattered “Wrecking Ball” version of herself, the brightly coloured, hedonistic “Bangerz” era, the introspective Americana phase of “Younger Now”, and finally the grounded maturity of “Endless Summer Vacation”. Every phase was real, none of them a role. That is exactly the Sexual Seven: she does not play transformation &ndash; she lives it.</p>
        </blockquote>

        <h2 class="vb-section">3. The Six-Wing: Loyalty as the Common Thread</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Six-wing (w6)</strong> gives the Sexual Seven something that seems to contradict it at a glance: the need for bonding, for a reliable core to anchor every transformation to. Where an SX7 with a more muted Six-wing might simply drift, the SX7w6 looks for people and values it can stay loyal to &ndash; even in the middle of permanent change.</p>
          <p class="vb-intro">In Miley Cyrus this shows in the close, lifelong bond with her family, especially with her godmother Dolly Parton, and in her outspoken, unwavering support for the LGBTQ+ community throughout the years &ndash; a loyalty that has never changed while almost everything else around her has. The Six-wing is the dam the Chimpanzee needs so that transformation does not become dissolution.</p>
        </blockquote>

        <h2 class="vb-section">4. From Child Star to Her Own Voice</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">At eleven, Cyrus became a global Disney phenomenon as “Hannah Montana” &ndash; a dual role that literally demanded two identities: the well-behaved schoolgirl Miley and the shining pop star Hannah. For a Sexual Seven, whose deepest need is genuine, unfiltered presence, this forced split became increasingly unbearable.</p>
          <p class="vb-intro">In 2013, with the album “Bangerz” and her performance at the MTV Video Music Awards, she broke with this role radically and publicly &ndash; a break that drew heavy criticism, but was also the moment the Chimpanzee was finally allowed to decide for itself who it wanted to be. In the years that followed, no further scandal came, but instead a steady artistic maturing: from provocation to her own, unmistakable voice.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX7w6 is its ability to keep reinventing itself without losing itself &ndash; every phase of Miley Cyrus looks, in hindsight, like an honest station on a journey, not a denial of the one before. This continuity despite change is the fruit of the Six-wing: the core stays the same even as the surface changes radically.</p>
          <p class="vb-intro">The shadow shows in phases of excessive behaviour, publicly played-out relationship crises &ndash; including the on-and-off, repeatedly interrupted and finally ended relationship with Liam Hemsworth (SO1w2) &ndash; and a need for attention that at times seemed more important than her own stability. The Sexual Seven can, in fleeing emptiness, seek so much intensity that the search itself becomes the trap.</p>
        </blockquote>

        <h2 class="vb-section">6. The Path of Healing: Flowers</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Seven leads from scattering to sobriety &ndash; from the constant search for the next thrill to the ability to actually arrive in one's own life. For the SX7w6 this means no longer using her own capacity for transformation as a flight from bonding, but as an expression of genuine, matured self-love.</p>
          <p class="vb-intro">“Flowers” (2023), the song in which Cyrus sings that she can buy herself flowers, hold her own hand, and love herself better than anyone else ever could, is exactly this healing step compressed into three minutes of pop music. The Chimpanzee, who spent years searching for bonding outside herself, finally finds the reliable core exactly where the Six-wing had suspected it all along: within herself.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx7", label:"SX7 – The Chimpanzee: Subtype Profile"},
        {route:"beruehmte-thomas-gottschalk", label:"Portrait: Thomas Gottschalk (SX7w6)"},
      ])}
    </div>
  `);
}

export function nicolasCagePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-nicolas-cage-portrait.jpg" alt="Nicolas Cage – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Nicolas Cage</p>
        <p class="krim-portrait-typ">SE4w3 &middot; Self-Preservation Type 4 with Three-wing</p>
        <p class="krim-portrait-subtitle">American actor, born 1964 &ndash; Animal correspondence: Dove</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Dove in the Lion's Skin</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>dove</strong> is the animal of the self-preservation Four &ndash; a creature that does not put its deep, often painful emotional life on public display but carries it within, finding its own unmistakable path through quiet persistence. It is tougher than it appears, and its greatest strength lies in rising again, again and again, despite inner vulnerability.</p>
          <p class="vb-intro">The American actor Nicolas Cage was born in 1964 in Long Beach, California, as Nicolas Kim Coppola, nephew of director Francis Ford Coppola. To escape any suspicion of nepotism and to forge a completely independent name for himself, he adopted the stage name "Cage" early on &ndash; inspired by the comic hero Luke Cage and the avant-garde composer John Cage. An act of radical self-assertion, typical of a Four fighting with all its strength against the dissolution of its own identity within an overpowering family tradition.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Four: The Quiet Struggle for One's Own Survival</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation Four (SE4)</strong> differs from the other Four subtypes in that it does not carry its suffering outward but bears it rather stoically &ndash; telling itself: "I suffer better than you, so I don't deserve to complain." This concealed intensity shows in Cage's total commitment to every role: for "Leaving Las Vegas" (1995), for which he won the Academy Award for Best Actor, he spent weeks in excessive alcohol consumption to authentically embody the physical and psychological destruction of his character, a drinking screenwriter.</p>
          <p class="vb-intro">Privately, too, Cage mostly carried his suffering in hiding: after the death of his mother, who suffered from severe psychiatric illness her whole life, he rarely spoke publicly about the family burden this brought with it. This quiet, almost ascetic form of suffering is the signature of the self-preservation Four &ndash; the feeling is real and deep, but it is not put on display, instead channeled into one's own work.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: The Stage as a Survival Strategy</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the Four the ability to turn its inner intensity into effective, audience-facing performance &ndash; and this is exactly what makes Cage's career one of the most unusual in Hollywood. He moves effortlessly between serious, Oscar-winning dramas and eccentric, often deliberately over-the-top action cinema like "Con Air," "Face/Off," or "The Wicker Man" &ndash; roles in which he performs with an intensity that has long since become its own trademark, the so-called "Nic Cage acting," achieving cult status online.</p>
          <p class="vb-intro">In 2022, with "The Unbearable Weight of Massive Talent," he pulled off a self-ironic masterstroke: he played an exaggerated version of himself, playing directly with this very eccentric image. This is typical of the SE4w3: its own difference is not hidden but confidently marketed &ndash; a balancing act between genuine artistic depth and clever self-presentation.</p>
        </blockquote>

        <h2 class="vb-section">4. Financial Collapse and Quiet Rebuilding</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In the 2000s, Cage ran into severe financial turbulence: despite a fortune estimated at over $150 million, he had to file for bankruptcy on several of his real estate projects in 2009, including a castle in Germany and several US properties &ndash; caused by excessive collecting habits (including rare comic books, dinosaur skulls, and even an Egyptian burial tomb) and poor financial management.</p>
          <p class="vb-intro">Instead of complaining publicly, Cage responded with quiet, genuinely remarkable work discipline: he took on dozens of film roles in a short period, many of them in smaller productions made directly for the streaming market, in order to pay down his debts. This years-long, unspectacular rebuilding work in the background, far from the big red carpets, is the purest expression of the self-preservation Four: not complaining, but persistently working until one's own existence is secure again.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SE4w3 is the ability to turn <strong>deep, genuine feeling into powerful art</strong> without losing its own dignity &ndash; Cage's best roles, from "Leaving Las Vegas" to "Pig" (2021), show a vulnerability that, despite all the eccentricity, moves deeply. His persistent financial comeback also shows the toughness inherent in the dove.</p>
          <p class="vb-intro">The shadow showed itself in exactly that financial recklessness that nearly ruined him, as well as in periods of excessive alcohol use he later spoke openly about. The flip side of the self-preservation Four: because suffering is not openly communicated, it can discharge itself in impulsive, self-damaging behavior &ndash; until the consequences grow too large to hide any longer.</p>
        </blockquote>

        <h2 class="vb-section">6. The Dove That Keeps Taking Flight</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Nicolas Cage is today considered one of Hollywood's most idiosyncratic, unpredictable, and yet most consistently working actors &ndash; an artist repeatedly written off and each time reinventing himself through his own strength. His career is proof that financial collapse and artistic substance need not exclude one another.</p>
          <p class="vb-intro">The dove that, despite every storm and repeated fall, keeps taking flight again, following its own unmistakable path &ndash; that is the lasting image of the self-preservation Four with a Three-wing: quiet toughness that, in the end, still shows itself on the big stage.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se4", label:"SE4 – The Dove: Subtype Profile"},
        {route:"beruehmte-adele", label:"Portrait: Adele (SE4w3)"},
        {route:"beruehmte-lady-diana", label:"Portrait: Lady Diana (SE4w3)"},
        {route:"beruehmte-sebastian-urzendowsky", label:"Portrait: Sebastian Urzendowsky (SE4w3) – also an actor, same subtype"},
      ])}
    </div>
  `);
}

export function peterSharpePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-peter-sharpe-portrait.jpg" alt="Dr. Peter Sharpe – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Peter Sharpe</p>
        <p class="krim-portrait-typ">SE1w9 &middot; Self-Preservation Type 1 with Nine-wing</p>
        <p class="krim-portrait-subtitle">Wildlife biologist &ndash; director of bald eagle reintroduction on California's Channel Islands &ndash; Animal correspondence: Eagle</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Eagle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Eagle</strong> is the animal of the self-preservation One &ndash; precise, territorial, marked by quiet, tireless accuracy. The animal image that accompanies the SE1 throughout this compass in fact shows a Bald Eagle &ndash; the very same bird that Dr. Peter Sharpe has spent nearly thirty years researching and rescuing. Unlike the great apes, whose species differ archetypally in clear ways &ndash; gorilla, chimpanzee, and orangutan correspond to three quite different subtypes in the Enneagram &ndash; the Enneagram does not draw that distinction among eagles: whether Golden Eagle or Bald Eagle, the archetypal principle is the same. The question of exact species simply does not arise here.</p>
          <p class="vb-intro">Since 1997, Sharpe has directed the reintroduction and monitoring of bald eagles on California's Channel Islands for the Institute for Wildlife Studies, above all on Santa Catalina Island &ndash; an eagle researcher whose own animal correspondence is the eagle, and whose specific research subject even matches, exactly, the image this compass uses for the SE1.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation One: Diligence as a Life's Task</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation One (SE1)</strong> directs its perfectionism not outward, but toward its own preparation, its own accuracy, an incorruptible diligence in its own craft. Naranjo called this subtype <em>Worry</em>: the constant, mostly unspoken question of whether one has really done everything right. Sharpe, who holds a PhD in zoology from Colorado State University (1998), has worked since 1997 as a Wildlife Ecologist at the Institute for Wildlife Studies in Avalon, California &ndash; and has, almost single-handedly, directed the bald eagle reintroduction program on Santa Catalina Island (since 1997) and Santa Cruz Island (since 2002) ever since.</p>
          <p class="vb-intro">The starting point was an ecological catastrophe: the pesticide DDT had thinned bald eagle eggshells along the California coast so severely that they broke under the weight of incubating adults &ndash; the species was effectively wiped out on the Channel Islands. For decades, Sharpe's work has consisted of meticulous detail work: monitoring nests, swapping eggs by hand or arranging artificial incubation when necessary, banding and individually documenting every single chick &ndash; generation after generation, breeding pair after breeding pair.</p>
        </blockquote>

        <h2 class="vb-section">3. The Nine-Wing: Patience Instead of Urgency</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Nine-wing</strong> gives the SE1's diligence a calm, unhurried baseline that favors endurance over urgency. Where an SE1 with a stronger Two-wing might have engaged in more public advocacy, Sharpe has worked largely in the background for almost thirty years &ndash; no media-driven crusade, but patient, systematic fieldwork, year after year. He accepts the limits of what is feasible realistically instead of forcing them: when fieldwork on the remote San Miguel Island became impossible after 2017, he simply documented it as a data gap rather than risking an unrealistic expedition.</p>
          <p class="vb-intro">This exact combination of precision and calm shows physically as well: even in advanced age, Sharpe personally climbs into nests on cliff edges to band chicks &ndash; not a spectacular gesture for the camera, but the quiet self-evidence that this work simply has to be done, by someone who can do it precisely enough.</p>
        </blockquote>

        <h2 class="vb-section">4. From Near-Extinction to a Stable Population</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 2006, a bald eagle chick hatched on the Channel Islands for the first time in decades without human hand-rearing &ndash; a quiet but decisive turning point. Today, Sharpe's program counts several dozen established breeding pairs across the northern and southern Channel Islands, each one individually known, with its own lineage that Sharpe has meticulously documented over decades. He appears regularly in documentaries and live nest-cam broadcasts &ndash; the calm, competent face of practical eagle recovery in the United States, without ever seeking to be the center of attention himself.</p>
          <p class="vb-intro">Alongside the bald eagles, he has also monitored peregrine falcons, ospreys, golden eagles, and the endemic island fox on the Channel Islands &ndash; always with the same method: patient, long-term field observation instead of quick symbolic gestures.</p>
        </blockquote>

        <h2 class="vb-section">5. The Eagle as a Bridge to Enneagram Homeopathy</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">That people like Sharpe devote decades to exactly the animal that corresponds to their own subtype is no coincidence, but a confirmation: the Enneagram's 27 animal correspondences are not arbitrary labels, but archetypal principles that can be traced through behavior, profession, and calling &ndash; as already seen with Dian Fossey, Jennifer Mather, Dr. Laurie Marker, Prof. Grahame Webb, Dr. Biruté Galdikas, and many others. What's notable is that these same archetypal energies find a further correspondence in Enneagram homeopathy: each of the 27 subtypes is assigned a homeopathic remedy that reflects the same underlying vibration on a material level. For the SE1, this is traditionally Platinum metallicum &ndash; a remedy for high principles, perfectionism, and the quiet, relentless diligence that also characterizes Sharpe's life's work.</p>
          <p class="vb-intro">Readers who want to explore this connection further can find the complete assignment of homeopathic remedies to all 27 subtypes in the <a href="#enneagramm-homoeopathie">Enneagram &amp; Homeopathy</a> section.</p>
        </blockquote>

        <h2 class="vb-section">6. The Eagle That Kept Watch for Decades</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Peter Sharpe's life's work shows the self-preservation One with a Nine-wing at its most steadfast: no spectacular rescue operation, but nearly thirty years of patient, meticulous detail work that literally brought a species back from the brink of local extinction &ndash; breeding pair by breeding pair, egg by egg, chick by chick.</p>
          <p class="vb-intro">The eagle watches long in silence before it acts &ndash; and when it acts, it needs no second chance. That was exactly Sharpe's method: no loud crusade, but the quiet, tireless accuracy of someone who knew that real restoration takes time, care, and a long breath.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
          ${bookTip("enneagramm-zoo", "27 Animal Portraits – each Subtype animal with character, biology and Enneagram connection.", "Enneagramm-Zoo")}
          ${bookTip("archetypen-der-tiere-im-enneagramm", "The archetypal animals of the 9 types as an inner map – images that work instantly.", "Archetypen der Tiere im Enneagramm")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
          {route:"subtype/se1", label:"SE1 – The Eagle: Subtype Profile"},
          {route:"enneagramm-homoeopathie", label:"Enneagram & Homeopathy – Remedy Assignments for All 27 Subtypes"},
        ])}
        ${animalResearcherMatchBlock("beruehmte-peter-sharpe")}
      </div>
    </div>
  `);
}

export function ronaldReaganPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ronald-reagan-portrait.jpg" alt="Ronald Reagan – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ronald Reagan</p>
        <p class="krim-portrait-typ">SO9w8 &middot; Social Type 9 with aft wing</p>
        <p class="krim-portrait-subtitle">40th US President 1981–1989, 1911–2004 – Animal equivalent: Buffalo</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Buffalo</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The buffalo is the animal symbol of the Social Type 9—and no image captures Ronald Reagan more accurately. The buffalo leads not by command, but through movement: when it moves, the herd moves with it. It exudes a calm that inspires trust. Grounded, solid, undaunted—it needs no applause to know where it is going.</p>
          <p class="vb-intro">The American president Ronald Reagan, born in 1911 in Tampico, Illinois, and passing away in 2004, was an actor, union president, governor, and ultimately the 40th President of the United States—serving two terms from 1981 to 1989. He was the oldest president in US history when he took office. He won with an ease that left his opponents baffled: no tension, no edge, no visible ambition. Just a smile, a few simple phrases—and the country followed him.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Nine: America as a Feeling</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">According to Naranjo, the Social Nine (SO9) is the countertype of Type Nine—the subtype that counteracts its own inertia by plunging into community, belonging, and participation. The SO9 does not wish to exist merely for itself. It seeks to be part of something larger—and to give others the feeling that they belong as well.</p>
          <p class="vb-intro">Reagan understood America not as a political system, but as a feeling. His most famous campaign message—"Morning in America" (1984)—was no policy program. It was an invitation: You belong. This country is yours. The SO9 generates loyalty not through persuasion, but through belonging. Reagan was the great unifier—a man who held vast coalitions together by making everyone feel included. The Teflon President: nothing stuck to him because people experienced him not as an individual, but as a mirror.</p>
        </blockquote>

        <h2 class="vb-section">3. The Eight Wing: The Voice That Fills the Room</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Eight wing imparts a quality to the Social Nine that an SO9 with a weaker Eight wing lacks: directness, territoriality, and a willingness for blunt confrontation when it matters. The SO9w8 combines the warmth of the Nine with the courage of the Eight—a combination that is lethally effective in politics.</p>
          <p class="vb-intro">Reagan's most famous declarations were not compromises. "Mr. Gorbachev, tear down this wall!"—Berlin, 1987. "The Soviet Union is an evil empire."—1983. The Eight wing enabled him to speak without hesitation in decisive moments—directly, without diplomatic cushioning, with a clarity that sometimes alarmed his advisors. The Nine waited; the Eight struck at the right moment. That was Reagan's political grammar.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: The Great Communicator</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Ronald Reagan was not the deepest intellectual among US presidents. He rarely read files in their entirety, delegated generously, and enjoyed taking afternoon naps. That was not laziness—it was the SO9. The Social Nine hands over responsibility because it trusts the system and stays out of the way. What Reagan brought to the table instead was rarer and more effective: the ability to make a nation believe in something.</p>
          <p class="vb-intro">His achievements as president are debated, but undeniable. The economy expanded robustly after the 1981/82 recession. The Cold War drew to a close—not through armed conflict, but through a combination of arms race pressure and, later, surprising diplomatic skill alongside Mikhail Gorbachev. Reagan, who had for years labeled the Soviet Union an Evil Empire, met Gorbachev in Reykjavik and Washington—becoming the architect of a diplomatic turning point no one had predicted. The buffalo, once set in motion, travels farther than expected.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow: What the Nine Does Not See</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The bright side of the SO9w8 is its remarkable capacity for integration: Reagan brought together people who shared nothing in common. He lifted the spirits of a nation exhausted and distrustful after Vietnam, Watergate, and the Iran hostage crisis. That is no small feat; it is one of the rare gifts in politics.</p>
          <p class="vb-intro">The shadow: The Nine does not see what it chooses not to see. The AIDS crisis swept across the US in the early 1980s—yet Reagan did not utter the word "AIDS" publicly until 1987, six years into the epidemic, after more than 40,000 Americans had already died. The Iran-Contra affair—illegal arms sales to Iran to fund Nicaraguan Contra rebels—unfolded within his administration, and Reagan maintained he had no knowledge of it. Whether true or not, it describes the SO9 precisely. The Nine delegates—and sometimes looks away.</p>
        </blockquote>

        <h2 class="vb-section">6. The Buffalo Who Smiles</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Ronald Reagan died in 2004 from complications of Alzheimer's disease—a condition that erases memory, dissolves the self, and releases a person from their own history. In 1994, he wrote a moving letter to the American public disclosing his condition. The buffalo that held an entire nation together ultimately lost connection to itself.</p>
          <p class="vb-intro">What remains is the image: a man who smiled when others yelled. Who spoke simple sentences when others wrote treatises. Who did not explain America, but allowed people to feel it. The SO9w8 at its finest is not an ideology—it is a posture. And sometimes, a posture is enough to make history.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        <p class="vb-intro">The Alzheimer's diagnosis made public in 1994 and the handwritten farewell letter are explored in depth in the dedicated <a href="javascript:void(0)" data-route="krankheitsportraets-ronald-reagan">Illness Portrait of Reagan</a>.</p>
        ${relatedLinks([
          {route:"beruehmte-willy-brandt", label:"Portrait: Willy Brandt (SO9w8)"},
          {route:"beruehmte-kevin-costner", label:"Portrait: Kevin Costner (SO9w1)"},
          {route:"beruehmte-angela-merkel", label:"Portrait: Angela Merkel (SE9w8)"},
          {route:"krankheitsportraets-ronald-reagan", label:"Illness Portrait: Ronald Reagan (SO9w8)"},
        ])}
      </div>
    </div>
  `);
}

export function spinozaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-spinoza-portrait.jpg" alt="Baruch de Spinoza – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Baruch de Spinoza</p>
        <p class="krim-portrait-typ">SP5w6 &middot; Self-Preservation Type 5 with Six-wing</p>
        <p class="krim-portrait-subtitle">Rationalist philosopher, 1632&ndash;1677 &ndash; Animal correspondence: Owl</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Owl Who Withdrew from the World</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>owl</strong> is the animal of Type 5 &ndash; a creature that sees most clearly at dusk, that withdraws in order to observe, and whose gaze penetrates what remains hidden to others. It needs no herd, no pack &ndash; its strength lies in solitude, in undisturbed thought.</p>
          <p class="vb-intro">Baruch (later Benedictus) de Spinoza was born in 1632 in Amsterdam, the son of a Portuguese-Jewish merchant family that had fled the Inquisition from Portugal. In 1656, at just 23 years old, he was placed under the <em>cherem</em> by Amsterdam's Jewish community &ndash; the harshest ban the community knew: no contact, no trade, no shared roof with him ever again. The exact reasons were never recorded in writing, but his already-known doubts about the literal interpretation of scripture and about a personal, intervening God are held to be the cause. Spinoza did not react with resistance or negotiation &ndash; he withdrew, changed his name to Benedictus, and lived the rest of his life outside any community that could have bound him.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Five: The Fortress of Thought</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Self-Preservation Five (SP5)</strong> is the reinforcement type of the Five: here the passion of <em>avarice</em> &ndash; the hoarding of energy, space, and time &ndash; is lived most nakedly. Naranjo called this subtype <em>Castle</em>: one's own territory becomes a fortress, behind whose walls the world stays outside. Spinoza lived this castle literally: after the ban, he first moved away from Amsterdam, living in Rijnsburg, later Voorburg, and finally The Hague &ndash; always withdrawn, mostly alone, in small, sparse rooms.</p>
          <p class="vb-intro">He earned his living grinding optical lenses for microscopes and telescopes &ndash; quiet, precise manual work that required almost no contact with others and which he mastered expertly. He lived extremely frugally, largely declined generous financial gifts from admirers, and limited himself to the bare essentials. This radical self-sufficiency was not asceticism for its own sake, but the condition for what he valued most: undisturbed time to think.</p>
        </blockquote>

        <h2 class="vb-section">3. The Six-Wing: The System He Stayed Loyal To</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Six-wing (w6)</strong> gives the Self-Preservation Five a watchful orientation toward security and an extraordinary loyalty to system &ndash; not loyalty to institutions, but to a self-devised, internally coherent principle. Spinoza's major work, the <em>Ethica, ordine geometrico demonstrata</em> (Ethics, Demonstrated in Geometrical Order), published posthumously in 1677, is exactly that: a philosophical system built like a Euclidean theorem &ndash; definitions, axioms, proofs, step by step, without gaps. No other major philosophical work in history is built so uncompromisingly systematically.</p>
          <p class="vb-intro">This loyalty to system also showed in his most famous decision: in 1673, the University of Heidelberg offered him a chair in philosophy &ndash; with the assurance of complete freedom to teach, as long as he did not disturb the state religion. Spinoza declined. He feared that even this restriction would eventually bend his thinking, and chose the insecurity of lens-grinding over the security of an academic post &ndash; the Six-wing weighs risk precisely, and sometimes the answer, against security, falls in favor of intellectual independence.</p>
        </blockquote>

        <h2 class="vb-section">4. Deus sive Natura: The Most Radical Conception of God of His Time</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">At the center of the Ethics stands Spinoza's most famous and consequential formula: <em>Deus sive Natura</em> &ndash; God, or equivalently, Nature. For Spinoza there is only a single, infinite substance encompassing everything that exists &ndash; no God outside the world who created and steers it, but God as the world itself, in its complete, necessary lawfulness. Everything that happens, happens with the same necessity with which the angles of a triangle sum to 180 degrees.</p>
          <p class="vb-intro">This position cost him not only the ban of the Jewish community but made him, during his lifetime and long after his death, a target of the charge of atheism &ndash; his already anonymously published <em>Tractatus Theologico-Politicus</em> (1670), which founded historical-critical biblical interpretation and demanded freedom of opinion, was banned in several countries. Spinoza responded as the reinforcement type of the Five does: he withdrew further, never published the Ethics at all during his lifetime, and limited the circle he entrusted with his thoughts to a small group of trusted correspondents.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of SP5w6 is the ability to combine <strong>radical intellectual independence with a robust, internally coherent system</strong>. Spinoza thought through free will, the relationship between affect and reason, and the limits of tolerance as consistently as almost no philosopher before him &ndash; laying one of the cornerstones of the modern Enlightenment, long before it bore that name.</p>
          <p class="vb-intro">The shadow: his withdrawal from every community &ndash; Jewish and Christian alike &ndash; also meant a life almost entirely without closeness, without a family of his own, without a fixed place of belonging. The castle of the SP5 protects thought, but it costs connection. Spinoza himself seems to have knowingly accepted this price &ndash; whether he also regretted it can hardly be read from his surviving letters. This very inaccessibility still makes him one of the most enigmatic figures in the history of philosophy.</p>
        </blockquote>

        <h2 class="vb-section">6. The Owl Who Died of Lung Disease</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Spinoza died in 1677 in The Hague at only 44 years old, presumably of a lung disease worsened by decades of inhaling glass dust while grinding lenses &ndash; his craft, which secured him the independence to think, likely also contributed to his early death. Friends published his <em>Opera Posthuma</em> that same year, including the Ethics &ndash; the work he himself had never had printed under his own name.</p>
          <p class="vb-intro">The owl left the world as withdrawn as it had passed through it &ndash; without office, without family, without congregation. What remained was a self-contained system of thought that only generations later &ndash; from Leibniz (SO3w4) to Einstein (SO5w4), who explicitly invoked "Spinoza's God" &ndash; would unfold its full significance.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/se5", label:"SP5 – The Owl: Subtype Profile"},
        {route:"beruehmte-david-hume", label:"Portrait: David Hume (SE9w8)"},
        {route:"beruehmte-albert-einstein", label:"Portrait: Albert Einstein (SO5w4) – invoked Spinoza's conception of God"},
        {route:"beruehmte-rene-descartes", label:"Portrait: René Descartes (SP5w6) – whose philosophy he commented on in the only work he published under his own name during his lifetime"},
        {route:"beruehmte-hermann-hesse", label:"Portrait: Hermann Hesse (SP5w6)"},
        {route:"beruhmte-philosophen", label:"Chart: Famous Philosophers in the Enneagram"},
        {route:"krankheitsportraets-spinoza", label:"Illness Portrait: Baruch de Spinoza (SP5w6) – fatal lung disease"},
      ])}
    </div>
  `);
}

export function tilSchweigerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-til-schweiger-portrait.jpg" alt="Til Schweiger – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Til Schweiger</p>
        <p class="krim-portrait-typ">SO4w3 &middot; Social Type 4 with Three-wing</p>
        <p class="krim-portrait-subtitle">Actor, Director &amp; Producer, born 1963 &ndash; Animal correspondence: Armadillo</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Armadillo</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Armadillo</strong> is the animal of the social Type 4 &ndash; armored on the outside, soft within. It rolls up when it feels threatened and presents the world with an impenetrable shell. Those who truly know it are aware: behind that lies an extraordinarily sensitive creature that feels more than it would ever show.</p>
          <p class="vb-intro">The German actor Til Schweiger &ndash; born 1963, director, and producer &ndash; is one of the best-known personalities in German film. His trademark: an aura of coolness, self-assurance, and mildly provocative directness. Those who look more closely recognize the armadillo: a person who, beneath his polished exterior, carries a deep emotional vulnerability &ndash; and transforms it into art with considerable craft.</p>
        </blockquote>

        <h2 class="vb-section">2. Shame as Silent Driving Force</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social Type 4 (SO4)</strong> is the <em>amplification type</em> of the Four: it carries its passion of envy inward &ndash; as <strong>shame</strong>. Naranjo aptly named this subtype so. The life-feeling of the SO4 is a deep sense of lack: the grass on the other side of the fence is always greener. Others have something I don't have. Others <em>are</em> something I am not. This feeling of inferiority works quietly, stubbornly, and exhaustingly within &ndash; and is at the same time the drive that pushes the SO4 toward achievement.</p>
          <p class="vb-intro">In Til Schweiger, this dynamic manifests in a characteristic contradiction: he is one of the most successful German filmmakers &ndash; and yet ceaselessly seeks genuine recognition. His need to be seen as an authentic artist is not vanity. It is the SO4 in its clearest expression: <em>I don't only need success. I need the feeling that what I do really counts.</em> This drive is the core of his creative energy.</p>
          <p class="vb-intro">His intense, penetrating gaze &ndash; in films such as <em>Der bewegte Mann</em>, <em>Keinohrhasen</em>, or <em>Tschiller: Off Duty</em> &ndash; conveys precisely this: an emotional depth that seeks more than applause. He seeks resonance. He seeks connection. That is the SO4: always in search of a connectedness that might finally heal the inner feeling of falling short.</p>
          <p class="vb-intro"><strong>A striking paradox</strong> came to light in March 2024 when Schweiger spoke in the interview podcast <em>Hotel Matze</em> (host: Matze Hielscher) about envy in the German cultural industry. Schweiger explained that he himself had <em>never</em> been an envious person &ndash; and even passed on what he has always told his children:</p>
          <blockquote style="border-left:3px solid var(--gold,#c4a456);margin:0.8rem 0 0.8rem 1rem;padding:0.6rem 1rem;font-style:italic;color:var(--ink);font-size:0.97em;line-height:1.7;">
            „Neid bringt euch gar nichts. Das ist eine negative Eigenschaft. Gibt euch nur ein schlechtes Gefühl. Ihr werdet nicht schlauer, wenn ihr neidisch seid. Ihr werdet nicht reicher. Ihr werdet nicht sportlicher. Ihr kriegt nicht größere Muskeln. Ihr seht nicht besser aus. Ihr werdet nicht erfolgreicher. Wenn ihr nicht neidisch seid, seid ihr viel besser dran."
            <footer style="margin-top:0.4rem;font-style:normal;font-size:0.88em;color:#777;">&mdash; Til Schweiger, <em>Hotel Matze</em>, März 2024</footer>
          </blockquote>
          <p class="vb-intro">From an enneagrammatic perspective, this statement has a distinctly classical depth: the social Type 4, whose hidden passion is <strong>envy</strong> &ndash; in its amplified, inward-turned form as shame and a sense of lack &ndash; declares publicly that he himself has never been envious. He even has a message about it that he passes on to his children. The passion is so deeply anchored in the personality structure, so thoroughly the water he swims in, that he cannot recognize it in himself. This is no reproach &ndash; it is the nature of passion. And it recalls the homeopathic remedy <em>Ignatia amara</em>, which is associated with the social Type 4: a remedy known for its paradoxical symptom picture &ndash; the patient eats when he wants to drink; drinks when he is hungry. The outer and the inner diverge, without the person noticing.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: Coolness as Protective Mask</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the social Four something it would not have on its own: stage energy, presence, the capacity for convincing self-presentation. The SO4w3 feels the shame &ndash; and steps forward nonetheless. It builds a facade that protects it while the interior is not yet ready to show itself.</p>
          <p class="vb-intro">Schweiger's public image is the prime example: cool, direct, slightly aloof, possessed of a self-assured casualness that does not let everyone in. The Three-wing makes him a natural entertainer and a technically skilled filmmaker who knows how to reach an audience. The Four beneath ensures that this entertainment professional is more than a surface: he seeks meaningful stories, emotional depth, genuine contact.</p>
          <p class="vb-intro">This tension &ndash; between the casualness of the Three and the longing of the Four &ndash; is the creative center of the SO4w3. Films like <em>Keinohrhasen</em> or <em>Kokowääh</em> show the warm, vulnerable side. The action roles show the armored one. Both are real. Both are Schweiger.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO4w3 is its ability to sense deep emotions and pour them into art forms that touch others because they find themselves reflected there. Schweiger's films are emotionally charged not as calculation, but because he as a heart type (Type 4 belongs to the heart center of the Enneagram) simply cannot do otherwise: feeling is his mother tongue.</p>
          <p class="vb-intro">The shadow: the underlying feeling of dissatisfaction, mixed with an aura of sadness and melancholy, accompanies the social Four permanently. No success, no applause, no recognition from without can permanently dissolve this basic feeling &ndash; because it stems from the inner conviction of somehow not quite being enough. The Three-wing can bring the temptation to sacrifice the genuine to the successful. When the audience's reaction becomes more important than the inner truth of the work.</p>
          <p class="vb-intro">Schweiger is known for a high degree of pride and a certain sensitivity to criticism. This is no character deficit &ndash; it is the SO4 in its protective mode: whoever feels so much within needs a stable outer facade so as not to be swept away by every wave of judgment.</p>
        </blockquote>

        <h2 class="vb-section">5. The Path of Healing: Recognition from Within</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Four leads from <em>I am not enough</em> to <em>What I am is enough.</em> For the SO4w3, this means no longer needing the mask of the Three as protection, but using it as a free form of expression: not performing because one is not allowed to show oneself &ndash; but performing because one genuinely has something to say.</p>
          <p class="vb-intro">The armadillo needs its armor &ndash; but it need not live in it permanently. The mature SO4w3 learns to receive the inner feeling of lack not as evidence, but to recognize it as an old pattern that says nothing about the true worth of the person. Til Schweiger has, over decades of a long career, created works that have moved people. That is no small thing. That is &ndash; in the most literal sense &ndash; enough.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so4", label:"SO4 – The Armadillo: Subtype Profile"},
        {route:"beruehmte-taddl", label:"Portrait: Taddl (SO4w3)"},
        {route:"beruehmte-romy-schneider", label:"Portrait: Romy Schneider (SO4w3)"},
      ])}
    </div>
  `);
}

export function vincentVanGoghPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-vincent-van-gogh-portrait.jpg" alt="Vincent van Gogh" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Vincent van Gogh</p>
        <p class="krim-portrait-typ">SP4w5 &middot; Self-Preservation Type 4 with Five-wing</p>
        <p class="krim-portrait-subtitle">Dutch painter, 1853&ndash;1890 &ndash; Animal correspondence: Dove</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Dove</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>dove</strong> is the animal of the Self-Preservation Four – it does not put its deep emotional life on display, but processes it in quiet, often decades-long persistence. Vincent van Gogh was born on March 30, 1853, in Groot-Zundert – exactly one year to the day after his mother had given birth to a stillborn son, who had also been baptized Vincent. In the village cemetery stood a gravestone bearing his own name and birth year, past which the family walked every Sunday – a child who literally grew up in the shadow of a predecessor he could never replace.</p>
          <p class="vb-intro">This early experience of never being fully one's own, unmistakable self, but always also a replacement, is the soil in which the Self-Preservation Four grows. Van Gogh, son of a Calvinist pastor, worked first as an art dealer in The Hague, London, and Paris, then briefly as a teacher, and finally as a lay preacher in the Belgian coal-mining region of the Borinage – where, to stay as close as possible to the miners, he gave away his own clothing, slept on straw, and renounced comfort so radically that his church superiors dismissed him in 1880 for "excessive zeal."</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Four: Suffering as a Quiet Burden</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Self-Preservation Four (SP4)</strong> does not carry its suffering outward but endures it stoically – it tells itself: I suffer better, more quietly, more deeply than others, and precisely there lies my dignity. Only at twenty-seven, after failing as a preacher, did Van Gogh turn to painting – almost entirely dependent financially on his younger brother Theo, an art dealer in Paris, who supported him with a modest monthly allowance for over a decade. More than 650 surviving letters to Theo document this quiet, never publicly voiced struggle for material survival, while outwardly Van Gogh wrote almost exclusively about color, light, and composition.</p>
          <p class="vb-intro">In just over ten productive years, Van Gogh created around 2,100 works, including more than 860 oil paintings – an output that recalls Balzac's nightly writing marathons, except that Van Gogh often completed several paintings in a single day, frequently outdoors, in wind and heat, with paint he could barely afford. During his lifetime he demonstrably sold only a single painting – "The Red Vineyard" – and carried this almost total public disregard of his life's work without ever giving it up.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five-wing: Life as a Question of System</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five-wing (w5)</strong> gives the Four an analytical distance from its own pain – the feeling is not merely lived through but cast into a carefully considered, almost encyclopedic structure of thought. Van Gogh, largely self-taught, pursued his artistic education with systematic thoroughness: he copied hundreds of works by Jean-François Millet to understand composition, built himself a wooden perspective frame to calculate depth precisely, and studied Eugène Delacroix's color theory so intensively that he sketched his own color wheels and rules of contrast in his letters to Theo.</p>
          <p class="vb-intro">This love of system also showed in his enthusiasm for Japanese woodblock prints (ukiyo-e), which he collected, copied, and whose flat coloring and unusual framing he methodically translated into his own painting. Not a spontaneous, unreflected outburst of feeling, then, but a coherent painterly system built up over years – documented in hundreds of letters in which Van Gogh justified his color choices with the same precision a scientist uses to support a thesis.</p>
        </blockquote>

        <h2 class="vb-section">4. Arles, Gauguin, and the Night of December 23, 1888</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 1888, Van Gogh moved into the "Yellow House" in Arles and invited the painter Paul Gauguin to found an artists' colony with him there. Their nine weeks together grew increasingly overshadowed by tension – artistic rivalry, clashing temperaments, Van Gogh's mounting inner agitation. On the evening of December 23, 1888, a violent argument broke out; shortly afterward, Van Gogh cut off part of his own left ear and brought it, wrapped in newspaper, to a woman at a nearby brothel.</p>
          <p class="vb-intro">Following this breakdown, Van Gogh voluntarily admitted himself in May 1889 to the Saint-Paul-de-Mausole asylum near Saint-Rémy-de-Provence – not a forced retreat, but a self-chosen, quiet consequence. It was there, amid recurring psychiatric crises, that he produced one of his most famous works, "The Starry Night" – the Self-Preservation Four, still working on unwaveringly even in its deepest personal upheaval.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP4w5 lies in its ability to turn <strong>the deepest personal suffering into a carefully considered, universal visual system</strong> – Van Gogh's work today moves millions of people worldwide, because he worked through his own inner conflict so honestly and so methodically that an entirely new, unmistakable visual language emerged from it, one that decisively shaped twentieth-century art.</p>
          <p class="vb-intro">The shadow showed in a life that scarcely ever paused: no financial security, almost no human closeness outside his correspondence with Theo, recurring psychiatric crises he rarely shared with anyone, translating them almost exclusively into painting instead. On July 27, 1890, Van Gogh suffered a gunshot wound to the chest near Auvers-sur-Oise and died two days later – the circumstances remain not fully resolved to this day, though they are generally believed to be self-inflicted. The other side of the Self-Preservation Four: the quiet, unwavering persistence with which a life keeps working against every outward resistance can, in the end, turn against life itself.</p>
        </blockquote>

        <h2 class="vb-section">6. The Dove That Painted Its Own Light Into the Storm</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Vincent van Gogh is regarded today as one of the most influential painters in art history – not despite but precisely because he translated his deepest, often painful inner experience into color and form with an analytical precision hardly any other artist of his time achieved.</p>
          <p class="vb-intro">The dove that grew up as a child in the shadow of a stillborn namesake, and who had only a single sold painting to show for an entire life's work – and who nonetheless kept painting unwaveringly until two days before his death – that is the lasting image of this subtype: a quiet, carefully worked-through struggle for its own truth, one that found the recognition it never received in life only decades after its death.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se4", label:"SP4 – The Dove: Subtype Profile"},
        {route:"beruehmte-don-mclean", label:"Portrait: Don McLean (SP4w5) – dedicated the song \"Vincent\" to him, same subtype"},
        {route:"beruehmte-knut-hamsun", label:"Portrait: Knut Hamsun (SP4w5)"},
        {route:"beruehmte-leo-tolstoi", label:"Portrait: Leo Tolstoy (SP4w5)"},
        {route:"beruehmte-nikola-tesla", label:"Portrait: Nikola Tesla (SO7w6)"},
        {route:"beruehmte-sam-altman", label:"Portrait: Sam Altman (SP4w5)"},
        {route:"beruehmte-loris-assadian", label:"Portrait: Loris Assadian (SP4w5)"},
        {route:"beruehmte-paul-gauguin", label:"Portrait: Paul Gauguin (SX8w7) – the conflict in Arles"},
      ])}
    </div>
  `);
}

export function zoeSaldanaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-zoe-saldana-portrait.jpg" alt="Zoe Saldaña – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Zoe Saldaña</p>
        <p class="krim-portrait-typ">SO2w3 &middot; Social Type 2 with Three-wing</p>
        <p class="krim-portrait-subtitle">Actress &amp; producer, born 1978 in Passaic, New Jersey &ndash; Animal correspondence: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Golden Retriever</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Golden Retriever</strong> is the animal of the social Two &ndash; an animal that does not limit its warmth to one person, but extends it to everyone in the pack. It seeks community rather than exclusive attachment, and feels most at ease when it can be part of something larger that it serves.</p>
          <p class="vb-intro">The American actress Zoe Saldaña is the only actress to hold lead roles in several of the highest-grossing film franchises in cinema history &ndash; as Neytiri in <em>Avatar</em>, as Gamora in the Marvel films, as Uhura in the rebooted <em>Star Trek</em> series. In all three cases she is part of an ensemble larger than herself, and carries that ensemble along rather than standing apart from it. The Golden Retriever seeks the ensemble, not the solitary hunt.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Two: Belonging as a Life Principle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social Two (SO2)</strong> seeks its worth not through the one special relationship, but through its role within a community &ndash; through being needed for something larger than itself. Naranjo describes this subtype as the one with the strongest need to feel it belongs to a group and is valuable to it.</p>
          <p class="vb-intro">Saldaña grew up partly with her grandmother in the Dominican Republic and has repeatedly described family and community as the center of her life. In 2016 she co-founded, together with her sisters, the company BESE, a media platform for Latin American voices &ndash; a project explicitly aimed at giving visibility to an entire community, not just herself. This movement, using one's own success to make a larger group visible, is at the core of the SO2.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: Presence That Has to Carry</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the social Two an additional effectiveness: warmth alone is not enough, it must also visibly land, carry, function. It turns the need for belonging into professional presence.</p>
          <p class="vb-intro">Saldaña's roles demand extreme physical and technical precision &ndash; months of movement training for the computer-animated characters in <em>Avatar</em>, elaborate prosthetic makeup as Gamora, exact choreography in action sequences. She delivers not just emotional presence but the technical reliability that billion-dollar franchise productions require. This is the Three-wing: belonging that also proves itself through performance, so that it truly counts within the machinery of a vast system.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: Carrying Three Billion-Dollar Franchises</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Saldaña's filmography is statistically extraordinary: she ranks among the highest-grossing actresses in film history because she embodies central, recurring characters across several franchises simultaneously, rather than confining herself to a single successful role. Alongside Avatar, Marvel, and Star Trek, she has also emerged as a producer and received numerous awards, including the Academy Award for Best Supporting Actress, for her role in <em>Emilia Pérez</em> (2024).</p>
          <p class="vb-intro">This breadth across several major communities and production worlds &ndash; science fiction, superhero cinema, musical drama &ndash; shows the SO2w3 ability to make herself useful and belonging within entirely different ensembles, without losing her own effectiveness.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Social Two</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO2w3 is the ability to combine warmth and effectiveness &ndash; to commit to a community and actually make a difference, rather than merely showing good intentions. Saldaña's commitment to BESE and her public connection to her Dominican heritage show this mature form of SO2 energy.</p>
          <p class="vb-intro">The fate pattern of the Two is <strong>pride</strong> &ndash; the conviction of being indispensable to the community through one's own care and achievement. In the SO2w3, this can show as constant pressure to visibly deliver in every ensemble, every production, without allowing oneself pauses. Moving between several simultaneously running billion-dollar franchises demands exactly this kind of tireless availability.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so2", label:"SO2 – The Golden Retriever: Subtype Profile"},
        {route:"beruehmte-nina-chuba", label:"Portrait: Nina Chuba (SO2w3)"},
        {route:"beruehmte-will-smith", label:"Portrait: Will Smith (SO2w3)"},
      ])}
    </div>
  `);
}

export function franciscoDeGoyaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-francisco-de-goya-portrait.jpg" alt="Francisco de Goya" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Francisco de Goya</p>
        <p class="krim-portrait-typ">SX4w3 &middot; Sexual Type 4 with Three-wing</p>
        <p class="krim-portrait-subtitle">Spanish painter and printmaker, 1746&ndash;1828, born in Fuendetodos, Aragon &ndash; Animal correspondence: Chihuahua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Chihuahua From a Poor Village Who Rose to the Royal Court</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Chihuahua</strong> is the smallest dog breed in the world &ndash; and knows nothing of that proportion. It faces a far greater threat unmoved, barks louder than its size would suggest, and does not back down. Francisco José de Goya y Lucientes was born in 1746 in Fuendetodos, a poor Aragonese village, the son of a gilder &ndash; a modest beginning from which he worked his way, over decades, to First Court Painter of the Spanish crown.</p>
          <p class="vb-intro">Even his early work shows a man unwilling to settle for what was expected of him: he applied unsuccessfully to the Royal Academy several times before finally gaining a foothold by a roundabout route &ndash; as a cartoonist for royal tapestry designs. This Chihuahua burns brighter than its modest origins would suggest.</p>
        </blockquote>

        <h2 class="vb-section">2. Sexual Four: Hate Energy Hurled Outward</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sexual Four (SX4)</strong> does not carry the Four's pain inward, but hurls it outward &ndash; Naranjo called this subtype <em>Rivalry</em> and explicitly taught that the SX4 can appear even more aggressive in expression than some other assertive subtypes of the Enneagram, such as the sexual Eight (SX8): where the SX8 confronts from unbroken strength, the SX4 discharges a pent-up rage often carried for decades &ndash; and it is precisely this intensity in the gaze that makes the two subtypes easy to mistake for one another at first impression.</p>
          <p class="vb-intro">In 1793, Goya suffered a severe, to this day not fully explained illness &ndash; headaches, dizziness, hallucinations, vision problems, ringing in his ears &ndash; that confined him to bed for months and left him deaf by the end. Rather than withdraw, he turned the inner force this left behind outward: in the "Caprichos," 80 etchings published in 1799 that laid bare superstition, clergy, and nobility without disguise, he directed the same intensity that consumed him against an entire society. The Three-wing ensured this rage did not remain private but became publicly effective &ndash; even though only 27 copies sold in the first four years.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: Court Painter to the Crown, Uncompromising Chronicler of Its Truth</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the sexual Four the will to visibility and social impact &ndash; the need for one's own truth not to remain hidden, but to find a stage. In 1786 Goya became painter to the court of Charles III, and in 1799, under Charles IV, finally First Court Painter &ndash; one of the highest artistic positions Spain had to offer.</p>
          <p class="vb-intro">Yet unlike what that position might suggest, he did not flatter his patrons: his most famous group portrait, "The Family of Charles IV" (1800), shows the royal family with an almost unsparing directness &ndash; puffy faces, vain poses, no idealization. Art historians still argue to this day whether this was subtle critique or simply reckless honesty. The Three-wing wanted to be seen &ndash; but it never wanted to lie in order to be seen.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX4w3 shows in Goya's series "The Disasters of War" (Desastres de la Guerra), created between 1810 and 1820 during the Napoleonic occupation of Spain: 82 etchings that show massacres, rape, and famine without any embellishment &ndash; one of the earliest and most unsparing anti-war works in the history of art, which he never dared publish in his lifetime. His painting "The Third of May 1808" captures the execution of Spanish insurgents by French soldiers &ndash; not as a heroic history painting, but as an accusing cry.</p>
          <p class="vb-intro">The fate pattern of the Four is <strong>envy</strong> &ndash; in the SX4 turned into a constant rivalry against anything that presents her with injustice or half-measures. In Goya, this also showed personally: he carried bitter rivalries with other artists and patrons for decades, and did not let his own deafness move him toward restraint &ndash; on the contrary, his paintings grew ever darker, more direct, more uncompromising as his isolation deepened.</p>
        </blockquote>

        <h2 class="vb-section">5. The Legacy: The Chihuahua Who Painted His Own Walls With Terror</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In 1819, at age 72, Goya moved into a country house outside Madrid that already bore the name "Quinta del Sordo" &ndash; literally "Villa of the Deaf Man," named after an earlier, long-deceased owner who had likewise been deaf. A coincidence that became the emblem of Goya's own final years. There, unasked and never intended for any public, he created the 14 "Black Paintings" directly on the walls of his dining and sitting rooms &ndash; among them the famous "Saturn Devouring His Son": images of unsparing, almost unbearable intensity, painted for no one but himself.</p>
          <p class="vb-intro">Goya died in 1828 in exile in Bordeaux, where he had withdrawn after the return of absolutist rule in Spain, at age 82. This Chihuahua had, his whole life long, embellished nothing &ndash; not the crown, not the war, not his own aging darkness. That is exactly what keeps his work so immediate today: it knows no half-measures.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/sx4", label:"SX4 – The Chihuahua: Subtype Profile"},
        {route:"kriminalpsychologie-elizabeth-bathory", label:"Criminal Psychology: Elizabeth B\u00e1thory (SX4w3) \u2013 the same unflinching confrontation with darkness, here acted out instead of processed through art"},
        {route:"beruehmte-voltaire", label:"Portrait: Voltaire (SX4w3)"},
        {route:"beruehmte-freddie-mercury", label:"Portrait: Freddie Mercury (SX4w3)"},
        {route:"beruehmte-arthur-rimbaud", label:"Portrait: Arthur Rimbaud (SX4w3)"},
        {route:"krankheitsportraets-francisco-de-goya", label:"Illness Portrait: Francisco de Goya (SX4w3) – deafness and final crisis"},
        {route:"beruehmte-chester-bennington", label:"Portrait: Chester Bennington (SX4w3)"},
      ])}
    </div>
  `);
}

export function billyBobThorntonPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-billy-bob-thornton-portrait.jpg" alt="Billy Bob Thornton – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Billy Bob Thornton</p>
        <p class="krim-portrait-typ">SO7w6 &middot; Social Type 7 with Six-wing</p>
        <p class="krim-portrait-subtitle">Actor, director, writer and musician, b. 1955 &ndash; Animal correspondence: Beaver</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The beaver who built his career from the driver's seat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>beaver</strong> is the animal of the Social Seven &ndash; it does not build for the moment, but for a body of work that reaches beyond itself, and is never truly finished, constantly expanding what it builds. Billy Bob Thornton, born in 1955 in rural Hot Springs, Arkansas, into modest circumstances, moved to Los Angeles in 1981 with his childhood friend and later co-writer Tom Epperson to become an actor and screenwriter. In the early years he sometimes slept in his own car, worked as a mover and a waiter &ndash; and kept writing scripts nobody had asked for.</p>
          <p class="vb-intro">His breakthrough as a writer came in 1992 with "One False Move," co-written with Epperson. But the true structure of his life was "Sling Blade": first a short film in 1994, then expanded into a feature in 1996, which he wrote, directed and starred in himself &ndash; and for whose screenplay he won an Academy Award. He never stopped building after that: as an actor in dozens of films and series, as a director, as a writer, and since 2007 additionally as the frontman of his own band, The Boxmasters &ndash; as if a single outlet was never quite enough for a beaver of his caliber.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Seven: lending a silenced character a voice</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo calls the <strong>Social Seven (SO7)</strong> "Sacrifice": it sacrifices its own immediate comfort for a larger cause &ndash; and finds its deepest fulfillment precisely there. For Karl Childers, the character Thornton created and played in "Sling Blade" &ndash; a released, intellectually disabled institutional patient &ndash; he spent years developing a distinctive way of speaking, posture and expression, based on a man he had actually known as a child, whose story he placed at the center of an entire film with great care and respect, rather than reducing it to a footnote.</p>
          <p class="vb-intro">His years of odd jobs before the breakthrough read as the same underlying stance: rather than choosing an early, more comfortable path, he held on for years to a body of work that served no one but himself at first &ndash; until, with "Sling Blade," it became something that touched an entire audience.</p>
        </blockquote>

        <h2 class="vb-section">3. The Six-wing: a lifelong writing partnership and meticulous research</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Six-wing (w6)</strong> gives the Social Seven a quality that stands in contrast to its versatility: loyalty to a few, decades-tested connections, and methodical rigor rather than surface-level improvisation. Thornton's writing partnership with Tom Epperson dates back to their shared childhood in Arkansas and carried his career across decades &ndash; not a revolving cast of co-writers, but one fixed, reliable constant.</p>
          <p class="vb-intro">The same Six note shows in the meticulous preparation behind his roles: the voice and gestures of Karl Childers did not arise from spontaneous improvisation but from years of careful observation of a real-life model. Also well documented publicly are his numerous, very specific phobias &ndash; among them antique furniture, certain cutlery and the color lavender &ndash; a need for precisely defined, controllable boundaries within an otherwise restlessly expansive life.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO7w6 is its ability to <strong>stay active across very different forms for decades without spreading itself thin</strong> &ndash; Thornton moves between character-actor roles, directing, screenwriting and music with the same seriousness, carried by the same craftsmanship regardless of medium.</p>
          <p class="vb-intro">The shadow of the Social Seven with a Six-wing shows in how far the search for controllable security can tip into the conspicuous: his publicly documented, highly specific fears and his six marriages &ndash; including the intense media attention around his marriage to Angelina Jolie (SO1w2), complete with vials of each other's blood worn as pendants &ndash; read like an attempt to find fixed, unshakeable anchor points within an otherwise restlessly versatile life.</p>
        </blockquote>

        <h2 class="vb-section">5. From the screenplay to his own stage with the band</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Thornton's work never stopped at film &ndash; typical of the Social Seven, which rarely settles on a single form: since 2007 he has regularly toured with The Boxmasters, a band with which he has released numerous albums, pursued with the same persistence as his film work. Rather than treating the music as a distraction from the main work, it grew into an equally weighted second foothold.</p>
          <p class="vb-intro">He kept building as a television actor as well: his role as Lorne Malvo in the first season of "Fargo" (2014) and later as attorney Billy McBride in "Goliath" showed that he did not rest on one established success, but continually took on new, often morally complex characters.</p>
        </blockquote>

        <h2 class="vb-section">6. The beaver who built a lasting work from a silenced character</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What Thornton leaves behind is a body of work grown from years of uncomfortable persistence &ndash; from nights spent in his own car to an Academy Award for a screenplay he owed to no one but himself until it was finished. Again and again he extended his structure into new, related fields, rather than settling for a single success.</p>
          <p class="vb-intro">His archetypal animal, the beaver, sums up what his work is at its core: he built a long-silenced, overlooked character into one of the most striking American films of his generation &ndash; and, apparently unconsciously, lived his own deepest pattern along the way.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/so7", label:"SO7 – The Beaver: Subtype Profile"},
        {route:"lebensmusterkompass/so7", label:"Life Pattern Compass: SO7 – Beaver"},
        {route:"beruehmte-ali-wong", label:"Portrait: Ali Wong (SO7w6)"},
        {route:"beruehmte-frank-rosell", label:"Portrait: Prof. Dr. Frank Rosell (SO7w6)"},
        {route:"beruehmte-angelina-jolie", label:"Portrait: Angelina Jolie (SO1w2) – longtime wife"},
      ])}
    </div>
  `);
}

export function emmanuelMacronPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/emmanuel-macron-portrait.jpg" alt="Emmanuel Macron – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Emmanuel Macron</p>
        <p class="krim-portrait-typ">SO1w9 &middot; Social Type 1 with Nine-wing</p>
        <p class="krim-portrait-subtitle">French President, born 1977 &ndash; Animal correspondence: Goose</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Goose Who Courted Patiently for Years</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>goose</strong> is the animal of the social One — orderly, disciplined, with an early, firmly rooted sense of how things ought to be, and ready to pursue that conviction with sustained consistency. Emmanuel Macron, born in 1977 in Amiens, the eldest of three children of a physician couple, showed this consistency as early as fifteen: he fell in love with his then-39-year-old teacher, Brigitte Trogneux (SX3w2), and at seventeen told her, calmly and immovably: "Whatever you do, I will marry you."</p>
          <p class="vb-intro">When his parents sent him to a different school in Paris to end the connection, the two kept in touch by letter for years — no dramatic conquest, but patient, unruffled persistence, until Trogneux eventually divorced and moved to Paris to be with him. They married in 2007.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social One: The Youngest President of the Fifth Republic</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social One (SO1)</strong> projects its inner standards of right and wrong outward and cares about the correct functioning of society as a whole. After stints at the elite school ENA, at the finance ministry, and as an investment banker at Rothschild, Macron founded his own movement, "En Marche," in 2016 and was elected, at just thirty-nine, the youngest head of state of the Fifth Republic in 2017 — a step he himself described as a matter of "courage and determination."</p>
          <p class="vb-intro">That determination carried into his governance: he pushed through labor-market and pension reforms with great consistency, at times bypassing the regular parliamentary process — the conviction of fundamentally being right, paired with the One's typical willingness to enforce that conviction against considerable resistance if necessary.</p>
        </blockquote>

        <h2 class="vb-section">3. The Nine-Wing: The Listener in the Aisle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Nine-wing (w9)</strong> shows itself with Macron not in his governance, but in his personal manner: every time the presidential plane takes off, he walks the entire length of the aircraft chatting with every single member of the delegation — including the service staff. Companions describe him as "very kind," with unusually good listening skills. This same calm, unhurried patience was already visible in his years-long written courtship of Brigitte Trogneux — no rushed conquest, but quiet steadiness across distance and time.</p>
          <p class="vb-intro">The contrast is telling: where personal encounters stay patient and attentive, political leadership under pressure — such as the "yellow vest" protests against his reforms — has increasingly been called "Jupiterian": centralizing, top-down, barely mediating anymore. That is the flip side of a Nine-wing that, in a normal state, mutes the One, but under sustained resistance gives way to the One's conviction, which then governs unchecked.</p>
        </blockquote>

        <h2 class="vb-section">4. The Charmer Who Has Hardly Any Friends</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">A close companion once described Macron this way: "He is very kind" — but "he hardly has any friends." This discrepancy between wide-ranging, skillfully deployed kindness toward many and the absence of real closeness in the inner circle is typical of the social One: attention is used systematically, almost disciplined, to advance the larger cause — here, the political mission — rather than primarily to deepen personal bonds. Macron himself has admitted that part of his public manner is "well-calculated staging."</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO1w9 is the ability to <strong>combine clear conviction with patient listening and genuine interest in every individual</strong> — Macron's habit of engaging service staff with the same attentiveness as heads of state shows a form of egalitarianism rarely practiced so consistently.</p>
          <p class="vb-intro">The shadow shows itself where sustained resistance overwhelms the Nine-wing's muting effect: approval ratings persistently below forty percent, the accusation of confusing authority with authoritarianism, and a private, friendship-level isolation despite public closeness to many — the flip side of a One who, when necessary, enforces conviction without mediation at all.</p>
        </blockquote>

        <h2 class="vb-section">6. Between Listening and Ruling Through</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Emmanuel Macron's political biography runs from the patient courtship of a love he held to, calmly and immovably, at seventeen, to the youngest president of the Fifth Republic, who pushed through reforms against considerable public resistance when necessary.</p>
          <p class="vb-intro">Anyone wanting to see how the same person can listen to every individual in the aisle of an airplane and govern through against an entire nation in the Élysée Palace finds, in Macron, one of the clearest illustrations of how differently the same subtype can present itself depending on context and pressure.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so1", label:"SO1 – The Goose: Subtype Profile"},
        {route:"beruehmte-giorgia-meloni", label:"Portrait: Giorgia Meloni (SO1w9)"},
        {route:"beruehmte-ursula-von-der-leyen", label:"Portrait: Ursula von der Leyen (SO1w9)"},
        {route:"beruehmte-helmut-schmidt", label:"Portrait: Helmut Schmidt (SO1w9)"},
        {route:"beruehmte-brigitte-macron", label:"Portrait: Brigitte Macron (SX3w2) – his wife"},
      ])}
    </div>
  `);
}

export function lorisAssadianPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-loris-assadian-portrait.jpg" alt="Loris Assadian – portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Loris Assadian ("Plumes")</p>
        <p class="krim-portrait-typ">SP4w5 &middot; Self-Preservation Type 4 with a Five-Wing</p>
        <p class="krim-portrait-subtitle">Musician, b. 1996 &ndash; Animal correspondence: Dove</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The dove that performs for no one</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>dove</strong> is the animal of the self-preservation Type 4 – a deep inner life that isn't put on public display, but carried quietly and persistently. The French musician Loris Assadian, known by the stage name "Plumes," began a few years ago at his grandmother's place in the countryside, playing Beatles songs for cows – out of pure curiosity whether music moves animals.</p>
          <p class="vb-intro">The videos spread without him seeking it, and the quiet experiment turned into a world tour of zoos, sanctuaries, and equestrian centers. To this day he remains noticeably reserved about it: hardly any interviews, hardly any staged photos of himself – the focus is always the encounter with the individual animal, never himself.</p>
        </blockquote>

        <h2 class="vb-section">2. The self-preservation Four: depth that doesn't put itself on display</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>self-preservation Four (SP4)</strong> processes inner feeling in quiet, persistent form, without seeking applause for its own struggle. Assadian deliberately plays melancholic, minor-key love songs – by his own account, because he is convinced that animals can sense exactly this emotional depth. It isn't about entertainment for him, but about "professing his love," as he puts it himself.</p>
          <p class="vb-intro">Despite now having hundreds of thousands of followers, the actual practice remains unchanged and intimate: one animal, one song, one genuine emotional encounter – not a performance for an audience, even if a video results from it in the end.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five-wing: withdrawal instead of the spotlight</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five-wing</strong> gives the self-preservation Four an additional note of withdrawal – the self would rather disappear behind the cause than put itself in the foreground. In Assadian this shows in how little is publicly known about his private life, how rare iconic portrait photos of him are, and how in the viral videos he almost always stays in the background or off to the side – the camera belongs to the animal, not to him.</p>
          <p class="vb-intro">This deliberate withdrawal from his own image, even though his popularity would easily offer a large stage, is the signature of the Five-wing: security comes from distance to one's own visibility, not from it.</p>
        </blockquote>

        <h2 class="vb-section">4. Being understood by animals rather than seen by people</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Assadian's actual concern isn't directed at a human audience, but at the individual animal in front of him – cow, lion, penguin, horse. He describes his music as an attempt to communicate with beings he considers exceptionally intuitive and emotionally receptive, regardless of whether a human ever watches the video.</p>
          <p class="vb-intro">This need to be understood primarily by a non-human counterpart rather than seen by a human audience clearly distinguishes his pattern from publicity-seeking artist personas – the actual reward lies in the animal's quiet response, not in the applause that follows.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SP4w5 shows in Assadian's ability to reliably share genuine emotional depth without any self-promotion – a rare quality in a public sphere shaped by viral videos that usually favor show over substance.</p>
          <p class="vb-intro">The shadow of the self-preservation Four shows in the risk that his own withdrawal makes the person behind the mission almost entirely invisible – a risk that can become a real strain under sustained global attention, once withdrawal is no longer fully possible.</p>
        </blockquote>

        <h2 class="vb-section">6. The musician who would rather be felt than seen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Loris Assadian's path shows the self-preservation Four with a Five-wing in one of its purest forms: genuine, unstaged emotional depth that deliberately withdraws from its own visibility, even as the whole world watches. The dove doesn't sing for applause – it sings so that a single being feels understood, if only for a moment.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from clinical practice.", "The Hidden Dynamics of the 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
          {route:"subtype/se4", label:"SP4 – The Dove: Subtype Profile"},
          {route:"beruehmte-derek-goodwin", label:"Portrait: Derek Goodwin (SP4w5) – also a quiet connection to animals"},
          {route:"beruehmte-vincent-van-gogh", label:"Portrait: Vincent van Gogh (SP4w5)"},
        ])}
      </div>
    </div>
  `);
}

export function adamSandlerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-adam-sandler-portrait.jpg" alt="Adam Sandler – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Adam Sandler</p>
        <p class="krim-portrait-typ">SX9w1 &middot; Sexual Type 9 with One-wing</p>
        <p class="krim-portrait-subtitle">Actor and comedian, born 1966 &ndash; Animal correspondence: Sloth</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Sloth That Always Hangs With the Same Ones</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sloth</strong> doesn't hang alone in the branches &ndash; it shares its tree with familiar company, without needing much fuss to do it. Adam Sandler, born 1966 in New York, raised in Manchester, New Hampshire, has made practically every one of his films since the late 1980s with the same tight circle: Rob Schneider, Kevin James, David Spade, Allen Covert. Asked once why he never seeks out new acquaintances in Hollywood, he answered dryly: "I don't need to meet new people. I've got the best people in my life already."</p>
          <p class="vb-intro">More than 15 films with Rob Schneider alone, plus his own wife Jackie and both daughters regularly in front of the camera at his production company Happy Madison &ndash; no coincidence, but the central movement of the sexual Nine: merge deeply with the same people again and again, rather than losing oneself in a stream of new acquaintances.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Nine: The One Circle That's Enough</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Sexual Nine (SX9)</strong>, per Naranjo, does not seek a multitude of loose contacts, but complete absorption into a tightly bounded, familiar world. In Sandler this shows not only professionally but privately: since marrying Jackie Titone in 2003, he has been notably low-key and family-oriented for a Hollywood star, avoiding public appearances and society events wherever he can and instead spending time at home with his wife and daughters.</p>
          <p class="vb-intro">This bond to the tight circle even shapes his working method on set: once someone is part of the "Sandler family," they usually stay part of it for decades &ndash; a merging with people, not with roles or projects, that keeps reaffirming itself instead of wearing thin.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-wing: Precision Behind the Casualness</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>One-wing</strong> shows in Sandler not as outwardly visible strictness, but as hidden care behind the seemingly effortless, often deliberately goofy comedy. His production company Happy Madison has delivered the same successful formula with remarkable reliability since the 1990s &ndash; similar team, similar tone, similar shooting locations &ndash; a disciplined system sustained for decades behind the lighthearted facade.</p>
          <p class="vb-intro">This hidden precision becomes even clearer in his dramatic roles: for Paul Thomas Anderson's 'Punch-Drunk Love' (2002) and especially for 'Uncut Gems' (2019), where he played the anxious, constantly overextended jeweler Howard Ratner, Sandler worked with an intensity far beyond his comedian image &ndash; critics called it the best performance of his career. This very combination of casual looseness and sudden, highly focused seriousness is typical SX9w1.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: From 'Saturday Night Live' to His Own Studio</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Sandler joined 'Saturday Night Live' in 1990 and quickly became a fixture there, before establishing himself as an independent box-office draw with films like 'Billy Madison,' 'Happy Gilmore,' and 'The Waterboy.' With Happy Madison Productions he then built a structure in which he became not just an actor, but a producer and employer of his own circle of friends.</p>
          <p class="vb-intro">His move to Netflix from 2014 with a multi-year exclusive deal continued this principle: not a search for new studios or new partners, but a deepening of an already existing, reliable relationship.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Sexual Nine with One-wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX9w1 shows in Sandler in a rare constancy: friendships, marriage, and professional partnerships that hold across decades instead of wearing out &ndash; a loyalty that stands out in a fast-moving industry. The One-wing ensures that this connectedness becomes a functioning, disciplined system rather than mere comfort.</p>
          <p class="vb-intro">The shadow of the Nine lies in the risk of relying too much on what is already familiar &ndash; critics have accused him for years of repeating predictable comedies with the same ensemble instead of seeking artistic risk. That he still occasionally takes that risk, as 'Uncut Gems' shows, points to a Nine who doesn't fully lose herself in the familiar.</p>
        </blockquote>

        <h2 class="vb-section">6. The Star Who'd Rather Stay Home</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Adam Sandler's path shows the sexual Nine with One-wing in a particularly steady form: the same circle of friends in front of and behind the camera, the same marriage for over two decades, the same studio model, continued rather than reinvented. The sloth prefers to hang where it knows its way around &ndash; and shows, precisely there when it counts, a precision no one would have credited it with.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
          {route:"subtype/sx9", label:"SX9 – The Sloth: Subtype Profile"},
          {route:"beruehmte-david-guetta", label:"Portrait: David Guetta (SX9w1)"},
          {route:"beruehmte-jon-bon-jovi", label:"Portrait: Jon Bon Jovi (SX9w1) – also decades-long bond loyalty"},
          {route:"beruehmte-helge-schneider", label:"Portrait: Helge Schneider (SX9w1) – the same precision behind apparent casualness"},
        ])}
      </div>
    </div>
  `);
}

export function neilHarbissonPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-neil-harbisson-portrait.jpg" alt="Neil Harbisson – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Neil Harbisson</p>
        <p class="krim-portrait-typ">SE4w5 &middot; Self-Preservation Type 4 with a Five Wing</p>
        <p class="krim-portrait-subtitle">Artist, born 1982 &ndash; the world's first officially recognized cyborg &ndash; Animal equivalent: Dove</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Dove That Turned Its Color Blindness Into an Organ</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>dove</strong> does not carry its limitation around as a complaint – it works quietly at it until something entirely its own emerges. Neil Harbisson, born in 1982, came into the world with complete achromatopsia: a congenital color blindness that let him see the world only in shades of gray. As a child, classmates once deliberately handed him a red pen instead of a blue one – he wrote an entire essay in the supposedly wrong color without noticing.</p>
          <p class="vb-intro">Rather than accepting this limit, in 2003 he had an antenna implanted, together with computer scientist Adam Montandon, that translates light wavelengths – including infrared and ultraviolet – into vibrations on his skull, which he perceives as sound. Since then, Harbisson hears colors instead of seeing them.</p>
        </blockquote>

        <h2 class="vb-section">2. Self-Preservation Four: No Self-Pity, but a Solution of His Own</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">According to Naranjo, the <strong>Self-Preservation Four (SE4)</strong> is the countertype of the Four: instead of publicly staging one's own suffering, a practical, often years-long solution is worked out for it. Harbisson shows this pattern in its purest form: instead of lamenting his color blindness, he wanted to actively overcome it even as a child – he began associating colors with people he knew so he could imagine them, years before he found the technical solution.</p>
          <p class="vb-intro">He later described his own view of skin color matter-of-factly rather than dramatically: "I used to think that humans were black and white. Since I hear colour, I've detected it's completely wrong. There's no black skin. People who say they are black are actually very, very dark orange." A typical SE4 move: not lamenting one's own perceptual limit, but turning it into a new, independent insight.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five Wing: Years of Technical Precision Work</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five Wing</strong> gives the Self-Preservation Four an exploratory, technically precise note – the solution is not felt, but systematically engineered. The first prototype of his "eyeborg" consisted of a webcam, a five-kilogram computer, and headphones that translated each color into 360 different sound waves. Together with Montandon and later engineer Peter Kese, Harbisson spent years refining that very heavy computer into a lightweight head-mounted device that translates light frequencies into precisely assigned tone frequencies between 384 and 718 hertz.</p>
          <p class="vb-intro">In 2010 he also co-founded the Cyborg Foundation, which systematically advocates for the rights of people with body extensions – again no spontaneous gesture, but the building of a lasting institution.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: From a Passport Dispute to Recognized Cyborg Status</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">When the UK Passport Authority refused to allow the antenna in his passport photo, Harbisson argued persistently that it was not an accessory but part of his body – and prevailed: he has since been officially recognized as the world's first cyborg (a person whose body is permanently fused with a machine). What began as a makeshift solution became an independent art form: he paints music, translates faces into sound portraits, and turns speeches into patterns of color.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Self-Preservation Four with a Five Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SE4w5 shows in Harbisson's ability not to suppress a deep, personal limitation but to spend years turning it into an entirely new form of perception and an independent body of art – without ever putting his own pain on display.</p>
          <p class="vb-intro">The shadow of the Four shows in how closely his own identity has become tied to one hard-won solution – for Harbisson, the antenna is no longer a tool but a declared part of his body. The Five Wing can reinforce this fixation when the precise technical system becomes the only reliable anchor.</p>
        </blockquote>

        <h2 class="vb-section">6. The Dove That Built a New Language Out of Silence</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Neil Harbisson's path shows the Self-Preservation Four with a Five Wing in a particularly radical form: a congenital perceptual limit, worked on quietly and with technical precision for years, until it became a new sense organ and an art form of its own. The dove sees no colors – but by now it hears them more precisely than most people will ever see them.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth &ndash; protective patterns, passions, and the path to essence.", "Who You Really Are &ndash; Volume 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared &ndash; how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
          {route:"subtype/se4", label:"SE4 &ndash; The Dove: Subtype Profile"},
          {route:"beruehmte-barney-fishwick", label:"Portrait: Barney Fishwick (SE4w5) – also quiet, years-long detail work"},
          {route:"beruehmte-connie-chiu", label:"Portrait: Connie Chiu (SE4w5) – also turned a physical trait into a body of independent work"},
          {route:"beruehmte-charlotte-wells", label:"Portrait: Charlotte Wells (SE4w5)"},
          {route:"beruehmte-vincent-van-gogh", label:"Portrait: Vincent van Gogh (SE4w5)"},
        ])}
      </div>
    </div>
  `);
}

export function aliceMillerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-alice-miller-portrait.jpg" alt="Alice Miller – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Alice Miller</p>
        <p class="krim-portrait-typ">SO4w5 &middot; Social Type 4 with a Five Wing</p>
        <p class="krim-portrait-subtitle">1923–2010 – Psychoanalyst, author of "The Drama of the Gifted Child" – Animal correspondence: Armadillo</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Armadillo That Never Showed Its Deepest Wound</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>armadillo</strong> is the animal of the social Four – a creature that turns toward the world while carrying a hard shell around its innermost self. Alicja Englard was born in 1923 to a wealthy Orthodox Jewish family in the Polish city of Lwów. During World War II she escaped the Piotrków Trybunalski ghetto by assuming a non-Jewish identity and hiding her mother and sister in a Warsaw convent. To avoid being exposed, she married Andrzej Miller, a so-called szmalcownik – a blackmailer who informed on hidden Jews to the Gestapo.</p>
          <p class="vb-intro">She kept this secret for the rest of her life. The armadillo curls up when danger is at its greatest – and doesn't fully unroll again even long after the danger has passed.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Four: A Personal Truth Becomes a Public Indictment</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social Four (SO4)</strong> doesn't seek its meaning in hiding but in a deliberately outward-facing, unadapted position against a society that, in its view, suppresses a central truth. In 1946, Miller moved to Switzerland with her husband, earned her doctorate in philosophy, psychology, and sociology in 1953, and then trained as a psychoanalyst – she practiced within the Freudian tradition in Zurich for two decades.</p>
          <p class="vb-intro">In 1987 she broke publicly and uncompromisingly with that very tradition. She accused psychoanalysis of protecting parental authority instead of truly seeing the suffering child, and coined the term "poisonous pedagogy" for socially accepted forms of child-rearing that she exposed as abuse. Not sober professional critique, but a moral indictment of her own former profession – the typical SO4 move: deliberately setting oneself apart from the very community one once belonged to, in order to represent a truth felt to run deeper.</p>
        </blockquote>

        <h2 class="vb-section">3. The Five Wing: Theory Instead of Confession</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Five wing (w5)</strong> gives the social Four a withdrawn, analytically theory-building side. Miller didn't process her own deeply personal history as confession, but transformed it into a comprehensive psychological model: her book "The Drama of the Gifted Child" (1979) describes how a child sacrifices its true self to win its parents' love, building a brilliant but false façade instead – a theory that reads like the encoded translation of her own story, one she never told openly.</p>
          <p class="vb-intro">In her private life, too, she remained extremely closed off: in her books she created a fictionalized narrator to disguise her own biography. Her Holocaust survival, the forced marriage, the true circumstances of her escape – all of it only came to light after her death. A Five wing that allows closeness to one's own truth only by the detour of theory, never through direct, unguarded confession.</p>
        </blockquote>

        <h2 class="vb-section">4. The Passion: Envy as a Painful Gaze at What Was Never Lived</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the Four is called <strong>envy</strong> – for the SO4 not as petty resentment, but as a constant, painful comparison with what others seem to be granted effortlessly: a carefree childhood, unbroken parental love, a life without the necessity of denying oneself in order to survive. "Experience has taught us that we have only one enduring weapon in our struggle against mental illness: the emotional discovery and emotional acceptance of the truth," she wrote – a sentence that was both her life's program and her own, never fully redeemed task.</p>
          <p class="vb-intro">Because this is exactly where the bitterest irony of her life lies: according to the 2013 biography written by her son Martin Miller, she failed to protect him from his father's violent and abusive behavior. The woman who became a worldwide moral authority against child abuse was apparently unable to apply her own unprocessed wartime trauma within her own family.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Social Four</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SO4w5 shows in the worldwide impact of her work: "The Drama of the Gifted Child" became an international bestseller and changed how an entire generation of therapists thought about children's needs and parental power. In 2001 she received the Oskar Pfister Award, and in 2009 the International Sigmund Freud Award for Psychotherapy – recognition, but on the unadapted terms of a woman who publicly challenged an entire discipline.</p>
          <p class="vb-intro">The shadow lies precisely in the gap between public message and private reality that her son exposed after her death. From an Enneagram perspective, this can be read as an extreme form of the SO4 danger: one's own dramatic wound narrative can take up so much space that it crowds out the concrete, everyday care owed to the people standing closest.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: A Truth That Only Became Fully Visible After Death</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Alice Miller died in 2010 in Saint-Rémy-de-Provence in southern France by assisted suicide, after being diagnosed with pancreatic cancer – one last, self-determined decision, fitting for a life that always placed its own terms above outside expectations.</p>
          <p class="vb-intro">Only three years after her death did her son open the shell she herself never allowed to open during her lifetime – making visible what the armadillo kept to itself to the very end: that the search for the truth about a wounded childhood was, for Alice Miller, a public mission, while the private truth remained, right up to the end, her most carefully guarded secret.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/so4", label:"SO4 – The Armadillo: Subtype Profile"},
        {route:"beruehmte-michael-stipe", label:"Portrait: Michael Stipe (SO4w5)"},
        {route:"beruehmte-marcel-proust", label:"Portrait: Marcel Proust (SO4w5)"},
        {route:"beruehmte-edvard-munch", label:"Portrait: Edvard Munch (SO4w5)"},
        {route:"beruehmte-ole-nymoen", label:"Portrait: Ole Nymoen (SO4w5)"},
        {route:"beruehmte-joachim-loew", label:"Portrait: Joachim Löw (SO4w5)"},
      ])}
    </div>
  `);
}

export function ringoStarrPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ringo-starr-portrait.jpg" alt="Ringo Starr" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ringo Starr</p>
        <p class="krim-portrait-typ">SX9w1 &middot; Sexual Type 9 with One-wing</p>
        <p class="krim-portrait-subtitle">Musician, born 1940 &ndash; drummer for the Beatles &ndash; Animal correspondence: Sloth</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Sloth Behind the Drum Kit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sloth</strong> doesn't push itself into the foreground; it carries the whole from behind, merged with whatever is happening around it. Richard Starkey, born in Liverpool in 1940, became exactly that carrier as the Beatles' drummer: not a songwriter at the center like Lennon and McCartney, but the pulse the others built on &ndash; unobtrusive, load-bearing, irreplaceable.</p>
          <p class="vb-intro">Critics and fellow musicians have described his playing for decades as "feel over technique" &ndash; not a virtuoso putting himself on display, but someone who subordinates himself completely to the song so it works. That is exactly the core movement of the sexual Nine: not showing your own skill, but becoming one with the thing itself.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Nine: Merging With the Band, the Marriage, the One Moment</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sexual Nine (SX9)</strong>, per Naranjo, seeks complete merging in the immediate moment &ndash; with a person, a group, a cause. Within the Beatles, Starr was known as the one who mediated conflicts rather than fueling them, who adapted rather than pushing his own position. When tensions escalated during the recording of the "White Album" in 1968, he briefly left the band &ndash; but returned as soon as the others explicitly asked him back, rather than insisting on a solution himself.</p>
          <p class="vb-intro">He has been married to Barbara Bach since 1981; together they went through rehab in Arizona in 1988 after his alcohol and drug use had pushed them both to the brink of collapse. They have both been sober ever since &ndash; a marriage that didn't break apart under crisis but grew closer precisely through surviving it together. Since 2008, Starr has held his "Peace & Love" ceremony on every one of his birthdays: at his home and, by now, at dozens of locations worldwide, fans gather to call out "Peace and Love" together at exactly noon local time &ndash; a personal, almost intimate greeting that happens to circle the entire planet simultaneously, rather than being conceived as a large, impersonal mass event.</p>
        </blockquote>

        <h2 class="vb-section">3. The One-Wing: Over 35 Years of Unbroken Sobriety</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">A Nine with a weak One-wing might easily slide back into old patterns after surviving a crisis; the <strong>One-wing</strong> instead gives Starr a discipline that has held without relapse since 1988 &ndash; over 35 years of unbroken sobriety, repeatedly confirmed publicly, never downplayed. Not occasional restraint, but an absolute principle never again called into question.</p>
          <p class="vb-intro">The same consistency shows in the annual "Peace & Love" message: uninterrupted since 2008, repeated anew every year with the same simple formula &ndash; not shifting campaigns, but a single, unchanged ritual held to without deviation. Here the One-wing brings no confrontational rigor, but the quiet persistence of holding to a once-found principle without wavering.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: From the Beatles' Pulse to the All-Starr Band</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">From 1962 until the band's breakup in 1970, Starr was the Beatles' drummer and occasionally sang his own tracks like "Yellow Submarine" and "With a Little Help from My Friends" &ndash; always with the same unpretentious, self-deprecating lightness that set him apart from the three musically more dominant band members.</p>
          <p class="vb-intro">Since 1989 he has toured with a rotating lineup as "Ringo Starr and His All-Starr Band" &ndash; a format that never places him alone at the center, but presents him as one of several equal musicians sharing a program. Here too: merging with the collective, not solo spotlight.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow of the Sexual Nine with One-Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SX9w1 shows in Starr's ability to build, out of complete adaptation to the whole &ndash; the band, the marriage, the audience &ndash; an artistic and personal constancy that has held for over sixty years, without ever fighting for his own profile.</p>
          <p class="vb-intro">The shadow of the Nine showed in the 1970s and 1980s, when the same capacity for merging expressed itself as excessive alcohol and drug use &ndash; dissolving into intoxication instead of conscious connection, until the shared collapse with Barbara Bach in 1988 forced the turning point.</p>
        </blockquote>

        <h2 class="vb-section">6. The Sloth Who Preferred Carrying to Shining</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The healing path of the Nine leads from the self-forgetting <em>I don't count, as long as I adapt</em> to the insight <em>I am already here, with my own weight, even without displacing anyone.</em> From the load-bearing, never intrusive pulse of the Beatles to the simple message "Peace and Love," repeated every year &ndash; that is the lasting image of this sexual Nine with the One-wing: impact through merging, not through pushing to the front.</p>
          <p class="vb-intro">A revealing comparison is <a href="javascript:void(0)" data-route="beruehmte-jon-bon-jovi">Jon Bon Jovi</a> (SX9w1) &ndash; in him, too, the same capacity for merging shows up both in a decades-long marriage and in loyalty to the same band. More in the <a href="javascript:void(0)" data-route="beruehmte-jon-bon-jovi">portrait of Jon Bon Jovi</a>.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/sx9", label:"SX9 – The Sloth: Subtype Profile"},
        {route:"beruehmte-jon-bon-jovi", label:"Portrait: Jon Bon Jovi (SX9w1) – the same merging with marriage and band"},
        {route:"beruehmte-david-guetta", label:"Portrait: David Guetta (SX9w1)"},
        {route:"beruehmte-willie-nelson", label:"Portrait: Willie Nelson (SX9w1)"},
        {route:"beruehmte-owen-wilson", label:"Portrait: Owen Wilson (SX9w1)"},
      ])}
    </div>
  `);
}

export function kimEngPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-kim-eng-portrait.jpg" alt="Kim Eng" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Kim Eng</p>
        <p class="krim-portrait-typ">SE3w2 · Self-Preservation Type 3 with a Two-Wing</p>
        <p class="krim-portrait-subtitle">Spiritual teacher & founder of "Presence Through Movement," born in Vancouver, birth year not publicly confirmed (likely late 1940s/early 1950s) – Animal correspondence: Raccoon</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Raccoon Who Discovered the Body as a Tool</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>raccoon</strong> is the animal of the self-preservation Three – an animal that works with its own paws, feels, washes, sorts: competence shows here not in a grand gesture, but in the skillful, concrete handling of whatever lies directly in front of it. Kim Eng, born in Vancouver (her exact birth year is not publicly confirmed), began her spiritual search as early as the early 1980s. In 1998 she met Eckhart Tolle and, shortly after, underwent a profound spiritual experience during one of his retreats, followed by seven years of intensive inner training before she herself began guiding others.</p>
          <p class="vb-intro">Since then she has been not only his life partner but a teacher with her own body of work: "Presence Through Movement" (PTM), a practice that makes consciousness accessible through concrete, physical movement – exactly the self-preservation competence of the raccoon, which does not proclaim insight abstractly but works it out hands-on, through the body itself.</p>
        </blockquote>

        <h2 class="vb-section">2. The Self-Preservation Three: The Body as a Site of Truth</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo described the self-preservation Three through the theme of <em>security through one's own competence</em>: worth is not generated through outward presentation but through the concrete, reliable ability to actually do and accomplish something – quietly, without needing the big stage of the social or sexual Three. In Kim Eng this shows up in the deliberate decision to convey her teaching not through lectures or books alone, but through a physically experienced method that people can practice and master themselves.</p>
          <p class="vb-intro">Her own words make this stance clear: "Through movement and through our bodies, we can return to and awaken pure presence and oneness – to who we are beyond the thinking mind and egoic sense of self – accessing infinite power and creativity." No call for belief or trust, but an invitation to a practice that can be verified through one's own doing – the characteristic SE3 stance that certainty arises from one's own, repeatable competence, not from outside affirmation.</p>
        </blockquote>

        <h2 class="vb-section">3. The Two-Wing: A Method Built for Others</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Two-wing</strong> gives the self-preservation Three a quality that goes beyond pure self-efficacy: the wish to put one's own ability directly at the service of others. Kim Eng did not develop PTM as a private practice system, but from the start as something meant to be passed on, taught, and made accessible through workshops, DVDs, and audio programs – including the two bestselling instructional releases "Presence Through Movement: Yin Yoga" and "Presence Through Movement: Qi Flow Yoga."</p>
          <p class="vb-intro">Her own phrasing of its effect is likewise consistently aimed at others: "When we are connected to Source, and body-mind-spirit are aligned – when we realize who we are at the core of our being – we blossom into our life purpose." That is the Two-wing note in the self-preservation Three: competence is not hoarded, but turned into a practice others can use, concretely, step by step, to help themselves.</p>
        </blockquote>

        <h2 class="vb-section">4. Light and Shadow of the Self-Preservation Three with a Two-Wing</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The light of the SE3w2 shows in Kim Eng in how she turned a deeply personal experience – her own spiritual transformation after 1998 – into a teachable, physically grounded method that stands on its own, independent of her role as Tolle's partner. Her own remark that PTM is "not about form" at its deepest level, but that the physical is merely "a vehicle, a portal to stillness," shows a maturity that goes beyond mere self-optimization.</p>
          <p class="vb-intro">The shadow lies in a danger self-preservation Threes with a strong Two-wing often share: tying one's own identity so closely to the work performed and the care given to others that the person independent of the role remains hard to make out in public perception – in Kim Eng's case reinforced by her public position as "Eckhart Tolle's partner," out of whose shadow her own, independent body of work only emerged over years.</p>
        </blockquote>

        <h2 class="vb-section">5. The Raccoon Beside the Sloth</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Three's healing path leads from the conviction <em>I am only worth what I accomplish</em> to the insight <em>I am valuable, regardless of my achievement.</em> Kim Eng's own sentence describes exactly this path from pure doability to presence: "It's not about the form. The physical is simply a vehicle, a portal to stillness and to essence." A Three who has learned that the real action lies not in achieving, but in being consciously present while doing.</p>
          <p class="vb-intro">A revealing comparison is her life and work partner <a href="javascript:void(0)" data-route="beruehmte-eckhart-tolle">Eckhart Tolle</a> (SX9w1): while his sexual Nine expresses itself through complete, almost effortless-seeming merging with the present moment, Kim Eng's self-preservation Three with a Two-wing translates the same teaching of presence into a concrete, physically learnable practice others can carry out themselves. Two completely different Enneagram structures that meet in the same spiritual message – each by its own, type-specific path. More in the <a href="javascript:void(0)" data-route="beruehmte-eckhart-tolle">portrait of Eckhart Tolle</a>.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how the subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All Famous Personalities"},
        {route:"subtype/se3", label:"SE3 – The Raccoon: Subtype Profile"},
        {route:"beruehmte-eckhart-tolle", label:"Portrait: Eckhart Tolle (SX9w1) – her life and work partner"},
        {route:"krankheitsportraets-joseph-haydn", label:"Portrait: Joseph Haydn (SE3w2)"},
      ])}
    </div>
  `);
}

export function dmitriHvorostovskyPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-dmitri-hvorostovsky-portrait.jpg" alt="Dmitri Hvorostovsky – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dmitri Hvorostovsky</p>
        <p class="krim-portrait-typ">SO3w2 · Social Type 3 with Two-wing</p>
        <p class="krim-portrait-subtitle">Russian operatic baritone, 1962–2017 – Animal correspondence: Cheetah</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Cheetah from Siberia</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Cheetah</strong> is the animal of the social Three – fast, striking, built for the one decisive moment when every eye is on it. Dmitri Hvorostovsky, born 1962 in Siberian Krasnoyarsk, needed exactly two international competitions to leap from the provinces to the world stage: in 1987 he won first prize at the Glinka Competition, then in 1989 the BBC Cardiff Singer of the World – beating the Welsh bass-baritone Bryn Terfel, who had been the favorite going into the final.</p>
          <p class="vb-intro">Within a few years, appearances followed at practically every major opera house in the world. The cheetah doesn't wait long for its chance – it seizes it the moment it appears, turning a single won competition into a decades-long international career.</p>
        </blockquote>

        <h2 class="vb-section">2. The Social Three: The "Elvis of Opera"</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>social Three (SO3)</strong> looks for success not in the quiet study, but on the big, publicly visible stage – recognition by as broad an audience as possible is her actual goal. Few nicknames capture that as precisely as the one that stuck to Hvorostovsky internationally: the "Elvis of Opera" – an image that created recognition far beyond the world of classical music.</p>
          <p class="vb-intro">His most striking physical trait, a mane of hair that turned silver before he was 35 and later polar-bear white, became a deliberate trademark – an image that made him instantly recognizable on every poster and concert announcement. The Three knows that recognizability is itself part of the achievement, not just an add-on to it.</p>
        </blockquote>

        <h2 class="vb-section">3. The Two-wing: Generosity Toward the Audience</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Two-wing (w2)</strong> gives the social Three a warm, engaged quality that goes beyond pure ambition. Colleagues and critics consistently described Hvorostovsky not only as a technically outstanding singer, but as someone with a genuine, palpable generosity toward his audience and his fellow performers on stage – an electrifying stage presence aimed at connection, not just admiration.</p>
          <p class="vb-intro">This combination of Three and Two also showed in how he interacted with colleagues like Anna Netrebko on stage: as a partner who carried the shared picture, not a soloist out to outshine others. Success was shared, not hoarded.</p>
        </blockquote>

        <h2 class="vb-section">4. The Actual Achievement: An Unmistakable Vocal Color</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What actually distinguished Hvorostovsky was an exceptionally dark, warm baritone color – often described by critics as "burgundy" – paired with breath control that never lost substance even across long, expressive legato lines. This voice combined Russian melancholy with an Italianate vocal suppleness – a rare combination that made him, especially in the Verdi roles of his later career, a first choice for major opera houses.</p>
          <p class="vb-intro">This technical substance was no accident of the vocal cords alone, but the result of years of discipline – still audible even after he returned to the Metropolitan Opera in September 2015, following his brain tumor diagnosis that June, to sing three performances as Count di Luna in "Il trovatore" opposite Anna Netrebko.</p>
        </blockquote>

        <h2 class="vb-section">5. Light and Shadow</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In the light, Hvorostovsky's SO3w2 shows someone who combined public success with genuine warmth toward audience and colleagues – a stage presence that generated admiration without coming across as cold or distant.</p>
          <p class="vb-intro">The shadow of the Three shows in the consistency with which he held on to the public stage even in the face of his own fatal diagnosis: after his September 2015 return to the Met, further appearances followed almost up to his death: having had to cancel all staged opera performances in December 2016 due to illness-related balance problems, he stepped onto the Met stage unannounced on May 7, 2017, at the gala marking the company's 50th anniversary at Lincoln Center, and sang the aria "Cortigiani, vil razza dannata" from Verdi's "Rigoletto" – the 4,000-strong audience rose for a minutes-long standing ovation. A pattern in which it's hard to say where love of the art ends and the need to maintain the public image to the very end begins.</p>
        </blockquote>

        <h2 class="vb-section">6. The Healing Path</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The Three's healing path leads from the question <em>Am I only valuable when I shine?</em> to the realization <em>I am valuable, even beyond the stage.</em> That Hvorostovsky, in his final years, not only kept performing but also did not hide the vulnerability of his own illness from the public shows a more mature side of the same pattern: strength no longer defined exclusively through flawlessness.</p>
          <p class="vb-intro">He died on November 22, 2017, in London, at 55, after more than two years fighting the brain tumor. The cheetah whose final sprint was no longer aimed at the next competition, but at the simple wish to stay on the stage he loved for as long as possible.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protection patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/so3", label:"SO3 – The Cheetah: subtype profile"},
        {route:"beruehmte-ludwig-xiv", label:"Portrait: Louis XIV (SO3w2)"},
        {route:"beruehmte-enrico-caruso", label:"Portrait: Enrico Caruso (SE3w2)"},
        {route:"krankheitsportraets-dmitri-hvorostovsky", label:"Illness Portrait: Dmitri Hvorostovsky (SO3w2) – glioblastoma"},
      ])}
    </div>
  `);
}

export function adrianoCelentanoPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-adriano-celentano-portrait.jpg" alt="Adriano Celentano" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Adriano Celentano</p>
        <p class="krim-portrait-typ">SX7w8 · Sexual Type 7 with Eight Wing</p>
        <p class="krim-portrait-subtitle">Italian singer, actor and director, born 1938 – animal correspondence: Chimpanzee</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Chimpanzee</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>chimpanzee</strong> is the animal of the sexual Seven – highly intelligent, adaptable, full of impulsive zest for life, with a vitality that opens up new forms of expression at breathtaking speed. Adriano Celentano was born in 1938 into modest circumstances in Milan, on Via Cristoforo Gluck – the street he later immortalized in his hit "Il ragazzo della via Gluck." As a teenager he founded the band "Rock Boys" and was discovered by talent scout Ezio Leoni.</p>
          <p class="vb-intro">From these humble Milanese beginnings, he grew into one of the best-selling Italian artists of all time – more than 150 million records sold, a career as a singer, actor in 39 films, director, and TV host that spanned seven decades.</p>
        </blockquote>

        <h2 class="vb-section">2. The Sexual Seven: Fascination, Not Mere Variety</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>sexual Seven (SX7)</strong> differs from the other Seven subtypes in that its enthusiasm doesn't dissipate into constantly changing variety, but concentrates intensely, almost idealistically, on individual people, projects, or convictions – fascination rather than dispersion. Celentano's marriage to singer and actress Claudia Mori, secretly wed in 1964, has lasted over sixty years to this day (as of 2026) – an unusual constancy for the entertainment industry that shows exactly this SX7-typical focus on a single, deeply meaningful connection rather than changing acquaintances.</p>
          <p class="vb-intro">The same intense focus shows in his musical work: with "Prisencolinensinainciusol" (1972) he created a song in pure gibberish English, rhythmically and phonetically resembling American English without carrying any actual meaning – an experiment he pursued to perfection with full dedication rather than treating it as a mere gimmick, and which decades later is celebrated as an early precursor of today's engagement with language rhythm and flow.</p>
        </blockquote>

        <h2 class="vb-section">3. The Artistic Substance: Rock'n'Roll Pioneer with an Unmistakable Dance Style</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Celentano is considered the musician who brought rock'n'roll to Italy – heavily influenced by Elvis Presley and the American rock'n'roll scene of the 1950s, as well as by the physical stage comedy of <a href="javascript:void(0)" data-route="beruehmte-jerry-lewis">Jerry Lewis (SX7w6)</a>. His nickname "il Molleggiato" ("the Springy One") comes from an unmistakable, angular-elastic dance style and eccentric stage improvisations that remain his trademark to this day.</p>
          <p class="vb-intro">This professional substance also shows in his acting career: 39 films, mostly comedies, in which his physical, body-driven performance takes center stage – not a mere singing career with the occasional film appearance, but an independent, decades-long second artistic discipline.</p>
        </blockquote>

        <h2 class="vb-section">4. The Eight Wing: Unaccommodating Confrontation Instead of Quiet Adaptation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Eight wing (w8)</strong> shows in Celentano as a pronounced, publicly waged nonconformism. He repeatedly used his TV formats, above all "Rock Politik" (since 2005), for sharp, live-broadcast social critique – against environmental destruction, nuclear power, and church power structures, living strictly vegetarian and with pronounced environmental engagement. His positions on the Catholic Church shifted notably over the decades, but always remained confrontationally direct rather than diplomatically hedged.</p>
          <p class="vb-intro">This willingness to openly take on authorities and public opinion, rather than settle into the expected role of a well-behaved entertainer, is pure Eight-wing energy: the sexual Seven with a w8 doesn't just seek intense fascination, it also defends it forcefully against any resistance.</p>
        </blockquote>

        <h2 class="vb-section">5. Bingo Bongo: The Chimpanzee as a Dignified Emblem</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">A particularly fitting parallel to his own animal correspondence came from Celentano himself in 1982 with the film "Bingo Bongo": he plays a man who survives a plane crash in the African jungle as a baby and is raised by chimpanzees. As an adult he's captured and brought to a Milan research institute – there he proves exceptionally strong, perceptive, and intelligent, learns human behavior at breathtaking speed, and ultimately becomes a professor himself.</p>
          <p class="vb-intro">The film never makes the animal side of the story a joke; instead, it shows a raw, untamed vitality that cultivates itself in the shortest possible time – exactly the image of intelligence, adaptability, and learning capacity that the chimpanzee correspondence of the sexual Seven captures at its core. It's no coincidence that Celentano wrote this role for himself: it matches his own nature so precisely that it almost reads as a conscious self-portrait.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: The Chimpanzee Who Taught Italy to Dance</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Adriano Celentano represents a career that consistently oscillated between intense artistic devotion and loud social nonconformism – never merely entertaining, but always carrying his own, uncomfortably stated stance.</p>
          <p class="vb-intro">From the boy on Via Gluck to Italy's best-selling artist, with a marriage lasting over sixty years at its center and a self-written movie chimpanzee as an unconscious self-portrait: this is the sexual Seven with an Eight wing at its most vital – fascination, lived with full physical and political commitment, never held back, never accommodated.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions and the path to essence.", "Who You Really Are – Volume 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies and paths to healing from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles compared – how subtypes of the same type differ from one another.", "The 27 Personalities of the Enneagram")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/sx7", label:"SX7 – The Chimpanzee: subtype profile"},
        {route:"beruehmte-franz-liszt", label:"Portrait: Franz Liszt (SX7w8)"},
        {route:"beruehmte-robert-schumann", label:"Portrait: Robert Schumann (SX7w8)"},
        {route:"beruehmte-serena-williams", label:"Portrait: Serena Williams (SX7w8)"},
        {route:"beruehmte-johann-lafer", label:"Portrait: Johann Lafer (SP7w8)"},
      ])}
    </div>
  `);
}

export function fionaHarveyPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Famous Personalities")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-fiona-harvey-portrait.jpg" alt="Fiona Harvey – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Fiona Harvey</p>
        <p class="krim-portrait-typ">SP2w3 &middot; Self-Preservation Type 2 with Three-Wing</p>
        <p class="krim-portrait-subtitle">British journalist, b. 1972 &ndash; Animal correspondence: Hippopotamus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. The Hippopotamus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>hippopotamus</strong> spends most of its life submerged in the same river &ndash; barely visible from the surface, yet precisely tracking every change along its banks. It does not switch rivers when another one looks more exciting; it stays, dives deeper, and in the end knows every current better than any animal that only passed through.</p>
          <p class="vb-intro">The British journalist Fiona Harvey, born in 1972, graduated in 1993 with a degree in English literature from Christ's College, Cambridge. Her career began in 1994 not in the field that would later define her, but as an editor at the British trade publication PC Week &ndash; a sober, fact-driven start, before she moved to the Financial Times in 2000 as an IT and telecommunications reporter and gradually grew into the environment desk from there.</p>
        </blockquote>

        <h2 class="vb-section">2. Self-Preservation Two: Care Through Presence on the Ground</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo called the <strong>self-preservation Two (SP2)</strong> <em>Me First</em>: care is not given abstractly or from a distance, but concretely, directly, usually with one's own body present at the scene. Since 2004, Fiona Harvey has covered environmental issues full time &ndash; first for the Financial Times, since 2011 for the Guardian &ndash; and has attended nearly every UN Climate Change Conference (COP) in person ever since, from the Arctic to the Amazon, rather than commenting on the negotiations from a London newsroom.</p>
          <p class="vb-intro">This care shows itself not in grand gestures but in the persistent small work of on-the-ground journalism: knowing delegates personally over years, working through negotiating texts in real time, waiting through the night in overcrowded conference centres for the decisive comma in a final declaration. For the SP2, caring for a mass audience is first and foremost a matter of one's own, physically delivered presence &ndash; not a public gesture.</p>
        </blockquote>

        <h2 class="vb-section">3. The Three-Wing: Reach Through Proven Competence</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The <strong>Three-wing (w3)</strong> gives the self-preservation Two a hunger for impact and visible recognition for her ability &ndash; not through self-promotion, but through demonstrable professional authority. Harvey's list of interviewees reads like a who's who of international climate politics: UN Secretary-General António Guterres and his predecessor Ban Ki-moon, former British Prime Minister Tony Blair, former Soviet leader Mikhail Gorbachev, and naturalist Sir David Attenborough.</p>
          <p class="vb-intro">This reach has been honoured repeatedly: twice the Foreign Press Association award for Environment Story of the Year (2005 and 2007), the British Environment and Media Awards Journalist of the Year (2007), the global Society of Environmental Journalists award for outstanding beat reporting on COP26 (2022), a Covering Climate Now award (2024), and a place on the BBC Woman's Hour Power List of 30 top UK women for the planet (2020). For the Three-wing, what matters is less the stage itself than the proof that one's own work has made a difference.</p>
        </blockquote>

        <h2 class="vb-section">4. The Professional Substance: Judgment Built from Two Decades of the Same Negotiation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">What sets Fiona Harvey apart from the rotating cast of international press at each new climate summit is not mere diligence but a very concrete professional skill: placing complex, years-in-the-making decisions into their actual historical context instead of compressing them into a single day's headline. Ahead of COP26 in Glasgow in 2021, she publicly warned against repeating the mistake of COP15 in Copenhagen in 2009, which was almost universally written up as a failure at the time &ndash; even though it produced, for the first time, joint commitments from the US and China to cut emissions and the first pledges from developing countries to curb their future emissions growth.</p>
          <p class="vb-intro">This ability to measure a single negotiating day against two decades of her own observation, rather than against the expectation of a headline, is exactly the craft that earned her the 2022 SEJ award for outstanding beat reporting: not the single story, but the capacity, built up over years, to place one and the same, highly complex subject in a fresh light again and again without ever treating it carelessly.</p>
        </blockquote>

        <h2 class="vb-section">5. The Passion: Pride as Quiet Expertise</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">The passion of the Two is called <strong>pride</strong> &ndash; in the SP2w3, directed at one's own indispensability and the publicly demonstrable impact of one's work. In Fiona Harvey's case, this pride shows itself not as self-dramatisation: little is publicly known about her private life, she rarely steps into the foreground as a person, and instead lets the reliability of her analysis speak for itself &ndash; a typical pattern of the self-preservation instinct variant, whose sense of security rests on proven, quiet competence rather than public visibility.</p>
          <p class="vb-intro">The SP2w3's pride here attaches to a very specific kind of indispensability: being the one person in the press room who still remembers the exact pledges made in Copenhagen in 2009, when Glasgow or Baku is being reported as a supposedly "historic" breakthrough. This kind of pride needs no stage &ndash; it needs to have remained the most reliable voice in the room across decades.</p>
        </blockquote>

        <h2 class="vb-section">6. The Legacy: The Constant in a Shifting News Cycle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">While media attention to climate politics has moved in waves since the early 2000s &ndash; sometimes fading, sometimes reignited by a single event &ndash; Fiona Harvey's reporting stayed constantly present throughout, from the Kyoto follow-up negotiations through Copenhagen, Paris and Glasgow to the present. Freelance contributions to Scientific American, New Scientist, and the Encyclopaedia Britannica extended this constancy further, beyond the news cycle and into longer-term knowledge-sharing.</p>
          <p class="vb-intro">The hippopotamus does not leave its home river, even as the news around it keeps shifting &ndash; for Fiona Harvey, two decades in the same river are not stagnation but the foundation on which the kind of measured, well-informed judgment can develop that a single conference visit could never deliver.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, defense strategies, and healing paths from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 character profiles in comparison – how the subtypes of the same type differ from one another.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"All famous personalities"},
        {route:"subtype/se2", label:"SP2 – The Hippopotamus: Subtype Profile"},
        {route:"beruehmte-ai-weiwei", label:"Portrait: Ai Weiwei (SP2w3)"},
        {route:"beruehmte-carlos-santana", label:"Portrait: Carlos Santana (SP2w3)"},
        {route:"beruehmte-uli-hoeness", label:"Portrait: Uli Hoeneß (SP2w3)"},
        {route:"beruehmte-nusrat-fateh-ali-khan", label:"Portrait: Nusrat Fateh Ali Khan (SP2w3)"},
        {route:"beruehmte-caren-miosga", label:"Portrait: Caren Miosga (SP3w4) – journalist"},
        {route:"beruehmte-ranga-yogeshwar", label:"Portrait: Ranga Yogeshwar (SO2w1) – science journalist"},
      ])}
    </div>
  `);
}
