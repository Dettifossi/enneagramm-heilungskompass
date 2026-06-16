import { architectureAreas, knowledgePrototype, libraryItems, subtypeProfiles, subtypeDetails, werkRegister, uiText } from "./data/de.js?v=2026-06-16-vollwerk-v8";

const app = document.querySelector("#app");
const state = {
  route: location.hash.replace("#", "") || "start",
  profile: subtypeProfiles.sx6,
};
const text = uiText;

document.title = text.meta.appTitle;

window.addEventListener("hashchange", () => {
  state.route = location.hash.replace("#", "") || "start";
  render();
});

function go(route) {
  location.hash = route;
}

function shell(content) {
  return `
    <main class="app-shell">
      ${content}
    </main>
  `;
}

function compassMark(size = "large") {
  return `
    <div class="compass compass--${size}" aria-hidden="true">
      <svg class="compass__svg" viewBox="0 0 200 200" focusable="false">
        <defs>
          <radialGradient id="compass-face-${size}" cx="50%" cy="45%" r="62%">
            <stop offset="0%" stop-color="#fffaf0" />
            <stop offset="72%" stop-color="#edf3ef" />
            <stop offset="100%" stop-color="#d9e5df" />
          </radialGradient>
        </defs>
        <circle class="compass__outer" cx="100" cy="100" r="92" />
        <circle class="compass__face" cx="100" cy="100" r="78" fill="url(#compass-face-${size})" />
        <g class="compass__ticks">
          <line x1="100" y1="10" x2="100" y2="24" />
          <line x1="100" y1="176" x2="100" y2="190" />
          <line x1="10" y1="100" x2="24" y2="100" />
          <line x1="176" y1="100" x2="190" y2="100" />
          <line x1="36" y1="36" x2="46" y2="46" />
          <line x1="164" y1="36" x2="154" y2="46" />
          <line x1="36" y1="164" x2="46" y2="154" />
          <line x1="164" y1="164" x2="154" y2="154" />
        </g>
        <polygon class="compass__north" points="100,22 111,100 100,91 89,100" />
        <polygon class="compass__south" points="100,178 111,100 100,109 89,100" />
        <g class="compass__enneagram">
          <polygon class="compass__triad" points="100,32 159,134 41,134" />
          <polyline class="compass__hexad" points="144,48 123,164 167,88 56,48 77,164 33,88 144,48" />
          <circle cx="100" cy="32" r="4" />
          <circle cx="144" cy="48" r="4" />
          <circle cx="167" cy="88" r="4" />
          <circle cx="159" cy="134" r="4" />
          <circle cx="123" cy="164" r="4" />
          <circle cx="77" cy="164" r="4" />
          <circle cx="41" cy="134" r="4" />
          <circle cx="33" cy="88" r="4" />
          <circle cx="56" cy="48" r="4" />
        </g>
        <circle class="compass__hub" cx="100" cy="100" r="11" />
      </svg>
    </div>
  `;
}

function nav(active) {
  return `
    <nav class="tabbar" aria-label="${text.meta.mainNavigation}">
      ${text.nav
        .map(
          ({ route, label }) =>
            `<button class="${active === route ? "is-active" : ""}" data-route="${route}">${label}</button>`
        )
        .join("")}
    </nav>
  `;
}

function pageHeader(active) {
  return `
    <header class="topline">
      <button class="brand" data-route="start" aria-label="${text.routes.start.brandAria}">
        ${compassMark("mini")}
        <span>${text.meta.appTitle}</span>
      </button>
      ${nav(active)}
    </header>
  `;
}

function startPage() {
  const p = state.profile;
  const copy = text.routes.start;
  return shell(`
    <section class="hero">
      <div class="hero__symbol">${compassMark()}</div>
      <p class="eyebrow">${text.meta.modelLine}</p>
      <h1>${copy.headline}</h1>
      <p class="lead">${copy.lead}</p>
      <div class="hero__actions">
        <button class="primary" data-route="dashboard">${copy.primaryAction}</button>
        <button class="secondary" data-route="knowledge">${copy.secondaryAction}</button>
      </div>
      <div class="entry-panel">
        <p>${copy.mainAreas}</p>
        <div class="choice-grid">
          ${architectureAreas
            .map((area) => `<button data-route="${area.route}">${area.title}</button>`)
            .join("")}
        </div>
      </div>
      <div class="first-glimpse">
        <img src="${p.image}" alt="${text.meta.resonanceImageAltPrefix} ${p.code}" />
        <div>
          <span>${p.code} · ${p.title}</span>
          <strong>${p.focus}</strong>
          <em>${copy.animalPrefix} ${p.archetype}</em>
        </div>
      </div>
    </section>
  `);
}

