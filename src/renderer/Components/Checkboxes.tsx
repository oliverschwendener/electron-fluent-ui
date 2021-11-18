import { Checkbox, Stack } from "@fluentui/react";
import React, { FC } from "react";

export const Checkboxes: FC = () => (
    <Stack horizontal={false} tokens={{ childrenGap: 10 }}>
        <Checkbox label="Checkbox 1" />
        <Checkbox label="Checkbox 2" />
        <Checkbox label="Checkbox 3" />
        <Checkbox label="Checkbox 4" />
    </Stack>
);
