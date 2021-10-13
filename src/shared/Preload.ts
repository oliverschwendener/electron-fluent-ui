import { contextBridge, ipcRenderer } from "electron";
import { IpcRendererEvent } from "electron/common";
import { Bridge } from "./Bridge";
import { IpcChannel } from "./IpcChannel";

const bridge: Bridge = {
    ipcRenderer: {
        send: ipcRenderer.send,
        sendSync: ipcRenderer.sendSync,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        on: (channel: IpcChannel, listener: (event: IpcRendererEvent, ...args: any[]) => void) =>
            ipcRenderer.on(channel, listener),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        once: (channel: IpcChannel, listener: (event: IpcRendererEvent, ...args: any[]) => void) =>
            ipcRenderer.once(channel, listener),
    },
};

contextBridge.exposeInMainWorld("Bridge", bridge);
