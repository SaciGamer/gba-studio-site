---
sidebar_position: 1
title: First project
description: Create a scene, add a background and actor, and run a first GBA Studio project.
---

# First project

This walkthrough creates the smallest useful project: one scene, one background, one actor and one interaction script.

## Create the project

1. Open GBA Studio and create a new project.
2. Choose a project folder with write permission.
3. Open the Engine view and confirm the project has a start scene.
4. Save before importing assets.

## Build a scene

1. Open the scene in the Game World.
2. Add or select a background layer and choose an imported image.
3. Open the Sprites editor and select a sprite sheet for the player or an actor.
4. Add an actor to the scene and assign the sprite.
5. Use the right-side settings panel to adjust its position and properties.

## Add an interaction

1. Select the actor or trigger in the scene tree.
2. Open its event/script editor.
3. Add an interaction event and configure its text or target.
4. Connect the event flow so execution starts at the entry node and reaches the intended next node.
5. Save and run Play.

## Verify the result

The emulator should open the generated ROM at the configured start scene. If the scene is empty, inspect the selected start scene, the actor's sprite reference and the build log before changing generated files.

## Reproduce the repository sample

The repository includes `templateEngineGame/sample_project_example/sample_project.gbaproj` with scenes, backgrounds, sprites, palettes, dialogue and triggers. Open that project to compare a complete resource tree with the steps above; its `Build/sample_project.gba` is a generated artifact and should not be edited. The sample contains real uses of fades, dialogue choices, button waits, layer changes and scene changes.
