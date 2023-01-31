import { FluentProvider, Tab, TabList, Theme, webDarkTheme, webLightTheme } from "@fluentui/react-components";
import { FC, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { Tab1, Tab2, Tab3, Tab4 } from "./Tabs";
export const App: FC = () => {
    const navigate = useNavigate();

    const getTheme = (): Theme => (window.ContextBridge.themeShouldUseDarkColors() ? webDarkTheme : webLightTheme);

    const [theme, setTheme] = useState<Theme>(getTheme);
    const [path, setPath] = useState<string>("/tab1");

    const selectTab = (selectedPath: string) => {
        setPath(selectedPath);
        navigate({ pathname: selectedPath });
    };

    useEffect(() => {
        window.ContextBridge.reactAppStarted();
        window.ContextBridge.onNativeThemeChanged(() => setTheme(getTheme()));
    }, []);

    return (
        <FluentProvider theme={theme} style={{ height: "100vh", padding: 10, boxSizing: "border-box" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <TabList
                    appearance="subtle"
                    selectedValue={path}
                    onTabSelect={(_, { value }) => {
                        if (typeof value === "string") {
                            selectTab(value);
                        }
                    }}
                    vertical
                >
                    <Tab value="/tab1">First Tab</Tab>
                    <Tab value="/tab2">Second Tab</Tab>
                    <Tab value="/tab3">Third Tab</Tab>
                    <Tab value="/tab4">Fourth Tab</Tab>
                </TabList>
                <Routes>
                    <Route path="/" element={<Tab1 />} />
                    <Route path="/tab1" element={<Tab1 />} />
                    <Route path="/tab2" element={<Tab2 />} />
                    <Route path="/tab3" element={<Tab3 />} />
                    <Route path="/tab4" element={<Tab4 />} />
                </Routes>
            </div>
        </FluentProvider>
    );
};
