---
sidebar_position: 4
title: Debugging builds
description: Diagnose resource, compiler, linker and ROM build failures.
---

# Debugging builds

Use this order when a build fails:

1. Fix schema and missing-resource errors in the editor.
2. Confirm every asset path and generated symbol, especially music, sound and graphics.
3. Check the ARM compiler and Makefile output for the first actual error.
4. Clean the derived build output and rebuild from the saved project.
5. Test the new ROM in mGBA before trying hardware.

Do not patch generated headers or C++ to hide an invalid resource. If the same source project reproduces the failure, keep the log and the smallest failing resource set for a bug report.
