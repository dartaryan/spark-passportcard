# SPARK Agent System -- Knowledge Extraction from 8 Source Documents

---

**Generated:** 2026-03-11
**Purpose:** Extract all information relevant to building SPARK -- a modular, workflow-strict product strategist agent for a large insurance company (1,000+ employees).
**Source documents:** 8 YouTube transcript knowledge documents covering Claude skills, plugins, Co-work, scheduled tasks, and related systems.

**Document Index:**

| Video ID | Primary Topic |
|---|---|
| 1GZYNyuL6Lg | Claude Plugins and Skills (overview, structure, GitHub marketplace) |
| F6T3WkTWYX4 | Scheduled Tasks (creation methods, use cases, limitations) |
| Iup1WlUyj9M | Designer Skills (skill.md structure, brand guidelines, theme factory, Figma MCP) |
| Namp-sV0UEw | Co-work Setup (Claude MD, connectors, Zapier MCP, scheduled tasks) |
| RAZVk5NPNtE | Skill Creator Skill, Evals, Benchmarks, Trigger Tuning, Live Build |
| RL6hK-Xo7cM | 7 Co-work Skills (morning briefing, research, slides, diagrams, skill creator) |
| b9gvuODIiQU | Skills/Commands/Plugins/Connectors (architecture, Zapier MCP, scheduling) |
| gm8Ci8X2mpo | 10 Claude Code Skills (installation, front-end design, security, document parsing) |

---

## 1. DISTRIBUTION ARCHITECTURE

### 1.1 Plugin Installation Methods

Five distinct methods for distributing skills/plugins to users are documented:

**Method 1: Anthropic Default Plugin Library**
- Browse and install pre-built plugins from Anthropic's default library.
- Path: Claude Desktop App > Plugins > Browse Plugins.
- Available categories: Bio Research, Data, Legal, Marketing, Finance, HR, Engineering, Design.
- One-click install.
- [Source: 1GZYNyuL6Lg, b9gvuODIiQU]

**Method 2: Plugin Upload (Manual)**
- Users can upload their own plugins manually.
- Path: Claude Desktop App > Plugins > Personal > Upload Plugin.
- Skill files can be uploaded as markdown (.md) files or ZIP files.
- Drag-and-drop into the skills interface.
- When uploading a skill that already exists, the interface shows "upload and replace."
- [Source: 1GZYNyuL6Lg, Namp-sV0UEw, RL6hK-Xo7cM]

**Method 3: Install from GitHub Marketplace**
- Path: Browse Plugins > switch from Anthropic tab to Personal > Plus button > "Add from Marketplace from GitHub."
- Paste the URL (or the end of the URL) of the GitHub repository.
- Hit Sync.
- Once loaded, browse available plugins and hit Install on desired ones.
- Example given: "awesome Claude plugins" repository.
- [Source: 1GZYNyuL6Lg]

**Method 4: Install from URL**
- Path: Claude Desktop App > Plugins > Personal > Add from URL.
- Users install plugins by providing a URL shared by someone else.
- No other constraints stated.
- [Source: 1GZYNyuL6Lg]

**Method 5: npx Command (Claude Code)**
- Skills installed via `npx` command in the terminal.
- When prompted, select "Claude Code" as the agent to install to.
- Choose global installation (accessible from anywhere) or local.
- Installation takes approximately half a second.
- Over 60,000 published skills exist in this ecosystem.
- [Source: gm8Ci8X2mpo]

### 1.2 Plugin Sharing and Team Distribution

- Custom plugins (skills, connectors, workflows) can be exported and shared with team members. [Source: b9gvuODIiQU]
- Skills can be packaged as a "skill file" and shared -- installed on another machine, sent to a teammate, shared with the community. [Source: Iup1WlUyj9M]
- Brand guidelines skills can be shared with non-designers (marketing, sales) so anything they generate in Claude automatically follows visual standards. [Source: Iup1WlUyj9M]
- Distribution formats include: markdown files, ZIP files, GitHub repositories, URLs.
- The Anthropic Skills Repository on GitHub contains official skills. [Source: gm8Ci8X2mpo]

### 1.3 Centralized Administration Capabilities

**COVERAGE GAP:** No document describes an explicit enterprise admin panel, centralized push mechanism, or managed settings where one administrator controls skill distribution to all employees. The closest patterns are:

- GitHub marketplace sync: An admin could maintain a GitHub repository, and users would sync from it. But this requires each user to manually add the GitHub URL and hit Sync. [Source: 1GZYNyuL6Lg]
- URL-based sharing: An admin could host plugins at a URL, and users install via "Add from URL." But each user must manually add the URL. [Source: 1GZYNyuL6Lg]
- Plugin upload: An admin could distribute .md or .zip files via internal channels (email, shared drive), and each user uploads them. [Source: Namp-sV0UEw, RL6hK-Xo7cM]

