# Knowledge Document: 10 Claude Code Skills That Actually Matter

---

## Metadata

- **Source:** YouTube transcript
- **Video URL:** https://www.youtube.com/watch?v=gm8Ci8X2mpo
- **Speaker(s):** Duncan Rogoff (former art director for Apple, PlayStation, Nissan; runs a six-figure AI agency)
- **Estimated date:** Late 2025 / early 2026 (based on Claude Code skills ecosystem having 60,000+ published skills, mature skill installation via npx)
- **Primary topics:** Claude Code skills, AI-assisted web design, developer productivity workflows, skill installation and chaining, AI security tooling
- **Products/tools covered:** Claude Code, Anthropic Skills Repository (GitHub), Find Skill Skill (by First Cell), Front-End Design Skill (by Anthropic), Web Design Guidelines Skill (by Vercel), Ora Superpower Brainstorming Skill, Skill Creator Skill (by Anthropic), Obsidian Skill (by CEO of Obsidian), Document Parsing Skills (Doc/PDF/PowerPoint/Excel by Anthropic), X/Twitter Research Skill, Reddit Fetch Skill, Trail of Bits Security Skill Suite, Canva, LinkedIn, Gemini, Notion, GitHub, X Developer Portal, Skool (community platform)

---

## Concepts & Definitions

* **Claude Code Skills:** Installable slash-command extensions for Claude Code that add specialized capabilities. Over 60,000 published skills exist in the ecosystem at the time of recording.
* **Meta skill:** A skill whose purpose is to find, manage, or create other skills (e.g., Find Skill Skill, Skill Creator Skill).
* **Vibe coding:** The phenomenon where people building with AI produce sites that all look the same -- white background, blue buttons, no personality.
* **Interrogation mode:** A behavior triggered by certain skills (e.g., Ora Brainstorming) where Claude shifts from execution to asking structured questions before beginning work.
* **Skill stacking / skill chaining:** Using the output of one skill as the input to another skill in sequence, compressing multi-step workflows (e.g., generate post ideas with one skill, then write and publish with another).
* **Document parsing:** The ability to read, extract information from, summarize, and interact with file formats such as PDF, PowerPoint, and Excel inside Claude Code.
* **Static analysis:** Automated code review to detect vulnerabilities without executing the code, as provided by the Trail of Bits skill suite.
* **Constant time analysis for crypto code:** A specific security check provided by Trail of Bits that analyzes cryptographic code for timing-based vulnerabilities.

---

## Capabilities & Features

### 1. Find Skill Skill (by First Cell)
* **Search and install skills from terminal:** Allows searching the 60,000+ skill ecosystem and installing skills without leaving the Claude Code terminal | Find Skill Skill | Over 400,000 installs
* **Natural language skill search:** User describes what they need in plain language (e.g., "I need a skill to help me create designs in Canva") and the skill finds matching options | Find Skill Skill | No constraints mentioned
* **In-terminal installation:** After finding a skill, offers to install it immediately by typing Y for yes | Find Skill Skill | None mentioned

### 2. Front-End Design Skill (by Anthropic)
* **Structured design thinking phase:** Forces Claude to go through a visual direction process before writing any code | Front-End Design Skill | Over 100,000 installs
* **Problem identification:** Determines what problem the interface solves and who will use it | Front-End Design Skill | None mentioned
* **Extreme tone selection:** Picks a bold/extreme visual tone because extremeness is visually interesting and attention-grabbing | Front-End Design Skill | None mentioned
* **Memorable element identification:** Figures out the one thing someone will remember about the company/site | Front-End Design Skill | None mentioned
* **Design system creation:** Goes through typography, color, motion, spatial composition, background, and visual details before coding | Front-End Design Skill | None mentioned
* **Personalization via Claude memory:** Can use "based on everything you know about me" to personalize output if Claude Code has prior interaction history | Front-End Design Skill | Requires prior interaction or an interview session

### 3. Web Design Guidelines Skill (by Vercel)
* **100+ design/dev rules:** Loads rules around accessibility, performance, and UI best practices into Claude | Web Design Guidelines Skill (Vercel) | None mentioned
* **Dynamic guideline updates:** Fetches latest guidelines from a source URL, meaning Vercel can update rules over time | Web Design Guidelines Skill | None mentioned
* **Accessibility rules:** Covers interactive elements, hover states | Web Design Guidelines Skill | None mentioned
* **Form design guidance:** Information about creating effective forms | Web Design Guidelines Skill | None mentioned
* **Animation, typography, content handling, images, performance, navigation rules:** Comprehensive coverage of web design details | Web Design Guidelines Skill | None mentioned
* **Pre-build review:** Reviews all guidelines before building the site | Web Design Guidelines Skill | None mentioned

