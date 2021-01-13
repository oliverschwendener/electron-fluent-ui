import { BrowserWindow } from "electron";
import { join } from "path";

export class WindowManager {
    private readonly preloadScriptFilePath: string;
    private readonly mainHtmlFilePath: string;
    private mainWindow: null | BrowserWindow;

    public constructor() {
        this.preloadScriptFilePath = join(__dirname, "Preload.js");
        this.mainHtmlFilePath = join(__dirname, "..", "views", "main.html");

        this.mainWindow = null;
    }

    public createMainWindow(): void {
        this.mainWindow = new BrowserWindow({
            webPreferences: {
                contextIsolation: true,
                enableRemoteModule: false,
                nodeIntegration: false,
                preload: this.preloadScriptFilePath,
            },
        });

        this.mainWindow.loadFile(this.mainHtmlFilePath);
    }
}
