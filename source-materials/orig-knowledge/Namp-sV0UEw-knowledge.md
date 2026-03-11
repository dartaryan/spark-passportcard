# Knowledge Document: Claude Co-work Scheduled Tasks Setup Guide

---

## Metadata

- **Source:** YouTube transcript
- **Video URL:** https://www.youtube.com/watch?v=Namp-sV0UEw
- **Speaker(s):** Brock (first name identified from task description mentioning "send it to Brock via DM on Slack")
- **Estimated date:** Early-to-mid 2025 (based on Claude Co-work features described; no explicit date given)
- **Primary topics:** Claude Co-work, Scheduled Tasks, Skills, Connectors, AI Automation
- **Products/tools covered:** Claude (Anthropic), Claude Desktop App, Claude Co-work, Zapier MCP, Google Drive, Google Calendar, Gmail, Slack, Canva, GitHub, Asana, Gamma, HubSpot, Zendesk, School (community platform)

---

## Concepts & Definitions

* **Claude Co-work:** A mode within the Claude Desktop App that goes beyond standard chat. It connects to apps, retains business context, and can run tasks autonomously. Described as distinct from "regular Claude" -- it knows the user's business, name, tone, and picks up where previous sessions left off.

* **Claude MD file:** A markdown file that tells Claude everything about the user -- their business, rules, style, and preferences. Claude reads this file every time the user interacts with Co-work, providing persistent context and personalization.

* **Skills:** Small files (markdown format) that teach Claude specific jobs. Each skill contains a set of instructions for a particular task. Once installed, the user can trigger a skill by typing a command (e.g., "morning briefing") and Claude executes the full workflow without further explanation.

* **Scheduled Tasks:** A feature that allows users to set a time and a task, and Claude runs it automatically at the specified interval (daily, hourly, or custom). Combined with skills, this enables fully autonomous operation without user interaction.

* **Connectors:** Integrations that allow Claude Co-work to plug directly into external applications (Gmail, Google Calendar, Google Drive, Slack, etc.). Once connected, Claude can read, write, and interact with these apps natively without manual data transfer.

* **MCP Server (in Zapier context):** A mechanism provided by Zapier (at zapier.com/mcp) that allows users to connect apps not natively available in Claude Co-work's connector list. The user creates an MCP server in Zapier, selects tools/actions, and pastes the resulting URL into Claude Co-work.

---

## Capabilities & Features

* **Persistent memory/context:** Claude Co-work remembers the user's business, name, tone, and prior context across sessions | Claude Co-work | Requires Claude MD file setup
* **Skill-based task execution:** Type a single command and Claude executes a full workflow based on pre-defined skill instructions | Claude Co-work | Skills must be installed first
* **Scheduled autonomous tasks:** Set tasks to run at specific times (e.g., daily at 7 AM) without user intervention | Claude Co-work | Requires scheduled task configuration
* **App folder access:** Claude Co-work can read from and make changes to a selected folder on the user's computer | Claude Co-work | User must select a folder and click "allow"
* **Morning briefing generation:** Scans calendar, email, and relevant news to produce an interactive HTML dashboard | Claude Co-work skill | Requires Gmail, Google Calendar connectors
* **HTML output generation:** Creates formatted HTML pages (dashboards, briefings) that can be opened in a browser | Claude Co-work | Output saved as HTML file
* **Slack message delivery:** Can send task outputs (e.g., morning briefing) directly to the user via Slack DM | Claude Co-work | Requires Slack connector
* **End of day wrap-up:** Generates a summary of the day's activities, unfinished items, tomorrow's priorities, and a reflection | Claude Co-work skill | Runs as scheduled task (e.g., 6 PM daily)
* **Skill upload:** Users can upload markdown skill files created by others into their Co-work instance | Claude Co-work | Drag and drop into skills interface
* **Skill editing with Claude:** Users can modify existing skills by clicking "edit with Claude" and describing desired changes | Claude Co-work | Built-in feature
* **Script writing skill:** Researches trending topics, writes hooks, and creates full short-form video scripts | Claude Co-work skill | Custom skill shown by speaker
* **Native connectors:** Approximately 30 to 50 native app connectors available in Claude Co-work | Claude Co-work | Number is approximate ("I believe there's like 30 to maybe 50")
* **Manual task execution:** Scheduled tasks can also be run manually at any time via a "run now" button | Claude Co-work | Available in scheduled task interface
* **Activity tracking:** Claude Co-work tracks its own activities during the day, which can be reported in the end-of-day wrap-up | Claude Co-work | Shown in end-of-day HTML output

