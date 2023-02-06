import { contextBridge, ipcRenderer } from "electron";
import { ContextBridge } from "./Bridge";

contextBridge.exposeInMainWorld("ContextBridge", <ContextBridge>{
    reactAppStarted: () => ipcRenderer.send("reactAppStarted"),
    onNativeThemeChanged: (callback: () => void) => ipcRenderer.on("nativeThemeChanged", callback),
    themeShouldUseDarkColors: () => ipcRenderer.sendSync("themeShouldUseDarkColors"),
    getContext: () => ipcRenderer.sendSync("getContext"),
});
