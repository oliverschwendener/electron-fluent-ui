/* eslint-disable @typescript-eslint/no-explicit-any */
import { IpcRendererEvent } from "electron/common";
import { IpcChannel } from "./IpcChannel";

export interface IpcRendererBridge {
    readonly send: (channel: IpcChannel, ...arg: any) => void;
    readonly sendSync: (channel: IpcChannel, ...arg: any) => any;
    readonly on: (channel: IpcChannel, listener: (event: IpcRendererEvent, ...arg: any) => void) => void;
    readonly once: (channel: IpcChannel, listener: (event: IpcRendererEvent, ...arg: any) => void) => void;
}

export interface Bridge {
    ipcRenderer: IpcRendererBridge;
}
