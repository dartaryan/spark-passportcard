# Knowledge Document: Claude Co-work Plugins and Skills

---

**Source:** YouTube transcript
**Video URL:** https://www.youtube.com/watch?v=1GZYNyuL6Lg
**Speaker(s):** Unidentified (runs an AI-focused business called "AI Elliot"; maintains an "AI Recipe Vault" email list)
**Estimated date:** Late February / early March 2025 (references Opus 4.6 as "the top AI model on the planet right now"; plugins described as very new)
**Primary topics:** Claude Plugins, Claude Skills, Claude Co-work, Automation, Business workflows
**Products/tools covered:** Claude (Anthropic), Claude Desktop App, Claude Co-work, Claude Skills, Claude Plugins, Opus 4.6, Snowflake, Databricks, Google Cloud BigQuery, Slack, MS365, Mailchimp, ConvertKit, Notion, GitHub

---

## Concepts & Definitions

* **Claude Skills:** Repeatable custom instructions that Claude can follow in any chat. A skill is a way to package your expertise and give Claude specific instructions and capabilities for one particular single task. Analogized as "a recipe card for cooking one meal" -- it always has one same outcome.

* **Claude Plugins:** A bundle of multiple skills, the ability to use multiple tools, and connectors, all running in tandem. A plugin represents an entire job function or job role. Analogized as "an experienced chef who knows the whole recipe book" -- knows which tools to use for which job without being told, can work in a team, and can connect to other things.

* **Connectors (within plugins):** Components that allow plugins to reach outside of Claude and access external services and data sources. Examples given: Snowflake, Databricks, Google Cloud BigQuery, Slack, MS365.

* **Commands (within plugins):** Shortcut commands that can be used to activate specific tasks within a plugin. These can be remembered and used in prompts so Claude might activate them automatically.

* **Claude Co-work:** A workspace area in the Claude desktop app where plugins and skills can be run. Described as extremely powerful, with the speaker having used it for two weeks prior to recording.

* **Claude Projects:** Separate from plugins/skills. Projects contain business context and data. Projects can be linked to co-work sessions to provide additional context for plugin outputs.

## Capabilities & Features

* **Skills run in any chat:** Skills are available in both normal chat and co-work chat areas. | Claude Desktop App | Must be configured in Settings > Capabilities > Skills.

* **Plugin installation from Anthropic defaults:** Browse and install pre-built plugins from Anthropic's default library. | Claude Desktop App > Plugins > Browse Plugins | Available categories include: Bio Research, Data, Legal, Marketing, Finance.

* **Plugin customization:** After installing a plugin, you can customize it by hitting the "Customize" button and talking to Claude about improvements for your specific business. | Claude Desktop App > Plugins > Manage > Customize | None stated.

* **Plugin creation by Claude itself:** Claude can build its own plugins from scratch based on user ideas and business context. The output can be saved directly via "Save Plugin" without needing to download and re-upload. | Claude Co-work | Requires providing context about your business and desired plugin function.

* **Plugin upload:** Users can upload their own plugins manually. | Claude Desktop App > Plugins > Personal > Upload Plugin | Need something to upload first.

* **Plugin install from GitHub marketplace:** Users can add plugins from GitHub-hosted marketplaces by providing the repository URL and hitting sync. | Claude Desktop App > Plugins > Personal > Add from Marketplace from GitHub | Requires a valid GitHub URL.

* **Plugin install from URL:** Users can install plugins by providing a URL shared by someone else. | Claude Desktop App > Plugins > Personal > Add from URL | None stated.

* **Linking Claude Projects to Co-work:** You can launch a project and all its data into co-work by going to the normal chat area, selecting the project, and hitting "Start task in co-work." | Claude Desktop App | This provides business context for more tailored plugin outputs.

* **Finance plugin capabilities:** Prepare month-end accrual journal entries, reconcile subledger balances, walk through month-end close. Contains six skills bundled together: auditing, close management, financial statements, reconciliation, and others. | Finance Plugin | None stated.

* **Marketing plugin capabilities:** Write email sequences, content atomization, repurposing content into different forms (LinkedIn posts, emails). | Marketing Plugin | None stated.

* **Opus 4.6 model:** Claude Co-work runs Opus 4.6 under the hood, described as "the top AI model on the planet right now." | Claude Co-work | None stated.

## How-To / Workflows

### How to find and manage individual Skills

1. Open Claude Desktop App.
2. Go to Settings.
3. Scroll down to Capabilities.
4. Find the Skills area.
5. Skills listed here are repeatable custom instructions available in any chat.

### How to run a Skill in chat

1. Open a chat (normal or co-work).
2. Type a prompt that references the skill by name (e.g., "Can you create me a branded invoice for $10 to charge to the King of England, please, based on my hourly rate?").
3. Claude will recognize the skill name and activate it (visible on the right-hand side panel showing which skill is being used).

### How to install a pre-built Plugin from Anthropic

1. Open Claude Desktop App.
2. Go to the Plugins tab on the left-hand side.
3. Click Browse Plugins.
4. Browse the Anthropic default plugins (Bio Research, Data, Legal, Marketing, Finance, etc.).
5. Hit Install on the desired plugin.
6. The plugin is now available in the co-work area.

### How to manage and inspect a Plugin

1. After installing, hit Manage on the plugin.
2. View the files, instructions, and abilities of the plugin.
3. On the left-hand side, click Commands to see available tasks the plugin can perform.
4. Click Connectors to see which external services the plugin can access.

### How to activate a Plugin in Co-work

