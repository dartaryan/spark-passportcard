# Knowledge Document: Claude Code Skills -- Skill Creator Skill, Evals, and Live Build

---

**Source:** YouTube transcript
**Video URL:** https://www.youtube.com/watch?v=RAZVk5NPNtE
**Speaker(s):** Nate (YouTube creator focused on AI agents / Claude Code workflows)
**Estimated date:** Late February or early March 2026 (references Opus 4.6 as current model, discusses Opus 5 as upcoming)
**Primary topics:** Claude Code skills, Anthropic skill creator skill, skill evaluation/benchmarks, skill trigger tuning, live skill build demo
**Products/tools covered:** Claude Code, Anthropic Skill Creator Skill (official), VS Code, Claude Desktop App, Claude Terminal, GitHub, YouTube API, PDF rendering, Plan Mode (Claude Code), Opus 4.6, Opus 5 (referenced as future), LinkedIn (mentioned as example), Excel (mentioned as example)

---

## Concepts & Definitions

* **Skill:** A recipe -- text instructions (like a prompt) that an agent reads so it performs a task correctly and consistently every time. Stored as markdown files. Readable by humans. Example: an internal communications skill contains formatting preferences a company uses.

* **Capability uplift skill:** A skill that acts as a prompt to teach Claude how to do something better than it can by default. Example: a front-end design skill that provides guidance on good fonts, color schemes, background elements, and layouts so websites look less generic. These skills may fade over time as models improve -- a future model may outperform the model + skill combination.

* **Encoded preference skill:** A skill where Claude already understands each individual piece, but the skill encodes a specific sequential workflow or order of operations. These are more like step-by-step automations, typically specific to the user's process. These skills tend to stay durable and accurate over time because the process is specific to the user and the model will not be trained on it.

* **Skill Creator Skill:** An official Anthropic skill that teaches Claude how to build, test, measure, refine, and improve other skills. It contains Anthropic's best practices for building skills. It replaces the need to manually study Anthropic's 33-page PDF on skill fundamentals.

* **Evals (evaluations):** A process where the agent evaluates the quality of a skill by testing prompts, comparing outputs to desired examples, and then optimizing the skill. Two primary reasons to run evals: catching regressions and spotting growth.

* **Catching regressions:** As a model evolves, it might use a skill worse because it was trained differently. Evals provide an early signal that the skill needs to evolve.

* **Spotting growth:** As models improve, they might perform better without a skill at all. Evals surface this so you can retire or archive the skill.

* **Benchmarks:** Running all evals to produce metrics including pass rate, time, and token usage. Can compare performance with and without a skill loaded, showing side-by-side results.

* **Skill trigger tuning:** A process where the skill creator analyzes a skill, tests different prompts a user might say to trigger the skill, and then edits the skill's description so the skill gets called more accurately. Addresses false triggers and misfires.

* **False triggers / Misfires:** When a wrong skill is invoked, or when no skill is invoked even though the user intended one to be used.

* **Slash commands:** An alternative way to invoke skills explicitly, as opposed to natural language invocation. Less convenient but more deterministic.

* **disable_model_invocation: false:** A YAML setting in the skill markdown file that allows Claude Code to call the skill based on a natural language request, rather than requiring an explicit slash command.

* **Argument hint:** A YAML setting in the skill markdown file. When Claude Code decides to use the skill, it sends a hint providing context (such as what video or topic is being discussed) so the skill understands what to focus on.

---

## Capabilities & Features

* **Skill creation from scratch:** The skill creator skill can build entirely new skills from a user's natural language description. | Skill Creator Skill | Requires the skill to be installed in the project.

* **Skill modification and improvement:** The skill creator skill can modify and improve existing skills based on user feedback. | Skill Creator Skill | Iterative process -- each use and feedback loop makes it stronger.

