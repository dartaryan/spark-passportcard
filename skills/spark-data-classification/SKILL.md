---
name: spark-data-classification
description: Data sensitivity classification gate. Activates during Phase 0 to determine whether the product handles PII, claims data, financial records, or regulated health information. Tags all handoff documents with a sensitivity level. Triggers compliance layers when sensitive data is involved.
argument_hint: Run data classification assessment for the current project
---

# Data Classification Gate

## Purpose

Before any research or product definition begins, determine the data sensitivity level of the product being built. This classification drives compliance requirements for all subsequent phases.

## When This Activates

This skill runs during Phase 0 (spark-phase-0-gate), after the user provides their initial idea description. It MUST complete before Phase 1 begins.

## Classification Process

### Step 1: Ask the Classification Question

Present this question clearly. Do not bury it in a list of other Phase 0 questions:

"Before we begin, I need to understand the data sensitivity of this product. Will it handle any of the following?

- Customer personally identifiable information (PII) -- names, emails, phone numbers, addresses, ID numbers
- Insurance claims data -- claim details, medical records, policy information
- Financial records -- payment data, bank details, transaction history, billing
- Regulated health information -- medical conditions, treatment records, prescriptions, diagnoses
- Children's data -- any information about or from minors

You can answer yes/no for each, or describe what data the product will touch."

### Step 2: Assign Classification Level

Based on the user's response, assign ONE of four levels:

| Level | Criteria | Visual Tag | Compliance Impact |
|-------|----------|-----------|-------------------|
| **PUBLIC** | No personal data. No customer information. Purely internal tools or public-facing content with no data collection. | [PUBLIC] | Minimal. Standard best practices. |
| **INTERNAL** | Internal employee data only. No customer PII. Internal operational metrics. | [INTERNAL] | Moderate. Access controls required. Internal distribution only. |
| **CONFIDENTIAL** | Customer PII, policy information, basic financial data. Most PassportCard products fall here. | [CONFIDENTIAL] | High. Encryption, access controls, audit logging, data retention policies, privacy impact assessment required. Compliance skill activated for all research phases. |
| **RESTRICTED** | Claims data with medical information, regulated health records, children's data, or data subject to specific regulatory frameworks (HIPAA-equivalent, GDPR special categories). | [RESTRICTED] | Maximum. All CONFIDENTIAL requirements plus: explicit legal review checkpoint, data processing agreements, purpose limitation documentation, right-to-deletion architecture, regulatory authority notification assessment. Compliance skill activated for ALL phases. |

### Step 3: Handle Ambiguity

If the user's answer is unclear or they say "I'm not sure":

"Let me help clarify. Here are some common scenarios for PassportCard products:

- A tool that helps employees process claims faster but doesn't display customer data to new users -> INTERNAL
- A customer portal where policyholders view their own information -> CONFIDENTIAL
- A system that processes medical pre-authorization requests -> RESTRICTED
- A marketing landing page with no login or data collection -> PUBLIC

Based on what you have described, I believe the classification is [LEVEL] because [specific reason]. Does this sound right?"

If still unclear, default to CONFIDENTIAL. It is safer to over-classify than under-classify.

### Step 4: Record and Propagate

Once confirmed, the classification level is:

1. **Recorded in the Phase 0 session context** alongside language, format, audience, and role.
2. **Displayed in the SparkKit status dashboard** (/spark-status).
3. **Stamped on every handoff document** produced in every phase:
   ```
   Data Classification: [LEVEL]
   Classified at: Phase 0, [date]
   ```
4. **Used to activate compliance layers:**
   - PUBLIC / INTERNAL: No automatic compliance activation. Standard best practices apply.
   - CONFIDENTIAL: spark-compliance skill activates for Phase 2.5 (Best Practices) and Phase 3 (Product Definition). Regulatory sweep is mandatory.
   - RESTRICTED: spark-compliance skill activates for ALL phases. Every deliverable includes a compliance section. A legal review checkpoint is added between Phase 4 and Phase 5.

### Step 5: Confidentiality Reminder

Immediately after classification, display this notice:

```
IMPORTANT REMINDER
--------------------------------------------------
SparkKit uses web search, which sends queries externally.
Do NOT paste into this conversation:
- Customer names or identifying details
- Internal financial figures or pricing
- Proprietary algorithms or trade secrets
- Policy numbers or claim reference numbers

Describe the PATTERN or NEED instead.
Example: "We process approximately 500 claims per day 
with an average value of $2,000-$5,000" 
instead of pasting actual claim data.
--------------------------------------------------
```

For RESTRICTED classification, add:

```
RESTRICTED DATA — ADDITIONAL CAUTION
--------------------------------------------------
This product handles regulated data. Extra care required:
- Do not describe specific medical conditions of real customers
- Do not reference specific regulatory filings by case number
- Use anonymized examples throughout all phases
- All prototypes must use synthetic/dummy data only
--------------------------------------------------
```

## Reclassification

If at any point during the pipeline it becomes clear that the data classification should change (e.g., Phase 1 discovery reveals the product will handle health data when initially classified as INTERNAL):

1. Stop the current phase.
2. Announce: "Based on what we have discussed, the data classification needs to change from [OLD] to [NEW] because [reason]."
3. Get user confirmation.
4. Update the classification.
5. Activate any additional compliance requirements for the new level.
6. Note the reclassification in the current handoff document's decision log.

## Hard Rules

- NEVER skip the classification question. Even if the product seems obviously PUBLIC, confirm with the user.
- NEVER allow a RESTRICTED product to proceed past Phase 4 without flagging the legal review checkpoint.
- NEVER downgrade a classification without explicit user confirmation and documented rationale.
- ALL handoff documents must carry the classification tag. No exceptions.
- If the user asks to remove or ignore the classification, explain: "Data classification is required by PassportCard governance. It protects the company and our customers. I cannot remove it, but I can help reclassify if the level is incorrect."