**No mention of:** Enterprise plan distribution features, managed settings, admin controls, automatic propagation of updates, or any centralized deployment mechanism across all documents.

### 1.4 Plugin Update Mechanisms

- The Vercel Web Design Guidelines Skill fetches latest guidelines from a source URL, meaning the publisher can update rules over time without updating the skill itself. This is a pattern for dynamic, remotely-updatable skill content. [Source: gm8Ci8X2mpo]
- Customization of installed plugins is possible via the "Customize" button -- users talk to Claude about improvements. [Source: 1GZYNyuL6Lg]
- No mention of automatic version updates or push-based update propagation across any document.

### 1.5 Installation Scopes (Claude Code)

When installing a skill via `/plugins` > manage plugins:
- **Just for you** (user-level)
- **For the project** (project-level)
- **Locally**
- May require restarting Claude Code after installation.
- [Source: RAZVk5NPNtE]

---

## 2. PLUGIN COMPOSITION ARCHITECTURE

### 2.1 Plugin vs. Skill Distinction

| Aspect | Skill | Plugin |
|---|---|---|
| Scope | Single task / one job | Entire job role / multiple tasks |
| Composition | One set of custom instructions | Multiple skills + tools + connectors bundled together |
| Analogy | "Recipe card for cooking one meal" | "Experienced chef who knows the whole recipe book" |
| Example | Create a branded invoice | Full finance department function (auditing, reconciliation, statements, close management, invoicing) |
| Independence | Runs standalone in any chat | Orchestrates multiple skills and tools in tandem |
| File format | Markdown (.md) | Bundle of markdown files + commands + connectors + sub-agents |

[Source: 1GZYNyuL6Lg, b9gvuODIiQU]

### 2.2 Plugin Internal Components

A plugin bundles together:
1. **Skills** (multiple) -- background instructions (rules, voice, process, context). Passive, always available.
2. **Commands** -- shortcut tasks triggered manually by slash command. Active manual triggers that load associated skills, call tools, and run steps.
3. **Connectors** -- external service integrations (e.g., Snowflake, Databricks, Google Cloud BigQuery, Slack, MS365).
4. **Sub-agents** -- mentioned as a component within plugins. No further structural detail provided in any document.
5. **Files** -- supporting files and resources.
6. **Instructions** -- overarching plugin instructions.

[Source: 1GZYNyuL6Lg, b9gvuODIiQU]

### 2.3 Skill vs. Command Distinction

| Concept | Function | Activation | Behavior |
|---|---|---|---|
| Skill (.md) | Background instructions (rules, voice, process, context) | Automatic -- Claude reads when relevant | Passive, always available |
| Command (.md) | Trigger-based workflow execution | Manual -- user types slash command (e.g., `/morning`) | Active, loads skills, calls tools, runs steps |

[Source: b9gvuODIiQU]

### 2.4 Commands Chaining Multiple Skills

- A command triggers multiple skills in sequence.
- Example: "outbound pipeline" command that includes three skills -- lead qualification, lead qualifier, and personalized outreach skill.
- Commands allow chaining multiple skills into sequential workflows.
- [Source: F6T3WkTWYX4]

### 2.5 Plugin Creation Methods

**Method 1: Install from Anthropic default library**
One-click install from browse menu. [Source: 1GZYNyuL6Lg]

**Method 2: Claude builds the plugin from scratch**
1. Open Co-work with a project loaded (for business context).
2. Ask Claude for plugin ideas for your business.
3. Answer Claude's follow-up questions (what you want to achieve, what kind of output, what connectors).
4. Tell Claude to build the plugin.
5. Wait for Claude to complete building.
6. Hit "Save Plugin" -- no download/upload step required.
7. The plugin appears in your plugins list ready to use.
[Source: 1GZYNyuL6Lg]

**Method 3: Customize an existing plugin**
1. Click the Customize button on the plugin.
2. Tell Claude how you want to modify it.
3. You can add existing skills into the plugin.
[Source: 1GZYNyuL6Lg]

### 2.6 Plugin Inspection

- After installing, hit Manage on the plugin.
- View the files, instructions, and abilities of the plugin.
- Click Commands to see available tasks.
- Click Connectors to see which external services the plugin can access.
- [Source: 1GZYNyuL6Lg]

### 2.7 Multi-Agent Architecture within Skills

The "idea mining" skill demonstrates sub-agent orchestration:

```
Main Agent
  |
  +--> YouTube Agent (analyzes YouTube comments, niche videos) --+
  |                                                               |
  +--> Research Agent (analyzes AI trends on X and the web) ------+
                                                                  |
                                           Main Agent <-----------+
                                           (scores, cross-references,
                                            generates video ideas)
```

- The two sub-agents run in parallel.
- Both send output back to the main agent.
- The main agent scores, cross-references, and produces final output.
- [Source: RAZVk5NPNtE]

---

## 3. SKILL FILE ARCHITECTURE

### 3.1 Folder Structure

Every skill is a **folder** containing:

