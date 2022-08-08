import { FluentProvider } from "@fluentui/react-components";
import {
    Accessibility24Regular,
    Apps24Regular,
    ArrowSyncCircle24Filled,
    Bluetooth24Regular,
    Desktop24Regular,
    DrawImage24Regular,
    Games24Regular,
    GlobeClock24Regular,
    Person24Regular,
    Shield24Regular,
    Wifi120Regular,
} from "@fluentui/react-icons";
import { FC, useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { IpcChannel } from "../shared/IpcChannel";
import { AppRoute } from "./AppRoute";
import { ColorThemeName, getTheme } from "./ColorThemes";
import { Navigation } from "./Components/Navigation";
import {
    Accessbility,
    Accounts,
    Apps,
    BluetoothAndDevices,
    Gaming,
    NetworkAndInternet,
    Personalization,
    PrivacyAndSecurity,
    System,
    TimeAndLanguage,
    WindowsUpdate,
} from "./Components/Pages";

export const App: FC = () => {
    const defaultColorThemeName: ColorThemeName = "Web Light";
    const [currentColorThemeName, setCurrentColorThemeName] = useState<ColorThemeName>(defaultColorThemeName);

    useEffect(() => window.ipcRenderer.send(IpcChannel.reactAppStarted), []);

    const routes: AppRoute[] = [
        { label: "System", path: "/", element: <System />, icon: <Desktop24Regular /> },
        {
            label: "Bluetooth & devices",
            path: "/bluetooth-and-devices",
            element: <BluetoothAndDevices />,
            icon: <Bluetooth24Regular />,
        },
        {
            label: "Network & internet",
            path: "/network-and-internet",
            element: <NetworkAndInternet />,
            icon: <Wifi120Regular />,
        },
        {
            label: "Personalization",
            path: "/personalization",
            element: <Personalization />,
            icon: <DrawImage24Regular />,
        },
        {
            label: "Apps",
            path: "/apps",
            element: <Apps />,
            icon: <Apps24Regular />,
        },
        { label: "Accounts", path: "/accounts", element: <Accounts />, icon: <Person24Regular /> },
        {
            label: "Time & language",
            path: "/time-and-language",
            element: <TimeAndLanguage />,
            icon: <GlobeClock24Regular />,
        },
        { label: "Gaming", path: "/gaming", element: <Gaming />, icon: <Games24Regular /> },
        { label: "Accessbility", path: "/accessbility", element: <Accessbility />, icon: <Accessibility24Regular /> },
        {
            label: "Privacy & security",
            path: "/privacy-and-security",
            element: <PrivacyAndSecurity />,
            icon: <Shield24Regular />,
        },
        {
            label: "Windows Update",
            path: "/windows-update",
            element: <WindowsUpdate />,
            icon: <ArrowSyncCircle24Filled />,
        },
    ];

    return (
        <HashRouter>
            <FluentProvider
                theme={getTheme(currentColorThemeName, defaultColorThemeName)}
                style={{
                    padding: 20,
                    height: "100%",
                    boxSizing: "border-box",
                }}
            >
                <div style={{ display: "flex", flexDirection: "row", gap: 40, height: "100%" }}>
                    <div style={{ height: "100%", flexShrink: 0 }}>
                        <Navigation
                            currentColorThemeName={currentColorThemeName}
                            changeColorTheme={setCurrentColorThemeName}
                            routes={routes}
                        />
                    </div>
                    <div style={{ width: "100%" }}>
                        <Routes>
                            {routes.map(({ path, element }) => (
                                <Route path={path} element={element} />
                            ))}
                        </Routes>
                    </div>
                </div>
            </FluentProvider>
        </HashRouter>
    );
};
