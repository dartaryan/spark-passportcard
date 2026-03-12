# SPARK Build Continuation — Session 7

---

## Context for Bubbles

I'm continuing the SPARK build for Alon Ketzef / PassportCard. This is a multi-session project. The foundational context is in the SPARK handoff document uploaded to this project's knowledge files (`SPARK-handoff-complete.md`). Read it first, but note that the build has progressed significantly since that document was written — we are now past Priorities 1-5. All phase skills (0-9) are complete.

## Project Location

All files are on my machine at:
`C:\Users\darta\Desktop\פרויקטים\ketzef\spark\`

## What's Been Done (Complete Inventory)

### ALL Phase Skills WRITTEN (20 skill.md files — COMPLETE):

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
| spark-phase-5-prototype | `skills/spark-phase-5-prototype/skill.md` | Session 6 |
| spark-phase-6-deploy | `skills/spark-phase-6-deploy/skill.md` | Session 6 |
| spark-phase-7-devenv | `skills/spark-phase-7-devenv/skill.md` | Session 6 |
| spark-phase-8-dev | `skills/spark-phase-8-dev/skill.md` | Session 6 |
| spark-phase-9-qa | `skills/spark-phase-9-qa/skill.md` | Session 6 |

### ALL Commands WRITTEN (5 files — COMPLETE):

| Command | Path | Done In |
|---------|------|---------|
| spark-start | `commands/spark-start.md` | Session 2 |
| spark-next | `commands/spark-next.md` | Session 2 |
| spark-status | `commands/spark-status.md` | Session 2 |
| spark-express | `commands/spark-express.md` | Session 4 |
| spark-resume | `commands/spark-resume.md` | Session 4 |

### ALL Reference Files WRITTEN (4 files — COMPLETE):

| File | Path | Done In |
|------|------|---------|
| passportcard-brand.md | `references/passportcard-brand.md` | Session 1 |
| authoritative-sources.md | `references/authoritative-sources.md` | Session 2 |
| regulatory-authorities.md | `references/regulatory-authorities.md` | Session 2 |
| scorecard.md | `references/scorecard.md` | Session 4 |

### Assets (COMPLETE):

| File | Path |
|------|------|
| passportcard-logo.svg | `assets/passportcard-logo.svg` |
| passportcard-logo-icon.svg | `assets/passportcard-logo-icon.svg` |

### Other Files at Repo Root:

| File | Purpose |
|------|---------|
| README.md | Plugin structure overview (Session 1) |
| benefit-v2-system-prompt.md | Original Benefit V2 prompt (source material) |
| benefit-v2-knowledge-base.md | Original knowledge base (source material) |
| best-practices-search-rules.md | Original best practices rules (source material) |

### Source Materials (in `source-materials/`):

PassportCard_Builder_Brief_for_Ben_v2.md, PassportCard_Builder_Scorecard_v3.md, SPARK-extraction.md, SPARK-handoff-complete.md, spark-continuation-prompt.md, spark-continuation-session3.md, spark-continuation-session5.md, plus `orig-knowledge/` subfolder with 8 YouTube transcript knowledge docs.

### Git:

The repo has `.git` initialized. Not yet pushed to GitHub.

---

## WHAT'S DONE vs. WHAT'S LEFT

### DONE (Priorities 1-5):
- All 20 skills written
- All 5 commands written
- All 4 reference files written
- All assets extracted
- Full 10-phase pipeline (0-9) is modularized

### REMAINING (Ordered by Priority):

#### Priority 6: Ben's Personal Meta-Skill (SPARK Skill Builder)

A skill for ME (NOT part of the SPARK plugin, lives in my personal skill folder) that helps me:
1. **Build new skills for PassportCard** — generates skill.md files that conform to SPARK's architecture, naming conventions, branding requirements, and quality standards
2. **Evaluate external skill libraries** — scans a GitHub repo or skill collection, identifies what's relevant to PassportCard's insurance/enterprise context, and recommends which to adopt/adapt/reject
3. **Generate build prompts** — for each recommended skill, produces a ready-to-run prompt that I can use to build the skill quickly

This was discussed in the SPARK handoff doc (Section 5). It should reference SPARK's conventions but live separately.

#### Priority 7: GitHub Repo Setup + Installation Guide

Push the complete plugin to `dartaryan/spark-passportcard`. Write:
- Updated README.md with installation instructions for PassportCard employees
- Step-by-step: add marketplace > paste repo URL > sync > install SPARK plugin
- Update instructions: how to sync when Ben pushes updates
- The README needs to be polished and user-facing (not developer-facing)

#### Priority 8: Testing

Run through the full pipeline with a test product idea to verify:
- Phase 0 gate collects all 6 inputs correctly
- Express Lane produces a viable report
- Phase transitions work with /spark-next
- Audience skills produce correctly formatted output
- Compliance skill activates for CONFIDENTIAL/RESTRICTED products
- Resume command correctly reads handoff documents

This is a dry-run / QA pass on the plugin itself.

#### Priority 9: plugin.json

The plugin manifest file that declares all skills and commands. Needed for proper plugin installation. Not yet created.

#### Priority 10: Update SPARK-handoff-complete.md

The handoff doc in the project knowledge files is outdated (written after Session 3). It should be updated to reflect the completed state. Or a new summary doc should replace it.

---

## Key Principles (Carry Forward)

- **Rigidity over flexibility** — Every skill is narrow, workflow-strict, encoded preference
- **Modular** — Each phase is its own skill. Nothing is a mega-prompt
- **disable_model_invocation: true** for all phase skills — Slash commands only
- **Brand red is #E10514** — Official, confirmed
- **Ben's voice is non-negotiable** — Format and organize only, never rewrite
- **Alon sees Bubbles, not Claude** — Client-facing communications position Bubbles as an independent advisory entity
- **Primary sources only** — Everything that Alon will repeat externally must be rock-solid and sourced

## How to Work

Pick up from Priority 6 (or whichever priority I specify when we start). Read existing files on my machine as needed for context. Write outputs directly to my filesystem.