```
skill-name/
  skill.md          # Core instruction document ("brain")
  scripts/          # Optional scripts
  references/       # Optional reference documents
  assets/           # Optional assets (images, templates, logos)
```

[Source: Iup1WlUyj9M]

In the Claude Code context, the observed structure:

```
.claude/
  skills/
    youtube-weekly-roundup/
      skill.md          # Main skill definition (YAML frontmatter + markdown instructions)

scripts/
  youtube-weekly-roundup/
    prepare-data.*      # Data preparation script
    render-report.*     # Report rendering script
  fetch-youtube-data.*  # Pre-existing script the agent found and reused
```

[Source: RAZVk5NPNtE]

### 3.2 skill.md File Structure

**YAML Frontmatter:**

```yaml
name: [skill name]
description: [skill description -- controls when the skill triggers]
disable_model_invocation: false   # When false: allows natural language invocation
                                  # When true: requires explicit slash command
argument_hint: [context hint for the skill -- when Claude Code decides to use
               the skill, it sends this hint providing context]
```

[Source: RAZVk5NPNtE]

**Markdown Body:**

Below the YAML frontmatter, the markdown body contains:
- **Context** -- background information the skill needs
- **Benchmarks/parameters** -- channel benchmarks, optional focus areas
- **Step-by-step instructions** -- the actual workflow Claude follows
- **References to scripts and resources** -- the skill.md file points to all scripts and resources the agent needs
- **Role definition** -- e.g., "you are a personal chief of staff" or "you are an expert at writing warm, professional, and action-driven emails"
- **Required inputs** -- what information the skill needs
- **Guidelines** -- specific rules (e.g., "email guidelines," "design guidelines")
- **Output format specifications** -- templated response structures
- **"What not to do" rules** -- explicit bans on specific patterns
- **Follow-up templates** -- for multi-step interactions

[Source: Namp-sV0UEw, b9gvuODIiQU, Iup1WlUyj9M, RAZVk5NPNtE]

### 3.3 Skill Description Field Behavior

The description field serves a dual purpose:
1. **Trigger matching** -- controls when the skill is automatically invoked by Claude based on natural language requests.
2. **Documentation** -- describes the skill's purpose to users.

Trigger tuning is the process of analyzing and editing the description so the skill gets called more accurately. False triggers and misfires occur when the description is not well-tuned.

[Source: RAZVk5NPNtE]

### 3.4 disable_model_invocation Behavior

- `disable_model_invocation: false` -- Allows Claude Code to call the skill based on a natural language request, rather than requiring an explicit slash command. May result in misfires if trigger descriptions are not tuned.
- `disable_model_invocation: true` -- Requires the user to explicitly invoke the skill via a slash command. More deterministic but less convenient.

[Source: RAZVk5NPNtE]

### 3.5 argument_hint Behavior

When Claude Code decides to use the skill, argument_hint sends a hint providing context (such as what topic is being discussed) so the skill understands what to focus on.

[Source: RAZVk5NPNtE]

### 3.6 Skill File Contents Example (Client Welcome Email)

The skill markdown file includes:
- Role definition: "You are an expert at writing warm, professional, and action-driven emails for [Agency Name]"
- Required inputs section
- Email guidelines
- Output format with templated response
- Follow-up email template

[Source: b9gvuODIiQU]

### 3.7 Skill Distribution Formats

- Markdown (.md) files
- ZIP files containing markdown skill instructions
- GitHub repositories
- npx install commands (Claude Code)

[Source: RL6hK-Xo7cM, gm8Ci8X2mpo, Iup1WlUyj9M]

---

## 4. WORKFLOW ENFORCEMENT PATTERNS

### 4.1 Plan Mode

Plan Mode is a mode in Claude Code where:
1. The agent first creates a detailed plan before executing.
2. User can review and approve or tweak the plan.
3. Only after approval does the agent execute.
4. This enforces a planning-before-execution pattern.

Usage: Switch to plan mode in Claude Code before giving instructions. The agent returns a detailed plan. Review and accept (or tweak). Then the agent executes.

[Source: RAZVk5NPNtE]

### 4.2 Skill-Based Workflow Enforcement

Skills enforce specific workflows by:
- Defining step-by-step instructions that Claude must follow in sequence.
- Specifying required inputs that must be gathered before execution.
- Including follow-up question extraction -- skills can be configured to have Claude ask follow-up questions to gather required information before executing. This must be baked into the skill instructions.
- Defining explicit "what not to do" rules.

[Source: b9gvuODIiQU, Iup1WlUyj9M]

### 4.3 Design Thinking Process as Hard Gate

The front-end design skill forces Claude through a design thinking process BEFORE writing any code. It considers four things:
1. Purpose
2. Tone
3. Constraints
4. Differentiation

This is a pattern for inserting a mandatory thinking/planning phase before execution.

[Source: Iup1WlUyj9M, gm8Ci8X2mpo]

