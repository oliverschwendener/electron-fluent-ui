import { App } from "./App";
import { IpcChannel } from "../shared/IpcChannel";
import React from "react";
import { render } from "react-dom";

window.ipcRenderer.send(IpcChannel.rendererStarted);

document.addEventListener("DOMContentLoaded", () =>
    render(<App ipcRenderer={window.ipcRenderer}></App>, document.getElementById("react-app"))
);
