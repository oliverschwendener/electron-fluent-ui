import { BrowserWindow, NativeTheme } from "electron";
import { join } from "path";
import { IpcChannel } from "../shared/IpcChannel";

export class WindowManager {
    private readonly preloadScriptFilePath = join(__dirname, "Preload.js");
    private readonly mainHtmlFilePath = join(__dirname, "..", "views", "main.html");

    private mainWindow: BrowserWindow | null = null;

    public constructor(private readonly nativeTheme: NativeTheme) {
        this.registerNativeThemeEventListeners();
    }

    public createMainWindow(): void {
        this.mainWindow = new BrowserWindow({
            autoHideMenuBar: true,
            webPreferences: {
                preload: this.preloadScriptFilePath,
            },
        });

        this.mainWindow.loadFile(this.mainHtmlFilePath);
    }

    public themeShouldUseDarkColors(): boolean {
        return this.nativeTheme.shouldUseDarkColors;
    }

    private registerNativeThemeEventListeners(): void {
        this.nativeTheme.addListener("updated", () => {
            for (const browserWindow of BrowserWindow.getAllWindows()) {
                browserWindow.webContents.send(IpcChannel.nativeThemeChanged);
            }
        });
    }
}