* **Skill performance measurement (evals):** Test a skill by giving the agent examples of desired outputs, then the agent tests prompts and compares results. | Skill Creator Skill | Requires example outputs for comparison.

* **Benchmark comparisons:** Run evals with and without a skill loaded, producing side-by-side metrics: pass rate, total time, total tokens. | Skill Creator Skill | None mentioned.

* **Skill trigger tuning:** Analyze and edit a skill's description so it triggers more accurately from natural language. | Skill Creator Skill | Not perfect but significantly better than untuned triggers.

* **Skill description optimization:** Optimize a skill's description for better trigger accuracy. | Skill Creator Skill | None mentioned.

* **Multi-agent parallel execution:** Skills can spin up multiple agents that run in parallel (e.g., a YouTube agent and a research agent), then merge their outputs back to a main agent. | Claude Code | Demonstrated with the "idea mining" skill.

* **Plan mode:** A mode in Claude Code where the agent first creates a detailed plan before executing. User can review and approve or tweak the plan. | Claude Code | None mentioned.

* **Plugin / skill installation:** Skills can be installed via `/plugins` command, then selecting "manage plugins." Installation scopes: just for the user, for the project, or locally. | Claude Code | May require restarting Claude Code after installation.

* **Automatic skill invocation:** When `disable_model_invocation` is set to false, Claude Code can invoke the skill based on natural language without requiring a slash command. | Claude Code | May result in misfires if trigger descriptions are not tuned.

* **PDF report generation from skill:** The demonstrated skill created an HTML template and rendered it as an actual PDF file, placed in the project folder. | Claude Code | The initial render had incorrect data; iteration was needed.

* **Brand asset integration:** The skill was able to use brand guidelines and logos from a specified folder to style the PDF output. | Claude Code | User must point the agent to the brand asset folder.

* **Context window management:** The speaker cleared out context (after 62% was used) before providing feedback, to free up space. | Claude Code | Context usage is visible and manageable.

* **Skill self-audit:** After building or modifying a skill, the last to-do item in the agent's plan was to audit with the skill creator. | Skill Creator Skill | Automatically appended to the task list.

---

## How-To / Workflows

### Installing the Skill Creator Skill in Claude Code

1. Open Claude Code (VS Code, terminal, or desktop app).
2. Type `/plugins`.
3. Click on "manage plugins."
4. Search for `skill-creator`.
5. Find the official Anthropic skill creator skill (linked to GitHub).
6. Click install. Choose scope: just for you, for the project, or locally.
7. Restart Claude Code so the skill registers.
8. Verify installation by asking: "Do you have the skill creator skill? What does it do?"

### Building a New Skill (Live Demo Workflow)

1. Switch to plan mode in Claude Code.
2. Give a natural language description of the desired skill. Example: "I need you to create a skill called YouTube weekly roundup where at the end of every week, you will look at the videos that I made that week. You'll analyze the comments, views, engagement, and give me a PDF report on insights, strengths, weaknesses, threats, opportunities."
3. The agent asks clarifying questions (time window, report sections, PDF style).
4. Answer the questions. Example answers: rolling 7-day window; use brand assets from a specific folder.
5. The agent returns a detailed plan. Review and accept (or tweak).
6. The agent executes the plan, creating all necessary files. The last step is to run the test and iterate with the skill creator eval process.
7. Review the output (in this case, a PDF report).
8. Provide feedback on what worked and what did not.
9. Clear context if needed (speaker cleared at 62% usage).
10. Return to plan mode and provide detailed feedback about data quality, missing elements, research depth.
11. The agent creates an updated plan and re-executes.
12. Review the improved output.
13. Continue iterating -- each cycle strengthens the skill.

### Running a Benchmark on a Skill

1. Ask the agent: "Benchmark the [skill name] skill with and without the skill loaded and show me side-by-side results so I can see the uplift."
2. The agent runs evals in both conditions.
3. Results include: pass rate, total time, total tokens.
4. Compare the two columns to determine skill value.

