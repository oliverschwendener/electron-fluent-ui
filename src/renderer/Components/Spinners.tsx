import { Spinner, SpinnerSize, Stack } from "@fluentui/react";
import React, { FC } from "react";

export const Spinners: FC = () => (
    <Stack padding={10} tokens={{ childrenGap: 20 }}>
        <Spinner label="Loading..." size={SpinnerSize.large} labelPosition="top" />
        <Spinner label="Loading..." size={SpinnerSize.large} labelPosition="right" />
        <Spinner label="Loading..." size={SpinnerSize.large} labelPosition="bottom" />
        <Spinner label="Loading..." size={SpinnerSize.large} labelPosition="left" />
    </Stack>
);
