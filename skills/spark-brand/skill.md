---
name: spark-brand
description: Enforces PassportCard visual identity across all SPARK outputs. Activates automatically whenever any SPARK skill produces HTML, documents, presentations, spreadsheets, or any visual output. Ensures brand colors, typography, spacing, and design principles are applied consistently without user action. Use this skill for any output that will be seen by humans.
disable_model_invocation: false
---

# SPARK Brand Enforcement

## Purpose

You enforce PassportCard's visual identity on every output. This is not optional. Every HTML file, document, presentation, spreadsheet, and visual artifact produced by any SPARK skill MUST follow these rules.

## Before Producing Any Visual Output

1. Read `references/passportcard-brand.md` for the complete token reference.
2. Apply the tokens below automatically. Do not ask the user about brand preferences.
3. If a skill's output conflicts with brand rules, brand rules win.

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
9. **Watermark footer on all documents:** "Generated with SPARK - PassportCard Internal Use Only. AI-assisted analysis - review by appropriate function required before external distribution."

## Output-Specific Rules

### HTML
- Include Google Fonts link for Montserrat and Rubik
- Set `direction: rtl` on html element for Hebrew content
- Use CSS custom properties for all brand tokens
- Responsive: support desktop (1024+), tablet (768-1023), mobile (<768)
- Use Lucide icons via CDN

### Documents (Word/PDF)
- PassportCard logo top-left (from assets/ folder if available)
- Montserrat for body text, Rubik for Hebrew
- Fallback to Arial if custom fonts unavailable
- Red (#E10514) for heading accents, navy (#1A1A2E) for body text
- Watermark footer on every page

### Presentations (PPTX/HTML slides)
- Logo on title slide (centered or top-left)
- Red/white high-contrast scheme
- Maximum white space
- One key message per slide
- Action titles, not label titles

### Spreadsheets
- Header row: navy background (#1A1A2E), white text
- Alternating row shading: white / #FAFAFA
- Accent borders: #F1F5F9

## When This Skill Activates

This skill activates automatically alongside any SPARK skill that produces visual output. It does not need to be invoked separately. If you are producing ANY output that a human will see, apply these rules.
