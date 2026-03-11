# Knowledge Document: 7 Claude Co-work Skills for Daily Use

---

**Source:** YouTube transcript
**Video URL:** https://www.youtube.com/watch?v=RL6hK-Xo7cM
**Speaker(s):** Brock (first name only; identified by "Good morning, Brock" in the morning briefing output and references to "my co-founder")
**Estimated date:** Late February / early March 2025 (references scheduled tasks feature "released last week," Claude Skills 2.0 as a current topic on YouTube)
**Primary topics:** Claude Co-work skills, AI workflow automation, productivity systems, scheduled tasks, MCP connectors
**Products/tools covered:** Claude Desktop App (Co-work mode), Zapier MCP, Excalidraw, Gmail, Google Calendar, Notion, Slack, YouTube, Instagram, GitHub, School (community platform)

---

## Concepts & Definitions

* **Claude Co-work:** A mode inside the Claude Desktop App that allows Claude to work inside specific folders on the user's computer, perform tasks across applications, and produce real file outputs (HTML, markdown, JSON). Distinguished from the standard chat mode which only answers questions.

* **Skills:** Markdown files containing detailed instruction sets that define how Claude should perform a specific workflow. Each skill is a `.md` file with structured instructions. When triggered by a command or keyword, Claude executes the workflow defined in the skill. Skills are stored in the Co-work sidebar under "Customize > Skills."

* **Connectors:** Integrations that allow Claude Co-work to read and write to external applications (email, calendar, etc.). There are 38+ native connectors available inside Claude. Without connectors, users must manually copy/paste data between Claude and external apps.

* **Scheduled Tasks:** A feature that allows Claude Co-work to run tasks automatically on a schedule (hourly, daily, weekdays, or weekly) without manual prompting. Requires the user's laptop to be open. Described as "just released last week" at time of recording.

* **MCP Server:** A method for connecting external tools to Claude Co-work. Zapier MCP is specifically mentioned as a way to connect 8,000+ applications that are not natively integrated with Co-work.

* **Skill Creator:** A meta-skill that helps users build new custom skills through a conversational process. Claude asks follow-up questions to gather context and then generates the skill markdown file automatically.

* **Full Stack (in Co-work context):** The combination of skills + connectors + scheduled tasks, described as equaling "an AI employee on autopilot."

---

## Capabilities & Features

* **Morning Briefing Skill:** Automatically scrapes calendar, email, AI news, and to-do lists, then generates a structured daily brief as both a text output and a custom HTML web page with Apple Swiss style design. Output includes: number of meetings, urgent emails, AI news relevant to user's content, and top three priorities. | Claude Co-work | Requires calendar, email, and news connectors.

* **Research Assistant Skill:** Takes any topic as input and produces a structured research document saved as a real file. Output includes: executive summary, background, timelines, key findings, sourced claims, data/stats from websites, and source list. | Claude Co-work | Described as replacing 30-60 minutes of manual research.

* **Meeting Notes to Action Items Skill:** Takes a pasted meeting transcript and produces: clean summary, key decisions, discussion points, specific action items assigned to individuals, open-ended questions, and follow-up meeting details. Output saved as a markdown file. | Claude Co-work | No specific connector requirements mentioned.

* **Slide Deck Generator Skill:** Creates full visual HTML presentations from a single sentence. Includes smooth animations, visual components on every slide, compelling hook on the first slide. Output is an interactive HTML file. Contains a built-in design system with specific rules. | Claude Co-work | Speaker states the slides in the video itself were built with this skill.

* **Visual Explainer Skill:** Builds interactive web pages that break down complex topics. Can visualize system architectures, business processes, concept breakdowns, and data dashboards. Outputs include interactive diagrams that can be clicked and interacted with. | Claude Co-work | Credited to Nick Nico Balon (spelling uncertain), found on Twitter/GitHub.

* **Diagram Generator Skill:** Takes a description and produces a professional diagram as an Excalidraw-compatible JSON file. The JSON file can be directly imported into Excalidraw. | Claude Co-work | Requires Excalidraw for viewing/editing the output.

* **Skill Creator Skill:** A meta-skill that creates new skills through conversation. Claude asks follow-up questions to understand the user's needs, then generates a properly formatted skill markdown file. | Claude Co-work | No specific requirements.

* **Edit with Claude:** A feature within the skills interface that allows users to modify skill instructions using natural language. User can click "edit with Claude" and describe changes (e.g., "add HTML output with Apple Swiss style design"). | Claude Co-work | Built into the skills UI.

* **38+ Native Connectors:** Pre-built integrations inside Claude for connecting to various applications. | Claude Co-work | Specific apps not fully enumerated.