### 4. Ora Superpower Brainstorming Skill
* **Structured thinking phase before execution:** Inserts a brainstorming/planning phase before Claude starts coding | Ora Brainstorming Skill | None mentioned
* **Interrogation mode:** Claude asks hard questions, surfaces things the user hadn't considered | Ora Brainstorming Skill | None mentioned
* **Visual brainstorming option:** Can create mockups, diagrams, comparisons in a web browser during brainstorming | Ora Brainstorming Skill | Optional; can be declined for text-only mode
* **Text-only brainstorming mode:** When visual mode is declined, operates purely in text | Ora Brainstorming Skill | None mentioned
* **Context-aware questioning:** Uses what it already knows about the user to ask targeted follow-up questions | Ora Brainstorming Skill | None mentioned
* **Reduced revision rounds:** Users report roughly 30% fewer revision rounds by using this skill first | Ora Brainstorming Skill | Self-reported community data

### 5. Skill Creator Skill (by Anthropic)
* **Create custom skills with zero code:** Tell Claude what you want the skill to do and it builds a new slash command | Skill Creator Skill | None mentioned
* **Memory file integration:** Can build skills that read from Claude's .md memory files | Skill Creator Skill | None mentioned
* **Skill output chaining:** Created skills can be designed to output in formats consumable by other skills | Skill Creator Skill | None mentioned

### 6. Obsidian Skill (by Obsidian CEO)
* **Markdown file creation/editing:** Creates and edits markdown files with wiki links, embeds, callouts, properties, and Obsidian-specific syntax | Obsidian Skill | None mentioned
* **Database editing:** Edits databases with views, filters, formulas, and summaries | Obsidian Skill | None mentioned
* **Canvas editing:** Edits canvases with nodes, edges, and groups | Obsidian Skill | None mentioned
* **Automatic linking:** Automatically links new content (e.g., research notes) to existing notes, databases, and canvases | Obsidian Skill | None mentioned
* **Proper Obsidian formatting:** Automatically formats data in the way Obsidian expects | Obsidian Skill | None mentioned

### 7. Document Parsing Skills (by Anthropic)
* **Doc reading and interaction:** Adds the ability to read, extract, summarize, and ask questions about document files | Doc Skill (Anthropic) | Claude cannot natively read these formats
* **PDF reading and interaction:** Same capabilities for PDF files | PDF Skill (Anthropic) | Same limitation
* **PowerPoint reading and interaction:** Same capabilities for PowerPoint files | PowerPoint Skill (Anthropic) | Same limitation
* **Excel reading and interaction:** Same capabilities for Excel files | Excel Skill (Anthropic) | Same limitation
* **Key issue flagging:** Can flag key issues found in documents | Document Parsing Skills | None mentioned

### 8. X/Twitter Research Skill
* **Tweet/thread/timeline pulling:** Pulls tweets, threads, or timelines directly from the terminal inside Claude Code | X Research Skill | Requires API credentials from X Developer Portal
* **Structured content extraction:** Grabs structured content from tweets | X Research Skill | None mentioned
* **Reply and engagement data:** Grabs replies and engagement metrics | X Research Skill | None mentioned
* **Sentiment summarization:** Can summarize overall sentiment from a set of tweets | X Research Skill | None mentioned
* **Pain point surfacing:** Surfaces the most repeated pain points from tweet data | X Research Skill | None mentioned
* **No API cost bypass:** Avoids the $100/month minimum Twitter API cost | X Research Skill | Still requires X Developer Portal credentials (free tier implied)

### 9. Reddit Fetch Skill
* **Reddit thread/subreddit fetching:** Gets any Reddit thread or subreddit feed despite Reddit blocking AI agent requests | Reddit Fetch Skill | None mentioned
* **Gemini-powered content retrieval:** Hands off the request to Gemini to fetch the content, then returns it to Claude in a clean format | Reddit Fetch Skill | Requires Gemini as intermediary
* **AI block bypass:** Works around Reddit's blocking of AI agent requests | Reddit Fetch Skill | None mentioned

