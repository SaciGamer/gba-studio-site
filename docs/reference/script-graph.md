---
sidebar_position: 3
title: Script graph
description: Reference graph nodes, edges and connection handles.
---

# Script graph

The current graph format is version 1. A graph has an `entryNodeId`, a list of nodes and directed edges. Edge handles are `next`, `then` and `else`; conditional nodes use the branch handles and ordinary commands use `next`.

```json
{
  "version": 1,
  "entryNodeId": "c6810dcd-0fc9-430a-bf54-e236bb3bd02e",
  "nodes": [{"id": "c6810dcd-0fc9-430a-bf54-e236bb3bd02e", "command": "EVENT_WAIT", "version": 1, "args": {"units": "time", "time": 1}, "position": {"x": 0, "y": 0}}],
  "edges": []
}
```

The editor converts between the event list and graph while preserving event ownership and nested actions. Compilation rejects unsupported graph versions, missing targets and duplicate handles from the same source. Keep one outgoing edge per handle and ensure every non-entry node is reachable.

Game Data Save and Game Data Load each expose a success-action flow plus their continuation. Save's action flow is On Save; Load's is On Load. They are not interchangeable edges, and the selected tab is not a runtime condition. Moving or copying nested events must preserve these owners. See [Save and load](../guides/save-and-load).
