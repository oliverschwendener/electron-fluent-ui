import { App } from "electron";
import { WindowManager } from "./WindowManager";

export class MainApplication {
    public constructor(private readonly app: App, private readonly windowManager: WindowManager) {}

    public start(): void {
        this.registerAppEventListeners();
    }

    private registerAppEventListeners(): void {
        this.app.on("ready", () => {
            this.windowManager.createMainWindow();
        });
    }
}
