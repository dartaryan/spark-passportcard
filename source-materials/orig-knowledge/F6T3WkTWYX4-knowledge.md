# Knowledge Document: Claude Code / Claude Co-work Scheduled Tasks

**Source:** YouTube transcript
**Video URL:** https://www.youtube.com/watch?v=F6T3WkTWYX4
**Speaker(s):** Unidentified (appears to be a SaaS founder / AI community leader based on references to "my team," "my AI community," "AI accelerator," "AI workshops")
**Estimated date:** Late February / early March 2025 (scheduled tasks described as "recently launched"; references to Claude Desktop, Claude Co-work, Claude Code)
**Primary topics:** Claude scheduled tasks, Claude skills, automation workflows, Claude Co-work, AI-driven business process automation
**Products/tools covered:** Claude Co-work, Claude Code, Claude Desktop, Gmail, Stripe, Notion, Fireflies (meeting transcription), Slack, Chrome browser, Google Spreadsheets, n8n (mentioned as comparison)

---

## Concepts & Definitions

* **Scheduled Tasks:** A feature in Claude Co-work and Claude Code that automatically sends a prompt to a new Claude session at a defined time interval. Intervals can be set to every month, every week, every day, every 10 minutes, or any custom frequency.

* **Skills:** A set of saved instructions for Claude on how to do a specific process. Described as step-by-step instructions for Claude on exactly how to perform a process and which software to access. Example given: a monthly accounting / P&L skill with step zero, step one, scan Gmail, go through Stripe, etc. Skills can be created in two ways: (1) doing a process once (Claude learns from it), or (2) telling Claude to save a specific process as a skill.

* **Commands:** A way to combine multiple skills into a bigger workflow to automate more complex tasks. A command triggers multiple skills in sequence. Example: "outbound pipeline" command that includes three skills -- lead qualification, lead qualifier, and personalized outreach skill.

* **Scheduled Skills:** The combination of scheduled tasks with skills. Instead of scheduling a plain prompt, you schedule a skill to run at a specific time. Described as "the real unlock."

* **Human in the Loop:** A workflow pattern where the automation runs autonomously but pauses when it needs additional information. Claude pings the user with a "blue dot" indicator, the user can steer it or provide extra information, and then Claude finishes the process.

* **Instant Triggers / Webhooks:** A capability that does NOT yet exist in Claude Co-work. The speaker notes there are no webhooks yet. The workaround is to schedule tasks on a very regular basis (e.g., checking every hour).

---

## Capabilities & Features

* **Scheduled task creation (UI method):** Users can define the name, description, prompt, time interval/frequency, model to use, and the folder Claude has access to | Claude Co-work / Claude Code | Available in the left sidebar under "scheduled" option

* **Scheduled task creation (chat method):** Users can type `/schedule` in a chat and describe what kind of scheduled task they want to create | Claude Co-work | Example: "every day at 6:00 a.m. schedule my email categorization skill"

* **Scheduled task creation (inline during skill creation):** When creating a new skill, users can tell Claude to schedule the skill at a specific time interval as part of the skill creation prompt | Claude Co-work | Example: "You're going to run this on the first of each month at 9:00 a.m."

* **Scheduled task run history:** All scheduled task runs are visible in the "scheduled" section on the left sidebar, showing when each task was triggered | Claude Co-work | None mentioned

* **Skill reading and execution:** When a scheduled task triggers, Claude reads the skill instructions to know what to do, then executes the process | Claude Co-work | None mentioned

* **Tool access for scheduled tasks:** Claude can access Gmail, Stripe, web search, Chrome browser, folders on the computer, Notion, and other connected tools during scheduled task execution | Claude Co-work | Requires that Co-work has been given access to those tools/browser/folders

* **Draft email creation:** Scheduled tasks can craft emails and save them as drafts in Gmail rather than sending directly, allowing human review before sending | Gmail integration | None mentioned

* **Notification sending:** Scheduled tasks can be configured to send urgent notifications through Slack when specific conditions are met (e.g., high priority email detected) | Slack integration | None mentioned

