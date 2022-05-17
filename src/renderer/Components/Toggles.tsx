import { Stack, Toggle } from "@fluentui/react";
import { FC } from "react";

export const Toggles: FC = () => (
    <Stack tokens={{ childrenGap: 10 }}>
        <Toggle label="Toggle me" />
        <Toggle label="Toggle me" />
        <Toggle label="Toggle me" />
        <Toggle label="Toggle me" />
    </Stack>
);
