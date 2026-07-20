import { join } from "node:path";

import { IpcChannels, type Versions } from "@shared/ipc";
import { BrowserWindow, app, ipcMain } from "electron";

const createWindow = (): void => {
  const window = new BrowserWindow({
    width: 960,
    height: 640,
    webPreferences: {
      preload: join(import.meta.dirname, "../preload/index.cjs"),
      contextIsolation: true,
      sandbox: true,
    },
  });

  // In development, electron-vite serves the renderer from its dev server.
  if (process.env["ELECTRON_RENDERER_URL"]) {
    void window.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    void window.loadFile(join(import.meta.dirname, "../renderer/index.html"));
  }
};

const registerIpcHandlers = (): void => {
  ipcMain.handle(
    IpcChannels.getVersions,
    (): Versions => ({
      electron: process.versions.electron ?? "unknown",
      chromium: process.versions.chrome ?? "unknown",
      node: process.versions.node,
    }),
  );
};

void app.whenReady().then(() => {
  registerIpcHandlers();
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
