# Knowledge Document: Claude Co-work Skills

---

**Source:** YouTube transcript
**Video URL:** https://www.youtube.com/watch?v=b9gvuODIiQU
**Speaker(s):** Unidentified (content creator running an influencer marketing agency called "Loom Agency"; content business doing $7,000/month)
**Estimated date:** Late February / early March 2025 (based on "scheduled tasks" described as added "literally just a couple of days ago," references to features appearing new, and product maturity indicators)
**Primary topics:** Claude Co-work, Skills, Commands, Plugins, Connectors
**Products/tools covered:** Claude Desktop App (Chat mode, Co-work mode, Claude Code), Anthropic pre-built plugins, Zapier MCP, Airtable, Google Docs, Gmail, Buffer, DocuSign, YouTube, LinkedIn, Slack, GitHub (Anthropic open-source plugin repo)

---

## Concepts & Definitions

* **Claude Co-work:** A mode within the Claude Desktop App distinct from Chat mode and Claude Code. Described as an AI tool that can read files, connect to apps, and perform work autonomously when configured properly.

* **Skill:** A saved workflow written as a markdown file (.md). Contains plain text instructions including the goal, the steps, and the tools needed to complete a task. Claude reads it automatically whenever relevant. It sets the rules, voice, process, and context. Claude uses skills on its own in the background.

* **Command:** A trigger mechanism distinct from skills. A command file is a set of instructions triggered manually by the user via a slash command (e.g., `/morning`). When triggered, it loads associated skills, calls tools, and runs steps. Skills are passive background context; commands are active manual triggers.

* **Slash Command:** The method of activating a command by typing `/` followed by the command name in the co-work chat (e.g., `/morning`, `/client-research-brief`).

* **Auto Trigger:** A second way to activate skills, where the skill is triggered automatically rather than by a slash command.

* **Plugin:** A bundle that contains skills, commands, connectors, and sub-agents packaged together. Can be pre-built by Anthropic or custom-built by users. Can be shared with team members.

* **Connector:** A live bridge between Claude and external applications. Without a connector, Claude cannot see emails, read calendars, or interact with external tools. Connectors give Claude the ability to both read from and write to external apps.

* **Sub-agents:** Mentioned as a component within plugins. No further detail provided in the transcript.

* **Scheduled Tasks:** A feature allowing skills/commands to run automatically at specified times without manual triggering. Described as newly added to co-work at the time of recording.

* **Skill Creator:** A pre-built skill already loaded into co-work accounts. It is a comprehensive markdown file that instructs Claude on how to create new skills. Users can ask Claude to create skills by referencing this skill creator.

* **Zapier MCP (Zap Your MCP):** A solution that expands Claude Co-work's connectivity beyond the native ~37-38 apps to 8,000+ applications via an MCP server.

---

## Capabilities & Features

* **Skill execution:** Claude reads skill markdown files automatically and follows them when relevant | Claude Co-work | Skills must be added/configured in the co-work system first
* **Command execution:** User types a slash command, Claude loads associated skills, calls tools, and runs all steps | Claude Co-work | Requires command files to be set up
* **Cross-mode skill usage:** Skills built for co-work can also be used in Claude Code and normal Chat mode | Claude Desktop App | No constraints mentioned
* **Scheduled tasks:** Skills/commands can be scheduled to run at specific times automatically (e.g., every day at 7:00 AM or 10:00 AM) | Claude Co-work | Described as a new feature at time of recording
* **Plugin browsing and installation:** Pre-built plugins for finance, legal, HR, engineering, design can be browsed and installed with one click | Claude Co-work | Accessed via customize menu
* **Plugin sharing:** Custom plugins (skills, connectors, workflows) can be exported and shared with team members | Claude Co-work | No constraints mentioned
* **Plugin customization:** Pre-built plugins can be customized to match user workflows | Claude Co-work | No constraints mentioned
* **AI-assisted plugin creation:** Users can ask Claude to build a plugin by describing what is needed | Claude Co-work | No constraints mentioned
* **Native connector library:** Approximately 37-38 different apps available as native connectors | Claude Co-work | Limited selection at time of recording
* **Zapier MCP integration:** Extends connectivity to 8,000+ applications via Zapier | Zapier MCP | Requires separate Zapier MCP server setup and URL configuration
* **Follow-up question extraction:** Skills can be configured to have Claude ask follow-up questions to gather required information before executing | Claude Co-work | Must be baked into the skill instructions
* **Markdown file generation:** Claude generates structured, formatted markdown files as output from skill execution | Claude Co-work | No constraints mentioned
* **Folder-based organization:** Co-work uses a folder-based system as an operating system for organizing work | Claude Co-work | User must select or create a folder to begin

