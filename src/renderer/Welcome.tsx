import { Stack, StackItem, Text } from "@fluentui/react";
import React, { FC } from "react";

export const Welcome: FC = () => {
    return (
        <Stack verticalFill verticalAlign="center">
            <StackItem align="center">
                <Text variant="xxLarge">Welcome to electron/fluent-ui!</Text>
            </StackItem>
        </Stack>
    );
};
