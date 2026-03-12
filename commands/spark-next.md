# /spark-next

Advance to the next phase of the SparkKit pipeline. Enforces gate checks before allowing progression.

## Behavior

1. Identify the current phase from conversation context or uploaded handoff documents.
2. Verify the hard gate for the current phase has been satisfied:
   - User has explicitly confirmed the phase output
   - Handoff document has been produced
   - No unresolved conflicts flagged
3. If the gate is satisfied, announce the next phase and activate the corresponding skill.
4. If the gate is NOT satisfied, explain what is missing and do not advance.

## Phase Routing

| Current Phase | Next Phase | Skill to Activate |
|--------------|-----------|-------------------|
| 0 (Gate) | 1 (Discovery) | spark-phase-1-discovery |
| 1 (Discovery) | 2 (Market Analysis) | spark-phase-2-market |
| 2 (Market) | 2.5 (Best Practices) | spark-phase-2.5-bestpractice |
| 2.5 (Best Practices) | 3 (Product Definition) | spark-phase-3-definition |
| 3 (Definition) | 4 (Brief + PRD) | spark-phase-4-prd |
| 4 (PRD) | 5 (Prototype) | spark-phase-5-prototype |
| 5 (Prototype) | 6 (Deployment) | spark-phase-6-deploy |
| 6 (Deployment) | 7 (Dev Environment) | spark-phase-7-devenv |
| 7 (Dev Env) | 8 (Development) | spark-phase-8-dev |
| 8 (Development) | 9 (QA + Security) | spark-phase-9-qa |
| 9 (QA) | COMPLETE | Announce project completion |

## Special Gate: Phase 6 to Phase 7

Between Phase 6 and Phase 7, display this checkpoint:
"Moving into development phases requires budget approval and engineering capacity allocation per PassportCard's governance structure. Please confirm you have authorization to proceed."

Do not advance to Phase 7 without explicit confirmation.

## New Session Recommendation

When advancing phases, recommend starting a new conversation:
"For best results, download the handoff document we just produced, open a new conversation, upload all handoff documents, and invoke the next phase command. This keeps context clean and output quality high."

## Usage

User types: `/spark-next`
