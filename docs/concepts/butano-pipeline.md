---
sidebar_position: 5
title: Butano pipeline
description: Distinguish GBA Studio generation from the Butano build layer.
---

# Butano pipeline

GBA Studio's builders collect resource definitions, generate declarations and runtime data, copy or convert graphics/audio and prepare a Makefile-based Butano project. The ARM compiler and linker then produce the final ROM.

Butano is the public low-level engine layer: sprites, backgrounds, palettes, audio, input and hardware abstractions. GBA Studio's generated registries, event data and project conventions are its own layer on top. Documentation should identify which layer owns a behavior so a Butano API is not mistaken for a GBA Studio editor feature.

When a build fails, start with the first error in the build log. Common causes include missing source assets, invalid resource references, unsupported image/audio formats, invalid event arguments and missing toolchain components.
