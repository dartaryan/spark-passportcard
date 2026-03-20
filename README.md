# SparkKit - PassportCard Product Strategist

SparkKit is a product development toolkit for PassportCard employees. It guides you from idea to production through a structured 10-phase pipeline with built-in quality gates, regulatory compliance, and audience-specific output formatting.

## Quick Start

1. Install the plugin:
   ```
   /plugin marketplace add dartaryan/spark-passportcard
   /plugin install spark@spark-passportcard
   ```

2. Start talking to Spark:
   Just type what you want to build. Spark activates automatically and guides you through the process.

## Optional: Enable Image Generation

To let Spark generate brand-compliant images:
1. Get a free Gemini API key at https://aistudio.google.com/apikey
2. Set it as an environment variable: `GEMINI_API_KEY=your_key_here`
3. Restart Claude Code

## Optional: Connect NotebookLM

For knowledge management and research synthesis:
1. `pip install notebooklm-mcp-cli`
2. `nlm login` (opens browser for Google auth)
3. `claude mcp add notebooklm-mcp -- notebooklm-mcp`
4. Restart Claude Code

## Optional: Install UI UX Pro Max

For enhanced visual quality in prototypes and dashboards:
```
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

## What's Inside

- **Spark Agent** -- your product strategist. Speaks Hebrew by default, guides you through every phase.
- **20 Skills** -- phases 0-9, audience formatting (board, CEO, C-level, broker, team), brand enforcement, compliance, data classification
- **6 Commands** -- spark-start, spark-setup, spark-express, spark-resume, spark-status, spark-next
- **Brand Assets** -- PassportCard templates (PPTX + DOCX), logos, icons, lifestyle photos, AI-generated backgrounds
- **MCP Integrations** -- Gemini image generation, NotebookLM knowledge management

## The 10-Phase Pipeline

0. Gate -- session setup, audience, language, classification
1. Discovery -- idea sharpening, user/market/advantage interview
2. Market Analysis -- competitive landscape, validation
2.5. Best Practices -- authoritative source sweep
3. Product Definition -- features, user stories, scope
4. Brief + PRD -- consolidated product requirements
5. Prototype -- working HTML prototype
6. Deployment -- GitHub Pages walkthrough
7. Dev Environment -- tech stack selection
8. Development -- production build
9. QA -- security review, testing, deployment readiness

## Version History

See `changelog/spark-changelog.md` for full version history.
