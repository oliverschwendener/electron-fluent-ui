import { teamsDarkTheme, teamsLightTheme, Theme, webDarkTheme, webLightTheme } from "@fluentui/react-components";

export type ColorThemeName = "Teams Light" | "Teams Dark" | "Web Light" | "Web Dark";

export const colorThemes: Record<ColorThemeName, Theme> = {
    "Web Light": webLightTheme,
    "Web Dark": webDarkTheme,
    "Teams Light": teamsLightTheme,
    "Teams Dark": teamsDarkTheme,
};

export const getTheme = (themeName: ColorThemeName, defaultColorThemeName: ColorThemeName): Theme =>
    colorThemes[themeName] ?? colorThemes[defaultColorThemeName];
