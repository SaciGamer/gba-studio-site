---
sidebar_position: 4
title: Variables and conditions
description: Store state and branch visual scripts with conditions.
---

# Variables and conditions

Variables are referenced by their stable identifier from scripts. Use the variable event and the conditional events to keep state outside a single interaction.

`EVENT_VARIABLE` sets a variable, `EVENT_VARIABLE_RESET_ALL` restores each global variable to its configured initial value, and `EVENT_IF`/`EVENT_WHILE` select or repeat a branch using an operator. The compiler validates the event payload, but a reference to a deleted variable is still a project error: recreate the variable or update every event that uses its identifier.

Keep the `then` and `else` branches explicit in the visual graph. Prefer a bounded `EVENT_FOR` when the number of iterations is known; use `EVENT_BREAK` and `EVENT_CONTINUE` only inside a loop context.

## Values, formulas and defaults

Numeric event inputs can use a literal, a variable, a supported actor/player/trigger/scene property or a formula where the field offers those choices. Formula variable suggestions use `$`; choose a reference rather than relying on a display name belonging to another resource. Reusable scripts also expose their typed parameters in the caller's supported value selectors.

**Reset All Variables** uses configured initial values. It does not universally zero every number or empty every string: an initial number of `5`, string of `Player` or boolean of `true` is restored to that value. Resetting variables does not erase persistent save slots.

Deleted variables and scripts are removed from the hierarchy and event selectors, and their deleted entries are omitted when project resources are saved. References that still point to removed entries must be repaired in the affected events. Keep the variable's stable ID separate from its display name and symbol.

For persistent state, choose [Variables Save/Load or full game saves](./save-and-load). A death counter that survives a new run usually belongs in a separate variable-save slot.

## Local variables

Actors and triggers have eight numeric local slots, Local A through Local H, initially 0. In Set Variable, select the Local variables category; no creation event is needed. All event tabs of the same actor or trigger share its slots. Each instance, including prefab instances, has separate values. Locals survive waits and offscreen unloading, but reset when the scene changes or the actor is removed. Use 0 and 1 for flags. Reset Local Variables, under Variables, clears only the executing instance. Reset All Variables restores global defaults and leaves locals unchanged. Variable save/load events operate on global variables only. Pass a local as a reusable script parameter when needed.
