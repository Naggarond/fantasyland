---
description: "Instructions for the React and Vite map application under src/map-source."
applyTo: "src/map-source/**/*"
---

# Map Source Instructions

The files under `src/map-source` belong to a React application built with Vite and TypeScript.

- Use TypeScript and React for new implementation.
- Keep map domain types in `src/map-source/features/map/types.ts`.
- Keep map transformations and calculations in the existing map utility modules.
- Keep components focused on rendering and user interaction.
- Preserve the structure of `src/map-source/features/map/map.snapshot.json`.
- Do not introduce Chrome extension runtime dependencies unless explicitly required.
- Run `npm run build` from `src/map-source` after changes to this subproject.

For detailed workflows, read `docs/ai/map-source-guide.md`.
