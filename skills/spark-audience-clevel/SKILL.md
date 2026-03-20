---
name: spark-audience-clevel
description: Output formatting skill for C-Level executive audience. Applies function-specific framing per role - CFO gets ROI/NPV/payback, CTO gets architecture/integration/scalability, COO gets process impact/operational readiness, CMO gets market positioning/customer impact. Activates when Phase 0 audience is set to C-Level Executives.
disable_model_invocation: false
---

# Audience Skill: C-Level Executives

## When This Activates

This skill activates when the target audience selected in Phase 0 is "C-Level Executives". It governs the structure, tone, depth, and format of ALL outputs for the remainder of the session.

## Core Principle: Function-Specific Language

C-Level executives read through the lens of their function. A generic "AI will improve efficiency" means nothing. The same initiative must be framed differently for each role. This skill adapts every deliverable to speak the language of the recipient's domain.

## Communication Framework

### Step 1: Identify the Recipient's Function

Before producing any output, confirm which C-Level role(s) will receive it. If multiple roles, produce a combined document with clearly labeled sections per function.

Supported functions and their primary decision lenses:

| Role | Primary Lens | They Ask | They Measure |
|------|-------------|----------|-------------|
| CFO | Financial return | "What does this cost and what do we get back?" | ROI, NPV, payback period, cost avoidance, budget impact |
| CTO | Technical architecture | "How does this fit our stack and scale?" | Integration complexity, tech debt impact, scalability, security posture |
| COO | Operational process | "How does this change how we work?" | Process cycle time, headcount impact, SLA changes, operational risk |
| CMO | Market and customer | "How does this affect our position and customers?" | Customer experience metrics, competitive differentiation, brand impact |
| CHRO | People and organization | "How does this affect our workforce?" | Training requirements, role changes, hiring needs, employee sentiment |
| CRO | Revenue and growth | "How does this drive top-line?" | Revenue impact, conversion rates, pipeline velocity, deal size |
| CLO/GC | Legal and compliance | "What are the regulatory and legal implications?" | Compliance requirements, liability exposure, regulatory timeline |

### Step 2: Apply Function-Specific Structure

#### CFO Deliverable Structure

1. **Financial Summary** -- Investment required, expected returns, payback timeline. Lead with the numbers.
2. **Cost-Benefit Table:**

| Item | Year 1 | Year 2 | Year 3 | Assumptions |
|------|--------|--------|--------|-------------|
| Investment | [amount] | [amount] | [amount] | [stated] |
| Cost Avoidance | [amount] | [amount] | [amount] | [stated] |
| Revenue Impact | [amount] | [amount] | [amount] | [stated] |
| Net Impact | [amount] | [amount] | [amount] | -- |

3. **ROI Calculation** -- Show the math. State assumptions explicitly. Provide sensitivity ranges (optimistic / base / conservative).
4. **Budget Implications** -- Where does this sit in the current budget? Capital vs. operational expenditure. Approval thresholds.
5. **Risk Quantification** -- Financial downside scenario. Cost of delay. Cost of inaction.
6. **Recommendation** -- Approve / defer / phase, with financial rationale.

#### CTO Deliverable Structure

1. **Architecture Overview** -- How the proposed solution fits the existing technology landscape. Diagram if appropriate.
2. **Integration Assessment:**

| System | Integration Type | Complexity | Risk | Timeline |
|--------|-----------------|------------|------|----------|
| [existing system] | API / SDK / File / Manual | Low / Medium / High | [specific] | [estimate] |

3. **Technical Requirements** -- Stack, infrastructure, dependencies, security, data flows.
4. **Scalability Analysis** -- Current load, projected growth, capacity headroom, bottleneck points.
5. **Tech Debt Impact** -- Does this add or reduce tech debt? Quantify where possible.
6. **Build vs. Buy Assessment** -- If applicable, provide TCO comparison with timeline and team requirements.
7. **Security and Compliance** -- Data handling, access controls, regulatory technical requirements.
8. **Recommendation** -- Proceed / adjust architecture / defer, with technical rationale.

#### COO Deliverable Structure

1. **Process Impact Summary** -- Which operational processes change, how, and what the expected improvement is.
2. **Current vs. Future State:**

| Process | Current State | Future State | Improvement | Transition Risk |
|---------|--------------|-------------|-------------|-----------------|
| [process name] | [metric] | [target metric] | [delta] | [risk level] |

3. **Operational Readiness Assessment** -- Team capacity, training needs, process documentation requirements, change management.
4. **SLA and Performance Impact** -- How service levels change during transition and after stabilization.
5. **Headcount Implications** -- Role changes, redeployment, new skills required. Frame constructively: "enables team to shift from X to higher-value Y."
6. **Rollout Plan** -- Phased implementation with milestones, rollback triggers, and success criteria per phase.
7. **Recommendation** -- Proceed with phase plan / pilot first / defer, with operational rationale.

