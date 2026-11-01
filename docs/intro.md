---
sidebar_position: 1
title: GBA Studio
description: Create Game Boy Advance games with a visual editor and the Butano engine.
---

# GBA Studio

GBA Studio is a Windows editor for building Game Boy Advance games with a visual workflow. You create scenes, actors, backgrounds, scripts, variables, audio and other resources in the editor; the project is then converted into C++ and built with [Butano](https://github.com/GValiente/butano).

These pages document the packaged desktop application and its project workflow. Repository maintenance, source builds and test commands are isolated in [Contributing](./contributing).

The editor is designed to keep the game data editable and reproducible. Source resources belong in the project; generated headers, build directories and ROM files are outputs and should not be edited by hand.

## What the tool covers

- scene composition with backgrounds, actors, triggers and layers;
- visual scripts with sequential events and branches;
- sprites, palettes, images, music and sound effects;
- project settings, emulator launch and build logs;
- generation of a Butano project and a `.gba` ROM.

## Important limits

The target is the Game Boy Advance and its resource budgets. The available events, asset formats, tile/palette limits and runtime behavior are defined by the current editor and compiler, not by generic game-engine documentation. When a feature is not exposed by the editor or compiler, this documentation treats it as unsupported rather than assuming a future API.

## Recommended path

1. [Install the tool](./installation).
2. Follow [First project](./getting-started/first-project).
3. Learn the [editor tour](./getting-started/editor-tour) and [project structure](./getting-started/project-structure).
4. Read the [engine overview](./concepts/engine-overview) before building more complex scripts.
5. Use the build and release guide to produce and test a ROM.

![Game World with scene navigation, canvas, floating tools, minimap and resource estimates](/img/screenshots/gba-studio/game-world-overview.png)

*The Game World combines project navigation and the current scene workspace.*
