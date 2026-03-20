# SparkKit Pre-Flight Checklist

**READ THIS BEFORE EVERY CHANGE TO THE SPARK REPO.**

---

## Version String Locations (5 files — update ALL together)

| # | File | Line | Field |
|---|------|------|-------|
| 1 | `package.json` | 3 | `"version"` |
| 2 | `.claude-plugin/plugin.json` | 3 | `"version"` |
| 3 | `.claude-plugin/marketplace.json` | 13 | `"version"` |
| 4 | `agents/spark.md` | ~402 | Footer: `*Spark vX.Y.Z - ...` |
| 5 | `changelog/spark-changelog.md` | top | Add new `## vX.Y.Z (YYYY-MM-DD)` header |

**Do NOT touch** `package-lock.json` — it tracks dependency versions, not the project version.

---

## Version Bump Rules

- **Major** (4.0.0): Architecture change, breaking plugin structure
- **Minor** (3.2.0): New skill, command, or significant feature
- **Patch** (3.1.1): Bugfix, typo, small correction

---

## Changelog Format

```markdown
## vX.Y.Z (YYYY-MM-DD)
- Category: Description
```

Categories: `Rewrite`, `Added`, `Fix`, `Architecture`, `Cleanup`, `Removed`

---

## Content Inventory (update counts if adding/removing)

| Type | Count | Location |
|------|-------|----------|
| Skills | 20 | `skills/` (10 phases + 5 audience + 5 utilities) |
| Commands | 6 | `commands/` |
| References | 6 | `references/` |
| Agents | 1 | `agents/spark.md` |
| Templates | 6 | `assets/` (1 PPTX + 5 DOCX) |
| Image assets | ~49 | `assets/images/` (logos, cards, icons, lifestyle, generated) |
| Scripts | 2 | `scripts/` (generate-pptx.js, generate-docx.js) |

---

## Critical Cross-References (check if moving/renaming files)

### `skills/spark-brand/SKILL.md` (lines 68-135) references:
- `references/passportcard-brand-tokens.md`
- `references/passportcard-brand.md`
- All template paths in `assets/`
- All image subdirectories in `assets/images/`

### `.claude-plugin/plugin.json` declares:
- Explicit component paths: `"commands": "./commands/"`, `"agents": "./agents/"`, `"skills": "./skills/"`
- MCP servers: `"mcpServers": "./.mcp.json"` (contains `gemini-images`, `notebooklm-mcp`)

### `commands/spark-start.md` routes to:
- `/spark:spark-setup`, `/spark:spark-express`, `/spark:spark-resume`, `/spark:spark-status`
- Skills: `spark-core`, `spark-brand`, `spark-phase-0-gate`

---

## BiDi Rendering Rule

Hebrew and English text MUST NEVER share the same line in any command output.
This is documented in `commands/spark-start.md` — apply it to any new command that mixes languages.

---

## Git Workflow

- Single branch: `main`
- Commit directly to main (no PRs)
- Commit message format: `vX.Y.Z: Description` for releases, `fix: Description` for patches
- Remote: `origin` → `https://github.com/dartaryan/spark-passportcard.git`

---

## Pre-Change Checklist

Before committing ANY change:

- [ ] If version bump needed: updated all 5 version locations?
- [ ] If version bump: added changelog entry?
- [ ] If adding/removing skills or commands: updated `README.md` "What's Inside"?
- [ ] If moving/renaming files: checked `spark-brand/SKILL.md` cross-references?
- [ ] If modifying assets: updated `catalog.md` and `powerpoint-ready-inventory.md`?
- [ ] If adding a new command with Hebrew output: applied BiDi rule?

---

## Post-Change Checklist

After committing:

- [ ] `git push` to origin/main
- [ ] Verify no files with `3.x.x` (old version) remain: `grep -r "old.version" --include="*.json" --include="*.md" . | grep -v node_modules`
