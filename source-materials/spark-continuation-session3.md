# SPARK Build Continuation — Session 3

---

## Context for Bubbles

I'm continuing the SPARK build for Alon Ketzef / PassportCard. This is a multi-session project. The foundational context is in the SPARK handoff document uploaded to this project's knowledge files (`SPARK-handoff-complete.md`). Read it first, but note that the build has progressed significantly since that document was written.

## Project Location

All files are on my machine at:
`C:\Users\darta\Desktop\פרויקטים\ketzef\spark\`

## What's Been Done (Complete Inventory)

### Skills with skill.md WRITTEN (10 files):

| Skill | Path | Done In |
|-------|------|---------|
| spark-core | `skills/spark-core/skill.md` | Session 1 |
| spark-phase-0-gate | `skills/spark-phase-0-gate/skill.md` | Session 1 |
| spark-brand | `skills/spark-brand/skill.md` | Session 1 |
| spark-phase-1-discovery | `skills/spark-phase-1-discovery/skill.md` | Session 2 |
| spark-phase-2-market | `skills/spark-phase-2-market/skill.md` | Session 2 |
| spark-phase-2.5-bestpractice | `skills/spark-phase-2.5-bestpractice/skill.md` | Session 2 |
| spark-phase-3-definition | `skills/spark-phase-3-definition/skill.md` | Session 2 |
| spark-phase-4-prd | `skills/spark-phase-4-prd/skill.md` | Session 2 |
| spark-audience-ceo | `skills/spark-audience-ceo/skill.md` | Session 2 |
| spark-audience-board | `skills/spark-audience-board/skill.md` | Session 2 |

### Commands WRITTEN (3 files):

| Command | Path | Done In |
|---------|------|---------|
| spark-start | `commands/spark-start.md` | Session 2 |
| spark-next | `commands/spark-next.md` | Session 2 |
| spark-status | `commands/spark-status.md` | Session 2 |

### Reference Files WRITTEN (3 files):

| File | Path | Done In |
|------|------|---------|
| passportcard-brand.md | `references/passportcard-brand.md` | Session 1 |
| authoritative-sources.md | `references/authoritative-sources.md` | Session 2 |
| regulatory-authorities.md | `references/regulatory-authorities.md` | Session 2 |

### Other Files at Repo Root:

| File | Purpose |
|------|---------|
| README.md | Plugin structure overview (Session 1) |
| benefit-v2-system-prompt.md | Original Benefit V2 prompt (source material) |
| benefit-v2-knowledge-base.md | Original knowledge base (source material) |
| best-practices-search-rules.md | Original best practices rules (source material) |

### Source Materials (in `source-materials/`):

PassportCard_Builder_Brief_for_Ben_v2.md, PassportCard_Builder_Scorecard_v3.md, SPARK-extraction.md, SPARK-handoff-complete.md, spark-continuation-prompt.md, plus `orig-knowledge/` subfolder with 8 YouTube transcript knowledge docs.

## What STILL Needs to Be Done (Ordered by Priority)

### Priority 1: Remaining Audience Skills (3 files)

Directories exist but are EMPTY. Build skill.md for each, following the pattern established in spark-audience-ceo and spark-audience-board:

1. `skills/spark-audience-clevel/skill.md` — C-Level function-specific formatting (CFO gets ROI/NPV, CTO gets architecture, COO gets process impact, CMO gets market positioning)
2. `skills/spark-audience-team/skill.md` — Team member format: action items, ownership assignments, deadlines, operational detail, accountability tables
3. `skills/spark-audience-broker/skill.md` — Plain language, client-benefit-first, comparison tables, FAQ-style objection handling, ready-to-forward selling points

Source for audience specs: `source-materials/PassportCard_Builder_Brief_for_Ben_v2.md` (Section A, item #4 "Audience Communication Engine")

### Priority 2: Missing Commands (2 files)

1. `commands/spark-express.md` — Express Lane: single-session viability check producing a condensed "Idea Viability Report" with go/no-go recommendation. If the idea passes, the report converts into Handoff Document #1. Source: benefit-v2-system-prompt.md Phase 0 edge cases + Alon's brief item #6.
2. `commands/spark-resume.md` — Resume from handoff documents: reads uploaded docs, identifies phase, confirms with user, routes to appropriate phase.

### Priority 3: Convert Scorecard to Reference File

`source-materials/PassportCard_Builder_Scorecard_v3.md` already exists as markdown. Copy/adapt it to `references/scorecard.md` so phase 2.5 skill can reference entity quality scores.

### Priority 4: Remaining Guardrail Skills (2 files)

Directories exist but are EMPTY:

1. `skills/spark-data-classification/skill.md` — Data sensitivity tagging (Public / Internal / Confidential / Restricted). Activates during Phase 0. Source: Alon's brief item #13.
2. `skills/spark-compliance/skill.md` — Regulatory sweep instructions, escalation paths, configurable contacts. Source: Alon's brief items #15-18 + best-practices-search-rules.md.

### Priority 5: Phase Skills 5-9 (5 files)

Directories exist but are EMPTY. Lower priority because most PassportCard users will use phases 0-4. Build when strategy phases are solid.

1. `skills/spark-phase-5-prototype/skill.md` — Working HTML prototype
2. `skills/spark-phase-6-deploy/skill.md` — Deployment guidance (GitHub Pages)
3. `skills/spark-phase-7-devenv/skill.md` — Dev environment + 3-layer architecture
4. `skills/spark-phase-8-dev/skill.md` — Software development with self-annealing
5. `skills/spark-phase-9-qa/skill.md` — QA, security audit, SDLC compliance

Source for all: benefit-v2-system-prompt.md (each phase has a detailed section).

### Priority 6: Ben's Personal Meta-Skill

A skill for Ben (NOT in the plugin) that:
- Builds new skills conforming to SPARK architecture
- Evaluates external skill libraries for PassportCard relevance
- Generates build prompts for new skills

### Priority 7: GitHub Repo Setup

Push the complete plugin to `dartaryan/spark-passportcard`. Write installation guide for PassportCard employees.

## Key Principles (Carry Forward)

- **Rigidity over flexibility** — Every skill is narrow, workflow-strict, encoded preference
- **Modular** — Each phase is its own skill. Nothing is a mega-prompt
- **disable_model_invocation: true** for all phase skills — Slash commands only
- **Brand red is #E10514** — Official, confirmed
- **Ben's voice is non-negotiable** — Format and organize only, never rewrite
- **Read the Benefit V2 source prompt** before building each remaining skill — the original logic is solid, it just needs modularizing

## How to Work

1. Read the relevant source section from `benefit-v2-system-prompt.md` (or `PassportCard_Builder_Brief_for_Ben_v2.md` for audience/guardrail specs)
2. Read an existing completed skill to match the format (spark-audience-ceo for audience skills, spark-phase-1-discovery for phase skills)
3. Convert to standalone skill.md with YAML frontmatter
4. Add hard gate instructions where applicable
5. Write the file to the correct folder on my machine
6. Move to the next file

Start with Priority 1 (the three remaining audience skills). Let's go.
