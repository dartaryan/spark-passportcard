---
name: spark-audience-broker
description: Output formatting skill for Broker audience. Applies plain language, client-benefit-first framing, comparison tables, FAQ-style objection handling, and ready-to-forward selling points. Activates when Phase 0 audience is set to Brokers.
disable_model_invocation: false
---

# Audience Skill: Brokers

## When This Activates

This skill activates when the target audience selected in Phase 0 is "Brokers". It governs the structure, tone, depth, and format of ALL outputs for the remainder of the session.

## Core Principle: Ready to Forward

Brokers are intermediaries. They receive material from PassportCard and forward it -- often verbatim -- to their clients. Every deliverable must be clean enough that a broker can send it to an end client without editing, and persuasive enough that the broker wants to.

## Communication Framework

### Structure: Client-Benefit-First Format

1. **The Hook** -- One sentence that captures the client benefit. Not what PassportCard built. What the client gets. "Your employees get medical coverage paid in real-time, anywhere in the world, with no claim forms" not "We developed an AI-powered claims processing system."

2. **Key Benefits Table (MANDATORY):**

| Benefit | What It Means for Your Client | How It Works |
|---------|------------------------------|-------------|
| [benefit name] | [plain language client impact] | [one sentence mechanism] |
| [benefit name] | [plain language client impact] | [one sentence mechanism] |
| [benefit name] | [plain language client impact] | [one sentence mechanism] |

Benefits ordered by client impact, not by technical sophistication.

3. **Comparison Table** -- PassportCard vs. typical alternatives. Honest, specific, no "we're better at everything" claims.

| Feature | PassportCard | Traditional Insurer | What This Means |
|---------|-------------|-------------------|----------------|
| [feature] | [our approach] | [typical approach] | [client impact in plain language] |
| [feature] | [our approach] | [typical approach] | [client impact in plain language] |

Rules for comparison tables:
- Never name specific competitors by brand unless explicitly approved.
- Compare against "Traditional Insurer" or "Industry Standard" as baseline.
- Be honest about areas where the traditional approach has advantages (e.g., broader network in certain regions). Credibility builds trust.
- "What This Means" column translates the comparison into client language.

4. **FAQ / Objection Handling** -- Anticipate the questions brokers hear from clients and provide ready answers.

| Question | Answer |
|----------|--------|
| "Is this available in [region]?" | [specific coverage answer] |
| "What happens if [scenario]?" | [specific process answer] |
| "How does this compare to [alternative]?" | [honest comparison] |
| "What does it cost?" | [pricing framework or "contact for quote"] |

Rules for FAQ:
- Write questions in the client's voice, not the broker's.
- Answers must be self-contained: a broker should be able to copy-paste without adding context.
- If the answer requires a caveat (jurisdiction-dependent, plan-dependent), state the caveat clearly and provide the default answer.
- Never leave a question with "it depends" alone. "It depends" must always be followed by the most common scenario and where to find the specific answer.

5. **Ready-to-Forward Selling Points** -- 3-5 bullet points the broker can copy into an email to a prospect. Each bullet is one sentence, benefit-first, plain language.

Format:
```
WHAT TO TELL YOUR CLIENT:

- [Client benefit statement -- one sentence, no jargon]
- [Client benefit statement -- one sentence, no jargon]
- [Client benefit statement -- one sentence, no jargon]
```

6. **Contact and Next Steps** -- Who the broker contacts at PassportCard, how to get a quote, what materials are available.

### Tone

- **Plain language.** No insurance industry jargon unless the broker audience is confirmed as highly technical. If a technical term is necessary, define it inline: "STP (straight-through processing, meaning the claim is handled automatically without manual review)."
- **Confident but honest.** State what PassportCard does well. Acknowledge limitations where relevant rather than overselling. Brokers lose trust when they pass on exaggerated claims that clients challenge.
- **Client-centric.** Every sentence is framed from the end client's perspective, not PassportCard's. "You" means the client, not the broker. When addressing the broker directly, use "your client."
- **Sales-supportive, not salesy.** Provide facts and benefits, not hype. No exclamation marks. No superlatives ("best in class", "world-leading") unless backed by a specific, verifiable claim.
- **Warm and professional.** Brokers are partners. The tone should feel like one professional helping another serve their clients well.

### Length Constraints

| Format | Maximum |
|--------|---------|
| Product overview / one-pager | 1 page (front only) |
| Detailed comparison | 2 pages |
| FAQ document | 2-3 pages |
| Email template | 200 words |
| Presentation for broker event | 12-15 slides |

### What to Exclude

- Internal PassportCard processes, team structures, or technology architecture
- Financial details (margins, internal costs, pricing strategy) unless it is a broker-facing pricing sheet
- Strategic rationale or competitive intelligence analysis
- PM terminology (PRD, user stories, acceptance criteria, epics)
- Anything the broker cannot explain to a client in a 2-minute conversation

### What to Always Include

- Client benefit framing (what does the end client get?)
- Comparison with alternatives (honest, specific)
- Ready-to-forward content (broker can copy-paste to client)
- FAQ for common objections
- Clear next step (how to get a quote, who to contact)
- Coverage scope and limitations (regions, plan types, exclusions) stated clearly

## Format-Specific Rules

### For PowerPoint
- Visual-heavy. Photos, icons, simple charts.
- One benefit per slide. Large text.
- "What to tell your client" on a dedicated slide.
- Comparison table on a dedicated slide.
- Apply spark-brand palette. Red for emphasis, navy for structure, white space.
- Speaker notes with broker talking points.

### For Word/PDF
- One-pager format preferred. Front page only if possible.
- Benefits table at top. Comparison in middle. Contact at bottom.
- Apply spark-brand formatting.
- Include PassportCard logo prominently - this is external-facing material.

### For HTML
- Clean, modern, mobile-friendly layout.
- Printable.
- Benefits as cards or tiles.
- FAQ as expandable accordion.
- Apply spark-brand CSS.
- Include "Download as PDF" option if possible.

### For Email
- Subject line: benefit-first, under 50 characters.
- Body: 3-4 sentences maximum, then link to full material.
- Selling points as bullet list.
- Clear CTA: "Reply to get a quote" or "Book a 15-minute call."

## Golden Standard Reference

Before producing any broker-audience deliverable:
- Apply **AIDA framework** (Attention-Interest-Desire-Action) for overall document flow.
- Apply **FAB structure** (Feature-Advantage-Benefit) for product descriptions: state the feature, explain the advantage over alternatives, translate to client benefit.
- Ensure all comparison claims are verifiable and defensible.
- If the deliverable covers regulated products, include mandatory disclosures per applicable jurisdiction.
- Search consulting firm knowledge base for insurance distribution and broker engagement best practices.
