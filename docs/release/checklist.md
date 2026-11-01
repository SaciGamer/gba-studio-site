---
sidebar_position: 1
---

# Release checklist

Before distributing a ROM:

- Build the project from a clean state and inspect the compiler output.
- Run every scene transition, interaction, dialogue choice and audio cue in an emulator.
- Check the generated ROM on a second emulator when possible.
- Verify that all referenced sprites, backgrounds, palettes, music and sound resources are committed.
- Check that loops terminate and that scripts do not depend on editor-only state.
- Test input on the intended controller layout.
- Keep the project source and the exact build configuration beside the released ROM.

Hardware testing is the final authority for timing, memory pressure, audio behavior and visual differences. If a feature works in the editor but fails in the ROM, start with the build log and the generated artifacts, then reduce the scene or script to the smallest reproducible case.

- Test a full checkpoint load and a variable-only load separately, including the success actions of each Game Data event.
- Restart the emulator and confirm persistent counters remain independent of the checkpoint slot.
- Check every scene-type input mapping, overlapping disabled groups and dialogue confirmation.
- Review variable-expanded dialogue/UI byte counts and the expected longest runtime values.
- Exercise offscreen actors, prefab spawning, nested previews and the selected camera-follow persistence policy.
