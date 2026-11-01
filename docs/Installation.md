---
sidebar_position: 2
title: Installation
description: Install GBA Studio and prepare the Windows toolchain.
---

# Installation

## Requirements

GBA Studio is a Windows desktop application. A usable installation needs:

- a Windows account that can read and write the project directory;
- the GBA Studio release package;
- the compiler, Makefile and Butano tools included or configured by that release;
- the integrated EmulatorJS/mGBA preview; an external [mGBA](https://mgba.io/) installation is optional for independent ROM testing.

The current repository package version is `0.5.0`; a packaged release may use a different version. The exact compiler/toolchain versions are release-dependent. Keep the versions shipped with the release together instead of mixing binaries from another project. Node/Yarn dependencies are maintainer requirements, not prerequisites for a packaged end-user installation.

## First launch

1. Extract or install GBA Studio in a folder that is not protected by Windows application permissions.
2. Launch the executable.
3. Create a project or open an existing `.gbaproj` project.
4. Confirm that the project folder is writable.
5. Use **Play** only after the project has a valid scene and the required assets are available.

## Project location

Keep the project source in a stable folder and back up the whole project, including `project/` and `assets/`. Do not rely on the temporary build directory as a backup: it contains generated or intermediate files.

## Common first-launch problems

- **The application cannot save:** move the project to a writable folder and check Windows Defender or antivirus exclusions.
- **Build tools are not found:** use the toolchain that belongs to the release and verify its configured paths.
- **A ROM is not generated:** inspect the build log first; missing assets, invalid resource fields and compiler errors are reported there.
- **The integrated emulator does not open:** check the build log and the bundled emulator files. Test the generated ROM in external mGBA to separate build issues from preview issues.