### 4.4 Interrogation Mode Pattern

The Ora Brainstorming Skill demonstrates an "interrogation mode" pattern:
- Claude shifts from execution mode to asking structured questions before beginning work.
- Claude asks hard questions, surfaces things the user had not considered.
- Only after the Q&A phase does Claude move into execution.
- Reduces revision rounds by approximately 30%.

[Source: gm8Ci8X2mpo]

### 4.5 Validation Checklist Pattern

The Figma skill runs a validation checklist at the end of execution, comparing output against the source:
- Layout
- Typography
- Colors
- Interactive states
- Responsive behavior
- Accessibility

This is a pattern for post-execution quality gates.

[Source: Iup1WlUyj9M]

### 4.6 Human-in-the-Loop Pattern

- Automation runs autonomously but pauses when it needs additional information.
- Claude pings the user with a "blue dot" indicator.
- The user can steer it or provide extra information.
- Then Claude finishes the process.
- Example: Monthly accounting skill runs on the 1st of each month, goes through Gmail, Stripe, web search, browser. When needing more information, pings the user.

[Source: F6T3WkTWYX4]

### 4.7 Command-Based Workflow Ordering

Commands chain multiple skills in a defined sequence:
- A command triggers skills in order (skill 1 then skill 2 then skill 3).
- Each skill's output becomes context for the next.
- This enforces sequential workflow execution.

[Source: F6T3WkTWYX4, b9gvuODIiQU]

### 4.8 Encoded Preference Skills (Process Rigidity)

Encoded preference skills encode a specific sequential workflow or order of operations. These are:
- Step-by-step automations specific to the user's process.
- More durable than capability uplift skills because the process is user-specific and the model will not be trained on it.
- The model already understands each individual piece; the skill encodes the specific ORDER.

This is the strongest pattern for workflow rigidity -- the skill explicitly defines the sequence, and the model follows it because it is encoded as preference, not capability.

[Source: RAZVk5NPNtE]

### 4.9 Slash Commands for Deterministic Invocation

Slash commands are an alternative to natural language invocation:
- Less convenient but more deterministic.
- Prevents false triggers and misfires.
- Appropriate for enterprise environments where predictability matters.

[Source: RAZVk5NPNtE, b9gvuODIiQU]

### 4.10 Self-Audit Pattern

After building or modifying a skill, the last to-do item in the agent's plan was to audit with the skill creator. This is automatically appended to the task list, creating a built-in quality gate.

[Source: RAZVk5NPNtE]

**COVERAGE GAP:** No document describes explicit "hard gates" between workflow phases (e.g., preventing Phase 3 from starting before Phase 2 is approved). The closest patterns are Plan Mode (approval before execution), interrogation mode (questions before execution), and the human-in-the-loop pause. For SPARK's multi-phase pipeline (phases 0-9), these patterns would need to be composed together -- each phase as a skill/command, with human approval gates between phases.

---

## 5. USER PROFILING AND PERSONALIZATION

### 5.1 Claude MD File

- A markdown file that tells Claude everything about the user -- their business, rules, style, and preferences.
- Claude reads this file every time the user interacts with Co-work.
- Provides persistent context and personalization.
- Enables persistent memory: Claude Co-work remembers the user's business, name, tone, and prior context across sessions.
- [Source: Namp-sV0UEw]

### 5.2 Claude Memory Files (Claude Code)

- Claude Code maintains `.md` memory files (referred to as `claude.md`) that store information about the user.
- Skills can read from these files.
- The Skill Creator Skill can build skills that read from Claude's `.md` memory files.
- Using "based on everything you know about me" only works well if Claude Code has prior interaction history. If not, the recommendation is to have Claude interview you first.
- [Source: gm8Ci8X2mpo]

### 5.3 Projects as Business Context

- Claude Projects contain business context and data.
- Projects can be linked to Co-work sessions by going to the normal chat area, selecting the project, and hitting "Start task in co-work."
- This provides business context for more tailored plugin outputs.
- [Source: 1GZYNyuL6Lg]

### 5.4 Personalization via Front-End Design Skill

- The skill can use "based on everything you know about me" to personalize output if Claude Code has prior interaction history.
- If not, the skill can trigger an interview session to gather context.
- [Source: gm8Ci8X2mpo]

### 5.5 Folder-Based Context

- Co-work operates within a selected folder, which it can read from and write to.
- This folder serves as the workspace context for all operations.
- User must select or create a folder to begin.
- [Source: Namp-sV0UEw, RL6hK-Xo7cM]

### 5.6 Skill-Level Personalization

- Skills can include role definitions tailored to a specific user context (e.g., "you are a personal chief of staff").
- Skills can specify tone, voice, and style preferences.
- Skills can define output formats specific to user needs.
- [Source: Namp-sV0UEw, b9gvuODIiQU]

