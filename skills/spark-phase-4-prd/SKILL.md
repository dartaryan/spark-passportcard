---
name: spark-phase-4-prd
description: Phase 4 of the SparkKit pipeline. Assembles all previous handoff documents into a professional Brief + PRD document meeting international best-practice standards. Runs conflict detection across all prior phases before writing. Produces Handoff Document #4. Invoke with /spark-phase-4. Requires Handoff Documents #1, #2, #2.5, and #3.
argument_hint: Begin Phase 4 Brief + PRD - assemble strategy and requirements document
---

# Phase 4: Brief + PRD Document

> **Reminder:** Spark guides. SparkKit skills structure. Neither executes. If the user asks you to build, code, deploy, or execute - redirect to the interview and planning process. Your deliverable is a handoff document, not a working product.

## Objective

Produce a professional Brief + PRD document that a product leader at any international tech company could read and immediately understand what to build, why, and how to measure success.

## Prerequisites

User MUST upload ALL handoff documents (#1, #2, #2.5, #3). Read all fully. If any document is missing, stop and ask for it. Do not proceed without the complete set.

## MANDATORY: Pre-Assembly Conflict Detection

Before writing ANYTHING, cross-reference all handoff documents:

1. **Persona consistency:** Is the target user described the same way across all phases? Vocabulary, role, pain points.
2. **Positioning alignment:** Does Phase 2 positioning align with Phase 3 features?
3. **Framework incorporation:** Are Phase 2.5 adopted frameworks reflected in Phase 3 scope?
4. **Feature survival:** Did features from Phase 1 survive or get explicitly deprioritized?
5. **Regulatory coherence:** Are Phase 2.5 hard constraints reflected in Phase 3?

If contradictions are found, present them to the user BEFORE proceeding:
"Before I assemble the Brief + PRD, I noticed [specific tension between documents]. Should we resolve this before assembly, or note it as an open question in the PRD?"

Wait for resolution. Do not proceed with known contradictions unless the user explicitly acknowledges them.

## Document Scale Guidelines

| Product Complexity | Brief Length | PRD Length |
|-------------------|-------------|-----------|
| Simple (1-2 core features, clear precedent) | 600-900 words | 1,500-2,500 words |
| Mid-complexity (3-5 features, some novel elements) | 800-1,200 words | 2,500-3,500 words |
| Complex (6+ features, novel architecture, regulated domain) | 1,200-1,800 words | 3,500-5,000 words |

## Output: Handoff Document #4

Apply spark-brand formatting rules. Use the handoff template from spark-core. The Brief + PRD content lives inside the standard handoff wrapper as the Work Product section.

```markdown
# SparkKit -- Handoff Document #4: Brief + PRD
<!-- Project: [name] | Phase 4 of 9 | Version: 1.0 | Date: [date] -->
<!-- Generated with SparkKit -- PassportCard Internal Use Only -->

## Session Context
[Carried from Phase 0 via previous handoff documents]

## Agent Instructions
- **Project name:** [name]
- **Phase completed:** 4 -- Brief + PRD Document
- **Next phase:** 5 -- Working HTML Prototype
- **Document version:** 1.0
- **Session summary:** [2-3 sentences: what was assembled, conflicts resolved, key framing decisions]
- **Key decisions locked:**
  - Final positioning: [statement]
  - Final feature scope (v1): [summary]
  - Adopted frameworks incorporated: [list]
- **Open questions for Phase 5:** [specific items]
- **Regulatory hard constraints carried forward:** [list or "None identified"]
- **Previous handoffs:** Builds on Documents #1, #2, #2.5, and #3

## Decision Log
| Decision | Alternatives Considered | Rationale | Decided By |
|----------|------------------------|-----------|------------|

## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [date] | Initial creation |

## Work Product: Brief + PRD

---

### SECTION A: PRODUCT BRIEF (Strategic Summary)

# [Product Name] -- Product Brief

## Executive Summary
[2-3 sentences: what it is, who it is for, why now]

## Problem Statement
[Evidence-backed problem statement from Phase 1. Quantitative data if available, qualitative from research.]

## Target Audience

### Primary Persona: [Name]
- **Demographics:** [Age, role, context]
- **Pain Points:** [Specific frustrations]
- **Current Solutions:** [How they solve this today]
- **Why They Would Switch:** [The trigger]

### Secondary Persona: [Name] (if applicable)

## Value Proposition
[Clear, compelling statement of unique value]

## Market Opportunity
- **Market Size:** [TAM/SAM/SOM if data available, or qualitative assessment]
- **Growth Signals:** [Trends, data points from Phase 2]
- **Timing:** [Why now]

## Competitive Landscape
[Positioning summary from Phase 2 + comparison table]

## Adopted Industry Frameworks
[Summary of Phase 2.5 decisions: what external best practices were incorporated and why]

## Success Metrics
| Metric | Target | Timeframe |
|--------|--------|-----------|
| [KPI] | [Target] | [When] |

## Go-to-Market Summary
[Initial distribution strategy]

---

### SECTION B: PRODUCT REQUIREMENTS DOCUMENT (Detailed Spec)

# [Product Name] -- Product Requirements Document

## Overview and Background
[Context: why this document exists, what led to this product decision]

## Goals and Non-Goals

### Goals
1. [Specific, measurable goal]

### Non-Goals (Explicit)
1. [What this product intentionally does NOT do]

## User Stories and Epics

### Epic 1: [Name]
**User Story:** As a [persona], I want to [action] so that [benefit]
**Acceptance Criteria:**
- [Criterion with clear pass/fail definition]

[Repeat for each epic]

## Functional Requirements

### [Feature 1]
- **Description:** [Detailed behavior]
- **Inputs:** [What the user provides]
- **Outputs:** [What the system returns]
- **Edge Cases:** [Unusual inputs]
- **Dependencies:** [What this relies on]

[Repeat for each feature]

## Non-Functional Requirements
- **Performance:** [Speed, load time expectations]
- **Security:** [Data handling, authentication -- reference enterprise standards]
- **Accessibility:** WCAG 2.1 AA compliance minimum
- **Localization:** [Language/RTL support needs]
- **Scalability:** [Growth expectations]

## Regulatory and Compliance Requirements
[From Phase 2.5: specific obligations per jurisdiction. These are HARD CONSTRAINTS.]
(or: "None identified at this stage.")

## UX/UI Guidelines
- **Design Inspiration:** [From Phase 3]
- **Brand:** PassportCard identity per spark-brand (if applicable)
- **Key Principles:** [3-4 design principles]
- **Reference:** See accompanying HTML prototype (Phase 5)

## Technical Considerations
[Constraints, recommended stack, integration needs, development language preference from Phase 3]

## Risks and Mitigations
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| [Risk] | [H/M/L] | [H/M/L] | [Strategy] |

## Timeline and Milestones
| Milestone | Description | Target |
|-----------|------------|--------|

## Open Questions
- [Questions still needing answers]

## Document History
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | SparkKit + [User] | Initial version |
```

## Hard Gate (DO NOT PROCEED WITHOUT THIS)

After producing the Brief + PRD:

1. Present the complete document.
2. Ask: "Review this Brief + PRD. Does it accurately capture everything we discussed? Any sections that need revision?"
3. Iterate based on feedback. This may take 1-2 rounds.
4. When the user approves, ask: "Ready to proceed to Phase 5 (Working HTML Prototype)?"
5. Wait for explicit confirmation before advancing.

DO NOT advance to Phase 5 without user approval of the Brief + PRD. This gate is non-negotiable.

## After Approval

Tell the user:
"Your Brief + PRD is finalized. Download it. When you are ready for Phase 5 (Working HTML Prototype), open a new conversation, upload all handoff documents including this one, and invoke /spark-phase-5."