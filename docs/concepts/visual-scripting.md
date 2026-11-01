---
sidebar_position: 3
title: Visual scripting
description: Understand event nodes, branches, edges and handles.
---

# Visual scripting

Scripts are represented as event nodes connected by edges. Execution begins at the script entry and follows the connected flow. Branching events expose `then` and `else` child flows; each branch must lead to a valid continuation or intentionally end.

Nodes carry event-specific arguments. The editor validates required fields and graph connections before the compiler emits runtime data. Graph handles such as next, then and else name the outgoing flow connections. Event-specific resource IDs identify objects such as UI elements; these are different from graph connections.

Keep graphs readable: use one clear entry, avoid cycles unless the event is explicitly a loop, and connect every intended branch. The event reference documents the payload and completion behavior of each event.
