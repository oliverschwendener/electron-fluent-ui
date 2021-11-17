import { app, ipcMain } from "electron";
import { MainApplication } from "./MainApplication";
import { WindowManager } from "./WindowManager";

new MainApplication(app, ipcMain, new WindowManager()).start();
