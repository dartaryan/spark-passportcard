# SparkKit — PassportCard Product Strategist

SparkKit is a Claude plugin that guides you from a raw idea to a validated concept, working prototype, and production-ready software. It works as a structured 10-phase pipeline with built-in quality gates, regulatory compliance checks, and audience-specific output formatting.

Built and maintained by Ben Akiva for PassportCard.

---

## Installation

### Step 1: Open Claude Code

Launch Claude Code on your machine. Make sure you have a Pro, Max, Team, or Enterprise plan.

### Step 2: Add the SparkKit repository

In Claude Code, go to: **Browse > Personal > Add from GitHub**

Paste this repository URL:
```
dartaryan/spark-passportcard
```

Click **Sync** to download the plugin.

### Step 3: Install the SparkKit plugin

After syncing, install the plugin. You should see SparkKit listed in your available skills.

### Step 4: Verify

Type `/spark-start` in a new conversation. SparkKit should greet you and begin collecting session context. If it does, you're set.

---

## Updating

When Ben pushes an update, you'll receive an email notification. To update:

1. Go to **Browse > Personal**
2. Find SparkKit in your list
3. Click **Sync**

That's it. Your next conversation will use the updated version.

---

## How to Use

### Starting a New Project

Type `/spark-start` in any Claude Code conversation. SparkKit will ask you six quick questions to configure the session:

1. **Language** — English, Hebrew, German, or other
2. **Output format** — Word, PowerPoint, Excel, HTML, PDF, or Markdown
3. **Session type** — Full Pipeline, Express Lane, or Resume Project
4. **Purpose** — What you want to achieve
5. **Audience** — Who receives the output (Board, CEO, C-Level, Team, Brokers, Public)
6. **Your role** — So SparkKit adapts its vocabulary and depth to you

### The Pipeline

SparkKit runs as a 10-phase pipeline. Each phase produces a handoff document that carries your work to the next phase.

| Phase | What Happens | What You Get |
|-------|-------------|-------------|
| 0 - Gate | Session setup | Configured context |
| 1 - Discovery | Strategic interview to sharpen the idea | Idea Definition document |
| 2 - Market | Competitive and market analysis | Market Analysis document |
| 2.5 - Best Practices | Authoritative source research | Research findings |
| 3 - Definition | Feature spec, user stories, design direction | Product Definition document |
| 4 - Brief + PRD | Professional requirements document | Strategy and PRD document |
| 5 - Prototype | Working HTML prototype | Interactive prototype |
| 6 - Deploy | Step-by-step deployment guidance | Deployment guide |
| 7 - Dev Environment | Tech stack and project setup | Dev environment spec |
| 8 - Development | Production code | Working software |
| 9 - QA + Security | Testing, security audit, deployment readiness | QA report |

Phases cannot be skipped. Each phase ends with your explicit approval before SparkKit moves on.

### Commands

| Command | What It Does |
|---------|-------------|
| `/spark-start` | Begin a new project (runs Phase 0 gate) |
| `/spark-next` | Advance to the next phase (with gate check) |
| `/spark-express` | Single-session viability check with go/no-go recommendation |
| `/spark-resume` | Continue a project from where you left off (upload your handoff documents) |
| `/spark-status` | See where you are in the pipeline and what's been completed |

### Express Lane

Short on time? Use `/spark-express` for a single-session viability check. SparkKit asks five focused questions, runs a quick competitive scan, and produces an Idea Viability Report with a clear GO / CONDITIONAL GO / NO-GO recommendation. Takes about 15-20 minutes.

If the idea passes, the report converts into a Phase 1 handoff document so you can enter the full pipeline later.

### Resuming a Project

Projects span multiple sessions. At the end of each phase, SparkKit produces a handoff document. Save it.

To resume:
1. Start a new conversation
2. Upload your handoff document(s)
3. Type `/spark-resume`
4. SparkKit reads the documents, confirms where you left off, and continues

### Working Across Sessions

For best results, run each phase in a separate conversation. Long conversations reduce quality. The handoff documents carry everything SparkKit needs to pick up seamlessly.

---

## Data Classification

SparkKit asks about data sensitivity at the start of every session and tags your project accordingly:

| Level | Meaning |
|-------|---------|
| Public | No sensitive data |
| Internal | Company-internal, not regulated |
| Confidential | Contains PII or financial data |
| Restricted | Contains regulated health or insurance data |

CONFIDENTIAL and RESTRICTED projects automatically activate additional compliance checks.

**Important:** SparkKit uses web search during research phases. Do not paste proprietary data, customer names, or internal financial figures into the conversation. Describe the pattern or need instead.

---

## Audience Formatting

Based on who will receive the output, SparkKit applies different communication frameworks:

| Audience | Format |
|----------|--------|
| Board of Directors | Pyramid Principle, SCR structure, max 10-12 slides |
| CEO / President | Strategic framing, 2-3 options, decision-ready |
| C-Level Executives | Function-specific language (CFO gets financial framing, CTO gets technical) |
| Team Members | Action items with ownership and deadlines |
| Brokers / Partners | Plain language, benefit-first, comparison tables |

---

## Support

For questions, issues, or feature requests, contact Ben Akiva directly.