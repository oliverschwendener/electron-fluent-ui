import { BrowserWindow } from "electron";
import { join } from "path";

export class WindowManager {
    private mainWindow: null | BrowserWindow;

    public constructor() {
        this.mainWindow = null;
    }

    public createMainWindow(): void {
        this.mainWindow = new BrowserWindow({
            webPreferences: {
                contextIsolation: true,
                enableRemoteModule: false,
                nodeIntegration: false,
                preload: join(__dirname, "preload.js"),
            },
        });

        this.mainWindow.loadURL(join(__dirname, "..", "views", "main.html"));
    }
}
