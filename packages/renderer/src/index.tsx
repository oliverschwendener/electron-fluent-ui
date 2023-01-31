import { createRoot } from "react-dom/client";
import { App } from "./App";

document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("react-app");

    if (rootElement) {
        createRoot(rootElement).render(<App />);
    }
});
