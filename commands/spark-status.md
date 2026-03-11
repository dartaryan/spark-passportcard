# /spark-status

Dashboard showing current project progress. Answers "where am I?"

## Behavior

1. Read all uploaded handoff documents.
2. Produce a concise status dashboard:

```
SPARK Status Dashboard
======================
Project: [name]
Data Classification: [level]
Language: [language] | Format: [format] | Audience: [audience]

Phase Progress:
  [x] Phase 0 -- Gate (completed [date])
  [x] Phase 1 -- Discovery (completed [date])
  [ ] Phase 2 -- Market Analysis (CURRENT)
  [ ] Phase 2.5 -- Best Practices
  [ ] Phase 3 -- Product Definition
  [ ] Phase 4 -- Brief + PRD
  [ ] Phase 5 -- Prototype
  [ ] Phase 6 -- Deployment
  [ ] Phase 7 -- Dev Environment
  [ ] Phase 8 -- Development
  [ ] Phase 9 -- QA + Security

Key Decisions Made:
  - [decision 1] (Phase [N])
  - [decision 2] (Phase [N])

Open Questions:
  - [question 1]
  - [question 2]

Risks Flagged:
  - [risk 1] (Phase [N])

Next Step:
  [What needs to happen next and which command to invoke]
```

3. If no handoff documents are uploaded, ask the user to upload them.
4. If the project appears stalled (handoff documents are older than 2 weeks), note this and ask if the user wants to resume or restart.

## Usage

User types: `/spark-status`
