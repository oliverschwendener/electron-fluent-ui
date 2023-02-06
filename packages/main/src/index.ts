import { app, BrowserWindow, ipcMain, IpcMainEvent, nativeTheme } from "electron";
import { hostname, userInfo } from "os";
import { join } from "path";

const createBrowserWindow = (): BrowserWindow => {
    return new BrowserWindow({
        autoHideMenuBar: true,
        webPreferences: {
            preload: join(__dirname, "..", "..", "preload", "dist", "index.cjs"),
        },
    });
};

const loadFileOrUrl = (browserWindow: BrowserWindow, appIsPackaged: boolean) => {
    appIsPackaged
        ? browserWindow.loadFile(join(__dirname, "..", "..", "renderer", "dist", "index.html"))
        : browserWindow.loadURL(import.meta.env.VITE_DEV_SERVER_URL);
};

const registerIpcEventListeners = () => {
    ipcMain.on("reactAppStarted", () => console.log("React app started"));

    ipcMain.on("themeShouldUseDarkColors", (event: IpcMainEvent) => {
        event.returnValue = nativeTheme.shouldUseDarkColors;
    });

    ipcMain.on("getContext", (event) => {
        event.returnValue = {
            userName: userInfo().username,
            computerName: hostname(),
        };
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
    loadFileOrUrl(mainWindow, app.isPackaged);
    registerIpcEventListeners();
    registerNativeThemeEventListeners(BrowserWindow.getAllWindows());
})();
