# Knowledge Reference Document

---

## Metadata

- **Source:** YouTube transcript
- **Video URL:** https://www.youtube.com/watch?v=Iup1WlUyj9M
- **Speaker(s):** Unidentified (designer/content creator focused on AI-assisted design workflows)
- **Estimated date:** Late 2025 / early 2026 (based on references to Claude skills system, Figma MCP server integration, and Claude Code)
- **Primary topics:** Claude skills for designers, UI generation with AI, Figma-to-code workflow, custom skill creation, AI design tooling
- **Products/tools covered:** Claude, Claude Code, Figma, Figma MCP server, Photoshop, Illustrator

---

## Concepts & Definitions

* **Skill (in Claude):** A simple plug-in for Claude. It is a set of instructions and resources that completely changes how Claude approaches specific types of tasks. Every skill is a folder containing a `skill.md` file at the root (the "brain"), and optionally scripts, reference documents, and other assets.

* **skill.md file:** The core instruction document inside a skill folder. It contains a name, a description (which controls when the skill triggers), and the actual instructions that guide Claude's behavior.

* **AI slop:** A term used within the front-end design skill to describe overused AI-generated visual patterns, specifically: purple gradients, same rounded corner cards on white backgrounds, and Inter font used everywhere. The front-end design skill explicitly bans these patterns.

* **Front-end aesthetics guidelines:** A section within the front-end design skill that reads "like it was written by a senior product designer." It covers typography, color, motion, spatial composition, and atmosphere.

* **Design thinking process (within the skill):** Before writing code, the front-end design skill forces Claude through a process that considers four things: purpose, tone, constraints, and differentiation.

* **MCP (in context of Figma):** A server connection that acts as a bridge letting Claude read Figma files directly. Required for the Figma skill to function.

---

## Capabilities & Features

* **Front-end design skill:** Forces Claude through a design thinking process (purpose, tone, constraints, differentiation) before writing any code. Includes front-end aesthetics guidelines covering typography, color, motion, spatial composition, and atmosphere. Explicitly bans "AI slop" patterns. | Claude | Described as the most valuable skill for UI design.

* **Typography guidance (front-end design skill):** Tells Claude to avoid generic fonts like Inter and Arial [transcribed as "enter and aerial"] and instead choose "distinctive, character-full type pairings." | Claude | Part of the front-end aesthetics guidelines section.

* **"What not to do" rules (front-end design skill):** The skill explicitly tells Claude what to avoid -- overused purple gradients, rounded corner cards on white backgrounds, Inter font everywhere. | Claude | Designed to move output from "obviously AI generated" to "actually looks designed."

* **Figma skill (official from Figma):** Takes a Figma URL and translates the design into production-ready code with close to 1:1 visual fidelity. | Claude + Figma MCP server | Requires Figma MCP server to be connected and enabled in Claude.

* **Figma skill -- design parsing:** Parses the Figma URL, pulls the file key and node ID, calls the Figma MCP server to fetch the full design context. Reads actual layout properties, auto layout settings, typography specs, color values, spacing tokens. Takes a screenshot of the design as visual reference. Downloads assets like icons or images. | Claude + Figma MCP server | None stated.

* **Figma skill -- codebase mapping:** Has a section on translating Figma output into the project's actual conventions. If the codebase uses a specific component library or design system, it maps to that. Reuses existing buttons, inputs, and typography components instead of recreating them. | Claude + Figma MCP server | None stated.

* **Figma skill -- validation checklist:** At the end, runs a validation checklist comparing output against the Figma screenshot. Checks: layout, typography, colors, interactive states, responsive behavior, accessibility. | Claude + Figma MCP server | None stated.

* **Theme Factory skill:** Provides 10 pre-built professional themes. Each theme is a complete package with a curated color palette and carefully paired fonts (header and body font pairings). | Claude | Can be applied to slides, documents, web pages, dashboards, reports, or any artifact Claude generates.

* **Theme Factory -- theme variety:** Each theme has a distinct visual identity designed for specific contexts and audiences. Options work for corporate presentations, creative pitches, editorial layouts, and more. Provides typographic hierarchy and harmonious color palettes. | Claude | None stated.

* **Brand guidelines skill:** Out of the box, set up with Anthropic's brand (colors, typography, visual identity rules). Takes brand rules (hex codes, font stacks, spacing values, logo usage, tone) and enforces them automatically across everything Claude generates. | Claude | Intended to be used as a template -- users swap in their own brand tokens.

