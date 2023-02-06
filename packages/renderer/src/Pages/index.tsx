import {
    Accessibility24Regular,
    Apps24Regular,
    ArrowSyncCircle24Regular,
    Bluetooth24Regular,
    Games24Regular,
    GlobeClock24Regular,
    PaintBrush24Regular,
    Person24Regular,
    Shield24Regular,
    System24Regular,
    Wifi124Regular,
} from "@fluentui/react-icons";
import { ReactElement } from "react";
import { Accessibility } from "./Accessibility";
import { Accounts } from "./Accounts";
import { Apps } from "./Apps";
import { BluetoothAndDevices } from "./BluetoothAndDevices";
import { Gaming } from "./Gaming";
import { NetworkAndInternet } from "./NetworkAndInternet";
import { Personalization } from "./Personalization";
import { PrivacyAndSecurity } from "./PrivacyAndSecurity";
import { System } from "./System";
import { TimeAndLanguage } from "./TimeAndLanguage";
import { WindowsUpdate } from "./WindowsUpdate";

type NavigationItem = {
    label: string;
    path: string;
    element: ReactElement;
    icon: ReactElement;
};

export const pages: NavigationItem[] = [
    {
        label: "System",
        path: "/",
        element: <System />,
        icon: <System24Regular />,
    },
    {
        label: "Bluetooth & Devices",
        path: "/bluetooth-and-devices",
        element: <BluetoothAndDevices />,
        icon: <Bluetooth24Regular />,
    },
    {
        label: "Network & internet",
        path: "/network-and-internet",
        element: <NetworkAndInternet />,
        icon: <Wifi124Regular />,
    },
    {
        label: "Personalization",
        path: "/personalization",
        element: <Personalization />,
        icon: <PaintBrush24Regular />,
    },
    {
        label: "Apps",
        path: "/apps",
        element: <Apps />,
        icon: <Apps24Regular />,
    },
    {
        label: "Accounts",
        path: "/accounts",
        element: <Accounts />,
        icon: <Person24Regular />,
    },
    {
        label: "Time & language",
        path: "/time-and-language",
        element: <TimeAndLanguage />,
        icon: <GlobeClock24Regular />,
    },
    {
        label: "Gaming",
        path: "/gaming",
        element: <Gaming />,
        icon: <Games24Regular />,
    },
    {
        label: "Accessibility",
        path: "/accessibility",
        element: <Accessibility />,
        icon: <Accessibility24Regular />,
    },
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
        icon: <ArrowSyncCircle24Regular />,
    },
];
