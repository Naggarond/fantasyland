# Fantasyland Copilot Instructions

This repository contains two separate subprojects:

- `src/plugin`: a Chrome Manifest V3 extension written primarily in JavaScript.
- `src/map-source`: a React and Vite application written in TypeScript.

Keep changes scoped to the subproject being edited. Do not mix their frameworks, runtime APIs, or build configuration.

Read the applicable file in `.github/instructions/` before changing files in either subproject. Use the guides in `docs/ai/` for architecture and workflow details.

Preserve existing public contracts, including extension message types, Chrome storage keys, manifest permissions and URL matches, and map snapshot data shapes. Avoid unrelated refactoring.