---

## How-To / Workflows

### Setting Up Claude Co-work for the First Time

1. Download the Claude Desktop App (available for Mac and Windows).
2. Open the app -- you will see a normal chat interface.
3. Navigate to the **Co-work tab** (separate from the regular chat).
4. Select an existing folder or create a new one (the speaker created a folder called "Claude").
5. Click **Allow** to give Claude permission to make changes to and pull context from that folder.

### Installing and Using Skills

1. Go to the sidebar in Co-work.
2. Click **Customize**.
3. Click **Skills**.
4. To add a skill: Click **Add** > **Upload a skill**.
5. Drag in a markdown (.md) skill file.
6. The skill appears with its description and command trigger.
7. To use: Type the skill's command (e.g., "morning briefing" or just "morning") in the Co-work chat.
8. Claude executes the full workflow defined in the skill file.

### Editing an Existing Skill

1. Navigate to the skill in the Skills section.
2. Click **Edit with Claude**.
3. Describe the changes you want to make.
4. Claude modifies the skill file accordingly.

### Setting Up a Scheduled Task

1. Run the desired skill manually first to verify its output.
2. Click on **Schedule** in the Co-work interface.
3. The schedule task skill will appear.
4. Describe the schedule (e.g., "every single day at 7:00 AM") and the delivery method (e.g., "send this to me via Slack").
5. Submit the instruction -- Co-work creates the scheduled task (takes approximately 30 seconds).
6. Click on the created task to view its details (next run time, description, instructions).
7. Optionally click **Run Now** to test immediately.

### Connecting Native App Connectors

1. Go to **Customize** > **Connectors** in Co-work.
2. Click **Browse Connectors**.
3. Find the desired app (e.g., Canva, Gmail, Slack).
4. Click the app, then click **Connect**.
5. You will be redirected to the app's authorization page.
6. Allow the requested permissions.
7. Return to Co-work -- the connector now appears in your connected list.

### Connecting Non-Native Apps via Zapier MCP

1. Go to **zapier.com/mcp**.
2. Click **Start Building**.
3. Sign up for a Zapier account if you don't have one.
4. Create a new MCP server.
5. Select **Cloud Co-work** as the client.
6. Browse and select the apps you want to connect (e.g., School, Zendesk).
7. Toggle on the specific actions/tools you want to enable for each app.
8. Click **Connect** for each app.
9. When all apps are connected, click the **Connect** button on the MCP server.
10. Click **Copy URL**.
11. Return to Claude Co-work and paste the URL to complete the connection.

### Uploading Free Skills from External Sources

1. Access the shared Google Drive link (provided in video description).
2. Download the markdown skill file(s).
3. Save to your computer.
4. In Claude Co-work, go to **Skills** > **Add** > **Upload a skill**.
5. Drag the downloaded markdown file into the upload area.

---

## Architecture & Technical Details

* **Skill file format:** Markdown (.md) files containing structured instructions for Claude.
* **Skill file content structure:** Contains a role definition (e.g., "you are a personal chief of staff"), task instructions, data sources to query, and output format specifications.
* **HTML output:** Skills can generate HTML files that serve as interactive dashboards, viewable in a web browser.
* **Folder-based context:** Co-work operates within a selected folder, which it can read from and write to.
* **Zapier MCP URL:** zapier.com/mcp -- used to create MCP servers that bridge non-native apps into Claude Co-work.
* **Connector architecture:** Once connected, connectors persist ("connect them once, and it works forever").
* **Scheduled task data model (observed fields):**
  - Task name (e.g., "morning briefing")
  - Schedule/frequency (e.g., "every single day at 7 AM")
  - Next run time
  - Description (e.g., "pull calendar, email, and AI news at 7 AM")
  - Instructions (the skill content)
  - Connected apps list
  - Manual run option ("Run Now" button)

---

## Comparisons & Trade-offs

| Aspect | Regular Claude | Claude Co-work |
|---|---|---|
| Context persistence | Starts fresh every conversation | Knows your business, name, tone; picks up where you left off |
| Memory | No memory | Persistent memory via Claude MD file |
| Setup required | Full setup every time | One-time setup, then reusable |
| App connectivity | None (manual copy/paste) | Direct connectors to 30-50+ apps |
| Autonomous operation | Cannot run tasks without user | Can run scheduled tasks without user interaction |
| Skill system | Not available (or less powerful) | Full skill system with command triggers |

