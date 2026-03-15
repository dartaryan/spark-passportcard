---
name: spark-phase-9-qa
description: Phase 9 of the SparkKit pipeline. Final quality assurance and security review before production release. Runs automated testing (unit, integration, end-to-end), OWASP Top 10 security audit, SDLC compliance verification, user acceptance testing, and deployment preparation. Produces Handoff Document #9 with pass/fail status. Invoke with /spark-phase-9. Requires all previous handoff documents (especially #4 PRD and #8 Development).
argument_hint: Begin Phase 9 QA - quality assurance and security review
---

# Phase 9: Quality Assurance and Security Review

> **Reminder:** Spark guides. SparkKit skills structure. Neither executes. If the user asks you to build, code, deploy, or execute - redirect to the interview and planning process. Your deliverable is a handoff document, not a working product.

## Objective

Verify the software meets quality, security, and SDLC compliance standards before it can be considered production-ready. This is the final gate.

## Prerequisites

User MUST upload ALL handoff documents (#1 through #8). At minimum, #4 (Brief + PRD) and #8 (Development) are required. Read the development log, known issues, and security measures from #8 before starting.

## Communication Rules (Carried from Phases 7-8)

Continue using plain language. When reporting test results:
- "All the main features work correctly" (not "47 of 47 unit tests pass")
- "I found a security issue with how passwords are stored and fixed it" (not "bcrypt rounds were set to 4, upgraded to 12")
- Only surface issues that affect the user's experience or data safety

## QA Workflow

Execute these steps in order. Do not skip any step.

### Step 1: Automated Testing

Write and run tests at three levels:

**Unit Tests:**
- Target: minimum 80% code coverage
- Test each function, utility, and service independently
- Edge cases: empty inputs, boundary values, invalid data types
- All tests must pass before proceeding

**Integration Tests:**
- Test component interactions: does the frontend correctly call the backend? Does the backend correctly query the database?
- Test data flow: input at one end, verify output at the other
- Test error paths: what happens when a dependency fails?

**End-to-End Tests:**
- Test every critical user flow identified in the PRD (#4)
- Simulate real user behavior: sign up, use core features, complete key workflows
- Test on the deployment platform (not just locally)

Report results internally. Only surface failures to the user if they require a decision.

### Step 2: Security Audit

Run through every item. No exceptions. No shortcuts.

**Authentication and Authorization:**
- [ ] Authentication implemented correctly (OAuth 2.0 / JWT / session-based)
- [ ] Authorization checks on every protected route
- [ ] Password storage uses strong hashing (bcrypt, argon2, or equivalent)
- [ ] Session management secure (expiry, rotation, invalidation)
- [ ] Failed login handling (rate limiting, lockout after attempts)

**Input and Data:**
- [ ] All user inputs validated and sanitized (server-side, not just client-side)
- [ ] Parameterized queries everywhere (no SQL injection vectors)
- [ ] File upload validation (if applicable): type checking, size limits, virus scanning
- [ ] No sensitive data in URLs or query strings
- [ ] XSS prevention: output encoding on all user-generated content

**Infrastructure:**
- [ ] HTTPS/TLS enforced on all connections
- [ ] CORS properly configured (no wildcard in production)
- [ ] Rate limiting in place on public endpoints
- [ ] Security headers set: CSP, X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security
- [ ] No secrets in codebase (scan for hardcoded keys, passwords, tokens)
- [ ] Dependencies scanned for known vulnerabilities

**Error Handling:**
- [ ] Error messages do not leak sensitive information (no stack traces, no internal paths)
- [ ] Logging captures enough for debugging without exposing PII
- [ ] Graceful degradation: the app does not crash on unexpected errors

**Data Protection (Critical for PassportCard Domain):**
- [ ] Data encryption at rest (if storing sensitive data)
- [ ] Data encryption in transit (TLS)
- [ ] PII handling compliant with identified regulations from Phase 2.5
- [ ] Audit trail for sensitive operations (if applicable)
- [ ] Data retention policy implemented (if applicable)
- [ ] Right to deletion capability (if GDPR applies)

If any check fails: fix it before proceeding. Log the fix in the self-annealing log. Never ship known vulnerabilities.

### Step 3: SDLC Compliance Verification

- [ ] Code follows consistent style and conventions throughout
- [ ] Inline documentation and comments present on all non-trivial functions
- [ ] API documentation complete (if the product exposes an API)
- [ ] README with setup instructions for future developers
- [ ] Environment separation configured (development / staging / production)
- [ ] CI/CD pipeline configured or documented for manual setup
- [ ] Logging and monitoring in place or documented for future setup
- [ ] Rollback strategy documented (how to revert if deployment causes issues)
- [ ] TECHNICAL.md updated with all decisions from Phase 8

### Step 4: Regulatory Compliance Verification

If Phase 2.5 identified regulatory requirements:
- [ ] Each requirement from Handoff Document #2.5 has been addressed
- [ ] Compliance measures are documented and traceable
- [ ] Jurisdictional requirements are met (GDPR, CCPA, Israel Bank of Israel directives, EU AI Act, etc.)

If no regulatory requirements were identified: note "No regulated data identified -- no compliance requirements at this stage."

### Step 5: User Acceptance

Present the complete working product to the user:

1. "The product is built, tested, and security-reviewed. Here is what you can do: [plain language feature summary]."
2. Let them interact with it. Give them time. Do not rush.
3. Gather feedback focused on experience: "Does this work the way you expected? Anything surprising or frustrating?"
4. Fix any user-facing issues before finalizing. Log fixes in the handoff document.

### Step 6: Deployment Preparation

- Production environment configuration verified
- Environment variables documented (what is needed, where to set them)
- Deployment runbook created: step-by-step instructions to deploy from scratch
- Monitoring and alerting configured or documented for future setup
- Domain and DNS configuration (if applicable)
- SSL certificate setup (if not automatic via hosting platform)

## Final Status Determination

After all steps, assign one of three statuses:

**PASSED:** All tests pass, all security checks clear, user accepts the product. Ready for production.

**PASSED WITH NOTES:** All critical items pass, but there are minor items to address post-launch (documented in Known Issues). The product is safe to deploy with awareness of the notes.

**REQUIRES REMEDIATION:** Critical security issues, failing tests, or user-reported problems that must be fixed before deployment. List specific items that need resolution. Return to Phase 8 for fixes, then re-run Phase 9.

## Hard Gate (FINAL GATE -- NON-NEGOTIABLE)

1. Present the complete QA results to the user with the status determination.
2. If PASSED or PASSED WITH NOTES: "The product has passed quality assurance and security review. [Status]. It is ready for production deployment."
3. If REQUIRES REMEDIATION: "The product needs fixes before it can go to production. Here is what needs attention: [list]. We need to return to Phase 8 to address these, then run QA again."
4. Wait for user acknowledgment.

## Handoff Document #9

```markdown
# SparkKit -- Handoff Document #9: Quality Assurance and Security Review
<!-- Project: [name] | Phase 9 of 9 | Version: 1.0 | Date: [date] -->
<!-- Created by PassportCard SparkKit -- for internal use only -->

## Agent Instructions
- **Project name:** [name]
- **Phase completed:** 9 -- Quality Assurance and Security Review
- **Status:** [PASSED / PASSED WITH NOTES / REQUIRES REMEDIATION]
- **Document version:** 1.0

## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [date] | Initial creation |

## Test Results

### Test Coverage
| Test Type | Tests Written | Tests Passing | Coverage |
|-----------|--------------|---------------|----------|
| Unit | [count] | [count] | [%] |
| Integration | [count] | [count] | -- |
| End-to-End | [count] | [count] | -- |

### Failed Tests (if any)
| Test | Expected | Actual | Severity | Resolution |
|------|----------|--------|----------|-----------|
| [test name] | [expected] | [actual] | [Critical/Medium/Low] | [Fixed/Deferred -- reason] |

## Security Audit Results

### Authentication and Authorization
| Check | Status | Notes |
|-------|--------|-------|
| Authentication implementation | Pass/Fail | [notes] |
| Authorization on protected routes | Pass/Fail | [notes] |
| Password storage | Pass/Fail | [notes] |
| Session management | Pass/Fail | [notes] |
| Failed login handling | Pass/Fail | [notes] |

### Input and Data
| Check | Status | Notes |
|-------|--------|-------|
| Input validation (server-side) | Pass/Fail | [notes] |
| Parameterized queries | Pass/Fail | [notes] |
| File upload validation | Pass/Fail/N-A | [notes] |
| No sensitive data in URLs | Pass/Fail | [notes] |
| XSS prevention | Pass/Fail | [notes] |

### Infrastructure
| Check | Status | Notes |
|-------|--------|-------|
| HTTPS/TLS enforced | Pass/Fail | [notes] |
| CORS configuration | Pass/Fail | [notes] |
| Rate limiting | Pass/Fail | [notes] |
| Security headers | Pass/Fail | [notes] |
| No secrets in codebase | Pass/Fail | [notes] |
| Dependency vulnerabilities | Pass/Fail | [notes] |

### Error Handling
| Check | Status | Notes |
|-------|--------|-------|
| No sensitive data in errors | Pass/Fail | [notes] |
| Logging without PII exposure | Pass/Fail | [notes] |
| Graceful degradation | Pass/Fail | [notes] |

### Data Protection
| Check | Status | Notes |
|-------|--------|-------|
| Encryption at rest | Pass/Fail/N-A | [notes] |
| Encryption in transit | Pass/Fail | [notes] |
| PII compliance | Pass/Fail/N-A | [notes] |
| Audit trail | Pass/Fail/N-A | [notes] |
| Data retention | Pass/Fail/N-A | [notes] |
| Right to deletion | Pass/Fail/N-A | [notes] |

## SDLC Compliance

| Requirement | Status | Notes |
|-------------|--------|-------|
| Code documentation | Pass/Fail | [notes] |
| API documentation | Pass/Fail/N-A | [notes] |
| README with setup instructions | Pass/Fail | [notes] |
| Environment separation | Pass/Fail | [notes] |
| CI/CD pipeline | Pass/Fail | [notes] |
| Logging and monitoring | Pass/Fail | [notes] |
| Rollback strategy | Pass/Fail | [notes] |
| TECHNICAL.md updated | Pass/Fail | [notes] |

## Regulatory Compliance

| Jurisdiction | Requirement | Status | Evidence |
|-------------|-------------|--------|----------|
| [jurisdiction] | [requirement from Phase 2.5] | Compliant/Non-compliant | [how verified] |
(or: "No regulated data identified -- no compliance requirements at this stage.")

## User Acceptance

| Feedback Item | Resolution | Status |
|--------------|-----------|--------|
| [What user reported] | [What was done] | Resolved / Open |

## Deployment Readiness

| Item | Status | Notes |
|------|--------|-------|
| Production environment | Ready / Not Ready | [notes] |
| Environment variables documented | Yes / No | [notes] |
| Deployment runbook | Complete / In Progress | [notes] |
| Monitoring | Configured / Documented | [notes] |
| SSL certificate | Configured / N-A | [notes] |
| Domain and DNS | Configured / N-A | [notes] |

## Known Issues (PASSED WITH NOTES only)

| Issue | Severity | Impact | Plan |
|-------|----------|--------|------|
| [Issue] | Low/Medium | [User impact] | [When and how to fix] |

## Remediation Required (REQUIRES REMEDIATION only)

| Item | Severity | What Needs to Happen | Return to Phase |
|------|----------|---------------------|----------------|
| [Item] | Critical | [Specific fix needed] | 8 |

## Final Recommendation

[Summary paragraph: Is this ready for production? What caveats exist? What should the team monitor after launch?]
```

## Project Completion

When Phase 9 status is PASSED or PASSED WITH NOTES:

"Your product has completed the full SparkKit pipeline -- from idea to validated concept to production-ready software.

Here is what we built: [high-level summary in 3-4 sentences covering the product, its users, key features, and the technology behind it].

All nine handoff documents together form the complete project record: strategy, research, requirements, prototype, architecture, code, and quality verification.

Congratulations -- this is ready for the world."
