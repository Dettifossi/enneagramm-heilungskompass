import { architectureAreas, knowledgePrototype, libraryItems, subtypeProfiles, subtypeDetails, werkRegister, uiText, remedyGlossary, aetherischeOele, tcmData, tcmElemente, kindheitstraumata } from "./data/de.js?v=2026-06-23-tagesimpuls-v94";
import { TYP_IMPULSE, SUBTYP_IMPULSE } from "./data/impulse.js?v=1";
import { TAGESIMPULSE } from "./data/tagesimpulse.js?v=1";
import { TRIADEN, TYPFRAGEN, TYPNAMEN, TYPKURZ, INSTINKTE } from "./data/typentest.js?v=1";
import { MOTIVTEST } from "./data/motivtest.js?v=1";
import { DIAGNOSETEST } from "./data/diagnosetest.js?v=1";

const app = document.querySelector("#app");
const PROFILE_KEY = "enneagramm-kompass:profile";
const VISITED_KEY = "enneagramm-kompass:visited";
const TIER_KEY    = "enneagramm-kompass:tier";

const BASIS_CODE   = "CHARAKTER-KOMPASS-2026";
const HEILUNG_CODE = "HEILUNGS-UPGRADE-2026";
const GESAMT_CODE  = "KOMPASS-GESAMT-2026";

function getTier()  { return localStorage.getItem(TIER_KEY) || "heilwissen"; } // TEMP: Vorschau-Vollzugriff – vor Commit zurueck auf "demo"
function setTier(t) { localStorage.setItem(TIER_KEY, t); }
function hasBasis()      { const t = getTier(); return t === "basis" || t === "heilwissen"; }
function hasHeilwissen() { return getTier() === "heilwissen"; }

const HEILWISSEN_ROUTES = new Set(["healing", "oils", "tcm", "kindheit", "music", "psychogramme", "schaubilder", "kindliche-temperamente", "heilungsweg"]);

function hasProfile() {
  return !!localStorage.getItem(PROFILE_KEY);
}
function loadProfile() {
  const code = localStorage.getItem(PROFILE_KEY) || "sx6";
  return subtypeProfiles[code.toLowerCase()] || subtypeProfiles.sx6;
}
const state = {
  route: location.hash.replace("#", "") || "start",
  profile: loadProfile(),
  isFirstVisit: !localStorage.getItem(VISITED_KEY),
};

// Typentest-Zustand (session-only, kein localStorage)
let testState = { phase: 0, triad: null, scores: {}, instinkt: null, qIndex: 0 };

// Motivationaler Typentest-Zustand (session-only)
let motivState = { phase: "intro", qIndex: 0, answers: {} };

// Diagnosetest-Zustand (session-only)
let diagnoseState = { phase: "intro", step: 0, order: [], checks: {} };

