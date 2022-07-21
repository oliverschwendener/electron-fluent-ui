import { FluentProvider } from "@fluentui/react-components";
import {
    Desktop24Regular,
    Bluetooth24Regular,
    Wifi120Regular,
    DrawImage24Regular,
    Apps24Regular,
    Person24Regular,
    GlobeClock24Regular,
    Games24Regular,
    Accessibility24Regular,
} from "@fluentui/react-icons";
import { FC, useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { IpcChannel } from "../shared/IpcChannel";
import { AppRoute } from "./AppRoute";
import { ColorThemeName, getTheme } from "./ColorThemes";
import { BluetoothAndDevices } from "./Components/BluetoothAndDevices";
import { NetworkAndInternet } from "./Components/NetworkAndInternet";
import { Personalization } from "./Components/Personalization";
import { Apps } from "./Components/Apps";
import { Accounts } from "./Components/Accounts";
import { Navigation } from "./Components/Navigation";
import { TimeAndLanguage } from "./Components/TimeAndLanguage";
import { Gaming } from "./Components/Gaming";
import { Accessbility } from "./Components/Accessbility";
import { System } from "./Components/System";

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
                <div style={{ display: "flex", flexDirection: "row", gap: 20, height: "100%" }}>
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