### 10. Trail of Bits Security Skill Suite
* **Static analysis:** Automated code analysis for vulnerabilities | Trail of Bits Skills | None mentioned
* **Vulnerability scanning:** Detects security vulnerabilities in code | Trail of Bits Skills | None mentioned
* **Constant time analysis for crypto code:** Analyzes cryptographic code for timing vulnerabilities | Trail of Bits Skills | None mentioned
* **Smart contract auditing:** Plugin specifically for smart contract security | Trail of Bits Skills | None mentioned
* **Code auditing:** General code auditing plugin | Trail of Bits Skills | None mentioned
* **Malware analysis:** Plugin for malware analysis | Trail of Bits Skills | None mentioned
* **Fix suggestions:** Returns findings with suggestions to fix identified issues | Trail of Bits Skills | None mentioned

---

## How-To / Workflows

### Installing Any Claude Code Skill
1. Find the skill's npx install command (available in the speaker's Notion guide or on GitHub).
2. Open a terminal.
3. Paste the npx command into the terminal.
4. When prompted "which agents to install to," select Claude Code.
5. Choose global installation to have access from anywhere.
6. Installation completes (described as taking about half a second).
7. Open Claude Code by typing `quad` in the terminal.
8. Access the skill via its slash command.

### Using the Find Skill Skill
1. Install the Find Skill Skill (npx command).
2. Open Claude Code terminal.
3. Type the slash command to activate "find skills."
4. Describe what you need in natural language (e.g., "I need a skill to help me create designs in Canva").
5. The skill returns matching results with descriptions.
6. When asked if you want to install a found skill, type Y for yes.

### Using the Front-End Design Skill
1. Install the skill globally for Claude Code.
2. Open a new Claude Code terminal.
3. Type `/frontend` for front-end design.
4. Provide a prompt describing what you want (e.g., "based on everything you know about me, create a simple landing page in a dark mode aesthetic with neon green accents").
5. Claude goes through a design thinking phase (problem identification, tone selection, memorable elements, typography, color, motion, spatial composition).
6. Claude generates the website.

### Using the Ora Brainstorming Skill
1. Install the skill.
2. Open Claude Code.
3. Type `/brainstorming`.
4. Provide the task description.
5. Optionally accept or decline visual brainstorming mode.
6. Answer Claude's interrogation questions one by one.
7. After the Q&A phase, Claude moves into execution.

### Creating a Custom Skill with Skill Creator
1. Install the Skill Creator Skill (from Anthropic).
2. Open Claude Code.
3. Type the slash command for skill creator.
4. Describe the new skill you want in natural language (e.g., "I want to create a new skill that goes into the claude.md memory of everything it knows about me and gives me five ideas for LinkedIn posts that I could talk about today").
5. Claude researches context and drafts a skill outline.
6. Claude may ask clarifying questions (e.g., "Should this also do a quick web search for trending topics or work purely from memory files?").
7. Answer the questions.
8. Review the outline and confirm ("yes, this looks right").
9. Claude writes and saves the new skill.
10. The new skill is immediately available via its slash command (e.g., `/daily` for daily post ideas).

### Skill Stacking Workflow (LinkedIn Post Example)
1. Call the Daily Post Ideas skill to generate 5 post ideas from memory.
2. Review the ideas.
3. Call a separate write-and-publish skill to take a selected idea and write + publish it to LinkedIn.
4. Total workflow time: reduced from approximately 1 hour to approximately 2 minutes.

### Setting Up X/Twitter Research Skill
1. Go to the skill's GitHub repository.
2. Follow instructions to get API credentials from the X Developer Portal.
3. Copy the installation command from the repository.
4. Paste into terminal and install.
5. Use within Claude Code to query tweets, threads, or timelines.

---

## Architecture & Technical Details