**COVERAGE GAP:** No document describes per-user profiles within a multi-user enterprise deployment. The Claude MD file is a single user's personal context. There is no mention of role-based access control, multi-tenant user profiling, or administrator-defined user role configurations. For SPARK, a user profiling system would need to be built on top of the Claude MD pattern -- potentially one Claude MD template per role (employee, manager, executive) with per-user customizations.

---

## 6. BRANDED OUTPUT SYSTEM

### 6.1 Brand Guidelines Skill

- Out of the box, set up with Anthropic's brand (colors, typography, visual identity rules).
- Takes brand rules and enforces them automatically across everything Claude generates.
- Brand tokens include: hex codes, font stacks, spacing values, logo usage, tone.
- Users swap in their own brand tokens: primary and secondary colors, heading and body fonts, spacing scale, dos and don'ts.
- Can be shared with non-designers (marketing, sales) so anything they generate in Claude automatically follows the visual standards.
- [Source: Iup1WlUyj9M]

### 6.2 Brand Asset Integration in Skills

- Skills can reference brand guidelines and logos from a specified folder to style outputs.
- User must point the agent to the brand asset folder.
- Example: The YouTube Weekly Roundup skill used brand assets from a specific folder to produce a branded PDF with logo and correct styling.
- [Source: RAZVk5NPNtE]

### 6.3 Theme Factory Skill

- Provides 10 pre-built professional themes.
- Each theme is a complete package with a curated color palette and carefully paired fonts (header and body font pairings).
- Each theme has a distinct visual identity designed for specific contexts and audiences.
- Options work for: corporate presentations, creative pitches, editorial layouts.
- Provides typographic hierarchy and harmonious color palettes.
- Can be applied to: slides, documents, web pages, dashboards, reports, or any artifact Claude generates.
- [Source: Iup1WlUyj9M]

### 6.4 "AI Slop" Ban List

The front-end design skill explicitly bans these patterns:
- Purple gradients
- Same rounded corner cards on white backgrounds
- Inter font used everywhere
- Generic fonts like Inter and Arial

Instead, the skill instructs Claude to choose "distinctive, character-full type pairings."

[Source: Iup1WlUyj9M]

### 6.5 Front-End Aesthetics Guidelines

The front-end design skill includes aesthetics guidelines covering:
- Typography
- Color
- Motion
- Spatial composition
- Atmosphere

These guidelines are described as reading "like they were written by a senior product designer."

[Source: Iup1WlUyj9M]

### 6.6 Design System in Skills

- The slide deck generator skill contains a built-in design system with specific rules.
- The front-end design skill creates a full design system (typography, color, motion, spatial composition, background, visual details) before writing any code.
- Skills can map output to a project's actual conventions and component library (demonstrated in the Figma skill).
- [Source: RL6hK-Xo7cM, gm8Ci8X2mpo, Iup1WlUyj9M]

### 6.7 Brand Enforcement Across Team

The pattern for enterprise brand enforcement:
1. Build a brand guidelines skill with your company's tokens.
2. Share the skill with all team members.
3. Every Claude-generated output automatically follows visual standards.
4. Non-designers (marketing, sales) benefit without needing design knowledge.

[Source: Iup1WlUyj9M]

---

## 7. OUTPUT FORMAT CAPABILITIES

### 7.1 HTML Generation

- Skills can generate interactive HTML files that open in a browser.
- Styled with custom design systems (e.g., "Apple Swiss style design").
- Used for: dashboards, briefings, presentations, interactive explainers.
- The morning briefing skill produces an interactive HTML dashboard.
- The slide deck generator creates full visual HTML presentations with smooth animations.
- The visual explainer skill builds interactive web pages with clickable diagrams.
- [Source: Namp-sV0UEw, RL6hK-Xo7cM]

### 7.2 PDF Generation

- Skills can generate PDF files.
- The canvas design skill creates real PNG and PDF files.
- The YouTube Weekly Roundup skill produced a branded PDF report.
- PDF rendering is possible through HTML template creation followed by rendering to PDF.
- PDF did not display correctly within Claude Code's viewer but opened correctly as an actual file.
- [Source: Iup1WlUyj9M, RAZVk5NPNtE]

### 7.3 Markdown Generation

- Structured markdown files are a primary output format.
- Research briefs, meeting notes, action items all output as markdown.
- [Source: RL6hK-Xo7cM, b9gvuODIiQU]

### 7.4 Diagram Generation (Excalidraw)

- The diagram generator skill takes a description and produces a professional diagram as an Excalidraw-compatible JSON file.
- The JSON file can be directly imported into Excalidraw.
- [Source: RL6hK-Xo7cM]

### 7.5 Presentation / Slide Deck Generation

- The slide deck generator creates full visual HTML presentations from a single sentence.
- Includes smooth animations, visual components on every slide, compelling hooks.
- Output is an interactive HTML file with a built-in design system.
- [Source: RL6hK-Xo7cM]

### 7.6 Document Parsing (Input)

