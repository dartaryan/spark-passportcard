---
description: Scaffold a complete Spark workspace in the current directory. Creates .spark/, inbox/, projects/, and archive/ folders with system files. Optional — Spark auto-creates on first run.
---

# /spark:spark-setup

## What This Command Does

Scaffolds a complete Spark workspace in the current directory. This is optional - Spark auto-creates the workspace structure on first run. Use this command if you want to set things up manually before your first session.

## Pre-Flight Check

Before creating anything:

1. Check if `.spark/` already exists in the current directory
2. If it exists: ask "A Spark workspace already exists here. Do you want to reset it? This will overwrite system files but keep your projects and inbox intact." Wait for confirmation.
3. If it doesn't exist: proceed.

## Step 1: Create Folder Structure

Create the following directories (skip any that already exist):

```
.spark/
inbox/
projects/
archive/
```

## Step 2: Create System Files

Create these files only if they don't already exist:

**`.spark/profile.md`:**
```markdown
# Spark User Profile
<!-- Spark will fill this in during your first session -->
```

**`.spark/session-log.md`:**
```markdown
# Spark Session Log
```

**`.spark/preferences.md`:**
```markdown
# Spark Preferences (auto-updated)
last_updated: [today's date]
```

## Step 3: Confirm

Tell the user:

```
Workspace ready! Here's what was created:

  .spark/            <- System folder (managed by Spark)
  inbox/             <- Drop files here for Spark to process
  projects/          <- Your project workspaces
  archive/           <- Completed projects

Next steps:
1. Start a new conversation in this folder
2. Spark will greet you and run a quick profile interview
3. Just describe what you want to build - Spark guides the rest

Optional integrations:
- AI image generation: set GEMINI_API_KEY environment variable
- NotebookLM: pip install notebooklm-mcp-cli && nlm login
- UI UX Pro Max: /plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
```

## Important Rules

- NEVER overwrite .spark/profile.md if it already has user data
- NEVER overwrite anything in projects/ or archive/
- NEVER overwrite inbox/ contents
- If resetting: only overwrite session-log.md and preferences.md
- The workspace folder name doesn't matter - user can call it anything
