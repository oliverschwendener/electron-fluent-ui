import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";
import { Bridge } from "../renderer/Bridge";
import { IpcChannel } from "./IpcChannel";

const bridge: Bridge = {
    send: <T>(channel: IpcChannel, ...args: T[]) => ipcRenderer.send(channel, ...args),

    sendSync: <ArgumentType, ReturnType>(channel: IpcChannel, ...args: ArgumentType[]): ReturnType =>
        ipcRenderer.sendSync(channel, ...args),

    on: <T>(channel: IpcChannel, eventHandler: (event: IpcRendererEvent, ...args: T[]) => void) =>
        ipcRenderer.on(channel, eventHandler),
};

contextBridge.exposeInMainWorld("Bridge", bridge);
