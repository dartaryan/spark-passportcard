---
name: spark-compliance
description: Regulatory compliance sweep and guardrail skill. Conducts mandatory regulatory authority searches by jurisdiction, applies source tier system, flags hard constraints, provides escalation paths, and enforces hallucination safeguards on market data. Activates automatically for CONFIDENTIAL and RESTRICTED products. Can be invoked manually for any product.
disable_model_invocation: false
---

# Compliance Skill: Regulatory Sweep & Guardrails

## When This Activates

- **Automatically** for products classified as CONFIDENTIAL or RESTRICTED (set by spark-data-classification in Phase 0).
- **Manually** when a user or phase skill invokes it for regulatory guidance.
- **Mandatory** during Phase 2.5 (Best Practices Research) for ALL products regardless of classification -- every product gets at minimum a jurisdiction check.

## Regulatory Sweep Process

### Step 1: Identify Jurisdictions

Before any regulatory search, confirm which jurisdictions the product will operate in. PassportCard's primary markets:

| Code | Jurisdiction | Notes |
|------|-------------|-------|
| IL | Israel | Home market. CMISA is primary insurance regulator. |
| DE | Germany | Major European market. BaFin + EU regulations apply. |
| EU | European Union | Applies to all EU operations. EIOPA, EBA, EDPB. |
| UK | United Kingdom | Post-Brexit separate regime. FCA, PRA, PSR, ICO. |
| US | United States | Federal + state. NAIC coordinates, but each state has own regulator. |
| US-NY | New York | Strictest US state. NYDFS cybersecurity rules (23 NYCRR 500). |
| US-CA | California | CCPA/CPRA privacy. DOI for insurance. DFPI for financial. |
| US-FL | Florida | OIR for insurance. OFR for financial. |
| AU | Australia | APRA, ASIC, RBA, OAIC, ACCC. |

Ask the user: "Which markets will this product operate in?" If they say "all PassportCard markets," search IL, DE, EU, UK, US, AU.

### Step 2: Mandatory Regulatory Authority Search

For EACH identified jurisdiction, search ALL listed regulatory authorities for that jurisdiction. This is not optional -- even if the product seems unregulated.

**Israel:**
- CMISA (Insurance, Pension, Non-Bank Lending, Payments)
- Bank of Israel Banking Supervision (Banking, Payment Systems)
- ISA (Payment Services Licensing, Securities, Open Banking)
- Privacy Protection Authority (Data Protection, Privacy)

**Germany:**
- BaFin (Insurance, Banking, Securities, Payments, Consumer Protection)
- Deutsche Bundesbank (Payment Systems, Financial Stability)
- BfDI (GDPR Enforcement, Privacy)

**European Union (applies to DE and all cross-border):**
- EIOPA (Insurance Supervision, Solvency II, IDD)
- EBA (Banking Regulation, PSD2/PSD3, AML)
- EDPB (GDPR Enforcement, Cross-Border Data, Privacy)
- ECB Banking Supervision (SSM, Financial Stability)

**United Kingdom:**
- FCA (Insurance Conduct, Payments, Consumer Duty, Open Banking)
- PRA (Insurance Prudential, Solvency UK, Capital)
- PSR (Payment Systems, Interchange Fees, APP Fraud)
- ICO (UK GDPR, Data Protection, AI Code of Practice)

**United States -- Federal:**
- NAIC (Insurance Model Laws, State Coordination)
- Federal Reserve (Banking, Payment Systems, FedNow)
- CFPB (Consumer Finance, Payments, BNPL, Open Banking Section 1033)
- FTC (Privacy, Consumer Protection, Data Security, AI)
- OCC (National Banks, FinTech Charters)
- FDIC (Deposit Insurance, Bank Resolution)

**United States -- State (when product targets specific state):**
- NYDFS (Insurance, Cybersecurity 23 NYCRR 500, BitLicense)
- California DOI (Insurance Regulation, Rate Filings)
- California DFPI (Financial Protection, Payments, Lending)
- CPPA (CCPA/CPRA Enforcement, Automated Decision-Making)
- Florida OIR (Insurance Regulation, Property, Catastrophe)

**Australia:**
- APRA (Insurance, Banking, Prudential Supervision)
- ASIC (Financial Services, Consumer Protection, Payments)
- RBA (Payment Systems Regulation, Financial Stability)
- OAIC (Privacy, Australian Privacy Principles)
- ACCC (Consumer Protection, Competition, Digital Platforms)

### Special Rule: Payments

If the product touches payments in ANY form (collection, disbursement, stored value, foreign exchange, prepaid cards), ALWAYS search payment-specific regulators regardless of which jurisdictions were selected:
- IL: ISA, Bank of Israel
- DE: BaFin
- UK: FCA, PSR
- US: CFPB, Federal Reserve
- AU: RBA, ASIC

PassportCard's prepaid card model makes this particularly relevant.

### Step 3: Search Consulting Firms for Regulatory Guidance

After searching regulatory authorities, search at least ONE Tier 1 regulatory consulting firm to validate findings and identify additional implications:

- Deloitte Regulatory (Score: 8.5, ★★★)
- KPMG Insurance (Score: 8.0, ★★)
- PwC Insurance Regulatory (Score: 7.8, ★★)

Add regional consulting firms when product targets specific markets (see references/scorecard.md for full list with scores).

### Step 4: Present Findings

Structure regulatory findings as a table:

| Jurisdiction | Authority | Requirement Found | Type | Impact on Product | Confidence |
|-------------|-----------|------------------|------|-------------------|-----------|
| [code] | [name] | [specific requirement] | Hard Constraint / Advisory / Monitoring | [what must change in the product] | Verified / Estimated / Insufficient Data |

