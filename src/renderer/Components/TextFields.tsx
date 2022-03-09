import React, { FC } from "react";
import { Stack, TextField } from "@fluentui/react";

export const TextFields: FC = () => (
    <Stack>
        <TextField label="Enter some text" autoFocus />
    </Stack>
);
