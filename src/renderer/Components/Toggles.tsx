import { Stack, Toggle } from "@fluentui/react";
import React, { FC } from "react";

export const Toggles: FC = () => (
    <Stack padding={10} tokens={{ childrenGap: 10 }}>
        <Toggle label="Toggle me" />
        <Toggle label="Toggle me" />
        <Toggle label="Toggle me" />
        <Toggle label="Toggle me" />
    </Stack>
);
