---
description: "Instructions for the Chrome Manifest V3 extension under src/plugin."
applyTo: "src/plugin/**/*"
---

# Plugin Instructions

The files under `src/plugin` belong to a Chrome Manifest V3 extension targeting `fantasyland.ru`.

- Use the existing JavaScript style and Chrome extension APIs.
- Treat `src/plugin/manifest.json` as the extension contract.
- Preserve content-script URL matches, permissions, web-accessible resources, and message payload shapes.
- Preserve Chrome storage keys, including `Loot` and `LootHistory`.
- Keep background code compatible with Manifest V3 service-worker restarts.
- Do not introduce React, Vite, or map-source imports into this subproject.
- Check the relevant content script, background handler, popup, or window before changing a message or storage contract.

For detailed workflows, read `docs/ai/plugin-guide.md`.
