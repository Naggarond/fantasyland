# Chrome Extension Guide

## Structure

- `manifest.json`: permissions, host matches, service worker, popup, and content scripts
- `background/background.js`: service-worker message handling, inventory loading, and storage updates
- `content_scripts/`: scripts injected into matching game pages
- `windows/`, `popups/`, and `menu/`: extension UI and controls
- `feature/`: reusable extension features

## Important contracts

Before changing extension behavior, check both the sender and receiver of a runtime message. Preserve message `type` values and payload properties.

Storage keys currently include `Loot` and `LootHistory`. Changes to their value shapes affect background code and UI consumers.

Changes to URL matching, permissions, or web-accessible resources must be reviewed against `manifest.json`.

## Validation

There is no root extension build script currently. Validate extension changes by checking the manifest JSON and loading `src/plugin` as an unpacked extension in Chrome when browser behavior changes.