* **Skill installation method:** All skills can be installed using an `npx` command in the terminal.
* **Installation scope options:** Skills can be installed globally (accessible from anywhere) or locally.
* **Agent selection during install:** Terminal prompts which agent to install to (Claude Code is one option).
* **Skill activation:** Skills are invoked via slash commands in the Claude Code terminal (e.g., `/frontend`, `/brainstorming`, `/daily`).
* **Claude memory files:** Claude Code maintains `.md` memory files (referred to as `claude.md` or "claw.md" in transcript) that store information about the user. Skills can read from these files.
* **Vercel guidelines source:** The Web Design Guidelines Skill fetches guidelines from a source URL, enabling Vercel to update guidelines over time without updating the skill itself.
* **Reddit Fetch architecture:** Claude Code sends request to Gemini, which fetches Reddit content (bypassing Reddit's AI agent blocking), then returns clean formatted data back to Claude.
* **Trail of Bits plugins:** Available as separate plugins on GitHub for: smart contracts, code auditing, malware analysis.
* **Anthropic Skills Repository:** Located on GitHub, contains multiple official skills including document parsing (PDF, PowerPoint, Excel), front-end design, and skill creator.
* **X/Twitter API cost:** Official Twitter API costs $100/month minimum. The X Research Skill still requires credentials from X Developer Portal but avoids this cost.

---

## Comparisons & Trade-offs

### Anthropic Front-End Design Skill vs. Vercel Web Design Guidelines Skill

| Aspect | Anthropic Front-End Design Skill | Vercel Web Design Guidelines Skill |
|---|---|---|
| Focus | Visual direction, design thinking, personality | SEO, traffic optimization, accessibility, performance, UI best practices |
| Approach | Creates color system, typography, mood before coding | Reviews 100+ rules/guidelines before building |
| Design output quality (speaker's test) | Better visual design (terminal hacker aesthetic with neon green) | Slightly worse design but better copy |
| Navigation | No top nav in example | Included top nav in example |
| Guideline updates | Static skill | Fetches latest guidelines from source URL (can be updated by Vercel) |
| Best for | Distinctive, personality-driven UI | SEO-focused, standards-compliant sites |
| Speaker's suggestion | Can be used in combination with Vercel skill | Can be used in combination with Anthropic skill |

---

## Limitations & Gotchas

* **Claude Code cannot natively read PDFs, PowerPoints, or Excel files.** The Document Parsing Skills are required to add this capability.
* **Reddit blocks AI agent requests.** The Reddit Fetch Skill works around this by routing through Gemini.
* **Twitter/X API is expensive.** The official API costs $100/month minimum. The X Research Skill requires free credentials from X Developer Portal but avoids the paid API.
* **X Research Skill requires API credentials.** Users must go to the X Developer Portal and set up credentials. The GitHub repository has a walkthrough.
* **Most of the 60,000+ published skills are described as "garbage."** The speaker explicitly states it is "basically impossible to keep up and figure out what you should actually be using."
* **Brainstorming skill may not be ideal for simple tasks.** The speaker notes a simple landing page is "maybe not the best use case" for the Ora Brainstorming Skill; it is better suited for complex tasks like building a user authentication system.
* **Claude's memory depends on prior interaction.** Using "based on everything you know about me" only works well if Claude Code has prior interaction history. If not, the speaker recommends having Claude interview you first.
* **Trail of Bits skills are described as "the most complex."** Installation and usage is more involved than simpler skills.

---

## Opinions & Recommendations

* [OPINION] The speaker states that most of the 60,000+ Claude Code skills are "garbage."
* [OPINION] The speaker considers the Find Skill Skill essential as a starting point for any new project.
* [OPINION] The speaker believes vibe-coded sites all look the same: "white background, some blue buttons, no freaking personality at all."
* [OPINION] The speaker recommends using the Anthropic Front-End Design Skill and the Vercel Web Design Guidelines Skill in combination for best results.
* [OPINION] The speaker considers the Ora Brainstorming Skill most valuable for complex tasks, not simple ones.
* [OPINION] The speaker describes Obsidian as "the new hot knowledge base right now" and recommends it for anyone building RAG agents or knowledge bases.
* [OPINION] The speaker says that Reddit discussions often surface before Twitter/X discussions on the same topic.
* [OPINION] The speaker considers Trail of Bits "one of the most respected security research firms in the world" and their skills important for anything "serious or enterprise-grade."
* [OPINION] The speaker describes using audience's own language back to them as driving "the highest engagement."
* [OPINION] The speaker recommends having Claude Code interview you if you feel it does not know enough about you.
* [RECOMMENDATION] For every repeated workflow, create a custom skill using the Skill Creator Skill.
* [RECOMMENDATION] Use skill stacking/chaining to compress multi-step workflows (example: post ideas skill into write-and-publish skill reduced posting time from ~1 hour to ~2 minutes).

---

## Concrete Examples

### Example: Find Skill Skill in Action
* User typed: "I need a skill to help me create designs in Canva."
* Result: Found the "Canva Branded Presentation Skill" from Canva's official SDK team.
* Offered to install it immediately.

### Example: Front-End Design Skill Output
* Prompt: "Based on everything you know about me, create a simple landing page in a dark mode aesthetic with neon green accents. Just give it three simple sections."
* Result: A terminal/hacker aesthetic website with neon green accents. Included animated elements, hover buttons, and sections for "Cloud Code tutorials," "agents," "automation," and "content system." Headline: "I help entrepreneurs and creators move faster using Cloud AI agents and automation."

### Example: Vercel Web Design Skill Output
* Same prompt as above.
* Result: A landing page with headline "Build AI systems that actually work for you." Included a top navigation bar. Speaker assessed copy as better but design as slightly worse compared to Anthropic skill output.

### Example: Ora Brainstorming Skill Interaction
* Prompt: Landing page with dark mode, neon green accents, three sections.
* Claude first offered visual brainstorming in a web browser (mockups, diagrams, comparisons).
* After declining, Claude switched to text-only mode and began asking questions.
* Claude identified the user as "a creator who teaches Cloud Code, runs school communities, and builds lead magnets for an audience of entrepreneurs and marketers."
* Questions asked: "What's the primary call to action?" and "What should those three sections be?" with options like hero/about/CTA, hero/what you get, hero/social proof.

### Example: Skill Creator - Daily Post Ideas
* Request: Create a skill that reads claude.md memory and generates five LinkedIn post ideas.
* Claude asked whether to include web search for trending topics or work purely from memory.
* User chose memory-only for speed and offline availability.
* Output skill named "Daily Post Ideas" with slash command `/daily`.
* Sample output included: "I built 28 AI automations in one sprint, and the biggest bottleneck wasn't the tools, it was the readme file" (lesson-type post) and "Stop building automations, start building systems you can explain to a beginner in 60 seconds" (hot-take post).

### Example: Skill Stacking for LinkedIn
* Step 1: Call Daily Post Ideas skill to get 5 ideas.
* Step 2: Call a separate write-and-publish skill to draft and publish to LinkedIn.
* Time reduction: From approximately 1 hour to approximately 2 minutes.

---

## Quotes Worth Preserving

* "Most of it is garbage." (on the 60,000+ skills ecosystem)
* "Every workflow you repeat is a skill waiting to be built."
* "Extremeness works. It's visually interesting."
* "Have Claude Code interview you first."
* "What makes this unforgettable?"
* "Professional-grade security inside the terminal."

---

## Complete Skill List (Summary)

| # | Skill Name | Creator | Installs (if mentioned) | Slash Command (if shown) |
|---|---|---|---|---|
| 1 | Find Skill Skill | First Cell | 400,000+ | /find [unclear] |
| 2 | Front-End Design Skill | Anthropic | 100,000+ | /frontend |
| 3 | Web Design Guidelines Skill | Vercel | Not mentioned | /web-design-guidelines [unclear] |
| 4 | Ora Superpower Brainstorming Skill | Ora | Not mentioned | /brainstorming |
| 5 | Skill Creator Skill | Anthropic | Not mentioned | /skill-creator [unclear] |
| 6 | Obsidian Skill Suite | CEO of Obsidian | Not mentioned | Not shown |
| 7 | Document Parsing Skills (PDF, PPTX, XLSX) | Anthropic | Not mentioned | Not shown |
| 8 | X/Twitter Research Skill | Not specified | Not mentioned | Not shown |
| 9 | Reddit Fetch Skill | Not specified | Not mentioned | Not shown |
| 10 | Trail of Bits Security Skill Suite | Trail of Bits | Not mentioned | Not shown |

---

## External Resources Mentioned

* **Speaker's Notion guide:** Free guide with links and install commands for all 10 skills (linked in video description).
* **Anthropic Skills Repository on GitHub:** Official repository containing multiple Anthropic-created skills.
* **Vercel's GitHub account:** Hosts the Web Design Guidelines Skill.
* **X Developer Portal:** Required to obtain API credentials for the X/Twitter Research Skill.
* **Trail of Bits GitHub repository:** Contains the security skill suite with multiple plugins.

---

## Speaker Background Notes

* Speaker (Duncan Rogoff) describes himself as running Skool communities ("school" in transcript transcription), teaching Claude Code, building lead magnets for entrepreneurs and marketers.
* Claims over 10,000 LinkedIn followers grown using stacked Claude Code skills.
* Promotes a program to "build a profitable personal brand that prints clients in 49 days" (linked in video description).
* Has a separate video on stacking Claude Code skills for LinkedIn growth.
