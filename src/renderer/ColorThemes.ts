import {
    teamsDarkTheme,
    teamsHighContrastTheme,
    teamsLightTheme,
    Theme,
    webDarkTheme,
    webLightTheme,
} from "@fluentui/react-components";
import { IpcChannel } from "../shared/IpcChannel";

export type ColorThemeName = "Teams Light" | "Teams Dark" | "Teams High Contrast" | "Web Light" | "Web Dark";

export const colorThemes: Record<ColorThemeName, Theme> = {
    "Web Light": webLightTheme,
    "Web Dark": webDarkTheme,
    "Teams Light": teamsLightTheme,
    "Teams Dark": teamsDarkTheme,
    "Teams High Contrast": teamsHighContrastTheme,
};

export const getTheme = (themeName: ColorThemeName, defaultColorThemeName: ColorThemeName): Theme =>
    colorThemes[themeName] ?? colorThemes[defaultColorThemeName];

export const getDefaultColorThemeName = (): ColorThemeName => (shouldUseDarkColors() ? "Web Dark" : "Web Light");

export const shouldUseDarkColors = (): boolean =>
    window.Bridge.sendSync<unknown, boolean>(IpcChannel.themeShouldUseDarkColors);
