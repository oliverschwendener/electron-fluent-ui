import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { App } from "./Components/App";

ReactDOM.render(
    <StrictMode>
        <FluentProvider theme={teamsLightTheme}>
            <App />
        </FluentProvider>
    </StrictMode>,
    document.getElementById("root")
);
