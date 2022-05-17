import { render } from "react-dom";
import { IpcChannel } from "../shared/IpcChannel";
import { App } from "./App";

window.ipcRenderer.send(IpcChannel.rendererStarted);

document.addEventListener("DOMContentLoaded", () =>
    render(<App ipcRenderer={window.ipcRenderer}></App>, document.getElementById("react-app"))
);
