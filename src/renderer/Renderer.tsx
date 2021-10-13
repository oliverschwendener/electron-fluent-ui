import React from "react";
import { render } from "react-dom";
import { IpcRendererBridge } from "../shared/Bridge";
import { IpcChannel } from "../shared/IpcChannel";
import { App } from "./App";

const ipcRenderer: IpcRendererBridge = window.Bridge.ipcRenderer;
ipcRenderer.send(IpcChannel.rendererStarted);

document.addEventListener("DOMContentLoaded", () =>
    render(<App ipcRenderer={ipcRenderer}></App>, document.getElementById("react-app"))
);
