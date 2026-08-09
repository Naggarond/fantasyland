# Map Source Guide

## Commands

Run commands from `src/map-source`:

```text
npm run start
npm run build
```

The Vite development server is configured to use port `5000`.

## Structure

- `start.tsx`: React application bootstrap
- `App.tsx`: top-level application component
- `features/map/Map.tsx`: map rendering and interaction
- `features/map/types.ts`: map domain types
- `features/map/utils.ts`: map-related transformations and helpers
- `features/map/map.snapshot.json`: map source data
- `Loot/`: loot-related UI and behavior

Keep domain logic near the map feature and avoid placing map calculations directly in the top-level component.

## Validation

Run `npm run build` after TypeScript, React, or Vite changes. Check the browser at the configured development URL after interaction or rendering changes.
