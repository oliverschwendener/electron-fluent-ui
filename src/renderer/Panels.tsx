import { DefaultButton, Panel, Stack, Text } from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import React, { FC } from "react";

export const Panels: FC = () => {
    const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);

    return (
        <Stack tokens={{ childrenGap: 10, padding: 20 }}>
            <DefaultButton onClick={openPanel}>Open panel</DefaultButton>
            <Panel
                isLightDismiss
                isOpen={isOpen}
                onDismiss={dismissPanel}
                closeButtonAriaLabel="Close"
                headerText="Light dismiss panel"
            >
                <Text>Hello</Text>
            </Panel>
        </Stack>
    );
};
