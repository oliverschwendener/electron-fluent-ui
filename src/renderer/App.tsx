import { initializeIcons, Stack } from "@fluentui/react";
import React from "react";
import { IpcRendererBridge } from "../shared/Bridge";
import { Content } from "./Content";
import { SideNavigation } from "./SideNavigation";
import { TopBar } from "./TopBar";

export const App: React.FunctionComponent<{ ipcRenderer: IpcRendererBridge }> = () => {
    initializeIcons();

    return (
        <Stack horizontal>
            <Stack.Item>
                <SideNavigation />
            </Stack.Item>
            <Stack.Item grow={1}>
                <TopBar />
                <Content />
            </Stack.Item>
        </Stack>
    );
};
