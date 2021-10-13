import { App } from "electron";
import { WindowManager } from "./WindowManager";

export class MainApplication {
    public constructor(private readonly electronApp: App, private readonly windowManager: WindowManager) {}

    public start(): void {
        this.registerAppEventListeners();
    }

    private registerAppEventListeners(): void {
        this.electronApp.on("ready", () => this.windowManager.createMainWindow());
    }
}
