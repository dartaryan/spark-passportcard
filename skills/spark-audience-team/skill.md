---
name: spark-audience-team
description: Output formatting skill for Team Member audience. Applies action-oriented structure with ownership assignments, deadlines, accountability tables, and operational detail. Activates when Phase 0 audience is set to Team Members.
disable_model_invocation: false
---

# Audience Skill: Team Members

## When This Activates

This skill activates when the target audience selected in Phase 0 is "Team Members". It governs the structure, tone, depth, and format of ALL outputs for the remainder of the session.

## Communication Framework

### Structure: Action-Oriented Format

Team members need clarity on what to do, who owns it, and when it is due. Every deliverable leads with actions, not strategy.

1. **Purpose Statement** -- One sentence: why this work matters and what it connects to. No strategic essay, just enough context to understand the "why."

2. **Action Items Table (MANDATORY):**

| # | Action | Owner | Deadline | Dependencies | Status |
|---|--------|-------|----------|-------------|--------|
| 1 | [specific task] | [name/role] | [date] | [blocking items] | Not Started / In Progress / Done |
| 2 | [specific task] | [name/role] | [date] | [blocking items] | Not Started / In Progress / Done |

Every action must be:
- **Specific** -- "Configure API authentication for Claims module" not "Set up security"
- **Assigned** -- A name or role, never "TBD" or "team" without clarification
- **Dated** -- A specific deadline, not "soon" or "next sprint"
- **Verifiable** -- Clear definition of done: what does "completed" look like?

3. **Key Decisions Made** -- Bullet list of decisions already taken by leadership that the team needs to know. No ambiguity: "We chose Option A (build) over Option B (buy). Rationale: [one sentence]."

4. **Open Questions** -- Items that still need answers, with who is responsible for resolving each and by when.

| Question | Responsible | Target Date | Impact if Unresolved |
|----------|------------|-------------|---------------------|
| [question] | [name/role] | [date] | [what gets blocked] |

5. **Timeline and Milestones** -- Visual if possible (Gantt-style table), otherwise a dated milestone list.

| Milestone | Date | Owner | Deliverable |
|-----------|------|-------|-------------|
| [milestone] | [date] | [name/role] | [what is produced] |

6. **Resources and References** -- Links, documents, tools, access requirements. Everything the team needs to start working without asking follow-up questions.

### Tone

- **Clear and direct.** No corporate filler. "Do X by Y" not "It would be beneficial if we could explore the possibility of X."
- **Operational.** Detail-rich. Include specifics that a team member needs to execute: file paths, system names, configuration parameters, access requirements.
- **Supportive.** Acknowledge complexity where it exists. "This integration is non-trivial; allow buffer time for testing" is more useful than pretending everything is straightforward.
- **No assumed context.** Unlike CEO-level outputs, do not skip background. Team members may not have been in the strategy meeting. Provide enough context to understand what they are building and why.
- **Jargon is OK.** Use technical terminology appropriate to the team's domain. Do not over-simplify for a development team or an operations team that uses these terms daily.

### Length Constraints

| Format | Guideline |
|--------|-----------|
| Task brief | 1-2 pages |
| Sprint/iteration plan | 2-4 pages |
| Technical specification | No hard limit, but organized with clear sections and a table of contents if over 5 pages |
| Status update | Half page maximum |
| Meeting summary | 1 page maximum, action items at top |

### What to Exclude

- Strategic rationale beyond the minimum needed to understand the "why"
- Financial details (budget, ROI) unless directly relevant to the team's scope
- Multiple options and trade-offs already decided by leadership -- state the decision, not the deliberation
- Vague goals without measurable outcomes

### What to Always Include

- Action items with owners and deadlines (the table is mandatory, not optional)
- Definition of done for each deliverable
- Dependencies and blockers explicitly called out
- Escalation path: who to contact if stuck, with specific names/roles
- Next check-in date and format (standup, async update, review meeting)

## Format-Specific Rules

### For PowerPoint
- Avoid PowerPoint for team deliverables unless presenting a kickoff or retrospective.
- If required: one slide per workstream, action items in tables, timeline on dedicated slide.
- Apply spark-brand palette.

### For Word/PDF
- Action items table on page 1, before any context.
- Numbered sections for easy reference in standups.
- Use consistent heading hierarchy: H1 for workstreams, H2 for sub-tasks, H3 for details.
- Apply spark-brand formatting.

### For HTML
- Interactive checklist format if possible (checkboxes for action items).
- Filterable by owner or status.
- Apply spark-brand CSS.

### For Excel
- One sheet per workstream.
- Columns: Task, Owner, Deadline, Status, Dependencies, Notes.
- Conditional formatting: overdue in red, in-progress in yellow, done in green.
- Brand-colored headers.

## Meeting Summary Template

When producing a meeting summary for a team audience, use this structure:

```
MEETING SUMMARY
Date: [date] | Duration: [time] | Attendees: [names]
---------------------------------------------------------

DECISIONS MADE:
1. [Decision] -- Rationale: [one sentence]
2. [Decision] -- Rationale: [one sentence]

ACTION ITEMS:
# | Action | Owner | Deadline
1 | [task]  | [name] | [date]
2 | [task]  | [name] | [date]

OPEN QUESTIONS:
- [Question] -- Owner: [name], Due: [date]

NEXT MEETING: [date, time, agenda focus]
---------------------------------------------------------
```

Action items appear before any discussion notes. Team members scan for their name and their tasks first.

## Golden Standard Reference

Before producing any team-audience deliverable:
- Apply **RACI principles** for ownership clarity (Responsible, Accountable, Consulted, Informed).
- Ensure every task passes the **SMART test** (Specific, Measurable, Assignable, Relevant, Time-bound).
- If the deliverable is a sprint or iteration plan, reference standard agile planning practices (capacity-based, risk-adjusted).
- Search consulting firm knowledge base for project management best practices if the task type warrants it.
