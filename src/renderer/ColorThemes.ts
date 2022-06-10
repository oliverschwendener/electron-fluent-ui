import {
    teamsDarkTheme,
    teamsHighContrastTheme,
    teamsLightTheme,
    Theme,
    webDarkTheme,
    webLightTheme,
} from "@fluentui/react-components";

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
