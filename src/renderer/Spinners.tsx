import { Spinner, SpinnerSize, Stack } from "@fluentui/react";
import React, { FC } from "react";

export const Spinners: FC = () => {
    return (
        <Stack padding={10}>
            <Spinner size={SpinnerSize.large} />
        </Stack>
    );
};