**Hard Constraint** = Product MUST comply. Overrides business preferences. Cannot be downgraded to "Adapt" or "Reject" in the adoption framework.

**Advisory** = Best practice or emerging regulation. Product SHOULD comply. Can be deferred with documented rationale.

**Monitoring** = Upcoming regulation or regulatory trend. No current requirement but may become mandatory. Flag for future review.

### Step 5: No-Result Protocol

If a regulatory search returns no relevant requirements for a jurisdiction:

"No applicable regulatory constraint identified for [jurisdiction] in the context of [product type]. This has been documented. Note: absence of published guidance does not guarantee absence of regulation -- if this product will operate at scale in [jurisdiction], recommend consulting local legal counsel."

NEVER silently skip a jurisdiction. Always state the result, even if it is "nothing found."

## Hallucination Safeguards

### Confidence Indicators (MANDATORY on all quantitative claims)

Every number, statistic, market size, or quantitative claim in ANY SparkKit output must carry a confidence indicator:

| Indicator | Meaning | When to Use |
|-----------|---------|-------------|
| **Verified** | Sourced from Tier 1 or Tier 2 source. URL available. | Data directly from official publications, credible journalism, or company disclosures. |
| **Estimated** | Inferred from available data with stated methodology. | Calculations derived from verified inputs. E.g., "Based on 500 claims/day at $3,000 average = $1.5M daily volume (Estimated)." |
| **Insufficient Data** | Cannot verify. Search returned no credible source. | When the tool cannot find data through search. MUST say so rather than guessing. |

### Source Tier Enforcement

| Tier | Sources | Usage Rule |
|------|---------|-----------|
| Tier 1 (high confidence) | Regulatory authority publications, official product pages, verified funding data, published standards, SEC filings | Can drive strategic recommendations. |
| Tier 2 (medium confidence) | Recent credible journalism, company blogs, analyst reports, consulting firm white papers | Can support recommendations. Flag source. |
| Tier 3 (low confidence) | Forum posts, review aggregators, secondhand summaries | NEVER drive strategic recommendations. Use only for color/context, always flagged. |

### Anti-Hallucination Rules

- If you cannot find a source for a claim, DO NOT make the claim. Say: "I was unable to verify [specific data point] through search. This needs manual verification."
- When citing market sizes, growth rates, or competitive data, always include the source and date.
- Do not round numbers to make them look cleaner. If the source says 37.2%, say 37.2%, not "approximately 40%."
- If two sources conflict, present both with their sources and let the user decide which to use.
- Never invent company names, product names, or executive quotes.

## Scope & Authority Checkpoint

### Between Phase 6 and Phase 7

When a project moves from strategy/prototype phases into development phases, display this checkpoint:

```
SCOPE & AUTHORITY CHECKPOINT
--------------------------------------------------
Moving into development phases requires:
1. Budget approval per PassportCard governance
2. Engineering capacity allocation
3. Data classification review (current: [LEVEL])
4. Regulatory requirements confirmed and documented

Please confirm:
- Do you have authorization to proceed into development?
- Has the budget been approved?
- Has the relevant team lead signed off?

Type "confirmed" to proceed, or describe what is still pending.
--------------------------------------------------
```

Do NOT advance to Phase 7 without explicit confirmation.

## Escalation Paths

When the compliance skill identifies a regulatory concern, competitive threat, or viability risk, recommend specific escalation:

```
ESCALATION RECOMMENDED
--------------------------------------------------
Issue: [specific concern]
Severity: [High / Medium / Low]
Recommended escalation:
  - For compliance/regulatory: PassportCard Compliance Lead
  - For AI-specific concerns: PassportCard AI Lead
  - For legal review: PassportCard Legal Counsel
  - For budget/authorization: Direct manager

This recommendation is logged in the handoff document 
decision trail.
--------------------------------------------------
```

Escalation contacts are role-based defaults. Ask the user: "Who should I direct compliance escalations to at PassportCard? The defaults are Compliance Lead, AI Lead, Legal Counsel, and your direct manager."

## Audit Trail Requirements

Every handoff document produced when this skill is active must include a decision log section:

```
DECISION LOG
--------------------------------------------------
Phase [N] | [date]

Decisions made:
1. [Decision] -- Alternatives considered: [list]. 
   Selected because: [rationale]. Participants: [names/roles].

2. [Decision] -- Alternatives considered: [list].
   Selected because: [rationale]. Participants: [names/roles].

Regulatory constraints applied:
- [Constraint from jurisdiction] -- Source: [authority, URL]
- [Constraint from jurisdiction] -- Source: [authority, URL]

Open regulatory questions:
- [Question] -- Assigned to: [name/role], Due: [date]
--------------------------------------------------
```

This enables compliance officers to reconstruct rationale without re-reading full conversations.

## Output Watermarking

ALL documents produced when this skill is active carry the footer:

```
Generated with SparkKit (PassportCard Builder) — Internal Use Only
AI-assisted analysis — review by [appropriate function] required before external distribution
Data Classification: [LEVEL] | Generated: [date]
```

For RESTRICTED products, add:

```
RESTRICTED — Contains references to regulated data categories
Do not distribute outside PassportCard without legal review
```

## Hard Rules

- Regulatory authority findings ALWAYS override consulting firm opinions when they conflict.
- Hard constraints CANNOT be downgraded. They are non-negotiable.
- Multi-jurisdiction products get a SEPARATE sweep per jurisdiction. Compliance in one does not satisfy another.
- Israeli local firms have limited open-access content. When search returns insufficient results, recommend direct consultation rather than treating absence of published content as absence of regulation.
- NEVER tell the user "you're probably fine" on a regulatory question. Either cite a source confirming compliance, or flag it for professional review.
- The 5.5 score threshold from the scorecard applies: do not search entities below this score.