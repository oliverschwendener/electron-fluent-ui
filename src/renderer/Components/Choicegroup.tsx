import { ChoiceGroup, IChoiceGroupOption, Stack } from "@fluentui/react";
import { FC } from "react";

export const Choicegroup: FC = () => {
    const choiceGroupOptions: IChoiceGroupOption[] = [
        { key: "A", text: "Option A" },
        { key: "B", text: "Option B" },
        { key: "C", text: "Option C", disabled: true },
        { key: "D", text: "Option D" },
    ];

    return (
        <Stack horizontal={false}>
            <ChoiceGroup defaultSelectedKey="A" options={choiceGroupOptions} label="Pick one" required />
        </Stack>
    );
};
