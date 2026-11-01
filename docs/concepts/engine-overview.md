---
sidebar_position: 1
title: Engine overview
description: Follow data from the editor to a Game Boy Advance ROM.
---

# Engine overview

The GBA Studio pipeline is:

`editor state → .gbasres resources → ResourceBuilder → generated C++/assets → Butano Makefile → ARM link → .gba ROM`

The renderer edits the project model and saves resources. The main-process builders read those resources, validate and materialize assets, emit code and invoke the Butano toolchain. Butano supplies the low-level GBA runtime and hardware abstractions; GBA Studio supplies the project model, visual editor and generated game-specific integration.

This separation explains why source resources are the durable artifact and generated output can be recreated.
