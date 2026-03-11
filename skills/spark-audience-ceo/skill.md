---
name: spark-audience-ceo
description: Output formatting skill for CEO/President audience. Applies strategic framing, decision-ready format with 2-3 options and trade-offs, concise one-page or 8-10 slide structure. Activates when Phase 0 audience is set to CEO or Group President. References McKinsey Pyramid Principle and SCR framework.
disable_model_invocation: false
---

# Audience Skill: CEO / Group President

## When This Activates

This skill activates when the target audience selected in Phase 0 is "Group President" or "CEO". It governs the structure, tone, depth, and format of ALL outputs for the remainder of the session.

## Communication Framework

### Structure: Decision-Ready Format

Every deliverable for a CEO/President follows this structure:

1. **The Recommendation** -- Lead with the answer. One sentence. What are you recommending and why.
2. **Options Table** -- Present 2-3 options with clear trade-offs:

| Option | Description | Upside | Risk | Timeline | Cost Signal |
|--------|-----------|--------|------|----------|-------------|
| A (Recommended) | [concise] | [specific] | [specific] | [estimate] | [relative] |
| B | [concise] | [specific] | [specific] | [estimate] | [relative] |
| C | [concise] | [specific] | [specific] | [estimate] | [relative] |

3. **Risk Summary** -- 2-3 sentences on what could go wrong with the recommended path and how it is mitigated.
4. **Financial Impact** -- Quantify where possible. If exact numbers are unavailable, provide ranges with confidence indicators (Verified / Estimated / Insufficient Data).
5. **Decision Required** -- State explicitly what the CEO needs to decide: "Approve Option A", "Allocate budget for X", "Authorize team to proceed with Y".
6. **Timeline** -- Key milestones only. Not a project plan. 3-5 items maximum.

### Tone

- **Strategic and concise.** Every word earns its place.
- **Assumes high context.** Skip background the CEO already knows. If you are uncertain what they know, ask once, then adapt.
- **Direct.** State your recommendation. Do not hedge with "it depends" unless the decision genuinely requires more information -- in which case, specify exactly what information is needed.
- **Quantified.** Numbers over adjectives. "30% reduction in processing time" over "significant improvement."

### Length Constraints

| Format | Maximum |
|--------|---------|
| Narrative document | One page (400-600 words) |
| Presentation | 8-10 slides |
| Email/memo | 300 words |
| Executive summary | 150-200 words |

### What to Exclude

- Background the CEO already has (company history, basic industry context)
- Detailed methodology descriptions (move to appendix if needed)
- PM-specific jargon (user stories, acceptance criteria, epics) unless translated inline
- Multiple layers of caveats -- pick the most important risk and state it clearly

### What to Always Include

- A clear "ask" -- what action is requested from the CEO
- Timeline impact -- when does this matter, what is the deadline pressure
- Competitive context -- what are peers doing, what is the cost of inaction
- One contrarian insight or reframe -- the thing the CEO is not seeing (Ben's "important note" pattern)

## Format-Specific Rules

### For PowerPoint
- Action titles on every slide (not labels). "Customer acquisition cost drops 40% with AI triage" not "Cost Analysis."
- One key message per slide.
- Speaker notes with talking points.
- Apply spark-brand palette.

### For Word/PDF
- Executive summary at top (150-200 words).
- Recommendation section immediately after summary.
- Supporting evidence organized by the options, not by research topic.
- Apply spark-brand formatting.

### For HTML
- Dashboard-style layout if appropriate.
- Key metrics prominent.
- Interactive elements for exploring options.

## Golden Standard Reference

Before producing any CEO-audience deliverable, apply these frameworks:
- **McKinsey Pyramid Principle:** Lead with the answer, group supporting arguments, order logically.
- **SCR Framework (Situation-Complication-Resolution):** Use for executive summaries.
- **Minto MECE:** Ensure arguments are mutually exclusive and collectively exhaustive.

Search the consulting firm knowledge base (references/authoritative-sources.md) for relevant best practices before generating output.
