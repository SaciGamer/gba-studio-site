---
sidebar_position: 18
title: Movement and physics
description: Configure player and actor physics using focused events and test movement with collisions.
---

# Movement and physics

Use the events under **Actor > Physics** to change a particular setting without replacing unrelated settings.

| Event | Target and effect |
| --- | --- |
| **Set Gravity** | Player or actor; changes gravity. |
| **Set Jump Speed** | Player; changes jump impulse speed. |
| **Set Maximum Fall Speed** | Player or actor; caps downward speed. |
| **Set Air Jumps** | Player; `0` allows grounded/ladder jumps, a positive value adds that many air jumps, and `-1` permits unlimited air jumps. |
| **Set Diagonal Movement** | Player; enables or disables simultaneous horizontal/vertical input movement. |
| **Reset Physics** | Player or actor; restores the target's physics defaults. |
| **Stop Physics** | Stops the target's active physics behavior. |
| **Apply Vertical Impulse** | Applies a vertical impulse using the selected target and event settings. |

Player defaults are gravity `0.25`, jump speed `5`, maximum fall speed `6`, no air jumps and diagonal movement enabled. Choose the target explicitly; player-only settings do not apply to an NPC simply because it is selected in the scene.

Platformer movement uses gravity, grounded checks, platforms and ladders. Configure the collision box and scene collision geometry before tuning jumps. Scripted Move Actor and Move To events also expose movement and collision settings; inspect their target, destination, speed and available path options instead of assuming they use the player's input bindings.

Use the X/Y unit selectors for events that expose coordinates: a tile is 16 pixels, and each axis has its own unit. Verify slopes, platform edges, ladders, air jumps and scene transitions in a ROM. Physics is scene-local unless a particular event explicitly says otherwise.

See [Actors and interactions](./actors-and-interactions), [Controls](./controls) and [Event reference](../reference/events).