function dashboardPage() {
  const p = state.profile;
  const copy = text.routes.dashboard;
  return shell(`
    ${pageHeader("dashboard")}
    <section class="dashboard">
      <div class="profile-visual">
        <img src="${p.image}" alt="${text.meta.resonanceImageAltPrefix} ${p.code}" />
      </div>
      <div class="dashboard__copy">
        <p class="eyebrow">${copy.greeting} · ${p.center}</p>
        <h1>${p.code} · ${p.title}</h1>
        <p class="subtle-archetype">${copy.animalBackground} ${p.archetype}</p>
        <p class="focus">${copy.todayFocus} ${p.focus}</p>
        <div class="question-box">
          <span>${copy.organismQuestion}</span>
          <p>${p.organismQuestion}</p>
        </div>
      </div>
    </section>
    <section class="daily-grid">
      ${infoCard(copy.dailyImpulse, p.daily.impulse)}
      ${infoCard(copy.reflectionQuestion, p.daily.question)}
      ${infoCard(copy.nextStep, p.daily.step)}
    </section>
    <section class="quick-actions">
      <button class="primary" data-route="reflection">${copy.reflectToday}</button>
      <button class="secondary" data-route="path">${copy.viewPath}</button>
      <button class="secondary" data-route="tools">${copy.chooseTool}</button>
      <button class="secondary" data-route="knowledge">${copy.checkKnowledge}</button>
    </section>
  `);
}

function reflectionPage() {
  const p = state.profile;
  const copy = text.routes.reflection;
  const saved = getJournal();
  return shell(`
    ${pageHeader("reflection")}
    <section class="narrow">
      <p class="eyebrow">${p.code} · ${copy.suffix}</p>
      <h1>${copy.headline}</h1>
      <label class="journal">
        <span>${p.daily.question}</span>
        <textarea id="journalText" rows="9" placeholder="${copy.placeholder}">${saved}</textarea>
      </label>
      <div class="form-row">
        <button class="primary" id="saveJournal">${copy.save}</button>
        <span id="saveStatus" role="status"></span>
      </div>
      <div class="soft-note">
        <strong>${copy.smallStep}</strong>
        <p>${p.daily.step}</p>
      </div>
    </section>
  `);
}

function pathPage() {
  const p = state.profile;
  const copy = text.routes.path;
  return shell(`
    ${pageHeader("path")}
    <section class="narrow centered">
      <p class="eyebrow">${p.code} · ${copy.suffix}</p>
      <h1>${copy.headline}</h1>
      <p class="lead-small">${p.coreSentence}</p>
    </section>
    <section class="path-grid">
      ${listPanel(copy.pattern, p.pattern, "pattern")}
      <div class="bridge">${compassMark("small")}<span>${copy.bridge}</span></div>
      ${listPanel(copy.growth, p.growth, "growth")}
    </section>
  `);
}

function toolsPage() {
  const p = state.profile;
  const copy = text.routes.tools;
  return shell(`
    ${pageHeader("tools")}
    <section class="narrow centered">
      <p class="eyebrow">${p.code} · ${copy.suffix}</p>
      <h1>${copy.headline}</h1>
      <p class="lead-small">${p.daily.body}</p>
    </section>
    <section class="tool-grid">
      ${p.tools
        .map(
          (tool) => `
            <article class="tool-card">
              <span>${tool.label}</span>
              <h2>${tool.name}</h2>
              <p>${tool.text}</p>
            </article>
          `
        )
        .join("")}
      <article class="tool-card locked">
        <span>${copy.premiumLater}</span>
        <h2>${copy.healingCompass}</h2>
        <p>${copy.healingCompassText}</p>
      </article>
    </section>
  `);
}

