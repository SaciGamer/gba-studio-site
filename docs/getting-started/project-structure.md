---
sidebar_position: 3
title: Project structure
description: Understand source resources, assets and generated output.
---

# Project structure

A project contains editable source data and generated output. Keep source data under version control and treat build output as reproducible.

| Area | Purpose |
|---|---|
| `project/` | Project resource files and settings. |
| `assets/` | Imported images, sprites, audio and other source assets. |
| `*.gbasres` | JSON resource documents consumed by the editor and resource builder. |
| `build/` | Generated/intermediate build data and compiled output. |
| ROM output | The final `.gba` file produced by the configured toolchain. |

Resource files carry a resource type and IDs used by other resources. Rename or delete resources through the editor when possible so references and generated data remain consistent.

Do not edit generated headers, generated C++ or intermediate build files as a normal workflow. If a generated artifact is wrong, fix the source resource or the builder input and rebuild.
