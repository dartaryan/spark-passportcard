---
name: spark-brand
description: Enforces PassportCard visual identity across all SparkKit outputs. Activates automatically whenever any SparkKit skill produces HTML, documents, presentations, spreadsheets, or any visual output. Ensures brand colors, typography, spacing, and design principles are applied consistently without user action. Use this skill for any output that will be seen by humans.
disable_model_invocation: false
---

# SparkKit Brand Enforcement

## Purpose

You enforce PassportCard's visual identity on every output. This is not optional. Every HTML file, document, presentation, spreadsheet, and visual artifact produced by any SparkKit skill MUST follow these rules.

## Before Producing Any Visual Output

1. Read `references/passportcard-brand-tokens.md` for the authoritative color, typography, layout, tone, and logo usage reference.
2. Read `references/passportcard-brand.md` for additional CSS variables and component patterns.
3. Apply the tokens below automatically. Do not ask the user about brand preferences (except during Egg Principle moments — see below).
4. If a skill's output conflicts with brand rules, brand rules win.

## Mandatory Brand Tokens

### Colors
```css
--pc-red: #E10514;        /* Primary: headings, CTAs, accent - OFFICIAL BRAND RED */
--pc-soft-pink: #FEBCBD;  /* Complementary: backgrounds, soft accents */
--pc-dark: #1A1A2E;       /* Primary text */
--pc-slate: #64748B;      /* Secondary text */
--pc-white: #FFFFFF;       /* Card backgrounds, typography */
--pc-bg: #FAFAFA;          /* Page background */
--pc-border: #F1F5F9;     /* Dividers */
```

### Typography
- Primary font: 'Montserrat', sans-serif (or 'Roboto')
- Hebrew content: 'Rubik', sans-serif
- Fallback: Arial, Helvetica, sans-serif
- Base size: 14px
- Direction: RTL by default for Hebrew, LTR for English

### Radius and Spacing
- Small elements: 8px radius
- Cards/panels: 12px radius
- Modals: 16px radius
- Card shadow on hover: 0 8px 25px rgba(0,0,0,0.08)

## Rules (Non-Negotiable)

1. **Red is accent only.** Use #E10514 for headings, buttons, active states, and emphasis. NEVER use red as a full section background.
2. **High-contrast layouts.** White on Red or Red on White for key information and CTAs. This is the brand's "Peace of Mind" visual strategy.
3. **Soft pink for subtle accents.** Use #FEBCBD for complementary backgrounds and UI elements where red would be too aggressive.
4. **No emojis.** Use Lucide icons or geometric bullet shapes. No faces, no decorative emoji.
5. **No "AI slop" patterns.** Banned: purple gradients, rounded cards on white with Inter font, generic startup aesthetics.
6. **RTL first for Hebrew.** Default layout direction is right-to-left for Hebrew content. English content uses LTR.
7. **Table headers:** Navy (#1A1A2E) or red (#E10514) background with white text.
8. **Chart palettes:** Derive from brand colors (red, blue, green, amber). No random colors.
9. **Watermark footer on all documents:** "Generated with SparkKit - PassportCard Internal Use Only. AI-assisted analysis - review by appropriate function required before external distribution."

## Output-Specific Rules

### HTML
- Include Google Fonts link for Montserrat and Rubik
- Set `direction: rtl` on html element for Hebrew content
- Use CSS custom properties for all brand tokens
- Responsive: support desktop (1024+), tablet (768-1023), mobile (<768)
- Use Lucide icons via CDN

### Documents (Word/PDF)
- **Use the branded template:** When generating DOCX files, reference `assets/passportcard-template.docx` for the standard layout structure (cover page, headers, footers, heading styles, table formatting).
- PassportCard logo top-left (from assets/ folder if available)
- Montserrat for body text, Rubik for Hebrew
- Fallback to Arial if custom fonts unavailable
- Heading 1: Montserrat Bold 28pt, brand red (#E10514)
- Heading 2: Montserrat Bold 20pt, navy (#1A2744)
- Heading 3: Montserrat Bold 16pt, black (#1A1A2E)
- Body: Montserrat Regular 11pt, dark gray (#333333)
- Table header: White text on brand red background
- Table body: Alternating white / cream (#F5F0EB) rows
- Cover page: Full red background, white logo centered, white title/subtitle/date/author
- Header: Logo left + red line separator + "PassportCard Internal Use Only" right
- Footer: "Generated with SparkKit" left, page number center, date right
- A4 page size (PassportCard is international), 1" margins

### Presentations (PPTX/HTML slides)
- **Use the branded template:** When generating PPTX files, reference `assets/passportcard-template.pptx` for the 10 canonical slide layouts (title, section divider, content text, two-column, icon grid, big number, comparison table, timeline, quote, closing).
- Logo centered on title/closing slides (white on red), top-left on content slides (standard colors)
- Red/white high-contrast scheme
- Navy (#1A2744) for section divider slides only
- Cream (#F5F0EB) for content slide backgrounds
- Maximum white space, 0.5" minimum margins
- One key message per slide
- Action titles, not label titles
- Big numbers: 60-72pt bold red for stat callouts
- 16:9 aspect ratio

### Spreadsheets
- Header row: navy background (#1A1A2E), white text
- Alternating row shading: white / #FAFAFA
- Accent borders: #F1F5F9

## The Egg Principle (User Contribution)

SparkKit outputs should never feel fully automatic. Users must feel their contribution shaped the result.

Implementation:
- During Phase 0, ask users about their visual preferences (do they prefer formal or modern layouts? dark or light themes?)
- During Phase 3 (Design Direction), present 2-3 visual directions and let the user choose
- In the handoff document, record the user's design choices explicitly
- When producing final outputs (Phase 4 PPTX/DOCX), reference those choices
- Never use identical layouts for two different projects — vary based on user input

This is not cosmetic — it drives engagement and ownership of the output. The Pillsbury insight: people engage more when they feel they contributed. SparkKit challenges and extracts value from the user, not just generates output.

## When This Skill Activates

This skill activates automatically alongside any SparkKit skill that produces visual output. It does not need to be invoked separately. If you are producing ANY output that a human will see, apply these rules.
