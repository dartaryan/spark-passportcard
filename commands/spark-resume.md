# /spark-resume

Resume an existing SPARK project from uploaded handoff documents. Identifies where the project left off, confirms with the user, and routes to the appropriate phase.

## Purpose

Multi-session projects are the norm in SPARK. Users close a conversation, come back days or weeks later, and need to pick up exactly where they left off. This command makes that seamless.

## Behavior

### Step 1: Check for Uploaded Documents

Scan the conversation for uploaded files. Look for SPARK handoff documents by identifying:
- Files with "Handoff Document" in the content
- Files with SPARK phase references (Phase 0 through Phase 9)
- Files with version numbers (v1.0, v0.5, etc.)
- Files with SPARK project metadata (project name, data classification, audience)

**If no handoff documents are found:**

"I don't see any SPARK handoff documents uploaded. To resume a project, please upload all handoff documents from your previous sessions. These are the files produced at the end of each phase.

If you are starting a new project, use /spark-start instead."

Stop here. Do not proceed without documents.

**If unrelated files are uploaded (no SPARK metadata):**

"These files don't appear to be SPARK handoff documents. They may be useful as background context for a new project. Would you like to:
1. Start a new project using these as reference material (/spark-start)
2. Upload the correct handoff documents to resume an existing project"

Stop here. Wait for user direction.

### Step 2: Read and Index All Documents

For each uploaded handoff document, extract:

| Field | Value |
|-------|-------|
| Project name | [from document] |
| Phase number | [0-9] |
| Phase name | [from document] |
| Version | [from document] |
| Completion status | Complete / Partial |
| Date produced | [from document] |
| Language | [from Phase 0 context] |
| Output format | [from Phase 0 context] |
| Audience | [from Phase 0 context] |
| Data classification | [from Phase 0 context] |

Sort by phase number ascending.

### Step 3: Conflict Detection

Before confirming, check for inconsistencies across documents:

- **Version conflicts:** Multiple versions of the same phase? Use the highest version number. Note: "I see v1.0 and v1.2 of the Phase 2 handoff. Using v1.2 as the latest."
- **Project name mismatches:** Documents from different projects? Ask: "I see documents from [Project A] and [Project B]. Which project are we resuming?"
- **Persona drift:** Is the target user described consistently across phases? If Phase 1 says "claims adjuster" and Phase 3 says "operations manager," flag it.
- **Feature drift:** Features mentioned in Phase 1 that disappeared or changed significantly by Phase 3 without explanation? Flag it.
- **Scope drift:** Phase 3 scope significantly larger or smaller than Phase 1 vision? Flag it.

If conflicts are found, present them to the user:

"Before we continue, I noticed [number] inconsistencies across your handoff documents:
1. [Specific conflict with phase references]
2. [Specific conflict with phase references]

Should we resolve these now, or note them as open items and continue?"

Do not silently ignore conflicts. They compound across phases.

### Step 4: Confirm State with User

Present the project status clearly:

```
SPARK Resume — Project: [name]
================================

Documents loaded:
  [x] Phase 0 — Gate (v[X], [date])
  [x] Phase 1 — Discovery (v[X], [date])
  [x] Phase 2 — Market Analysis (v[X], [date])
  [ ] Phase 3 — Product Definition (not found)

Session context:
  Language: [language]
  Format: [format]
  Audience: [audience]
  Data classification: [level]

Key decisions from previous phases:
  - [Decision 1] (Phase [N])
  - [Decision 2] (Phase [N])
  - [Decision 3] (Phase [N])

Open questions from previous phases:
  - [Question 1] (flagged in Phase [N])

Recommended next step: Phase [N] — [name]
```

Then ask: "Does this look correct? Should we proceed to Phase [N], or do you want to revisit a previous phase first?"

### Step 5: Route to Phase

Once the user confirms:

1. Activate `spark-core` to load pipeline rules.
2. Activate `spark-brand` to enforce brand identity.
3. Activate the audience skill matching the Phase 0 context.
4. Activate the phase skill for the next phase.
5. Begin the phase, referencing decisions and context from loaded handoff documents.

If the user wants to revisit a previous phase:

"Understood. I will re-run Phase [N]. Note that changes in Phase [N] may affect downstream decisions. After we complete the re-run, I will flag any downstream handoff documents that need updating."

### Step 6: Handle Edge Cases

**Express Lane origin (v0.5 handoff):**

If the handoff document is version 0.5 (produced by /spark-express), note: "This project started in Express Lane. The Phase 1 handoff has gaps marked [TO BE EXPLORED IN FULL PIPELINE]. Phase 1 will focus on filling those gaps rather than starting from scratch."

Route to Phase 1 with instructions to fill gaps, not repeat the full discovery interview.

**Stale project (handoff documents older than 30 days):**

"These handoff documents are from [date] -- over 30 days ago. Market conditions, competitive landscape, and regulatory context may have shifted. I recommend:
1. Proceed, but I will re-run the competitive scan in the next research phase
2. Restart from Phase 1 with the previous work as reference

Which approach do you prefer?"

**Incomplete handoff (partial document):**

"The Phase [N] handoff appears incomplete -- [specific missing section]. We can:
1. Attempt to reconstruct from what is available and continue
2. Re-run Phase [N] to produce a complete handoff

Option 1 is faster but may produce gaps downstream. Option 2 takes more time but produces a solid foundation."

**Single handoff document uploaded but earlier phases are missing:**

"You uploaded the Phase [N] handoff, but Phases [list] are not present. These earlier phases contain context that improves output quality. Options:
1. Continue with Phase [N+1] using only the available context (faster, lower quality)
2. Upload the missing handoff documents (best quality)
3. Do a rapid reconstruction of missing phases based on what is in this document (moderate, 5-10 minutes)"

## Hard Rules

- NEVER proceed without explicit user confirmation of the project state.
- NEVER silently ignore conflicts between handoff documents.
- ALWAYS load the audience skill matching the Phase 0 context before producing any output.
- ALWAYS re-check data classification level and apply it to the resumed session.
- If the user asks to skip ahead past unbuilt phases, explain what will be missing and let them decide. Do not block, but do inform.

## Usage

User types: `/spark-resume`
Or selected via "Resume Existing Project" option during Phase 0 gate.
