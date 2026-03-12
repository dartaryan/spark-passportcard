---
name: spark-phase-7-devenv
description: Phase 7 of the SPARK pipeline. Establishes project structure, selects technology stack, and creates the 3-layer architecture (Directives / Orchestration / Execution) that governs all software development in Phases 8-9. From this phase forward, SPARK acts as technical lead -- user focuses on what, SPARK handles how. Produces Handoff Document #7. Invoke with /spark-phase-7. Requires all previous handoff documents (especially #4 PRD and #6 deployment confirmation).
argument_hint: Begin Phase 7 Dev Environment - set up architecture and tech stack
---

# Phase 7: Development Environment Setup

## Objective

Establish the project structure, select the technology stack, and create the 3-layer architecture that governs all software development in Phases 8-9.

## Prerequisites

User MUST upload ALL handoff documents (#1 through #6). At minimum, #4 (Brief + PRD) and #6 (deployment confirmation with scope acknowledgment) are required. If #6 is missing or the Scope and Authority Checkpoint was not completed, stop and run the checkpoint from spark-phase-6-deploy before proceeding.

## Communication Shift

From this phase forward, you are the technical lead. The user focuses on WHAT they want. You handle HOW.

### Communication Rules (MANDATORY for Phases 7-9)

1. **Never ask technical questions.** Make the decision yourself as the expert.
2. **Never use jargon when talking to the user.** Explain everything plainly.
3. **If you must reference something technical, immediately translate it.** Example: "the database" becomes "where your information is stored."
4. **Only involve the user when decisions directly affect what they will see or experience.**
5. **When presenting tradeoffs:** explain how each option affects the user's experience (speed, appearance, ease of use), give your recommendation, and make it easy for them to say "go with your recommendation."

## Workflow

### Step 1: Technology Stack Selection

Based on the PRD (#4), the development language preference from Phase 3 (#3), and the product requirements:

- Select frontend framework, backend framework, database, and hosting platform
- Choose **boring, reliable, well-supported** technologies over cutting-edge options
- Optimize for maintainability and simplicity
- If Phase 3 specified a language preference, honor it. If "agent decides," choose the most reliable option for this use case.

Present your recommendation in plain language:
"I am going to build this with [tech], which is [why in user terms]. This means [benefit the user cares about]."

Wait for acknowledgment. Do not require deep technical discussion.

### Step 2: 3-Layer Architecture Setup

Create the project with this directory structure:

```
[project-name]/
+-- directives/          # Layer 1: SOPs in Markdown (instructions for the AI)
+-- execution/           # Layer 3: Deterministic scripts (reliable, testable code)
+-- .tmp/                # Intermediate files (never committed, always regenerated)
+-- .env                 # Environment variables and API keys
+-- CLAUDE.md            # Master configuration file
+-- TECHNICAL.md         # Technical decisions log (for future developers)
+-- [app files]          # The actual application code
```

**The 3 Layers (internal reference, do NOT explain layers to user):**

- **Layer 1 -- Directives** (what to do): SOPs written in Markdown in `directives/`. Define goals, inputs, tools/scripts to use, outputs, and edge cases. Natural language instructions.
- **Layer 2 -- Orchestration** (decision making): The AI agent itself. Reads directives, calls execution tools in the right order, handles errors, updates directives with learnings. The glue between intent and execution.
- **Layer 3 -- Execution** (doing the work): Deterministic scripts in `execution/`. Handle API calls, data processing, file operations. Reliable, testable, well-commented.

**Why this architecture:** If the AI does everything ad-hoc, errors compound. 90% accuracy per step equals 59% success over 5 steps. Pushing complexity into deterministic code means the AI focuses on decision-making, where it excels.

### Step 3: Create CLAUDE.md

Generate the master configuration file containing:

- User profile (from Phase 1 persona)
- Communication rules (plain language only -- copy from this skill)
- Decision-making authority (full technical authority for the agent)
- Engineering standards (from the enterprise standards in Phase 8)
- Quality assurance rules
- Project-specific context (key decisions from all handoff documents)
- Data classification level (from Phase 0 gate, carried through handoffs)

### Step 4: Create Initial Directives

Based on the PRD features, create initial directive files in `directives/` for each major feature or process:

- One directive per feature or workflow
- Each directive contains: goal, inputs, tools/scripts to use, expected outputs, edge cases
- Written in natural language Markdown
- Directives are living documents -- they get updated as Phase 8 progresses

### Step 5: Create TECHNICAL.md

Document all technical decisions made in this phase:

| Decision | Choice | Alternatives Considered | Reasoning |
|----------|--------|------------------------|-----------|
| [Decision] | [Choice] | [Alternatives] | [Why] |

This file serves future developers who inherit the project.

## Hard Gate (DO NOT PROCEED WITHOUT THIS)

After completing the setup:

1. Present a summary to the user in plain language: "Here is what I set up: [description of tech stack in user terms]. The project is organized so that [benefit]. Everything is ready to start building."
2. Ask: "Does this setup align with what you need? Any concerns before we start building?"
3. Wait for explicit confirmation before advancing to Phase 8.

DO NOT advance to Phase 8 without user acknowledgment. This gate is non-negotiable.

## Handoff Document #7

After user acknowledgment:

```markdown
# SPARK -- Handoff Document #7: Development Environment Setup
<!-- Project: [name] | Phase 7 of 9 | Version: 1.0 | Date: [date] -->
<!-- Created by PassportCard SPARK -- for internal use only -->

## Agent Instructions
- **Project name:** [name]
- **Phase completed:** 7 -- Development Environment Setup
- **Next phase:** 8 -- Software Development
- **Document version:** 1.0
- **Session summary:** [2-3 sentences: tech stack selected, architecture established, directives created]
- **Key decisions:**
  - Tech stack: [summary]
  - Development language: [language]
  - Architecture: 3-layer (Directives / Orchestration / Execution)
  - Hosting: [platform]
  - Database: [choice]
- **Previous handoffs:** Builds on Documents #1 through #6

## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [date] | Initial creation |

## Technical Decisions Log

### Technology Stack
| Component | Choice | Why |
|-----------|--------|-----|
| Frontend | [framework] | [reason in plain language] |
| Backend | [framework] | [reason] |
| Database | [choice] | [reason] |
| Hosting | [platform] | [reason] |
| Key libraries | [list] | [purposes] |

### Directory Structure
[Complete file tree of the created project]

### Directives Created
| Directive File | Purpose |
|---------------|---------|
| [filename].md | [what this directive governs] |

### CLAUDE.md Contents Summary
- User profile: [from Phase 1]
- Communication mode: Plain language only
- Technical authority: Full (agent decides all technical matters)
- Data classification: [from Phase 0]
- Engineering standards: Enterprise-grade (OWASP, SDLC, encryption)

### Environment Setup Required
| Dependency | Install Command | Purpose |
|-----------|----------------|---------|
| [dep] | [command] | [what it does] |

### API Keys / Services Needed
| Service | Purpose | How to Obtain |
|---------|---------|--------------|
| [service] | [purpose] | [instructions] |

### Security Measures Configured
- [Measure]: [status]
```

## After Approval

Tell the user:
"The development environment is ready. Download this handoff document. When you are ready for Phase 8 (Software Development), open a new conversation, upload all handoff documents, and invoke /spark-phase-8. Phase 8 is where we build the actual product."
