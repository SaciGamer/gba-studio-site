---
sidebar_position: 4
title: Input and runtime
description: Understand input polling and generated script execution.
---

# Input and runtime

Generated scripts are updated by the runtime and rendered by the scene loop. Instant commands advance the script in the current update until the instruction budget is reached; blocking commands retain their state until completion. The generated runtime uses a budget of 16 instructions per script update to prevent an accidental cycle from monopolizing a frame.

Button attachment and held-button tests are represented by `EVENT_WAIT_FOR_BUTTON` and `EVENT_IF_BUTTON_HELD`. Dialogue, fades, scene changes and script calls are blocking in the catalog; actor, layer, audio and variable changes follow their own completion rules. An animated movement can block even when the same event supports instant positioning.

When several scripts are active, keep each script's state independent and avoid relying on update order unless the resource explicitly establishes it. Test input, dialogue confirmation and scene transitions in the ROM, not only in the editor preview.

## Logical actions and physical groups

Input Map binds logical actions independently for Top Down, Platformer, Adventure, Point Click and Logo. Input Groups instead defines project-wide sets of physical buttons. Disabling a group can therefore block a mapped dialogue confirmation or menu action. All always includes every physical button; Gameplay, Menu and Interaction are editable. See [Controls and input groups](../guides/controls).

On Update scripts, button attachments and nested calls retain their own cooperative state. A Wait in an actor's update script delays that script, not the whole game. Disabling a trigger prevents new activations; already running trigger scripts can finish. Prefab definitions, placed instance overrides and detached event lists remain distinct owners.
