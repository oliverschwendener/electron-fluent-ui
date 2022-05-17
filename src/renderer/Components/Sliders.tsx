import { Slider, Stack } from "@fluentui/react";
import { FC } from "react";

export const Sliders: FC = () => (
    <Stack>
        <Slider min={0} max={100} />
    </Stack>
);