---

## How-To / Workflows

### Setting Up Claude Co-work

1. Download the Claude Desktop App (available for Mac and Windows).
2. Open the app. At the top of the screen, select between Chat mode, Co-work, or Claude Code.
3. Select Co-work mode.
4. Select an existing folder or create a new folder (this serves as the operating system/workspace).

### Accessing and Viewing Skills

1. Inside co-work, click "Customize" at the top.
2. Click the "Skills" toggle.
3. View pre-built skills by Anthropic (already added to co-work) and user-created skills.
4. Click on any skill to see its description and full markdown file with instructions.

### Using a Skill via Slash Command

1. Open co-work and select the relevant folder.
2. In the chat, type `/` followed by the command name (e.g., `/client-research-brief`).
3. Send the command.
4. Claude begins executing the skill, may ask follow-up questions as defined in the skill instructions.
5. Provide requested information.
6. Claude executes the full workflow and generates output (e.g., a markdown file).

### Using Skills Without Explicit Commands

1. In co-work chat, describe what you need in natural language (e.g., "write a contract since they are a new client").
2. Claude identifies the relevant skill and executes it without needing the specific slash command.
3. Claude may still ask follow-up questions as defined in the skill.

### Installing a Plugin

1. Click "Customize" on the left.
2. Click "Browse Plugins."
3. Browse available plugins (finance, legal, HR, engineering, design, etc.).
4. Click "Install" on the desired plugin.
5. Commands and skills from the plugin are automatically added to co-work.
6. Click "Manage" to view all commands and markdown files within the installed plugin.

### Setting Up Scheduled Tasks

1. Click on "Scheduled Tasks" in co-work.
2. Create a new task by clicking the create option, OR
3. Go to any existing chat and tell co-work to create a specific task (e.g., "Hey, I'd love for you to create a specific task where every day at 7:00 AM you do this for me").
4. The task is saved and runs automatically at the scheduled time.

### Adding Connectors

1. Click "Customize" in co-work.
2. Click "Connectors" (located just below Skills).
3. Click the plus button.
4. Browse available connectors.
5. Click "Connect" on the desired application (e.g., DocuSign).
6. The app is instantly connected to co-work.

### Adding Zapier MCP for Extended App Access

1. Set up a Zapier MCP server with the desired app connections (e.g., Airtable, Google Docs, Gmail, Buffer).
2. Obtain the specific URL from the Zapier MCP configuration.
3. In co-work, click the "Add" button under connectors.
4. Search for "Zapier."
5. Click "Connect."
6. Click "Allow."
7. All apps connected via Zapier are now accessible to Claude Co-work.

### Creating a Skill Using the Skill Creator

1. Open co-work chat.
2. Type a request like "Hey, I want you to create a specific skill about X."
3. Claude pulls the built-in skill creator markdown file as instructions.
4. Claude crafts the new skill based on the request.

---

## Architecture & Technical Details

* **Skill file format:** Markdown (.md) file containing plain text. Consists of: goal, steps, and tools.
* **Skill file name convention:** Referenced as `skill.md` (e.g., the file is described as "skillmd" being always in the background).
* **Skill file contents structure (based on example):** Includes role definition ("you are an expert at..."), required inputs ("what you need"), guidelines (e.g., "email guidelines"), and output format (templated response structure).
* **Command file:** Also a markdown-based instruction file, separate from the skill file. Triggered manually rather than running in the background.
* **Plugin composition:** A plugin bundles together: skills + commands + connectors + sub-agents.
* **Zapier MCP server:** Connects to Claude Co-work via a URL. Provides access to specific apps with defined action counts (e.g., "18 different actions across Airtable"). Configured by searching for "Zapier" in the connector add interface.
* **Native connector count:** Approximately 37-38 different apps at time of recording.
* **Zapier MCP app count:** 8,000+ different applications.

---

## Comparisons & Trade-offs

| Concept | Function | Activation | Behavior |
|---------|----------|------------|----------|
| Skill (.md) | Background instructions (rules, voice, process, context) | Automatic - Claude reads when relevant | Passive, always available |
| Command (.md) | Trigger-based workflow execution | Manual - user types slash command (e.g., `/morning`) | Active, loads skills, calls tools, runs steps |
| Plugin | Bundle of skills + commands + connectors + sub-agents | Installed via browse plugins menu | Package of multiple components |

