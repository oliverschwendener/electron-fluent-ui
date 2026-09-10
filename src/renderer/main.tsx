import { FluentProvider, webDarkTheme, webLightTheme } from "@fluentui/react-components";
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router";

import { App } from "./App";
import { AboutPage } from "./pages/AboutPage";
import { DashboardPage } from "./pages/DashboardPage";
import { HomePage } from "./pages/HomePage";

// Hash routing keeps navigation working when the packaged app is
// loaded from the file system (file:// URLs have no history API server).
const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: "dashboard", Component: DashboardPage },
      { path: "about", Component: AboutPage },
    ],
  },
]);

const useSystemDarkMode = () => {
  const [dark, setDark] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => setDark(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return dark;
};

const Root = () => {
  const dark = useSystemDarkMode();

  return (
    <FluentProvider theme={dark ? webDarkTheme : webLightTheme}>
      <RouterProvider router={router} />
    </FluentProvider>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element #root not found");
}

createRoot(container).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
