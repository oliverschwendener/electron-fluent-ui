import type { RendererApi } from "@shared/ipc";

declare global {
  interface Window {
    /** Exposed by the preload script via `contextBridge`. */
    api: RendererApi;
  }
}

export {};
