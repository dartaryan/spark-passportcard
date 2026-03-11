# Authoritative Source Search Priority

<!-- Created by PassportCard — for internal use by company employees only -->

---

## MANDATORY RULE — Regulatory & Compliance Check

Every product, regardless of domain, MUST include a regulatory and compliance sweep before completing Phase 2.5. This is not optional. Even products that appear purely operational or technical may have regulatory implications (data handling, cross-border payments, consumer protection, licensing). Benefit must:

1. Identify which jurisdictions the product will operate in (IL, DE, EU, UK, US, AU)
1. Search the relevant regulatory authorities for that jurisdiction (see Regulatory Authorities below)
1. Search at least one Tier 1 regulatory consulting firm (Deloitte Regulatory, KPMG, or PwC)
1. Flag any identified regulatory requirement as a hard constraint in the product definition — these override business preferences
1. If no relevant regulation is found, explicitly state "No applicable regulatory constraint identified for [jurisdiction]" — do not silently skip

---

## ALWAYS Search (Every Product)

Deloitte Insights, McKinsey, BCG, WTW, Aon

---

## Search When Domain Is Relevant

- **Pricing / Actuarial:** Milliman, Oliver Wyman Actuarial, WTW Actuarial, Perr & Knight, EY Actuarial Services
- **Regulatory / Compliance:** Deloitte Regulatory, KPMG Insurance, PwC Insurance Regulatory, FTI Consulting, Perr & Knight Compliance
- **Legal / IP / Privacy / Data Protection:** Baker McKenzie, DLA Piper, Bird & Bird, Herbert Smith Freehills, Hunton Andrews Kurth
- **Product / Business Model / Pricing Strategy:** Roland Berger, Simon-Kucher, LivePlan, Growthink, ProjectionHub
- **Infrastructure / DevOps / Cloud:** HashiCorp, Accenture, Infosys, ScienceSoft
- **Behavioral Economics / UX Design:** BIT (Behavioural Insights Team), ideas42 (only if product involves consumer decision nudges)
- **Brand / Visual Identity:** Interbrand, Pentagram (only if product includes customer-facing brand elements)
- **Workforce / Organizational Design:** Korn Ferry, Mercer (only if product involves org restructuring or benefits design)

---

## MANDATORY — Regulatory Authority Search by Jurisdiction

When a product targets a jurisdiction, search ALL listed authorities for that jurisdiction. These are government/regulatory sources — they take precedence over consulting firm opinions.

### Israel

| Source | URL | Domain |
|--------|-----|--------|
| CMISA — Capital Market, Insurance and Savings Authority | https://www.gov.il/en/departments/capital_market_authority | Insurance; Pension; Non-Bank Lending; Payments (partial) |
| Bank of Israel — Banking Supervision | https://www.boi.org.il/en/BankingSupervision/ | Banking; Payment Systems; Financial Stability |
| Israel Securities Authority (ISA) | https://www.isa.gov.il | Payment Services Licensing; Open Banking |
| Privacy Protection Authority | https://www.gov.il/en/departments/the_privacy_protection_authority | Data Protection; Privacy |

### Germany

| Source | URL | Domain |
|--------|-----|--------|
| BaFin | https://www.bafin.de/EN/Homepage/homepage_node.html | Insurance; Banking; Securities; Payments; Consumer Protection |
| Deutsche Bundesbank | https://www.bundesbank.de/en/publications | Payment Systems; Financial Stability |
| BfDI (Federal Data Protection) | https://www.bfdi.bund.de/EN/Home/home_node.html | GDPR Enforcement; Privacy |

### European Union (applies to DE and cross-border)

| Source | URL | Domain |
|--------|-----|--------|
| EIOPA | https://www.eiopa.europa.eu/publications_en | Insurance & Pensions Supervision; Solvency II; IDD; PEPP |
| EBA | https://www.eba.europa.eu/publications-and-media | Banking Regulation; PSD2/PSD3; AML |
| EDPB | https://edpb.europa.eu/edpb_en | GDPR Enforcement; Cross-Border Data; Privacy |
| ECB Banking Supervision | https://www.bankingsupervision.europa.eu/home/html/index.en.html | SSM; Financial Stability |

### United Kingdom

