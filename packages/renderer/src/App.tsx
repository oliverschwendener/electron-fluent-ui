import {
    Avatar,
    FluentProvider,
    Input,
    Tab,
    TabList,
    Text,
    Theme,
    webDarkTheme,
    webLightTheme,
} from "@fluentui/react-components";
import { FC, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import { pages } from "./Pages";

export const App: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const getTheme = (): Theme => (window.ContextBridge.themeShouldUseDarkColors() ? webDarkTheme : webLightTheme);
    const context = window.ContextBridge.getContext();

    const [theme, setTheme] = useState<Theme>(getTheme);
    const [path, setPath] = useState<string>(pages[0].path);

    const selectTab = (selectedPath: unknown) =>
        typeof selectedPath === "string" ? navigate({ pathname: selectedPath }) : null;

    useEffect(() => setPath(location.pathname), [location]);

    useEffect(() => {
        window.ContextBridge.reactAppStarted();
        window.ContextBridge.onNativeThemeChanged(() => setTheme(getTheme()));
    }, []);

    return (
        <FluentProvider theme={theme} style={{ height: "100vh" }}>
            <div style={{ display: "flex", height: "100%", flexDirection: "row", gap: 10 }}>
                <div style={{ width: 250, padding: 10 }}>
                    <TabList
                        appearance="subtle"
                        selectedValue={path}
                        onTabSelect={(_, { value }) => selectTab(value)}
                        vertical
                    >
                        {pages.map(({ label, path }, index) => (
                            <Tab key={`${path}-${index}`} value={path}>
                                {label}
                            </Tab>
                        ))}
                    </TabList>
                </div>
                <div style={{ height: "100%", width: "100%", padding: 10, boxSizing: "border-box", overflowY: "auto" }}>
                    <Routes>
                        {pages.map(({ path, element }, index) => (
                            <Route key={`${path}-${index}`} path={path} element={element} />
                        ))}
                    </Routes>
                </div>
            </div>
        </FluentProvider>
    );
};
