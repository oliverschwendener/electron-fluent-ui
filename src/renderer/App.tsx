import { FluentProvider } from "@fluentui/react-components";
import { FC, useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { IpcChannel } from "../shared/IpcChannel";
import { AppRoute } from "./AppRoute";
import { ColorThemeName, getTheme } from "./ColorThemes";
import { AccordionDemo } from "./Components/AccordionDemo";
import { ButtonDemo } from "./Components/ButtonDemo";
import { CheckBoxDemo } from "./Components/CheckboxDemo";
import { CompoundButtonDemo } from "./Components/CompoundButtonDemo";
import { InputDemo } from "./Components/InputDemo";
import { Navigation } from "./Components/Navigation";
import { SliderDemo } from "./Components/SliderDemo";
import { SpinnerDemo } from "./Components/SpinnerDemo";
import { SwitchDemo } from "./Components/SwitchDemo";
import { Welcome } from "./Components/Welcome";

export const App: FC = () => {
    const defaultColorThemeName: ColorThemeName = "Web Light";
    const [currentColorThemeName, setCurrentColorThemeName] = useState<ColorThemeName>(defaultColorThemeName);

    useEffect(() => window.ipcRenderer.send(IpcChannel.reactAppStarted), []);

    const routes: AppRoute[] = [
        { label: "Welcome", path: "/", element: <Welcome /> },
        { label: "Accordion", path: "/accordion", element: <AccordionDemo /> },
        { label: "Buttons", path: "/buttons", element: <ButtonDemo /> },
        { label: "Checkboxes", path: "/checkboxes", element: <CheckBoxDemo /> },
        { label: "Compound Buttons", path: "/compound-buttons", element: <CompoundButtonDemo /> },
        { label: "Input", path: "/inputs", element: <InputDemo /> },
        { label: "Sliders", path: "/sliders", element: <SliderDemo /> },
        { label: "Spinners", path: "/spinners", element: <SpinnerDemo /> },
        { label: "Switch", path: "/switch", element: <SwitchDemo /> },
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
