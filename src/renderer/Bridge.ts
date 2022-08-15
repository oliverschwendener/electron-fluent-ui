import { IpcRendererEvent } from "electron";
import { IpcChannel } from "../shared/IpcChannel";

export interface Bridge {
    send<T>(channel: IpcChannel, ...args: T[]): void;
    sendSync<ArgumentType, ReturnType>(channel: IpcChannel, ...args: ArgumentType[]): ReturnType;
    on<T>(channel: IpcChannel, eventHandler: (event: IpcRendererEvent, ...args: T[]) => void): void;
}
