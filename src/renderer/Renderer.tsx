import { createRoot } from "react-dom/client";
import { IpcChannel } from "../shared/IpcChannel";
import { App } from "./App";

window.ipcRenderer.send(IpcChannel.rendererStarted);

document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("react-app");

    if (rootElement) {
        createRoot(rootElement).render(<App />);
    }
});
