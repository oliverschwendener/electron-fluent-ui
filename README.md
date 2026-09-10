# electron-fluent-ui

An Electron starter with a strict main/renderer/shared split.

## Stack

- [Electron](https://www.electronjs.org) with a context-isolated, sandboxed renderer
- [electron-vite](https://electron-vite.org) (Vite) for dev server, HMR and builds
- [TypeScript](https://www.typescriptlang.org) with project references
- [React](https://react.dev) + [React Router](https://reactrouter.com) (hash routing)
- [Fluent UI React v9](https://react.fluentui.dev) (`@fluentui/react-components` +
  `@fluentui/react-icons`) for styled, accessible components — themed light/dark via
  `FluentProvider` following the OS preference. Page layout uses Fluent's `makeStyles`
  (Griffel) with design tokens — there are no CSS files
- [Vitest](https://vitest.dev) for tests, [oxlint](https://oxc.rs) for linting, oxfmt for formatting

## Demo pages

- **Home** — a gallery of Fluent UI components (inputs, overlays, feedback) plus the
  Electron/Chromium/Node versions fetched from the main process over typed IPC
- **Dashboard** — an analytics-style example screen (stat cards, a dependency-free
  bar chart, progress bars, a data table) showing how a real app screen looks
- **About** — the stack and project structure, rendered with Fluent tabs

The top navigation is a Fluent `TabList` wired to React Router.

## Project structure

```
src/
  main/       Electron main process (Node)      → may import from shared only
  preload/    contextBridge / typed IPC surface → may import from shared only
  renderer/   React app                         → may import from shared only
  shared/     types shared by all               → imports from none of them
```

The boundaries are enforced twice:

1. **TypeScript project references** — `tsconfig.shared.json`, `tsconfig.node.json`
   (main + preload) and `tsconfig.web.json` (renderer) each have a strict `include`
   list and reference only the shared project. A forbidden import fails
   `npm run typecheck` with `TS6307`.
2. **oxlint `no-restricted-imports`** — per-directory overrides in
   [.oxlintrc.json](.oxlintrc.json) reject forbidden imports at lint time with a
   descriptive message. The renderer and shared code are additionally barred from
   importing `electron` directly.

## IPC pattern

The IPC contract lives in [src/shared/ipc.ts](src/shared/ipc.ts): channel names and
payload types are defined once and used by all sides. To add a channel:

1. Add the channel name and types to `src/shared/ipc.ts` (extend `RendererApi`).
2. Handle it in the main process (`ipcMain.handle` in `src/main/index.ts`).
3. Forward it in the preload (`src/preload/index.ts`) — the `RendererApi` type
   ensures preload and renderer stay in sync.
4. Call it in the renderer via `window.api.…` (typed through
   `src/renderer/env.d.ts`).

The preload script is built as CommonJS so the renderer can keep `sandbox: true`
(Electron does not support ESM preload scripts in sandboxed renderers).

## Scripts

| Script                 | Purpose                                     |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Start the app in dev mode with HMR          |
| `npm run build`        | Typecheck, then build main/preload/renderer |
| `npm run start`        | Preview the production build in Electron    |
| `npm run typecheck`    | `tsc -b` over all project references        |
| `npm run test`         | Run Vitest                                  |
| `npm run lint`         | Run oxlint                                  |
| `npm run format`       | Format with oxfmt                           |
| `npm run format:check` | Check formatting (CI)                       |

## Not included (yet)

- Packaging/distribution (electron-builder or Forge)
- Auto-updates, app icons, CI