* **Brand guidelines skill -- customization:** Users can swap in their own brand tokens: primary and secondary colors, heading and body fonts, spacing scale, dos and don'ts. Can be shared with non-designers (marketing, sales) so anything they generate in Claude automatically follows the visual standards. | Claude | Described as a quicker way to get UI that follows desired style guidelines, though connecting Claude to Figma via MCP gets more accurate results.

* **Canvas design skill:** Creates actual visual art (posters, graphics, static design pieces) as real PNG and PDF files. Two-step process: (1) Claude creates a written design philosophy / aesthetic manifesto defining a visual movement, principles, forms, colors, and composition rules. (2) Claude takes that philosophy and expresses it on a canvas as a real image file. | Claude | Will not replace Photoshop or Illustrator. Not Claude's main use case.

* **Skill creator (meta-skill):** A skill for making skills. Workflow: user tells Claude what the skill should do, Claude interviews the user about edge cases / input formats / output expectations, Claude writes a draft `skill.md` file, creates test prompts, runs them, shows results. User gives feedback, Claude revises, repeat. | Claude | Iterative design process.

* **Skill packaging and sharing:** When done, skills can be packaged as a skill file and shared -- installed on another machine, sent to a teammate, shared with the community. | Claude | Described as "like building your own design plug-in."

* **Complete creative toolkit (summary of all skills):** The speaker summarizes the full set as: UI generation, Figma to code, theming, brand enforcement, and visual art. Also references "implement design" [unclear in transcript -- likely referring to one of the previously mentioned skills] as rounding out the designer's toolkit. | Claude | None stated.

---

## How-To / Workflows

### Using the Front-end Design Skill to Generate a Landing Page

1. Have the front-end design skill installed in Claude.
2. Write a single prompt asking Claude to generate a landing page (or dashboard, component, etc.).
3. The skill automatically kicks in and forces Claude through a design thinking process before touching code.
4. Claude considers: purpose, tone, constraints, and differentiation.
5. Claude applies front-end aesthetics guidelines (typography, color, motion, spatial composition, atmosphere).
6. Claude avoids "AI slop" patterns.
7. Claude generates the output.

### Using the Figma Skill (Figma to Code)

1. Ensure the Figma MCP server is connected and enabled in Claude.
2. Paste a Figma URL into Claude (typically a screen you have designed).
3. The skill parses the URL, pulls the file key and node ID.
4. The skill calls the Figma MCP server to fetch the full design context (layout properties, auto layout settings, typography specs, color values, spacing tokens).
5. The skill takes a screenshot of the design as a visual reference.
6. The skill downloads any assets (icons, images).
7. The skill starts building code, mapping to the project's actual conventions and component library.
8. The skill runs a validation checklist (layout, typography, colors, interactive states, responsive behavior, accessibility) against the Figma screenshot.

### Creating a Custom Skill Using the Skill Creator

