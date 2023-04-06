import { app, BrowserWindow, ipcMain, IpcMainEvent, nativeTheme } from "electron";
import { join } from "path";

const createBrowserWindow = (appIsPackaged: boolean): BrowserWindow => {
    const preloadScriptFilePath = appIsPackaged
        ? join(__dirname, "..", "..", "dist-electron", "preload", "index.js")
        : join(__dirname, "..", "preload", "index.js");

    return new BrowserWindow({
        autoHideMenuBar: true,
        webPreferences: {
            preload: preloadScriptFilePath,
        },
    });
};

const loadFileOrUrl = (browserWindow: BrowserWindow, appIsPackaged: boolean) => {
    appIsPackaged
        ? browserWindow.loadFile(join(__dirname, "..", "..", "dist", "index.html"))
        : browserWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
};

const registerIpcEventListeners = () => {
    ipcMain.on("reactAppStarted", () => console.log("React app started"));

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
    const mainWindow = createBrowserWindow(app.isPackaged);
    loadFileOrUrl(mainWindow, app.isPackaged);
    registerIpcEventListeners();
    registerNativeThemeEventListeners(BrowserWindow.getAllWindows());
})();
