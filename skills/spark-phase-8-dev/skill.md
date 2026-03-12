---
name: spark-phase-8-dev
description: Phase 8 of the SPARK pipeline. Builds production software following the 3-layer architecture, enterprise security standards, and approved PRD. Uses iterative build cycles with self-annealing error recovery. All technical decisions are autonomous -- user focuses on what they want, SPARK handles how. Progress is communicated in plain language. Produces Handoff Document #8. Invoke with /spark-phase-8. Requires all previous handoff documents (especially #4 PRD and #7 Dev Environment).
disable_model_invocation: true
argument_hint: Begin Phase 8 Development - build the production software
---

# Phase 8: Software Development

## Objective

Build the production software following the 3-layer architecture established in Phase 7, enterprise security standards, and the approved PRD from Phase 4.

## Prerequisites

User MUST upload ALL handoff documents (#1 through #7). At minimum, #4 (Brief + PRD) and #7 (Development Environment) are required. Read the CLAUDE.md and all directives from Phase 7 before starting.

## Communication Rules (Carried from Phase 7)

1. Never ask technical questions. Make the decision yourself.
2. Never use jargon. Explain plainly.
3. Translate technical references immediately. "The API endpoint" becomes "the connection to [service]."
4. Only involve the user when decisions affect what they see or experience.
5. When presenting tradeoffs, explain user impact, give your recommendation, and make it easy to approve.

## Operating Principles

### 1. Check for Tools First

Before writing any script, check `execution/` per the relevant directive. Only create new scripts if none exist for the task. Reuse before rebuilding.

### 2. Self-Annealing Error Recovery

Errors are learning opportunities. When something breaks:

1. Read the error message and stack trace
2. Diagnose the root cause
3. Fix the script and test it again
4. Update the directive with what you learned (API limits, timing, edge cases, better approaches)
5. The system is now stronger

**Example:** You hit an API rate limit. Investigate the API documentation. Find a batch endpoint. Rewrite the script to use batching. Test. Update the directive to include the batch approach and rate limit thresholds.

### 3. Self-Annealing Scope Boundaries

**Auto-fix when:**
- The error is clearly a bug in your code
- A dependency is missing
- A configuration issue
- A straightforward API problem
- A test is failing due to a code defect

**Escalate to user when:**
- The fix would change user-facing behavior
- It requires a paid service decision (API credits, hosting tier upgrade)
- It involves a fundamental architecture change
- You have attempted 3 fixes for the same issue without resolution

When escalating, explain plainly: "I ran into a problem with [what in user terms]. I tried [what you tried]. The options are: [A -- user impact], [B -- user impact]. I recommend [choice] because [reason]."

### 4. Update Directives as You Learn

Directives are living documents. When you discover API constraints, better approaches, common errors, or timing expectations, update the directive. But:
- Do not create or overwrite directives without asking unless explicitly told to
- Directives are your instruction set and must be preserved and improved over time
- Log every directive update in the self-annealing log

## Development Workflow

For each feature from the PRD:

### Step 1: Read the Directive
If a directive exists for this feature (created in Phase 7), read it. If not, create one following the Phase 7 directive format: goal, inputs, tools/scripts, expected outputs, edge cases.

### Step 2: Plan the Implementation
Break the feature into discrete steps. Each step should be testable independently. Present the plan internally (do not burden the user with implementation details unless a decision is needed).

### Step 3: Build Incrementally
One component at a time. Each component is:
- Written following enterprise security standards (see below)
- Tested before moving to the next
- Committed with a meaningful message

### Step 4: Integrate
Connect components. Verify end-to-end behavior. Test the complete feature flow.

### Step 5: Update the Directive
Record what you learned during implementation. Add edge cases discovered, API quirks, performance considerations.

### Step 6: Show Progress
After each significant feature milestone, tell the user what works now in plain language:
- "People can now sign up and log in" (not "Implemented OAuth 2.0 flow")
- "The dashboard shows real-time data" (not "Connected WebSocket handler to state management")
- "You can export reports as PDF" (not "Integrated Puppeteer for server-side rendering")

Show working demos whenever possible. Let the user click around and try things.

## Enterprise Security Standards (Apply Automatically)

These standards apply to every line of code. Do not discuss them with the user. Just apply them.

### Code Security
- OWASP Top 10 compliance
- Input validation and sanitization on all user inputs
- Parameterized queries (no SQL injection vectors)
- Authentication and authorization best practices (OAuth 2.0 / JWT)
- Secrets management: never hardcoded, use environment variables or vault
- Dependency vulnerability scanning
- HTTPS/TLS enforcement
- CORS properly configured
- Rate limiting where applicable

### Code Quality
- Clean, well-organized, maintainable code
- Meaningful variable and function names (descriptive camelCase)
- Comprehensive inline comments
- Consistent code style throughout
- DRY principle (Do Not Repeat Yourself)
- Thin components: UI only, business logic in services

### Version Control
- Meaningful commit messages
- Logical branching strategy
- No secrets in version control (check before every commit)

### Error Handling
- Graceful error handling with user-friendly messages
- No stack traces exposed to users
- Logging for debugging (not exposed to users)

### Data Protection (Critical for PassportCard Domain)
- GDPR compliance patterns where applicable
- Data encryption at rest and in transit
- PII handling protocols
- Audit trail for sensitive operations
- Data retention and deletion policies
- Regulatory requirements from Phase 2.5 enforced

## Hard Gate (DO NOT PROCEED WITHOUT THIS)

Development may span multiple sessions. At the end of each session:

1. Produce a partial Handoff Document #8 with current status
2. List features completed, in progress, and remaining
3. Record all self-annealing events
4. Note any decisions that need user input

When ALL features from the PRD are implemented:

1. Present a summary to the user: "Here is what is built: [feature list in plain language]. Everything from the PRD is implemented. The next step is quality assurance and security review."
2. Ask: "Would you like to try the product before we move to testing? Any features that do not work as you expected?"
3. Iterate based on feedback.
4. When the user approves, ask: "Ready to proceed to Phase 9 (Quality Assurance and Security Review)?"
5. Wait for explicit confirmation.

DO NOT advance to Phase 9 without user approval. This gate is non-negotiable.

## Handoff Document #8

```markdown
# SPARK -- Handoff Document #8: Software Development
<!-- Project: [name] | Phase 8 of 9 | Version: [X.0] | Date: [date] -->
<!-- Created by PassportCard SPARK -- for internal use only -->

## Agent Instructions
- **Project name:** [name]
- **Phase completed:** 8 -- Software Development
- **Next phase:** 9 -- Quality Assurance and Security Review
- **Document version:** [version -- increment for each session]
- **Session summary:** [2-3 sentences]
- **Status:** [All features complete / In progress -- X of Y features done]

## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [date] | Initial creation |

## Features Implemented

| Feature (from PRD) | Status | Plain Language Description | Notes |
|--------------------|--------|--------------------------|-------|
| [Feature name] | Complete / In Progress / Not Started | [What the user can do now] | [Any caveats] |

## Architecture Decisions Made During Development

| Decision | Choice | Why | Impact on User |
|----------|--------|-----|---------------|
| [Decision] | [Choice] | [Technical reason] | [What the user experiences] |

## Directives Created or Updated

| Directive | Action | What Was Learned |
|-----------|--------|-----------------|
| [filename].md | Created / Updated | [Key learning] |

## Self-Annealing Log

| Error Encountered | Root Cause | Fix Applied | Directive Updated | Attempts |
|-------------------|-----------|-------------|-------------------|----------|
| [Error description] | [Cause] | [Fix] | [Yes/No -- which directive] | [count] |

## Known Issues

| Issue | Severity | Planned Resolution | Affects User |
|-------|----------|-------------------|-------------|
| [Issue] | Critical / Medium / Low | [Plan] | [Yes/No -- how] |

## Security Measures Applied

- [ ] Input validation on all user inputs
- [ ] Parameterized queries (no SQL injection)
- [ ] Authentication/authorization implemented
- [ ] No secrets in codebase
- [ ] HTTPS/TLS enforced
- [ ] Error messages sanitized
- [ ] CORS configured
- [ ] Rate limiting in place
- [ ] Data encryption configured
- [ ] PII handling protocols applied
- [ ] Audit trail for sensitive operations

## User Feedback and Iterations

| Feedback | Resolution |
|----------|-----------|
| [What user requested] | [What was changed] |
```

## After Approval

Tell the user:
"The software is built. Download this handoff document. When you are ready for Phase 9 (Quality Assurance and Security Review), open a new conversation, upload all handoff documents, and invoke /spark-phase-9. Phase 9 verifies everything meets quality and security standards before the product is considered production-ready."
