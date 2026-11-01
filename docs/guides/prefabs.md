---
sidebar_position: 9
title: Prefabs
description: Create and reuse actor and trigger templates in the Game World.
---

# Prefabs

Prefabs are reusable actor or trigger definitions stored with the project. The **Prefabs** section appears beside **Scenes**, **Scripts** and **Variables** in the Game World navigation. Actor and trigger prefabs are kept in separate groups.

## Create and place a prefab

1. Expand **Prefabs** and choose the actor or trigger group.
2. Create a definition and configure its supported properties in the inspector.
3. Drag the prefab into a scene, or use the placement action beside the prefab.
4. Select the placed instance and review its scene position and event context.

The definition is stored in the project's prefab resource. Scene instances refer to that definition so it can be reused. Keep the source definition and instances distinguishable with descriptive names. Instance-specific fields affect placement; shared definition changes affect linked instances. The editing controls below determine which data is shared.

Actors and triggers have different event contexts. A trigger prefab does not become an actor when placed, and actor-only event choices are filtered from trigger lists. See [Actors and interactions](./actors-and-interactions) and [Triggers and input](./triggers-and-input).

## Edit linked instances

Scene placement fields such as position belong to the placed instance. Shared sprite and event data comes from the linked prefab. With **Editable from scene** off, shared event controls and their menus are locked for both actor and trigger instances. Change the definition in Prefabs, or enable Editable from scene before changing shared data from a placed instance.

Editing shared data from an editable instance updates the prefab and its linked instances. **Unlink events** makes the instance's event lists independent copies with their own IDs; those local events remain editable without enabling shared-prefab editing. This does not turn the entire prefab into a different resource.
