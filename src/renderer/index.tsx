import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App } from "./Components";

document.addEventListener("DOMContentLoaded", () => {
    createRoot(document.getElementById("react-app") as HTMLDivElement).render(
        <HashRouter>
            <App />
        </HashRouter>,
    );
});
