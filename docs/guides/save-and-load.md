---
sidebar_position: 15
title: Save and load game data
description: Save full game progress or selected variables and run the matching save/load actions.
---

# Save and load game data

Choose the events in **Save Data** according to what should survive a restart.

| Event | What it does | Scene and actor state |
| --- | --- | --- |
| **Game Data Save** (`EVENT_SAVE_WRITE`) | Saves global variables and the current scene, player, actors and camera state. | Captured in the slot. |
| **Game Data Load** (`EVENT_SAVE_LOAD`) | Restores a full game snapshot. | Restored before its On Load actions. |
| **Variables Save** (`EVENT_VARIABLES_SAVE`) | Saves one, several or all global variables. | Unchanged. |
| **Variables Load** (`EVENT_VARIABLES_LOAD`) | Restores the selected saved values, or all saved global values. | Unchanged. |
| **Game Data Remove** (`EVENT_SAVE_REMOVE`) | Clears the selected slot, including a variable-only snapshot. | Unchanged. |

## Choose a slot

The eight slots shown as **Slot 1** through **Slot 8** are shared by full game saves and variable saves. Serialized slot numbers are `0` through `7`. Saving replaces the contents of that slot; it does not merge with an earlier snapshot. Each slot has a 4 KiB budget for its header and data. An oversized save fails rather than writing a truncated snapshot.

Game Data events start at Slot 1. Variable events start at Slot 8. Use different slots when a persistent counter must be independent of a checkpoint. A variable-only snapshot cannot be restored with Game Data Load. Variables Load can read selected variables from either a variable snapshot or a full game snapshot.

## Save a checkpoint

1. Apply variable, player and actor changes that belong in the checkpoint.
2. Add **Game Data Save** and choose the slot.
3. Put success actions, such as a saved message, inside its **On Save** section.
4. Add **Game Data Load** where the player chooses Continue, using the same slot.
5. Put actions required after restoring the game inside that Load event's **On Load** section, such as rebuilding the HUD or starting the scene music.

**On Save belongs to Game Data Save; On Load belongs to Game Data Load.** They run automatically after the corresponding successful operation. The selected editor tab only changes which actions are visible while editing. It does not choose a runtime branch, and no separate On Load event is required. After those actions finish, execution continues after their parent event. They may contain waits and other supported events.

The snapshot is written before On Save executes. A variable changed in On Save is therefore not part of the snapshot just written. A failed save or load skips its success actions. Game Data Load restores the saved scene instead of rerunning that scene's normal initialization sequence; use its On Load actions for the setup needed after restoration.

## Save a death counter without returning to Game Over

Create a global Number variable named `deaths`, with initial value `0`.

At Game Over:

1. Set `deaths` to its current value plus `1`.
2. Run **Variables Save**, choose Slot 8, leave **All global variables** off and select only `deaths`.
3. Change to the Title scene.

When the game starts or the Title scene needs to refresh the saved counter:

1. Run **Variables Load** with the same slot and `deaths` selection.
2. Run **Set UI Text** with `Deaths: ${deaths}`.

Variables Load leaves the current scene and unselected variables alone. If no compatible data exists, values are not changed. Keep meaningful initial defaults for a first run. If a full checkpoint load would restore an older death count, load the persistent counter again in Game Data Load's On Load actions before rebuilding the HUD.

## Select variables

Turn **All global variables** on for a global snapshot, or leave it off and use the multi-selection for specific variables. Script parameters are not global save targets. When loading all variables, globals absent from the stored snapshot keep their current values; this operation is not Reset All Variables. Numbers, booleans and strings are supported. Invalid selections, incompatible types and slot-capacity failures are reported rather than silently resetting unrelated values.

Test saving, loading, deleting and restarting the ROM, not only the editor preview. See [Variables and conditions](./variables-and-conditions), [UI and fonts](./ui-and-fonts) and [Event reference](../reference/events).