const LETTER_TO_TYPE = { E: 1, Z: 2, D: 3, V: 4, F: 5, X: 6, S: 7, A: 8, N: 9 };
const TYPNAMEN_MOTIV = {
  1: "Der Verbesserer", 2: "Der Helfer", 3: "Der Macher",
  4: "Der Individualist", 5: "Der Forscher", 6: "Der Loyale",
  7: "Der Enthusiast", 8: "Der Herausforderer", 9: "Der Vermittler"
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
          <!-- Zifferblatt: warmes Elfenbein mit goldenem Schimmer -->
          <radialGradient id="compass-face-${size}" cx="42%" cy="36%" r="68%">
            <stop offset="0%"   stop-color="#fff8e8" />
            <stop offset="40%"  stop-color="#f5e8cc" />
            <stop offset="75%"  stop-color="#ddc898" />
            <stop offset="100%" stop-color="#c4a870" />
          </radialGradient>
          <!-- Metallring: Messing-Diagonal-Glanz (kräftiger) -->
          <linearGradient id="ring-metal-${size}" x1="18%" y1="8%" x2="82%" y2="92%">
            <stop offset="0%"   stop-color="#f0d88a" />
            <stop offset="18%"  stop-color="#d4a050" />
            <stop offset="46%"  stop-color="#6a4020" />
            <stop offset="74%"  stop-color="#c89848" />
            <stop offset="100%" stop-color="#e8c860" />
          </linearGradient>
          <!-- Kompassnadel Nord: leuchtendes Kupfer-Rot -->
          <linearGradient id="needle-n-${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stop-color="#f08040" />
            <stop offset="40%"  stop-color="#cc3818" />
            <stop offset="100%" stop-color="#8a1e08" />
          </linearGradient>
          <!-- Kompassnadel Süd: Tiefblau-Anthrazit -->
          <linearGradient id="needle-s-${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stop-color="#2e4255" />
            <stop offset="100%" stop-color="#0e1e2c" />
          </linearGradient>
          <!-- Schatten für Zifferblatt -->
          <filter id="face-shadow-${size}">
            <feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="rgba(40,28,10,0.38)" />
          </filter>
        </defs>

        <!-- Äußerer Metallring (Messing-Bezel) -->
        <circle cx="100" cy="100" r="95" fill="url(#ring-metal-${size})" />
        <circle cx="100" cy="100" r="90" fill="#1e1510" />
        <circle cx="100" cy="100" r="87" fill="url(#ring-metal-${size})" opacity="0.7" />

        <!-- Zifferblatt -->
        <circle class="compass__face" cx="100" cy="100" r="82"
                fill="url(#compass-face-${size})"
                filter="url(#face-shadow-${size})" />

        <!-- Glasschimmer: heller Reflex oben links -->
        <ellipse cx="78" cy="68" rx="26" ry="16"
                 fill="white" opacity="0.22"
                 transform="rotate(-30 78 68)" />

        <!-- Strichteilung -->
        <g class="compass__ticks">
          <line x1="100" y1="16" x2="100" y2="28" />
          <line x1="100" y1="172" x2="100" y2="184" />
          <line x1="16"  y1="100" x2="28"  y2="100" />
          <line x1="172" y1="100" x2="184" y2="100" />
          <line x1="39"  y1="39"  x2="47"  y2="47" />
          <line x1="161" y1="39"  x2="153" y2="47" />
          <line x1="39"  y1="161" x2="47"  y2="153" />
          <line x1="161" y1="161" x2="153" y2="153" />
        </g>

        <!-- Enneagramm -->
        <g class="compass__enneagram">
          <polygon class="compass__triad"  points="100,34 157,132 43,132" />
          <polyline class="compass__hexad" points="143,50 122,162 166,88 57,50 78,162 34,88 143,50" />
          <circle cx="100" cy="34"  r="4" />
          <circle cx="143" cy="50"  r="4" />
          <circle cx="166" cy="88"  r="4" />
          <circle cx="157" cy="132" r="4" />
          <circle cx="122" cy="162" r="4" />
          <circle cx="78"  cy="162" r="4" />
          <circle cx="43"  cy="132" r="4" />
          <circle cx="34"  cy="88"  r="4" />
          <circle cx="57"  cy="50"  r="4" />
        </g>

        <!-- Kompassnadel (animiert beim Laden) -->
        <g class="compass__needle">
          <!-- Nord: schlankes Kupfer-Rhombus -->
          <polygon points="100,21  104.5,100 100,94  95.5,100"
                   fill="url(#needle-n-${size})"
                   stroke="rgba(80,30,10,0.25)" stroke-width="0.5" />
          <!-- Süd: schlankes Dunkel-Rhombus -->
          <polygon points="100,179 104.5,100 100,106 95.5,100"
                   fill="url(#needle-s-${size})"
                   stroke="rgba(10,20,30,0.2)" stroke-width="0.5" />
        </g>

        <!-- Nabenring -->
        <circle cx="100" cy="100" r="10.5" fill="#150e08" />
        <circle cx="100" cy="100" r="8"    fill="url(#ring-metal-${size})" />
        <circle cx="100" cy="100" r="5"    fill="#f8e8c0" />
        <circle cx="100" cy="100" r="2.2"  fill="rgba(185,80,30,0.95)" />
      </svg>
    </div>
  `;
}

function nav(active) {
  const items = text.nav.map(({ route, label, dropdown }) => {
    if (dropdown) {
      const isActive = dropdown.some(d => d.route === active) || active === route;
      const lockedHeil = HEILWISSEN_ROUTES.has(route) && !hasHeilwissen();
      const lockedBasis = !hasBasis();
      const locked = lockedHeil || lockedBasis;
      const lockTarget = lockedHeil ? "heilwissen" : "basis";
      const subItems = dropdown.map(({ route: sr, label: sl }) =>
        `<button class="nav-dropdown__item" data-route="${locked ? ("freischalt/" + lockTarget) : sr}">${sl}</button>`
      ).join("");
      return `<div class="nav-dropdown-wrap${isActive ? " is-active" : ""}">
        <button class="nav-dropdown__trigger${isActive ? " is-active" : ""}${locked ? " nav-locked" : ""}"
          data-dropdown-toggle aria-haspopup="true"
        >${label} <span class="nav-dropdown__arrow">▾</span>${locked ? `<span class="nav-lock-icon" aria-hidden="true">🔒</span>` : ""}</button>
        <div class="nav-dropdown__menu">${subItems}</div>
      </div>`;
    }
    const lockedHeil = HEILWISSEN_ROUTES.has(route) && !hasHeilwissen();
    const lockedBasis = !hasBasis() && route !== "start" && route !== "profile";
    const locked = lockedHeil || lockedBasis;
    const lockTarget = lockedHeil ? "heilwissen" : "basis";
    return `<button
      class="${active === route ? "is-active" : ""} ${locked ? "nav-locked" : ""}"
      data-route="${route}"
      ${locked ? `data-locked="${lockTarget}"` : ""}
      aria-disabled="${locked}"
    >${label}${locked ? `<span class="nav-lock-icon" aria-hidden="true">🔒</span>` : ""}</button>`;
  }).join("");
  return `<nav class="tabbar" aria-label="${text.meta.mainNavigation}">${items}</nav>`;
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
  const firstVisit = state.isFirstVisit;

  const profileGlimpse = !firstVisit ? `
    <div class="first-glimpse">
      ${p.image ? `<img src="${p.image}" alt="${text.meta.resonanceImageAltPrefix} ${p.code}" />` : `<div class="profile-badge">${p.emoji || p.code}</div>`}
      <div>
        <span>${p.code} · ${p.title}</span>
        <strong>${p.focus}</strong>
        <em>${copy.animalPrefix} ${p.archetype}</em>
      </div>
    </div>
  ` : '';

  const returnActions = !firstVisit ? `
    <button class="primary" data-route="dashboard">${copy.primaryAction}</button>
    <button class="secondary" data-route="knowledge">Wissensbasis</button>
    <button class="secondary${hasHeilwissen() ? "" : " is-locked"}" data-route="healing">Heilmittel${hasHeilwissen() ? "" : " <span class=\"btn-lock\" aria-hidden=\"true\">🔒</span>"}</button>
  ` : `
    <button class="primary" data-route="profile">Meinen Subtyp wählen →</button>
    <button class="secondary" data-route="knowledge">Wissensbasis ansehen</button>
  `;

  return shell(`
    <section class="hero">
      <div class="hero__symbol">${compassMark()}</div>
      <p class="eyebrow">${text.meta.modelLine}</p>
      <h1>${copy.headline}</h1>
      <p class="lead">${copy.lead}</p>
      <div class="hero__actions">${returnActions}</div>
      ${profileGlimpse}
    </section>

    <section class="start-paths">
      <div class="start-path start-path--known">
        <div class="start-path__icon">◎</div>
        <h2 class="start-path__title">Ich kenne meinen Subtyp</h2>
        <p class="start-path__body">Wählen Sie Ihren Subtyp und erkunden Sie Heilmittel, TCM-Zuordnung, Kindheitsprägung, Musik und persönliche Entwicklungswege.</p>
        <button class="start-path__btn" data-route="profile">Subtyp wählen →</button>
      </div>
      <div class="start-path start-path--unknown">
        <div class="start-path__icon">◇</div>
        <h2 class="start-path__title">Ich kenne meinen Typ noch nicht</h2>
        <p class="start-path__body">Für eine genaue Typbestimmung empfehlen wir einen der beiden Tests oder eine persönliche Typisierungsberatung.</p>
        <div class="start-path__actions">
          <div class="start-path__test-row">
            <button class="start-path__btn start-path__btn--test start-path__btn--diag" data-route="diagnosetest">
              <span class="start-path__test-label">Diagnose-Test</span>
              <span class="start-path__test-sub">Schnelleinstieg · kostenlos · 9 Profile</span>
            </button>
            <button class="start-path__btn start-path__btn--test${hasBasis() ? "" : " is-locked"}" data-route="${hasBasis() ? "typentest" : "freischalt/basis"}">
              <span class="start-path__test-label">Struktureller Typentest${hasBasis() ? "" : " 🔒"}</span>
              <span class="start-path__test-sub">mit Subtypen · ab 29 €</span>
            </button>
            <button class="start-path__btn start-path__btn--test start-path__btn--motivational${hasHeilwissen() ? "" : " is-locked"}" data-route="${hasHeilwissen() ? "typentest-motivational" : "freischalt/heilwissen"}">
              <span class="start-path__test-label">Motivationaler Typentest${hasHeilwissen() ? "" : " 🔒"}</span>
              <span class="start-path__test-sub">100 Fragen · ab 49 €</span>
            </button>
          </div>
        </div>
        <div class="start-path__berater">
          <div class="start-path__berater-card">
            <strong class="start-path__berater-name">Detlef Rathmer</strong>
            <ul class="start-path__berater-list">
              <li>Therapeut</li>
              <li>Enneagramm-Typisierung</li>
              <li>Bewusstseins-<br>entwicklung</li>
            </ul>
            <a class="start-path__web" href="https://www.psychologische-homoeopathie.de" target="_blank" rel="noopener">Naturheilpraxis Detlef Rathmer → psychologische-homoeopathie.de</a>
            <div class="start-path__berater-actions">
              <a class="start-path__btn" href="mailto:detlefrathmer@t-online.de?subject=Typisierungsberatung%20anfragen">✉ E-Mail</a>
              <a class="start-path__btn start-path__btn--wa" href="https://wa.me/4915758786201?text=Ich%20m%C3%B6chte%20eine%20Typisierungsberatung%20anfragen." target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </div>
          <div class="start-path__berater-card">
            <strong class="start-path__berater-name">David L. Rathmer</strong>
            <ul class="start-path__berater-list">
              <li>Enneagramm-Profiling</li>
              <li>Enneagramm-Typisierung</li>
              <li>Ennea Scholars</li>
            </ul>
            <a class="start-path__web" href="https://www.enneascholars.de" target="_blank" rel="noopener">Enneagramm-Profiling für Führungskräfte &amp; Unternehmen → enneascholars.de</a>
            <div class="start-path__berater-actions">
              <a class="start-path__btn" href="mailto:rathmer.david.business@gmail.com?subject=Typisierungsberatung%20anfragen">✉ E-Mail</a>
              <a class="start-path__btn start-path__btn--wa" href="https://wa.me/4915901902479?text=Ich%20m%C3%B6chte%20eine%20Typisierungsberatung%20anfragen." target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="start-steps">
      <p class="start-steps__label">So funktioniert der Kompass</p>
      <div class="start-steps__grid">
        <div class="start-step">
          <span class="start-step__num">1</span>
          <h3 class="start-step__title">Typ & Subtyp bestimmen</h3>
          <p class="start-step__body">Ermitteln Sie Ihren Enneagramm-Typ und Subtyp — über den Typentest, die Wissensbasis oder eine Beratung.</p>
        </div>
        <div class="start-step">
          <span class="start-step__num">2</span>
          <h3 class="start-step__title">Subtyp-Profil erkunden</h3>
          <p class="start-step__body">Jede der 27 Subtyp-Seiten zeigt Heilmittel, TCM-Zuordnung, Kindheitsprägung, Musik und Entwicklungswege.</p>
        </div>
        <div class="start-step">
          <span class="start-step__num">3</span>
          <h3 class="start-step__title">Heilung vertiefen</h3>
          <p class="start-step__body">Nutzen Sie den Heilmittel-Kompass, ätherische Öle und bei Bedarf eine persönliche Begleitung durch Detlef Rathmer.</p>
        </div>
      </div>
    </section>

    <section class="model-credit">
      <p class="model-credit__label">Hinter dem Modell</p>
      <p class="model-credit__text">Der Enneagramm-Kompass beruht auf der über Jahre gemeinsam entwickelten Arbeit von <strong>Detlef Rathmer</strong> (Therapie &amp; Heilung) und <strong>David L. Rathmer</strong> (Enneagramm-Profiling für Führungskräfte &amp; Unternehmen).</p>
      <a class="model-credit__link" href="https://www.enneascholars.de" target="_blank" rel="noopener">Mehr zu Davids Arbeit → enneascholars.de</a>
    </section>
    ${legalFooter()}
  `);
}

function dashboardPage() {
  const p = state.profile;
  const copy = text.routes.dashboard;
  return shell(`
    ${pageHeader("dashboard")}
    <section class="dashboard">
      <div class="profile-visual">
        ${p.image ? `<img src="${p.image}" alt="${text.meta.resonanceImageAltPrefix} ${p.code}" />` : `<div class="profile-badge profile-badge--large">${p.emoji || p.code}</div>`}
      </div>
      <div class="dashboard__copy">
        <p class="eyebrow">${copy.greeting} · ${p.center} · ${p.typeLabel || ''}</p>
        <h1>${p.code} · ${p.title}</h1>
        <p class="subtle-archetype">${p.titleAlt ? `auch: ${p.titleAlt} · ` : ''}${copy.animalBackground} ${p.archetype}</p>
        ${p.variant ? `<span class="variant-tag variant-tag--${p.variant.toLowerCase().replace('ä','ae').replace('ü','ue')}">${p.variant}</span>` : ''}
        <p class="focus">${copy.todayFocus} ${p.focus}</p>
        <div class="question-box">
          <span>${copy.organismQuestion}</span>
          <p>${p.organismQuestion}</p>
        </div>
        <button class="ghost-link" data-route="profile">Profil wechseln →</button>
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

function oelForType(code) {
  const num = parseInt(String(code).replace(/\D/g, ""), 10);
  return aetherischeOele.find((o) => o.typ === num) || null;
}

function oilCard(oel) {
  const c = text.routes.oils;
  return `
    <article class="oil-card">
      <div class="oil-card__image">
        <img src="${oel.image}" alt="${c.woundLabel} ${oel.typ} · ${oel.name}" loading="lazy" />
      </div>
      <div class="oil-card__body">
        <span class="oil-card__type">${oel.typLabel}</span>
        <h3>${oel.name}</h3>
        <p class="oil-card__wound"><strong>${c.woundLabel}:</strong> „${oel.urWunde}“</p>
        <p class="oil-card__effect">${oel.wirkung}</p>
        ${oel.vertiefung ? `<p class="oil-card__text">${oel.vertiefung}</p>` : ""}
      </div>
    </article>
  `;
}

function oilsPage() {
  const copy = text.routes.oils;
  return shell(`
    ${pageHeader("oils")}
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
        <h2>${copy.cardsTitle}</h2>
        <div class="oil-grid">
          ${aetherischeOele.map(oilCard).join("")}
        </div>
        <p class="remedy-note">${copy.note}</p>
      </article>
    </section>
  `);
}

function tcmForType(code) {
  const num = parseInt(String(code).replace(/\D/g, ""), 10);
  return tcmData.find((t) => t.typ === num) || null;
}

function tcmCard(tcm) {
  const c = text.routes.tcm;
  return `
    <article class="tcm-card" style="--tcm-element-color:${tcm.elementFarbe}">
      <div class="tcm-card__header">
        <span class="tcm-card__type">${tcm.typLabel}</span>
        <button class="tcm-card__element-badge" data-tcm-element="${tcm.element}" title="Mehr über das ${tcm.element}-Element">${tcm.element} ↗</button>
      </div>
      <h3 class="tcm-card__meridian">${tcm.meridian}</h3>
      <div class="tcm-card__meta">
        <span class="tcm-card__organzeit">⏱ ${tcm.organzeit}</span>
        <span class="tcm-card__polaritaet">${tcm.polaritaet} · ${tcm.leitorgan}</span>
      </div>
      <p class="tcm-card__symptom">${tcm.symptom}</p>
      <p class="tcm-card__ausgleich"><strong>${c.ausgleichLabel}:</strong> ${tcm.ausgleich}</p>
      <div class="tcm-card__details">
        <h4>${c.empfehlungLabel}</h4>
        <ul>${tcm.empfehlung.map((e) => `<li>${e}</li>`).join("")}</ul>
        <h4>${c.tagesplanLabel}</h4>
        <ol class="tcm-tagesplan">
          ${tcm.tagesplan.map((s) => `<li><span class="tcm-tagesplan__time">${s.uhrzeit}</span><span class="tcm-tagesplan__label">${s.label}</span><span class="tcm-tagesplan__text">${s.text}</span></li>`).join("")}
        </ol>
      </div>
    </article>
  `;
}

function tcmInlineBlock(tcm) {
  if (!tcm) return "";
  const c = text.routes.tcm;
  return `
    <div class="inline-section inline-section--tcm" data-collapsed="true">
      <button class="inline-section__toggle" aria-expanded="false">
        <span class="inline-section__label">
          <span class="inline-section__tag">TCM</span>
          ${tcm.element}-Element · ${tcm.meridian}
        </span>
        <span class="inline-section__arrow">▼</span>
      </button>
      <div class="inline-section__body">
        <div class="tcm-inline">
          <div class="tcm-inline__meta">
            <button class="tcm-inline__element" style="background:${tcm.elementFarbe}" data-tcm-element="${tcm.element}" title="Mehr über das ${tcm.element}-Element">${tcm.element} ↗</button>
            <span>${tcm.polaritaet} · ${tcm.leitorgan}</span>
            <span>⏱ ${tcm.organzeit}</span>
          </div>
          <p class="tcm-inline__symptom">${tcm.symptom}</p>
          <p class="tcm-inline__ausgleich">${tcm.ausgleich}</p>
          <ul class="tcm-inline__empfehlung">${tcm.empfehlung.map((e) => `<li>${e}</li>`).join("")}</ul>
          <h4>${c.ernaehrungLabel}: ${tcm.ernaehrungsthema}</h4>
          <ol class="tcm-tagesplan tcm-tagesplan--compact">
            ${tcm.tagesplan.map((s) => `<li><span class="tcm-tagesplan__time">${s.uhrzeit}</span><span class="tcm-tagesplan__label">${s.label}:</span> ${s.text}</li>`).join("")}
          </ol>
        </div>
      </div>
    </div>
  `;
}

function tcmPage() {
  const copy = text.routes.tcm;
  return shell(`
    ${pageHeader("tcm")}
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
        <h2>${copy.cardsTitle}</h2>
        <div class="tcm-grid">
          ${tcmData.map(tcmCard).join("")}
        </div>
        <p class="remedy-note">${copy.note}</p>
      </article>
    </section>
  `);
}

function kindheitForType(code) {
  const num = parseInt(String(code).replace(/\D/g, ""), 10);
  return kindheitstraumata.find((k) => k.typ === num) || null;
}

function kindheitInlineBlock(k) {
  if (!k) return "";
  const paragraphs = k.text.split("\n\n").map(p => `<p>${p}</p>`).join("");
  return `
    <div class="inline-section inline-section--kindheit" data-collapsed="true">
      <button class="inline-section__toggle" aria-expanded="false">
        <span class="inline-section__label">
          <span class="inline-section__tag">Kindheit</span>
          ${k.wunde}
        </span>
        <span class="inline-section__arrow">▼</span>
      </button>
      <div class="inline-section__body">
        <div class="kindheit-inline">
          <div class="kindheit-inline__body">${paragraphs}</div>
          <p class="kindheit-inline__zombie">${k.zombie}</p>
        </div>
      </div>
    </div>
  `;
}

function kindheitCard(k) {
  const paragraphs = k.text.split("\n\n").map(p => `<p>${p}</p>`).join("");
  return `
    <article class="kindheit-card">
      <header class="kindheit-card__header">
        <span class="kindheit-card__typ">${k.typLabel}</span>
        <h3 class="kindheit-card__titel">${k.titel}</h3>
        <p class="kindheit-card__wunde">${k.wunde}</p>
      </header>
      <div class="kindheit-card__body">
        ${paragraphs}
      </div>
      <p class="kindheit-card__zombie">${k.zombie}</p>
    </article>
  `;
}

function kindheitPage() {
  return shell(`
    ${pageHeader("kindheit")}
    <section class="knowledge-hero">
      <div>
        <p class="eyebrow">Psychologie · Enneagramm</p>
        <h1>Die Kindheitstraumata der 9 Typen</h1>
        <p class="lead-small">Jeder Enneagrammtyp entstand aus einem kindlichen Trauma – einer Verletzung, die den Weg der Seele in Richtung Überlebensstrategie einschlug. Diese Geschichten beschreiben das Muster, nicht das individuelle Schicksal.</p>
      </div>
      <aside>
        <span>Grundlagenwerk</span>
        <strong>Detlef Rathmer</strong>
        <p>Aus dem Manuskript »Die Kindheitstraumata der 9 Enneagrammtypen«</p>
      </aside>
    </section>
    <section class="knowledge-grid">
      <article class="knowledge-card knowledge-card--expanded">
        <h2>Die neun Ursprungsgeschichten</h2>
        <div class="kindheit-grid">
          ${kindheitstraumata.map(kindheitCard).join("")}
        </div>
        <p class="remedy-note">Diese Geschichten beschreiben archetypische Muster. Das individuelle Erleben eines Menschen ist immer vielschichtiger als das Typusmuster – die Arbeit mit den eigenen Kindheitstraumata erfordert professionelle therapeutische Begleitung.</p>
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
  const filterLabels = {
    all:                     "Alle",
    enneagramm:              "Enneagramm",
    homoeopathie:            "Homöopathie",
    "persoenliche-entwicklung": "Persönl. Entwicklung",
    kalender:                "Kalender",
  };
  const filterBar = Object.entries(filterLabels).map(([key, label]) =>
    `<button class="werk-filter${key === "all" ? " is-active" : ""}" data-werk-filter="${key}">${label}</button>`
  ).join("");

  const cards = werkRegister.map((book) => {
    const isPending = book.status === "link_pruefen";
    const verlagsLink = isPending
      ? `<span class="deepen-link deepen-link--pending">${w.linkPending}</span>`
      : `<a class="deepen-link" href="${book.link}" target="_blank" rel="noopener">${w.openBook} →</a>`;
    const bodLink = !isPending && book.bodUrl
      ? `<a class="deepen-link deepen-link--bod" href="${book.bodUrl}" target="_blank" rel="noopener">Bei BoD kaufen →</a>`
      : "";
    return `
      <article class="werk-card" data-category="${book.category || ""}">
        <h3>${book.title}</h3>
        <p class="werk-card__themes">${w.themes}: ${book.themes.join(" · ")}</p>
        <div class="werk-card__links">${verlagsLink}${bodLink}</div>
      </article>`;
  }).join("");

  return `
    <section class="werk">
      <div class="section-divider"><span>${w.title}</span></div>
      <p class="lead-small werk__lead">${w.lead}</p>
      <div class="werk-filterbar">${filterBar}</div>
      <div class="werk-grid">${cards}</div>
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
  const tc = typeColorFromCode(code);
  return shell(`
    ${pageHeader("knowledge")}
    <section class="subtype-hero" style="border-top:4px solid ${tc}">
      <button class="ghost-link" data-route="knowledge">${sp.back}</button>
      <p class="eyebrow" style="color:${tc}">${entry.code} · ${text.knowledgeCard.animalPrefix} ${entry.animal}</p>
      <h1 style="color:${tc}">${entry.title}</h1>
      <p class="lead-small">${entry.coreSentence}</p>
    </section>
    ${details.meinKompass ? meinKompassSection(details.meinKompass, sp) : ""}
    <section class="subtype-sections">
      ${sectionBlock("verstehen", sp.rooms.verstehen, verstehenInner(entry, sp) + impulseBlock(SUBTYP_IMPULSE[code.toLowerCase()], tc), tc)}
      ${sectionBlock("spueren", sp.rooms.spueren, spuerenInner(entry, sp), tc)}
      ${sectionBlock("regulieren", sp.rooms.regulieren, regulierenInner(entry, sp), tc)}
      ${sectionBlock("unterstuetzen", sp.rooms.unterstuetzen, entry.heilmittel ? (hasHeilwissen() ? heilmittelSection(entry.heilmittel, oelForType(entry.code), entry.code) : heilwissenLock()) : "", tc)}
      ${sectionBlock("verkoerpern", sp.rooms.verkoerpern, verkoerpernInner(entry, sp), tc)}
      ${sectionBlock("vertiefen", sp.rooms.vertiefen, vertiefungSection(details.vertiefung, sp), tc)}
    </section>
    ${hasHeilwissen() ? tcmInlineBlock(tcmForType(entry.code)) : ""}
    ${hasHeilwissen() ? kindheitInlineBlock(kindheitForType(entry.code)) : ""}
    ${querverbindungen(entry)}
    ${beratungsCTA()}
  `);
}

function heilwissenLock(title = "Heilmittel, TCM & Kindheitsprägung") {
  return `
    <div class="heilwissen-lock">
      <span class="heilwissen-lock__icon">🔒</span>
      <div>
        <strong>${title}</strong>
        <p>Diese Inhalte sind Teil des Heilungskompass-Upgrades.</p>
      </div>
      <button class="heilwissen-lock__btn" data-route="freischalt/heilwissen">Upgrade ansehen →</button>
    </div>
  `;
}

function beratungsCTA() {
  return `
    <section class="beratungs-cta">
      <div class="beratungs-cta__card beratungs-cta__card--behandlung">
        <div class="beratungs-cta__text">
          <p class="beratungs-cta__eyebrow">Enneagramm-Homöopathie</p>
          <h3 class="beratungs-cta__title">Sie möchten sich homöopathisch behandeln lassen?</h3>
          <p class="beratungs-cta__body">Die Enneagramm-Homöopathie arbeitet mit dem individuellen Heilmittel Ihres Typs. Wenn Sie eine persönliche Behandlung anstreben, können Sie eine Erstberatung anfragen.</p>
        </div>
        <a class="beratungs-cta__btn" href="https://www.psychologische-homoeopathie.de/beratung.html" target="_blank" rel="noopener">
          Zur Erstberatung →
        </a>
      </div>
      <div class="beratungs-cta__card beratungs-cta__card--typisierung">
        <div class="beratungs-cta__text">
          <p class="beratungs-cta__eyebrow">Typisierungsberatung</p>
          <h3 class="beratungs-cta__title">Noch unsicher über Ihren Typ oder Subtyp?</h3>
          <p class="beratungs-cta__body">Eine persönliche Typisierungsberatung gibt Klarheit. Sie können sich an Detlef oder David L. Rathmer wenden — beide sind erfahrene Typisierungsberater.</p>
        </div>
        <div class="beratungs-cta__berater-row">
          <div class="beratungs-cta__berater-item">
            <span class="beratungs-cta__berater-name">Detlef Rathmer</span>
            <div class="beratungs-cta__contact">
              <a class="beratungs-cta__btn beratungs-cta__btn--secondary" href="mailto:detlefrathmer@t-online.de?subject=Typisierungsberatung">✉ E-Mail</a>
              <a class="beratungs-cta__btn beratungs-cta__btn--whatsapp" href="https://wa.me/4915758786201?text=Ich%20m%C3%B6chte%20eine%20Typisierungsberatung%20anfragen." target="_blank" rel="noopener">WhatsApp</a>
            </div>
            <a class="beratungs-cta__web" href="https://www.psychologische-homoeopathie.de" target="_blank" rel="noopener">Naturheilpraxis Detlef Rathmer → psychologische-homoeopathie.de</a>
          </div>
          <div class="beratungs-cta__berater-item">
            <span class="beratungs-cta__berater-name">David L. Rathmer</span>
            <div class="beratungs-cta__contact">
              <a class="beratungs-cta__btn beratungs-cta__btn--secondary" href="mailto:rathmer.david.business@gmail.com?subject=Typisierungsberatung">✉ E-Mail</a>
              <a class="beratungs-cta__btn beratungs-cta__btn--whatsapp" href="https://wa.me/4915901902479?text=Ich%20m%C3%B6chte%20eine%20Typisierungsberatung%20anfragen." target="_blank" rel="noopener">WhatsApp</a>
            </div>
            <a class="beratungs-cta__web" href="https://www.enneascholars.de" target="_blank" rel="noopener">Enneagramm-Profiling für Führungskräfte &amp; Unternehmen → enneascholars.de</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function querverbindungen(entry) {
  const oel = oelForType(entry.code);
  const tcm = tcmForType(entry.code);
  const kindheit = kindheitForType(entry.code);
  const links = [
    { label: "Heilmittel", route: "healing", icon: "⬡" },
    oel      ? { label: "Ätherische Öle", route: "oils", icon: "✦" } : null,
    tcm      ? { label: "TCM & Organuhr", route: "tcm", icon: "◎" } : null,
    kindheit ? { label: "Kindheitstraumata", route: "kindheit", icon: "◇" } : null,
    { label: "Bibliothek", route: "library", icon: "◈" },
  ].filter(Boolean);
  return `
    <section class="querverbindungen">
      <p class="querverbindungen__label">Weiterführende Themen</p>
      <div class="querverbindungen__links">
        ${links.map(l => `
          <button class="querverbindungen__chip" data-route="${l.route}">
            <span class="querverbindungen__icon">${l.icon}</span>${l.label}
          </button>`).join("")}
      </div>
    </section>
  `;
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

function impulseBlock(impulse, color) {
  if (!impulse) return "";
  const paragraphs = impulse.text.split("\n\n").map(p => `<p>${p}</p>`).join("");
  return `
    <div class="typ-impuls" style="border-left-color:${color || "var(--accent)"}">
      ${paragraphs}
      <p class="typ-impuls__impuls"><em>Impuls für heute: ${impulse.impuls}</em></p>
      <p class="typ-impuls__autor">— Detlef Rathmer</p>
    </div>
  `;
}

function sectionBlock(key, title, inner, color) {
  if (!inner) return "";
  const titleStyle = color ? ` style="color:${color}"` : "";
  return `
    <section class="subtype-section subtype-section--${key}">
      <h2 class="subtype-section__title"${titleStyle}>${title}</h2>
      <div class="subtype-section__body">${inner}</div>
    </section>
  `;
}

function verstehenInner(entry, sp) {
  const blocks = [];
  if (entry.lifeTheme) blocks.push(`<div class="room-field"><strong>${sp.lifeTheme}</strong><ul>${entry.lifeTheme.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.unconsciousStrategy && entry.unconsciousStrategy.length) blocks.push(`<div class="room-field"><strong>${sp.unconsciousStrategy || "Unbewusste Strategie"}</strong><ul>${entry.unconsciousStrategy.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.organismQuestion) blocks.push(`<div class="room-field"><strong>${sp.organismQuestion}</strong><p>${entry.organismQuestion}</p></div>`);
  if (entry.coreSentence) blocks.push(`<div class="room-field"><strong>${sp.coreSentence}</strong><p>${entry.coreSentence}</p></div>`);
  if (entry.integrationSentence) blocks.push(`<div class="room-field room-field--quote"><strong>${sp.integrationSentence || "Leitsatz der Integration"}</strong><blockquote>${entry.integrationSentence}</blockquote></div>`);
  if (entry.integrationPath && entry.integrationPath.length) blocks.push(`<div class="room-field"><strong>${sp.integrationPath || "Integrationsweg"}</strong><ul>${entry.integrationPath.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.integratedState && entry.integratedState.length) blocks.push(`<div class="room-field"><strong>${sp.integratedState || "Integrierter Zustand"}</strong><ul>${entry.integratedState.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.woundBehindPassion) blocks.push(woundBehindPassionSection(entry.woundBehindPassion));
  return blocks.join("");
}

function spuerenInner(entry, sp) {
  const blocks = [];
  // Profilbild (Seite 1) — zeigt Prototypen, Blickqualität, Körpersignatur
  const seite1 = `assets/knowledge/type-${entry.code.slice(-1)}/${entry.code.toLowerCase()}/${entry.code.toLowerCase()}-page-1.jpeg`;
  blocks.push(`
    <figure class="vollseite-karte">
      <p class="vollseite-karte__hint">Zum Vergrößern antippen</p>
      <div class="card-pg-wrap">
        <img src="${seite1}" alt="${entry.code} Seite 1 – Prototypen, Blickqualität und Körpersignatur" class="vollseite-karte__img" loading="lazy"
          onerror="this.closest('.vollseite-karte').style.display='none'" />
        <div class="card-pg-compass" aria-hidden="true">${compassMark("mini")}</div>
      </div>
      <figcaption class="vollseite-karte__titel">Seite 1 · Profil, Prototypen & Körpersignatur</figcaption>
    </figure>
  `);
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

function koerperarbeitBlock(k) {
  if (!k || !k.seiten) return "";
  return k.seiten.map(s => `
    <figure class="vollseite-karte">
      <p class="vollseite-karte__hint">Zum Vergrößern antippen</p>
      <div class="card-pg-wrap">
        <img src="${s.src}" alt="${s.alt}" class="vollseite-karte__img" loading="lazy" />
        <div class="card-pg-compass" aria-hidden="true">${compassMark("mini")}</div>
      </div>
      <figcaption class="vollseite-karte__titel">${s.titel}</figcaption>
    </figure>
  `).join("");
}

function regulierenInner(entry, sp) {
  const blocks = [];
  if (entry.koerperarbeit) blocks.push(koerperarbeitBlock(entry.koerperarbeit));
  if (entry.turningPoint && entry.turningPoint.length) blocks.push(`<div class="room-field"><strong>${sp.turningPoint || "Wendepunkt"}</strong><ul>${entry.turningPoint.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.nervousSystemRegulation && entry.nervousSystemRegulation.length) blocks.push(`<div class="room-field"><strong>${sp.nervousSystemRegulation || "Nervensystem-Regulation"}</strong><ul>${entry.nervousSystemRegulation.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.tensionFields && entry.tensionFields.length) blocks.push(`<div class="room-field"><strong>${sp.tensionFields || "Spannungsfelder"}</strong><ul>${entry.tensionFields.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.practice) blocks.push(`<div class="room-field"><strong>${sp.practice}</strong><p>${entry.practice}</p></div>`);
  return blocks.join("");
}

function verkoerpernInner(entry, sp) {
  const hasMedia = entry.mediaGroups || entry.mediaResources;
  if (hasMedia && !hasHeilwissen()) return heilwissenLock("Musik & Klang");
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

const TYPE_COLORS = {
  1: "#5f5f5f", 2: "#7a2fa8", 3: "#1fa688", 4: "#3cbf1f",
  5: "#124fcc", 6: "#8a5222", 7: "#d4a800", 8: "#a00802", 9: "#cc6e00"
};
function typeColor(num) { return TYPE_COLORS[parseInt(num)] || "var(--copper)"; }
function typeColorFromCode(code) { return typeColor(code ? code.slice(-1) : 0); }

const GRUNDTYPEN = [
  { num: 1, name: "Der Perfektionist",   label: "Der Ordnungsorientierte",      leidenschaft: "Zorn",    tier: "Adler",    thema: "Richtig & Falsch · Integrität & Ordnung",     codes: ["se1","so1","sx1"] },
  { num: 2, name: "Der Helfer",          label: "Der Beziehungsorientierte",    leidenschaft: "Stolz",   tier: "Katze",    thema: "Liebe & Anerkennung · Geben & Genommen-Werden", codes: ["se2","so2","sx2"] },
  { num: 3, name: "Der Leistungsträger", label: "Der Erfolgsorientierte",       leidenschaft: "Lüge",    tier: "Pfau",     thema: "Erfolg & Wert · Leistung & Anerkennung",       codes: ["se3","so3","sx3"] },
  { num: 4, name: "Der Individualist",   label: "Der Identitätsorientierte",    leidenschaft: "Neid",    tier: "Pferd",    thema: "Echtheit & Tiefe · Verlust & Sehnsucht",        codes: ["se4","so4","sx4"] },
  { num: 5, name: "Der Beobachter",      label: "Der Wissensorientierte",       leidenschaft: "Geiz",    tier: "Eule",     thema: "Wissen & Verstehen · Rückzug & Ressourcen",     codes: ["se5","so5","sx5"] },
  { num: 6, name: "Der Loyale",          label: "Der Sicherheitsorientierte",   leidenschaft: "Angst",   tier: "Hase",     thema: "Sicherheit & Vertrauen · Gefahr & Loyalität",   codes: ["se6","so6","sx6"] },
  { num: 7, name: "Der Enthusiast",      label: "Der Möglichkeitsorientierte",  leidenschaft: "Maßlosigkeit", tier: "Affe", thema: "Freude & Fülle · Optionen & Vermeidung",      codes: ["se7","so7","sx7"] },
  { num: 8, name: "Der Herausforderer",  label: "Der Machtorientierte",         leidenschaft: "Wollust", tier: "Löwe",     thema: "Stärke & Kontrolle · Gerechtigkeit & Macht",    codes: ["se8","so8","sx8"] },
  { num: 9, name: "Der Friedensstifter", label: "Der Harmoniebedürftige",       leidenschaft: "Trägheit",tier: "Elefant",  thema: "Harmonie & Frieden · Verschmelzung & Schlaf",   codes: ["se9","so9","sx9"] },
];

function typesPage() {
  const kartenHtml = GRUNDTYPEN.map(t => {
    const c = typeColor(t.num);
    return `
    <button class="typ-karte" data-route="type/${t.num}" style="border-left-color:${c}">
      <span class="typ-karte__num" style="background:${c}">${t.num}</span>
      <div class="typ-karte__body">
        <strong class="typ-karte__name" style="color:${c}">${t.name}</strong>
        <span class="typ-karte__label" style="color:${c}">${t.label}</span>
        <span class="typ-karte__thema">${t.thema}</span>
      </div>
      <span class="typ-karte__arrow" style="color:${c}">→</span>
    </button>`;
  }).join("");
  return shell(`
    ${pageHeader("knowledge")}
    <section class="narrow">
      <p class="eyebrow">Enneagramm-Heilungskompass</p>
      <h1>Die 9 Grundtypen</h1>
      <p class="lead-small">Wählen Sie Ihren Typ, um die drei Subtypen und alle Inhalte zu erkunden.</p>
    </section>
    <section class="typen-liste">${kartenHtml}</section>
  `);
}

function typePage(num) {
  const t = GRUNDTYPEN.find(x => x.num === parseInt(num));
  if (!t) return typesPage();
  const c = typeColor(t.num);
  const subtypenHtml = t.codes.map(code => {
    const p = subtypeProfiles[code];
    if (!p) return "";
    const instinktLabel = { se: "Selbsterhaltung", so: "Sozial", sx: "Sexuell / Partnerschaft" }[code.slice(0,2)] || "";
    return `
      <button class="subtyp-karte" data-route="subtype/${code}" style="border-left-color:${c}">
        <div class="subtyp-karte__icon" style="color:${c}">${p.emoji || p.code}</div>
        <div class="subtyp-karte__body">
          <strong style="color:${c}">${p.title}</strong>
          <span>${p.code} · ${instinktLabel}</span>
          <em>${p.focus}</em>
        </div>
        <span class="subtyp-karte__arrow" style="color:${c}">→</span>
      </button>
    `;
  }).join("");
  return shell(`
    ${pageHeader("knowledge")}
    <section class="narrow">
      <button class="ghost-link" data-route="knowledge">← Alle Typen</button>
      <p class="eyebrow" style="color:${c}">Typ ${t.num} · ${t.label}</p>
      <h1 style="color:${c}">${t.name}</h1>
      <p class="lead-small">${t.thema}</p>
      <div class="typ-meta">
        <span class="typ-meta__chip" style="border-color:${c};color:${c}">Leidenschaft: <strong>${t.leidenschaft}</strong></span>
        <span class="typ-meta__chip" style="border-color:${c};color:${c}">Tier: <strong>${t.tier}</strong></span>
      </div>
      ${impulseBlock(TYP_IMPULSE[t.num], c)}
    </section>
    <section class="subtypen-liste">${subtypenHtml}</section>
  `);
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
      ${(item.heilmittel || item.remedies)
          ? hasHeilwissen()
            ? (item.heilmittel ? heilmittelSection(item.heilmittel, oelForType(item.code), item.code) : `
        <div class="knowledge-section">
          <strong>${labels.remedies}</strong>
          <p>${item.remedies.join(" · ")}</p>
        </div>
      `)
            : heilwissenLock()
          : ""}
      ${item.visualPages ? visualPageSection(item.visualPages) : ""}
      ${(item.mediaGroups || item.mediaResources)
          ? hasHeilwissen()
            ? (item.mediaGroups ? mediaGroupSection(item.mediaGroups) : mediaResourceSection(item.mediaResources))
            : heilwissenLock("Musik & Klang")
          : ""}
      <div class="review-box">
        <strong>${labels.review}</strong>
        ${item.needsReview.length ? `<ul>${item.needsReview.map((entry) => `<li>${entry}</li>`).join("")}</ul>` : `<p>${labels.noRequiredReviews}</p>`}
      </div>
    </article>
	  `;
}

function heilmittelSection(h, oel, code) {
  const w = text.knowledgeCard.heilmittel;
  const row = (label, value) => {
    const meaning = value && remedyGlossary[value] ? `<small class="remedy-row__meaning">${remedyGlossary[value]}</small>` : "";
    return `<li class="remedy-row"><span class="remedy-row__label">${label}</span><span class="remedy-row__value${value ? "" : " remedy-row__value--empty"}">${value || w.pending}${meaning}</span></li>`;
  };
  const passion = h.leidenschaft || {};
  const wound = h.wunde || {};
  const seite4 = code ? `assets/knowledge/type-${code.slice(-1)}/${code.toLowerCase()}/${code.toLowerCase()}-page-4.jpeg` : null;
  return `
    <div class="knowledge-section heilmittel-box">
      <strong>${w.title}</strong>
      ${seite4 ? `
      <figure class="vollseite-karte">
        <p class="vollseite-karte__hint">Zum Vergrößern antippen</p>
        <img src="${seite4}" alt="Heilmittel-Kompass Übersicht" class="vollseite-karte__img" loading="lazy"
          onerror="this.closest('.vollseite-karte').style.display='none'" />
        <figcaption class="vollseite-karte__titel">Seite 4 · Heilmittel-Kompass</figcaption>
      </figure>` : ""}
      <div class="remedy-level">
        <span class="remedy-level__title remedy-level__title--passion">${w.leidenschaftTitle}</span>
        <ul class="remedy-list">
          ${row(w.homoeopathie, passion.homoeopathie)}
          ${row(w.schuessler, passion.schuessler)}
          ${row(w.bachbluete, passion.bachbluete)}
          ${row(w.edelstein, passion.edelstein)}
          ${row(w.tee, passion.tee)}
        </ul>
        ${
          h.homoeopathieThema
            ? `<p class="remedy-theme"><strong>${passion.homoeopathie || w.homoeopathie}:</strong> ${h.homoeopathieThema} ${h.homoeopathieWirkung || ""}</p>`
            : ""
        }
      </div>
      <div class="remedy-level">
        <span class="remedy-level__title remedy-level__title--wound">${w.wundeTitle}</span>
        <ul class="remedy-list">
          ${row(w.homoeopathie, wound.homoeopathie)}
          ${row(w.schuessler, wound.schuessler)}
          ${row(w.bachbluete, wound.bachbluete)}
        </ul>
        ${
          h.wundeThema
            ? `<p class="remedy-theme"><strong>${wound.homoeopathie || w.homoeopathie}:</strong> ${h.wundeThema} ${h.wundeWirkung || ""}</p>`
            : ""
        }
        ${
          oel
            ? `<div class="remedy-oil">
                 <div class="remedy-oil__image"><img src="${oel.image}" alt="${oel.name}" loading="lazy" /></div>
                 <div class="remedy-oil__body">
                   <span class="remedy-oil__label">${w.aetherischesOel}</span>
                   <strong>${oel.name}</strong>
                   <p>${oel.wirkung}</p>
                 </div>
               </div>`
            : ""
        }
      </div>
      <p class="remedy-note">${w.note}</p>
      <p class="remedy-note remedy-note--individual">${w.individualNote}</p>
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
              ${page.status ? `<span class="${page.status}">${coverageStatusLabel(page.status)}</span>` : ""}
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
            <div class="card-pg-wrap">
              <a href="${page.src}" target="_blank" rel="noreferrer">
                <img src="${page.src}" alt="${page.alt}" loading="lazy" />
              </a>
              <div class="card-pg-compass" aria-hidden="true">${compassMark("mini")}</div>
            </div>
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

function profilePage() {
  const allCodes = Object.keys(subtypeProfiles);
  const sortBy = (order) => (a, b) => order.indexOf(parseInt(a[2])) - order.indexOf(parseInt(b[2]));
  const groups = [
    { label: "Bauchzentrum · Typ 8, 9, 1", hint: "Handlung, Instinkt, Körper",   codes: allCodes.filter(c => [8,9,1].includes(parseInt(c[2]))).sort(sortBy([8,9,1])) },
    { label: "Herzzentrum · Typ 2, 3, 4",  hint: "Gefühl, Beziehung, Identität", codes: allCodes.filter(c => [2,3,4].includes(parseInt(c[2]))).sort(sortBy([2,3,4])) },
    { label: "Kopfzentrum · Typ 5, 6, 7",  hint: "Denken, Sicherheit, Vorstellung", codes: allCodes.filter(c => [5,6,7].includes(parseInt(c[2]))).sort(sortBy([5,6,7])) },
  ];
  const current = state.profile.id;
  const firstVisit = state.isFirstVisit;

  let cardIdx = 0;
  const groupsHTML = groups.map(g => {
    const cardsHTML = g.codes.map(id => {
      const p = subtypeProfiles[id];
      const active = id === current ? ' profile-card--active' : '';
      const delay = (cardIdx++ * 0.035).toFixed(3);
      return `<button class="profile-card${active}" style="animation-delay:${delay}s" data-select-profile="${id}">
        <div class="profile-card__visual">
          ${p.image
            ? `<img src="${p.image}" alt="${p.archetype || p.code}" class="profile-card__img" />`
            : `<span class="profile-card__emoji">${p.emoji || ''}</span>`}
        </div>
        <span class="profile-card__code">${p.code}</span>
        <strong class="profile-card__title">${p.title}</strong>
        ${p.titleAlt ? `<em class="profile-card__alt">${p.titleAlt}</em>` : ''}
        ${p.variant ? `<span class="profile-card__variant">${p.variant}</span>` : ''}
      </button>`;
    }).join("");
    return `<section class="profile-group">
      <div class="profile-group__head">
        <h2 class="profile-group__label">${g.label}</h2>
        <span class="profile-group__hint">${g.hint}</span>
      </div>
      <div class="profile-grid">${cardsHTML}</div>
    </section>`;
  }).join("");

  return shell(`
    ${firstVisit ? '' : pageHeader("profile")}
    <section class="narrow centered profile-intro">
      ${firstVisit ? `<div class="profile-intro__compass">${compassMark("small")}</div>` : ''}
      <h1>${firstVisit ? 'Welcher Subtyp bist du?' : 'Subtyp wählen'}</h1>
      <p class="lead-small">${firstVisit
        ? 'Wähle deinen Enneagramm-Subtyp. Der Kompass richtet sich vollständig auf dich aus — Tagesimpuls, Muster, Werkzeuge und Heilungsweg.'
        : 'Dein aktuelles Profil ist <strong>' + state.profile.code + ' · ' + state.profile.title + '</strong>. Wähle einen anderen Subtyp, um den Kompass neu auszurichten.'
      }</p>
      <p class="profile-type-hint">Kennst du deinen Subtyp noch nicht? Kein Problem — schau dir die drei Varianten deines Typs an (z.&nbsp;B. SE6, SO6, SX6) und wähle die, die sich am stimmigsten anfühlt.</p>
    </section>
    ${groupsHTML}
    ${firstVisit ? `<p class="profile-skip">Noch unsicher? <button class="ghost-link" data-route="knowledge">Erst den Wissens-Atlas erkunden</button></p>` : ''}
  `);
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

function showElementModal(elementName) {
  const el = tcmElemente[elementName];
  if (!el) return;
  const existing = document.querySelector(".tcm-element-modal-overlay");
  if (existing) existing.remove();
  const overlay = document.createElement("div");
  overlay.className = "tcm-element-modal-overlay";
  overlay.innerHTML = `
    <div class="tcm-element-modal" style="--el-color:${el.farbe}">
      <button class="tcm-element-modal__close" aria-label="Schließen">✕</button>
      <div class="tcm-element-modal__header">
        <span class="tcm-element-modal__symbol">${el.symbol}</span>
        <div>
          <h2>${elementName}</h2>
          <p class="tcm-element-modal__typen">Enneagramm: ${el.typen}</p>
        </div>
      </div>
      <p class="tcm-element-modal__beschreibung">${el.beschreibung}</p>
      <dl class="tcm-element-modal__facts">
        <dt>${el.jahreszeitLabel}</dt><dd>${el.jahreszeit}</dd>
        <dt>${el.organeLabel}</dt><dd>${el.organe}</dd>
        <dt>${el.emotionLabel}</dt><dd>${el.emotion}</dd>
        <dt>${el.heilungLabel}</dt><dd>${el.heilung}</dd>
        <dt>${el.geschmackLabel}</dt><dd>${el.geschmack}</dd>
        <dt>${el.qualitaetLabel}</dt><dd>${el.qualitaet}</dd>
      </dl>
    </div>
  `;
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target.classList.contains("tcm-element-modal__close")) {
      overlay.remove();
    }
  });
  document.body.appendChild(overlay);
}

function bindEvents() {
  // Kompass-Overlay auf ALLEN Vollseiten-Karten sicherstellen (deckt die Seitenzahl oben).
  // Greift auch fuer Seiten, deren Render-Pfad den Wrap nicht selbst setzt (z. B. Heilmittel-Seite 4).
  document.querySelectorAll(".vollseite-karte").forEach((fig) => {
    if (fig.querySelector(".card-pg-compass")) return; // schon vorhanden – keine Dublette
    const img = fig.querySelector(".vollseite-karte__img");
    if (!img) return;
    let wrap = img.closest(".card-pg-wrap");
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.className = "card-pg-wrap";
      img.parentNode.insertBefore(wrap, img);
      wrap.appendChild(img);
    }
    const comp = document.createElement("div");
    comp.className = "card-pg-compass";
    comp.setAttribute("aria-hidden", "true");
    comp.innerHTML = compassMark("mini");
    wrap.appendChild(comp);
  });

  document.querySelectorAll("[data-dropdown-toggle]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const wrap = trigger.closest(".nav-dropdown-wrap");
      const menu = wrap.querySelector(".nav-dropdown__menu");
      const isOpen = wrap.classList.contains("is-open");
      document.querySelectorAll(".nav-dropdown-wrap.is-open").forEach(w => w.classList.remove("is-open"));
      if (!isOpen) {
        const rect = trigger.getBoundingClientRect();
        menu.style.top = (rect.bottom + 6) + "px";
        menu.style.right = (window.innerWidth - rect.right) + "px";
        wrap.classList.add("is-open");
      }
    });
  });
  // Close dropdown when clicking outside — use bubble phase so stopPropagation above works
  document.body.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-dropdown-wrap")) {
      document.querySelectorAll(".nav-dropdown-wrap.is-open").forEach(w => w.classList.remove("is-open"));
    }
  });

  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.locked) {
        go("freischalt/" + button.dataset.locked);
      } else {
        go(button.dataset.route);
      }
    });
  });

  const save = document.querySelector("#saveJournal");
  if (save) {
    save.addEventListener("click", () => {
      const journalText = document.querySelector("#journalText").value;
      localStorage.setItem("enneagramm-kompass:sx6-journal", journalText);
      document.querySelector("#saveStatus").textContent = text.routes.reflection.saved;
    });
  }

  document.querySelectorAll("[data-tcm-element]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      showElementModal(btn.dataset.tcmElement);
    });
  });

  document.querySelectorAll(".inline-section__toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = btn.closest(".inline-section");
      const collapsed = section.dataset.collapsed === "true";
      section.dataset.collapsed = collapsed ? "false" : "true";
      btn.setAttribute("aria-expanded", collapsed ? "true" : "false");
    });
  });

  document.querySelectorAll("[data-werk-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.werkFilter;
      document.querySelectorAll("[data-werk-filter]").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      document.querySelectorAll(".werk-card").forEach(card => {
        const match = filter === "all" || card.dataset.category === filter;
        card.style.display = match ? "" : "none";
      });
    });
  });

  const unlockBtn = document.querySelector("#unlockBtn");
  if (unlockBtn) {
    const doUnlock = () => {
      const code = (document.querySelector("#unlockCode").value || "").trim().toUpperCase();
      const msg = document.querySelector("#unlockMsg");
      if (code === BASIS_CODE) {
        setTier("basis");
        go("dashboard");
      } else if (code === HEILUNG_CODE || code === GESAMT_CODE) {
        setTier("heilwissen");
        go("healing");
      } else {
        msg.textContent = "Ungültiger Code. Bitte prüfen Sie die E-Mail von Digistore24.";
        msg.style.color = "var(--copper)";
      }
    };
    unlockBtn.addEventListener("click", doUnlock);
    document.querySelector("#unlockCode").addEventListener("keydown", (e) => {
      if (e.key === "Enter") doUnlock();
    });
  }

  document.querySelectorAll("[data-select-profile]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.selectProfile;
      if (subtypeProfiles[id]) {
        localStorage.setItem(PROFILE_KEY, id);
        localStorage.setItem(VISITED_KEY, "1");
        state.profile = subtypeProfiles[id];
        state.isFirstVisit = false;
        go("dashboard");
      }
    });
  });

  if (state.route === "typentest") {
    bindTypentest();
  }
  if (state.route === "typentest-motivational") {
    bindMotivtest();
  }
  if (state.route === "diagnosetest") {
    bindDiagnosetest();
  }
}

