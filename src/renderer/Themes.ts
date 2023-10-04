import { Theme, webDarkTheme, webLightTheme } from "@fluentui/react-components";

export type ThemeName = "Light" | "Dark";

export const ThemeMapping: Record<ThemeName, Theme> = {
    Dark: webDarkTheme,
    Light: webLightTheme,
};

export const getThemeName = (): ThemeName => (window.ContextBridge.themeShouldUseDarkColors() ? "Dark" : "Light");
