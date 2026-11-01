---
sidebar_position: 3
title: Build and run
description: Build a GBA Studio project, inspect logs and run the ROM in an emulator.
---

# Build and run

GBA Studio has two related flows: **Play** for a quick build-and-run cycle and **Build** for producing the project output. Both depend on valid project resources and the configured Butano toolchain.

## Before building

- select or create a start scene;
- verify that referenced backgrounds, sprites, palettes, music and scripts exist;
- save the project;
- close files that could lock generated output;
- review the integrated emulator options in Settings > Demo Configuration.

## Build

Start the build from the application menu. The editor processes project resources, materializes the generated resource data, invokes the Butano Makefile/toolchain and reports compiler output in the build log. Treat the log as the source of truth when a build fails.

Generated files are disposable outputs. Preserve the project resources and source settings; do not fix a build by editing generated C++ or headers.

## Play and emulator testing

Play builds the current project and opens the integrated emulator when the build succeeds. Test at least:

- the start scene and scene transitions;
- actor and trigger interaction;
- dialogue input and pagination;
- audio playback;
- palette, sprite and background rendering.

If the emulator shows a black screen, first confirm that the ROM was generated, the start scene is valid and the build log contains no resource or linker error.

## Release checklist

1. Save the project.
2. Run a clean build when changing resource structure or the toolchain.
3. Test the ROM in an emulator.
4. Keep the source project and the final ROM together in the release archive.
5. Record the GBA Studio, Butano and emulator versions used for the release.
