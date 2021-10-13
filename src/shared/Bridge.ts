import { IpcRendererEvent } from "electron/common";
import { IpcChannel } from "./IpcChannel";

export interface IpcRendererBridge {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly send: (channel: IpcChannel, ...arg: any) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly sendSync: (channel: IpcChannel, ...arg: any) => any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly on: (channel: IpcChannel, listener: (event: IpcRendererEvent, ...arg: any) => void) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly once: (channel: IpcChannel, listener: (event: IpcRendererEvent, ...arg: any) => void) => void;
}

export interface Bridge {
    ipcRenderer: IpcRendererBridge;
}
