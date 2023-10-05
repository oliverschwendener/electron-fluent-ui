import { Button, FluentProvider, webDarkTheme, webLightTheme, type Theme } from "@fluentui/react-components";
import { useEffect, useState } from "react";

type ThemeName = "Light" | "Dark";

const getThemeName = (): ThemeName => (window.ContextBridge.themeShouldUseDarkColors() ? "Dark" : "Light");

const ThemeMapping: Record<ThemeName, Theme> = {
    Dark: webDarkTheme,
    Light: webLightTheme,
};

export const App = () => {
    const [themeName, setThemeName] = useState<ThemeName>(getThemeName());
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        window.ContextBridge.onNativeThemeChanged(() => setThemeName(getThemeName()));
    }, []);

    return (
        <FluentProvider theme={ThemeMapping[themeName]} style={{ height: "100vh" }}>
            <div
                style={{
                    alignItems: "center",
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                }}
            >
                <Button onClick={() => setCounter(counter + 1)}>Click counter: {counter}</Button>
            </div>
        </FluentProvider>
    );
};
