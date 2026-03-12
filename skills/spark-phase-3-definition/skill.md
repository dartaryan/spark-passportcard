---
name: spark-phase-3-definition
description: Phase 3 of the SPARK pipeline. Transforms the validated idea into a concrete product definition with features, user stories, scope, design direction, and development language preference. Produces Handoff Document #3. Invoke with /spark-phase-3. Requires Handoff Documents #1, #2, and #2.5.
argument_hint: Begin Phase 3 Product Definition - features, stories, design, scope
---

# Phase 3: Product Definition

## Objective

Transform the validated idea into a concrete product definition: features, user stories, scope, design direction, and development language preference.

## Prerequisites

User MUST upload Handoff Documents #1, #2, and #2.5. Read all three fully. If any document is missing, stop and ask for it. Do not proceed without the complete set.

## Workflow (Follow In Order)

### Step 1: Feature Prioritization

Based on the competitive analysis, idea definition, and adopted best practices from Phase 2.5:

1. Confirm the must-have features from Phase 1
2. Incorporate any features recommended by adopted frameworks from Phase 2.5
3. Prioritize using Impact vs. Effort (present as a simple 2x2)
4. Define what is in v1 vs. what goes to the backlog

Work WITH the user on this. Present your recommended prioritization and ask for confirmation. Features are not locked until the user agrees.

### Step 2: User Stories

For each core feature, create user stories:

"As a [persona from Phase 1], I want to [action] so that [benefit]."

Include acceptance criteria for each story. Ensure:
- The persona's vocabulary matches Phase 1 (inter-phase coherence)
- Acceptance criteria have clear pass/fail definitions
- Each story maps to a real user need identified in discovery

### Step 3: Design Direction

Present design options based on the product's domain and audience. Use this reference:

| Product Domain | Design Inspiration | Key Characteristics | Typography |
|---------------|-------------------|-------------------|-----------|
| Premium/Hardware | Apple | Minimal, white space, glass effects | Plus Jakarta Sans / Outfit |
| Dev Tools | Linear | Dark theme, monospace accents | JetBrains Mono + clean sans |
| Workspace/Productivity | Monday / Notion | Colorful, rounded, playful-professional | Nunito / DM Sans / Poppins |
| Social/Consumer | Instagram / TikTok | Gradient accents, card-based, mobile-first | Manrope / Sora |
| Analytics/Data | Mixpanel / Amplitude | Dashboard-centric, chart-heavy | System + clean sans |
| E-commerce | Shopify | Product cards, clear CTAs, trust badges | Clean sans |
| Fintech | Stripe / Wise | Ultra-clean, subtle animations | Source Sans 3 / IBM Plex Sans |
| Marketing/Growth | AppsFlyer / HubSpot | Bold colors, metrics-forward | Bold sans |
| Education | Duolingo | Friendly, bright, gamified | Rounded sans |
| Health/Wellness | Calm / Headspace | Soft gradients, breathing room | Serif accents |
| Insurance/Financial | PassportCard | Clean Apple-inspired + brand identity | Per spark-brand |

**Default for PassportCard internal products:** Apply spark-brand rules automatically. Apple-inspired clean design with PassportCard branding.

Present your recommendation with reasoning. Let the user choose or approve.

### Step 4: Development Language Preference

Ask: "If this product moves into development (Phases 7-9), is there an organizational preference for programming language? Common options for this type of product would be [relevant options with brief tradeoffs]. If you have no preference, I will choose the most reliable and well-supported option for this use case."

Log the decision. It carries forward to Phase 7.

### Step 5: Deliverable Language Preference

Ask: "What language should the final documents be in? We can continue in the language we have been speaking, or switch for the formal deliverables."

### Step 6: User Flow

Map the primary user journey through the product:
1. User [action] ->
2. System [response] ->
3. User [action] ->

Keep it focused on the core flow. Include branching paths only for critical decision points.

### Step 7: Success Metrics

Define how we measure if the product delivers value:

| Metric | Target | How to Measure |
|--------|--------|---------------|
| [KPI] | [Number] | [Method] |

Metrics must be specific, measurable, and tied to the value proposition from Phase 1.

## Hard Gate (DO NOT PROCEED WITHOUT THIS)

Before producing the handoff document:

1. Summarize the v1 scope in 2-3 sentences.
2. State the design direction and why it fits.
3. State the development language choice.
4. List any features that were deprioritized and why.
5. Ask: "Does this product definition capture what you want to build? Any features missing or misunderstood?"
6. Wait for explicit confirmation.
7. Only then produce Handoff Document #3.

DO NOT advance to Phase 4 without user confirmation. This gate is non-negotiable.

## Output: Handoff Document #3

Apply spark-brand formatting rules. Use the handoff template from spark-core. Phase-specific content:

```markdown
# SPARK -- Handoff Document #3: Product Definition
<!-- Project: [name] | Phase 3 of 9 | Version: 1.0 | Date: [date] -->
<!-- Generated with SPARK -- PassportCard Internal Use Only -->

## Session Context
[Carried from Phase 0]

## Agent Instructions
- **Project name:** [name]
- **Phase completed:** 3 -- Product Definition
- **Next phase:** 4 -- Brief + PRD Document
- **Document version:** 1.0
- **Session summary:** [2-3 sentences]
- **Key decisions:**
  - Design inspiration: [company/style]
  - Deliverable language: [language]
  - Development language preference: [language or "agent decides"]
  - Scope: [brief scope statement]
  - Adopted frameworks from Phase 2.5: [list of those that influenced features]
- **Previous handoffs:** Builds on Documents #1, #2, and #2.5

## Decision Log
| Decision | Alternatives Considered | Rationale | Decided By |
|----------|------------------------|-----------|------------|

## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [date] | Initial creation |

## Work Product: Product Definition

### Product Name and Tagline
**[Product Name]** -- [One-line tagline]

### Feature Specification (v1 Scope)

#### Feature 1: [Name]
- **Description:** [What it does]
- **User Story:** As a [persona], I want to [action] so that [benefit]
- **Acceptance Criteria:**
  - [Criterion 1 with clear pass/fail]
  - [Criterion 2]
- **Priority:** Must-have
- **Source:** [Original idea / Phase 2.5 framework / user request]

[Repeat for each feature]

### Out of Scope (v1)
- [Feature/capability] -- reason for deferral

### User Flow
1. User [action] ->
2. System [response] ->
3. User [action] ->
[Primary path only. Branch for critical decisions.]

### Success Metrics
| Metric | Target | How to Measure |
|--------|--------|---------------|
| [KPI] | [Number] | [Method] |

### Design Direction
- **Inspiration:** [Company/style]
- **Color palette:** [Primary, secondary, accent -- or "Per spark-brand"]
- **Typography:** [Specific fonts]
- **Key UI characteristics:** [List]
- **Brand assets available:** [Yes -- describe / No -- using spark-brand defaults]
- **Accessibility target:** WCAG 2.1 AA minimum

### Development Language Preference
[Language chosen, or "Agent decides -- prioritize reliability and maintainability"]

### Deliverable Language
[Language chosen for Brief + PRD and prototype]

### Regulatory Requirements Carried Forward
[From Phase 2.5, listed as hard constraints. Or: "None identified."]
```

## After Producing the Handoff

Tell the user:
"Here is your Phase 3 handoff document. Download it. When you are ready for Phase 4 (Brief + PRD), open a new conversation, upload Documents #1 through #3, and invoke /spark-phase-4. Phase 4 will assemble everything into a professional strategy and requirements document."
