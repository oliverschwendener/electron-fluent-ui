import { IpcChannels, type RendererApi } from "@shared/ipc";
import { contextBridge, ipcRenderer } from "electron";

const api: RendererApi = {
  getVersions: () => ipcRenderer.invoke(IpcChannels.getVersions),
};

contextBridge.exposeInMainWorld("api", api);
