---
name: spark-phase-1-discovery
description: Phase 1 of the SPARK pipeline. Discovery and idea sharpening through strategic dialogue. Deeply understands the product idea, its user, market context, and unfair advantage. Produces Handoff Document #1. Invoke with /spark-phase-1. Requires Phase 0 gate to be completed first.
argument_hint: Begin Phase 1 Discovery - strategic interview to sharpen the product idea
---

# Phase 1: Discovery and Idea Sharpening

## Objective

Deeply understand the product idea through strategic dialogue. By the end of this phase, you can describe the product, its user, its market context, and its unfair advantage in three sentences -- and have confidence those sentences are accurate.

## Prerequisites

Phase 0 gate MUST be completed. Session context (language, format, audience, role, data classification) must be established. If Phase 0 has not been completed, stop and run /spark-phase-0 first.

## Interview Philosophy

This is a conversation between two people trying to understand something clearly. Not a questionnaire.

Good discovery has a rhythm: open question, listen for actual content, probe the specific thing that deserves probing, synthesize.

The best follow-up to almost any answer is: "Tell me more about that." The second best is: "Why?"

Never ask more than two questions at once. If you have three things you want to know, pick the most important one. The second will come naturally from the first answer.

## Interview Architecture

Follow these layers IN ORDER. Do not skip layers. Adapt the specific questions based on context, but cover every layer.

### Layer 1: The Unfiltered Version

Open with: "Tell me about the idea -- what does it do, in plain language?"

Listen for: the core problem, the proposed mechanism, who it's for. Do not interrupt. Let them finish. Respond to what you actually heard, not what you expected to hear.

### Layer 2: Deepen the Problem

This is the MOST IMPORTANT layer. Spend the most time here.

Questions to cover (adapt wording to context, do not read as a list):
- "Who specifically experiences this? Not a demographic -- paint me a picture of one person."
- "How do they handle this today? Walk me through what they actually do, step by step."
- "What is the most painful moment in that process?"
- "How often does this happen? Daily frustration or quarterly nightmare?"
- "What have they already tried? Why did it not work well enough?"

### Layer 3: Stress-Test the Value

- "What makes you believe someone would pay for this -- or change their behavior for it?"
- "If that person sees your product for the first time, what is the moment they think 'yes, this is for me'?"
- "What is the simplest version that would still be genuinely valuable?"
- "What must this product do brilliantly, and what can be mediocre?"

### Layer 4: Explore the Landscape

- "Who else is solving this -- even partially, even differently?"
- "Why has this not been built yet, or if it has, why has it not succeeded?"
- "What gives you -- or this product -- the right to win in this space?"

### Layer 5: Scope the Prototype

- "If we could show someone a working version tomorrow, what are the 3 things it absolutely must demonstrate?"
- "What would success look like in 6 months? What number or behavior would tell you it is working?"

## Adversarial Validation

Before closing Phase 1, run the idea through these stress tests. Use judgment about which apply:

- **Crowded market test:** "If I searched the App Store or ProductHunt for this right now, what would I find?"
- **Behavior change test:** "What does the user have to stop doing, start doing, or do differently? Is that realistic?"
- **Distribution test:** "How do the first 100 users find this product?"
- **Monetization test:** "Would someone pay for this with their own money? How much?"
- **Timing test:** "Why now, when this might not have worked 3 years ago?"

You do not need perfect answers. But you need to know which questions are risks and whether those risks are acceptable.

## Kill Criteria

Not every idea deserves a spec. Be honest when you see:

- **Too few people affected:** Flag the small addressable population. Ask for evidence of scale.
- **Free dominant incumbent with no clear gap:** Name the competitor. State what 10x better would require.
- **User cannot articulate the customer:** Note this is usually a signal the problem is not sharp enough yet.
- **No differentiation from existing alternatives:** State this directly. Offer angles to explore.
- **Requires behavior change with no compelling trigger:** Name the change. Ask what drives it.

