# SparkKit Changelog

## v3.4.0 — 2026-03-20 — Command Discovery Fix

### Fixed
- Added YAML frontmatter with `description` field to all 6 command files (`spark-start.md`, `spark-status.md`, `spark-resume.md`, `spark-setup.md`, `spark-express.md`, `spark-next.md`) — Claude Code's command parser requires frontmatter to register commands; without it, commands were silently skipped during discovery
- Extracted inline `mcpServers` from `plugin.json` into standalone `.mcp.json` at plugin root — inline mcpServers causes Zod schema validator to strip the object during manifest parsing, which can corrupt the parsing pipeline (ref: GitHub issue #16143)

## v3.3.1 — 2026-03-20 — Structure Revert Fix

### Root Cause Found
Git archaeology revealed v3.0.0 (987aac3) was the last working version. Command discovery broke because:
1. YAML frontmatter was added to command files — v3.0.0 had none
2. `"commands": "./commands/"` was added to plugin.json — v3.0.0 relied on auto-discovery
3. `mcpServers` was removed from plugin.json — v3.0.0 had it inline
4. `settings.json` was deleted — v3.0.0 had `{"agent":"spark"}`
5. Skill filenames had git case mismatch (skill.md in index, SKILL.md on disk)

### Fix
- Reverted plugin.json to v3.0.0 structural pattern (no commands key, inline mcpServers)
- Stripped frontmatter from all 6 command files
- Fixed git index for SKILL.md uppercase tracking
- Restored settings.json
- Removed orphaned .mcp.json

## v3.3.0 (2026-03-20)
- Fix: Removed explicit `agents` and `skills` path declarations from plugin.json — commands were not being discovered because Claude Code skipped auto-discovery when some paths were declared explicitly
- Fix: Renamed all `skill.md` to `SKILL.md` in 20 skill folders (case-sensitive spec requirement)
- Fix: Added YAML frontmatter to 4 command files that were missing it (spark-express, spark-resume, spark-status, spark-next)
- Architecture: Extracted MCP server config from inline plugin.json to standard `.mcp.json` file at plugin root
- Cleanup: Slimmed `marketplace.json` to avoid duplicating metadata from plugin.json

## v3.2.2 (2026-03-20)
- Fix: Removed `"commands": "./commands/"` from plugin.json (wrong relative path broke command discovery)
- Fix: Removed `.claude/` folder that conflicted with plugin detection
- Cleanup: Moved PRE-FLIGHT.md to docs/

## v3.2.1 (2026-03-20)
- Fix: Removed `.claude/` folder that conflicted with plugin command discovery
- Fix: Added `"commands": "./commands/"` declaration to plugin.json
- Fix: Corrected command namespace from `/sparkkit:` to `/spark:` in spark-start routing table
- Cleanup: Moved PRE-FLIGHT.md from `.claude/` to `docs/`

## v3.1.0 (2026-03-20)
- Rewrite: spark-start is now a smart launcher menu with contextual routing
- Added: Pre-flight checks (setup status, active projects, inbox count, language)
- Added: 6-option menu with dynamic subtitles and project status
- Added: Natural language routing with intent confirmation
- Added: BiDi rendering rule for Hebrew/English separation
- Added: Stalled project detection (14-day threshold)

## v3.0.0 (2026-03-20)
- Architecture: Agent returns to plugin (agents/spark.md + settings.json)
- Architecture: MCP servers declared in plugin.json (Gemini image generation)
- Cleanup: Removed 3 redundant PPTX templates (saved ~115 MB)
- Cleanup: Promoted FRESH template as official passportcard-template.pptx
- Cleanup: Moved dev artifacts to _archive/
- Cleanup: Moved landing page to docs/
- Fix: Corrected broken template paths in spark-brand skill
- Fix: Fixed color contradictions (#FAFAFA→#F8F6F3, #E10019→#E10514, #F8F4E0→#F5F0EB)
- Added: Image library reference in brand skill
- Added: DOCX template type references in brand skill

## 2026-03-15 | v2.0.0
- Workspace-based architecture: Spark agent moved from plugin to workspace CLAUDE.md
- Removed agents/spark.md and settings.json from plugin
- Added workspace-setup/ with CLAUDE.md placeholder and bilingual setup guide
- Added assets/templates/ and assets/images/ folder structure for brand assets
- Updated spark-core skill references for new architecture
- Plugin is now a pure toolkit (skills, commands, references, templates, assets)

## 2026-03-15 | v1.4.0
- Added brand token reference file (references/passportcard-brand-tokens.md) with complete design system
- Added PassportCard PPTX template with 10 slide layouts (title, section divider, content text, two-column, icon grid, big number, comparison table, timeline, quote, closing)
- Added PassportCard DOCX template with branded cover page, headers, footers, heading styles, and table formatting
- Updated spark-brand skill with template references and Egg Principle for user engagement
- Source: Brand Identity 2, 3 IPMI, 5 Updated

## 2026-03-15 | v1.3.0
- Spark agent merged into plugin as main thread (`agents/spark.md` + `settings.json`)
- Interview enforcement strengthened with minimum standards checklist in Phase 1
- No-execution guards added to all phase skills (0 through 9)
- spark-core refactored: personality moved to agent, skill becomes pipeline rulebook
- Phase 0 welcome message updated with save reminder and interview framing

## 2026-03-12 | v1.1.0
- Removed skill invocation lock: all phase skills can now be auto-invoked by the Spark agent
- Fixed Phase 4 handoff wrapper for consistency with other phases
- Changed compliance escalation contacts from named individuals to role-based references
- Added plugin marketplace manifests for Claude Desktop distribution
- Added user-facing README with installation instructions
