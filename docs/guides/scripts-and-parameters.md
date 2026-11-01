---
sidebar_position: 8
title: Reusable scripts and parameters
description: Build reusable event scripts and pass typed arguments from scenes, actors and triggers.
---

# Reusable scripts and parameters

Use a script when the same event sequence is needed in more than one place. Scripts appear in the **Scripts** section of the Game World navigation. Their events run in the caller's context, so scene, actor and trigger references must be available where the script is called.

## Define inputs

1. Select a script in **Scripts** and open its event editor.
2. Add an input and give it a clear name. Inputs support **Number**, **Boolean** and **String** values.
3. Choose whether the input is **Local** or **Reference**. A local input receives a value for the call. A reference input points to a compatible caller variable, actor property, trigger property or scene value.
4. Use the input in the script's event fields, then save the project.

A script supports at most 20 inputs. Reference inputs must match the source type; actor and scene references require numeric inputs. A trigger reference uses the type of the selected trigger property. The caller must contain the referenced resource. Invalid or missing references are rejected during editing or compilation rather than silently resolved to a different object.

## Call a script

1. Add **Call Script** to an event list and select the script.
2. Fill each argument shown by the call editor. Choose a literal, variable or supported reference/formula for the input type.
3. Confirm that each variable or resource belongs to the caller's scene, actor or trigger context.
4. Run the scene or build the project to verify the complete call path.

If you rename or remove an input, review every call site. Keep shared scripts small and pass values that change between callers as inputs instead of hard-coding one scene's IDs. See [Organize events](./event-organization) and [Event reference](../reference/events).
