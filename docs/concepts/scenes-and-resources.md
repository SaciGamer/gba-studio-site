---
sidebar_position: 2
title: Scenes and resources
description: Learn how scenes reference backgrounds, actors, scripts and assets.
---

# Scenes and resources

A scene is the runtime composition unit. It can reference backgrounds/layers, actors, triggers, scripts and scene settings. Global resources such as palettes, sprites, variables, music and sound effects are stored separately and referenced by ID or asset name.

The editor keeps selection context in the Game World and exposes the selected object's properties in the right panel. A reference is only valid when its target resource exists and its fields satisfy the builder's constraints.

Keep reusable resources global and scene-specific placement/state in the scene. This makes it possible to use one sprite or palette in multiple scenes while keeping each scene's layout independent.
