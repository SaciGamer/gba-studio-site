---
sidebar_position: 1
title: Event reference
description: Reference for current event codes, payloads, defaults and execution modes.
---

# Event reference

Events are executable blocks used by scenes, actors, triggers and reusable scripts. The editor, compiler and runtime share the catalog below. Codes, versions, categories and execution modes are copied from the application catalog; field names and defaults follow the serialized contract.

`*` marks a required payload field. Numeric ranges are inclusive. `instant` events finish without waiting; `blocking` events pause the current script until their operation completes. Defaults are shown as JSON; `{}` means the catalog supplies no default object.

## Current catalog

On narrow screens, swipe the catalog horizontally to read the payload and defaults columns.

The table describes supported serialized contracts. The event picker filters internal commands and scene-specific choices. Conditional fields, such as the variable selection when All global variables is off, are explained in the relevant guide.

| Code | Version | Category | Execution | Payload fields | Catalog defaults |
| --- | ---: | --- | --- | --- | --- |
| `EVENT_RUN_BUTTON_ACTION` | 1 | Joypad Input | instant | `button`:enum, `mode`:enum | `{"button":"B","mode":"default"}` |
| `EVENT_STOP_PHYSICS` | 1 | Actor | instant | `actorId`:string | `{"actorId":"__PLAYER__"}` |
| `EVENT_PHYSICS_SET_GRAVITY` | 1 | Actor | instant | `actorId`:string, `gravity`:number [0…16] | `{"actorId":"__PLAYER__","gravity":0.25}` |
| `EVENT_PHYSICS_SET_JUMP_SPEED` | 1 | Actor | instant | `actorId`:string, `jumpSpeed`:number [0…16] | `{"actorId":"__PLAYER__","jumpSpeed":5}` |
| `EVENT_PHYSICS_SET_MAX_FALL_SPEED` | 1 | Actor | instant | `actorId`:string, `maxFallSpeed`:number [0…16] | `{"actorId":"__PLAYER__","maxFallSpeed":6}` |
| `EVENT_PHYSICS_SET_AIR_JUMPS` | 1 | Actor | instant | `actorId`:string, `airJumps`:integer [-1…255] | `{"actorId":"__PLAYER__","airJumps":0}` |
| `EVENT_PHYSICS_SET_DIAGONAL` | 1 | Actor | instant | `actorId`:string, `allowDiagonal`:boolean | `{"actorId":"__PLAYER__","allowDiagonal":true}` |
| `EVENT_PHYSICS_RESET` | 1 | Actor | instant | `actorId`:string | `{"actorId":"__PLAYER__"}` |
| `EVENT_CONFIGURE_MOVEMENT` | 1 | Actor | instant | `actorId`:string, `reset`:boolean, `allowDiagonal`:boolean, `gravity`:number [0…16], `jumpSpeed`:number [0…16], `maxFallSpeed`:number [0…16], `airJumps`:integer [-1…255] | `{"actorId":"__PLAYER__","reset":false,"allowDiagonal":true,"gravity":0.25,"jumpSpeed":5,"maxFallSpeed":6,"airJumps":0}` |
| `EVENT_APPLY_VERTICAL_IMPULSE` | 1 | Actor | instant | `actorId`:string, `impulse`:number [-16…16], `mode`:enum | `{"actorId":"__PLAYER__","impulse":-5,"mode":"replace"}` |
| `EVENT_ACTOR_SET_DIRECTION` | 1 | Actor | instant | `actorId`:string*, `direction`:enum | `{"actorId":"__PLAYER__","direction":"down"}` |
| `EVENT_ACTOR_SET_STATE` | 1 | Actor | instant | `actorId`:string*, `stateId`:string* | `{"actorId":"","stateId":""}` |
| `EVENT_SHOW_EMOTE` | 1 | Actor | instant | `emoteId`:string*, `actorId`:string*, `distance`:integer [0…256] | `{"emoteId":"","actorId":"__SELF__","distance":12}` |
| `EVENT_WAIT` | 1 | Timer | blocking | `units`:enum*, `frames`:integer [0…∞], `time`:integer [0…∞] | `{"units":"time","time":0,"frames":0}` |
| `EVENT_FADE_IN` | 1 | Screen | blocking | `speed`:integer [1…6] | `{"speed":2}` |
| `EVENT_FADE_OUT` | 1 | Screen | blocking | `speed`:integer [1…6] | `{"speed":2}` |
| `EVENT_FADE_OPTIONS` | 1 | Screen | instant | `color`:enum* | `{"color":"black"}` |
| `EVENT_CHANGE_SCENE` | 1 | Scene | blocking | `sceneId`:string*, `x`:integer [0…∞], `y`:integer [0…∞], `xUnit`:enum, `yUnit`:enum, `direction`:enum, `fadeSpeed`:integer [1…6] | `{}` |
| `EVENT_PAN_CAMERA` | 1 | Camera | blocking | `xUnit`:enum, `yUnit`:enum, `animated`:boolean, `speed`:number [0.0625…16], `x`:integer*, `y`:integer* | `{"xUnit":"pixels","yUnit":"pixels","animated":false,"speed":1,"x":{"type":"number","value":0},"y":{"type":"number","value":0},"showCamera":false}` |
| `EVENT_CAMERA_MOVE_TO` | 1 | Camera | blocking | `xUnit`:enum, `yUnit`:enum, `animated`:boolean, `speed`:number [0.0625…16], `x`:integer*, `y`:integer* | `{"xUnit":"pixels","yUnit":"pixels","animated":true,"speed":1,"x":{"type":"number","value":0},"y":{"type":"number","value":0},"showCamera":false}` |
| `EVENT_CAMERA_FOLLOW` | 1 | Camera | instant | `actorId`:string*, `clampToScene`:boolean, `persistAcrossScenes`:boolean, `lockX`:boolean, `lockY`:boolean, `deadZoneWidth`:integer [0…240], `deadZoneHeight`:integer [0…160] | `{"actorId":"__PLAYER__","clampToScene":true,"persistAcrossScenes":false,"lockX":false,"lockY":false,"deadZoneWidth":0,"deadZoneHeight":0}` |
| `EVENT_CAMERA_STOP_FOLLOW` | 1 | Camera | instant | none | `{}` |
| `EVENT_CAMERA_SHAKE` | 1 | Camera | instant | `frames`:integer* [1…120], `axis`:enum, `customShake`:boolean, `amplitude`:integer* [1…16] | `{"frames":8,"amplitude":2,"axis":"both"}` |
| `EVENT_MOVE_ACTOR` | 1 | Actor | blocking | `collideWalls`:boolean, `collideActors`:boolean, `lockDirection`:enum, `movementType`:enum, `animated`:boolean, `speed`:number [0.0625…16], `animationSpeed`:integer [0…8], `xUnit`:enum, `yUnit`:enum, `actorId`:string*, `x`:integer*, `y`:integer* | `{"collideWalls":true,"collideActors":false,"lockDirection":"none","movementType":"horizontal-first","animated":false,"speed":1,"actorId":"","x":0,"y":0,"xUnit":"tiles","yUnit":"tiles"}` |
| `EVENT_ACTOR_MOVE_TO` | 1 | Actor | blocking | `collideWalls`:boolean, `collideActors`:boolean, `lockDirection`:enum, `movementType`:enum, `animated`:boolean, `speed`:number [0.0625…16], `animationSpeed`:integer [0…8], `xUnit`:enum, `yUnit`:enum, `actorId`:string*, `x`:integer*, `y`:integer* | `{"collideWalls":true,"collideActors":false,"lockDirection":"none","movementType":"horizontal-first","animated":true,"speed":1,"actorId":"","x":0,"y":0,"xUnit":"tiles","yUnit":"tiles"}` |
| `EVENT_ACTOR_SET_POSITION` | 1 | Actor | instant | `xUnit`:enum, `yUnit`:enum, `actorId`:string*, `x`:integer*, `y`:integer* | `{"actorId":"","x":0,"y":0}` |
| `EVENT_SPAWN_ACTOR` | 1 | Actor | instant | `xUnit`:enum, `yUnit`:enum, `source`:enum, `actorId`:string, `prefabId`:string, `x`:integer*, `y`:integer* | `{"source":"actor","actorId":"","prefabId":"","x":0,"y":0}` |
| `EVENT_ACTOR_SPAWN` | 1 | Actor | instant | `xUnit`:enum, `yUnit`:enum, `source`:enum, `actorId`:string, `prefabId`:string, `x`:integer*, `y`:integer* | `{"source":"actor","actorId":"","prefabId":"","x":0,"y":0}` |
| `EVENT_REMOVE_ACTOR` | 1 | Actor | instant | `source`:enum, `actorId`:string, `prefabId`:string | `{"source":"actor","actorId":"","prefabId":""}` |
| `EVENT_ACTOR_DESPAWN` | 1 | Actor | instant | `source`:enum, `actorId`:string, `prefabId`:string | `{"source":"actor","actorId":"","prefabId":""}` |
| `EVENT_VISIBLE_ACTOR` | 1 | Actor | instant | `actorId`:string*, `visible`:boolean* | `{"actorId":"","visible":true}` |
| `EVENT_ACTOR_SET_VISIBLE` | 1 | Actor | instant | `actorId`:string*, `visible`:boolean* | `{"actorId":"","visible":true}` |
| `EVENT_HIDE_ACTOR` | 1 | Actor | instant | `actorId`:string* | `{"actorId":""}` |
| `EVENT_SHOW_ACTOR` | 1 | Actor | instant | `actorId`:string* | `{"actorId":""}` |
| `EVENT_HIDE_ALL_SPRITES` | 1 | Actor | instant | none | `{}` |
| `EVENT_SHOW_ALL_SPRITES` | 1 | Actor | instant | none | `{}` |
| `EVENT_SET_ANIMATION_SPEED` | 1 | Actor | instant | `actorId`:string*, `speed`:integer* [0…60] | `{"actorId":"","speed":6}` |
| `EVENT_ACTOR_SET_ANIMATION` | 1 | Actor | instant | `actorId`:string*, `action`:enum, `stateId`:string, `animationId`:string, `speed`:integer [0…60], `frame`:integer [0…255], `reverse`:boolean | `{"actorId":"","action":"speed","stateId":"","animationId":"","speed":6,"frame":0,"reverse":false}` |
| `EVENT_SET_ACTOR_PRIORITY` | 1 | Actor | instant | `actorId`:string*, `priority`:integer* [0…3] | `{"actorId":"","priority":2}` |
| `EVENT_PLAY_MUSIC` | 1 | Audio | instant | `musicId`:string*, `volume`:integer [0…100], `loop`:boolean | `{"musicId":"","volume":100,"loop":true}` |
| `EVENT_MUSIC_PLAY_JINGLE` | 1 | Audio | instant | `musicId`:string*, `volume`:integer [0…100] | `{"musicId":"","volume":100}` |
| `EVENT_PLAY_SOUND` | 1 | Audio | instant | `soundId`:string*, `soundSource`:enum, `sfxParameters`:string, `effect`:enum, `pitch`:integer [24…108], `durationFrames`:integer [1…120], `volume`:integer [0…100], `speed`:integer [25…400], `panning`:integer [-100…100], `priority`:integer [-32767…32767], `group`:string | `{"soundId":"generated","soundSource":"generated","effect":"tone","pitch":60,"durationFrames":12,"volume":100,"speed":100,"panning":0,"priority":0,"group":""}` |
| `EVENT_RUMBLE` | 1 | Screen | instant | `durationFrames`:integer* [1…120], `durationUnit`:enum, `intensity`:integer* [0…100] | `{"durationFrames":8,"intensity":100,"durationUnit":"frames"}` |
| `EVENT_SOUND_STOP` | 1 | Audio | instant | `group`:string | `{"group":""}` |
| `EVENT_STOP_MUSIC` | 1 | Audio | instant | none | `{}` |
| `EVENT_MUSIC_STOP` | 1 | Audio | instant | none | `{}` |
| `EVENT_SET_MUSIC_VOLUME` | 1 | Audio | instant | `volume`:integer* [0…100] | `{"volume":100}` |
| `EVENT_MUSIC_RESUME` | 1 | Audio | instant | none | `{}` |
| `EVENT_MUSIC_PAUSE` | 1 | Audio | instant | none | `{}` |
| `EVENT_MUSIC_FADE` | 1 | Audio | instant | `targetVolume`:integer* [0…100], `durationFrames`:integer* [1…600] | `{"targetVolume":0,"durationFrames":30}` |
| `EVENT_HBE_EFFECT_ENABLE` | 1 | Screen | instant | `preset`:enum*, `intensity`:integer* [0…16], `layerId`:integer [0…3] | `{"preset":"mosaic_wave","intensity":8,"layerId":0}` |
| `EVENT_HBE_EFFECT_DISABLE` | 1 | Screen | instant | none | `{}` |
| `EVENT_BLEND_ALPHA` | 1 | Screen | instant | `alpha`:integer* [0…100] | `{"alpha":100}` |
| `EVENT_SHOOTER_START` | 1 | Shooter | instant | `waveId`:string | `{"waveId":""}` |
| `EVENT_SHOOTER_SPAWN_WAVE` | 1 | Shooter | instant | `waveId`:string | `{"waveId":""}` |
| `EVENT_SHOOTER_LOAD_STAGE` | 1 | Shooter | instant | `waveId`:string, `musicId`:string, `musicVolume`:integer [0…100], `backgroundId`:string, `backgroundLayer`:integer [0…3] | `{"waveId":"","musicId":"","musicVolume":100,"backgroundId":"","backgroundLayer":0}` |
| `EVENT_SHOOTER_SET_BACKGROUND_MODE` | 1 | Shooter | instant | `layerId`:integer* [0…3], `visible`:boolean, `scrollX`:integer [-2048…2048], `scrollY`:integer [-2048…2048], `parallaxX`:integer [-200…200], `parallaxY`:integer [-200…200] | `{"layerId":0,"visible":true,"scrollX":0,"scrollY":0,"parallaxX":100,"parallaxY":100}` |
| `EVENT_SHOOTER_PAUSE` | 1 | Shooter | instant | `paused`:boolean* | `{"paused":true}` |
| `EVENT_SHOOTER_STOP` | 1 | Shooter | instant | none | `{}` |
| `EVENT_SHOOTER_CLEAR_ENEMIES` | 1 | Shooter | instant | none | `{}` |
| `EVENT_SHOOTER_SPAWN_BOSS` | 1 | Shooter | instant | `xUnit`:enum, `yUnit`:enum, `archetypeId`:string*, `x`:integer*, `y`:integer*, `dropId`:string | `{"archetypeId":"","x":120,"y":32,"dropId":""}` |
| `EVENT_SHOOTER_SET_BOSS_PHASE` | 1 | Shooter | instant | `phase`:integer* [0…7] | `{"phase":0}` |
| `EVENT_SHOOTER_WAIT_SIGNAL` | 1 | Shooter | blocking | `signal`:enum*, `timeoutFrames`:integer [0…∞] | `{"signal":"wave_cleared","timeoutFrames":0}` |
| `EVENT_SHOOTER_GRANT` | 1 | Shooter | instant | `grant`:enum*, `value`:integer* [0…9999] | `{"grant":"score","value":0}` |
| `EVENT_SHOOTER_SET_STAT` | 1 | Shooter | instant | `stat`:enum*, `value`:integer* [0…9999] | `{"stat":"player_hit_points","value":3}` |
| `EVENT_SHOOTER_ADD_STAT` | 1 | Shooter | instant | `stat`:enum*, `value`:integer* [-9999…9999] | `{"stat":"player_hit_points","value":1}` |
| `EVENT_SHOOTER_SET_PLAYER_ENABLED` | 1 | Shooter | instant | `enabled`:boolean* | `{"enabled":true}` |
| `EVENT_DISPLAY_DIALOGUE` | 1 | Dialogue | blocking | `avatarXUnit`:enum, `avatarYUnit`:enum, `text`:string*, `dialogueFont`:enum, `showFrame`:boolean, `horizontalAlign`:enum, `verticalAlign`:enum, `animate`:boolean, `animationSpeed`:enum, `portraitEnabled`:boolean, `avatarImage`:string, `avatarSize`:enum, `avatarPlacement`:enum, `avatarAnchor`:enum, `avatarX`:integer [0…240], `avatarY`:integer [0…160] | `{"text":"","dialogueFont":"fixed8x16","showFrame":true,"horizontalAlign":"center","verticalAlign":"bottom","animationSpeed":"medium","portraitEnabled":false,"avatarSize":"16","avatarPlacement":"inside","avatarAnchor":"top-left","avatarX":112,"avatarY":16}` |
| `EVENT_DIALOGUE_SHOW` | 1 | Dialogue | instant | `avatarXUnit`:enum, `avatarYUnit`:enum, `text`:string*, `dialogueFont`:enum, `showFrame`:boolean, `horizontalAlign`:enum, `verticalAlign`:enum, `animate`:boolean, `animationSpeed`:enum, `portraitEnabled`:boolean, `avatarImage`:string, `avatarSize`:enum, `avatarPlacement`:enum, `avatarAnchor`:enum, `avatarX`:integer [0…240], `avatarY`:integer [0…160] | `{"text":"","dialogueFont":"fixed8x16","showFrame":true,"horizontalAlign":"center","verticalAlign":"bottom","animationSpeed":"medium","portraitEnabled":false,"avatarSize":"16","avatarPlacement":"inside","avatarAnchor":"top-left","avatarX":112,"avatarY":16}` |
| `EVENT_TEXT_SCROLL` | 1 | Dialogue | blocking | `text`:string*, `dialogueFont`:enum, `showFrame`:boolean, `horizontalAlign`:enum, `verticalAlign`:enum, `animate`:boolean, `animationSpeed`:enum | `{}` |
| `EVENT_VARIABLES_SAVE` | 1 | Save Data | instant | `slot`:integer* [0…7], `allVariables`:boolean, `variableIds`:array | `{"slot":7,"allVariables":false,"variableIds":[]}` |
| `EVENT_VARIABLES_LOAD` | 1 | Save Data | instant | `slot`:integer* [0…7], `allVariables`:boolean, `variableIds`:array | `{"slot":7,"allVariables":false,"variableIds":[]}` |
| `EVENT_SAVE_WRITE` | 1 | Save Data | instant | `slot`:integer* [0…7] | `{"slot":0}` |
| `EVENT_SAVE_LOAD` | 1 | Save Data | instant | `slot`:integer* [0…7] | `{"slot":0}` |
| `EVENT_SAVE_REMOVE` | 1 | Save Data | instant | `slot`:integer* [0…7] | `{"slot":0}` |
| `EVENT_SAVE_ON_LOAD` | 1 | Save Data | blocking | none | `{}` |
| `EVENT_DISPLAY_VARIABLE_TEXT` | 1 | Variables | instant | `xUnit`:enum, `yUnit`:enum, `variableId`:string*, `x`:integer* [0…240], `y`:integer* [0…160], `font`:enum | `{"variableId":"","x":0,"y":0,"font":"variable8x16"}` |
| `EVENT_HIDE_DIALOGUE` | 1 | Dialogue | instant | none | `{}` |
| `EVENT_DIALOGUE_CLOSE` | 1 | Dialogue | instant | none | `{}` |
| `EVENT_UI_SET_TEXT` | 1 | UI | instant | `xUnit`:enum, `yUnit`:enum, `text`:string*, `x`:integer [0…240], `y`:integer [0…160], `font`:enum | `{"text":"","x":0,"y":0,"font":"fixed8x16"}` |
| `EVENT_UI_SET_VALUE` | 1 | UI | instant | `xUnit`:enum, `yUnit`:enum, `label`:string, `value`:integer* [-99999999…99999999], `x`:integer [-240…240], `y`:integer [-160…160], `font`:enum | `{"label":"","value":0,"x":0,"y":0,"font":"fixed8x16"}` |
| `EVENT_UI_ANIMATE` | 1 | UI | instant | `xUnit`:enum, `yUnit`:enum, `uiId`:string*, `animation`:enum*, `x`:integer [0…240], `y`:integer [0…160], `speed`:number* [0.0625…10], `customSpeed`:boolean, `durationFrames`:integer [1…600] | `{"uiId":"","animation":"move","x":0,"y":0,"speed":2,"customSpeed":false}` |
| `EVENT_UI_DESTROY` | 1 | UI | instant | `uiId`:string* | `{"uiId":""}` |
| `EVENT_UI_HIDE` | 1 | UI | instant | `uiId`:string* | `{"uiId":""}` |
| `EVENT_UI_SHOW` | 1 | UI | instant | `uiId`:string* | `{"uiId":""}` |
| `EVENT_UI_ANIMATION_STOP` | 1 | UI | instant | `uiId`:string* | `{"uiId":""}` |
| `EVENT_ACTOR_SET_ROTATION` | 1 | Actor | instant | `actorId`:string*, `angle`:integer [-180…180], `durationFrames`:integer [1…600] | `{"actorId":"__PLAYER__","angle":0,"durationFrames":1}` |
| `EVENT_ACTOR_SET_SCALE` | 1 | Actor | instant | `actorId`:string*, `scale`:integer [10…400], `durationFrames`:integer [1…600] | `{"actorId":"__PLAYER__","scale":100,"durationFrames":1}` |
| `EVENT_SPRITE_EFFECT` | 1 | Actor | instant | `actorId`:string*, `rotation`:integer [-180…180], `scale`:integer [10…400], `visible`:boolean, `fadeColor`:enum, `fadeIntensity`:integer [0…100], `durationFrames`:integer [1…600] | `{"actorId":"","rotation":0,"scale":100,"visible":true,"fadeColor":"none","fadeIntensity":0,"durationFrames":1}` |
| `EVENT_DIALOGUE_CHOICE` | 1 | Dialogue | blocking | `avatarXUnit`:enum, `avatarYUnit`:enum, `showTitle`:boolean, `prompt`:string, `optionA`:string*, `optionB`:string*, `initialSelection`:integer [0…1], `resultVariable`:string*, `dialogueFont`:enum, `showFrame`:boolean, `horizontalAlign`:enum, `verticalAlign`:enum, `animate`:boolean, `animationSpeed`:enum, `allowCancel`:boolean, `avatarImage`:string, `avatarSize`:enum, `avatarPlacement`:enum, `avatarAnchor`:enum, `avatarX`:integer [0…240], `avatarY`:integer [0…160] | `{"showTitle":true,"prompt":"Choose an option","optionA":"Yes","optionB":"No","initialSelection":0,"resultVariable":"","dialogueFont":"fixed8x16","showFrame":true,"horizontalAlign":"left","verticalAlign":"bottom","animate":true,"animationSpeed":"medium","allowCancel":true,"avatarSize":"16","avatarPlacement":"inside","avatarAnchor":"top-left","avatarX":112,"avatarY":16}` |
| `EVENT_MENU_OPEN` | 1 | Dialogue | blocking | `avatarXUnit`:enum, `avatarYUnit`:enum, `columns`:integer [1…4], `optionOrder`:enum, `position`:enum, `showTitle`:boolean, `prompt`:string, `optionA`:string, `optionB`:string, `options`:array, `initialSelection`:integer [0…31], `resultVariable`:string*, `dialogueFont`:enum, `showFrame`:boolean, `horizontalAlign`:enum, `verticalAlign`:enum, `animate`:boolean, `animationSpeed`:enum, `allowCancel`:boolean, `avatarImage`:string, `avatarSize`:enum, `avatarPlacement`:enum, `avatarAnchor`:enum, `avatarX`:integer [0…240], `avatarY`:integer [0…160] | `{"columns":1,"optionOrder":"rows","position":"dialogue","showTitle":true,"prompt":"Menu","optionA":"Start","optionB":"Back","options":[],"initialSelection":0,"resultVariable":"","dialogueFont":"fixed8x16","showFrame":true,"horizontalAlign":"left","verticalAlign":"bottom","animate":true,"animationSpeed":"medium","allowCancel":true,"avatarSize":"16","avatarPlacement":"inside","avatarAnchor":"top-left","avatarX":112,"avatarY":16}` |
| `EVENT_CHANGE_LAYER` | 1 | Scene | instant | `layerId`:integer* [0…3], `backgroundId`:string | `{"layerId":0,"backgroundId":null}` |
| `EVENT_VISIBLE_BACKGROUND` | 1 | Scene | instant | `layerId`:integer* [0…3], `visible`:boolean* | `{"layerId":0,"visible":true}` |
| `EVENT_BACKGROUND_ANIMATE` | 1 | Scene | instant | `layerId`:integer* [0…3], `backgroundId`:string*, `direction`:enum, `frameWidth`:integer [0…512], `frameHeight`:integer [0…512], `step`:integer [0…16384], `frameCount`:integer [0…512], `startFrame`:integer [1…512], `endFrame`:integer [0…512], `reverse`:boolean, `durationFrames`:integer [1…600], `speedUnit`:enum, `customSpeed`:boolean, `loop`:boolean | `{"layerId":0,"backgroundId":"","direction":"horizontal","frameWidth":0,"frameHeight":0,"step":0,"frameCount":0,"startFrame":1,"endFrame":0,"reverse":false,"durationFrames":10,"speedUnit":"frames","customSpeed":false,"loop":true}` |
| `EVENT_BACKGROUND_SCROLL` | 1 | Scene | instant | `xUnit`:enum, `yUnit`:enum, `layerId`:integer* [0…3], `x`:integer*, `y`:integer* | `{"layerId":0,"x":0,"y":0}` |
| `EVENT_BACKGROUND_SET_PARALLAX` | 1 | Scene | instant | `layerId`:integer* [0…3], `x`:integer* [-200…200], `y`:integer* [-200…200] | `{"layerId":0,"x":100,"y":100}` |
| `EVENT_BACKGROUND_SET_SCALE` | 1 | Scene | instant | `layerId`:integer* [0…3], `x`:integer* [10…800], `y`:integer* [10…800] | `{"layerId":0,"x":100,"y":100}` |
| `EVENT_ACTOR_SET_TINT` | 1 | Actor | instant | `actorId`:string*, `value`:integer [0…100], `color`:string, `durationFrames`:integer [1…600] | `{"actorId":"__PLAYER__","value":0,"color":"#ffffff","durationFrames":1}` |
| `EVENT_ACTOR_SET_SATURATION` | 1 | Actor | instant | `actorId`:string*, `value`:integer [0…100] | `{"actorId":"__PLAYER__","value":100}` |
| `EVENT_ACTOR_SET_BRIGHTNESS` | 1 | Actor | instant | `actorId`:string*, `value`:integer [-100…100] | `{"actorId":"__PLAYER__","value":0}` |
| `EVENT_ACTOR_SET_OPACITY` | 1 | Actor | instant | `actorId`:string*, `value`:integer [0…100] | `{"actorId":"__PLAYER__","value":100}` |
| `EVENT_BACKGROUND_SET_ROTATION` | 1 | Scene | instant | `layerId`:integer* [0…3], `angle`:integer* [-360…360] | `{"layerId":0,"angle":0}` |
| `EVENT_BACKGROUND_SET_SHEAR` | 1 | Scene | instant | `layerId`:integer* [0…3], `x`:integer* [-200…200], `y`:integer* [-200…200] | `{"layerId":0,"x":0,"y":0}` |
| `EVENT_CHANGE_DEFAULT_PALETTES` | 1 | Scene | instant | `paletteIds`:array | `{"paletteIds":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]}` |
| `EVENT_CHANGE_PALETTE_BACKGROUND` | 1 | Scene | instant | `layerId`:integer* [0…3], `restorePaletteLayerDefault`:boolean | `{"layerId":0,"paletteIds":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]}` |
| `EVENT_VARIABLE` | 1 | Variables | instant | `value`:value*, `variableId`:string* | `{}` |
| `EVENT_LOCAL_VARIABLE_RESET` | 1 | Variables | instant | none | `{}` |
| `EVENT_VARIABLE_RESET_ALL` | 1 | Variables | instant | none | `{"scope":"ALL"}` |
| `EVENT_IF` | 1 | Scripts | instant | `left`:value*, `right`:value*, `operator`:enum* | `{}` |
| `EVENT_SWITCH` | 1 | Scripts | instant | `value`:value* | `{"value":{"kind":"literal","type":"number","value":0}}` |
| `EVENT_WHILE` | 1 | Scripts | instant | `left`:value*, `right`:value*, `operator`:enum* | `{}` |
| `EVENT_CALL_SCRIPT` | 1 | Scripts | blocking | `scriptId`:string*, `arguments`:array | `{"scriptId":"","arguments":[]}` |
| `EVENT_FOR` | 1 | Scripts | instant | `variableId`:string*, `start`:integer*, `end`:integer*, `step`:integer* | `{"variableId":"","start":0,"end":0,"step":1}` |
| `EVENT_BREAK` | 1 | Scripts | instant | none | `{}` |
| `EVENT_CONTINUE` | 1 | Scripts | instant | none | `{}` |
| `EVENT_WAIT_FOR_BUTTON` | 1 | Joypad Input | instant | `button`:enum, `buttons`:array, `overrideButton`:boolean | `{"button":"A","buttons":["A"],"overrideButton":false}` |
| `EVENT_REMOVE_BUTTON_SCRIPT` | 1 | Joypad Input | instant | `button`:enum, `buttons`:array | `{"button":"A","buttons":["A"]}` |
| `EVENT_PAUSE_UNTIL_BUTTON_PRESSED` | 1 | Joypad Input | blocking | `button`:enum, `buttons`:array | `{"button":"A","buttons":["A"]}` |
| `EVENT_WAIT_INPUT` | 1 | Joypad Input | blocking | `action`:string*, `timeoutFrames`:integer [0…∞] | `{"action":"confirm","timeoutFrames":0}` |
| `EVENT_TRIGGER_SET_ENABLED` | 1 | Scene | instant | `triggerId`:string*, `enabled`:boolean | `{"triggerId":"","enabled":true}` |
| `EVENT_IF_ACTOR_FACING` | 1 | Actor | instant | `lookX`:boolean, `lookY`:boolean, `distanceX`:integer [0…32767], `distanceY`:integer [0…32767], `distanceXUnit`:enum, `distanceYUnit`:enum, `actorId`:string*, `targetActorId`:string* | `{"lookX":true,"lookY":true,"distanceX":0,"distanceY":0,"distanceXUnit":"pixels","distanceYUnit":"pixels","actorId":"__SELF__","targetActorId":"__PLAYER__"}` |
| `EVENT_IF_BUTTON_HELD` | 1 | Joypad Input | instant | `button`:enum*, `buttons`:array | `{"button":"A","buttons":["A"]}` |
| `EVENT_INPUT_ENABLE` | 1 | Joypad Input | instant | `group`:enum* | `{"group":"gameplay"}` |
| `EVENT_INPUT_DISABLE` | 1 | Joypad Input | instant | `group`:enum* | `{"group":"gameplay"}` |

## Reading the contract

The application can still reject an event when a referenced resource is missing, the event is not valid in the current context, or a value fails runtime validation. Use the event gear menu and picker to see the choices available for the selected scene, actor, trigger or script. For editing nested blocks and inserting or copying events, see [Organize events](../guides/event-organization).
