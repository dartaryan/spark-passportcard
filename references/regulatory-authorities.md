# Regulatory Authorities by Jurisdiction

## Purpose

Complete listing of regulatory authorities that SparkKit must search during Phase 2.5 when a product targets a specific jurisdiction. Government/regulatory sources take precedence over consulting firm opinions when they conflict.

## Mandatory Rules

- When a product targets a jurisdiction, search ALL listed authorities for that jurisdiction
- Regulatory requirements found are HARD CONSTRAINTS -- they cannot be downgraded in the Adopt/Adapt/File/Reject framework
- For multi-jurisdiction products, run the sweep for EACH jurisdiction independently
- If a product touches payments in any form (collection, disbursement, stored value, FX), ALWAYS search payment-specific regulators
- If no relevant regulation is found, explicitly state "No applicable regulatory constraint identified for [jurisdiction]"

---

## Israel

| Source | URL | Domain |
|--------|-----|--------|
| CMISA (Capital Market, Insurance and Savings Authority) | gov.il/en/departments/capital_market_authority | Insurance, Pension, Non-Bank Lending, Payments (partial) |
| Bank of Israel -- Banking Supervision | boi.org.il/en/BankingSupervision/ | Banking, Payment Systems, Financial Stability |
| Israel Securities Authority (ISA) | isa.gov.il | Payment Services Licensing, Open Banking |
| Privacy Protection Authority | gov.il/en/departments/the_privacy_protection_authority | Data Protection, Privacy |

## Germany

| Source | URL | Domain |
|--------|-----|--------|
| BaFin | bafin.de/EN/Homepage/homepage_node.html | Insurance, Banking, Securities, Payments, Consumer Protection |
| Deutsche Bundesbank | bundesbank.de/en/publications | Payment Systems, Financial Stability |
| BfDI (Federal Data Protection) | bfdi.bund.de/EN/Home/home_node.html | GDPR Enforcement, Privacy |

## European Union (applies to DE and all cross-border)

| Source | URL | Domain |
|--------|-----|--------|
| EIOPA | eiopa.europa.eu/publications_en | Insurance and Pensions Supervision, Solvency II, IDD, PEPP |
| EBA | eba.europa.eu/publications-and-media | Banking Regulation, PSD2/PSD3, AML |
| EDPB | edpb.europa.eu/edpb_en | GDPR Enforcement, Cross-Border Data, Privacy |
| ECB Banking Supervision | bankingsupervision.europa.eu/home/html/index.en.html | SSM, Financial Stability |

## United Kingdom

| Source | URL | Domain |
|--------|-----|--------|
| FCA | fca.org.uk/publications | Insurance Conduct, Payments, Consumer Duty, Open Banking, BNPL |
| PRA | bankofengland.co.uk/prudential-regulation/publication | Insurance Prudential, Solvency UK, Capital |
| PSR | psr.org.uk/publications/ | Payment Systems, Interchange, APP Fraud (note: consolidating into FCA by end 2026) |
| ICO | ico.org.uk/about-the-ico/what-we-do/ | UK GDPR, Data Protection, AI Code of Practice |

## United States -- Federal

| Source | URL | Domain |
|--------|-----|--------|
| NAIC | content.naic.org/publications | Insurance Model Laws, State Coordination, Solvency, Market Conduct |
| Federal Reserve | federalreserve.gov/publications.htm | Banking, Payment Systems, FedNow |
| CFPB | consumerfinance.gov/data-research/research-reports/ | Consumer Finance, Payments, BNPL, Open Banking (Section 1033) |
| FTC | ftc.gov/news-events/topics/protecting-consumer-privacy-security | Privacy, Consumer Protection, Data Security, AI |
| OCC | occ.treas.gov/news-issuances/index-news-issuances.html | National Banks, FinTech Charters |
| FDIC | fdic.gov/news/publications/ | Deposit Insurance, Bank Resolution |

## United States -- State

| Source | State | URL | Domain |
|--------|-------|-----|--------|
| NYDFS | New York | dfs.ny.gov/reports_and_publications | Insurance, Cybersecurity (23 NYCRR 500), BitLicense |
| California DOI | California | insurance.ca.gov/0500-about-us/03-publications/ | Insurance Regulation, Rate Filings |
| California DFPI | California | dfpi.ca.gov/publications/ | Financial Protection, Payments, Lending |
| CPPA | California | cppa.ca.gov/newsroom/ | CCPA/CPRA Enforcement, Automated Decision-Making |
| Florida OIR | Florida | floir.com/Sections/PandC/Publications.aspx | Insurance Regulation |
| Florida OFR | Florida | flofr.gov/sitePages/Publications.htm | Financial Regulation |

## Australia

| Source | URL | Domain |
|--------|-----|--------|
| APRA | apra.gov.au/publications | Insurance, Banking, Prudential Supervision, Capital Standards |
| ASIC | asic.gov.au/about-asic/news-centre/find-a-media-release/ | Financial Services, Consumer Protection, Payments, Licensing |
| RBA | rba.gov.au/publications/ | Payment Systems Regulation, Financial Stability, CBDC |
| OAIC | oaic.gov.au/newsroom | Privacy, Australian Privacy Principles |
| ACCC | accc.gov.au/media/media-releases | Consumer Protection, Competition, Digital Platforms |