1. Open Co-work.
2. Click the Plus button in the middle.
3. Go down to Plugins.
4. Select the plugin you want to activate.
5. On the right-hand side, view available commands and skills.
6. Type a prompt or use a command to activate a specific task.

### How to link a Claude Project to Co-work

1. Go to the normal chat area of Claude.
2. Select the project you want to run.
3. Hit "Start task in co-work."
4. The project and all its data will load into the co-work area alongside any active plugins.

### How to customize an existing Plugin

1. Go to the Plugins area.
2. Click the Customize button on the plugin.
3. Tell Claude how you want to improve or modify the plugin for your business.
4. Claude will research your business context and suggest actionable recommendations.
5. You can add existing skills (e.g., a "content atomizer" skill) into the plugin.

### How to install Plugins from a GitHub marketplace

1. Go to Browse Plugins.
2. Switch from the Anthropic tab to Personal.
3. Hit the Plus button.
4. Select "Add from Marketplace from GitHub."
5. Paste the URL or the end of the URL of the GitHub repository (example given: "awesome Claude plugins" repository).
6. Hit Sync.
7. Once loaded, browse available plugins and hit Install on desired ones.

### How to build your own Plugin from scratch using Claude

1. Open Co-work with a project loaded (for business context).
2. Ask Claude for plugin ideas for your business.
3. Answer Claude's follow-up questions (e.g., what you want to achieve, what kind of output, what connectors).
4. Tell Claude to build the plugin.
5. Wait for Claude to complete building (speaker went and made a cup of tea).
6. Hit "Save Plugin" -- no download/upload step required.
7. The plugin appears in your plugins list ready to use.

## Architecture & Technical Details

* **Plugin structure contains:** Skills (multiple), Commands (shortcut tasks), Connectors (external service integrations), Files, and Instructions.
* **Finance plugin connectors listed:** Snowflake, Databricks, Google Cloud BigQuery, Slack, MS365.
* **Plugin sources:** Anthropic default library, Personal uploads, GitHub marketplaces, direct URLs, Claude-generated.
* **Plugin location in UI:** Left-hand side panel > Plugins tab.
* **Skills location in UI:** Settings > Capabilities > Skills.
* **Co-work activation:** Desktop app required; plugins are activated via the Plus button in the co-work area.

## Comparisons & Trade-offs

| Aspect | Skill | Plugin |
|---|---|---|
| Scope | Single task / one job | Entire job role / multiple tasks |
| Composition | One set of custom instructions | Multiple skills + tools + connectors bundled together |
| Analogy | Recipe card for cooking one meal | Experienced chef who knows the whole recipe book |
| Example | Create a branded invoice | Full finance department function (auditing, reconciliation, statements, close management, invoicing) |
| Independence | Runs standalone in any chat | Orchestrates multiple skills and tools in tandem |

## Limitations & Gotchas

* Not many plugin marketplaces exist yet, and not many good ones were found by the speaker, because the feature is described as very new.
* The speaker notes that the default Anthropic plugins may not be perfect for every user's specific business needs -- customization is recommended.
* Plugin creation by Claude produces a "very simple, very quick output" -- implying that more complex plugins may require iteration or manual refinement.

## Opinions & Recommendations

* [Opinion] The speaker describes Claude Co-work's power as "insane" and states they have been "living inside" it for two weeks.
* [Opinion] Opus 4.6 is described as "the top AI model on the planet right now."
* [Opinion] The finance plugin handles tasks "probably way over my head that I would pay a bookkeeper or an accountant to do."
* [Opinion] The email welcome sequence output is described as "insane" -- the planning alone is considered useful, not just the execution.
* [Opinion] The speaker recommends using the "biggest AI hack" of "using AI to improve the AI that we have" when customizing plugins.
* [Opinion] The speaker suggests that understanding the mechanics behind plugins allows co-work to do "a lot of the work itself."
* [Recommendation] Use Claude Projects alongside plugins in co-work to get more tailored, context-aware outputs.
* [Recommendation] Customize default plugins for your specific business rather than using them as-is.
* [Recommendation] Use Claude itself to generate ideas for what plugins to build for your business.

## Concrete Examples

* **Branded Invoice Skill demo:** The speaker runs a skill to create a branded invoice for 10 pounds charged to "the King of England" based on an hourly rate. The output produces a correctly branded invoice addressed to "His Majesty King Charles III."

* **Marketing Plugin -- Email Welcome Sequence:** The speaker uses the marketing plugin to write a welcome email sequence for people who sign up to the "AI Recipe Vault." The output produces seven emails over 14 days covering: deliver, connect, value, bridge, pitch, and framework stages. The speaker notes this is far superior to their current sequence (which is only "here's your AI recipe vault, get whatever you need, thank you very much" plus a single welcome email).

* **Plugin Customization -- Content Atomizer:** The speaker wants to add their existing "content atomizer" skill into the marketing plugin so it can take a script, atomize the content into different forms (LinkedIn posts, emails), and then use the email writing skill to produce outputs.

* **Custom Plugin -- Lead Magnet Launch Kit:** The speaker has Claude build a plugin that takes a topic and target audience, then builds a full funnel for a digital product or lead magnet. The plugin: concepts the offer, outlines landing page copy, writes the email welcome sequence, and creates a distribution checklist. All copy references the user's project context.

* **GitHub Marketplace:** The speaker demonstrates adding plugins from an "awesome Claude plugins" GitHub repository by syncing the URL.

## Quotes Worth Preserving

* "Skills and plugins actually work as your hands to start executing tasks."
* "A plugin is the ability to do an entire job role."
* "Using AI to improve the AI that we have."
* "The more you add, the more depth that platforms like co-work are going into."
