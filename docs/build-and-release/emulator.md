---
sidebar_position: 2
title: Emulator testing
description: Test generated ROMs in mGBA and diagnose common failures.
---

# Emulator testing

mGBA is the recommended first emulator because it makes loading a generated ROM and inspecting logs straightforward. Open the ROM produced by the build, then test boot, input, scene transitions, dialogue, audio and save behavior as separate checks.

For a black screen, confirm that the ROM was finalized, the first scene is valid and the build log contains no missing graphics or linker error. For silent audio, verify the resource ID, generated Butano symbol and supported source format. Rebuild after changing an asset rather than reusing an old ROM.

## Integrated preview

Play opens the integrated EmulatorJS window using the mGBA core. In **Settings > Demo Configuration**, choose keyboard/controller controls, filters, emulator-menu visibility and FPS/CPU overlays. No black placeholder is drawn for an enabled indicator before its first sample. The Runtime Monitor is attached to that emulator window; closing the emulator closes its monitor.

Use a separate mGBA installation when an independent ROM check is useful. Save storage must survive a restart for persistence tests to be meaningful; restoring only a desktop save state is not a test of Game Data or Variables Save.
