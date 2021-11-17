import { contextBridge, ipcRenderer } from "electron";
import { IpcRendererEvent } from "electron/common";
import { Bridge } from "./Bridge";
import { IpcChannel } from "./IpcChannel";

contextBridge.exposeInMainWorld("Bridge", <Bridge>{
    ipcRenderer: {
        send: <T>(channel: IpcChannel, ...args: T[]) => ipcRenderer.send(channel.toString(), args),

        sendSync: <ArgumentType, ReturnType>(channel: IpcChannel, ...args: ArgumentType[]): ReturnType =>
            ipcRenderer.sendSync(channel.toString(), args),

        on: <T>(channel: IpcChannel, listener: (event: IpcRendererEvent, ...args: T[]) => void) =>
            ipcRenderer.on(channel.toString(), listener),

        once: <T>(channel: IpcChannel, listener: (event: IpcRendererEvent, ...args: T[]) => void) =>
            ipcRenderer.once(channel.toString(), listener),

        invoke: <ArgumentType, ReturnType>(channel: IpcChannel, ...args: ArgumentType[]): Promise<ReturnType> =>
            ipcRenderer.invoke(channel.toString(), args),
    },
});
