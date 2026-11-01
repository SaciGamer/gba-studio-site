---
sidebar_position: 5
title: Runtime monitor
description: Inspect the runtime monitor while a project runs in the emulator.
---

# Runtime monitor

The runtime monitor is an auxiliary window associated with the emulator. It displays the diagnostics exposed by the active runtime build. It is useful while reproducing a game flow, but it does not replace compiler output or a hardware test.

## Open and inspect the monitor

1. Build the project and start it in the emulator.
2. Open the runtime monitor from the emulator controls when available.
3. Reproduce the scene or event sequence you are investigating.
4. Read the reported runtime state and compare it with the compiler log and event configuration.
5. Close the monitor or emulator when finished.

The monitor can only report data instrumented by the generated runtime. A missing entry does not prove that an event did not run. Record the build and scene used when sharing a diagnostic. See [Debugging builds](./debugging-builds) and [Emulator](./emulator).

## Measurements

Enable CPU monitoring and open the resource monitor from the integrated emulator controls. It reports CPU samples and instrumented resource budgets, including IWRAM/heap availability, minima, sprite/tile use and peaks, and palette use where supplied by the runtime. Warning and critical colors highlight pressure on those resources.

The monitor retains the latest sample while paused and displays it when reopened. Before the first sample it shows a waiting state; the separate FPS/CPU screen overlays also stay absent until data exists. The monitor belongs to one emulator window and is closed with it.

A static ELF memory check and a live monitor measure different things. Static IWRAM/EWRAM tails do not prove peak heap or stack safety. Exercise the scene changes, dialogue, UI, audio and actor counts that occur together in the real game.