### Running Evals to Improve a Skill

1. Provide the agent with examples of high-quality desired outputs (e.g., good job descriptions).
2. The agent reads the current skill, tests prompts, compares outputs to the examples.
3. The agent optimizes the skill based on the comparison.
4. Review and iterate.

---

## Architecture & Technical Details

### Skill File Structure (as observed in the demo)

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

### Skill Markdown File Structure (YAML frontmatter)

```yaml
name: [skill name]
description: [skill description -- used for trigger matching]
disable_model_invocation: false   # Allows natural language invocation
argument_hint: [context hint for the skill]
```

Below the YAML frontmatter: markdown content including context, channel benchmarks, optional focus areas, and step-by-step instructions. The skill.md file points to all scripts and resources the agent needs.

### Skill Creator Skill Location

* Available in the Anthropic official plugins/skills repository on GitHub.
* The skill itself is a markdown file (skill.md) containing Anthropic's best practices.

### Anthropic's 33-Page PDF Reference

* Covers: fundamentals, planning and design, testing and iteration, distribution and sharing, patterns and troubleshooting.
* The skill creator skill is meant to encapsulate this knowledge so users do not need to study the PDF manually.

### Multi-Agent Architecture (Idea Mining Example)

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

* The two sub-agents run in parallel.
* Both send output back to the main agent.
* The main agent scores, cross-references, and produces final output.

### YouTube Weekly Roundup Skill (Demo Output Sections)

The final PDF report included these sections:
- Logo and title ("Weekly Roundup")
- Videos published count (7 in the final version)
- Stats: views, likes, comments
- Executive summary with key takeaways
- Per video breakdown with actual metrics
- SWOT analysis (strengths, weaknesses, threats, opportunities)
- Top comments and audience signals (including comment text, source video, like count)
- Video requests from audience
- Pain points from audience
- Competitor context (channels, videos, stats, notable gaps)
- Trending in AI this week (video titles, channels, views, views per day, topic)

---

## Comparisons & Trade-offs

| Aspect | Capability Uplift Skill | Encoded Preference Skill |
|---|---|---|
| **What it does** | Teaches Claude to do something better than default | Encodes a specific sequential workflow |
| **Nature** | Prompt-like | Step-by-step automation |
| **Example** | Front-end design skill (fonts, colors, layouts) | Idea mining (YouTube + research agents in parallel, scoring, output) |
| **Durability** | May fade as models improve; future models might be better without the skill | Stays durable because the process is user-specific and models are not trained on it |
| **When to retire** | When the default model outperforms model + skill | Unlikely to need retirement |

| Metric | Without Skill (PDF example) | With Skill (PDF example) |
|---|---|---|
| **Pass rate** | Lower (specific numbers not stated) | Higher |
| **Total time** | Not stated | Not stated |
| **Total tokens** | Not stated | Not stated |
| **Result** | Text placed incorrectly (checkboxes, fields) | Text accurately placed in correct fields |

---

## Limitations & Gotchas

* **Capability uplift skills may become obsolete.** Example: if Opus 5 is better at front-end design by default, the front-end design skill may actually hurt performance. Need to benchmark with and without the skill after model updates.

* **Skill trigger tuning is not perfect.** The evaluation chart showed improvement but not 100% accuracy on test and train scores.

* **Initial skill output may have incorrect data.** In the live demo, the first PDF had wrong data, missing SWOT analysis content, and missing competitor context. Required iterative feedback.

* **Context window consumption.** Building and testing a skill consumed 62% of the context window. The speaker had to clear context before providing feedback.

* **Skills may not appear in the Claude Code skills list immediately after installation.** If installed at the project level, verification may be needed ("Do you have the skill creator skill?").

* **Research depth may be insufficient on first pass.** The agent's initial YouTube data scraping was not in-depth enough. The speaker had to explicitly request granular data: comments analysis, competitor analysis, trending videos, and a full SWOT analysis.

