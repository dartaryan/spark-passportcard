**PassportCard Builder**
Prompt Enhancement Brief for Ben
From: Alon  |  March 2026  |  Status: Ready for Implementation
# Overview
This document contains all enhancement requirements for the prompt currently named "Benefit", which is being renamed to "PassportCard Builder". It covers 20 distinct requirements organized into four categories: Foundational Changes, Adoption & Usability, Guardrails & Safety, and a Best Practice & Verification Reference listing authoritative consulting firms whose open-access knowledge centers the prompt should consult when producing deliverables (in addition to the existing list).
Each requirement is rated by implementation priority. 
*Make PassportCard Executives' tasks straightforward and highly professional.*
**Priority Legend**

| ** CRITICAL ** | Must implement before broader rollout — blocks adoption or creates risk |
| --- | --- |
| ** HIGH ** | Significant impact on usability or safety — implement in first iteration |
| ** MEDIUM ** | Meaningful improvement — schedule for second iteration |
| ** NICE-TO-HAVE ** | Valuable but non-blocking — implement when capacity allows |

# A. Foundational Changes (Apply First)
These changes affect the entire prompt structure and must be implemented before any other enhancements.
**1. Global Rename: Benefit → PassportCard Builder  **** CRITICAL **
Replace every reference to "Benefit" with "PassportCard Builder" throughout the entire prompt. This is a global find-and-replace affecting:
The system identity line and self-introduction in Phase 0.
All phase headers, section titles, and inline references.
Handoff document templates and their naming conventions.
Welcome messages, installation/setup instructions, and footers.
Any error messages or help text that reference the old name.
**2. PassportCard Brand Identity System  **** CRITICAL **
Embed brand standards so every output is visually on-brand by default, with no user action required. The brand identity must be baked into every output type: prototypes, documents, presentations, spreadsheets, and HTML.
**Primary ****palette: **#E3000F (PassportCard signature red) as the anchor color. Supporting: dark navy (#1A2744), white, and light gray for backgrounds.
**Typography: **Plus Jakarta Sans as the primary Latin typeface. Heebo as the Hebrew-language typeface. Fall back to Arial/Helvetica where custom fonts are unavailable.
**Logo placement: **Top-left on documents and HTML outputs. Title slide (centered or top-left) on presentations. Do not stretch, recolor, or place over busy backgrounds.
**Design principles: **Clean, modern, professional. Red used for headings, accent elements, and CTA buttons — never as a full background. Chart palettes derived from brand colors. Table headers in navy or red with white text.
**Knowledge base requirement: **The PassportCard logo file (SVG and PNG) should be stored in the project knowledge base for automatic insertion into all outputs. 