* **Command scheduling:** Scheduled tasks can trigger commands (which chain multiple skills), not just individual skills | Claude Co-work | None mentioned

---

## How-To / Workflows

### How to Create a Scheduled Task (UI Method)
1. Open Claude Co-work or Claude Code
2. Look at the left sidebar for the "scheduled" option
3. Click to add a new task
4. Define the name of the scheduled task
5. Define the description
6. Write the prompt to automatically send
7. Set the time interval or frequency
8. Select the model to use
9. Set the folder to give Claude access to
10. Save -- Claude will automatically send the prompt to a new session at the defined interval

### How to Schedule a Skill via Chat
1. Open a chat in Claude Co-work
2. Type `/schedule`
3. Describe the task, e.g., "every day at 6:00 a.m. schedule my email categorization skill"

### How to Schedule a Skill During Skill Creation
1. Start creating a new skill by telling Claude the process
2. Include the schedule in the prompt, e.g., "You're going to run this on the first of each month at 9:00 a.m."
3. Claude will automatically save it to the scheduled section

### Failed Payment Follow-Up Workflow (Example)
1. Scheduled task runs every day
2. Checks all failed payments from yesterday (via Stripe)
3. Reviews previous email threads with those customers to avoid duplicate messages
4. Categorizes the payment failure type
5. Crafts an email tailored to the specific failure type
6. Saves the email as a draft in Gmail (for human review before sending)
7. Reports the results (e.g., "found two failed payments, crafted email copy, added as draft in Gmail")

### Post-Meeting Task Automation Workflow (Example)
1. Scheduled task runs on a daily basis
2. Analyzes the transcript from Fireflies (meeting transcription tool)
3. Creates tasks for all teams
4. Updates processes
5. Gives an overview of the meeting
6. Prepares the next day's call and agenda
7. Adds the meeting overview, key decisions made, and action items to Notion

### Monthly Accounting Workflow (Example -- Human in the Loop)
1. Scheduled task runs on the first of each month at 9:00 a.m.
2. Goes through Gmail
3. Goes through Stripe
4. Uses web search
5. Uses Chrome browser to update spreadsheets
6. When needing more information, pings the user with a blue dot notification
7. User provides steering or extra information
8. Claude finishes the process

### Daily Task Review Workflow (Example)
1. Scheduled task runs daily
2. Checks the user's tasks for the day
3. Prioritizes tasks according to importance
4. Takes into account what was done yesterday and the day before

### Polling-Based Trigger Workaround (for Lack of Webhooks)
1. Create a scheduled task or skill
2. Set it to run on a very regular basis (e.g., every hour)
3. Have it check if a specific event occurred in another software (e.g., new customer payment)
4. If the event is detected, perform the desired action (e.g., send a thank-you email)

---

## Architecture & Technical Details

* Scheduled tasks work in both Claude Co-work and Claude Code
* Each scheduled task triggers a new Claude session at the defined interval
* The scheduled section in the left sidebar shows all scheduled task runs across all tasks
* Skills are stored as step-by-step instruction sets that Claude reads at execution time
* Commands allow chaining multiple skills into sequential workflows

---

## Comparisons & Trade-offs

| Aspect | Claude Co-work Scheduled Tasks | n8n (referenced as comparison) |
|---|---|---|
| Type | AI-driven automation with natural language prompts and skills | Traditional automation platform |
| Trigger type | Time-based only (no webhooks/instant triggers yet) | Supports webhooks and instant triggers |
| Complexity | Can chain skills via commands | Native workflow builder |
| Unique advantage | Natural language instructions, browser access, human-in-the-loop | Not discussed in detail |

---

## Limitations & Gotchas

* **Requires Claude Desktop to be open:** Scheduled tasks will only run if the Claude Desktop app is opened. If the app is closed, tasks will NOT run on schedule. They will run immediately whenever the user opens Claude Desktop or the Claude Co-work app.

* **No instant triggers / webhooks:** There are no webhooks yet. Tasks can only be triggered on time-based schedules. Workaround: run tasks on a very regular basis (e.g., every hour) to poll for changes.

