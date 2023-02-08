import { ReactElement } from "react";
import { Buttons } from "./Buttons";
import { Checkboxes } from "./Checkboxes";
import { Comboboxes } from "./Comboboxes";
import { Dialogs } from "./Dialogs";
import { Dropdowns } from "./Dropdowns";
import { Inputs } from "./Inputs";

type NavigationItem = {
    label: string;
    path: string;
    element: ReactElement;
};

export const pages: NavigationItem[] = [
    {
        label: "Buttons",
        path: "/",
        element: <Buttons />,
    },
    {
        label: "Checkboxes",
        path: "/checkboxes",
        element: <Checkboxes />,
    },
    {
        label: "Comboboxes",
        path: "/comboboxes",
        element: <Comboboxes />,
    },
    {
        label: "Dialogs",
        path: "/dialogs",
        element: <Dialogs />,
    },
    {
        label: "Dropdowns",
        path: "/dropdowns",
        element: <Dropdowns />,
    },
    {
        label: "Inputs",
        path: "/inputs",
        element: <Inputs />,
    },
];