* **Zapier MCP Integration:** Connects Claude Co-work to 8,000+ applications via Zapier. User adds Zapier as a new MCP server, selects tools/actions, copies a URL from Zapier, and pastes it into Co-work's connector settings. | Claude Co-work + Zapier | Example shown: Notion with 26 available actions (retrieve blocks, get blocks, find pages, etc.).

---

## How-To / Workflows

### How to Set Up Claude Co-work

1. Download the Claude Desktop App from the website (Mac or Windows).
2. Open the app. Two modes are available: Chat mode and Co-work mode.
3. In Co-work mode, create or choose a folder on your computer for Claude to work in.
4. To create a new folder: Click "choose a different folder" > "create a new folder" > name it.

### How to Install a Skill

1. Download the skill as a zip file (speaker provides these via his School community).
2. Open Claude Co-work.
3. Toggle the sidebar on the left-hand side.
4. Click "Customize."
5. Click "Skills."
6. Click the plus (+) button.
7. Click "Upload a skill."
8. Drag the zip file into the folder.
9. Click "Upload."
10. The skill will appear in the skills list and can be clicked to view the markdown instructions.

### How to Trigger a Skill

1. Open Co-work and start a new task.
2. Type the skill's trigger name (e.g., "morning briefing," "research assistant," "slide deck generator").
3. Alternatively, describe the task naturally and Claude will recognize which skill to trigger.

### How to Edit a Skill

1. Go to Customize > Skills.
2. Click on the skill you want to modify.
3. Click the "Edit with Claude" button.
4. Describe the changes in natural language (e.g., "I want you to now give me an output as an HTML site in a Swiss Apple style design").
5. Claude will modify the skill's markdown instructions automatically.

### How to Connect Zapier MCP to Claude Co-work

1. Go to Zapier MCP.
2. Click "New MCP server."
3. Select "Claude Co-work."
4. Click "Add tools."
5. Find and connect the desired application (e.g., Notion).
6. Click "Connect" in Zapier.
7. Click "Copy URL" from Zapier.
8. Return to Claude Co-work.
9. Click "Customize" > "Connectors."
10. Click "New" connector.
11. Select "Zapier."
12. Paste the URL from Zapier.
13. The connection is now active.

### How to Create a Scheduled Task

**Method 1 - From scratch:**
1. Come to the scheduled tasks area.
2. Click on "Task."
3. Describe what you want to call it.
4. Write a description and prompt.
5. Set the frequency (hourly, daily, weekdays, or weekly).

**Method 2 - From an existing task:**
1. Open an existing Co-work task.
2. Ask Claude to turn it into a scheduled task with a specific schedule (e.g., "every single morning at 8 a.m.").
3. Claude will configure the scheduled task (takes approximately 10 seconds).

### How to Use the Skill Creator

1. Open Co-work and start a new task.
2. Describe what skill you want created (e.g., "Create a skill for me that helps me respond to my emails every single morning").
3. The skill creator will ask follow-up questions to customize the skill:
   - Example questions shown: Read which emails (unread only)? What action (summarize and suggest)? What tone (casual and friendly)? What output (save as Gmail drafts)?
4. Answer the follow-up questions.
5. The skill is automatically created and installed.

---

## Architecture & Technical Details

* **Skill file format:** Markdown (`.md`) files containing structured instruction sets.
* **Skill storage location:** Accessible via Co-work sidebar > Customize > Skills.
* **Skill distribution format:** ZIP files containing the markdown skill instructions.
* **Diagram output format:** JSON file compatible with Excalidraw (`.excalidraw` format).
* **HTML output:** Skills can generate interactive HTML files that open in a browser, styled with custom design systems (e.g., "Apple Swiss style design").
* **Scheduled task requirement:** The user's laptop must be open/running for scheduled tasks to execute.
* **Notion via Zapier MCP:** 26 different actions available including: retrieve blocks, get blocks, find pages.

---

## Comparisons & Trade-offs

| Aspect | Without Skills | With Skills |
|---|---|---|
| Starting point | Start fresh every time | Custom to your workflow |
| Experience | Generic responses | Personalized output |
| Data persistence | Nothing saved across workflow | Real files and outputs saved |
| Triggering | Manual prompting each time | One command triggers entire workflow |

| Aspect | Without Connectors | With Connectors |
|---|---|---|
| Email workflow | Copy email into Claude, copy response back into Gmail manually | Claude drafts reply, sends it, checks calendar directly |
| App integration | Manual copy-paste between apps | Direct read/write to apps |

| Aspect | Chat Mode | Co-work Mode |
|---|---|---|
| Capabilities | Ask questions, get responses | Work inside folders, create files, perform tasks across computer |
| Output | Text responses | Real files (HTML, markdown, JSON), interactive web pages |

---

## Limitations & Gotchas

