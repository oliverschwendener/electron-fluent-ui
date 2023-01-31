import { Button, FluentProvider, Text, Theme, webDarkTheme, webLightTheme } from "@fluentui/react-components";
import { FC, useEffect, useState } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";

export const App: FC = () => {
    const getTheme = (): Theme => (window.ContextBridge.themeShouldUseDarkColors() ? webDarkTheme : webLightTheme);
    const [theme, setTheme] = useState<Theme>(getTheme);
    const toggleColorTheme = () => setTheme(theme === webDarkTheme ? webLightTheme : webDarkTheme);

    useEffect(() => {
        window.ContextBridge.reactAppStarted();
        window.ContextBridge.onNativeThemeChanged(() => setTheme(getTheme()));
    }, []);

    return (
        <HashRouter>
            <FluentProvider theme={theme} style={{ height: "100vh" }}>
                <Text>Hello there!</Text>
                <Button onClick={toggleColorTheme}>Toggle color theme</Button>
            </FluentProvider>
        </HashRouter>
    );
};
