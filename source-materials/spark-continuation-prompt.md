# SPARK Build Continuation — Paste This at the Start of the Next Session

---

## Context for Bubbles

I'm continuing the SPARK build for Alon Ketzef / PassportCard. This is a multi-session project. Everything you need to know is in the SPARK handoff document uploaded to this project's knowledge files (`SPARK-handoff-complete.md`). Read it first.

## What's Been Done

The full folder structure exists on my machine at:
`C:\Users\darta\Desktop\פרויקטים\ketzef\spark\`

**Completed files (already written to disk):**

| File | Status |
|---|---|
| `references/passportcard-brand.md` | DONE - Official brand tokens: red #E10514, soft pink #FEBCBD, Montserrat font, RTL-first |
| `skills/spark-brand/skill.md` | DONE - Auto-activating brand enforcement across all outputs |
| `skills/spark-core/skill.md` | DONE - Pipeline definition, hard gates, handoff templates, principles |
| `skills/spark-phase-0-gate/skill.md` | DONE - Session opening: 6 inputs + data classification + confidentiality |
| `README.md` | DONE - Plugin structure overview |

**Source materials filed in `source-materials/`:**
- Original Benefit V2 prompt
- Alon's 20 requirements (converted to markdown)
- Alon's scorecard (converted to markdown)
- SPARK-extraction.md (942-line capability extraction from 8 YouTube transcripts)
- SPARK-handoff-complete.md
- 8 knowledge docs in `orig-knowledge/`

**Original Benefit V2 source prompts at repo root:**
- `benefit-v2-system-prompt.md`
- `benefit-v2-knowledge-base.md`
- `best-practices-search-rules.md`

## What Needs to Be Done Next (in order)

### Priority 1: Phase Skills 1-4 (Strategy Phases)

Build these as individual skill.md files. Each one must be an **encoded preference skill** (rigid, step-by-step, cannot deviate). Extract the phase logic from `benefit-v2-system-prompt.md` and convert to standalone skills:

1. `skills/spark-phase-1-discovery/skill.md` — Discovery & Idea Sharpening
2. `skills/spark-phase-2-market/skill.md` — Market & Competitive Analysis
3. `skills/spark-phase-2.5-bestpractice/skill.md` — Best Practices & Authoritative Source Research
4. `skills/spark-phase-3-definition/skill.md` — Product Definition
5. `skills/spark-phase-4-prd/skill.md` — Brief + PRD Document

For each: read the corresponding phase section from the original Benefit V2 prompt, adapt it to the modular skill format (YAML frontmatter + markdown body), enforce `disable_model_invocation: true`, add hard gate instructions at the end (do not advance without user confirmation), and reference spark-brand and spark-core.

### Priority 2: Audience Skills

Build at least CEO and Board audience skills:
- `skills/spark-audience-ceo/skill.md` — Decision-ready format, 2-3 options with trade-offs, concise
- `skills/spark-audience-board/skill.md` — Pyramid Principle, SCR framework, decision box, max 10-12 slides

### Priority 3: Commands

- `commands/spark-start.md` — Entry point, routes to Phase 0
- `commands/spark-next.md` — Advance to next phase with gate check
- `commands/spark-status.md` — Dashboard: phases completed, decisions made, what's next

### Priority 4: Reference Files

- `references/authoritative-sources.md` — Convert from `benefit-v2-knowledge-base.md` + `best-practices-search-rules.md`
- `references/scorecard.md` — Already exists in source-materials as markdown
- `references/regulatory-authorities.md` — Extract from best-practices-search-rules.md

### Priority 5: Phase Skills 5-9 (Development Phases)

Lower priority because most PassportCard users will use phases 0-4. Build when strategy phases are solid.

### Priority 6: Ben's Personal Meta-Skill

A skill for Ben (NOT in the plugin) that:
- Builds new skills conforming to SPARK architecture
- Evaluates external skill libraries for PassportCard relevance
- Generates build prompts for new skills

## Key Principles to Follow

- **Rigidity over flexibility** — Every skill is narrow, workflow-strict, encoded preference
- **Modular** — Each phase is its own skill. Nothing is a mega-prompt.
- **disable_model_invocation: true** for all phase skills — Slash commands only, no accidental triggering
- **Brand red is #E10514** — Official, authoritative, confirmed
- **Ben's voice is non-negotiable** — Format and organize only, never rewrite Ben's drafts
- **Read the Benefit V2 source prompt** before building each phase skill — the original logic is solid, it just needs to be modularized

## How to Work

1. Read the original phase section from `benefit-v2-system-prompt.md`
2. Convert it to a standalone skill.md with proper YAML frontmatter
3. Add hard gate instructions
4. Write the file to the correct folder on my machine
5. Move to the next skill

Start with Phase 1 Discovery. Let's go.
