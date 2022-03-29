import React, { FC } from "react";
import { Slider, Stack } from "@fluentui/react";

export const Sliders: FC = () => (
    <Stack>
        <Slider min={0} max={100} />
    </Stack>
);
