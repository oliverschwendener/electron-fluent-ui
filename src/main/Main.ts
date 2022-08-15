import { app, ipcMain, nativeTheme } from "electron";
import { MainApplication } from "./MainApplication";
import { WindowManager } from "./WindowManager";

new MainApplication(app, ipcMain, new WindowManager(nativeTheme)).start();
