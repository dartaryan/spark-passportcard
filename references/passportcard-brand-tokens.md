# PassportCard Brand Tokens
## Authoritative Design System Reference for SparkKit Skills

> **Source**: Brand Identity 3 IPMI (visual specs), Brand Identity 5 (tone of voice), Brand Identity 2 (social marketing). Compiled March 2026.
> **Usage**: All SparkKit skills that produce visual output MUST reference this file. spark-brand skill enforces these tokens automatically.

---

## 1. Color Palette

### Primary Colors

| Token | Hex | RGB | Role | Usage Rules |
|-------|-----|-----|------|-------------|
| `brand-red` | `#E10514` | 225, 5, 20 | Primary brand color | Headings on light backgrounds, CTAs, accent elements, logo. NEVER as full-page content background except title/closing slides and document covers. |
| `soft-pink` | `#FEBCBD` | 254, 188, 189 | Secondary accent | Subtle highlights, tag backgrounds, soft callout fills. Use sparingly — max 1-2 elements per page. |
| `midnight-navy` | `#1A2744` | 26, 39, 68 | Section dividers | Section divider slides, dark headers, contrast panels. Pairs with white text only. |

### Background Colors

| Token | Hex | Role | Usage Rules |
|-------|-----|------|-------------|
| `warm-cream` | `#F5F0EB` | Content page background | Primary background for content slides and document body pages. Warm, not cold. |
| `page-bg` | `#F8F6F3` | App/web background | Web and HTML outputs. Slightly warmer than cream. |
| `white` | `#FFFFFF` | Cards, data slides | Data-heavy slides, table backgrounds, card panels. |
| `off-white` | `#FAFAFA` | Alternating rows | Table row alternation, secondary backgrounds. |

### Text Colors

| Token | Hex | Role |
|-------|-----|------|
| `text-primary` | `#1A1A2E` | Primary body text, dark headings |
| `text-secondary` | `#333333` | Document body text |
| `text-muted` | `#64748B` | Labels, captions, secondary info |
| `text-light` | `#9A9A9A` | Placeholders, disabled states |

### Red Gradient

| Token | Value | Usage |
|-------|-------|-------|
| `red-gradient` | `linear-gradient(328deg, #E10514 0%, #A2191C 100%)` | Cover pages, title slides. Dark-to-brand-red sweep. |
| `red-dark` | `#B8050F` | Hover states, pressed states |

### Semantic Colors

| Token | Hex | Role |
|-------|-----|------|
| `success` | `#16A34A` | Positive indicators, growth |
| `warning` | `#D97706` | Caution, attention needed |
| `info` | `#2563EB` | Informational, neutral data |
| `accent-purple` | `#7C3AED` | Tertiary accent (use rarely) |

### Color Pairing Rules

- **Red on cream/white**: Headers, accent text, CTAs
- **White on red**: Title slides, closing slides, quote callouts
- **White on navy**: Section divider slides only
- **Navy on cream**: Heading 2 level in documents
- **Never**: Red text on navy, navy text on red, pink text on anything

---

## 2. Typography

### Font Stack

| Context | Primary Font | Fallback | Weight Range |
|---------|-------------|----------|--------------|
| **Slides & Documents (English)** | Montserrat | Arial, Calibri | 300–800 |
| **Slides & Documents (Hebrew)** | Rubik | Noto Sans Hebrew, Arial | 300–800 |
| **Web/HTML (English)** | Montserrat | Arial, Helvetica, sans-serif | 300–800 |
| **Web/HTML (Hebrew)** | Rubik | Noto Sans Hebrew, sans-serif | 300–800 |
| **Monospace** | Courier Prime | Consolas, monospace | 400, 700 |

> **Note**: Brand font is Gotham/Gotham Condensed (IPMI guidelines). Montserrat is the approved web-safe equivalent. Always include Arial as system fallback for PPTX/DOCX since Montserrat may not be installed.

### Slide Typography Scale

| Element | Size | Weight | Font | Color |
|---------|------|--------|------|-------|
| Slide title | 36–44pt | Bold (700) | Montserrat | White (on dark bg) or brand-red (on light bg) |
| Section header | 28–32pt | Bold (700) | Montserrat | White (on navy) |
| Subtitle | 18–20pt | Regular (400) | Montserrat | White or text-muted |
| Body text | 14–16pt | Regular (400) | Montserrat | text-primary or text-secondary |
| Captions / labels | 10–12pt | Medium (500) | Montserrat | text-muted |
| Big number callout | 60–72pt | Bold (700) | Montserrat | brand-red |

