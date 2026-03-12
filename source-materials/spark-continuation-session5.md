# SPARK Build Continuation — Session 5

---

## Context for Bubbles

I'm continuing the SPARK build for Alon Ketzef / PassportCard. This is a multi-session project. The foundational context is in the SPARK handoff document uploaded to this project's knowledge files (`SPARK-handoff-complete.md`). Read it first, but note that the build has progressed significantly since that document was written — we are now past Priorities 1-4.

## Project Location

All files are on my machine at:
`C:\Users\darta\Desktop\פרויקטים\ketzef\spark\`

## What's Been Done (Complete Inventory)

### Skills with skill.md WRITTEN (12 files):

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
| spark-audience-clevel | `skills/spark-audience-clevel/skill.md` | Session 4 |
| spark-audience-team | `skills/spark-audience-team/skill.md` | Session 4 |
| spark-audience-broker | `skills/spark-audience-broker/skill.md` | Session 4 |
| spark-data-classification | `skills/spark-data-classification/skill.md` | Session 4 |
| spark-compliance | `skills/spark-compliance/skill.md` | Session 4 |

### Commands WRITTEN (5 files — ALL COMPLETE):

| Command | Path | Done In |
|---------|------|---------|
| spark-start | `commands/spark-start.md` | Session 2 |
| spark-next | `commands/spark-next.md` | Session 2 |
| spark-status | `commands/spark-status.md` | Session 2 |
| spark-express | `commands/spark-express.md` | Session 4 |
| spark-resume | `commands/spark-resume.md` | Session 4 |

### Reference Files WRITTEN (4 files — ALL COMPLETE):

| File | Path | Done In |
|------|------|---------|
| passportcard-brand.md | `references/passportcard-brand.md` | Session 1 |
| authoritative-sources.md | `references/authoritative-sources.md` | Session 2 |
| regulatory-authorities.md | `references/regulatory-authorities.md` | Session 2 |
| scorecard.md | `references/scorecard.md` | Session 4 |

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

### Priority 5: Phase Skills 5-9 (5 files)

Directories exist but are EMPTY. These cover the build/deploy/dev phases. Lower priority because most PassportCard users will primarily use phases 0-4 (strategy), but they complete the full pipeline.

1. `skills/spark-phase-5-prototype/skill.md` — Working HTML prototype: interactive product simulation, not a mockup. Design direction selection, sample data, brand-compliant. Produces Handoff Document #5.
2. `skills/spark-phase-6-deploy/skill.md` — Deployment guidance: GitHub Pages step-by-step, custom domain optional, verification. Produces Handoff Document #6.
3. `skills/spark-phase-7-devenv/skill.md` — Dev environment setup: tech stack selection, 3-layer architecture (Directives / Orchestration / Execution), project scaffolding, enterprise security defaults. Produces Handoff Document #7. NOTE: Scope & Authority Checkpoint fires between Phase 6 and Phase 7 (already built into spark-next and spark-compliance).
4. `skills/spark-phase-8-dev/skill.md` — Software development: iterative build cycles with self-annealing error recovery, autonomous technical decisions, progress reporting in plain language. Produces Handoff Document #8.
5. `skills/spark-phase-9-qa/skill.md` — QA and security review: automated testing, OWASP Top 10, SDLC compliance, security audit, final sign-off. Produces Handoff Document #9.

Source for all: `benefit-v2-system-prompt.md` (each phase has a detailed section with full logic). Read the relevant phase section, then modularize into a standalone skill.md following the pattern of phases 1-4.

### Priority 6: Ben's Personal Meta-Skill

A skill for Ben (NOT in the SPARK plugin, lives in Ben's personal skill folder) that:
- Builds new skills conforming to SPARK architecture, naming conventions, and quality standards
- Evaluates external skill libraries for PassportCard relevance
- Generates build prompts for new skills

This was discussed in Session 3 (see SPARK-handoff-complete.md, Section 5).

### Priority 7: GitHub Repo Setup + Installation Guide

Push the complete plugin to `dartaryan/spark-passportcard`. Write:
- README.md with installation instructions for PassportCard employees
- Step-by-step: add marketplace > paste repo URL > sync > install SPARK plugin
- Update instructions: how to sync when Ben pushes updates

### Priority 8: Testing

Run through the full pipeline with a test product idea to verify:
- Phase 0 gate collects all 6 inputs correctly
- Express Lane produces a viable report
- Phase transitions work with /spark-next
- Audience skills produce correctly formatted output
- Compliance skill activates for CONFIDENTIAL/RESTRICTED products
- Resume command correctly reads handoff documents

## Key Principles (Carry Forward)

- **Rigidity over flexibility** — Every skill is narrow, workflow-strict, encoded preference
- **Modular** — Each phase is its own skill. Nothing is a mega-prompt
- **disable_model_invocation: true** for all phase skills — Slash commands only
- **Brand red is #E10514** — Official, confirmed
- **Ben's voice is non-negotiable** — Format and organize only, never rewrite
- **Read the Benefit V2 source prompt** before building each remaining skill — the original logic is solid, it just needs modularizing

## How to Work

1. Read the relevant source section from `benefit-v2-system-prompt.md` for the phase being built
2. Read an existing completed skill to match the format (spark-phase-1-discovery for phase skills, spark-audience-ceo for audience skills, spark-compliance for guardrail skills)
3. Convert to standalone skill.md with YAML frontmatter
4. Add hard gate instructions (user must confirm before advancing)
5. Include handoff document template at the end of each phase skill
6. Write the file to the correct folder on my machine
7. Move to the next file

Start with Priority 5 (the five remaining phase skills). Let's go.
