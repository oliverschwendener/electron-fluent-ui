import { FC, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Divider, FluentProvider } from "@fluentui/react-components";

import { Buttons } from "./Components/Buttons";
import { Welcome } from "./Components/Welcome";
import { Navigation } from "./Components/Navigation";
import { ColorThemeName, getTheme } from "./ColorThemes";
import { AppRoute as AppRoute } from "./AppRoute";
import { TextInput } from "./Components/TextInput";

export const App: FC = () => {
    const defaultColorThemeName: ColorThemeName = "Web Light";
    const [currentColorThemeName, setCurrentColorThemeName] = useState<ColorThemeName>(defaultColorThemeName);

    const routes: AppRoute[] = [
        { label: "Welcome", path: "/", element: <Welcome /> },
        { label: "Buttons", path: "/buttons", element: <Buttons /> },
        { label: "Input", path: "/input", element: <TextInput /> },
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
                    <div style={{ height: "100%" }}>
                        <Navigation
                            currentColorThemeName={currentColorThemeName}
                            changeColorTheme={setCurrentColorThemeName}
                            routes={routes}
                        />
                    </div>
                    <Divider vertical style={{ flexGrow: 0 }} />
                    <div style={{ flexGrow: 1 }}>
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
