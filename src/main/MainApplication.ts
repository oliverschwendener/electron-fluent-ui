import { App, IpcMain } from "electron";
import { IpcChannel } from "../shared/IpcChannel";
import { WindowManager } from "./WindowManager";

export class MainApplication {
    public constructor(
        private readonly electronApp: App,
        private readonly ipcMain: IpcMain,
        private readonly windowManager: WindowManager
    ) {}

    public start(): void {
        this.registerAppEventListeners();
        this.registerIpcEventListeners();
    }

    private registerAppEventListeners(): void {
        this.electronApp.on("ready", () => this.windowManager.createMainWindow());
    }

    private registerIpcEventListeners(): void {
        this.ipcMain.on(IpcChannel.reactAppStarted, () => console.log("React app started"));
    }
}