* **No mention of error handling:** The transcript does not describe what happens when a scheduled task fails mid-execution.

---

## Opinions & Recommendations

* [Opinion] The speaker states that scheduled skills are "the real unlock," not just scheduled prompts.

* [Opinion] The speaker describes Claude Co-work as looking "more and more like an automation platform like n8n" with the addition of scheduled tasks.

* [Opinion] The speaker considers the failed payment follow-up use case as "already making an impact on my revenue."

* [Opinion] The speaker characterizes scheduled tasks as "a really powerful upgrade for Claude Co-work because this really starts looking like an automation platform."

* [Recommendation] The speaker highly recommends checking out their previous tutorial on how to build good skills.

* [Opinion] Even for non-autonomous automations (human-in-the-loop), scheduled tasks are described as "still very useful" because they also serve as reminders and Claude can do preparatory work before human intervention.

---

## Concrete Examples

### Example 1: Daily Email Categorization
- **Prompt used:** "Check my unread emails for relevance. You're my personal assistant. Use the daily email skill."
- **Schedule:** Every day at 5:46 p.m.
- **Behavior:** Gets triggered automatically, reads the skill, goes through Gmail inbox, prioritizes action items

### Example 2: Failed Payment Follow-Up
- **Schedule:** Every day
- **Behavior:** Checks failed payments from yesterday, reviews previous email threads, categorizes failure type, crafts customized email, saves as Gmail draft, reports results
- **Result shown:** Found two failed payments, crafted email copy, added as drafts in Gmail

### Example 3: Post-Meeting To-Do Updates
- **Schedule:** Daily
- **Behavior:** Analyzes transcripts from Fireflies, creates tasks for teams, updates processes, prepares next day's call and agenda, adds meeting overview to Notion
- **Notion output shown:** Meeting overview, key decisions made, action items
- **Described as:** "A completely autonomous automation that runs in Claude Co-work"

### Example 4: Monthly Accounting / P&L
- **Schedule:** First of each month at 9:00 a.m.
- **Tools used:** Gmail, Stripe, web search, Chrome browser (for spreadsheet updates)
- **Type:** Human-in-the-loop (Claude pings user with blue dot when needing additional info)
- **Skill structure:** Step zero, step one (scan Gmail), then Stripe, etc.

### Example 5: Daily Task Review
- **Schedule:** Daily
- **Behavior:** Checks tasks for the day, prioritizes by importance, considers what was done yesterday and the day before

### Example 6: Outbound Pipeline Command
- **Type:** Command (not a single skill)
- **Skills included:** Lead qualification, lead qualifier, personalized outreach skill
- **Behavior:** Triggers multiple skills in sequence

### Example 7: New Customer Thank-You Email (Hypothetical)
- **Schedule:** Every hour
- **Behavior:** Checks if there were new payments, if so sends a thank-you email to the customer
- **Note:** Described as a workaround for the lack of webhooks

### Example 8: Urgent Email Notification (Hypothetical)
- **Behavior:** If a high priority email is detected during the daily email skill, send an urgent notification through Slack

---

## Quotes Worth Preserving

* "The real unlock is scheduling not just prompts, but scheduling skills."
* "This really becomes like a powerful automation platform."
* "This really starts looking like an automation platform."

---

## Three Methods to Schedule Tasks (Summary)

| Method | Description |
|---|---|
| UI | Use the "scheduled" option in the left sidebar to fill in task details |
| Chat `/schedule` command | Type `/schedule` in a chat and describe the desired schedule in natural language |
| Inline during skill creation | Tell Claude to schedule the skill at a specific time while creating the skill |

---

## Additional Context Mentioned

* The speaker references "five powerful use cases" they have been using: (1) daily email categorization, (2) daily task reviews, (3) post-meeting to-do updates, (4) automatic follow-ups on failed customer payments, (5) monthly accounting.
* The speaker mentions an "AI community," "AI accelerator," and "AI workshops" where users can access pre-built skills, plugins, and blueprints.
* The speaker references a previous tutorial on how to build good skills.
* The speaker mentions "plugins" alongside skills as resources their team is building out.