1. Tell Claude what you want the skill to do (e.g., generate mobile app screens in your company's design system, write UX copy in your brand voice).
2. Claude interviews you -- asks about edge cases, input formats, output expectations.
3. Claude writes a draft of the `skill.md` file.
4. Claude creates test prompts, runs them, and shows you results.
5. You evaluate whether the skill is working.
6. You give feedback, Claude revises.
7. Repeat until satisfied.
8. Optionally, package the skill as a skill file and share it.

### Building a Brand Guidelines Skill for Your Company

1. Use the existing brand guidelines skill (pre-loaded with Anthropic's brand) as a template/reference.
2. Have Claude swap in your own brand tokens: primary and secondary colors, heading and body fonts, spacing scale, dos and don'ts, hex codes, font stacks, spacing values, logo usage, tone.
3. Once configured, Claude knows your brand and automatically enforces it across everything it generates.
4. Optionally, share the skill with non-designers on your team (marketing, sales) so their Claude-generated outputs also follow visual standards.

---

## Architecture & Technical Details

### Skill File Structure

- Every skill is a **folder**.
- At the root of the folder is a **`skill.md`** file (the core instruction document / "brain").
- Optionally includes: scripts, reference documents, and any other assets.

### skill.md File Structure

- **Name**: identifier for the skill
- **Description**: controls when the skill triggers
- **Instructions**: the actual behavioral instructions for Claude

### Figma MCP Server Integration

- The Figma skill requires the **Figma MCP server** to be connected.
- The MCP server must be **enabled in Claude** before using the Figma skill.
- It acts as a **bridge** that lets Claude read Figma files.
- The skill parses Figma URLs to extract: **file key** and **node ID**.
- Data fetched from Figma includes: layout properties, auto layout settings, typography specs, color values, spacing tokens.

### Skill Packaging

- Completed skills can be packaged as a **skill file** (referenced as "akill file" in transcript, likely ".skill file" -- [unclear in transcript]).
- Can be installed on another machine, sent to teammates, or shared with the community.

---

## Comparisons & Trade-offs

| Approach | Accuracy | Setup Effort | Notes |
|---|---|---|---|
| Brand guidelines skill | Quicker way to get style-consistent UI | Lower (template-based) | Less accurate than Figma MCP connection |
| Connecting Claude to Figma via MCP | More accurate results | Higher (requires MCP server setup) | Speaker suggests this is the better option for accuracy |

| Tool | Use Case | Limitations |
|---|---|---|
| Canvas design skill | Posters, social graphics, abstract art, visual concepts | Will not replace Photoshop or Illustrator; not Claude's main use case |
| Front-end design skill | UI generation (landing pages, dashboards, components) | Described as the most valuable skill for UI design |

---

## Limitations & Gotchas

* **Figma skill requires MCP server:** The Figma skill will not work without the Figma MCP server being connected and enabled in Claude. This is a prerequisite, not optional.

* **Canvas design skill is not a replacement for design tools:** The speaker explicitly states it will not replace Photoshop or Illustrator, as visual art creation is not Claude's main use case.

* **Brand guidelines skill has accuracy limits:** Connecting Claude to Figma via MCP is stated to produce more accurate results than using the brand guidelines skill alone.

* **Figma-to-code quality without the skill:** The speaker references the common experience of giving a screenshot to Claude, telling it to turn it into code, and "it comes out looking terrible." The Figma skill is designed to close that gap.

---

## Opinions & Recommendations

* **[Opinion]** The front-end design skill is "hands down the most valuable skill for UI design right now."

* **[Opinion]** The front-end aesthetics guidelines section "reads like it was written by a senior product designer."

* **[Opinion]** The front-end design skill is the "real headliner" among Claude skills for designers.

* **[Opinion]** The brand guidelines skill is "especially powerful if you're on a small team where there's no dedicated design system person enforcing consistency."

* **[Opinion]** The canvas design skill is "a really interesting tool" for exploring visual directions quickly in seconds.

* **[Opinion]** Skills are "just one piece of the puzzle" when it comes to building using Claude, and there is "a lot more to learn" for using Claude for most or all of the design process.

* **[Opinion]** The Figma skill means "you don't need to be a developer to use it. You paste a link, Claude does the rest."

* **[Opinion]** The brand guidelines skill is a concept "that every in-house or agency designer should pay attention to."

* **[Recommendation]** The speaker recommends a separate video on their full design workflow using Claude Code for further learning.

* **[Recommendation]** The speaker suggests that connecting Claude to Figma via MCP produces more accurate results than the brand guidelines skill approach.

---

## Concrete Examples

* **Landing page generation demo:** The speaker generates a full landing page live from a single prompt using the front-end design skill, to demonstrate that the skills work in practice. (The actual prompt and output details are not shown in the transcript text.)

* **Use cases for Theme Factory:** Applying themes to slides, documents, web pages, dashboards, reports. Specific context examples: corporate presentations, creative pitches, editorial layouts.

* **Use cases for Canvas design skill:** Event posters, social graphics, abstract art for presentations, visual concepts for quick exploration.

* **Custom skill examples mentioned:** A skill that generates mobile app screens in a company's design system. A skill that writes UX copy in a brand voice.

* **Brand guidelines sharing scenario:** Sharing the brand guidelines skill with non-designers on a team (marketing, sales) so anything they generate in Claude automatically follows visual standards.

---

## Quotes Worth Preserving

* "Think of it as like a simple plug-in for Claude."
* "The skill explicitly tells Claude what not to do."
* "It literally bans what it calls AI slop."
* "You're not just a user of these skills, you're a creator."
* "Claude isn't just guessing. It has a design playbook preloaded."
* "It's an iterative design process just like how we design products."

---

## Summary of All Skills Covered

| Skill Name | Primary Function | Key Requirement |
|---|---|---|
| Front-end design | UI generation with design thinking process | None stated |
| Figma (official) | Figma URL to production-ready code | Figma MCP server must be enabled |
| Theme Factory | 10 pre-built professional themes | None stated |
| Brand guidelines | Brand enforcement across Claude outputs | Customization needed for non-Anthropic brands |
| Canvas design | Visual art creation (PNG/PDF) | None stated |
| Skill creator | Meta-skill for building custom skills | None stated |