Claude cannot natively read certain file formats. Anthropic provides document parsing skills for:
- **Doc** files (Word documents)
- **PDF** files
- **PowerPoint** files
- **Excel** files

These skills add the ability to read, extract, summarize, flag key issues, and ask questions about these file formats.

[Source: gm8Ci8X2mpo]

### 7.7 Image Generation

- The canvas design skill creates actual visual art (posters, graphics, static design pieces) as real PNG and PDF files.
- Two-step process: (1) Claude creates a written design philosophy/aesthetic manifesto. (2) Claude expresses it on a canvas as a real image file.
- Limitation: Will not replace Photoshop or Illustrator. Not Claude's main use case.
- [Source: Iup1WlUyj9M]

### 7.8 Mermaid Diagrams

**COVERAGE GAP:** No document explicitly mentions Mermaid diagram generation, though the visual explainer skill and diagram generator skill indicate diagramming capabilities exist through Excalidraw JSON.

### 7.9 Output Delivery

- Files are saved to the user's selected Co-work folder.
- Outputs can be sent via Slack DM.
- Outputs can be saved as Gmail drafts.
- HTML files can be opened directly in a browser.
- [Source: Namp-sV0UEw, F6T3WkTWYX4, RL6hK-Xo7cM]

---

## 8. SKILL CREATION AND TESTING

### 8.1 Skill Creator Skill

**What it is:**
- An official Anthropic skill that teaches Claude how to build, test, measure, refine, and improve other skills.
- Contains Anthropic's best practices for building skills.
- Replaces the need to manually study Anthropic's 33-page PDF on skill fundamentals.
- Available in the Anthropic official plugins/skills repository on GitHub.

**How to install (Claude Code):**
1. Open Claude Code.
2. Type `/plugins`.
3. Click "manage plugins."
4. Search for `skill-creator`.
5. Find the official Anthropic skill creator skill.
6. Click install. Choose scope: just for you, for the project, or locally.
7. Restart Claude Code.

**How it works step by step:**
1. Tell Claude what the skill should do.
2. Claude interviews you -- asks about edge cases, input formats, output expectations.
3. Claude writes a draft of the `skill.md` file.
4. Claude creates test prompts, runs them, shows results.
5. User evaluates whether the skill is working.
6. User gives feedback, Claude revises.
7. Repeat until satisfied.
8. Optionally, package the skill as a skill file and share it.

[Source: Iup1WlUyj9M, RAZVk5NPNtE, RL6hK-Xo7cM, gm8Ci8X2mpo]

### 8.2 Eval System

**Two primary reasons to run evals:**
1. **Catching regressions** -- As a model evolves, it might use a skill worse because it was trained differently. Evals provide an early signal that the skill needs to evolve.
2. **Spotting growth** -- As models improve, they might perform better without a skill at all. Evals surface this so you can retire or archive the skill.

**How evals work:**
1. Provide the agent with examples of high-quality desired outputs.
2. The agent reads the current skill, tests prompts, compares outputs to the examples.
3. The agent optimizes the skill based on the comparison.
4. Review and iterate.

**Benchmark metrics:**
- Pass rate
- Total time
- Total tokens
- Can compare performance with and without a skill loaded, showing side-by-side results.

**How to run a benchmark:**
Ask the agent: "Benchmark the [skill name] skill with and without the skill loaded and show me side-by-side results so I can see the uplift."

[Source: RAZVk5NPNtE]

### 8.3 Trigger Tuning

- The skill creator analyzes a skill, tests different prompts a user might say to trigger the skill, and then edits the skill's description so the skill gets called more accurately.
- Addresses false triggers (wrong skill invoked) and misfires (no skill invoked when one should be).
- Evaluation chart shows left-hand side (before) vs. right-hand side (after) with test score and train score.
- Results show improved accuracy after tuning, though not perfect.

[Source: RAZVk5NPNtE]

### 8.4 Capability Uplift vs. Encoded Preference

| Aspect | Capability Uplift Skill | Encoded Preference Skill |
|---|---|---|
| What it does | Teaches Claude to do something better than default | Encodes a specific sequential workflow |
| Nature | Prompt-like guidance | Step-by-step automation |
| Example | Front-end design skill (fonts, colors, layouts) | Idea mining (multi-agent parallel, scoring, output) |
| Durability | May fade as models improve; future models might be better without the skill | Stays durable because the process is user-specific |
| When to retire | When the default model outperforms model + skill | Unlikely to need retirement |

SPARK skills would primarily be **encoded preference skills** -- the insurance product development process is specific to the organization and will not be learned by the model through training.

[Source: RAZVk5NPNtE]

### 8.5 Context Window Management

- Building and testing a skill consumed 62% of the context window in the demo.
- Context usage is visible and manageable.
- The speaker cleared out context before providing feedback, to free up space.
- Recommendation: Clear context periodically during long skill-building sessions.

[Source: RAZVk5NPNtE]

