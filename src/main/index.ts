import { BrowserWindow, app, ipcMain, nativeTheme, type IpcMainEvent } from "electron";
import { join } from "path";

const createBrowserWindow = (): BrowserWindow => {
    const preloadScriptFilePath = join(__dirname, "..", "dist-preload", "index.js");

    return new BrowserWindow({
        autoHideMenuBar: true,
        backgroundMaterial: "mica",
        vibrancy: "header",
        webPreferences: {
            preload: preloadScriptFilePath,
        },
        icon: join(__dirname, "..", "build", "app-icon-dark.png"),
    });
};

const loadFileOrUrl = (browserWindow: BrowserWindow) => {
    if (process.env.VITE_DEV_SERVER_URL) {
        browserWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
    } else {
        browserWindow.loadFile(join(__dirname, "..", "dist-renderer", "index.html"));
    }
};

const registerIpcEventListeners = () => {
    ipcMain.on("themeShouldUseDarkColors", (event: IpcMainEvent) => {
        event.returnValue = nativeTheme.shouldUseDarkColors;
    });
};

const registerNativeThemeEventListeners = (allBrowserWindows: BrowserWindow[]) => {
    nativeTheme.addListener("updated", () => {
        for (const browserWindow of allBrowserWindows) {
            browserWindow.webContents.send("nativeThemeChanged");
        }
    });
};

(async () => {
    await app.whenReady();
    const mainWindow = createBrowserWindow();
    loadFileOrUrl(mainWindow);
    registerIpcEventListeners();
    registerNativeThemeEventListeners(BrowserWindow.getAllWindows());
})();
