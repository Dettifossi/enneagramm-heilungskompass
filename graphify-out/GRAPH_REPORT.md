# Graph Report - Enneagramm-Kompass  (2026-06-28)

## Corpus Check
- 83 files · ~18,189,074 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 390 nodes · 718 edges · 32 communities (21 shown, 11 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a27c359d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]

## God Nodes (most connected - your core abstractions)
1. `shell()` - 63 edges
2. `pageHeader()` - 62 edges
3. `subtypePage()` - 24 edges
4. `bookTip()` - 19 edges
5. `knowledgeCard()` - 13 edges
6. `What You Must Do When Invoked` - 12 edges
7. `/graphify` - 10 edges
8. `CLAUDE.md — Enneagramm-Heilungskompass` - 9 edges
9. `graphify reference: extra exports and benchmark` - 8 edges
10. `hasHeilwissen()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `knowledgeCard()` --calls--> `hasHeilwissen()`  [EXTRACTED]
  app.js → app.js  _Bridges community 17 → community 14_
- `subtypePage()` --calls--> `hasHeilwissen()`  [EXTRACTED]
  app.js → app.js  _Bridges community 17 → community 3_
- `musicPage()` --calls--> `shell()`  [EXTRACTED]
  app.js → app.js  _Bridges community 2 → community 14_
- `pathPage()` --calls--> `shell()`  [EXTRACTED]
  app.js → app.js  _Bridges community 2 → community 9_
- `startPage()` --calls--> `shell()`  [EXTRACTED]
  app.js → app.js  _Bridges community 2 → community 17_

## Import Cycles
- None detected.

## Communities (32 total, 11 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (42): type1MediaGroups(), type2ContentModules(), type2OverviewModule, type2SourceCoverage(), type2VisualPages(), type3ContentModules(), type3OverviewModule, type3SourceCoverage() (+34 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (27): se1, se2, se3, se4, se5, se6, se7, se8 (+19 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (63): aetherischeOelePage(), aufmerksamkeitsfokusPage(), basisemotionenPage(), bedrohungsszenarienPage(), befreiendeFragenPage(), bewaeltigungsstrategiePage(), beziehungenPage(), bookTip() (+55 more)

### Community 3 - "Community 3"
Cohesion: 0.18
Nodes (14): beratungsCTA(), kindheitForType(), kindheitInlineBlock(), koerperarbeitBlock(), meinKompassSection(), oelForType(), querverbindungen(), regulierenInner() (+6 more)

### Community 4 - "Community 4"
Cohesion: 0.07
Nodes (19): app, bindDiagnosetest(), bindEvents(), bindMotivtest(), bindTypentest(), diagnoseState, diffState, EDELSTEINE (+11 more)

### Community 5 - "Community 5"
Cohesion: 0.33
Nodes (5): INSTINKTE, TRIADEN, TYPFRAGEN, TYPKURZ, TYPNAMEN

### Community 6 - "Community 6"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 7 - "Community 7"
Cohesion: 0.14
Nodes (13): aetherischeOele, architectureAreas, kindheitstraumata, knowledgePrototype, libraryItems, remedyGlossary, subtypeProfiles, tcmData (+5 more)

### Community 8 - "Community 8"
Cohesion: 0.25
Nodes (7): description, name, private, scripts, start, start:4173, version

### Community 9 - "Community 9"
Cohesion: 0.40
Nodes (5): compassMark(), listPanel(), pathPage(), profilePage(), spuerenInner()

### Community 14 - "Community 14"
Cohesion: 0.18
Nodes (13): contentModuleSection(), heilmittelSection(), heilwissenLock(), knowledgeCard(), mediaGroupSection(), mediaResourceSection(), musicPage(), sourceCoverageSection() (+5 more)

### Community 15 - "Community 15"
Cohesion: 0.20
Nodes (9): 1. Sparsamer Umgang mit Dateizugriffen, 2. Antwortverhalten, 3. Großdatei-Regel, 4. Tests, CLAUDE.md — Enneagramm-Heilungskompass, graphify, Inhaltsregeln, Sprache & Stil (+1 more)

### Community 16 - "Community 16"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 17 - "Community 17"
Cohesion: 0.29
Nodes (8): datenschutzPage(), getTier(), hasBasis(), hasHeilwissen(), impressumPage(), legalFooter(), legalPage(), startPage()

### Community 18 - "Community 18"
Cohesion: 0.29
Nodes (6): Aktueller Entwicklungsstand, Dateien, Enneagramm-Kompass MVP, Lokal starten, Routen, Technische Hinweise

### Community 19 - "Community 19"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 20 - "Community 20"
Cohesion: 0.40
Nodes (5): impulseBlock(), typeColor(), typeColorFromCode(), typePage(), typesPage()

### Community 21 - "Community 21"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 22 - "Community 22"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 23 - "Community 23"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

## Knowledge Gaps
- **78 isolated node(s):** `app`, `HEILWISSEN_ROUTES`, `state`, `testState`, `motivState` (+73 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `subtypeProfiles` connect `Community 7` to `Community 4`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `libraryItems` connect `Community 7` to `Community 4`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `architectureAreas` connect `Community 7` to `Community 4`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **What connects `app`, `HEILWISSEN_ROUTES`, `state` to the rest of the system?**
  _78 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.06519114688128773 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.05454545454545454 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.06656426011264721 - nodes in this community are weakly interconnected._