* **Scheduled tasks require laptop to be open:** The user's computer must be running with Claude Co-work active for scheduled tasks to execute. Stated as "the main thing here."
* **Native connectors limited to 38+:** If the needed application is not among the 38+ native connectors, users must use the Zapier MCP workaround.
* **Skills are not plug-and-play for all jobs:** The speaker acknowledges that the seven specific skills shown may not fit every job (teacher, realtor, designer, freelancer), which is why the skill creator exists.

---

## Opinions & Recommendations

* [OPINION] "Cloud Co-work is the best AI tool I've ever used, and I don't say that lightly."
* [OPINION] The speaker states this system has made him "the most productive I've ever been."
* [OPINION] Most people use Claude "the wrong way" -- like a search engine (ask a question, get a response, move on).
* [OPINION] The real value of skills is not just text output but formatted output in different file types (HTML, markdown).
* [OPINION] The visual explainer skill is described as "maybe one of the coolest skills."
* [OPINION] The skill creator is described as "probably maybe the most important" of the seven skills.
* [RECOMMENDATION] Speaker challenges viewers to use the skill creator for anything done repeatedly: invoice generation, lesson planning, listing writing, weekly reports, proposal drafting.
* [RECOMMENDATION] Speaker suggests using the visual explainer to visualize the user's own Claude Co-work system to understand "how my system as a whole is working."
* [OPINION] The slide deck generator saves significant time -- 3 hours is cited as the "average time spent making a presentation," reduced to approximately 30 seconds to a minute.

---

## Concrete Examples

* **Morning Briefing example:** The speaker triggers "morning briefing" and Claude scrapes his calendar, 15 unread emails, AI news relevant to his content niche, and generates an HTML page that says "Good morning, Brock" in an Apple-styled design. Output includes top three priorities for the day.

* **Research Assistant example:** The speaker types "research assistant" with the topic "Claude Skills 2.0" and Claude generates a structured markdown research brief with executive summary, background, skill evolution timelines, key findings, why it matters, and all sources used. Described as replacing 30-60 minutes of manual research.

* **Meeting Notes example:** A mock meeting transcript (not real, to avoid confidential information) is pasted into Co-work. Output includes: meeting summary, key decisions, discussion points, action items split between the speaker, his co-founder, and the people they met with, open-ended questions, and follow-up meeting details.

* **Slide Deck Generator example:** The speaker types "slide deck generator how Claude Co-works" and receives an interactive HTML presentation with smooth animations, visual components, and structured content. The slides shown in the video itself were reportedly built with this skill.

* **Visual Explainer example:** Claude generates an interactive web page explaining how a Claude skill works, including interactive diagrams that can be clicked and explored. Uses custom typography and feels "like a Claude user interface."

* **Diagram Generator example:** The speaker types "diagram generator how Claude Co-works" and receives a JSON file in Excalidraw format. He demonstrates importing it: Show in Finder > open Excalidraw > click open > load from file > import the JSON file.

* **Skill Creator example:** The speaker asks Claude to "create a skill for me that helps me respond to my emails every single morning." Claude asks follow-up questions: which emails (unread only), what action (summarize and suggest), what tone (casual and friendly), what output format (save as Gmail drafts).

* **Scheduled Tasks example:** The speaker converts his morning briefing task into a scheduled task running every morning at 8 a.m. Setup takes approximately 10 seconds.

* **Zapier MCP example:** The speaker connects Notion to Claude Co-work via Zapier MCP, gaining access to 26 different Notion actions.

* **Speaker's automated tasks:** Morning briefing, weekly stats reports, competitor scans across YouTube and Instagram, invoice trackers.

---

## Quotes Worth Preserving

* "Most people use Claude the wrong way."
* "This isn't just a response. This is an entire deliverable."
* "An AI employee on autopilot."
* "It's pretty meta." (on the skill creator skill)
* "I build skills that build skills." [paraphrased intent of the skill creator concept]

---

## Additional Details (Verification Pass)

* **Speaker's business context:** Runs an agency (references "my process as an agency" and "my co-founder"). Creates YouTube content about AI tools.
* **Distribution channel:** All seven skills are available as free downloads via the speaker's School community. A post titled "six cloud co-work skills that I can't live without" is referenced (note: video title says seven, the post says six -- possible discrepancy or the seventh skill creator may be separate).
* **PDF guide:** The speaker created a PDF document with step-by-step guides and troubleshooting information, available in the School community.
* **Visual Explainer credit:** Attributed to "Nick Nico Balon" [spelling uncertain from transcript], found on Twitter, with the actual skill obtained from GitHub.
* **Design aesthetic mentioned repeatedly:** "Apple Swiss style design" is the default style used for HTML outputs across multiple skills.
* **Skill markdown file detail level varies:** The research assistant skill is described as "not super detailed" while the visual explainer is described as "very detailed."
