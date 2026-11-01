# Website

This repository contains the source code for the GBA Studio documentation website.
Changes to pages, navigation, translations and images are made directly in the
site source tree and then generated into static files for publication.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server for reviewing changes to the
site source code. Most edits are reflected live without restarting the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Verification

Run `npm run typecheck` and `npm run build` before publishing. The build covers
English, Portuguese and Spanish. Documentation and screenshot verification tools
are maintained in the sibling application repository under `tools/verification`.
