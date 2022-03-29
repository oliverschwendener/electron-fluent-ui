import { Theme as FluentUiTheme, ThemeProvider } from "@fluentui/react/lib/Theme";
import { HashRouter, Route, Routes } from "react-router-dom";
import React, { FC, useState } from "react";
import { Stack, StackItem, initializeIcons } from "@fluentui/react";
import { Buttons } from "./Components/Buttons";
import { Checkboxes } from "./Components/Checkboxes";
import { Choicegroup } from "./Components/Choicegroup";
import { Dialogs } from "./Components/Dialogs";
import { Dropdowns } from "./Components/Dropdowns";
import { IpcRenderer } from "electron";
import { Navigation } from "./Components/Navigation";
import { Panels } from "./Components/Panels";
import { ProgressIndicators } from "./Components/ProgressIndicators";
import { Sliders } from "./Components/Sliders";
import { Spinners } from "./Components/Spinners";
import { TextFields } from "./Components/TextFields";
import { Theme } from "./Theme";
import { Toggles } from "./Components/Toggles";
import { UeliColorThemes } from "./Themes";
import { Welcome } from "./Components/Welcome";

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
            <HashRouter>
                <Stack horizontal verticalFill>
                    <StackItem verticalFill>
                        <div style={{ height: "100%", overflow: "auto" }}>
                            <Navigation />
                        </div>
                    </StackItem>
                    <StackItem grow={1} tokens={{ padding: 20 }}>
                        <Routes>
                            <Route
                                path="/"
                                element={<Welcome currentTheme={currentTheme} onThemeChange={changeTheme} />}
                            />
                            <Route path="/button" element={<Buttons />} />
                            <Route path="/checkbox" element={<Checkboxes />} />
                            <Route path="/choicegroup" element={<Choicegroup />} />
                            <Route path="/dropdown" element={<Dropdowns />} />
                            <Route path="/progress" element={<ProgressIndicators />} />
                            <Route path="/dialog" element={<Dialogs />} />
                            <Route path="/text-field" element={<TextFields />} />
                            <Route path="/toggle" element={<Toggles />} />
                            <Route path="/slider" element={<Sliders />} />
                            <Route path="/spinner" element={<Spinners />} />
                            <Route path="/panel" element={<Panels />} />
                        </Routes>
                    </StackItem>
                </Stack>
            </HashRouter>
        </ThemeProvider>
    );
};
