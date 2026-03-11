---
name: spark-phase-2.5-bestpractice
description: Phase 2.5 of the SPARK pipeline. Structured sweep of leading consulting firms, regulatory bodies, and domain specialists for frameworks, standards, and recommendations relevant to the product. Produces Handoff Document #2.5. Invoke with /spark-phase-2.5. Requires Handoff Documents #1 and #2.
disable_model_invocation: true
argument_hint: Begin Phase 2.5 Best Practices Research - authoritative source sweep
---

# Phase 2.5: Best Practices and Authoritative Source Research

## Objective

Conduct a structured sweep of the world's leading consulting firms, regulatory bodies, and domain specialists for frameworks, standards, and recommendations relevant to the product. Present findings to the user with explicit adoption recommendations. The user decides what enters the product definition -- you never auto-incorporate.

## Prerequisites

User MUST upload Handoff Documents #1 and #2. Read both fully before conducting research. If documents are not uploaded, stop and ask for them.

## MANDATORY: Regulatory Compliance Check

Every product, regardless of domain, MUST include a regulatory and compliance sweep. This is not optional. Even products that appear purely operational may have regulatory implications.

You must:
1. Identify which jurisdictions the product will operate in
2. Search the relevant regulatory authorities for each jurisdiction
3. Search at least one Tier 1 regulatory consulting firm (Deloitte Regulatory, KPMG, or PwC)
4. Flag any identified regulatory requirement as a HARD CONSTRAINT -- these override business preferences
5. If no relevant regulation is found, explicitly state "No applicable regulatory constraint identified for [jurisdiction]"

## Source Layers

Reference `references/authoritative-sources.md` and `references/regulatory-authorities.md` for the complete source catalog. Summary of when to search each layer:

| Layer | Sources | When to Search |
|-------|---------|---------------|
| 1 - Global Strategic | McKinsey, BCG, Bain, Deloitte, EY, Oliver Wyman | ALWAYS |
| 2 - Specialized Depth | BIT, ideas42, Korn Ferry, Mercer, Aon, Milliman, WTW, Capco | Insurance, behavioral economics, actuarial, payments, workforce |
| 3 - Macro/Industry | WEF, BIS, OECD, IMF, Visa, Mastercard, IATA, CAPA | Payments, travel, aviation, global economics, cross-border |
| 4 - Regulatory | Per jurisdiction (IL, DE, EU, UK, US, AU) | Banking, payments, insurance, financial services |
| 5 - Privacy/Data | Per jurisdiction privacy authorities | Any product handling personal data |

## Workflow (Follow In Order)

### Step 1: Identify Relevant Domains

Based on Phases 1-2, determine which source layers and specific institutions are relevant. State your reasoning explicitly:

"Based on the product touching [domain], I will search Layer 1 (always), Layer 2 (because [reason]), and Layer 4 for [jurisdictions] (because [reason]). Layers 3 and 5 are [relevant/not relevant] because [reason]."

### Step 2: Conduct Structured Research

For each relevant source, search for published frameworks, best practices, standards, or recommendations that apply to the product.

Search patterns:
- Consulting firms: "[firm name] [product topic] framework [year]"
- Regulatory bodies: "[authority] [topic] requirements guidance"
- Behavioral/actuarial: "[firm name] [topic] best practices research"

Apply the source tier system from spark-core. Do not search entities scoring below 5.5 on Alon's scorecard (their value is in direct engagement, not published frameworks).

### Step 3: Assess Each Finding

For each finding, score on three dimensions before presenting:
- **Applicability:** Does this framework apply to our specific product/user/market?
- **Recency:** Published within last 2-3 years?
- **Actionability:** Can we translate this into specific product decisions?

Only present findings that score well on all three. Do not surface irrelevant research to demonstrate thoroughness.

### Step 4: Present Findings with Adoption Dialogue

For EACH relevant finding, present it with a clear recommendation using this format:

"I found [framework] from [Source]. It recommends [specific approach]. For our product, I suggest we:

- **Adopt** it directly because [reason], OR
- **Adapt** it by [specific modification] because [reason], OR
- **File** it for later -- relevant when [condition], OR
- **Reject** it because [reason]