### Document Typography Scale

| Element | Size (pt) | Weight | Color |
|---------|-----------|--------|-------|
| Title (Heading 1) | 28 | Bold | brand-red `#E10514` |
| Heading 2 | 20 | Bold | midnight-navy `#1A2744` |
| Heading 3 | 16 | Bold | text-primary `#1A1A2E` |
| Body | 11 | Regular | text-secondary `#333333` |
| Table header text | 11 | Bold | white `#FFFFFF` |
| Footer / watermark | 8 | Regular | text-muted `#64748B` |

### Typography Rules

- Headlines: Bold, large, action-oriented (not label titles)
- Body: Regular weight, clean, generous line height (1.4–1.6 in documents)
- Never mix more than 2 font families in a single output
- Hebrew text defaults to RTL; English to LTR
- No ALL CAPS except tiny labels (10px, with letter-spacing 0.06–0.08em)

---

## 3. Logo Usage

### Available Assets

| File | Path | Format | Description |
|------|------|--------|-------------|
| Full wordmark | `assets/passportcard-logo.svg` | SVG | Red pin icon + "PassportCard" text (113×66) |
| Icon mark | `assets/passportcard-logo-icon.svg` | SVG | Red pin mark only (31×37) |

### CDN URLs (for HTML outputs)

```
Full:  https://www.passportcard.co.il/wp-content/uploads/2023/07/logo.svg
Icon:  https://www.passportcard.co.il/wp-content/uploads/2023/07/logo-m.svg
```

### Placement Rules

