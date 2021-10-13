import { initializeIcons, Stack, StackItem } from "@fluentui/react";
import { Theme as FluentUiTheme, ThemeProvider } from "@fluentui/react/lib/Theme";
import React, { FC, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { IpcRendererBridge } from "../shared/Bridge";
import { Content } from "./Content";
import { Navigation } from "./Navigation";
import { UeliColorThemes } from "./Themes";
import { Welcome } from "./Welcome";

export enum Theme {
    UeliDark = "UeliDark",
    UeliLight = "UeliLight",
    WindowsDark = "WindowsDark",
    WindowsLight = "WindowsLight",
}

export const App: FC<{ ipcRenderer: IpcRendererBridge }> = () => {
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
                            <Welcome />
                        </Route>
                        <Route path="/content" exact>
                            <Content currentTheme={currentTheme} onThemeChange={changeTheme} />
                        </Route>
                    </StackItem>
                </Stack>
            </BrowserRouter>
        </ThemeProvider>
    );
};