function healingPage() {
  const se1 = knowledgePrototype.subtypes[0];
  const copy = text.routes.healing;
  return shell(`
    ${pageHeader("healing")}
    <section class="knowledge-hero">
      <div>
        <p class="eyebrow">${copy.eyebrow}</p>
        <h1>${copy.headline}</h1>
        <p class="lead-small">${copy.lead}</p>
      </div>
      <aside>
        <span>${copy.prototype}</span>
        <strong>${copy.prototypeRef}</strong>
        <p>${copy.prototypeText}</p>
      </aside>
    </section>
    <section class="knowledge-grid">
      <article class="knowledge-card knowledge-card--expanded">
        <div class="knowledge-card__top">
          <span>${copy.prototypeCode}</span>
          <em>${copy.pattern}</em>
        </div>
        <h2>${copy.resources}</h2>
        <p class="source-line">${copy.linkedWith}</p>
        ${remedyCardSection(se1.remedyCards)}
        <div class="knowledge-section">
          <strong>${copy.nextBuild}</strong>
          <p>${copy.nextBuildText}</p>
        </div>
      </article>
    </section>
  `);
}

function musicPage() {
  const se1 = knowledgePrototype.subtypes[0];
  const copy = text.routes.music;
  return shell(`
    ${pageHeader("music")}
    <section class="knowledge-hero">
      <div>
        <p class="eyebrow">${copy.eyebrow}</p>
        <h1>${copy.headline}</h1>
        <p class="lead-small">${copy.lead}</p>
      </div>
      <aside>
        <span>${copy.linked}</span>
        <strong>${copy.linkedRef}</strong>
        <p>${copy.linkedText}</p>
      </aside>
    </section>
    <section class="knowledge-grid">
      <article class="knowledge-card knowledge-card--expanded">
        <div class="knowledge-card__top">
          <span>${copy.prototypeType}</span>
          <em>${copy.prototype}</em>
        </div>
        <h2>${copy.fields}</h2>
        ${mediaGroupSection(se1.mediaGroups)}
      </article>
    </section>
  `);
}

function practicePage() {
  const p = state.profile;
  const copy = text.routes.practice;
  return shell(`
    ${pageHeader("practice")}
    <section class="narrow centered">
      <p class="eyebrow">${copy.eyebrow}</p>
      <h1>${copy.headline}</h1>
      <p class="lead-small">${copy.lead}</p>
    </section>
    <section class="tool-grid">
      ${p.tools
        .map(
          (tool) => `
            <article class="tool-card">
              <span>${tool.label}</span>
              <h2>${tool.name}</h2>
              <p>${tool.text}</p>
            </article>
          `
        )
        .join("")}
      <article class="tool-card">
        <span>${copy.se1Pattern}</span>
        <h2>${copy.twoPoint}</h2>
        <p>${copy.twoPointText}</p>
        <button class="secondary" data-route="knowledge">${copy.openSe1}</button>
      </article>
    </section>
  `);
}

function libraryPage() {
  const copy = text.routes.library;
  return shell(`
    ${pageHeader("library")}
    <section class="narrow centered">
      <p class="eyebrow">${copy.eyebrow}</p>
      <h1>${copy.headline}</h1>
      <p class="lead-small">${copy.lead}</p>
    </section>
    <section class="library-grid">
      ${architectureAreas
        .map((area) => `<article><h2>${area.title}</h2><p>${area.text}</p></article>`)
        .join("")}
    </section>
    <section class="formula-overview">
      <div class="formula-overview__copy">
        <p class="eyebrow">${copy.systemOverview}</p>
        <h2>${copy.formulaHeadline}</h2>
        <p>${copy.formulaText}</p>
      </div>
      <figure>
        <img src="assets/grundformel-rathmer-enneagramm.jpg" alt="${copy.formulaAlt}" />
      </figure>
    </section>
    <section class="library-grid">
      ${libraryItems
        .map(([title, text]) => `<article><h2>${title}</h2><p>${text}</p></article>`)
        .join("")}
    </section>
    ${werkSection()}
  `);
}

function werkSection() {
  const w = text.werk;
  return `
    <section class="werk">
      <div class="section-divider"><span>${w.title}</span></div>
      <p class="lead-small werk__lead">${w.lead}</p>
      <div class="werk-grid">
        ${werkRegister
          .map((book) => {
            const link = book.status === "link_pruefen"
              ? `<span class="deepen-link deepen-link--pending">${w.linkPending}</span>`
              : `<a class="deepen-link" href="${book.link}" target="_blank" rel="noopener">${w.openBook} →</a>`;
            return `
              <article class="werk-card">
                <h3>${book.title}</h3>
                <p class="werk-card__themes">${w.themes}: ${book.themes.join(" · ")}</p>
                ${link}
              </article>`;
          })
          .join("")}
      </div>
    </section>
  `;
}

function subtypeEntry(code) {
  return knowledgePrototype.subtypes.find(
    (s) => s.code.toLowerCase() === code.toLowerCase()
  );
}

