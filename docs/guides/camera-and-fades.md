---
sidebar_position: 5
title: Camera and fades
description: Move, follow, clamp and stop the camera, and configure screen fade transitions.
---

# Camera and fades

## Move the camera

**Pan Camera** and **Camera: Move To** take X and Y destinations. Choose pixels or tiles independently for each axis; one tile is 16 pixels. Animated movement blocks its script until the movement completes. Speed ranges from `0.0625` to `16`. Use the event's instant/animated setting to choose between repositioning and movement.

The editor limits camera movement events in Logo and Point Click contexts. Use the selected scene's event picker to see valid actions.

## Follow an actor

**Camera: Follow Actor** selects the player, Self or an actor in the current scene. Configure X/Y axis locks, dead-zone width/height, scene clamping and the event's persistence option. Its preview shows how the camera's tracked region relates to the target. Use **Stop Camera Follow** to end following explicitly.

Following normally belongs to the current scene. Enable persistence only when following should continue through a scene transition, and verify that the target is valid in the destination. When a preview is nested in another preview event, hovering or focusing the child gives its preview priority; the parent preview returns when that interaction ends.

## Shake and fades

**Camera: Shake** takes 1-120 frames and amplitude 1-16. **Fade Options** chooses the fade color; **Fade In** and **Fade Out** use speed 1-6 and block until complete. A fade changes screen visibility, not the actor's world position.

See [Scenes and layers](./scenes-and-layers), [Event reference](../reference/events) and [Emulator testing](../build-and-release/emulator).