#### CMO Deliverable Structure

1. **Market Positioning Impact** -- How this initiative changes PassportCard's competitive position. What story does it tell?
2. **Customer Experience Analysis:**

| Touchpoint | Current Experience | Improved Experience | Customer Value |
|-----------|-------------------|-------------------|---------------|
| [touchpoint] | [description] | [description] | [quantified if possible] |

3. **Competitive Differentiation** -- What can PassportCard claim that competitors cannot? Time advantage.
4. **Brand Implications** -- Does this strengthen or risk the brand? External communication opportunities.
5. **Customer Communication Plan** -- How and when customers learn about changes. Messaging framework.
6. **Recommendation** -- Proceed / adjust messaging / defer, with market rationale.

#### CHRO Deliverable Structure

1. **Workforce Impact Summary** -- Roles affected, skills gaps, training timeline.
2. **Role Evolution Map:**

| Current Role | Future Role | Skills Gap | Training Path | Timeline |
|-------------|-------------|-----------|---------------|----------|
| [role] | [evolved role] | [specific skills] | [training approach] | [duration] |

3. **Change Management Requirements** -- Communication plan, resistance points, champion identification.
4. **Hiring Implications** -- New roles, market availability, compensation benchmarks.
5. **Recommendation** -- Proceed with change plan / pilot with one team / defer, with people rationale.

#### Multi-Role Deliverable Structure

When the audience includes multiple C-Level roles, structure the document as:

1. **Shared Executive Summary** -- 200 words maximum. The initiative, the ask, the timeline.
2. **Section per Function** -- Each labeled clearly (e.g., "Financial View - CFO", "Technical View - CTO"). Each follows its respective structure above.
3. **Shared Decision Required** -- What the leadership team collectively needs to approve.
4. **Shared Timeline** -- Single integrated timeline showing dependencies across functions.

### Tone

- **Domain-fluent.** Use each function's native vocabulary. ROI and IRR for CFO. REST APIs and microservices for CTO. NPS and CAC for CMO.
- **Peer-level.** Write as a senior advisor addressing a peer, not as a subordinate reporting up.
- **Concise but complete.** Each section should be self-contained. A CTO should not need to read the CFO section to understand the technical recommendation.
- **Quantified.** Numbers, ranges, and confidence indicators (Verified / Estimated / Insufficient Data) on all claims.
- **Direct.** State the recommendation clearly. Do not hide it behind "options to consider."

### Length Constraints

| Format | Maximum |
|--------|---------|
| Single-function document | 2-3 pages |
| Multi-function document | 1-2 pages per function + shared sections |
| Presentation | 10-14 slides (2-3 per function + shared) |
| Email/memo | 400 words per function |
| Executive summary | 200 words (shared) |

### What to Exclude

- Generic benefits not mapped to the specific function's metrics
- Detailed implementation steps (move to appendix or link to team-level deliverable)
- Cross-functional detail that belongs in another section
- Unquantified claims ("significant improvement" without a number or range)

### What to Always Include

- Function-specific metrics and KPIs affected
- Timeline with milestones relevant to that function
- Risk assessment specific to that function's domain
- Clear recommendation with rationale in the function's language
- One insight the recipient might not be seeing (Ben's "important note" pattern)

## Format-Specific Rules

### For PowerPoint
- Action titles per slide. Function label in subtitle ("Financial Analysis - CFO Review").
- Dedicated slides per function, not mixed.
- One key message per slide.
- Apply spark-brand palette.
- Speaker notes with function-specific talking points.

### For Word/PDF
- Table of contents with function sections clearly labeled.
- Shared executive summary on page 1.
- Function sections follow, each self-contained.
- Apply spark-brand formatting.

### For HTML
- Tab-based layout: one tab per function for multi-role deliverables.
- Key metrics dashboard at top.
- Apply spark-brand CSS.

## Golden Standard Reference

Before producing any C-Level deliverable:
- **CFO outputs:** Apply standard financial analysis frameworks (DCF, NPV, IRR where applicable). Reference finance best practices from consulting knowledge base.
- **CTO outputs:** Reference architecture decision record (ADR) format. Apply TOGAF or similar enterprise architecture principles where relevant.
- **COO outputs:** Apply process improvement frameworks (Lean, Six Sigma principles where relevant). Focus on measurable operational metrics.
- **CMO outputs:** Apply positioning frameworks (competitive differentiation, value proposition design). Reference market analysis best practices.
- Search consulting firm knowledge base (references/authoritative-sources.md) for domain-specific best practices before generating output.
