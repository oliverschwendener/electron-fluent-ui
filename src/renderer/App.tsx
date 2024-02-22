import { FluentProvider, Tab, TabList, webDarkTheme, webLightTheme, type Theme } from "@fluentui/react-components";
import { AlbumRegular, ImageRegular, SettingsRegular, TagRegular } from "@fluentui/react-icons";
import { useEffect, useState } from "react";

type ThemeName = "Light" | "Dark";

const getThemeName = (): ThemeName => (window.ContextBridge.themeShouldUseDarkColors() ? "Dark" : "Light");

const ThemeMapping: Record<ThemeName, Theme> = {
    Dark: webDarkTheme,
    Light: webLightTheme,
};

export const App = () => {
    const [themeName, setThemeName] = useState<ThemeName>(getThemeName());

    useEffect(() => {
        window.ContextBridge.onNativeThemeChanged(() => setThemeName(getThemeName()));
    }, []);

    return (
        <FluentProvider theme={ThemeMapping[themeName]} style={{ height: "100vh", background: "transparent" }}>
            <div style={{ display: "flex", flexDirection: "row", padding: 10, boxSizing: "border-box", gap: 20 }}>
                <TabList style={{ width: 250 }} vertical selectedValue={"tab1"} size="large">
                    <Tab icon={<ImageRegular />} value="tab1">
                        All Photos
                    </Tab>
                    <Tab icon={<AlbumRegular />} value="tab2">
                        Collections
                    </Tab>
                    <Tab icon={<TagRegular />} value="tab3">
                        Tags
                    </Tab>
                    <Tab icon={<SettingsRegular />} value="tab4">
                        Settings
                    </Tab>
                </TabList>
                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>Content...</div>
            </div>
        </FluentProvider>
    );
};
