import { app } from "electron";
import { MainApplication } from "./MainApplication";
import { WindowManager } from "./WindowManager";

new MainApplication(app, new WindowManager()).start();
