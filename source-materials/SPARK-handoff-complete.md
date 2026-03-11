# SPARK — Complete Project Handoff Document
## For continuation in a new Bubbles session
### Created: March 11, 2026 | Author: Bubbles (Ben Akiva's advisory agent)

---

## 1. WHAT IS SPARK

SPARK is a modular, workflow-strict product strategist agent being built for PassportCard (1,000+ employee insurance company). It guides employees from raw idea to validated concept, working prototype, and production-ready software through a rigid 10-phase pipeline (Phases 0-9).

**Client:** Alon Ketzef, Founder and President of PassportCard
**Builder/Maintainer:** Ben Akiva (external AI consultant)
**Previous name:** Benefit (V1 built by Ben, V2 merged with Alon's materials - broke due to context overload)
**Current name:** SPARK (working name, approved by Ben, pending Alon confirmation)

### Why the previous version broke
Ben built Benefit V1 - it worked great. Alon sent additional materials (audience engine, regulatory sweeps, output format rules, consulting source lists). Ben merged them into Benefit V2. The merged version stopped working because too many instructions competed for attention in a single system prompt. The agent lost its rigid workflow. The new version must be modular - core pipeline stays tight, everything else lives in separate skills.

---

## 2. SOURCE MATERIALS FROM ALON

Five artifacts received from Alon, all stored locally:

| # | Type | Date | Filename/Description | What It Contains |
|---|------|------|---------------------|-----------------|
| 1 | Email "the prompt" | 4 Mar 2026 | Benefit V2.0 full system prompt | 10-phase pipeline agent: idea → validated concept → prototype → production software. Each phase produces versioned handoff documents. Includes installation instructions. |
| 2 | Email "knowledge source" | 4 Mar 2026 | Authoritative Source Knowledge Base | 5 layers of sources: L1 Global Consulting (McKinsey, BCG, etc.), L2 Specialized (WTW, Aon, Milliman), L3 Macro/Payments (WEF, BIS, IATA), L4 Regulatory by jurisdiction, L5 Privacy/Data Protection |
| 3 | Email "Best Practices" | 5 Mar 2026 | Expanded search/regulatory instructions | Mandatory regulatory sweep per jurisdiction, quality rules (don't search entities below 5.5 score), detailed regulatory authority lists for IL, DE, EU, UK, US, AU |
| 4 | DOCX | Mar 2026 | PassportCard_Builder_Brief_for_Ben_v2.docx | 20 enhancement requirements in 4 categories: Foundational (rename, branding, session gate, audience engine), Adoption (express lane, role paths, output formats), Guardrails (data classification, confidentiality, hallucination safeguards), Best Practice reference. Includes 3-phase implementation roadmap. |
| 5 | XLSX | Mar 2026 | PassportCard_Builder_Complete_Scorecard_v3.xlsx | 98 consulting firms + 31 regulatory authorities scored on 4 dimensions (content depth, accessibility, recency, actionability) with tier ratings (3-star to dash). Covers: Global consulting, specialized insurance/actuarial, regulatory compliance, business plan, legal, infrastructure/DevOps, graphic design, and regulatory authorities by jurisdiction. |

### Relationship between materials 2 and 3
Both cover authoritative source search instructions. Material 3 is an expanded/updated version of material 2. For the build, material 3 should be treated as the primary source reference, with material 2 as supplementary (contains the layer structure more cleanly).

---

## 3. RESEARCH COMPLETED

### YouTube Transcript Pipeline (completed in this session)

8 YouTube transcripts about Claude's current capabilities were processed through a 3-stage pipeline:

**Stage 0 - Conversion:** Each raw transcript was converted to a structured knowledge document using a standardized prompt (stored as `transcript-to-knowledge-doc.md`). All 8 completed.

**Stage 1 - Discovery:** A content map was produced identifying what's in all 8 documents (document index, capability inventory, architecture patterns, distribution methods, gaps).

**Stage 2 - Targeted Extraction:** A 942-line extraction document was produced covering 10 sections targeted at SPARK's needs: distribution architecture, plugin composition, skill file architecture, workflow enforcement, user profiling, branded output, output formats, skill creation/testing, scheduled tasks, connectors. Stored as `SPARK-extraction.md`.

### Key findings from extraction

**Distribution:** 5 methods exist (Anthropic library, manual upload, GitHub marketplace, URL, npx). GitHub marketplace is the best for our use case - Ben maintains a repo, users sync from it. No auto-push exists - users must manually sync, or Ben emails them to update.

**Plugin vs. Skill:** A Plugin bundles multiple skills + commands + connectors + sub-agents into one installable unit. A Skill is a single task. SPARK should be a Plugin.

**Workflow enforcement:** No native hard gates between phases. Must be built by composing: encoded preference skills (rigid step-by-step), disable_model_invocation: true (force slash commands), interrogation mode (questions before execution), Plan Mode (approve before execute), validation checklists (post-execution quality gates).

**User profiling:** Claude MD file is per-user persistent context. No multi-tenant profiling exists. Ben's idea: HTML questionnaire with closed questions → JSON profile → stored as reference file that skills read.

**Brand enforcement:** Brand Guidelines Skill enforces tokens (colors, fonts, spacing, logo, tone) across all outputs. Swap in PassportCard tokens. Share with all users.

**Skill taxonomy:** Two types - capability uplift (may become obsolete as models improve) and encoded preference (durable because organization-specific). SPARK skills are encoded preference.

---

## 4. ARCHITECTURE DECISION

SPARK is built as a **Plugin** distributed via **GitHub repository**.

### Component Mapping

| SPARK Component | Claude Mechanism | Details |
|---|---|---|
| Phase 0-9 pipeline | Commands that chain skills in sequence | Each phase transition is a command (e.g., `/spark-phase-1`, `/spark-phase-2`) |
| Each phase's logic | Individual encoded preference skills | Rigid step-by-step, cannot deviate, durable |
| Phase gates (hard stops) | Composed pattern: interrogation + plan mode + human-in-the-loop + "DO NOT proceed" instructions | Each skill explicitly states: do not advance without user confirmation |
| User profiling | HTML questionnaire → JSON profile + Claude MD file per role template | Questionnaire has closed questions only (multiple choice, multi-select), generates JSON that skills read |
| Brand enforcement | Brand Guidelines Skill with PassportCard tokens | Colors: #E3000F (red), #1A2744 (navy), white, light gray. Fonts: Plus Jakarta Sans (Latin), Heebo (Hebrew). Logo: top-left. |
| Regulatory layer | Dedicated compliance skill with mandatory sweep instructions | Based on Alon's material #3 - regulatory authorities by jurisdiction |
| Knowledge base (consulting sources) | Reference files within the plugin folder | Based on Alon's materials #2, #3, and #5 (scorecard) |
| Audience communication engine | Output format skills per audience type | Board (Pyramid Principle, max 10-12 slides), CEO (decision-ready, 2-3 options), C-Level (function-specific), Team (action items), Brokers (plain language), Public (simple) |
| Output formatting | Format-specific skills per output type | PPTX, DOCX, XLSX, HTML, PDF - each with PassportCard branding baked in |

### Plugin Internal Structure (planned)

```
spark-plugin/
├── plugin.json                    # Plugin manifest
├── skills/
│   ├── spark-core/
│   │   └── skill.md               # Core identity, branding, workflow rules
│   ├── spark-phase-0-gate/
│   │   └── skill.md               # Session opening: language, format, purpose, audience, role
│   ├── spark-phase-1-discovery/
│   │   └── skill.md               # Discovery & idea sharpening
│   ├── spark-phase-2-market/
│   │   └── skill.md               # Market & competitive analysis
│   ├── spark-phase-2.5-bestpractice/
│   │   └── skill.md               # Authoritative source research
│   ├── spark-phase-3-definition/
│   │   └── skill.md               # Product definition
│   ├── spark-phase-4-prd/
│   │   └── skill.md               # Brief + PRD document
│   ├── spark-phase-5-prototype/
│   │   └── skill.md               # HTML prototype
│   ├── spark-phase-6-deploy/
│   │   └── skill.md               # Deployment guidance
│   ├── spark-phase-7-devenv/
│   │   └── skill.md               # Dev environment setup
│   ├── spark-phase-8-dev/
│   │   └── skill.md               # Software development
│   ├── spark-phase-9-qa/
│   │   └── skill.md               # QA & security review
│   ├── spark-brand/
│   │   └── skill.md               # PassportCard brand enforcement
│   ├── spark-compliance/
│   │   └── skill.md               # Regulatory compliance sweeps
│   ├── spark-audience-board/
│   │   └── skill.md               # Board of Directors output format
│   ├── spark-audience-ceo/
│   │   └── skill.md               # CEO/President output format
│   ├── spark-audience-clevel/
│   │   └── skill.md               # C-Level function-specific format
│   ├── spark-audience-team/
│   │   └── skill.md               # Team member output format
│   ├── spark-audience-broker/
│   │   └── skill.md               # Broker output format
│   └── spark-data-classification/
│       └── skill.md               # Data classification gate
├── commands/
│   ├── spark-start.md             # Full pipeline entry
│   ├── spark-express.md           # Express lane (single-session viability check)
│   ├── spark-resume.md            # Resume from handoff documents
│   ├── spark-status.md            # "Where am I?" dashboard
│   └── spark-next.md              # Advance to next phase (with gate check)
├── references/
│   ├── authoritative-sources.md   # Consulting firm knowledge base (from Alon materials 2+3)
│   ├── scorecard.md               # Entity scorecard (from Alon material 5, converted to markdown)
│   ├── regulatory-authorities.md  # Regulatory authority list by jurisdiction
│   └── passportcard-brand.md      # Brand tokens, design principles, logo usage rules
├── assets/
│   ├── passportcard-logo.svg
│   └── passportcard-logo.png
└── README.md                      # Installation and usage instructions
```

### Distribution Plan

1. Ben maintains a GitHub repository (e.g., `dartaryan/spark-passportcard`)
2. PassportCard employees add the marketplace: browse > personal > add from GitHub > paste repo URL > sync
3. Install the SPARK plugin
4. When Ben pushes updates, he emails the team to sync
5. Future: if Claude adds enterprise admin push, migrate to that

---

## 5. WHAT BEN WANTS FOR HIMSELF

### Meta-Skill: SPARK Skill Builder

Ben wants a personal skill (not part of the plugin distributed to PassportCard) that helps him:

1. **Build new skills for PassportCard** - generates skill.md files that conform to SPARK's architecture, naming conventions, branding requirements, and quality standards
2. **Evaluate external skill libraries** - scans a GitHub repo or skill collection, identifies what's relevant to PassportCard's insurance/enterprise context, and recommends which to adopt/adapt/reject
3. **Generate build prompts** - for each recommended skill, produces a ready-to-run prompt that Ben can use (in Claude Code or a fresh session) to build the skill quickly

This meta-skill lives in Ben's personal skill folder, NOT in the SPARK plugin.

### Brand Assets Source

PassportCard brand assets should be sourced from:
- `C:\Users\darta\Desktop\פרויקטים\ketzef\global policy`
- `https://github.com/TP-dev-Gal/PassportCard-Pass`

These need to be inspected to extract: logo files, color palette, typography specs, design guidelines.

---

## 6. ALON'S 20 REQUIREMENTS — STATUS MAPPING

Each of Alon's 20 requirements from the DOCX mapped to SPARK architecture:

| # | Requirement | Priority | SPARK Implementation |
|---|---|---|---|
| 1 | Rename Benefit → PassportCard Builder | CRITICAL | Renamed to SPARK instead (pending Alon approval) |
| 2 | Brand Identity System | CRITICAL | spark-brand skill + assets folder |
| 3 | Session Opening Gate | CRITICAL | spark-phase-0-gate skill (language, format, purpose, audience, role) |
| 4 | Audience Communication Engine | CRITICAL | 5 audience skills (board, CEO, C-level, team, broker) |
| 5 | Stakeholder Output Formats | HIGH | Commands: /spark-board-summary, etc. |
| 6 | Express Lane Mode | HIGH | spark-express command |
| 7 | Role-Based Entry Paths | HIGH | User profiling JSON drives phase depth |
| 8 | Output Format Configuration | HIGH | Format-specific skills (PPTX, DOCX, XLSX, HTML, PDF) |
| 9 | Status Command | MEDIUM | spark-status command |
| 10 | Portfolio View | MEDIUM | Future - reads multiple handoff docs |
| 11 | Glossary / Plain Language | MEDIUM | Baked into each phase skill |
| 12 | Stack Integration Guidance | NICE-TO-HAVE | Future reference file |
| 13 | Data Classification Gate | CRITICAL | spark-data-classification skill |
| 14 | Confidentiality Reminders | CRITICAL | Baked into spark-phase-0-gate |
| 15 | Hallucination Safeguard | HIGH | Source tier system in each research skill |
| 16 | Scope & Authority Checkpoint | HIGH | Gate between phase 6 and 7 |
| 17 | Audit Trail & Decision Log | HIGH | Added to all handoff document templates |
| 18 | Escalation Paths | MEDIUM | Configurable section in compliance skill |
| 19 | Output Watermarking | MEDIUM | Footer in spark-brand skill |
| 20 | Updated Handoff Templates | HIGH | All handoff templates updated with new fields |

---

## 7. NEXT ACTIONS (ordered)

### Immediate (next session)

1. **Inspect brand assets** - Read the PassportCard brand files from `C:\Users\darta\Desktop\פרויקטים\ketzef\global policy` and the GitHub repo. Extract: logo, colors, fonts, design rules.

2. **Create the folder structure** on Ben's machine at `C:\Users\darta\Desktop\פרויקטים\ketzef\spark\` with the plugin directory structure from Section 4.

3. **Build spark-core skill** - The foundation skill that defines SPARK's identity, enforces the pipeline, and sets branding defaults.

4. **Build spark-phase-0-gate skill** - The session opening gate that collects: language, format, purpose, audience, role, data classification.

5. **Build spark-brand skill** - PassportCard brand enforcement with extracted tokens.

### Short-term (following sessions)

6. **Build phase skills 1-9** - One at a time, each as an encoded preference skill with rigid workflow, hard gates, and handoff document templates.

7. **Build audience skills** - Board, CEO, C-Level, Team, Broker output format skills.

8. **Build compliance skill** - Regulatory sweep instructions from Alon's materials.

9. **Convert scorecard to reference file** - Transform the XLSX into a markdown reference that skills can read.

10. **Build the user profiling HTML questionnaire** - Closed questions, generates JSON profile.

### Ben's personal tools

11. **Build the SPARK Skill Builder meta-skill** - For Ben to create new skills and evaluate external libraries.

12. **Build the GitHub repo** - `dartaryan/spark-passportcard` with the complete plugin.

### Delivery to Alon

13. **Test the full plugin** - Run through all phases with a test product idea.

14. **Write installation guide** - Step-by-step for PassportCard employees.

15. **Deliver to Alon** - With demo and walkthrough.

---

## 8. KEY PRINCIPLES (from Ben's DNA docs + this session)

- **Rigidity over flexibility** - SPARK skills must be narrow, workflow-strict, encoded preference. The V2 failure was caused by too much flexibility.
- **Modular over monolithic** - Each phase is its own skill. Each audience is its own skill. Nothing is a 5,000-word mega-prompt.
- **disable_model_invocation: true** for all phase skills - Users must explicitly invoke phases via slash commands. No accidental phase skipping.
- **Ben's voice is non-negotiable** - When Ben provides his own draft, format and organize only. Never rewrite.
- **Alon sees Bubbles, not Claude** - Client-facing communications position Bubbles as an independent advisory entity.
- **Primary sources only** - Everything that Alon will repeat externally must be rock-solid and sourced.
- **CRM is separate** - The CRM advisory track is paused. SPARK is the active deliverable.

---

## 9. FILES PRODUCED IN THIS SESSION

| File | Location | Purpose |
|---|---|---|
| transcript-to-knowledge-doc.md | outputs | Prompt for converting raw transcripts to knowledge docs |
| stage1-discovery-prompt.md | outputs | Prompt for content mapping across knowledge docs |
| stage2-extraction-prompt.md | outputs | Prompt for targeted SPARK-relevant extraction |
| SPARK-extraction.md | Ben's machine | 942-line extraction results (from Stage 2) |
| THIS DOCUMENT | outputs | Complete handoff for session continuation |

---

## 10. REFERENCE: DOCUMENTS IN BUBBLES PROJECT

The Bubbles Claude Project contains these knowledge files:
- bubbles-dna-1.md (Ben's professional DNA)
- bubbles-dna-2.md (Ben's consulting profile + Alon context)
- bubbles-knowledge-base.md (Consulting relationship details)
- Triggers (review and monthly trigger definitions)
- bubbles-internal-crm-knowledge.md (CRM advisory track - PAUSED)
- Bubbles-Skills-&-Tools-Index.md (Skills ecosystem catalog)

---

*This handoff document should be uploaded to the Bubbles project as a knowledge file AND provided at the start of the next session for immediate context loading.*