**3. Session Opening Gate (Restructured Phase 0)  **** CRITICAL **
Restructure Phase 0 to collect six pieces of context in a single opening exchange before any work begins. This prevents discovering mid-project that the user wanted Hebrew PowerPoint slides.
**Language preference — **Ask: "What language would you like to work in and receive outputs in?" Support at minimum: English, Hebrew, German. Apply the selected language to all deliverables, headings, and communication.
**Output format — **Ask: "What format should the deliverable be in?" Options: Word (.docx), PowerPoint (.pptx), Excel (.xlsx), HTML, or PDF. Apply format-specific structural rules (see item #8).
**Session type — **Offer three paths: Full Pipeline (multi-session, all phases), Express Lane (single-session viability check — see item #6), or Resume Existing Project (load from handoff document).
**Purpose — **Ask: "What is the goal of this task?" Every output must be shaped by stated intent from the start.
**Audience — **Ask: "Who will receive this output?" Offer a structured list: Board of Directors, Group President, CEO, C-Level Executives, Team Members, Brokers, General Public, or Other (open field). This drives the Audience Communication Engine (item #5).
**Role — **Ask: "What is your role?" to adapt questioning depth, vocabulary, and phase emphasis (see item #7).
**4. Audience Communication Engine  **** CRITICAL **
This is the largest and highest-impact addition for executive adoption. Once purpose and audience are identified in Phase 0, the prompt applies a tailored communication playbook to every output. Before producing any deliverable, the system should search for and apply the recognized golden standard in executive communication (McKinsey Pyramid Principle, Situation-Complication-Resolution framework, etc.). Playbooks by audience:
**Board of Directors — **Pyramid Principle structure: lead with the answer, then supporting evidence. Include a decision box stating exactly what the board is asked to approve, fund, or advise on. Executive summary uses SCR (Situation-Complication-Resolution) framework. Maximum 10-12 slides for presentations. Formal tone, no jargon, quantified impact.
**Group President / CEO — **Strategic framing with financial impact and timeline. Decision-ready format: 2-3 options with trade-offs, a recommended path, and a risk summary. Concise — one-page narrative or 8-10 slides maximum. Assumes high context; skip background the audience already knows.
**C-Level Executives — **Function-specific language matched to their domain. CFO receives ROI/NPV/payback framing. CTO receives architecture, integration, and scalability framing. COO receives process impact and operational readiness framing. CMO receives market positioning and customer impact framing.
**Team Members — **Clear action items, ownership assignments, deadlines, and next steps. More operational detail, less strategic context. Use task-oriented structure with accountability tables.
**Brokers — **Plain language, client-benefit-first framing. Include ready-to-forward selling points and competitive differentiators. No internal jargon. Provide comparison tables (us vs. competitors) and FAQ-style objection handling.
**General Public — **Simple language, benefit-led messaging, no industry terminology. Accessible reading level. Lead with "what this means for you."
**Other — **Ask the user to describe the audience’s role, knowledge level, and what they care about. Adapt tone, depth, and structure accordingly.
**Golden standard search — **For every deliverable, the prompt should search its consulting firm knowledge base (see Section D) for best practices relevant to the task type and audience before generating output.

# B. Adoption & Usability Enhancements
These features lower the barrier to first use and make the tool practical for non-PM executives across the organization.
**5. Stakeholder Output Formats  **** HIGH **
Add output variants that executives can trigger on demand at any phase. The current deliverables are optimized for product/engineering audiences. Executives often need to present upward or sideways.
One-page executive summary suitable for a board deck.
Pitch-slide narrative structure for investment or partnership conversations.
Comparison memo format ("Option A vs. Option B — here’s my recommendation").
Trigger command: "Give me a board-ready summary of where we are."
**6. Express Lane Mode  **** HIGH **
Add a single-session mode that produces a condensed "Idea Viability Report" covering problem validation, competitive snapshot, and a go/no-go recommendation. If the idea passes, the report converts into Handoff Document #1 and the user enters the full pipeline. This dramatically lowers the barrier to first use.
**7. Role-Based Entry Paths  **** HIGH **
Phase 0 currently treats all users identically. Add a role selector that adapts questioning depth, vocabulary, and phase emphasis based on the user’s function.
A C-level exec may skip to competitive landscape review with a lighter discovery phase.
A claims operations manager needs different vocabulary than a product manager.
A team lead with a detailed feature idea may need the full Phase 1 interview.
**8. Output Format Configuration Rules  **** HIGH **
Based on the format selected in Phase 0, apply format-specific structural rules to every deliverable:
**PowerPoint — **Slide-by-slide structure with action titles (not labels). One key message per slide. Speaker notes with talking points. Brand template with red/navy palette. Maximum slide counts per audience type.
**Word — **Professional document with table of contents, numbered sections, headers/footers, and PassportCard branding. Use Plus Jakarta Sans or fall back to Arial.
**Excel — **Data tables with clear headers, formula logic documented in cell comments, chart specifications, named ranges, and brand-colored formatting.
**HTML — **Responsive layout with brand CSS baked in. Mobile-friendly. Interactive elements where appropriate.
**PDF — **Polished, read-only format suitable for external distribution. Include watermark per item #19.
**9. "Where Am I?" Status Command  **** MEDIUM **
Add a command ("status" or "where are we?") that produces a concise dashboard showing: phases completed, key decisions made, what comes next, and open questions. Essential for multi-session projects where executives lose track between conversations.
**10. Multi-Product Portfolio View  **** MEDIUM **
Add a portfolio-level command that reads multiple handoff documents and produces a comparative view: project progress, strategic overlap, shared infrastructure needs, and resource allocation implications.
**11. Glossary & Plain Language Mode  **** MEDIUM **
Earlier phases still use PM-specific terms (TAM/SAM, acceptance criteria, epics, user stories). Add an automatic plain-language mode that translates these inline with brief parenthetical explanations for non-product executives.
**12. Integration Guidance for PassportCard’s Stack  **** NICE-TO-HAVE **
Add a knowledge base section mapping PassportCard’s existing systems, APIs, and data sources so the tool makes smarter architecture recommendations in Phase 7 and identifies integration points earlier.

# C. Guardrails & Safety
Safeguards ensuring the tool is safe for broad organizational use in a regulated insurance environment.
**13. Data Classification Gate  **** CRITICAL **
Before any research or product definition begins, ask: "Will this product handle customer PII, claims data, financial records, or regulated health information?" Based on the answer, automatically activate compliance layers from Phase 2.5 and tag all handoff documents with a sensitivity level: Public, Internal, Confidential, or Restricted.
**14. Confidentiality & IP Reminders  **** CRITICAL **
Display at Phase 0 and again before any research-heavy phase:
"Remember: I use web search, which sends queries externally. Avoid pasting proprietary data, customer names, or internal financial figures into our conversation. Describe the pattern or need instead."
**15. Hallucination Safeguard on Market Data  **** HIGH **
Strengthen the source tier system: when the tool cannot find data through search, it must say so rather than estimating. Add a confidence indicator next to every quantitative claim: Verified (sourced), Estimated (inferred with stated methodology), or Insufficient Data.
**16. Scope & Authority Checkpoint  **** HIGH **
Add a checkpoint between Phase 6 and Phase 7: "Moving into development phases requires budget approval and engineering capacity allocation per PassportCard’s governance structure. Please confirm you have authorization to proceed." 
**17. Audit Trail & Decision Log  **** HIGH **
Each handoff document must include a decision log: what was decided, alternatives considered and rejected, and who participated. Enables compliance officers to later reconstruct rationale without re-reading conversations.
**18. Escalation Paths  **** MEDIUM **
When the tool identifies a regulatory concern, competitive threat, or viability risk, recommend specific internal escalation. Add a configurable section: "For compliance questions, escalate to [Maggie – Insurance/Finance, Ben Kagan - AI]. 
**19. Output Watermarking  **** MEDIUM **
All generated documents carry a footer: "Generated with PassportCard Builder — Internal Use Only. AI-assisted analysis — review by [appropriate function] required before external distribution."
**20. Updated Handoff Document Templates  **** HIGH **
Add these fields to every handoff document template to preserve context across sessions:
Language used in session.
Output format selected.
Target audience and communication framework applied.
Data classification level.
Decision log (decisions + alternatives rejected).
Brand configuration applied (confirming PassportCard identity was used).

# D. Best Practice & Verification Reference
The following consulting firms and their open-access knowledge centers should be integrated into PassportCard Builder’s research and verification layer (add to the existing list). When the prompt produces deliverables — especially market analysis, financial projections, legal guidance, actuarial models, or compliance frameworks — it should search these authoritative sources to validate claims and apply industry best practices.
*Integration **instruction** for the prompt: store these as a searchable reference list. When a task falls within a domain below, prioritize these knowledge centers as Tier 1 sources alongside peer-reviewed and government sources.*
## Business Plan Writing
Financial projections, investor decks, business plan structure and validation.

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| 1 | Cayenne Consulting | Business plans, pitch decks, financial forecasts; founded 2001 | caycon.com/resources |
| 2 | Growthink | Full-service business plan consulting; 400+ industry templates | growthink.com/businessplan/help-center |
| 3 | OGSCapital | Strategic business plans with ex-Big Four analysts; 120+ industries | ogscapital.com/article/ |
| 4 | LivePlan | SaaS platform + consulting; financial forecasting, benchmarks | liveplan.com/blog |
| 5 | ProjectionHub | Financial projection templates; 50,000+ entrepreneurs served | projectionhub.com/blog |

***Germany***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| G1 | Roland Berger | Germany’s largest strategy consultancy; financial modeling | rolandberger.com/en/Insights/ |
| G2 | Simon-Kucher & Partners | Pricing, growth strategy, business model development | simon-kucher.com/en/insights |
| G3 | Berylls Strategy Advisors | Munich; strategy for mobility and tech sectors | berylls.com/en/insights/ |

***Israel***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| I1 | Shaldor Strategy Consulting | Israel’s leading management consulting; competitive strategy | shaldor.com/publications |
| I2 | TASC Consulting | Strategic, economic, digital, product, data & AI consulting | tasc-consulting.com/insights |
| I3 | BCG Israel | MBB firm, Tel Aviv office; full business strategy | bcg.com/israel |

***Australia***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| A1 | KPMG Australia | Business planning, financial advisory, strategy | kpmg.com/au/en/home/insights.html |
| A2 | Deloitte Australia | Business planning, financial modeling, market entry | deloitte.com/au/en/insights.html |
| A3 | PwC Australia | Strategy&; business plans, financial projections | pwc.com.au/publications.html |

## Legal Advice
Patents, terms of service, privacy policies, IP strategy, data protection.

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| 1 | Baker McKenzie | IP, data privacy, tech transactions; 50+ jurisdictions | bakermckenzie.com/en/insight |
| 2 | DLA Piper | Patent prosecution, IP strategy, privacy/data protection | dlapiper.com/en/insights |
| 3 | Hunton Andrews Kurth | Top privacy/cybersecurity practice; 1,400-page privacy deskbook | hunton.com/insights |
| 4 | Fish & Richardson | Largest U.S. patent litigation firm; IP counseling | fr.com/insights/ |
| 5 | Bird & Bird | Technology, IP, data protection; 30+ offices | twobirds.com/en/insights |

***Germany***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| G1 | Hogan Lovells (Germany) | IP, privacy, tech law; Frankfurt/Munich offices | hoganlovells.com/en/knowledge |
| G2 | CMS Germany | Patents, data protection, tech transactions | cms.law/en/deu/insight |
| G3 | Freshfields Bruckhaus Deringer | German IP, GDPR, regulatory compliance | freshfields.com/en-gb/our-thinking/ |

***Israel***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| I1 | Herzog Fox & Neeman | Israel’s largest law firm; IP, tech, privacy | herzoglaw.co.il/eng/news-and-events/ |
| I2 | Meitar Law Offices | Leading Israeli tech law; patents, SaaS, privacy | meitar.com/knowledge-hub |
| I3 | Pearl Cohen | Israeli IP-focused; patent prosecution, FTO analysis | pearlcohen.com/category/newsletters/ |

***Australia***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| A1 | Allens (Linklaters) | IP, data protection, technology law | allens.com.au/insights-news/ |
| A2 | Herbert Smith Freehills | Patents, privacy, tech regulation | herbertsmithfreehills.com/insights |
| A3 | MinterEllison | IP, cybersecurity, privacy, data compliance | minterellison.com/insights |

## Graphic Design & Brand Identity
Logos, brand guides, visual identity systems, design thinking.

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| 1 | Pentagram | World’s largest independent design consultancy | pentagram.com/work |
| 2 | Landor (WPP) | Visual identity, brand architecture, packaging | landor.com/thinking |
| 3 | Interbrand | Best Global Brands rankings, brand strategy | interbrand.com/thinking/ |
| 4 | MetaDesign | Berlin-origin; scalable brand ecosystems | metadesign.com/insights |
| 5 | Siegel+Gale | Simplicity-driven identity systems, naming | siegelgale.com/insights/ |

***Germany***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| G1 | MetaDesign (Berlin HQ) | Global brand design, deep German market expertise | metadesign.com/insights |
| G2 | Peter Schmidt Group | Corporate identity, packaging, brand architecture | peterschmidtgroup.de/en/ |
| G3 | KMS TEAM | Munich; brand strategy, identity, experience | kms-team.com/en/insights |

***Israel***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| I1 | Biajee (Tel Aviv) | Brand strategy, identity, messaging, visual systems | biajee.com/ |
| I2 | Firma (Tel Aviv) | Brand identity, visual design, UX for tech | firma.co.il/ |
| I3 | Berman Branding | Logo, brand guide, corporate identity | bermanbranding.com/ |

***Australia***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| A1 | Interbrand Australia | Brand design and strategy for APAC | interbrand.com/thinking/ |
| A2 | Hulsbosch | Brand identity for Woolworths, Qantas, CBA | hulsbosch.com.au/ |
| A3 | R/GA Australia | Digital-first brand design, innovation | rga.com/futurevision |

## Infrastructure Management & DevOps
Cloud, DevOps, CI/CD, infrastructure-as-code, server maintenance.

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| 1 | Accenture | Cloud, DevOps, infrastructure transformation at scale | accenture.com/us-en/insights/cloud-index |
| 2 | Infosys | Agile DevOps, cloud-native infrastructure | infosys.com/iki.html |
| 3 | HashiCorp (IBM) | Terraform, Vault, Consul; IaC consulting | developer.hashicorp.com/ |
| 4 | Rackspace Technology | Managed cloud, multi-cloud DevOps, Kubernetes | rackspace.com/solve |
| 5 | ScienceSoft | CI/CD, IaC, containerization; ISO certified | scnsoft.com/blog |

***Germany***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| G1 | T-Systems (Deutsche Telekom) | Cloud infrastructure, managed DevOps, SAP ops | t-systems.com/de/en/insights |
| G2 | Consol Software GmbH | Munich; DevOps consulting, monitoring, automation | consol.de/en/blog/ |
| G3 | Codecentric AG | DevOps, cloud-native, Kubernetes, SRE | codecentric.de/en/blog |

***Israel***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| I1 | MeteorOps | Cloud migration, infrastructure management, automation | meteorops.com/blog/ |
| I2 | Tikal Knowledge | DevOps, cloud architecture, Kubernetes, CI/CD | tikalk.com/posts/ |
| I3 | Otorio | OT/IT security, industrial DevOps | otorio.com/resources/ |

***Australia***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| A1 | Versent | Australian-born cloud/DevOps; AWS Premier Partner | versent.com.au/insights |
| A2 | Cevo | Melbourne; DevOps, cloud-native, SRE | cevo.com.au/blog/ |
| A3 | CMD Solutions | DevOps, cloud security; AWS/Azure/GCP | cmdsolutions.com.au/blog/ |

## Actuarial Modeling & Pricing
Actuarial analysis, insurance pricing, reserving, capital modeling, IFRS 17.

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| 1 | Milliman | Premier independent actuarial firm; 4,000+ employees | milliman.com/en/insight |
| 2 | Oliver Wyman Actuarial | 300+ credentialed actuaries; pricing, reserving, capital | oliverwyman.com/our-expertise/insights.html |
| 3 | Willis Towers Watson | Actuarial, risk modeling, insurance pricing | wtwco.com/en-us/insights |
| 4 | EY Actuarial Services | IFRS 17, Solvency II, pricing and reserving | ey.com/en_us/services/consulting/actuarial-services |
| 5 | Perr & Knight | Specialized P&C/A&H; 150+ professionals, 30+ Fellows | perrknight.com/resources/ |

***Germany***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| G1 | Deloitte Actuarial Germany | Solvency II, IFRS 17, pricing, reserving | deloitte.com/de/de/Industries/financial-services/insurance.html |
| G2 | KPMG Germany Insurance | Regulatory compliance, pricing, modeling | kpmg.com/de/en/home/insights.html |
| G3 | WTW Germany | Actuarial consulting, risk management, capital | wtwco.com/de-de/insights |

***Israel***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| I1 | EY Israel Actuarial | Israeli insurance market, Solvency II equivalent | ey.com/en_il/insurance |
| I2 | Deloitte Israel | Insurance advisory, pricing, financial risk | deloitte.com/il/en/insights.html |
| I3 | PwC Israel | Regulatory compliance, risk assessment | pwc.com/il/en/publications.html |

***Australia***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| A1 | Finity Consulting | Australia’s largest independent actuarial firm | finity.com.au/insights/ |
| A2 | Taylor Fry | Insurance, health, social policy analytics | taylorfry.com.au/articles-media/ |
| A3 | Deloitte Actuaries Australia | Insurance, superannuation, investment | deloitte.com/au/en/services/consulting/services/actuaries-consultants.html |

## Regulatory Compliance (Insurance & General)
Insurance regulation, Solvency II, IFRS 17, AML/KYC, state/federal filings.

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| 1 | PwC Insurance Regulatory | Global insurance regulatory; NAIC, multi-state filing | pwc.com/us/en/industries/financial-services/insurance/regulatory.html |
| 2 | Deloitte Regulatory | IFRS 17, Solvency II, AML/KYC compliance | deloitte.com/global/en/services/risk-advisory.html |
| 3 | KPMG Insurance | Regulatory frameworks, capital requirements | kpmg.com/xx/en/our-insights.html |
| 4 | FTI Consulting Insurance | Governance, regulation; ex-regulatory executives on staff | fticonsulting.com/insights |
| 5 | Perr & Knight Compliance | State filings, market conduct, operational compliance | perrknight.com/resources/ |

***Germany***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| G1 | KPMG Germany (BaFin-aligned) | BaFin, Solvency II, IDD, GDPR compliance | kpmg.com/de/en/home/insights.html |
| G2 | Deloitte Germany Insurance | EU/German insurance directives compliance | deloitte.com/de/de/Industries/financial-services/insurance.html |
| G3 | Rödl & Partner | Insurance regulation, cross-border advisory | roedl.com/en-gb/insights |

***Israel***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| I1 | PwC Israel Regulatory | Capital Market Authority, insurance regulation | pwc.com/il/en/publications.html |
| I2 | EY Israel Insurance | Local regulatory framework, risk management | ey.com/en_il/financial-services |
| I3 | BDO Israel | Regulatory compliance, insurance advisory | bdo.co.il/en-gb/insights |

***Australia***

| **#** | **Firm** | **Core Expertise** | **Knowledge Center URL** |
| --- | --- | --- | --- |
| A1 | KPMG Australia Insurance | APRA requirements, AFSL, prudential standards | kpmg.com/au/en/home/insights.html |
| A2 | Deloitte Australia Regulatory | APRA, ASIC, insurance prudential framework | deloitte.com/au/en/insights.html |
| A3 | MinterEllison Consulting | Insurance regulation, AFSL, compliance | minterellison.com/insights |

# Recommended Implementation Roadmap
Start with items that have the highest adoption impact with the least prompt complexity.
**Phase 1 — Foundation (Do First — Unlocks Broad Adoption)**
Global rename to PassportCard Builder (#1)
Session Opening Gate with language, format, purpose, audience, role (#3)
Audience Communication Engine with golden-standard search (#4)
Brand Identity System with Plus Jakarta Sans / Heebo (#2)
Data Classification Gate (#13)
Confidentiality & IP Reminders (#14)
**Phase 2 — Build on Foundation**
Stakeholder Output Formats (#5)
Express Lane Mode (#6)
Role-Based Entry Paths (#7)
Output Format Configuration Rules (#8)
Hallucination Safeguard (#15)
Scope & Authority Checkpoint (#16)
Audit Trail & Decision Log (#17)
Updated Handoff Documents (#20)
Best Practice & Verification Reference integration (Section D)
**Phase 3 — Polish & Extend**
Status Command (#9)
Portfolio View (#10)
Glossary / Plain Language Mode (#11)
Escalation Paths (#18)
Output Watermarking (#19)
Stack Integration Guidance (#12)