* **PDF rendering in Claude Code.** The PDF did not display correctly within Claude Code's viewer but opened correctly as an actual file.

* **Brand asset usage requires explicit direction.** The speaker had to tell the agent where the brand assets folder was located.

* **Restarting Claude Code may be required** after installing a new plugin/skill.

---

## Opinions & Recommendations

* [OPINION] The speaker believes that the word "may" in Anthropic's statement about natural language skill descriptions should have been "will" -- expressing confidence that in the future, users will be able to describe skills in high-level natural language and the model will figure out all the technical details.

* [OPINION] Skills are increasingly important for non-engineers (executives, managers, operators) who can explain what they want and the metrics to hit, but may not know technical implementation details.

* [OPINION] Using a project more and using a skill more makes it stronger, because the agent can reuse existing context, scripts, and assets already in the project.

* [OPINION] The iterative feedback loop (run skill, review output, give feedback, re-run) is the primary mechanism for improving skill quality.

* [OPINION] The skill creator skill essentially shortcuts the process of learning Anthropic's 33-page best practices PDF.

* [RECOMMENDATION] After building a skill, keep running it and providing feedback: "I liked this, I didn't like this." Use the skill creator to iterate.

* [RECOMMENDATION] Build an executive assistant project in Claude Code as a foundation for adding many skills.

* [RECOMMENDATION] When a skill's output is wrong, provide very specific feedback about what data is missing and what depth of research is expected.

---

## Concrete Examples

* **Front-end design skill (capability uplift):** Without the skill, asking Claude to build a website produces generic "AI slop." With the skill, it uses good fonts, color schemes, backgrounds, and layouts for a better result.

* **Idea mining skill (encoded preference):** Looks at YouTube comments, niche videos, AI trends on X and the web. Spins up a YouTube agent and research agent in parallel. They both report back to the main agent, which scores and cross-references to produce video ideas.

* **Internal communications skill:** A set of resources for writing internal communications using a specific company format.

* **PDF form-filling skill eval:** Before eval optimization, the skill had trouble finding the right spot to place text in PDFs. After running the evaluation and improving, text was accurately placed in checkboxes and fill-in fields.

* **Job description skill eval scenario:** Give the agent many examples of good job descriptions. The agent tests the skill, compares outputs to examples, and optimizes.

* **YouTube Weekly Roundup skill (live build):** Built in approximately 20 minutes. Rolling 7-day window. Produces a branded PDF with video stats, executive summary, per-video breakdown, SWOT analysis, top comments, audience signals, competitor context, and trending AI topics. Used three agents in parallel for data gathering.

* **Benchmark example (from Anthropic):** "Benchmark the PDF skill with and without the skill loaded and show me side-by-side results so I can see the uplift." Results showed pass rate, total time, and total tokens.

* **Trigger tuning evaluation (from Anthropic):** Chart showed left-hand side (before) vs. right-hand side (after) with test score and train score. Green and blue bars showed improved results after trigger tuning, though not perfect.

---

## Quotes Worth Preserving

* "It's basically just a recipe."
* "It is literally just text."
* "Capability uplift skills might fade over time."
* "Encoded preference skills will probably stay pretty durable."
* "The more you use a skill, the better."
* "I was able to build this in 20 minutes."

---

## Verification Notes

- Model version referenced as current: Opus 4.6
- Future model referenced: Opus 5
- Context usage at point of clearing: 62%
- Videos published in final report: 7
- Time to build the skill (speaker's estimate): 20 minutes
- Anthropic PDF length: 33 pages
- Competitor name mentioned: Jack Roberts
- Speaker's project name: "Herk 2" (personal assistant project in Claude Code)
- Brand referenced: "AIS" (speaker's brand, with logo)
- Installation path: `/plugins` then "manage plugins" then search `skill-creator`
- Installation scopes: user, project, local
