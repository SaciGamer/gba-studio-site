---
sidebar_position: 4
title: Event lifecycle
description: Understand instant, blocking and asynchronous event execution.
---

# Event lifecycle

An event may complete immediately, block until an input or timer condition is met, or start an effect that continues while later events execute. Runtime execution tracks whether an event is running, completed or failed; the next graph edge is followed only after the event's completion rule is satisfied.

Dialogue, waits, fades and movement can occupy multiple frames. The runtime updates active work every frame and renders the current scene between updates. A scene change cancels work associated with the previous scene so stale events do not continue operating on removed objects.

Event graphs also have a per-script instruction budget. Keep loops bounded and use the available Wait and event-specific controls instead of creating a tight loop that consumes the frame budget.
