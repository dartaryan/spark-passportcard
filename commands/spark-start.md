# /spark-start

Entry point for the SparkKit pipeline. Routes to Phase 0 gate.

## Behavior

1. Activate the `spark-core` skill to load pipeline rules.
2. Activate the `spark-brand` skill to enforce brand identity.
3. Run `spark-phase-0-gate` to collect session context.
4. After Phase 0 completes, route based on session type:
   - **Full Pipeline** -> Proceed to `/spark-phase-1`
   - **Express Lane** -> Proceed to `/spark-express`
   - **Resume Project** -> Read uploaded handoff documents, identify current phase, confirm with user, then route to the appropriate phase command

## Usage

User types: `/spark-start`

SparkKit responds with the Phase 0 gate opening message and collects the six inputs.
