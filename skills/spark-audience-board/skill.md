---
name: spark-audience-board
description: Output formatting skill for Board of Directors audience. Applies Pyramid Principle structure, SCR executive summary, decision box, formal tone, and maximum 10-12 slide constraint. Activates when Phase 0 audience is set to Board of Directors.
disable_model_invocation: false
---

# Audience Skill: Board of Directors

## When This Activates

This skill activates when the target audience selected in Phase 0 is "Board of Directors". It governs the structure, tone, depth, and format of ALL outputs for the remainder of the session.

## Communication Framework

### Structure: Pyramid Principle

Every deliverable for the Board follows the McKinsey Pyramid Principle:

1. **Lead with the answer.** The first sentence or slide states the conclusion/recommendation.
2. **Supporting arguments grouped logically.** 2-4 supporting pillars, each with its own evidence.
3. **Evidence flows downward.** From general to specific. The Board reads as deep as they choose.

### Executive Summary: SCR Framework

Every document or presentation opens with a Situation-Complication-Resolution summary:

- **Situation:** What is the current state? (1-2 sentences)
- **Complication:** What changed or what is at risk? (1-2 sentences)
- **Resolution:** What do we recommend? (1 sentence)

### Decision Box (MANDATORY)

Every Board deliverable includes a clearly labeled decision box stating exactly what the Board is asked to do:

```
DECISION REQUIRED
--------------------------------------------------
The Board is asked to [approve / fund / advise on]:
[Specific action with specific parameters]

Budget implication: [amount or range]
Timeline: [key date]
Risk if delayed: [consequence]
--------------------------------------------------
```

This box appears at the top of the document (after executive summary) and again at the end.

### Tone

- **Formal and precise.** No casual language. No first-person anecdotes.
- **Quantified.** Every claim backed by numbers with source tier indicators.
- **No jargon.** Technical terms translated inline. "Machine learning model (software that improves its accuracy by learning from data)."
- **Governance-aware.** Acknowledge regulatory and fiduciary context where relevant.
- **Balanced.** Present both opportunity and risk. Boards are fiduciaries -- they need the full picture.

### Length Constraints

| Format | Maximum |
|--------|---------|
| Presentation | 10-12 slides (hard maximum) |
| Narrative document | 3-4 pages |
| Executive summary | 200-250 words |
| Supporting appendix | No limit, but clearly separated from main document |

### Slide Structure (for presentations)

| Slide # | Content | Notes |
|---------|---------|-------|
| 1 | Title slide | Project name, date, "Board Review" label |
| 2 | Executive Summary (SCR) | Situation, Complication, Resolution in 3 bullets |
| 3 | Decision Box | What the Board is asked to decide |
| 4-5 | Strategic Context | Market position, competitive landscape, key trends |
| 6-7 | Recommendation Detail | The proposed approach with supporting evidence |
| 8-9 | Financial Impact | Investment required, expected returns, timeline |
| 10 | Risk Assessment | Top 3 risks with mitigations |
| 11 | Timeline and Milestones | Key dates, dependencies |
| 12 | Decision Box (repeated) | Clear ask with next steps |

Every slide has:
- An action title (conclusion, not label)
- One key message
- Supporting data or visualization
- Speaker notes with talking points

### What to Exclude

- Operational detail (process steps, implementation specifics) -- move to appendix
- PM-specific terminology without translation
- Speculative claims without confidence indicators
- Internal team dynamics or organizational politics
- Anything that requires more than 30 seconds to understand per slide

### What to Always Include

- Regulatory and compliance implications
- Competitive context (what peers/competitors are doing)
- Financial quantification (investment, returns, payback period)
- Clear timeline with decision deadlines
- Risk assessment with probability and impact ratings
- Decision box with explicit ask

## Format-Specific Rules

### For PowerPoint
- Apply spark-brand palette strictly.
- Red/navy/white scheme. Maximum white space.
- One message per slide. Action titles.
- Charts and tables preferred over prose.
- Footnotes for source citations (not inline).

### For Word/PDF
- Table of contents for documents over 3 pages.
- Executive summary on first page.
- Decision box immediately after executive summary.
- Numbered sections for easy reference in Board discussion.
- Appendix for supporting detail.
- Apply spark-brand formatting.

### For HTML
- Clean, formal layout. Not interactive or dashboard-style.
- Printable format (suitable for board members who print materials).
- PDF export capability if possible.

## Golden Standard Reference

Before producing any Board-audience deliverable:
- Apply **McKinsey Pyramid Principle** for overall structure.
- Apply **SCR Framework** for executive summary.
- Apply **MECE principle** for argument grouping.
- Search consulting firm knowledge base for relevant board governance best practices.
- If the topic involves regulated activity, reference applicable regulatory requirements.
