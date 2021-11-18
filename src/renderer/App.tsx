import { initializeIcons, Stack, StackItem } from "@fluentui/react";
import { Theme as FluentUiTheme, ThemeProvider } from "@fluentui/react/lib/Theme";
import { IpcRenderer } from "electron";
import React, { FC, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Buttons } from "./Buttons";
import { Checkboxes } from "./Checkboxes";
import { Choicegroup } from "./Choicegroup";
import { Dialogs } from "./Dialogs";
import { Dropdowns } from "./Dropdowns";
import { Navigation } from "./Navigation";
import { Panels } from "./Panels";
import { ProgressIndicators } from "./ProgressIndicators";
import { Sliders } from "./Sliders";
import { Spinners } from "./Spinners";
import { TextFields } from "./TextFields";
import { Theme } from "./Theme";
import { UeliColorThemes } from "./Themes";
import { Toggles } from "./Toggles";
import { Welcome } from "./Welcome";

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
        <ThemeProvider theme={themeMapping[currentTheme]} applyTo="body">
            <BrowserRouter>
                <Stack horizontal verticalFill>
                    <StackItem verticalFill>
                        <Navigation />
                    </StackItem>
                    <StackItem grow={1}>
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
