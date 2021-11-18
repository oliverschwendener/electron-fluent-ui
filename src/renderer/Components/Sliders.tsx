import { Slider, Stack } from "@fluentui/react";
import React, { FC } from "react";

export const Sliders: FC = () => (
    <Stack padding={10}>
        <Slider min={0} max={100} />
    </Stack>
);