| Connector Type | App Coverage | Setup Complexity |
|----------------|-------------|-----------------|
| Native Claude connectors | ~37-38 apps | Click "Connect" in connector browser |
| Zapier MCP | 8,000+ apps | Requires MCP server setup, URL configuration, then connect in co-work |

---

## Limitations & Gotchas

* Without connectors, Claude is "trapped in the chat box" - it cannot see emails, read calendars, or interact with external tools.
* Native connector library is limited to approximately 37-38 apps at time of recording.
* Most people open Claude, type one prompt, and get a generic experience because they are not using skills.
* Skills must be explicitly created or installed; they do not exist by default beyond Anthropic's pre-built examples and the skill creator.

---

## Opinions & Recommendations

* [OPINION] "Cloud Co-work might be the most slept on AI tool right now."
* [OPINION] Speaker states that when set up properly, Claude Co-work "could do the work of multiple employees in half the time."
* [OPINION] Skills are described as "the one thing that changes everything" for Claude Co-work.
* [OPINION] Connectors are described as "the thing that takes your co-work experience to the next level."
* [OPINION] Connectors plus skills are described as "the real combo."
* [OPINION] Skills plus scheduled tasks equal "autopilot."
* [OPINION] Speaker recommends using the built-in skill creator as a "huge hack" so users don't need to understand skill creation mechanics themselves.
* [OPINION] The more connectors added, the more Claude Co-work can do with skills.

---

## Concrete Examples

### YouTube Repurposing Skill
A skill the speaker personally uses that:
1. Checks YouTube for new uploads.
2. Pulls the transcript of the new video.
3. Writes a LinkedIn post repurposing the video content.
4. Posts the content to Slack.
5. Posts the content to LinkedIn.
This skill is scheduled to run every day at 10:00 AM.

### Client Research Brief Skill
A skill for the speaker's influencer marketing agency onboarding process:
1. User triggers `/client-research-brief` command.
2. Claude asks follow-up questions (e.g., what company is the new client).
3. Claude researches the company and generates a structured markdown file containing:
   - Company overview (industry, business model, e.g., "B2B SaaS, credit-based usage," pricing)
   - Target audience breakdown
   - Pain points and gaps
   - Strategic notes (service alignment, upsell opportunities, red flags)

### Contract Generator Skill
A skill for generating service agreements:
1. Can be triggered via command or natural language (e.g., "write a contract since they are a new client").
2. Claude asks follow-up questions to extract required information.
3. Generates a service agreement in approximately 30 seconds.
4. Skill instructions viewable via Customize > Skills > Contract Generator.

### Client Welcome Email Skill
A skill that drafts the first client email after a deal is signed. The markdown file includes:
- Role definition: "You are an expert at writing warm, professional, and action-driven emails for Loom Agency" (influencer marketing agency).
- Required inputs section.
- Email guidelines.
- Output format with templated response.
- Follow-up email template.

### Morning Brief Scheduled Task
A conceptual example:
1. At 7:00 AM, the scheduled task triggers the `/morning` command.
2. The skill checks email and calendar.
3. User wakes up to a prepared brief.

### Zapier MCP Server Configuration
Speaker's personal MCP server includes:
- Airtable access (18 different actions).
- Google Docs access.
- Gmail access.
- Buffer access (for scheduling posts to multiple platforms, since Claude has no native Buffer integration).

---

## Quotes Worth Preserving

* "Skills are how you teach Claude exactly how to work."
* "Your entire workflow in one file."
* "You type one word and Claude does the rest using skills."
* "The skill knows what to do. The schedule knows when to do it."
* "Skills plus scheduled tasks equal autopilot."
* "Think of a connector as a live bridge."
* "The skill tells Claude what to do. The connector gives Claude the ability."

---

## Revenue / Business Context

* Speaker's content business generates $7,000 per month.
* Speaker has built over 50 skills that run the entire content business.
* Speaker runs an influencer marketing agency called "Loom Agency."
* Skills are used for agency client onboarding workflows.

---

## Verification Notes

- All product names, feature names, and workflow steps have been cross-checked against the transcript.
- The approximate connector count of "37 or 38" is preserved as stated.
- The Zapier MCP app count of "8,000 plus" is preserved as stated.
- The scheduled task running time examples (7:00 AM, 10:00 AM) are preserved as stated.
- The $7,000/month revenue figure is preserved as stated.
- The "50 skills" count is preserved as stated.
- Plugin categories mentioned: finance, legal, HR, engineering, design.
- All app names mentioned: DocuSign, Airtable, Google Docs, Gmail, Buffer, YouTube, LinkedIn, Slack, Zapier.
