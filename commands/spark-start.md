---
description: SparkKit main entry point. Runs pre-flight checks then displays a contextual launcher menu with 6 options — new project, resume, express lane, inbox, status, and setup.
---

# /spark-start

SparkKit's main entry point. Runs silent pre-flight checks, then displays a contextual launcher menu.

## CRITICAL: BiDi Rendering Rule

Hebrew and English text MUST NEVER appear on the same line. This is a hard rendering constraint in Claude's text output.

When building the menu output:
- A line containing ANY English characters (command names, folder names, technical terms) must contain ZERO Hebrew characters
- A line containing ANY Hebrew characters must contain ZERO English characters
- Numbers and Unicode symbols (❯ ├ └ ━ ● ✔ ⚠) are direction-neutral and safe on any line
- When referencing a project folder name (English), put it on its own line. Put the Hebrew phase/status info on the NEXT line below it

Apply this rule to ALL text output in this command, not just the menu.

## Pre-Flight Checks (Silent)

Before displaying anything, check the workspace state:

### Check 1: Setup Status
- Look for `.spark/profile.md` in the workspace
- If it exists AND contains user data (not just the placeholder comment): setup is COMPLETE. Read the user's name from it.
- If it does not exist OR only has the placeholder: setup is INCOMPLETE

### Check 2: Active Projects
- Scan `projects/` for subdirectories
- For each project folder found:
  - Read its `README.md` to get project name and status
  - Look for handoff documents (files containing "Handoff Document" or phase references)
  - Determine the highest completed phase number (0-9)
  - Check if the project appears stalled: a handoff document exists but is older than 14 days and the next phase was never started
- Also scan `archive/` to count completed projects (for the Status option subtitle)

### Check 3: Inbox
- Count files in `inbox/` (exclude index.md if present)
- Note the count for the menu subtitle

### Check 4: User Language
- If profile exists, read the user's language preference
- Default to Hebrew if not set

## Menu Display

After pre-flight checks complete, display the menu using this EXACT visual structure.

### If user language is Hebrew (default):

**Returning user with active projects:**

```
שלום [name], ברוך הבא חזרה
━━━━━━━━━━━━━━━━━━━━━━━━━━━

❯ 1
  פרויקט חדש
  התחל את כל עשרת השלבים מאפס

❯ 2
  המשך פרויקט
  [for each active project, on separate lines:]
  ├ [project-folder-name]
       [Hebrew phase info, e.g.: שלב 3 — תקוע]
  └ [project-folder-name]
       [Hebrew phase info, e.g.: שלב 1]

❯ 3
  בדיקה מהירה
  בדיקת כדאיות בסשן אחד

❯ 4
  תיבת דואר
  [if files:] X קבצים ממתינים לעיבוד
  [if empty:] ריקה

❯ 5
  סטטוס
  סקירת כל הפרויקטים וההתקדמות

❯ 6
  הגדרות
  [if setup complete:] ✔ המערכת מוגדרת ומוכנה
  [if setup incomplete:] ⚠ נדרשת הגדרה ראשונית

━━━━━━━━━━━━━━━━━━━━━━━━━━━

מה תרצה לעשות?
הקלד מספר או תאר מה אתה צריך
```

**New user (setup not done):**

```
ברוכים הבאים
SparkKit

⚠ המערכת לא מוגדרת עדיין
מומלץ להתחיל עם אפשרות 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━

❯ 1
  פרויקט חדש

❯ 2
  המשך פרויקט
  אין פרויקטים פתוחים

❯ 3
  בדיקה מהירה

❯ 4
  תיבת דואר
  ריקה

❯ 5
  סטטוס

❯ 6
  הגדרות
  ⚠ נדרשת הגדרה ראשונית

━━━━━━━━━━━━━━━━━━━━━━━━━━━

מה תרצה לעשות?
הקלד מספר או תאר מה אתה צריך
```

### If user language is English:

**Returning user:**

```
Hey [name], welcome back
━━━━━━━━━━━━━━━━━━━━━━━━━━━

❯ 1
  New Project
  Full 10-phase pipeline from scratch

❯ 2
  Resume Project
  ├ [project-folder-name]
       Phase 3 — stalled
  └ [project-folder-name]
       Phase 1

❯ 3
  Express Lane
  Single-session viability check

❯ 4
  Inbox
  [if files:] X files waiting
  [if empty:] Empty

❯ 5
  Status
  Overview of all projects and progress

❯ 6
  Setup
  [if complete:] ✔ Configured
  [if incomplete:] ⚠ Not initialized — run this first

━━━━━━━━━━━━━━━━━━━━━━━━━━━

What would you like to do?
Type a number or describe what you need
```

## Menu Rendering Rules

1. The menu ALWAYS shows all 6 options. Never hide or skip options based on state.
2. Dynamic context (project list, inbox count, stalled warnings) appears in subtitle lines.
3. If there are no active projects, option 2 subtitle says "אין פרויקטים פתוחים" (Hebrew) or "No active projects" (English).
4. If a project appears stalled (handoff older than 14 days, next phase not started), add "תקוע" or "stalled" to its status line.
5. The ━ separator line should be approximately 27 characters wide.
6. Project folder names (always English) go on their own line. Phase info (in the user's language) goes on the next line below, indented.
7. Use ├ for all projects except the last one. Use └ for the last (or only) project.
8. When there are zero projects, skip the tree characters entirely.

## Routing Logic

After the user responds (by number, description, or natural language):

| Selection | Route To | Notes |
|-----------|----------|-------|
| 1 / "new project" / "פרויקט חדש" | Activate `spark-core` skill, then `spark-brand` skill, then run `spark-phase-0-gate` skill. After Phase 0 completes, proceed to Phase 1. | Phase 0 gate collects: language, format, audience, data classification, session type |
| 2 / "resume" / "המשך" | Run `/spark:spark-resume` | If user specifies which project, pass that context |
| 3 / "express" / "בדיקה מהירה" | Activate `spark-core` skill, then `spark-brand` skill, then run `spark-phase-0-gate` skill. After Phase 0, route to `/spark:spark-express`. | Phase 0 gate is required before Express Lane |
| 4 / "inbox" / "תיבת דואר" | Run the inbox processing sequence as defined in the Spark agent (CLAUDE.md) | Convert files, index, ask user what to do |
| 5 / "status" / "סטטוס" | Run `/spark:spark-status` | |
| 6 / "setup" / "הגדרות" | Run `/spark:spark-setup` | |
| Free text describing a need | Interpret intent and route to the most appropriate option. Confirm before routing. | e.g. "I want to check if my CRM idea is viable" → route to Express Lane |

## Natural Language Routing

If the user types something that is not a number or known keyword, interpret their intent:

- Mentions a specific existing project name → Route to Resume with that project
- Describes a new idea or asks to start something → Route to New Project
- Asks about progress or "where am I" → Route to Status
- Mentions files they want to process → Route to Inbox
- Asks a quick question not related to SparkKit workflow → Answer directly without forcing into the menu

Always confirm before routing from natural language: "נשמע כמו [interpreted intent]. נמשיך?" or "Sounds like [interpreted intent]. Shall we proceed?"

## Edge Cases

- If the user types "0" or something outside 1-6: "בחר מספר בין 1 ל-6 או תאר מה אתה צריך"
- If workspace has no CLAUDE.md: This command is running inside the plugin without a workspace. Display a message: "SparkKit needs a workspace folder. Run /spark:spark-setup in an empty folder first."
- If profile exists but name is empty: Use generic greeting ("שלום" / "Hey there")
