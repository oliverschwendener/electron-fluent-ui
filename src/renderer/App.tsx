import { initializeIcons, Stack, StackItem } from "@fluentui/react";
import { Theme as FluentUiTheme, ThemeProvider } from "@fluentui/react/lib/Theme";
import { IpcRenderer } from "electron";
import React, { FC, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Buttons } from "./Components/Buttons";
import { Checkboxes } from "./Components/Checkboxes";
import { Choicegroup } from "./Components/Choicegroup";
import { Dialogs } from "./Components/Dialogs";
import { Dropdowns } from "./Components/Dropdowns";
import { Navigation } from "./Components/Navigation";
import { Panels } from "./Components/Panels";
import { ProgressIndicators } from "./Components/ProgressIndicators";
import { Sliders } from "./Components/Sliders";
import { Spinners } from "./Components/Spinners";
import { TextFields } from "./Components/TextFields";
import { Toggles } from "./Components/Toggles";
import { Welcome } from "./Components/Welcome";
import { Theme } from "./Theme";
import { UeliColorThemes } from "./Themes";

export const App: FC<{ ipcRenderer: IpcRenderer }> = () => {
    initializeIcons();

    const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.UeliDark);
    const changeTheme = (nextTheme: string) => {
        Object.values(Theme).forEach((theme) => {
            if (theme.toString() === nextTheme) {
                setCurrentTheme(theme);
            }
        });
    };

    const themeMapping: Record<Theme, FluentUiTheme> = {
        UeliDark: UeliColorThemes.UeliDark,
        UeliLight: UeliColorThemes.UeliLight,
        WindowsDark: UeliColorThemes.WindowsDark,
        WindowsLight: UeliColorThemes.WindowsLight,
    };

    return (
        <ThemeProvider theme={themeMapping[currentTheme]} applyTo="body" style={{ height: "100%" }}>
            <BrowserRouter>
                <Stack horizontal verticalFill>
                    <StackItem verticalFill>
                        <div style={{ height: "100%", overflow: "auto" }}>
                            <Navigation />
                        </div>
                    </StackItem>
                    <StackItem grow={1} tokens={{ padding: 20 }}>
                        <Route path="/" exact>
                            <Welcome currentTheme={currentTheme} onThemeChange={changeTheme} />
                        </Route>
                        <Route path="/button" exact>
                            <Buttons />
                        </Route>
                        <Route path="/checkbox" exact>
                            <Checkboxes />
                        </Route>
                        <Route path="/choicegroup" exact>
                            <Choicegroup />
                        </Route>
                        <Route path="/dropdown" exact>
                            <Dropdowns />
                        </Route>
                        <Route path="/progress" exact>
                            <ProgressIndicators />
                        </Route>
                        <Route path="/dialog" exact>
                            <Dialogs />
                        </Route>
                        <Route path="/text-field" exact>
                            <TextFields />
                        </Route>
                        <Route path="/toggle" exact>
                            <Toggles />
                        </Route>
                        <Route path="/slider" exact>
                            <Sliders />
                        </Route>
                        <Route path="/spinner" exact>
                            <Spinners />
                        </Route>
                        <Route path="/panel" exact>
                            <Panels />
                        </Route>
                    </StackItem>
                </Stack>
            </BrowserRouter>
        </ThemeProvider>
    );
};