function subtypePage(code) {
  const sp = text.subtypePage;
  const entry = subtypeEntry(code);
  if (!entry) {
    return shell(`
      ${pageHeader("knowledge")}
      <section class="narrow centered">
        <button class="ghost-link" data-route="knowledge">${sp.back}</button>
        <h1>${code.toUpperCase()}</h1>
        <p class="lead-small">Für diesen Subtyp ist noch keine Detailseite angelegt.</p>
      </section>
    `);
  }
  const details = subtypeDetails[code.toLowerCase()] || {};
  return shell(`
    ${pageHeader("knowledge")}
    <section class="subtype-hero">
      <button class="ghost-link" data-route="knowledge">${sp.back}</button>
      <p class="eyebrow">${entry.code} · ${text.knowledgeCard.animalPrefix} ${entry.animal}</p>
      <h1>${entry.title}</h1>
      <p class="lead-small">${entry.coreSentence}</p>
    </section>
    ${details.meinKompass ? meinKompassSection(details.meinKompass, sp) : ""}
    <section class="rooms">
      <div class="section-divider"><span>${sp.raeumeTitle}</span></div>
      <div class="rooms-grid">
        ${roomCard("verstehen", sp.rooms.verstehen, verstehenInner(entry, sp))}
        ${roomCard("spueren", sp.rooms.spueren, spuerenInner(entry, sp))}
        ${roomCard("regulieren", sp.rooms.regulieren, regulierenInner(entry, sp))}
        ${roomCard("unterstuetzen", sp.rooms.unterstuetzen, entry.heilmittel ? heilmittelSection(entry.heilmittel) : "")}
        ${roomCard("verkoerpern", sp.rooms.verkoerpern, verkoerpernInner(entry, sp))}
        ${roomCard("vertiefen", sp.rooms.vertiefen, vertiefungSection(details.vertiefung, sp))}
      </div>
    </section>
  `);
}

function meinKompassSection(k, sp) {
  const list = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
  return `
    <section class="mein-kompass">
      <div class="section-divider"><span>${sp.meinKompassTitle}</span></div>
      <div class="mein-kompass__block">
        <strong>${sp.lebensthema}</strong>
        <p>${k.lebensthema}</p>
      </div>
      <div class="mein-kompass__block">
        <strong>${sp.grundstrategie}</strong>
        <p>${k.grundstrategie}</p>
      </div>
      <div class="mein-kompass__cols">
        <div class="mein-kompass__block">
          <strong>${sp.staerken}</strong>
          ${list(k.staerken)}
        </div>
        <div class="mein-kompass__block">
          <strong>${sp.herausforderungen}</strong>
          ${list(k.herausforderungen)}
        </div>
      </div>
      <div class="mein-kompass__block">
        <strong>${sp.entwicklungspotenzial}</strong>
        ${list(k.entwicklungspotenzial)}
        ${k.wandlung ? `<p class="mein-kompass__wandlung">${k.wandlung}</p>` : ""}
      </div>
      ${k.gedankeFuerHeute ? `
        <blockquote class="mein-kompass__gedanke">
          <span>${sp.gedankeFuerHeute}</span>
          <p>${k.gedankeFuerHeute}</p>
        </blockquote>
      ` : ""}
    </section>
  `;
}

function roomCard(key, title, inner) {
  if (!inner) return "";
  return `
    <article class="room room--${key}">
      <h3 class="room__title">${title}</h3>
      <div class="room__body">${inner}</div>
    </article>
  `;
}

