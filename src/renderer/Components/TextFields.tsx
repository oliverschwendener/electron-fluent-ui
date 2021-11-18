import { Stack, TextField } from "@fluentui/react";
import React, { FC } from "react";

export const TextFields: FC = () => (
    <Stack padding={10}>
        <TextField label="Enter some text" autoFocus />
    </Stack>
);
