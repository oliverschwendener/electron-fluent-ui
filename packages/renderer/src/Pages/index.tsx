import { ReactElement } from "react";
import { Home } from "./Home";

export const pages: { label: string; path: string; element: ReactElement }[] = [
    {
        label: "Home",
        path: "/",
        element: <Home />,
    },
];
