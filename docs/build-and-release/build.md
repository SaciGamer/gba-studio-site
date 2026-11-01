---
sidebar_position: 1
title: Build a ROM
description: Build a GBA Studio project and understand generated output.
---

# Build a ROM

Use **Play** for the editor's build-and-run workflow and **Build** when you need the generated ROM and build log. The pipeline serializes project resources, emits graphics/audio metadata and C++ sources, invokes the Butano/ARM build and places the derived output in the configured build area.

Treat the project resources and `assets/` as source. Generated C++ headers, intermediate files and the ROM are outputs; do not make permanent manual edits there because the next build regenerates them.

If the build fails, save the complete log. The first missing resource or symbol is usually more useful than the final Make error. Rebuild after fixing the source resource and verify the resulting ROM in an emulator.

The repository fixture `templateEngineGame/sample_project_example` is useful for a smoke check because it contains a `.gbaproj`, `.gbasres` resources and a generated ROM. Use it to verify that the documented resource layout and build outputs match the current editor version.
