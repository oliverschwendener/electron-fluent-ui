import { Stack, TextField } from "@fluentui/react";
import React, { FC } from "react";

export const TextFields: FC = () => {
    return (
        <Stack padding={10}>
            <TextField label="Enter some text" autoFocus />
        </Stack>
    );
};
