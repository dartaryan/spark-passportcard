---
name: spark-phase-6-deploy
description: Phase 6 of the SparkKit pipeline. Walks the user through deploying their HTML prototype as a live website using GitHub Pages. Simple, step-by-step, no technical jargon. Produces Handoff Document #6. Invoke with /spark-phase-6. Requires approved prototype from Phase 5.
argument_hint: Begin Phase 6 Deployment - get the prototype live on the internet
---

# Phase 6: Deployment Guidance

## Objective

Walk the user through deploying their HTML prototype as a live website. The prototype goes from a local file to a URL anyone can visit.

## Prerequisites

User MUST upload Handoff Document #5 (minimum) confirming an approved prototype exists. The HTML prototype file should also be available. If missing, stop and ask for it.

## Instructions to Present

Walk the user through deployment step by step. Use plain language. No jargon.

Present the following:

---

**Let us get your prototype live on the internet. Here is how to deploy it for free using GitHub Pages:**

**Step 1: Create a GitHub Account** (skip if you have one)
Go to https://github.com and sign up. Free account is sufficient.

**Step 2: Create a New Repository**
- Click the "+" button in the top right, then "New repository"
- Name it: `[product-name]-prototype`
- Set visibility to **Public** (required for free GitHub Pages)
- Click "Create repository"

**Step 3: Upload Your HTML File**
- Click "Add file," then "Upload files"
- Upload your HTML file
- **Important:** If your file is not already named `index.html`, rename it to `index.html` before uploading
- Click "Commit changes"

**Step 4: Enable GitHub Pages**
- Go to the repository Settings tab
- In the left sidebar, click "Pages"
- Under "Source," select **Deploy from a branch**
- Select the **main** branch and **/ (root)** folder
- Click "Save"

**Step 5: Access Your Live Site**
- Wait 2-3 minutes for deployment
- Your site will be live at: `https://[your-username].github.io/[repository-name]/`

---

If the user wants a custom domain, provide additional instructions:
- Buy a domain from any registrar (Namecheap, Google Domains, etc.)
- In the repository Settings, Pages section, enter the custom domain
- Add a CNAME DNS record pointing to `[username].github.io`
- Wait for DNS propagation (can take up to 24 hours, usually faster)

## Verification

After the user reports the site is live:
1. Ask them to share the URL
2. Confirm it loads correctly
3. Check that interactions work as expected in the deployed version
4. Note: some CDN-dependent features may behave differently in deployment. If issues arise, troubleshoot CDN links and HTTPS mixed content.

## Scope and Authority Checkpoint

Before proceeding to Phase 7, activate the following checkpoint:

"Your prototype is now live and accessible. Phases 7-9 move from strategy and prototyping into **software development**: real code, real architecture, production-grade security.

Before we continue, consider:
- **Do you have development resources?** Phases 7-9 assume access to Claude Code, Cursor, or similar AI coding tools.
- **Is this the right time?** Building production software is a significant commitment. The Brief + PRD and prototype may be sufficient for stakeholder buy-in, funding decisions, or team handoff.
- **Who will maintain it?** Production software needs ongoing maintenance, security updates, and bug fixes.

If you want to proceed: download all handoff documents, start a new session, and invoke /spark-phase-7.
If you want to pause here: you have a complete strategic package (Brief + PRD + working prototype + live URL) ready for stakeholder presentation or development team handoff."

Wait for the user's decision. Do not push toward development phases. The user decides.

## Hard Gate (DO NOT PROCEED WITHOUT THIS)

DO NOT advance to Phase 7 without:
1. Confirmed live deployment (or explicit decision to skip deployment)
2. User explicitly choosing to continue to development phases
3. User acknowledging the scope shift from strategy to software development

This gate is non-negotiable.

## Handoff Document #6

After deployment is confirmed (or user explicitly chooses to skip deployment and proceed):

```markdown
# SparkKit -- Handoff Document #6: Deployment Guidance
<!-- Project: [name] | Phase 6 of 9 | Version: 1.0 | Date: [date] -->
<!-- Created by PassportCard SparkKit -- for internal use only -->

## Agent Instructions
- **Project name:** [name]
- **Phase completed:** 6 -- Deployment Guidance
- **Next phase:** 7 -- Development Environment Setup
- **Document version:** 1.0
- **Session summary:** [1-2 sentences: deployment status, user decision on continuing to dev phases]
- **Key decisions:**
  - Deployment status: [Deployed / Skipped]
  - Live URL: [URL or "N/A"]
  - Custom domain: [Yes -- domain / No]
  - Proceed to development phases: [Yes / No -- pausing here]
- **Scope and Authority Checkpoint:** [User acknowledged scope shift: Yes/No]
- **Previous handoffs:** Builds on Documents #1, #2, #2.5, #3, #4, #5

## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [date] | Initial creation |

## Deployment Details

### Repository
- **GitHub URL:** [repository URL]
- **Live URL:** [GitHub Pages URL]
- **Custom domain:** [if configured]
- **Deployment date:** [date]

### Verification
- Site loads correctly: [Yes/No]
- Interactions work in deployed version: [Yes/No]
- Issues found: [list or "None"]

### Notes for Development Phases
[Any observations from deployment that are relevant to production development: CDN behavior, performance, mobile rendering, etc.]
```

## After Completion

If user chooses to continue:
"Download all handoff documents. When you are ready for Phase 7 (Development Environment Setup), open a new conversation, upload all handoff documents, and invoke /spark-phase-7."

If user chooses to pause:
"You have a complete strategic package: Brief + PRD, working prototype, and a live URL. These documents are structured for handoff to a development team or for stakeholder presentation. If you decide to continue to development phases later, upload all handoff documents and invoke /spark-phase-7."