When recommending a stop or pivot, ALWAYS provide at least two constructive paths forward.

## Research Integration During Discovery

If you identify knowledge gaps during the interview:

- **Search immediately** when a quick web search can verify competitor existence, app store presence, or market signals. Share findings inline and incorporate.
- **Flag for Phase 2** when the gap requires deeper analysis (market sizing, competitor deep dive).
- **Prepare a research prompt** for gaps requiring structured external research outside SPARK.

## Role-Based Adaptation

Apply the role adaptation from Phase 0:
- C-Level executive: lighter interview, move to landscape faster
- Product manager: full interview depth
- Operations / team lead: process-focused questions
- Developer: allow technical detail
- Non-technical: translate all PM terminology inline

## Hard Gate (DO NOT PROCEED WITHOUT THIS)

Before producing the handoff document:

1. Summarize what you understood about the idea in 3-4 sentences.
2. State the biggest risk you see.
3. Ask the user: "Does this accurately reflect your vision? Is there anything here that would surprise your target user?"
4. Wait for explicit confirmation.
5. Only then produce Handoff Document #1.

DO NOT advance to Phase 2 without user confirmation. This gate is non-negotiable.

## Output: Handoff Document #1

Apply spark-brand formatting rules. Use the handoff template from spark-core. Phase-specific content:

```markdown
# SPARK -- Handoff Document #1: Idea Definition
<!-- Project: [name] | Phase 1 of 9 | Version: 1.0 | Date: [date] -->
<!-- Generated with SPARK -- PassportCard Internal Use Only -->

## Session Context
[Carried from Phase 0]

## Agent Instructions
- **Project name:** [name]
- **Phase completed:** 1 -- Discovery and Idea Sharpening
- **Next phase:** 2 -- Market and Competitive Analysis
- **Document version:** 1.0
- **Session summary:** [2-3 sentences: what was established, challenged, and survived]
- **Key decisions locked:** [list]
- **Open questions for Phase 2:** [specific items, not vague]
- **Risks identified:** [concerns flagged during discovery]
- **Previous handoffs:** Phase 0 context embedded above

## Decision Log
| Decision | Alternatives Considered | Rationale | Decided By |
|----------|------------------------|-----------|------------|

## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [date] | Initial creation |

## Work Product: Idea Definition

### The Problem
[Specific, evidence-informed problem statement. Who experiences it, how often, what the consequences are, why existing solutions fail. 2-4 sentences.]

### Target User
[One primary persona. Not a demographic -- a person. Name, role, context, specific frustrations, current workarounds, what would make them switch. 3-5 sentences.]

### Proposed Solution
[What the product does, in plain language. No buzzwords. 2-3 sentences.]

### Core Value Proposition
[The unfair advantage -- why this product, for this user, beats everything else. Be specific about the mechanism, not just the outcome. 2-3 sentences.]

### Must-Have Features (for prototype)
1. [Feature] -- [Why essential: what breaks if missing]
2. [Feature] -- [Why essential]
3. [Feature] -- [Why essential]
[Max 5. Ranked by priority.]

### Nice-to-Have Features
- [Feature] -- [Why it matters but can wait]

### Kill Criteria Assessment
- Crowded market risk: [low/medium/high] -- [reasoning]
- Behavior change required: [yes/no] -- [what and how realistic]
- Distribution path: [clear/unclear] -- [first 100 users strategy]
- Monetization confidence: [high/medium/low] -- [reasoning]

### Initial Success Metrics
- [Metric] -- [why this one, what good looks like]

### Assumptions to Validate
- [Assumption] -- [how we would test it]

### Research Conducted in Phase 1
- [Source] (Tier [1/2/3]): [key finding]
(or: "No external research conducted -- see Open Questions for Phase 2")
```

## After Producing the Handoff

Tell the user:
"Here is your Phase 1 handoff document. Download it. When you are ready for Phase 2, open a new conversation, upload this document, and invoke /spark-phase-2. I will pick up exactly where we left off."
