---
sidebar_position: 5
title: Limits and compatibility
description: Understand the current event contract and GBA graphics, audio, save and memory budgets.
---

# Limits and compatibility

Use the current [event reference](./events), asset controls and compiler diagnostics for exact payload ranges. The application uses event schema `version: 1`. A catalog code can be an internal supported command rather than a choice offered for every scene type; use the event picker to see commands available in the current context.

| Resource | Budget or behavior |
| --- | --- |
| Screen | 240 x 160 pixels. Event coordinate tiles are 16 pixels. |
| Hardware sprites | 128 OAM entries, shared by actors, composed frames, UI and dialogue. |
| Background layers | Up to four numbered layers; permitted formats and combinations depend on the scene. |
| Palette banks | Indexed graphics and 16-color palette banks must fit the target assets and VRAM budgets. |
| Sound effects | Four simultaneous playback channels; higher priority numbers take precedence between effects. |
| Text | 255 UTF-8 bytes after variable expansion. `${...}` metadata is excluded; the resulting value counts. |
| Save storage | Eight shared 4 KiB slots for full game or variable snapshots. Saving replaces a slot. |
| Reusable script inputs | At most 20 typed parameters per script. |
| Script update | 16 instructions per update, with cooperative waits and blocking events. |
| RAM | 32 KiB IWRAM and 256 KiB EWRAM, shared with stack, runtime state and dynamic allocations. |

The generator sizes actor and runtime tables from the project rather than using a universal 16-actor limit. A single composed actor may require several hardware sprites. Keep enough sprite, tile and palette capacity for text and effects that appear during play.

The ELF memory check reserves at least 8 KiB after IWRAM static data and 32 KiB after EWRAM static data. These static tails are not measurements of peak stack or heap use. Use the [runtime monitor](../build-and-release/runtime-monitor), build logs and a ROM run to evaluate the actual game.

Imported tracker modules and editable project compositions can expose different controls. Desktop audio preview and the GBA build path can also support different effects. Follow asset warnings and test the compiled result. See [Music editor](../guides/music-editor), [Sound effects](../guides/sound-effects) and [Save and load](../guides/save-and-load).
