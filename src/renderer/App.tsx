import { Content } from "./Content";
import { initializeIcons, Stack } from "@fluentui/react";
import { IpcRendererBridge } from "../shared/Bridge";
import { Navigation } from "./Navigation";
import { ThemeProvider } from "@fluentui/react/lib/Theme";
import { Themes } from "./Themes";
import React, { FC, useState } from "react";

export enum Theme {
    UeliDark = "UeliDark",
    UeliLight = "UeliLight",
    WindowsDark = "WindowsDark",
    WindowsLight = "WindowsLight",
}

export const App: FC<{ ipcRenderer: IpcRendererBridge }> = () => {
    initializeIcons();

    const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.UeliDark);
    const changeTheme = (theme: string) => {
        Object.values(Theme).forEach((t) => {
            if (t.toString() === theme) {
                setCurrentTheme(t);
            }
        });
    };

    const getTheme = () => {
        switch (currentTheme) {
            case Theme.WindowsDark:
                return Themes.WindowsDark;
            case Theme.WindowsLight:
                return Themes.WindowsLight;
            case Theme.UeliLight:
                return Themes.UeliLight;
            case Theme.UeliDark:
            default:
                return Themes.UeliDark;
        }
    };

    return (
        <ThemeProvider theme={getTheme()} applyTo="body">
            <Stack horizontal={true} verticalFill={true}>
                <Stack.Item verticalFill>
                    <Navigation />
                </Stack.Item>
                <Stack.Item grow={1}>
                    <Content currentTheme={currentTheme} onThemeChange={changeTheme} />
                </Stack.Item>
            </Stack>
        </ThemeProvider>
    );
};
