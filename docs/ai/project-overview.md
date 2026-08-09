# Fantasyland Project Overview

Fantasyland contains two independent applications.

## Chrome extension

Location: `src/plugin`

Runtime: Chrome Manifest V3

Primary technologies: JavaScript, HTML, CSS, Chrome extension APIs

Entry point: `src/plugin/manifest.json`

The extension injects scripts into selected `fantasyland.ru` pages and uses a background service worker for messaging, inventory loading, and extension storage.

## Map application

Location: `src/map-source`

Runtime: browser application served and built with Vite

Primary technologies: React, TypeScript, Vite

Entry point: `src/map-source/start.tsx`

The application renders the map through `src/map-source/App.tsx` and the map feature modules.

## Boundary

The two applications are separate. The plugin must not import React or map-source modules. The map application must not depend on Chrome extension runtime APIs unless a deliberate integration is documented first.

Shared data formats and API assumptions should be documented before changing them.
