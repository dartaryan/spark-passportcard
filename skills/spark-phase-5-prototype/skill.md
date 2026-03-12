---
name: spark-phase-5-prototype
description: Phase 5 of the SparkKit pipeline. Builds a single-file HTML working prototype that simulates the actual product experience. Not a landing page, not a mockup -- a functional product simulation with real interactions, sample data, and brand-compliant design. Produces Handoff Document #5. Invoke with /spark-phase-5. Requires approved Brief + PRD from Phase 4.
argument_hint: Begin Phase 5 Prototype - build a working HTML product simulation
---

# Phase 5: Working HTML Prototype

## Objective

Build a single-file HTML working prototype that simulates the actual product experience. This is an interactive product simulation, not a marketing page or wireframe.

## Prerequisites

User MUST upload ALL handoff documents (#1, #2, #2.5, #3) AND the approved Brief + PRD from Phase 4. Read them all before building. If any document is missing, stop and ask for it.

## Critical Rule: This Is a WORKING PROTOTYPE

The output must be a functional simulation of the product:

- If the product is a game: build the game
- If the product is a dashboard: build the dashboard with sample data
- If the product is a social app: build the feed, profile, and interactions
- If the product is a tool: build the tool with functional UI
- If the product is an internal system: build the interface with realistic sample workflows

A landing page, marketing page, or static mockup is NOT acceptable output for this phase.

## Technical Stack (Single HTML File)

```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://unpkg.com/lucide@latest"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<!-- Add appropriate Google Font based on design direction from Phase 3 -->
```

Everything lives in ONE file: HTML structure, CSS customization, JavaScript logic.

## Design Rules

1. **NEVER use emojis.** Always use icon libraries. Primary: Lucide. Alternatives: Tabler, Heroicons.
2. **Typography:** Choose fonts matching the design inspiration from Phase 3. Use Google Fonts.
3. **Color system:** Use CSS variables. Apply PassportCard brand tokens if spark-brand is active (read `references/passportcard-brand.md`).
4. **Responsiveness:** Mobile-friendly. Test at 375px and 1440px widths.
5. **Accessibility:** WCAG 2.1 AA minimum: sufficient color contrast, keyboard navigable, screen-reader friendly labels.
6. **Micro-interactions:** Hover states, transitions, subtle animations. The prototype should feel alive.

### Lucide Icon Usage

```html
<script>lucide.createIcons();</script>
<i data-lucide="home"></i>
```

## Design Execution by Inspiration Source

Read the design direction from Phase 3 Handoff Document #3. Apply the matching style:

**Apple / PassportCard default:**
- White/light backgrounds, generous spacing
- Plus Jakarta Sans or Outfit from Google Fonts
- Subtle shadows, glass morphism effects
- Large bold headlines, thin body text
- Rounded corners on cards (12-16px)
- PassportCard brand colors: #E10514 (red), #1A2744 (navy), white, light gray

**Linear:**
- Dark backgrounds (#0A0A0B or similar)
- JetBrains Mono + clean sans-serif body
- Purple/violet accent colors
- Sharp or slightly rounded corners

**Monday / Notion:**
- Bright, playful color palette with white base
- Nunito, DM Sans, or Poppins
- Colorful status indicators and tags

**Stripe / Fintech:**
- Ultra-clean white space
- Source Sans 3 or IBM Plex Sans
- Subtle gradients on hero sections
- Precise typography hierarchy

**Analytics / Data:**
- Dashboard-centric layout, chart-heavy
- System fonts + clean sans-serif
- Data visualization as primary design element

**Insurance / Financial:**
- Clean, professional, trust-communicating
- PassportCard brand enforcement per spark-brand
- Clear information hierarchy, no decorative clutter

If the Phase 3 design direction does not match any of the above, use the Apple / PassportCard default.

## Build Process

Follow this sequence. Do not skip steps.

### Step 1: Plan the UI

Based on Phase 3 features and the PRD from Phase 4:
- Identify the main screens or states the prototype needs
- Determine what sample data is required
- Map the user flow through the prototype

Present the plan to the user: "Here is what I will build: [list of screens/states]. The sample data will include [examples]. The main user flow will be [description]. Shall I proceed?"

Wait for confirmation.

### Step 2: Build the Shell

- HTML structure with Tailwind classes
- Layout, navigation, content areas
- Responsive grid system

### Step 3: Add Interactivity

- JavaScript for state changes, click handlers
- Sample data (realistic, matching the persona from Phase 1)
- Functional UI elements: forms submit, buttons navigate, data displays update

### Step 4: Polish

- Animations (CSS transitions, subtle transforms)
- Hover effects
- Consistent spacing and alignment
- Loading states where appropriate

### Step 5: Verify

Before presenting to the user:
- [ ] All CDN links load correctly
- [ ] Icons render (Lucide createIcons called after DOM ready)
- [ ] All interactions work (clicks, state changes, navigation)
- [ ] No console errors
- [ ] Responsive at mobile and desktop widths
- [ ] Color contrast meets WCAG AA
- [ ] Brand tokens applied correctly (if PassportCard branding active)

## Sample Data Guidelines

Sample data must be:
- Realistic for the product domain (use plausible names, numbers, dates)
- Consistent with the persona established in Phase 1
- Sufficient to demonstrate all features (minimum 5-10 data items per list/table)
- Never obviously fake ("John Doe", "Lorem Ipsum", "Test User")

For PassportCard internal products: use travel insurance domain data (countries, policy types, claim scenarios, coverage amounts in relevant currencies).

## Hard Gate (DO NOT PROCEED WITHOUT THIS)

After building the prototype:

1. Present the complete HTML file.
2. Ask: "Try interacting with the prototype. Does it capture the product experience you envisioned? Any screens, features, or interactions that need adjustment?"
3. Iterate based on feedback. This may take 1-3 rounds.
4. When the user approves, ask: "Ready to proceed to Phase 6 (Deployment Guidance)?"
5. Wait for explicit confirmation before advancing.

DO NOT advance to Phase 6 without user approval of the prototype. This gate is non-negotiable.

## Handoff Document #5

After user approval, produce:

```markdown
# SparkKit -- Handoff Document #5: Working HTML Prototype
<!-- Project: [name] | Phase 5 of 9 | Version: 1.0 | Date: [date] -->
<!-- Created by PassportCard SparkKit -- for internal use only -->

## Agent Instructions
- **Project name:** [name]
- **Phase completed:** 5 -- Working HTML Prototype
- **Next phase:** 6 -- Deployment Guidance
- **Document version:** 1.0
- **Session summary:** [2-3 sentences: what was built, design direction applied, key interactions implemented]
- **Key decisions:**
  - Design direction applied: [style]
  - Typography: [fonts used]
  - Color palette: [colors applied]
  - Brand enforcement: [yes/no, which brand]
- **Previous handoffs:** Builds on Documents #1, #2, #2.5, #3, #4

## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [date] | Initial creation |

## Work Product: Prototype Specification

### Screens / States Built
| Screen | Description | Key Interactions |
|--------|-------------|-----------------|
| [Screen name] | [What it shows] | [What user can do] |

### Sample Data Used
[Description of sample data: types, volume, domain]

### Technical Details
- **File:** [filename].html (single file)
- **CDN dependencies:** Tailwind CSS, Lucide Icons, [Google Font]
- **JavaScript features:** [list of interactive behaviors]
- **Responsive breakpoints:** Mobile (375px), Desktop (1440px)

### Accessibility Compliance
- Color contrast: [Pass/Fail]
- Keyboard navigation: [Pass/Fail]
- Screen reader labels: [Pass/Fail]

### User Feedback and Iterations
| Feedback | Resolution |
|----------|-----------|
| [What user requested] | [What was changed] |

### Known Limitations
- [Limitation]: [reason and whether it matters for the prototype purpose]
```

## After Approval

Tell the user:
"Your working prototype is complete. Download the HTML file. When you are ready for Phase 6 (Deployment Guidance), open a new conversation, upload all handoff documents plus this one, and invoke /spark-phase-6."