| Approach | Without Connectors | With Connectors |
|---|---|---|
| Calendar data | Copy calendar, take screenshot, paste into Claude | Claude reads calendar directly |
| File access | Download files, then upload them to Claude | Claude accesses Google Drive files directly |
| Email | Manually bring email content into Claude | Claude reads all emails directly |
| Slack | Not possible | Claude posts to Slack on user's behalf |

---

## Limitations & Gotchas

* The speaker does not mention any explicit limitations or bugs. The following are inferred constraints from the described workflows:
* Native connectors are limited to approximately 30-50 apps -- apps not in this list require the Zapier MCP workaround.
* The Zapier MCP workaround requires a Zapier account (signup mentioned).
* Skills must be properly formatted as markdown files to work when uploaded.
* When uploading a skill that already exists, the interface shows "upload and replace" rather than a standard upload button.

---

## Opinions & Recommendations

* **[Opinion]** The speaker considers scheduled tasks "one of the most powerful things you can do with Co-work."
* **[Opinion]** Skills are described as "so, so powerful" -- the speaker states "I can't even stress it enough."
* **[Opinion]** The combination of connectors and scheduled tasks means "Claude could run your entire business for you based on the specific skills you give it."
* **[Opinion]** Co-work with scheduled tasks makes Claude feel "like you have an AI employee."
* **[Opinion]** The speaker compares scheduled tasks to tools like n8n (a workflow automation platform) but states "you don't need it anymore" and "you don't even need to know how to set up a specific workflow."
* **[Recommendation]** The speaker recommends downloading the Claude Desktop App as the first step.
* **[Recommendation]** The speaker suggests using the Zapier MCP hack for apps not natively available in Co-work's connector list.
* **[Recommendation]** Free skills are available via a Google Drive link in the video description. More in-depth skill guides are available in the speaker's paid School community.

---

## Concrete Examples

### Morning Briefing Skill
- **Trigger command:** "morning briefing" or "morning" or "Hey, give me a morning brief"
- **What it does:** Scans calendar, email, and relevant news. Produces an interactive HTML dashboard.
- **Output includes:** Calendar events, urgent emails, emails worth reviewing, top 3 priorities for the day.
- **Scheduled version:** Runs daily at 7 AM, sends results via Slack DM.
- **Skill role definition:** "You are a personal chief of staff. Every morning you scan the user's calendar, email, and relevant news to produce a beautiful interactive HTML dashboard."
- **Output format:** "Apple Swiss styled HTML morning briefing dashboard" [exact phrasing from transcript -- likely "Apple/Swiss" design style]

### End of Day Wrap-Up Skill
- **Schedule:** Runs daily at 6 PM.
- **Output includes:**
  - What Claude Co-work did during the day (activity count and details)
  - What the user personally accomplished
  - What moved forward
  - Things still open/unfinished
  - Tomorrow's focus/top priorities
  - Reflection on how the day went
- **Example output (from demo):** 11 different activities logged -- built two slide decks, created a hook teleprompter, built a thumbnail generator tool, generated eight thumbnail variants for one video, generated five thumbnail variants for another video.
- **Example reflection quote:** "A lot of thumbnail generations were done today. Today, put the camera on and record. The pipeline has five videos filmed and two ready to publish."

### Script Writing Skill
- **What it does:** Writes a full short-form video script.
- **Process:** Researches best trending topics, writes the hook, breaks down the full script.

### Zapier MCP Connection Example
- **Apps connected in demo:** School (community platform), Zendesk (19 different actions available).
- **Client selected:** Cloud Co-work.

### Speaker's Connected Apps
- Canva, GitHub, Gmail, Google Calendar, Slack, Zapier.

---

## Quotes Worth Preserving

* "Claude becomes a 24/7 employee that works in the background."
* "Think of skills like apps for your AI."
* "Install them once, they work forever."
* "Think of it like n8n, but you don't need it anymore."
* "Connect them once, and it works forever."

---

## Three-Component System Summary

The speaker identifies three components that power the entire Claude Co-work system:

1. **Claude MD file** -- Persistent identity and context (who you are, your business, your rules).
2. **Skills** -- Reusable task instructions triggered by commands (what to do and how).
3. **Scheduled Tasks** -- Time-based automation that runs skills without user input (when to do it).

---

*Document generated from YouTube transcript. No external knowledge added. All information sourced directly from the video content.*
