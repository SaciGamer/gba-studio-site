---
sidebar_position: 1
title: Contributing
description: Contribute to the GBA Studio engine and documentation site.
---

# Contributing

## Engine changes

Install the monorepo dependencies, run the main and renderer builds, then run the focused tests and the generated-template verification before opening a change. Keep generated fixtures and logs that explain a compiler or runtime change.

Every event change must update the shared catalog, editor registration, compiler registry, emitted command, generated runtime handler, tests and `reference/events.md`. Keep current event contracts on schema version 1. Verify the event catalog, generated ABI and runtime behavior together.

## Site changes

Edit the source files under `docs/`, `i18n/`, `static/` and the site navigation
files directly. Keep English as the source documentation, keep images under
`static/img`, use stable sidebar IDs and run `npm run typecheck` plus
`npm run build` in `gba-studio-site`. Start the local site from its source code
to review changes before publishing. Do not mix maintainer instructions into
the end-user installation tutorial.

## Terminology

* **scene**: a composed game space with layers and actors.
* **resource**: an editable project object such as a sprite, palette, sound or scene.
* **event**: a serializable command in a script.
* **payload**: the arguments carried by an event.
* **handle**: a named graph connection such as `next`, `then` or `else`.
* **Butano**: the C++ GBA engine/toolchain used by the generated project.
