import { resolve } from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "electron-vite";

const sharedAlias = {
  "@shared": resolve(import.meta.dirname, "src/shared"),
};

export default defineConfig({
  main: {
    resolve: { alias: sharedAlias },
  },
  preload: {
    resolve: { alias: sharedAlias },
    build: {
      rollupOptions: {
        output: {
          // Sandboxed preload scripts cannot be ES modules, so build the
          // preload as CommonJS. This keeps `sandbox: true` possible.
          format: "cjs",
          entryFileNames: "[name].cjs",
        },
      },
    },
  },
  renderer: {
    resolve: {
      alias: {
        ...sharedAlias,
        "@renderer": resolve(import.meta.dirname, "src/renderer/src"),
      },
    },
    plugins: [react()],
  },
});
