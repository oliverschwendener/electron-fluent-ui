/**
 * The IPC contract between main and renderer.
 *
 * Channel names and payload types live here so that main, preload and
 * renderer all reference the exact same definitions.
 */
export const IpcChannels = {
  getVersions: "app:get-versions",
} as const;

export interface Versions {
  electron: string;
  chromium: string;
  node: string;
}

/**
 * The API exposed to the renderer on `window.api` via the preload bridge.
 */
export interface RendererApi {
  getVersions: () => Promise<Versions>;
}