// ── TYPENTEST ─────────────────────────────────────────────────────────────────

function typentestMotivationalPage() {
  const ms = motivState;

  // ── Phase: Intro ───────────────────────────────────────────────────────────
  if (ms.phase === "intro") {
    return shell(`
      ${pageHeader("typentest-motivational")}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <p class="eyebrow">Motivationaler Enneagrammtypentest · für Fortgeschrittene</p>
          <h1 class="typentest-titel">Den tieferen Antrieb erkennen</h1>
          <p class="typentest-intro">Dieser Test fragt nach Ihren Motivationen, nicht nach Ihrem Verhalten. Wählen Sie bei jeder der 100 Fragen die zwei Aussagen, die am ehesten auf Sie zutreffen.</p>
          <ul class="typentest-hinweis" style="list-style:none;padding:0;margin:1.2rem 0;">
            <li style="padding:0.35rem 0;border-bottom:1px solid var(--line);">&#8226; 100 Fragen aus verschiedenen Lebensbereichen</li>
            <li style="padding:0.35rem 0;border-bottom:1px solid var(--line);">&#8226; Je Frage: 1.&nbsp;Wahl (am wichtigsten) + 2.&nbsp;Wahl (zweitwichtigsten)</li>
            <li style="padding:0.35rem 0;border-bottom:1px solid var(--line);">&#8226; Dauer: ca. 20–30 Minuten</li>
            <li style="padding:0.35rem 0;">&#8226; Empfehlung: Ruhige Atmosphäre, ehrliche Antworten</li>
          </ul>
          <button class="typentest-start-btn" data-motiv-start>Test starten &#8594;</button>
        </div>
      </div>
    `);
  }

  // ── Phase: Test ────────────────────────────────────────────────────────────
  if (ms.phase === "test") {
    const total = MOTIVTEST.length;
    const qi = ms.qIndex;
    const q = MOTIVTEST[qi];
    const pct = Math.round((qi / total) * 100);
    const ans = ms.answers[q.nr] || {};
    const letters = Object.keys(q.antworten);

    const answerCards = letters.map(letter => {
      const isFirst = ans.first === letter;
      const isSecond = ans.second === letter;
      const cls = isFirst ? "motiv-answer motiv-answer--first"
                : isSecond ? "motiv-answer motiv-answer--second"
                : "motiv-answer";
      const badge = isFirst ? `<span class="motiv-answer__badge">1</span>`
                  : isSecond ? `<span class="motiv-answer__badge">2</span>`
                  : "";
      return `<button class="${cls}" data-motiv-answer="${letter}" data-motiv-qnr="${q.nr}">
        ${badge}
        <span class="motiv-answer__text">${q.antworten[letter]}</span>
      </button>`;
    }).join("");

    const hasTwo = ans.first && ans.second;
    const canNext = hasTwo;

    return shell(`
      ${pageHeader("typentest-motivational")}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <div class="motiv-progress">
            <span class="motiv-progress__label">Frage ${qi + 1} von ${total}</span>
            <div class="motiv-progress__track"><div class="motiv-progress__bar" style="width:${pct}%"></div></div>
          </div>
          <p class="eyebrow" style="margin-top:1.2rem;">Frage ${q.nr}: ${q.thema}</p>
          <p class="typentest-frage">${q.frage}</p>
          <p class="typentest-intro" style="margin-bottom:0.8rem;">Wählen Sie die <strong>zwei</strong> Aussagen, die am ehesten auf Sie zutreffen – zuerst die treffendste, dann die zweittreffendste.</p>
          <div class="motiv-answer-grid">
            ${answerCards}
          </div>
          <div class="typentest-cta-group" style="margin-top:1.5rem;">
            ${qi > 0 ? `<button class="ghost-link" data-motiv-back>&#8592; Zurück</button>` : ""}
            <button class="typentest-start-btn" data-motiv-next ${canNext ? "" : "disabled"} style="${canNext ? "" : "opacity:0.45;cursor:not-allowed;"}">${qi < total - 1 ? "Weiter &#8594;" : "Ergebnis anzeigen &#8594;"}</button>
            <button class="ghost-link" data-motiv-skip style="font-size:0.8rem;opacity:0.6;">Frage überspringen</button>
          </div>
        </div>
      </div>
    `);
  }

  // ── Phase: Result ──────────────────────────────────────────────────────────
  if (ms.phase === "result") {
    const scores = {};
    for (let t = 1; t <= 9; t++) scores[t] = 0;
    for (const [, ans] of Object.entries(ms.answers)) {
      if (ans.first)  { const t = LETTER_TO_TYPE[ans.first];  if (t) scores[t] += 6; }
      if (ans.second) { const t = LETTER_TO_TYPE[ans.second]; if (t) scores[t] += 3; }
    }
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topType = parseInt(sorted[0][0]);
    const topScore = sorted[0][1];
    const maxScore = topScore || 1;
    const top3 = sorted.slice(0, 3);

    const typColors = {
      1:"#7d593d",2:"#a5603d",3:"#30483d",4:"#5a4070",
      5:"#243948",6:"#607468",7:"#d4900a",8:"#8b2020",9:"#556b2f"
    };
    const typColor = typColors[topType] || "var(--copper)";

    const scoreBars = sorted.map(([typ, score], i) => {
      const pct = Math.round((score / maxScore) * 100);
      const highlight = i === 0 ? `style="background:${typColor}"` : "";
      return `
        <div class="motiv-score-row">
          <span class="motiv-score-label">Typ&nbsp;${typ}</span>
          <div class="motiv-score-track">
            <div class="motiv-score-bar ${i === 0 ? "motiv-score-bar--top" : ""}" ${highlight} style="width:${pct}%"></div>
          </div>
          <span class="motiv-score-num">${score}</span>
        </div>`;
    }).join("");

    return shell(`
      ${pageHeader("typentest-motivational")}
      <div class="typentest-wrap">
        <div class="typentest-card typentest-card--result">
          <p class="eyebrow">Ihr Ergebnis</p>
          <div class="typentest-result-badge" style="border-color:${typColor};color:${typColor}">${topType}</div>
          <h2 class="typentest-titel" style="color:${typColor}">${TYPNAMEN_MOTIV[topType]}</h2>
          <p class="typentest-intro">Ihre Auswertung deutet auf <strong>Typ&nbsp;${topType}</strong> hin. Das Ergebnis basiert auf Ihrer Selbsteinschätzung und ist als Orientierungshinweis zu verstehen.</p>

          <div class="motiv-scores">
            ${scoreBars}
          </div>

          <div class="typentest-disclaimer" style="margin-top:1.5rem;">
            <strong>Zur Einordnung:</strong> Kein Selbsttest kann den eigenen blinden Fleck vollständig überbrücken. Das Ergebnis ist ein <em>Hinweis</em>, kein Urteil. Für eine präzise Bestimmung empfiehlt sich eine persönliche Typisierungsberatung.
          </div>

          <div class="typentest-cta-group">
            <button class="primary" style="background:${typColor};border-color:${typColor}" data-route="type/${topType}">Zum Typ&nbsp;${topType} im Kompass &#8594;</button>
            <a class="typentest-cta-btn" href="mailto:detlefrathmer@t-online.de?subject=Typisierungsberatung%20anfragen">&#9993; Beratungstermin anfragen</a>
          </div>

          <button class="ghost-link" data-motiv-reset>Test wiederholen</button>
          <button class="ghost-link" data-route="dashboard">&#8592; Zum Dashboard</button>
        </div>
      </div>
    `);
  }

  return shell(`${pageHeader("typentest-motivational")}<div class="typentest-wrap"><p>Fehler im Test.</p></div>`);
}

function typentestPage() {
  const ts = testState;
  const navBar = () => pageHeader("typentest");

  // Phase 0: Intro
  if (ts.phase === 0) {
    return shell(`
      ${navBar()}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <p class="eyebrow">Struktureller Enneagrammtypentest · für Anfänger</p>
          <h1 class="typentest-titel">Den Code deiner Persönlichkeit entschlüsseln</h1>
          <p class="typentest-intro">Dieser Test führt dich in drei Schritten zu einem ersten Hinweis auf deinen Enneagramm-Typ und Instinktschwerpunkt. Er dauert etwa 7–10 Minuten.</p>
          <div class="typentest-hinweis">
            <strong>Wichtiger Hinweis:</strong> Kein Selbsttest kann den eigenen blinden Fleck vollständig überbrücken. Das Ergebnis ist ein <em>Hinweis</em>, kein Urteil. Für eine präzise Bestimmung empfiehlt sich eine persönliche Typisierungsberatung.
          </div>
          <div class="typentest-steps">
            <div class="typentest-step"><span class="typentest-step__num">1</span><span>Triade erkennen <small>(Bauch · Herz · Kopf)</small></span></div>
            <div class="typentest-step"><span class="typentest-step__num">2</span><span>Typ innerhalb der Triade</span></div>
            <div class="typentest-step"><span class="typentest-step__num">3</span><span>Instinktschwerpunkt</span></div>
          </div>
          <button class="primary" id="tt-start">Test starten →</button>
          <button class="ghost-link" data-route="dashboard">← Zurück</button>
        </div>
      </div>
    `);
  }

  // Phase 1: Triadenwahl
  if (ts.phase === 1) {
    const triaden = Object.entries(TRIADEN);
    return shell(`
      ${navBar()}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <p class="eyebrow">Schritt 1 von 3 · Triade</p>
          <h2 class="typentest-titel">Bauch, Herz oder Kopf?</h2>
          <p class="typentest-intro">Lies die drei Blöcke aufmerksam. Welcher beschreibt dich am besten – nicht wie du sein möchtest, sondern wie du <em>wirklich</em> bist?</p>
          <div class="typentest-triad-grid">
            ${triaden.map(([key, t]) => `
              <button class="typentest-triad-card" data-tt-triad="${key}">
                <div class="typentest-triad-card__label">${t.label}</div>
                <div class="typentest-triad-card__impuls">${t.grundimpuls}</div>
                <ul class="typentest-triad-card__list">
                  ${t.statements.map(s => `<li>${s}</li>`).join("")}
                </ul>
              </button>
            `).join("")}
          </div>
          <button class="ghost-link" id="tt-back-0">← Zurück</button>
        </div>
      </div>
    `);
  }

  // Phase 2: Typfragen (5 Fragen, eine nach der anderen)
  if (ts.phase === 2) {
    const fragen = TYPFRAGEN[ts.triad];
    const qi = ts.qIndex;
    const frage = fragen[qi];
    const total = fragen.length;
    const pct = Math.round((qi / total) * 100);
    return shell(`
      ${navBar()}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <p class="eyebrow">Schritt 2 von 3 · Frage ${qi + 1} von ${total}</p>
          <div class="typentest-progress"><div class="typentest-progress__bar" style="width:${pct}%"></div></div>
          <h2 class="typentest-frage">${frage.frage}</h2>
          <p class="typentest-intro">Wähle die Aussage, die am ehesten zutrifft – nicht die ideale, sondern die ehrlichste.</p>
          <div class="typentest-antworten">
            ${frage.antworten.map((a, i) => `
              <button class="typentest-antwort" data-tt-antwort="${a.typ}" data-tt-qi="${qi}">
                <span class="typentest-antwort__buchstabe">${["A","B","C"][i]}</span>
                <span class="typentest-antwort__text">${a.text}</span>
              </button>
            `).join("")}
          </div>
          ${qi > 0 ? `<button class="ghost-link" id="tt-back-q">← Vorherige Frage</button>` : `<button class="ghost-link" id="tt-back-1">← Zur Triaden-Auswahl</button>`}
        </div>
      </div>
    `);
  }

  // Phase 3: Instinkt
  if (ts.phase === 3) {
    return shell(`
      ${navBar()}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <p class="eyebrow">Schritt 3 von 3 · Instinkt</p>
          <h2 class="typentest-titel">Dein Instinktschwerpunkt</h2>
          <p class="typentest-intro">Jeder Mensch trägt alle drei Instinkte in sich – aber einer dominiert. Welche Beschreibung trifft am ehesten auf dich zu?</p>
          <div class="typentest-antworten">
            ${INSTINKTE.map(inst => `
              <button class="typentest-antwort" data-tt-instinkt="${inst.code}">
                <span class="typentest-antwort__buchstabe">${inst.code}</span>
                <div>
                  <strong class="typentest-antwort__label">${inst.label}</strong>
                  <span class="typentest-antwort__text">${inst.beschreibung}</span>
                </div>
              </button>
            `).join("")}
          </div>
          <button class="ghost-link" id="tt-back-2">← Zurück</button>
        </div>
      </div>
    `);
  }

  // Phase 4: Ergebnis
  if (ts.phase === 4) {
    // Typ mit höchstem Score ermitteln
    const scores = ts.scores;
    const topTyp = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0];
    const typNum = parseInt(topTyp);
    const typColor = TYPE_COLORS[typNum] || "var(--accent)";
    const typName = TYPNAMEN[typNum] || "";
    const typKurz = TYPKURZ[typNum] || "";
    const instCode = ts.instinkt || "";
    const instLabel = INSTINKTE.find(i => i.code === instCode)?.label || "";
    const subtypeCode = `${instCode.toLowerCase()}${typNum}`;
    const hasSubtype = !!subtypeDetails[subtypeCode];

    return shell(`
      ${navBar()}
      <div class="typentest-wrap">
        <div class="typentest-card typentest-card--result">
          <p class="eyebrow">Dein Tipp-Typ</p>
          <div class="typentest-result-badge" style="border-color:${typColor};color:${typColor}">
            Typ ${typNum} · ${instCode}
          </div>
          <h2 class="typentest-titel" style="color:${typColor}">${typName}</h2>
          <p class="typentest-subline">${instCode} – ${instLabel}</p>
          <p class="typentest-result-text">${typKurz}</p>

          <div class="typentest-disclaimer">
            <strong>Zur Einordnung:</strong> Dieser Test basiert auf Selbsteinschätzung. Da blinde Flecken zur Persönlichkeit gehören, ist das Ergebnis ein <em>Orientierungshinweis</em> — kein Urteil. Selbst sehr bewusste Menschen haben Schwierigkeiten, ihren eigenen Typ sicher zu bestimmen. Für eine präzise Einschätzung empfiehlt sich eine persönliche Beratung.
          </div>

          <div class="typentest-cta-group">
            ${hasSubtype ? `<button class="primary" style="background:${typColor};border-color:${typColor}" data-route="subtype/${subtypeCode}">Zum Subtyp-Profil: ${instCode.toUpperCase()}${typNum} →</button>` : `<button class="primary" style="background:${typColor};border-color:${typColor}" data-route="type/${typNum}">Zum Typ ${typNum} im Kompass →</button>`}
            <a class="typentest-cta-btn" href="mailto:detlefrathmer@t-online.de?subject=Typisierungsberatung%20anfragen">✉ Beratungstermin anfragen</a>
            <a class="typentest-cta-btn typentest-cta-btn--wa" href="https://wa.me/4915758786201?text=Ich%20m%C3%B6chte%20eine%20Typisierungsberatung%20anfragen." target="_blank" rel="noopener">WhatsApp Detlef Rathmer</a>
          </div>

          <button class="ghost-link" id="tt-restart">Test wiederholen</button>
          <button class="ghost-link" data-route="dashboard">← Zum Dashboard</button>
        </div>
      </div>
    `);
  }

  return shell(`${navBar()}<div class="typentest-wrap"><p>Fehler im Test.</p></div>`);
}

function bindTypentest() {
  const ts = testState;

  // Start
  document.getElementById("tt-start")?.addEventListener("click", () => {
    testState = { phase: 1, triad: null, scores: {}, instinkt: null, qIndex: 0 };
    render();
  });

  // Restart
  document.getElementById("tt-restart")?.addEventListener("click", () => {
    testState = { phase: 0, triad: null, scores: {}, instinkt: null, qIndex: 0 };
    render();
  });

  // Triaden-Auswahl
  document.querySelectorAll("[data-tt-triad]").forEach(btn => {
    btn.addEventListener("click", () => {
      testState.triad = btn.dataset.ttTriad;
      testState.phase = 2;
      testState.qIndex = 0;
      testState.scores = {};
      render();
    });
  });

  // Antworten Phase 2
  document.querySelectorAll("[data-tt-antwort]").forEach(btn => {
    btn.addEventListener("click", () => {
      const typ = parseInt(btn.dataset.ttAntwort);
      testState.scores[typ] = (testState.scores[typ] || 0) + 1;
      const total = TYPFRAGEN[testState.triad].length;
      if (testState.qIndex < total - 1) {
        testState.qIndex++;
        render();
      } else {
        testState.phase = 3;
        render();
      }
    });
  });

  // Instinkt-Auswahl
  document.querySelectorAll("[data-tt-instinkt]").forEach(btn => {
    btn.addEventListener("click", () => {
      testState.instinkt = btn.dataset.ttInstinkt;
      testState.phase = 4;
      render();
    });
  });

  // Zurück-Navigation
  document.getElementById("tt-back-0")?.addEventListener("click", () => { testState.phase = 0; render(); });
  document.getElementById("tt-back-1")?.addEventListener("click", () => { testState.phase = 1; testState.qIndex = 0; render(); });
  document.getElementById("tt-back-2")?.addEventListener("click", () => { testState.phase = 2; testState.qIndex = TYPFRAGEN[testState.triad].length - 1; render(); });
  document.getElementById("tt-back-q")?.addEventListener("click", () => { if (testState.qIndex > 0) { testState.qIndex--; render(); } });
}

function bindMotivtest() {
  // Intro → Start
  document.querySelector("[data-motiv-start]")?.addEventListener("click", () => {
    motivState = { phase: "test", qIndex: 0, answers: {} };
    render();
  });

  // Weiter / Ergebnis
  document.querySelector("[data-motiv-next]")?.addEventListener("click", () => {
    if (motivState.qIndex < MOTIVTEST.length - 1) {
      motivState.qIndex++;
    } else {
      motivState.phase = "result";
    }
    render();
  });

  // Zurück
  document.querySelector("[data-motiv-back]")?.addEventListener("click", () => {
    if (motivState.qIndex > 0) { motivState.qIndex--; render(); }
  });

  // Überspringen
  document.querySelector("[data-motiv-skip]")?.addEventListener("click", () => {
    if (motivState.qIndex < MOTIVTEST.length - 1) {
      motivState.qIndex++;
    } else {
      motivState.phase = "result";
    }
    render();
  });

  // Antwort auswählen
  document.querySelectorAll("[data-motiv-answer]").forEach(btn => {
    btn.addEventListener("click", () => {
      const letter = btn.dataset.motivAnswer;
      const nr = parseInt(btn.dataset.motivQnr);
      const cur = motivState.answers[nr] || { first: null, second: null };
      if (cur.first === letter) {
        // Deselect first → second becomes first
        motivState.answers[nr] = { first: cur.second, second: null };
      } else if (cur.second === letter) {
        // Deselect second
        motivState.answers[nr] = { first: cur.first, second: null };
      } else if (!cur.first) {
        motivState.answers[nr] = { first: letter, second: cur.second };
      } else if (!cur.second) {
        motivState.answers[nr] = { first: cur.first, second: letter };
      } else {
        // Both taken → replace second
        motivState.answers[nr] = { first: cur.first, second: letter };
      }
      render();
    });
  });

  // Reset
  document.querySelector("[data-motiv-reset]")?.addEventListener("click", () => {
    motivState = { phase: "intro", qIndex: 0, answers: {} };
    render();
  });
}

// ── DIAGNOSETEST ───────────────────────────────────────────────────────────────

function diagnosetestPage() {
  const ds = diagnoseState;

  // ── Phase: Intro ────────────────────────────────────────────────────────────
  if (ds.phase === "intro") {
    return shell(`
      ${pageHeader("diagnosetest")}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <p class="eyebrow">Enneagramm-Diagnose-Test</p>
          <h1 class="typentest-titel">Welcher Typ bin ich?</h1>
          <p class="typentest-intro">Dieser Test führt Sie durch neun Persönlichkeitsprofile. Kreuzen Sie bei jedem Abschnitt die Aussagen an, die auf Sie zutreffen. Am Ende zeigt Ihnen die Auswertung, welchem Enneagrammtyp Sie am nächsten stehen.</p>
          <ul class="typentest-hinweis" style="list-style:none;padding:0;margin:1.2rem 0;">
            <li style="padding:0.35rem 0;border-bottom:1px solid var(--line);">&#8226; 9 Abschnitte mit je ca. 28–30 Aussagen</li>
            <li style="padding:0.35rem 0;border-bottom:1px solid var(--line);">&#8226; Kreuzen Sie alles an, was auf Sie zutrifft</li>
            <li style="padding:0.35rem 0;border-bottom:1px solid var(--line);">&#8226; Die Reihenfolge ist zufällig – kein Typ wird vorab benannt</li>
            <li style="padding:0.35rem 0;">&#8226; Dauer: ca. 10–15 Minuten</li>
          </ul>
          <button class="typentest-start-btn" data-diag-start>Test starten &#8594;</button>
        </div>
      </div>
    `);
  }

  // ── Phase: Step ─────────────────────────────────────────────────────────────
  if (ds.phase === "step") {
    const s = ds.step;
    const entry = DIAGNOSETEST[ds.order[s]];
    const typ = entry.typ;
    const checked = ds.checks[typ] || [];
    const pct = Math.round(((s + 1) / 9) * 100);
    const isLast = s === 8;

    const items = entry.aussagen.map((text, i) => {
      const isChecked = checked.includes(i);
      return `<label class="diag-item${isChecked ? " diag-item--checked" : ""}">
        <input type="checkbox" data-diag-check data-diag-idx="${i}"${isChecked ? " checked" : ""}>
        <span>${text}</span>
      </label>`;
    }).join("");

    return shell(`
      ${pageHeader("diagnosetest")}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <p class="eyebrow">Abschnitt ${s + 1} von 9</p>
          <div style="width:100%;height:6px;background:rgba(114,102,90,0.15);border-radius:3px;margin:0.4rem 0 1.2rem;">
            <div style="width:${pct}%;height:6px;border-radius:3px;background:var(--copper,#a5603d);transition:width 0.3s;"></div>
          </div>
          <h2 class="typentest-titel" style="font-size:1.3rem;margin-bottom:0.3rem;">Welche Aussagen treffen auf Sie zu?</h2>
          <p class="typentest-intro" style="margin-bottom:0.8rem;">Kreuzen Sie alle Aussagen an, die Sie als zutreffend empfinden.</p>
          <div class="diag-list">${items}</div>
          <div class="diag-nav">
            ${s > 0 ? `<button class="typentest-start-btn" style="background:transparent;color:var(--copper,#a5603d);border:1.5px solid var(--copper,#a5603d);" data-diag-back>&#8592; Zurück</button>` : `<span></span>`}
            <button class="typentest-start-btn" data-diag-next>${isLast ? "Ergebnis anzeigen &#8594;" : "Weiter &#8594;"}</button>
          </div>
        </div>
      </div>
    `);
  }

  // ── Phase: Result ───────────────────────────────────────────────────────────
  if (ds.phase === "result") {
    const scores = DIAGNOSETEST.map(entry => ({
      typ: entry.typ,
      name: entry.name,
      total: entry.aussagen.length,
      score: (ds.checks[entry.typ] || []).length,
    }));
    const sorted = [...scores].sort((a, b) => b.score - a.score);
    const winner = sorted[0];
    const maxScore = winner.score || 1;

    const bars = sorted.map((s, i) => `
      <li class="${i === 0 ? "is-top" : ""}">
        <span class="diag-scores__label">Typ ${s.typ} – ${s.name.replace("Der ", "").replace("Die ", "")}</span>
        <span class="diag-scores__bar-wrap"><span class="diag-scores__bar" style="width:${Math.round((s.score / maxScore) * 100)}%"></span></span>
        <span class="diag-scores__pts">${s.score}</span>
      </li>`).join("");

    return shell(`
      ${pageHeader("diagnosetest")}
      <div class="typentest-wrap">
        <div class="typentest-card typentest-card--result">
          <div class="diag-result__heading">
            <p class="eyebrow">Ihr Ergebnis</p>
            <div class="diag-result__typ">Typ ${winner.typ} – ${winner.name}</div>
            <p class="typentest-intro">Von ${winner.total} Aussagen haben Sie <strong>${winner.score}</strong> als zutreffend angekreuzt.</p>
          </div>
          <ul class="diag-scores">${bars}</ul>
          <div class="typentest-cta-group" style="margin-top:1.5rem;display:flex;flex-direction:column;gap:0.7rem;">
            <button class="typentest-start-btn" style="background:transparent;color:var(--copper,#a5603d);border:1.5px solid var(--copper,#a5603d);" data-diag-reset>Test wiederholen</button>
            <button class="typentest-start-btn" data-route="start">Zur Startseite</button>
          </div>
        </div>
      </div>
    `);
  }

  return shell(`${pageHeader("diagnosetest")}<div class="typentest-wrap"><p>Fehler im Test.</p></div>`);
}

function bindDiagnosetest() {
  document.querySelector("[data-diag-start]")?.addEventListener("click", () => {
    const order = [0,1,2,3,4,5,6,7,8].sort(() => Math.random() - 0.5);
    diagnoseState = { phase: "step", step: 0, order, checks: {} };
    render();
  });

  document.querySelector("[data-diag-next]")?.addEventListener("click", () => {
    if (diagnoseState.step < 8) {
      diagnoseState.step++;
    } else {
      diagnoseState.phase = "result";
    }
    render();
  });

  document.querySelector("[data-diag-back]")?.addEventListener("click", () => {
    if (diagnoseState.step > 0) { diagnoseState.step--; render(); }
  });

  document.querySelectorAll("[data-diag-check]").forEach(cb => {
    cb.addEventListener("change", () => {
      const typ = DIAGNOSETEST[diagnoseState.order[diagnoseState.step]].typ;
      if (!diagnoseState.checks[typ]) diagnoseState.checks[typ] = [];
      const idx = parseInt(cb.dataset.diagIdx);
      const arr = diagnoseState.checks[typ];
      if (cb.checked) {
        if (!arr.includes(idx)) arr.push(idx);
      } else {
        const i = arr.indexOf(idx);
        if (i > -1) arr.splice(i, 1);
      }
      cb.closest(".diag-item")?.classList.toggle("diag-item--checked", cb.checked);
    });
  });

  document.querySelector("[data-diag-reset]")?.addEventListener("click", () => {
    diagnoseState = { phase: "intro", step: 0, order: [], checks: {} };
    render();
  });
}

// ── PSYCHOGRAMME ──────────────────────────────────────────────────────────────

const PSYCHOGRAMM_TYPEN = [
  { typ: 1, name: "Der Verbesserer",     kern: "Heilige Vollkommenheit · Reinheit · Richtigkeit" },
  { typ: 2, name: "Der Helfer",          kern: "Heiliger Wille · Liebe zum Einssein" },
  { typ: 3, name: "Der Macher",          kern: "Heiliges Gesetz · Echtheit · Wahrhaftigkeit" },
  { typ: 4, name: "Der Individualist",   kern: "Heiliger Ursprung · individueller Ausdruck des Seins" },
  { typ: 5, name: "Der Forscher",        kern: "Heiliges Allwissen · Transparenz · Klarheit" },
  { typ: 6, name: "Der Loyale",          kern: "Heiliger Glaube · Vertrauen · Sicherheit" },
  { typ: 7, name: "Der Enthusiast",      kern: "Heiliger Plan · Freude · Entfaltung" },
  { typ: 8, name: "Der Herausforderer",  kern: "Heilige Wahrheit · Stärke" },
  { typ: 9, name: "Der Vermittler",      kern: "Heilige Liebe · Harmonie · Würde · Energie" },
];

function heilungswegPage() {
  return shell(`
    ${pageHeader("heilungsweg")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder · Enneagramm-Homöopathie</p>
      <h1>Der Heilungsweg des Menschen</h1>
      <p class="lead-small">Diese Übersicht zeigt den Heilungsweg nach dem Modell der Enneagramm-Homöopathie von Detlef Rathmer: vom unbewussten Muster über die Erkenntnis der Leidenschaft bis zur Integration und Heilung.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="assets/schaubilder/heilungsweg/heilungsweg.jpg"
             alt="Der Heilungsweg des Menschen nach der Enneagramm-Homöopathie"
             class="psycho-img" />
      </div>
    </section>
  `);
}

function kindlicheTemperamentePage() {
  return shell(`
    ${pageHeader("kindliche-temperamente")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder · Entwicklungspsychologie</p>
      <h1>Die neun kindlichen Temperamente</h1>
      <p class="lead-small">Die Chess-&amp;-Thomas-Studie (New Yorker Längsschnittstudie, ab 1956) untersuchte unabhängig vom Enneagramm kindliche Temperamente von Geburt an. Sie zeigt: Diese Grundanlagen sind angeboren und spiegeln sich in den neun Enneagrammtypen wider.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="assets/schaubilder/kindliche-temperamente/temperamente.jpg"
             alt="Die neun kindlichen Temperamente nach Chess"
             class="psycho-img" />
      </div>
    </section>
  `);
}

function psychogrammePage() {
  const param = state.route.split("/")[1];
  const typNr = param ? parseInt(param) : null;

  if (typNr && typNr >= 1 && typNr <= 9) {
    const t = PSYCHOGRAMM_TYPEN[typNr - 1];
    return shell(`
      ${pageHeader("psychogramme")}
      <div class="psycho-detail">
        <button class="ghost-link psycho-back" data-route="psychogramme">← Alle Psychogramme</button>
        <h1 class="psycho-detail__title">Typ ${t.typ} – ${t.name}</h1>
        <p class="psycho-detail__kern">${t.kern}</p>
        <div class="psycho-img-wrap">
          <img src="assets/schaubilder/psychogramme/typ-${t.typ}.jpg" alt="Psychogramm Typ ${t.typ}" class="psycho-img" />
        </div>
      </div>
    `);
  }

  // Übersicht aller 9 Typen
  return shell(`
    ${pageHeader("psychogramme")}
    <div class="psycho-wrap">
      <p class="eyebrow">Tiefenpsychologie</p>
      <h1 class="section-title">Psychogramme der 9 Enneagrammtypen</h1>
      <p class="psycho-intro">Jedes Psychogramm zeigt den vollständigen tiefenpsychologischen Kreislauf eines Typs: vom Höheren Selbst über das untergründige Mangelgefühl bis zum fiktiven Selbstbild und Schatten — und den Weg zurück zur Integration.</p>
      <div class="psycho-grid">
        ${PSYCHOGRAMM_TYPEN.map(t => `
          <button class="psycho-card" data-route="psychogramme/${t.typ}">
            <span class="psycho-card__nr">${t.typ}</span>
            <span class="psycho-card__name">${t.name}</span>
            <span class="psycho-card__kern">${t.kern}</span>
            <span class="psycho-card__arrow">→</span>
          </button>
        `).join("")}
      </div>
    </div>
  `);
}

function freischaltPage(needed) {
  const isBasis = needed === "basis";

  if (isBasis) {
    return shell(`
      <section class="freischalt-page">
        <div class="freischalt-card">
          <div class="freischalt-card__lock">🔒</div>
          <h1 class="freischalt-card__title">Enneagramm-Charakterkompass</h1>
          <p class="freischalt-card__desc">Alle 27 Subtypen in tiefer Detailtiefe: Verhaltensmuster, Beziehungsdynamik, blinde Flecken, Kernfragen und psychologische Engpässe. Sie sehen sich selbst glasklar im Spiegel.</p>
          <div class="freischalt-card__angebote">
            <div class="freischalt-angebot freischalt-angebot--basis">
              <strong>Charakterkompass</strong>
              <span class="freischalt-angebot__preis">29 €</span>
              <span class="freischalt-angebot__label">Einmalzahlung</span>
              <a class="freischalt-card__buy-btn" href="https://www.digistore24.com/product/PLATZHALTER-CHARAKTER" target="_blank" rel="noopener">Jetzt kaufen →</a>
            </div>
            <div class="freischalt-angebot freischalt-angebot--gesamt">
              <strong>Gesamtpaket</strong>
              <span class="freischalt-angebot__preis">69 €</span>
              <span class="freischalt-angebot__label">Charakter + Heilung</span>
              <a class="freischalt-card__buy-btn freischalt-card__buy-btn--gold" href="https://www.digistore24.com/product/PLATZHALTER-GESAMT" target="_blank" rel="noopener">Alles freischalten →</a>
            </div>
          </div>
          <div class="freischalt-card__divider"><span>Bereits gekauft? Code eingeben:</span></div>
          <div class="freischalt-card__input-row">
            <input id="unlockCode" type="text" placeholder="Zugangscode" autocomplete="off" spellcheck="false" />
            <button id="unlockBtn" class="primary">Freischalten</button>
          </div>
          <p id="unlockMsg" class="freischalt-card__msg"></p>
          <button class="ghost-link freischalt-card__back" data-route="start">← Zurück zur Startseite</button>
        </div>
      </section>
    `);
  }

  return shell(`
    <section class="freischalt-page">
      <div class="freischalt-card">
        <div class="freischalt-card__lock">🔒</div>
        <h1 class="freischalt-card__title">Enneagramm-Heilungskompass</h1>
        <p class="freischalt-card__desc">Der Sprung von Erkenntnis in Transformation: Homöopathie, Bachblüten, Edelsteine, ätherische Öle, TCM, Heilungssongs und Kindheitstraumata für alle 27 Subtypen.</p>
        <div class="freischalt-card__angebote">
          <div class="freischalt-angebot freischalt-angebot--heilung">
            <strong>Heilungskompass-Upgrade</strong>
            <span class="freischalt-angebot__preis">+ 49 €</span>
            <span class="freischalt-angebot__label">Ergänzung zum Charakterkompass</span>
            <a class="freischalt-card__buy-btn" href="https://www.digistore24.com/product/PLATZHALTER-HEILUNG" target="_blank" rel="noopener">Upgrade kaufen →</a>
          </div>
          <div class="freischalt-angebot freischalt-angebot--gesamt">
            <strong>Gesamtpaket</strong>
            <span class="freischalt-angebot__preis">69 €</span>
            <span class="freischalt-angebot__label">Charakter + Heilung zusammen</span>
            <a class="freischalt-card__buy-btn freischalt-card__buy-btn--gold" href="https://www.digistore24.com/product/PLATZHALTER-GESAMT" target="_blank" rel="noopener">Alles freischalten →</a>
          </div>
        </div>
        <div class="freischalt-card__divider"><span>Bereits gekauft? Code eingeben:</span></div>
        <div class="freischalt-card__input-row">
          <input id="unlockCode" type="text" placeholder="Zugangscode" autocomplete="off" spellcheck="false" />
          <button id="unlockBtn" class="primary">Freischalten</button>
        </div>
        <p id="unlockMsg" class="freischalt-card__msg"></p>
        <button class="ghost-link freischalt-card__back" data-route="start">← Zurück zur Startseite</button>
      </div>
    </section>
  `);
}

function legalFooter() {
  return `<footer class="legal-footer">
    <button class="legal-footer__link" data-route="impressum">Impressum</button>
    <span class="legal-footer__sep">·</span>
    <button class="legal-footer__link" data-route="datenschutz">Datenschutz</button>
  </footer>`;
}

function legalPage(title, bodyHtml) {
  return `<div class="legal-page">
    <button class="legal-page__back" data-route="start">← Zurück</button>
    <h1 class="legal-page__title">${title}</h1>
    <div class="legal-page__body">${bodyHtml}</div>
    ${legalFooter()}
  </div>`;
}

function impressumPage() {
  return legalPage("Impressum", `
    <h2>Angaben gemäß § 5 TMG</h2>
    <p>Detlef Rathmer<br>Verlagshaus Rathmer<br>Molkereiweg 9<br>48727 Billerbeck<br>Deutschland</p>
    <h2>Kontakt</h2>
    <p>Telefon: +49 (0) 2543 / 931 85 07<br>WhatsApp: 01575-8786201<br>E-Mail: <a href="mailto:detlefrathmer@t-online.de">detlefrathmer@t-online.de</a></p>
    <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
    <p>Detlef Rathmer<br>Molkereiweg 9<br>48727 Billerbeck</p>
    <h2>Verbraucherstreitbeilegung</h2>
    <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
    <h2>Haftung für Inhalte</h2>
    <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
    <h2>Haftung für Links</h2>
    <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>
    <h2>Urheberrecht</h2>
    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
  `);
}

function datenschutzPage() {
  return legalPage("Datenschutz", `
    <p class="legal-page__intro">Informationen gemäß Art. 13 DSGVO über die Verarbeitung personenbezogener Daten bei der Nutzung dieser App.</p>
    <h2>1. Verantwortlicher</h2>
    <p>Detlef Rathmer · Verlagshaus Rathmer · Molkereiweg 9 · 48727 Billerbeck<br>E-Mail: <a href="mailto:detlefrathmer@t-online.de">detlefrathmer@t-online.de</a></p>
    <h2>2. Hosting</h2>
    <p>Diese App wird über GitHub Pages gehostet (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA, ein Tochterunternehmen der Microsoft Corporation). Beim Aufruf werden technisch notwendige Daten (IP-Adresse, Browsertyp, aufgerufene Datei, Datum/Uhrzeit) automatisch in Server-Logfiles gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen: <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">docs.github.com</a>.</p>
    <h2>3. Lokaler Speicher (localStorage)</h2>
    <p>Diese App speichert Ihren freigeschalteten Zugang (Zugangsstufe) sowie optionale Profileingaben ausschließlich lokal in Ihrem Browser (localStorage). Diese Daten verlassen Ihr Gerät nicht und werden nicht an Server übertragen. Sie können diese Daten jederzeit über die Browser-Einstellungen löschen.</p>
    <h2>4. Google Fonts</h2>
    <p>Diese App verwendet Schriftarten des Dienstes Google Fonts (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Beim Laden der Seite wird eine Verbindung zu Google-Servern hergestellt, wobei Ihre IP-Adresse übertragen wird. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.</p>
    <h2>5. Kauf und Zahlungsabwicklung</h2>
    <p>Der Kauf von Zugangscodes erfolgt über externe Plattformen (Digistore24 bzw. Stripe). Diese App selbst verarbeitet keine Zahlungsdaten. Rechtsgrundlage für die Verarbeitung durch den Zahlungsanbieter: Art. 6 Abs. 1 lit. b DSGVO.</p>
    <h2>6. Keine Cookies, kein Tracking</h2>
    <p>Diese App setzt selbst keine Cookies und verwendet keine Analyse- oder Tracking-Dienste.</p>
    <h2>7. Ihre Rechte</h2>
    <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Datenübertragbarkeit (Art. 15–20 DSGVO) und das Recht, der Verarbeitung zu widersprechen (Art. 21 DSGVO). Beschwerden richten Sie an eine Datenschutzaufsichtsbehörde, z. B. die LDI NRW (<a href="https://www.ldi.nrw.de" target="_blank" rel="noopener">ldi.nrw.de</a>).</p>
  `);
}

function showTagesimpuls() {
  const IMPULS_KEY = "enneagramm-kompass:tagesimpuls";
  const today = new Date().toISOString().slice(0, 10);
  if (localStorage.getItem(IMPULS_KEY) === today) return;
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const impuls = TAGESIMPULSE[dayOfYear % TAGESIMPULSE.length];
  if (!impuls) return;
  const paragraphs = impuls.text.split("\n\n").map(p => `<p>${p}</p>`).join("");
  const card = document.createElement("div");
  card.className = "tagesimpuls-overlay";
  card.innerHTML = `
    <div class="tagesimpuls-card">
      <div class="tagesimpuls-card__ornament" aria-hidden="true">◈</div>
      <div class="tagesimpuls-card__header">
        <span class="tagesimpuls-card__label">Impuls für heute</span>
        <button class="tagesimpuls-card__close" aria-label="Schließen">✕</button>
      </div>
      <h2 class="tagesimpuls-card__titel">${impuls.titel}</h2>
      <div class="tagesimpuls-card__text">${paragraphs}</div>
      <p class="tagesimpuls-card__impuls"><em>${impuls.impuls}</em></p>
      <p class="tagesimpuls-card__autor">— Detlef Rathmer</p>
      <button class="tagesimpuls-card__btn">Den Impuls mitnehmen ✦</button>
    </div>
  `;
  document.body.appendChild(card);
  requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add("tagesimpuls-overlay--open")));
  const close = () => {
    localStorage.setItem(IMPULS_KEY, today);
    card.classList.remove("tagesimpuls-overlay--open");
    setTimeout(() => card.remove(), 350);
  };
  card.querySelector(".tagesimpuls-card__close").addEventListener("click", close);
  card.querySelector(".tagesimpuls-card__btn").addEventListener("click", close);
  card.addEventListener("click", e => { if (e.target === card) close(); });
}

function render() {
  const routes = {
    start: startPage,
    dashboard: dashboardPage,
    reflection: reflectionPage,
    path: pathPage,
    tools: toolsPage,
    healing: healingPage,
    oils: oilsPage,
    tcm: tcmPage,
    kindheit: kindheitPage,
    music: musicPage,
    practice: practicePage,
    library: libraryPage,
    knowledge: typesPage,
    types: typesPage,
    wissen: knowledgePage,
    profile: profilePage,
    impressum: impressumPage,
    datenschutz: datenschutzPage,
    typentest: typentestPage,
    "typentest-motivational": typentestMotivationalPage,
    psychogramme: psychogrammePage,
    "heilungsweg": heilungswegPage,
    "kindliche-temperamente": kindlicheTemperamentePage,
    diagnosetest: diagnosetestPage,
  };
  const [base, param] = state.route.split("/");
  const setContent = () => {
    // Freischalt-Direktroute (von Nav-Schloss oder Link)
    if (base === "freischalt") {
      app.innerHTML = freischaltPage(param || "basis");
      bindEvents();
      requestAnimationFrame(() => requestAnimationFrame(() => { app.style.opacity = "1"; }));
      return;
    }
    // Zugangsschutz
    if (!hasBasis() && base !== "start" && base !== "profile" && base !== "impressum" && base !== "datenschutz" && base !== "diagnosetest") {
      app.innerHTML = freischaltPage("basis");
      bindEvents();
      requestAnimationFrame(() => requestAnimationFrame(() => { app.style.opacity = "1"; }));
      return;
    }
    if (HEILWISSEN_ROUTES.has(base) && !hasHeilwissen()) {
      app.innerHTML = freischaltPage("heilwissen");
      bindEvents();
      requestAnimationFrame(() => requestAnimationFrame(() => { app.style.opacity = "1"; }));
      return;
    }
    if (base === "subtype" && param) {
      app.innerHTML = subtypePage(param);
    } else if (base === "type" && param) {
      app.innerHTML = typePage(param);
    } else {
      app.innerHTML = (routes[base] || routes.start)();
    }
    bindEvents();
    requestAnimationFrame(() => requestAnimationFrame(() => { app.style.opacity = "1"; }));
  };
  if (app.innerHTML === "") {
    setContent();
  } else {
    app.style.opacity = "0";
    setTimeout(setContent, 180);
  }
}

// Lightbox für Kartenbilder
document.addEventListener("click", (e) => {
  const img = e.target.closest(".vollseite-karte__img");
  if (img) {
    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = `<div class="lightbox__overlay"></div><img class="lightbox__img" src="${img.src}" alt="${img.alt}" /><button class="lightbox__close" aria-label="Schließen">✕</button>`;
    document.body.appendChild(lb);
    requestAnimationFrame(() => lb.classList.add("lightbox--open"));
    const close = () => { lb.classList.remove("lightbox--open"); setTimeout(() => lb.remove(), 250); };
    lb.querySelector(".lightbox__overlay").addEventListener("click", close);
    lb.querySelector(".lightbox__close").addEventListener("click", close);
    document.addEventListener("keydown", function esc(ev) { if (ev.key === "Escape") { close(); document.removeEventListener("keydown", esc); } });
    return;
  }
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const style = getComputedStyle(btn);
  if (style.position === "static") return;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "ripple-effect";
  ripple.style.left = (e.clientX - rect.left - 30) + "px";
  ripple.style.top  = (e.clientY - rect.top  - 30) + "px";
  btn.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
});

render();
setTimeout(showTagesimpuls, 600);