| Context | Position | Version | Notes |
|---------|----------|---------|-------|
| Title slide | Centered | Full wordmark, white on red bg | Large, hero placement |
| Closing slide | Centered | Full wordmark, white on red bg | Matches title slide |
| Content slides | Top-left | Full wordmark, standard colors | Small (≈1.2" wide), 0.3" from edges |
| Documents header | Left-aligned | Full wordmark, standard colors | Small, with red line separator below |
| Favicon / badge | Any | Icon mark | Tiny contexts only |

### Logo Do's and Don'ts

- **Do**: Use SVG from assets/ folder when generating PPTX/DOCX
- **Do**: Use CDN URL for HTML outputs
- **Do**: White version on red/dark backgrounds, standard (red) version on light backgrounds
- **Don't**: Recolor, stretch, distort, or recreate manually
- **Don't**: Place over busy backgrounds or photos
- **Don't**: Scale below 0.5" wide (loses legibility)
- **Minimum clear space**: Equal to the height of the pin icon on all sides

---

## 4. Layout Patterns

### Slide Layouts (10 canonical types)

| # | Layout | Background | Key Elements |
|---|--------|-----------|--------------|
| 1 | **Title Slide** | Red gradient | White logo centered, large white title, lighter subtitle |
| 2 | **Section Divider** | Midnight navy | Large white section title, small page indicator |
| 3 | **Content - Text Focus** | Warm cream | Red headline, black body, logo watermark bottom corner |
| 4 | **Content - Two Column** | Warm cream | Left text column, right image/chart placeholder |
| 5 | **Content - Icon Grid** | Warm cream | 2×2 or 2×3 icon+text blocks with red accent circles |
| 6 | **Data - Big Number** | White | Large red stat numbers (60–72pt), small labels below |
| 7 | **Data - Comparison Table** | White | Red header row, alternating white/cream rows |
| 8 | **Data - Timeline/Process** | White | Horizontal flow, numbered red circles, connecting lines |
| 9 | **Quote/Callout** | Brand red | Large white italic text, attribution below |
| 10 | **Closing Slide** | Red gradient | Logo centered, "Thank you" or custom closing text |

### Document Layout Patterns

| Section | Background | Header | Footer |
|---------|-----------|--------|--------|
| **Cover page** | Full red background | None | None |
| **Content pages** | White | Logo left + red line separator + "Internal Use Only" right | Page number center + "Generated with SparkKit" left + date right |

### Spacing Rules

- **Slides**: 0.5" minimum margins on all sides, 0.3–0.5" between content blocks
- **Documents**: 1" margins all sides (A4 page size — PassportCard is international)
- **One key message per slide** — maximum white space
- **Never fill every inch** — breathing room is a brand principle

---

## 5. Photography Direction

### Style Guide

- **Tone**: Warm, lifestyle, travel-focused, real people
- **Subjects**: Travelers, families, professionals abroad, cityscapes, health/wellness settings
- **Mood**: Confident, at ease, protected — "Peace of Mind" positioning
- **Color grading**: Warm tones, natural light, slight golden cast
- **NOT**: Stock-looking, sterile, corporate, cold fluorescent lighting
- **NOT**: Overcrowded, overly staged, models with fake smiles

### Usage in Templates

- Photos work best as half-bleed elements (full left/right side of slide)
- Apply slight warm overlay if photo feels too cool
- Always ensure text over photos has sufficient contrast (use semi-transparent overlay if needed)

---

## 6. Illustration Style

### Characteristics

- **Style**: Flat design, clean lines, friendly
- **Colors**: Derived from brand palette (red, navy, cream, pink)
- **Shapes**: Geometric, rounded edges, consistent stroke weight
- **Tone**: Approachable, not childish — professional but human
- **Icons**: Use Lucide icons (web) or react-icons (PPTX) — no emojis

### Icon Treatment in Slides

- Icons placed in small brand-red circles (0.4–0.5" diameter)
- White icon on red circle background
- Consistent size within a layout grid
- Used for feature grids, process steps, section markers

---

## 7. Tone of Voice

### Five Principles (from Brand Identity 5)

| Principle | Description | In Practice |
|-----------|-------------|-------------|
| **Direct** | "We say what needs to be said, and no more" | Short sentences, no fluff, no filler words |
| **Confident** | "The strength of our products speaks for itself" | State facts, don't oversell, no superlatives |
| **Eye Level** | "We meet our customers where they are in life" | Conversational, not condescending, not overly formal |
| **Selective** | "Our customers have excellent judgment. We're not for everyone." | Premium positioning without arrogance |
| **Quality** | "Our customers are discerning, and so are we" | Attention to detail, precision in language |

### Six DO NOTs

| Avoid | Why |
|-------|-----|
| **Cold** | The brand is warm and human — never clinical or robotic |
| **Flippancy** | Take the customer's concerns seriously — never dismissive |
| **Fear** | Never use scare tactics or worst-case scenarios to sell |
| **Urgency** | No artificial deadlines, no "act now" pressure tactics |
| **Intimidation** | Never make the customer feel small or uninformed |
| **Overfamiliarity** | Friendly but professional — not casual or slang-heavy |

### Brand Personality Keywords

Friendly, Easy, Straightforward, Simple, Confident

### Application to SparkKit Outputs

- All generated text (reports, PRDs, presentations) follows these principles
- Headlines are action-oriented, not label titles ("Revenue grew 23%" not "Revenue Overview")
- Body text is clear and concise — remove every unnecessary word
- Data speaks for itself — present findings, don't editorialize

---

## 8. RTL Considerations for Hebrew

### Layout Rules

- Default direction: RTL for Hebrew content, LTR for English
- Set `direction: rtl` on root HTML element for Hebrew outputs
- Mirror layout elements: navigation on right, content flows right-to-left
- Tables: header row still top, but text right-aligned in cells
- Charts: axis labels and legends follow RTL reading order where possible

### Typography for Hebrew

- Primary Hebrew font: Rubik (300–800 weight range)
- Fallback: Noto Sans Hebrew, then Arial
- Hebrew text slightly larger than English at same visual weight (add 1pt for body text)
- Mixed Hebrew/English: use `dir="auto"` on inline elements to handle bidirectional text

### Testing RTL

- Verify slide layouts don't break with Hebrew text (text overflow, alignment issues)
- Verify table column alignment reverses correctly
- Verify logo placement remains consistent regardless of text direction
- Verify bullet points and numbered lists align to right margin

---

## Output Watermark

All generated documents carry this footer on every page:

> "Generated with SparkKit - PassportCard Internal Use Only. AI-assisted analysis - review by appropriate function required before external distribution."

---

*Source: Brand Identity 2 (social marketing), Brand Identity 3 IPMI (47pp, visual specs pp.18–20), Brand Identity 5 Updated (tone of voice). Compiled March 2026.*
*Reference for: spark-brand skill, all SparkKit phase skills that produce deliverables.*