function verstehenInner(entry, sp) {
  const blocks = [];
  if (entry.lifeTheme) blocks.push(`<div class="room-field"><strong>${sp.lifeTheme}</strong><ul>${entry.lifeTheme.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.unconsciousStrategy && entry.unconsciousStrategy.length) blocks.push(`<div class="room-field"><strong>${sp.unconsciousStrategy || "Unbewusste Strategie"}</strong><ul>${entry.unconsciousStrategy.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.organismQuestion) blocks.push(`<div class="room-field"><strong>${sp.organismQuestion}</strong><p>${entry.organismQuestion}</p></div>`);
  if (entry.coreSentence) blocks.push(`<div class="room-field"><strong>${sp.coreSentence}</strong><p>${entry.coreSentence}</p></div>`);
  if (entry.integrationPath && entry.integrationPath.length) blocks.push(`<div class="room-field"><strong>${sp.integrationPath || "Integrationsweg"}</strong><ul>${entry.integrationPath.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.integratedState && entry.integratedState.length) blocks.push(`<div class="room-field"><strong>${sp.integratedState || "Integrierter Zustand"}</strong><ul>${entry.integratedState.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.woundBehindPassion) blocks.push(woundBehindPassionSection(entry.woundBehindPassion));
  return blocks.join("");
}

function spuerenInner(entry, sp) {
  const blocks = [];
  if (entry.signature) blocks.push(`<div class="room-field"><strong>${entry.signature.title}</strong><p>${entry.signature.text}</p></div>`);
  const bs = entry.bodySignature;
  const bsl = sp.bodySignature || {};
  if (bs) {
    if (bs.basicTension) blocks.push(`<div class="room-field"><strong>${bsl.basicTension || "Grundspannung"}</strong><p>${bs.basicTension}</p></div>`);
    const lists = [
      ["gazeQuality","microTension","breathingRhythm","movementInitiation","contactStyle"],
      [bsl.gazeQuality, bsl.microTension, bsl.breathingRhythm, bsl.movementInitiation, bsl.contactStyle],
    ];
    lists[0].forEach((key, i) => {
      if (bs[key] && bs[key].length) blocks.push(`<div class="room-field"><strong>${lists[1][i] || key}</strong><ul>${bs[key].map((x) => `<li>${x}</li>`).join("")}</ul></div>`);
    });
    if (bs.twoPoints) {
      const tp = bs.twoPoints;
      const pts = [tp.point1, tp.point2].filter(Boolean);
      if (pts.length) {
        const ptHtml = pts.map((p) => `<li><strong>${p.name}</strong> (${p.location})${p.need && p.need.length ? `<ul>${p.need.map((n) => `<li>${n}</li>`).join("")}</ul>` : ""}</li>`).join("");
        blocks.push(`<div class="room-field"><strong>${bsl.twoPoints || "2-Punkte-Integration"}</strong><ul>${ptHtml}</ul></div>`);
      }
      if (tp.microInstructions && tp.microInstructions.length) blocks.push(`<div class="room-field"><strong>${bsl.microInstructions || "Mikro-Anleitung"}</strong><ul>${tp.microInstructions.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
    }
  }
  if (entry.archetypalEssence) blocks.push(`<div class="room-field"><strong>${sp.archetypalEssence || "Archetypische Essenz"}</strong><p>${entry.archetypalEssence}</p></div>`);
  if (entry.integrativePotential) blocks.push(`<div class="room-field"><strong>${sp.integrativePotential || "Integratives Potenzial"}</strong><p>${entry.integrativePotential}</p></div>`);
  if (entry.essence && entry.essence.qualities) blocks.push(`<div class="room-field"><strong>${sp.essenceQualities}</strong><ul>${entry.essence.qualities.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  return blocks.join("");
}

function regulierenInner(entry, sp) {
  const blocks = [];
  if (entry.turningPoint && entry.turningPoint.length) blocks.push(`<div class="room-field"><strong>${sp.turningPoint || "Wendepunkt"}</strong><ul>${entry.turningPoint.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.nervousSystemRegulation && entry.nervousSystemRegulation.length) blocks.push(`<div class="room-field"><strong>${sp.nervousSystemRegulation || "Nervensystem-Regulation"}</strong><ul>${entry.nervousSystemRegulation.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.tensionFields && entry.tensionFields.length) blocks.push(`<div class="room-field"><strong>${sp.tensionFields || "Spannungsfelder"}</strong><ul>${entry.tensionFields.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.practice) blocks.push(`<div class="room-field"><strong>${sp.practice}</strong><p>${entry.practice}</p></div>`);
  return blocks.join("");
}

function verkoerpernInner(entry, sp) {
  if (entry.mediaGroups) return mediaGroupSection(entry.mediaGroups);
  if (entry.mediaResources) return mediaResourceSection(entry.mediaResources);
  return `<p class="room-pending">${sp.mediaPending}</p>`;
}

function vertiefungSection(refs, sp) {
  if (!refs || !refs.length) return "";
  const byId = Object.fromEntries(werkRegister.map((b) => [b.id, b]));
  return `
    <p class="deepen-intro">${sp.deepenIntro}</p>
    <ul class="deepen-list">
      ${refs
        .map((ref) => {
          const book = byId[ref.werkId];
          if (!book) return "";
          const link = book.status === "link_pruefen"
            ? `<span class="deepen-link deepen-link--pending">${sp.linkPending}</span>`
            : `<a class="deepen-link" href="${book.link}" target="_blank" rel="noopener">${sp.openBook} →</a>`;
          return `
            <li class="deepen-item">
              <strong>${book.title}</strong>
              <p>${ref.hinweis}</p>
              ${link}
            </li>`;
        })
        .join("")}
    </ul>
  `;
}

function knowledgePage() {
  const block = knowledgePrototype.typeBlock;
  const copy = text.routes.knowledge;
  return shell(`
    ${pageHeader("knowledge")}
    <section class="knowledge-hero">
      <div>
        <p class="eyebrow">${copy.eyebrow}</p>
        <h1>${copy.headline}</h1>
        <p class="lead-small">${knowledgePrototype.source}</p>
      </div>
      <aside>
        <span>${block.status}</span>
        <strong>${block.title}</strong>
        <p>${block.note}</p>
      </aside>
    </section>
    <section class="knowledge-grid">
      ${knowledgePrototype.subtypes.map(knowledgeCard).join("")}
    </section>
  `);
}

function knowledgeCard(item) {
  const labels = text.knowledgeCard;
  return `
    <article class="knowledge-card ${item.visualPages ? "knowledge-card--expanded" : ""}">
      <div class="knowledge-card__top">
        <span>${item.code}</span>
        <em class="${item.status === "needs_review" ? "needs-review" : ""}">${statusLabel(item.status)}</em>
      </div>
      <h2>${item.title}</h2>
      <p class="animal">${labels.animalPrefix} ${item.animal}</p>
      <p class="source-line">${item.pages}</p>
      ${subtypeDetails[item.code.toLowerCase()] ? `<button class="card-open" data-route="subtype/${item.code.toLowerCase()}">${text.subtypePage.meinKompassTitle} öffnen →</button>` : ""}
      ${item.sourceCoverage ? sourceCoverageSection(item.sourceCoverage) : ""}
      ${item.contentModules ? contentModuleSection(item.contentModules) : ""}
      ${item.remedyCards ? remedyCardSection(item.remedyCards) : ""}
      <div class="knowledge-section organism">
        <strong>${labels.organismQuestion}</strong>
        <p>${item.organismQuestion}</p>
      </div>
      <div class="knowledge-section subtype-question">
        <strong>${labels.subtypeQuestion}</strong>
        <p>${item.subtypeQuestion}</p>
      </div>
      <div class="knowledge-section">
        <strong>${labels.coreSentence}</strong>
        <p>${item.coreSentence}</p>
      </div>
      <div class="knowledge-section">
        <strong>${labels.lifeTheme}</strong>
        <ul>${item.lifeTheme.map((entry) => `<li>${entry}</li>`).join("")}</ul>
      </div>
      <div class="knowledge-section">
        <strong>${labels.practice}</strong>
        <p>${item.practice}</p>
      </div>
      ${item.signature ? `
        <div class="knowledge-section">
          <strong>${item.signature.title}</strong>
          <p>${item.signature.text}</p>
        </div>
      ` : ""}
      ${item.essence ? `
        <div class="knowledge-section essence-box">
          <strong>${item.essence.title}</strong>
          <p>${item.essence.sentence}</p>
          <ul>${item.essence.qualities.map((entry) => `<li>${entry}</li>`).join("")}</ul>
        </div>
      ` : ""}
      ${item.woundBehindPassion ? woundBehindPassionSection(item.woundBehindPassion) : ""}
      ${item.heilmittel ? heilmittelSection(item.heilmittel) : item.remedies ? `
        <div class="knowledge-section">
          <strong>${labels.remedies}</strong>
          <p>${item.remedies.join(" · ")}</p>
        </div>
      ` : ""}
      ${item.visualPages ? visualPageSection(item.visualPages) : ""}
      ${item.mediaGroups ? mediaGroupSection(item.mediaGroups) : item.mediaResources ? mediaResourceSection(item.mediaResources) : ""}
      <div class="review-box">
        <strong>${labels.review}</strong>
        ${item.needsReview.length ? `<ul>${item.needsReview.map((entry) => `<li>${entry}</li>`).join("")}</ul>` : `<p>${labels.noRequiredReviews}</p>`}
      </div>
    </article>
	  `;
}

function heilmittelSection(h) {
  const w = text.knowledgeCard.heilmittel;
  const row = (label, value) =>
    `<li class="remedy-row"><span class="remedy-row__label">${label}</span><span class="remedy-row__value${value ? "" : " remedy-row__value--empty"}">${value || w.pending}</span></li>`;
  const passion = h.leidenschaft || {};
  const wound = h.wunde || {};
  return `
    <div class="knowledge-section heilmittel-box">
      <strong>${w.title}</strong>
      <div class="remedy-level">
        <span class="remedy-level__title remedy-level__title--passion">${w.leidenschaftTitle}</span>
        <ul class="remedy-list">
          ${row(w.homoeopathie, passion.homoeopathie)}
          ${row(w.schuessler, passion.schuessler)}
          ${row(w.bachbluete, passion.bachbluete)}
          ${row(w.edelstein, passion.edelstein)}
          ${row(w.tee, passion.tee)}
        </ul>
      </div>
      <div class="remedy-level">
        <span class="remedy-level__title remedy-level__title--wound">${w.wundeTitle}</span>
        <ul class="remedy-list">
          ${row(w.homoeopathie, wound.homoeopathie)}
          ${row(w.schuessler, wound.schuessler)}
          ${row(w.bachbluete, wound.bachbluete)}
        </ul>
      </div>
      <p class="remedy-note">${w.note}</p>
      ${
        h.needsReview && h.needsReview.length
          ? `<div class="wound-review">${h.needsReview.map((e) => `<p>${e}</p>`).join("")}</div>`
          : ""
      }
    </div>
  `;
}

function woundBehindPassionSection(wound) {
  const w = text.knowledgeCard.woundBehindPassion;
  const steps = [
    ["passion", w.passion],
    ["belief", w.belief],
    ["wound", w.wound],
    ["compensation", w.compensation],
    ["sufferingCycle", w.sufferingCycle],
    ["healingDirection", w.healingDirection],
    ["remedy", w.remedy],
  ];
  const placeholder = `<span class="wound-step__pending">${w.pending}</span>`;
  return `
    <div class="knowledge-section wound-box">
      <strong>${w.title}</strong>
      <ol class="wound-chain">
        ${steps
          .map(
            ([key, label]) => `
          <li class="wound-step${wound[key] ? "" : " wound-step--empty"}">
            <span class="wound-step__label">${label}</span>
            <span class="wound-step__value">${wound[key] ? wound[key] : placeholder}</span>
          </li>`,
          )
          .join("")}
      </ol>
      ${
        wound.needsReview && wound.needsReview.length
          ? `<div class="wound-review">${wound.needsReview
              .map((entry) => `<p>${entry}</p>`)
              .join("")}</div>`
          : ""
      }
    </div>
  `;
}

function remedyCardSection(cards) {
  const labels = text.knowledgeCard;
  return `
    <div class="knowledge-section remedy-card-section">
      <strong>${labels.remedyCards}</strong>
      <p class="remedy-card-section__note">${labels.remedyCardsNote}</p>
      <div class="remedy-card-grid">
        ${cards.map((card) => `
          <article class="remedy-card">
            <div class="remedy-card__image">
              <img src="${card.image}" alt="${card.title} · ${card.subtitle}" loading="lazy" />
            </div>
            <div class="remedy-card__body">
              <span>${card.category}</span>
              ${card.imageStatus ? `<span class="remedy-card__image-status">${card.imageStatus}</span>` : ""}
              <h3>${card.title}</h3>
              <em>${card.subtitle}</em>
              <p class="remedy-card__field">${card.field}</p>
              <p>${card.text}</p>
              <small>${card.goal}</small>
              ${card.imagePlan ? `<small class="remedy-card__plan">${card.imagePlan}</small>` : ""}
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function sourceCoverageSection(pages) {
  const labels = text.knowledgeCard;
  return `
    <div class="knowledge-section source-coverage-section">
      <strong>${labels.sourceCoverage}</strong>
      <p>${labels.sourceCoverageNote}</p>
      <div class="source-coverage-grid">
        ${pages.map((page) => `
          <article class="source-page-card">
            <div class="source-page-card__head">
              <h3>${page.page}</h3>
              <span class="${page.status}">${coverageStatusLabel(page.status)}</span>
            </div>
            <ul>${page.blocks.map((block) => `<li>${block}</li>`).join("")}</ul>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function coverageStatusLabel(status) {
  return text.coverageStatusLabels[status] || status;
}

function visualPageSection(pages) {
  const labels = text.knowledgeCard;
  return `
    <div class="knowledge-section visual-pages-section">
      <strong>${labels.visualPages}</strong>
      <div class="visual-pages-grid">
        ${pages.map((page) => `
          <figure class="visual-page">
            <a href="${page.src}" target="_blank" rel="noreferrer">
              <img src="${page.src}" alt="${page.alt}" loading="lazy" />
            </a>
            <figcaption>
              <span>${page.title}</span>
              <p>${page.caption}</p>
            </figcaption>
          </figure>
        `).join("")}
      </div>
    </div>
  `;
}

function contentModuleSection(modules) {
  const labels = text.knowledgeCard;
  return `
    <div class="knowledge-section module-section">
      <strong>${labels.contentModules}</strong>
      <div class="module-grid">
        ${modules.map((module) => `
          <article class="content-module">
            <h3>${module.title}</h3>
            <p>${module.intro}</p>
            <dl>
              ${module.entries.map((entry) => `
                <div>
                  <dt>${entry.label}</dt>
                  <dd>${entry.text}</dd>
                </div>
              `).join("")}
            </dl>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function mediaResourceSection(resources) {
  const labels = text.knowledgeCard;
  return `
    <div class="knowledge-section media-section">
      <strong>${labels.mediaResources}</strong>
      <div class="media-grid">
        ${resources.map(mediaTile).join("")}
      </div>
    </div>
  `;
}

function mediaGroupSection(groups) {
  const labels = text.knowledgeCard;
  return `
    <div class="knowledge-section media-section media-section--grouped">
      <strong>${labels.mediaGroups}</strong>
      ${groups.map((group) => `
        <div class="media-group">
          <div class="media-group__head">
            <h3>${group.title}</h3>
            <p>${group.note}</p>
          </div>
          <div class="media-grid">
            ${group.resources.map(mediaTile).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function mediaTile(resource) {
  const labels = text.knowledgeCard;
  const embedSrc = resource.youtubeVideoId
    ? `https://www.youtube.com/embed/${resource.youtubeVideoId}`
    : resource.youtubePlaylistId
      ? `https://www.youtube.com/embed/videoseries?list=${resource.youtubePlaylistId}`
      : "";
  const youtubeHref = resource.youtubeVideoId
    ? `https://www.youtube.com/watch?v=${resource.youtubeVideoId}`
    : resource.youtubePlaylistId
      ? `https://www.youtube.com/playlist?list=${resource.youtubePlaylistId}`
      : "";

  return `
    <div class="media-tile ${resource.pending ? "media-tile--pending" : ""}">
      <div class="media-meta">
        <span>${resource.category} · ${resource.scope}</span>
        <strong>${resource.title}</strong>
      </div>
      ${embedSrc ? `
        <div class="youtube-embed">
          <iframe
            src="${embedSrc}"
            title="${resource.title}"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <a class="media-link" href="${youtubeHref}" target="_blank" rel="noreferrer">${labels.youtubeOpen}</a>
      ` : `
        <div class="media-placeholder">
          <strong>${labels.linkPending}</strong>
          <p>${labels.linkPendingText}</p>
        </div>
      `}
    </div>
  `;
}

function statusLabel(status) {
  return text.statusLabels[status] || status;
}

function infoCard(title, text) {
  return `<article class="info-card"><span>${title}</span><p>${text}</p></article>`;
}

function listPanel(title, items, tone) {
  return `
    <article class="list-panel ${tone}">
      <h2>${title}</h2>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `;
}

function getJournal() {
  return localStorage.getItem("enneagramm-kompass:sx6-journal") || "";
}

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => go(button.dataset.route));
  });

  const save = document.querySelector("#saveJournal");
  if (save) {
    save.addEventListener("click", () => {
      const journalText = document.querySelector("#journalText").value;
      localStorage.setItem("enneagramm-kompass:sx6-journal", journalText);
      document.querySelector("#saveStatus").textContent = text.routes.reflection.saved;
    });
  }
}

function render() {
  const routes = {
    start: startPage,
    dashboard: dashboardPage,
    reflection: reflectionPage,
    path: pathPage,
    tools: toolsPage,
    healing: healingPage,
    music: musicPage,
    practice: practicePage,
    library: libraryPage,
    knowledge: knowledgePage,
  };
  const [base, param] = state.route.split("/");
  if (base === "subtype" && param) {
    app.innerHTML = subtypePage(param);
  } else {
    app.innerHTML = (routes[base] || routes.start)();
  }
  bindEvents();
}

render();
