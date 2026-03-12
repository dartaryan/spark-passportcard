---
name: spark-phase-2-market
description: Phase 2 of the SparkKit pipeline. Market and competitive analysis. Validates the product idea against market reality, maps the competitive landscape, identifies positioning opportunities and risks. Produces Handoff Document #2. Invoke with /spark-phase-2. Requires Handoff Document #1.
argument_hint: Begin Phase 2 Market Analysis - validate idea against market reality
---

# Phase 2: Market and Competitive Analysis

## Objective

Validate the product idea against market reality. Map the competitive landscape with enough specificity to make confident positioning decisions. Identify gaps worth targeting and risks worth hedging.

## Prerequisites

User MUST upload Handoff Document #1. Read it fully before conducting any research. If the document is not uploaded, stop and ask for it. Do not proceed without it.

## Research Framework

### Step 1: Form Hypotheses First

Before searching, write down (internally) what you expect to find based on Phase 1:
- What competitors you expect to find
- What you expect the market size to be (order of magnitude)
- What the main differentiation opportunities will be

Then search. Compare findings to hypotheses. The gaps between expectation and reality are often the most important insights.

### Step 2: Systematic Search

Conduct a MINIMUM of 5 targeted searches:

1. **Direct competitor search:** "[product category] software/app [year]"
2. **Product discovery search:** ProductHunt or App Store for the problem domain
3. **Funding/market signal search:** "[product category] startup funding 2024-2026"
4. **User complaint search:** "reddit [current solution] alternatives complaints"
5. **Market size search:** "[industry] market size growth [region]"

Apply the source tier system from spark-core:
- Tier 1 (high confidence): Primary data, official publications, verified pricing pages, funding data
- Tier 2 (medium confidence): Credible journalism, company blog posts, analyst reports
- Tier 3 (low confidence): Forum posts, review aggregators, secondhand summaries

Do not let Tier 3 sources drive strategic recommendations.

### Step 3: Competitive Analysis

For EACH competitor identified, assess five dimensions:

| Dimension | What to Capture |
|-----------|----------------|
| Problem coverage | What specific problem do they solve? Broad or narrow? |
| User targeting | Who is their core buyer? Same user as ours? |
| Business model | How do they charge? What tier would our target user be on? |
| Differentiation lever | The one thing they are best at |
| Vulnerability | Where do users complain? What do reviews reveal? |

### Step 4: Positioning Map

After analyzing competitors, identify:
- Where the market is **crowded** (avoid or out-execute)
- Where the market is **sparse but for good reason** (understand why before targeting)
- Where the market is **sparse because no one figured it out yet** (the opportunity zone)

## Discussion Before Documentation

Before writing the handoff document, present findings to the user:

"Here is what I found -- [2-3 sentence summary]. The most interesting insight is [specific finding]. Your strongest positioning opportunity appears to be [specific angle]. The risk I see is [specific risk] -- here is how I would think about mitigating it: [suggestion]."

Let the user respond. Discuss. Refine positioning decisions together. Do NOT finalize without user input.

## Phase 1 Assumption Check

For EACH assumption flagged in Handoff Document #1, explicitly state: **confirmed**, **contradicted**, or **unresolved**. This is mandatory. Do not skip it.

## Hard Gate (DO NOT PROCEED WITHOUT THIS)

Before producing the handoff document:

1. State your recommended positioning strategy in one sentence.
2. State the primary differentiation mechanism.
3. Name the biggest competitive risk.
4. Ask the user: "Does this positioning feel right? Is there a competitor I missed or a risk that concerns you?"
5. Wait for explicit confirmation.
6. Only then produce Handoff Document #2.

DO NOT advance to Phase 2.5 without user confirmation. This gate is non-negotiable.

## Output: Handoff Document #2

Apply spark-brand formatting rules. Use the handoff template from spark-core. Phase-specific content:

```markdown
# SparkKit -- Handoff Document #2: Market and Competitive Analysis
<!-- Project: [name] | Phase 2 of 9 | Version: 1.0 | Date: [date] -->
<!-- Generated with SparkKit -- PassportCard Internal Use Only -->

## Session Context
[Carried from Phase 0 via Handoff #1]

## Agent Instructions
- **Project name:** [name]
- **Phase completed:** 2 -- Market and Competitive Analysis
- **Next phase:** 2.5 -- Best Practices and Authoritative Source Research
- **Document version:** 1.0
- **Session summary:** [2-3 sentences: what was found, what changed from Phase 1 assumptions, what was confirmed]
- **Key decisions locked:**
  - Positioning strategy: [specific statement]
  - Primary differentiation: [specific mechanism]
- **Open questions for Phase 2.5:** [specific items]
- **Previous handoffs:** Builds on Document #1

## Decision Log
| Decision | Alternatives Considered | Rationale | Decided By |
|----------|------------------------|-----------|------------|

## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [date] | Initial creation |

## Work Product: Market Analysis

### Market Overview
[3-4 paragraphs: market definition, size signals (with source tiers noted), growth trajectory, key trends, regulatory or behavioral tailwinds/headwinds]

### Competitive Landscape

| Competitor | Core Problem Solved | Primary User | Pricing | Differentiation Lever | Vulnerability |
|-----------|-------------------|-------------|---------|----------------------|---------------|
| [Name] | [Specific problem] | [Who] | [Tier/price] | [Their #1 strength] | [Where they fail] |

### Competitive Positioning Map
[Describe the positioning spectrum -- where competitors cluster and where the opportunity lies. Use a 2x2 framework if it clarifies.]

### Market Opportunities
1. **[Opportunity]** -- [Evidence for why this gap exists and is worth targeting]
2. **[Opportunity]** -- [Evidence]

### Market Risks
1. **[Risk]** -- [Likelihood: H/M/L] -- [Mitigation strategy]
2. **[Risk]** -- [Likelihood: H/M/L] -- [Mitigation strategy]

### Revised Differentiation Strategy
[Updated from Phase 1 based on research findings]

### Research Sources and Confidence Assessment
- [Source 1] (Tier [1/2/3]): [key finding]
- [Source 2] (Tier [1/2/3]): [key finding]

### Phase 1 Assumption Check
| Assumption | Status | Evidence |
|-----------|--------|---------|
| [From Handoff #1] | Confirmed / Contradicted / Unresolved | [What you found] |
```

## After Producing the Handoff

Tell the user:
"Here is your Phase 2 handoff document. Download it. When you are ready for Phase 2.5 (Best Practices and Authoritative Source Research), open a new conversation, upload Documents #1 and #2, and invoke /spark-phase-2.5."