### 8.6 Self-Audit Pattern

After building or modifying a skill, the skill creator automatically appends a self-audit step to the task list.

[Source: RAZVk5NPNtE]

### 8.7 Iterative Improvement Loop

The primary mechanism for improving skill quality:
1. Run skill.
2. Review output.
3. Give specific feedback ("I liked this, I didn't like this").
4. Use the skill creator to iterate.
5. Repeat. Each use and feedback loop makes it stronger.

Specific feedback guidance: When a skill's output is wrong, provide very specific feedback about what data is missing and what depth of research is expected.

[Source: RAZVk5NPNtE]

### 8.8 What Makes a Skill "Good"

Based on patterns across all documents:
- **Clear role definition** -- explicit statement of what the skill is (e.g., "you are an expert at...")
- **Explicit required inputs** -- what information must be gathered
- **Step-by-step instructions** -- defined workflow sequence
- **Output format specification** -- templated response structures
- **"What not to do" rules** -- explicit bans on undesirable patterns
- **Follow-up question configuration** -- skill asks for information before executing
- **Tuned trigger description** -- accurately matches intended invocation patterns
- **Brand/style enforcement** -- consistent visual output
- **Validation checklist** -- post-execution quality verification

---

## 9. SCHEDULED TASKS AND AUTOMATION

### 9.1 Three Methods for Creating Scheduled Tasks

| Method | Description | Source |
|---|---|---|
| **UI method** | Use the "scheduled" option in the left sidebar to fill in task details: name, description, prompt, time interval/frequency, model to use, folder access | F6T3WkTWYX4, RL6hK-Xo7cM |
| **Chat `/schedule` command** | Type `/schedule` in a chat and describe the desired schedule in natural language (e.g., "every day at 6:00 AM schedule my email categorization skill") | F6T3WkTWYX4 |
| **Inline during skill creation** | Include the schedule in the skill creation prompt (e.g., "You're going to run this on the first of each month at 9:00 AM") -- Claude automatically saves it to the scheduled section | F6T3WkTWYX4 |

Additional method: From an existing task, ask Claude to turn it into a scheduled task with a specific schedule (e.g., "every single morning at 8 AM"). [Source: RL6hK-Xo7cM]

### 9.2 Frequency Options

- Every month
- Every week
- Every day
- Every hour (or custom hourly intervals like every 10 minutes)
- Weekdays only
- Custom frequency
- Specific time of day (e.g., 7:00 AM, 9:00 AM, 6:00 PM)

[Source: F6T3WkTWYX4, RL6hK-Xo7cM]

### 9.3 Scheduled Task Data Model

Observed fields:
- Task name
- Schedule/frequency
- Next run time
- Description
- Instructions (the skill content)
- Connected apps list
- Manual run option ("Run Now" button)
- Model to use
- Folder access configuration

[Source: Namp-sV0UEw, F6T3WkTWYX4]

### 9.4 Human-in-the-Loop Notification Pattern

- Automation runs autonomously but pauses when it needs additional information.
- Claude pings the user with a "blue dot" indicator.
- The user can steer it or provide extra information.
- Then Claude finishes the process.
- Even for non-autonomous automations, scheduled tasks are "still very useful" because they also serve as reminders and Claude can do preparatory work before human intervention.

[Source: F6T3WkTWYX4]

### 9.5 Desktop Must Be Open Limitation

**Critical limitation:** Scheduled tasks will ONLY run if the Claude Desktop app is opened on the user's computer. If the app is closed, tasks will NOT run on schedule. They will run immediately whenever the user opens Claude Desktop or the Claude Co-work app.

[Source: F6T3WkTWYX4, RL6hK-Xo7cM]

**Enterprise implication:** For SPARK, this means scheduled tasks cannot serve as a reliable background automation system unless the user's machine is always running Claude Desktop. There is no server-side execution capability described in any document.

### 9.6 No Webhooks / Event-Driven Triggers

There are no webhooks yet. Tasks can only be triggered on time-based schedules.

**Polling workaround:**
1. Create a scheduled task.
2. Set it to run on a very regular basis (e.g., every hour).
3. Have it check if a specific event occurred in another software.
4. If the event is detected, perform the desired action.

[Source: F6T3WkTWYX4]

### 9.7 No Error Handling Description

No document describes what happens when a scheduled task fails mid-execution.

[Source: F6T3WkTWYX4]

---

## 10. CONNECTORS AND INTEGRATIONS

### 10.1 Native Connectors

- Approximately 37-38 native app connectors available in Claude Co-work. [Source: b9gvuODIiQU]
- Another source states 38+ native connectors. [Source: RL6hK-Xo7cM]
- Another source states "30 to maybe 50." [Source: Namp-sV0UEw]

**Explicitly named native connectors across all documents:**
- Gmail
- Google Calendar
- Google Drive
- Slack
- Canva
- GitHub
- DocuSign
- MS365

