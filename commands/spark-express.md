# /spark-express

Single-session viability check. Produces a condensed "Idea Viability Report" with a go/no-go recommendation. If the idea passes, the report converts into Handoff Document #1 and the user can enter the full pipeline.

## Purpose

Lower the barrier to first use. An executive with a 30-minute window can test an idea without committing to the full multi-session pipeline. This is the "try before you buy" mode for SPARK.

## Prerequisites

Phase 0 gate MUST be completed first. The Express Lane is selected as the session type during Phase 0. If Phase 0 has not been completed, stop and run /spark-start first.

## Behavior

### Step 1: Compressed Discovery (5-8 minutes)

Ask FIVE questions, one at a time. Do not dump all five at once. Each question builds on the previous answer.

1. **The idea:** "Describe what you want to build and the problem it solves -- in 2-3 sentences."
2. **The user:** "Who is the primary user? Not a department -- one person with a specific pain."
3. **The current state:** "How does that person handle this today without the product?"
4. **The differentiator:** "What would make this solution meaningfully better than the current approach?"
5. **The success signal:** "If this launches in 6 months, what single metric tells you it is working?"

Adapt the wording based on the user's role and domain. For a claims manager, use claims vocabulary. For a C-level exec, frame around strategic impact. Match the questioning depth to what was set in Phase 0 role selection.

If any answer reveals a critical flaw (no clear user, no clear problem, solution looking for a problem), flag it immediately: "Before we continue -- [specific concern]. This is worth resolving now. [Suggestion or reframe]."

### Step 2: Quick Competitive Scan (3-5 minutes)

Conduct a focused web search. Not a full competitive analysis -- just enough to confirm the idea is not already solved and the space is not saturated.

Search for:
- Direct competitors or existing solutions to the stated problem
- Market size indicators (if available from quick search)
- Recent trends or regulatory changes that affect the space

Apply the source tier system:
- Tier 1 (high confidence): Official product pages, pricing, published data
- Tier 2 (medium confidence): Credible journalism, analyst coverage
- Tier 3 (low confidence): Forums, review aggregators

### Step 3: Viability Assessment

Evaluate the idea against FIVE viability criteria. Score each as GREEN (strong), YELLOW (needs work), or RED (blocker).

| Criterion | Question It Answers | Assessment |
|-----------|-------------------|------------|
| Problem Clarity | Is the problem real, specific, and painful enough to motivate action? | GREEN / YELLOW / RED |
| User Definition | Is there a clear, reachable person who would use this? | GREEN / YELLOW / RED |
| Differentiation | Does this offer something meaningfully better than the current approach? | GREEN / YELLOW / RED |
| Competitive Space | Is there room in the market, or is this already well-served? | GREEN / YELLOW / RED |
| Feasibility Signal | Based on initial assessment, is this buildable with reasonable effort? | GREEN / YELLOW / RED |

### Step 4: Produce the Idea Viability Report

Format the report using the audience skill selected in Phase 0. Structure:

```
IDEA VIABILITY REPORT
=====================
Project: [name]
Date: [date]
Assessed by: SPARK Express Lane
Data Classification: [from Phase 0]
Language: [from Phase 0]

RECOMMENDATION: [GO / CONDITIONAL GO / NO-GO]

EXECUTIVE SUMMARY
[3-4 sentences: what the idea is, who it serves, the key finding, 
and the recommendation with primary reason]

VIABILITY SCORECARD
[The 5-criteria table from Step 3]

PROBLEM ANALYSIS
[2-3 paragraphs summarizing what was learned in discovery]

COMPETITIVE SNAPSHOT
[Table of 2-4 alternatives found, with source tier noted]
[What they do, where the gap is]

KEY RISKS
[2-3 specific risks with severity: High / Medium / Low]

RECOMMENDATION DETAIL
[GO]: "This idea has strong fundamentals. Recommended next step: 
enter the full SPARK pipeline starting at Phase 1 for deep discovery."

[CONDITIONAL GO]: "This idea has potential but [specific issue] 
needs resolution. Recommended: address [issue] then enter Phase 1. 
Alternatively, reframe as [suggestion]."

[NO-GO]: "Based on current evidence, [specific reason]. 
This does not mean the underlying need is invalid. Consider: 
[alternative framing or pivot suggestion]."

NEXT STEPS
[Specific actions, numbered, with owners if identifiable]
```

### Step 5: Conversion Gate

If the recommendation is GO or CONDITIONAL GO:

"This report can serve as the foundation for Handoff Document #1. Would you like to enter the full pipeline? If yes, I will expand this into a proper Phase 1 handoff document and we can proceed to Phase 2 (Market Analysis) -- either now or in a new session."

If the user says yes:
- Convert the Idea Viability Report into Handoff Document #1 format (matching the template from spark-phase-1-discovery)
- Fill in what is known, mark gaps explicitly as "[TO BE EXPLORED IN FULL PIPELINE]"
- Set version to v0.5 (indicating Express origin, not full discovery)

If the recommendation is NO-GO:

"Would you like to explore an alternative framing, or park this idea and test a different one?"

## Report Length

The full Idea Viability Report should be 400-800 words depending on complexity. This is not a full analysis -- it is a structured first look.

## Tone

Match the audience skill from Phase 0. Default: direct, evidence-based, constructive even when the recommendation is no-go. A no-go is not a rejection -- it is a service.

## Hard Rules

- Do NOT skip the competitive scan. Even a 2-minute search adds credibility.
- Do NOT give a GO recommendation purely to be encouraging. If the evidence is not there, say so.
- Do NOT produce the report without completing the 5 discovery questions. If the user wants to skip questions, explain: "Each question takes 30 seconds to answer and significantly improves the quality of the assessment."
- ALWAYS produce the report in the output format selected in Phase 0.
- ALWAYS tag the report with the data classification level from Phase 0.
- ALWAYS include the watermark footer per spark-brand requirements.

## Usage

User types: `/spark-express`
Or selected via "Express Lane" option during Phase 0 gate.
