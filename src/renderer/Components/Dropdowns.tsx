import { Dropdown, Stack } from "@fluentui/react";
import React, { FC } from "react";

export const Dropdowns: FC = () => (
    <Stack padding={10}>
        <Dropdown
            label="This is an example"
            options={[
                { key: "a", text: "Option A", selected: true },
                { key: "b", text: "Option B" },
                { key: "c", text: "Option C" },
                { key: "d", text: "Option D" },
            ]}
        ></Dropdown>
    </Stack>
);
