# PassportCard Brand Reference
## For SPARK Plugin Skills

---

## Logo Assets

Actual logo files are stored in `spark/assets/` and sourced from `passportcard.co.il`.

| File | CDN URL | Description | Use |
|------|---------|-------------|-----|
| `assets/passportcard-logo.svg` | [logo.svg](https://www.passportcard.co.il/wp-content/uploads/2023/07/logo.svg) | Full wordmark (113x66) — red pin icon + "PassportCard" text | Documents, headers, title slides |
| `assets/passportcard-logo-icon.svg` | [logo-m.svg](https://www.passportcard.co.il/wp-content/uploads/2023/07/logo-m.svg) | Icon only (31x37) — red pin mark | Favicons, small badges, sidebar |

### Logo Anatomy
- **Shape:** Stylized location-pin / teardrop with internal P-shaped white cutout
- **Color:** Solid `#E10514` red body + white inner mark
- **Wordmark:** "PassportCard" text in red, rendered in the SVG paths (not a separate font)
- **Do not:** Recolor, stretch, place over busy backgrounds, or recreate manually

### CDN Reference
```
Logo (full):  https://www.passportcard.co.il/wp-content/uploads/2023/07/logo.svg
Logo (icon):  https://www.passportcard.co.il/wp-content/uploads/2023/07/logo-m.svg
```

---

## Color System

### Primary Brand Colors

| Name | Hex | Use |
|------|-----|-----|
| Brand Red | `#E10514` | Primary CTA, logo, key accents — AUTHORITATIVE |
| Red Hover / Dark | `#B8050F` | Hover states, pressed states, dark variant |
| Red Gradient Dark | `#A2191C` | Gradient end point (e.g. `linear-gradient(328deg, #E10514 0%, #A2191C 100%)`) |
| Red Transparent | `rgba(225, 5, 20, 0.08)` | Hover backgrounds, subtle tints |
| Light Red | `#FFF1F1` | Active state backgrounds, selected rows |
| Soft Pink | `#FEBCBD` | Complementary backgrounds, UI soft accents |

> Note: Shipped CSS uses `#E30613` as the `--pc-red` variable (close variant). Use `#E10514` for new outputs. Both are acceptable in practice.

### Background Colors

| Name | Hex | Use |
|------|-----|-----|
| Page Background | `#F8F6F3` | Warm off-white — primary page/app background |
| Card Background | `#FFFFFF` | Content cards, panels |
| Off-White Alt | `#FAFAFA` | Secondary backgrounds |
| Cream | `#F0EDE8` | Section backgrounds, tinted areas |
| Section | `#EFEBE6` | Alternating section fills |

### Text Colors

| Name | Hex | Variable |
|------|-----|---------|
| Primary Dark | `#1A1A2E` | `--pc-dark` |
| Mid Dark | `#2D2D44` | `--pc-mid` |
| Slate (labels) | `#64748B` | `--pc-slate` |
| Muted | `#6B6B6B` | Secondary text |
| Light | `#9A9A9A` | Placeholders, disabled |

### Border

| Hex | Use |
|-----|-----|
| `#F1F5F9` | Light borders, card edges |
| `#E5E0DA` | Warmer borders (brand voice editor style) |
| `#E2E8F0` | Form inputs, separators |

### Semantic Colors

| Role | Hex | Variable |
|------|-----|---------|
| Success (green) | `#16A34A` | `--pc-green` |
| Warning (amber) | `#D97706` | `--pc-amber` |
| Info (blue) | `#2563EB` | `--pc-blue` |
| Accent (purple) | `#7C3AED` | `--pc-purple` |

### Status System

| Status | Background | Text |
|--------|-----------|------|
| Active | `#DCFCE7` | `#166534` |
| Draft | `#FEF3C7` | `#92400E` |
| Deprecated | `#FEE2E2` | `#991B1B` |
| Review | `#DBEAFE` | `#1E40AF` |

---

## CSS Variables (canonical set — from shipped Global Policy CSS)

```css
:root {
  --pc-red: #E30613;
  --pc-dark-red: #B8050F;
  --pc-light-red: #FFF1F1;
  --pc-bg: #F8F6F3;
  --pc-dark: #1A1A2E;
  --pc-mid: #2D2D44;
  --pc-slate: #64748B;
  --pc-white: #FFFFFF;
  --pc-border: #F1F5F9;
  --pc-green: #16A34A;
  --pc-amber: #D97706;
  --pc-blue: #2563EB;
  --pc-purple: #7C3AED;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  --transition-fast: 150ms ease;
  --transition-normal: 200ms ease;
  --transition-slow: 300ms ease;
}
```

---

## Typography

### Font Stack

| Role | Font | Weights | Use |
|------|------|---------|-----|
| **Primary** | `Rubik` | 300–800 | All Hebrew body text, UI labels, buttons |
| **Secondary** | `Montserrat` | 300–800 | English labels, numbers, priority badges, stepper circles |
| **Hebrew support** | `Noto Sans Hebrew` | 100–900 | Fallback for Hebrew rendering |
| **Monospace** | `Courier Prime` | 400, 700 | Code, technical fields |
| **Fallback** | `Arial, Helvetica, sans-serif` | — | System fallback |

**Critical:** Rubik is PRIMARY. Montserrat is for numeric/English-only contexts. The old reference listing "Montserrat or Roboto" as primary was wrong.

### Direction
- Default: RTL (`direction: rtl`) for Hebrew content
- English sections: LTR where appropriate
- Base font-size: `14px`

### Scale

| Level | Size | Weight | Notes |
|-------|------|--------|-------|
| Section title | 20px | 700 | Page/view headings |
| Card title | ~15px (0.95rem) | 700 | Panel headings |
| Body | 14px (base) | 400 | Default text |
| Small label | 12px | 500–600 | Form labels, breadcrumbs |
| Tiny label | 10px | 600 | Uppercase section headers, `letter-spacing: 0.06–0.08em`, `text-transform: uppercase` |
| Micro | 9px | 700 | Priority badges, `font-family: Montserrat` |

---

## Spacing (4px base unit)

| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 24px |
| `--space-6` | 32px |
| `--space-7` | 48px |
| `--space-8` | 64px |

---

## Border Radius

| Name | Value | Use |
|------|-------|-----|
| Small | `8px` | Buttons, inputs, small cards |
| Medium | `12px` | Cards, panels |
| Large | `16px` | Modals |
| XL | `24px` | Large decorative containers |
| Pill | `9999px` | Badges, avatars, toggles |
| Avatar | `50%` | Circular avatars |

---

## Shadows

| Level | Value |
|-------|-------|
| Small | `0 1px 3px rgba(0,0,0,0.04)` |
| Medium | `0 4px 20px rgba(0,0,0,0.06)` |
| Large | `0 10px 40px rgba(0,0,0,0.08)` |
| Card hover | `0 8px 25px rgba(0,0,0,0.08)` |
| Red accent | `0 4px 14px rgba(225,5,20,0.25)` |

---

## Design Language

### Visual Strategy
- "Peace of Mind" brand positioning — calm, trustworthy, professional
- High-contrast: White on Red OR Red on White for key actions
- Red as accent only — never as full content-area background
- Warm off-white (`#F8F6F3`) for page backgrounds, not cold white

### Layout Rules
- Generous whitespace
- Sidebar: white bg, RTL layout (`border-right: 1px solid --pc-border`)
- Active sidebar item: `background: #FFF1F1`, `border-left: 3px solid #E30613`, `color: #E30613`
- Sticky header: `background: rgba(255,255,255,0.8)`, `backdrop-filter: blur(12px)`
- No emojis — use Tabler Icons (`ti-*`) or Lucide icons
- No "AI slop": no purple gradients, no generic rounded cards on white with Inter font

### Component Patterns

**Cards**
- `background: white`, `border: 1px solid #F1F5F9`, `border-radius: 12px`
- Hover: `transform: translateY(-2px)`, `box-shadow: 0 8px 25px rgba(0,0,0,0.08)`

**Buttons**
- Primary: `background: #E30613`, `color: white`, `border-radius: 8px`, `font-weight: 600`, `font-family: Rubik`
- Primary hover: `background: #B8050F`
- Outline: `background: white`, `border: 1px solid #e2e8f0`
- Danger outline: `background: white`, `color: #E30613`, `border: 1px solid rgba(227,6,19,0.2)`

**Badges**
- `font-size: 10px`, `font-weight: 600`, `padding: 2px 8px`, `border-radius: 9999px`

**Tables**
- Header: `font-size: 10px`, `font-weight: 600`, `color: #64748B`, `text-transform: uppercase`, `letter-spacing: 0.06em`
- Row hover: `background: rgba(248,250,252,0.5)`

**Form inputs**
- `border: 1px solid #e2e8f0`, `border-radius: 8px`, `font-family: Rubik`
- Focus: `border-color: #E30613`, `box-shadow: 0 0 0 2px rgba(227,6,19,0.1)`

**Toggle / Active states**
- On: `background: #E30613`
- Off: `background: #d1d5db`

### Responsive Breakpoints
- Desktop: 1024px+
- Tablet: 768px–1023px (sidebar collapses to icon-only, expands on hover)
- Mobile: below 768px (sidebar becomes drawer, bottom nav appears)

---

## Animations

| Name | Spec |
|------|------|
| Fade in | `opacity 0→1`, `translateY 8px→0`, `300ms ease` |
| Card hover lift | `translateY(-2px)`, `200ms ease` |
| Button hover lift | `translateY(-2px)`, `150ms ease` |
| Slide up | `opacity 0→1`, `translateY 20px→0`, `300ms ease` |
| Success pop | `scale 0.5→1→1.1→1`, `500ms ease` |
| Shimmer (skeleton) | `background-position` sweep, `1.5s infinite` |
| Wizard slide | `translateX(-20px)→0`, `400ms ease` |

---

## Output Watermark

All generated documents carry this footer:
> "Generated with SPARK - PassportCard Internal Use Only. AI-assisted analysis - review by appropriate function required before external distribution."

---

## Version Note

| Source | Red Value | Notes |
|--------|----------|-------|
| Official brand identity (passportcard.co.il logo) | `#E10514` | AUTHORITATIVE — use for new outputs |
| Brand Voice Editor CSS | `#E10514` | Matches official |
| Shipped CSS (Global Policy) | `#E30613` | Implementation variant — acceptable |
| Alon's enhancement brief | `#E3000F` | Close variant |

---

*Source: PassportCard official brand identity (passportcard.co.il) + Global Policy Factory CSS + Brand Voice Editor CSS (March 2026)*
*Logo files: `spark/assets/passportcard-logo.svg`, `spark/assets/passportcard-logo-icon.svg`*
*Reference for: All SPARK plugin skills that produce visual output*