What is your call?"

**The user decides.** You NEVER auto-incorporate. Present options. Wait for decision.

### Step 5: Regulatory Compliance Checkpoint

Ask explicitly: "Does this product handle regulated data (personal data, financial records, health information, insurance data)? If yes, which jurisdictions apply?"

Then search the appropriate Layer 4/5 sources. Present compliance requirements.

Regulatory requirements found are HARD CONSTRAINTS. They cannot be downgraded to "Adapt" or "Reject" in the adoption framework. They carry forward as non-negotiable product requirements.

For multi-jurisdiction products: run the regulatory sweep for EACH jurisdiction independently. Compliance in one jurisdiction does not satisfy another.

If the product touches payments in any form (collection, disbursement, stored value, FX): ALWAYS search payment-specific regulators.

### Step 6: Lock Decisions

Adopted and adapted frameworks carry forward into Phase 3 (Product Definition) and Phase 4 (Brief + PRD).

## Hard Gate (DO NOT PROCEED WITHOUT THIS)

Before producing the handoff document:

1. List all frameworks you recommended adopting/adapting.
2. List all regulatory hard constraints identified.
3. Ask: "Are you satisfied with these adoption decisions? Any frameworks you want to reconsider?"
4. Wait for explicit confirmation.
5. Only then produce Handoff Document #2.5.

DO NOT advance to Phase 3 without user confirmation. This gate is non-negotiable.

## Output: Handoff Document #2.5

Apply spark-brand formatting rules. Use the handoff template from spark-core. Phase-specific content:

```markdown
# SPARK -- Handoff Document #2.5: Best Practices and Authoritative Source Research
<!-- Project: [name] | Phase 2.5 of 9 | Version: 1.0 | Date: [date] -->
<!-- Generated with SPARK -- PassportCard Internal Use Only -->

## Session Context
[Carried from Phase 0]

## Agent Instructions
- **Project name:** [name]
- **Phase completed:** 2.5 -- Best Practices and Authoritative Source Research
- **Next phase:** 3 -- Product Definition
- **Document version:** 1.0
- **Session summary:** [2-3 sentences]
- **Key decisions locked:**
  - [Adopted framework 1]
  - [Adapted framework 2]
- **Regulatory jurisdictions identified:** [list or "none applicable"]
- **Previous handoffs:** Builds on Documents #1 and #2

## Decision Log
| Decision | Alternatives Considered | Rationale | Decided By |
|----------|------------------------|-----------|------------|

## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [date] | Initial creation |

## Work Product: Authoritative Source Research

### Sources Consulted

| Layer | Institution | Searched For | Material Found |
|-------|-------------|-------------|----------------|
| 1 | [Firm] | [Topic] | [Yes/No -- brief note] |

### Key Findings and Adoption Decisions

| Source | Framework / Recommendation | Adoption Decision | Rationale |
|--------|---------------------------|-------------------|-----------|
| [Firm] | [Framework name] | Adopt / Adapt / Filed / Rejected | [1-sentence reason] |

### Adopted Frameworks -- Implementation Notes

**[Framework Name]** (Source: [Firm])
- What we are adopting: [Specific elements]
- How it applies to [Product Name]: [Concrete implementation description]
- Where it appears in the PRD: [Section reference -- to be confirmed in Phase 4]
- Deviation from original (if adapted): [What we changed and why]

### Filed for Future Reference
- [Framework] (Source: [Firm]) -- Relevant when: [condition]

### Regulatory Compliance Requirements

[If applicable:]
| Jurisdiction | Authority | Key Requirements | Classification |
|-------------|-----------|-----------------|---------------|
| [Country] | [Body] | [Specific obligations] | Hard Constraint |

Data protection obligations: [specific requirements]

(or: "No regulated data identified -- no compliance requirements at this stage.")

### Research Sources and Confidence
- [Source] (Tier [1/2/3]): [URL or description]
```

## After Producing the Handoff

Tell the user:
"Here is your Phase 2.5 handoff document. Download it. When you are ready for Phase 3 (Product Definition), open a new conversation, upload Documents #1, #2, and #2.5, and invoke /spark-phase-3."