| Source | URL | Domain |
|--------|-----|--------|
| FCA | https://www.fca.org.uk/publications | Insurance Conduct; Payments; Consumer Duty; Open Banking; BNPL |
| PRA | https://www.bankofengland.co.uk/prudential-regulation/publication | Insurance Prudential; Solvency UK; Capital |
| PSR | https://www.psr.org.uk/publications/ | Payment Systems; Interchange; APP Fraud (note: consolidating into FCA by end 2026) |
| ICO | https://ico.org.uk/about-the-ico/what-we-do/ | UK GDPR; Data Protection; AI Code of Practice |

### United States — Federal

| Source | URL | Domain |
|--------|-----|--------|
| NAIC | https://content.naic.org/publications | Insurance Model Laws; State Coordination; Solvency; Market Conduct |
| Federal Reserve | https://www.federalreserve.gov/publications.htm | Banking; Payment Systems; FedNow |
| CFPB | https://www.consumerfinance.gov/data-research/research-reports/ | Consumer Finance; Payments; BNPL; Open Banking (Section 1033) |
| FTC | https://www.ftc.gov/news-events/topics/protecting-consumer-privacy-security | Privacy; Consumer Protection; Data Security; AI |
| OCC | https://www.occ.treas.gov/news-issuances/index-news-issuances.html | National Banks; FinTech Charters |
| FDIC | https://www.fdic.gov/news/publications/ | Deposit Insurance; Bank Resolution |

### United States — State (search when product targets specific state)

| Source | URL | Domain |
|--------|-----|--------|
| NYDFS | https://www.dfs.ny.gov/reports_and_publications | Insurance; Cybersecurity (23 NYCRR 500); BitLicense |
| California DOI | https://www.insurance.ca.gov/0500-about-us/03-publications/ | Insurance Regulation; Rate Filings |
| California DFPI | https://dfpi.ca.gov/publications/ | Financial Protection; Payments; Lending |
| CPPA | https://cppa.ca.gov/newsroom/ | CCPA/CPRA Enforcement; Automated Decision-Making |

### Australia

| Source | URL | Domain |
|--------|-----|--------|
| APRA | https://www.apra.gov.au/publications | Insurance; Banking; Prudential Supervision; Capital Standards |
| ASIC | https://asic.gov.au/about-asic/news-centre/find-a-media-release/ | Financial Services; Consumer Protection; Payments; Licensing |
| RBA | https://www.rba.gov.au/publications/ | Payment Systems Regulation; Financial Stability; CBDC |
| OAIC | https://www.oaic.gov.au/newsroom | Privacy; Australian Privacy Principles |
| ACCC | https://www.accc.gov.au/media/media-releases | Consumer Protection; Competition; Digital Platforms |

---

## Add Regional Consulting Sources When Product Targets

- **Germany (DE):** Roland Berger, CMS Germany, KPMG DE, WTW Germany, Deloitte Actuarial DE, Hogan Lovells DE, Rödl & Partner
- **Australia (AU):** Finity Consulting, Allens (Linklaters), KPMG AU, Deloitte AU, Taylor Fry, Herbert Smith Freehills, MinterEllison
- **Israel (IL):** BCG Israel, Meitar Law, Herzog Fox & Neeman — flag: Israeli local firms have limited open-access content; when search returns insufficient results, recommend direct consultation rather than treating absence of published content as absence of regulation

---

## Search Quality Rules

- Do NOT search entities scoring below 5.5 — their value is in direct engagement, not published frameworks
- Regulatory authority sources ALWAYS override consulting firm opinions when they conflict
- When a regulatory search returns a specific requirement (e.g., licensing, capital, filing), mark it as a hard constraint — it cannot be downgraded to "Adapt" or "Reject" in the Adopt/Adapt/File/Reject framework
- For multi-jurisdiction products, run the regulatory sweep for EACH jurisdiction independently — do not assume that compliance in one jurisdiction satisfies another
- If a product touches payments in any form (collection, disbursement, stored value, FX), ALWAYS search payment-specific regulators: ISA (IL), BaFin (DE), FCA+PSR (UK), CFPB+Federal Reserve (US), RBA+ASIC (AU)

---

*This document is part of the Benefit V2 agent package. Created by PassportCard for internal use by company employees only.*
