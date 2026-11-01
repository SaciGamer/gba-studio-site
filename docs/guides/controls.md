---
sidebar_position: 17
title: Controls and input groups
description: Map controls separately for each scene type and choose the physical buttons blocked by each input group.
---

# Controls and input groups

Open **Settings > Controls**. The left column configures **Input Map**; the adjacent **Input Groups** table configures physical button groups. These two settings serve different purposes.

## Input Map by scene type

Choose **Top Down**, **Platformer**, **Adventure**, **Point Click** or **Logo** above the mapping fields. Each type has independent mappings, applied automatically when the game enters a scene of that type. Changing Confirm in Platformer does not change Confirm in Top Down.

The visible action names are translated labels. Their script identifiers are `move_left`, `move_right`, `move_up`, `move_down`, `confirm`, `cancel`, `start`, `select`, `left_button` and `right_button`. Platformer also exposes `jump`. Confirm and Cancel remain useful in other scene types because dialogue and menus use them too.

Default movement uses the directional pad; Confirm uses A; Cancel and Jump use B; Start, Select, L and R use their corresponding physical buttons. An action can have several buttons, but at least one must remain selected. Standard actions are fixed; the editor does not offer custom action creation.

## Input groups

Rows are physical GBA buttons; columns are **Gameplay**, **Menu**, **Interaction** and **All**. Check a cell to include that button in the group. Gameplay, Menu and Interaction are editable. All always includes every button and cannot be edited.

| Group | Default buttons |
| --- | --- |
| Gameplay | A, B, L, R and the directional pad |
| Menu | A, B, Start, Select and the directional pad |
| Interaction | A |
| All | Every physical button |

Groups overlap. Their definitions are project-wide and independent of the scene-type Input Map. **Disable Input** blocks the physical buttons in the selected group; **Enable Input** releases that group's block. A button remains blocked if another disabled group also contains it. These are button groups, not categories of actors or event scripts.

Disabling A also prevents dialogue confirmation bound to A. Display Dialogue already prevents normal player movement while it is active, so do not block its confirmation input as a way to freeze movement.

For button-attached scripts, held tests and waiting for input, see [Triggers and input](./triggers-and-input).