[Source: Namp-sV0UEw, b9gvuODIiQU, RL6hK-Xo7cM]

### 10.2 Zapier MCP Setup

**Step-by-step process:**
1. Go to `zapier.com/mcp`.
2. Click "Start Building."
3. Sign up for a Zapier account if you don't have one.
4. Create a new MCP server.
5. Select "Cloud Co-work" (or Claude Co-work) as the client.
6. Browse and select the apps you want to connect.
7. Toggle on the specific actions/tools you want to enable for each app.
8. Click "Connect" for each app.
9. When all apps are connected, click the "Connect" button on the MCP server.
10. Click "Copy URL."
11. Return to Claude Co-work > Customize > Connectors.
12. Click "New" connector (or Plus button).
13. Select/search for "Zapier."
14. Paste the URL.
15. Click "Allow."
16. All apps connected via Zapier are now accessible.

**Capability:** Extends connectivity to 8,000+ applications.

**Apps connected in demos:**
- Airtable (18 different actions)
- Google Docs
- Gmail
- Buffer
- School (community platform)
- Zendesk (19 different actions)
- Notion (26 different actions including retrieve blocks, get blocks, find pages)

[Source: Namp-sV0UEw, b9gvuODIiQU, RL6hK-Xo7cM]

### 10.3 Figma MCP Setup

- The Figma skill requires the Figma MCP server to be connected.
- The MCP server must be enabled in Claude before using the Figma skill.
- It acts as a bridge that lets Claude read Figma files.
- The skill parses Figma URLs to extract: file key and node ID.
- Data fetched from Figma includes: layout properties, auto layout settings, typography specs, color values, spacing tokens.

[Source: Iup1WlUyj9M]

### 10.4 Custom MCP Servers

- MCP (Model Context Protocol) servers act as bridges between Claude and external tools.
- Zapier MCP is the documented mechanism for custom/non-native integrations.
- Custom MCP servers are connected via URL pasting into Claude Co-work's connector settings.

[Source: Namp-sV0UEw]

### 10.5 Connector Persistence

"Connect them once, and it works forever." -- Connectors persist after initial setup without requiring reconnection.

[Source: Namp-sV0UEw]

### 10.6 Connector Behavior

- Once connected, connectors give Claude the ability to both read from and write to external apps.
- Without connectors, Claude is "trapped in the chat box" -- it cannot see emails, read calendars, or interact with external tools.
- More connectors means more that Claude Co-work can do with skills.

[Source: b9gvuODIiQU]

### 10.7 X/Twitter API Integration

- Requires API credentials from X Developer Portal.
- Pulls tweets, threads, or timelines directly from the terminal.
- Grabs structured content, replies, and engagement data.
- Can summarize sentiment and surface pain points.
- GitHub repository has a walkthrough for credential setup.

[Source: gm8Ci8X2mpo]

### 10.8 Reddit Integration

- Reddit blocks AI agent requests.
- The Reddit Fetch Skill works around this by routing through Gemini.
- Claude Code sends request to Gemini, which fetches Reddit content, then returns clean formatted data back to Claude.

[Source: gm8Ci8X2mpo]

---

## CROSS-CUTTING OBSERVATIONS FOR SPARK

### Critical Gaps Identified

1. **No enterprise admin panel.** No document describes centralized administration, role-based access control, or managed deployment across 1,000+ users. All distribution methods are user-initiated.

2. **No server-side execution.** Scheduled tasks require the user's desktop to be open. There is no headless or server-side execution mode described.

3. **No multi-tenant user profiling.** The Claude MD file is a single-user construct. No multi-user, role-based profiling mechanism exists in the documented system.

4. **No explicit phase gating.** While patterns exist for pre-execution planning (Plan Mode, interrogation mode), there is no built-in mechanism for multi-phase pipelines with hard gates between phases.

5. **No regulatory safety features.** No document mentions compliance checking, audit logging, regulatory approval workflows, or insurance-specific safety mechanisms.

6. **No version control for skills.** No built-in skill versioning mechanism is described beyond overwrite-on-upload.

### Strongest Patterns for SPARK

1. **Encoded preference skills** are the best model for SPARK's phase-based workflow -- they stay durable because the process is organization-specific.

2. **Brand guidelines skill** is directly applicable -- swap in the insurance company's brand tokens and share across all users.

3. **Skill Creator Skill + eval system** provides the mechanism for building, testing, and iterating on SPARK's phase skills.

4. **Plan Mode + interrogation mode + validation checklist** can be composed to create phase gates: plan before executing, ask questions to gather requirements, validate output before proceeding.

5. **Commands chaining multiple skills** maps directly to SPARK's multi-phase pipeline -- each phase as a skill, each pipeline as a command.

6. **Multi-agent parallel execution** enables complex research/analysis phases where multiple sub-agents gather information simultaneously.

7. **GitHub marketplace distribution** is the most scalable documented distribution method -- maintain a company GitHub repository, users sync from it.
