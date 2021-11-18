import { Dropdown, IDropdownOption, Stack, StackItem, Text } from "@fluentui/react";
import React, { FC } from "react";
import { FormEvent } from "react-router/node_modules/@types/react";
import { Theme } from "../Theme";

interface Props {
    currentTheme: Theme;
    onThemeChange: (theme: string) => void;
}

export const Welcome: FC<Props> = ({ currentTheme, onThemeChange }) => {
    const options: IDropdownOption[] = [
        { key: Theme.UeliDark.toString(), text: "Ueli Dark" },
        { key: Theme.UeliLight.toString(), text: "Ueli Light" },
        { key: Theme.WindowsDark.toString(), text: "Windows Dark" },
        { key: Theme.WindowsLight.toString(), text: "Windows Light" },
    ];

    options.forEach((option) => (option.selected = currentTheme.toString() === option.key));

    const onDropdownChange = (event: FormEvent, option?: IDropdownOption) => {
        if (option) {
            onThemeChange(option.key.toString());
        }
    };

    return (
        <Stack tokens={{ childrenGap: 10 }} verticalFill verticalAlign="center">
            <StackItem align="center">
                <Text variant="xxLarge">Welcome to electron/fluent-ui!</Text>
            </StackItem>
            <StackItem>
                <Dropdown label="Color themes" options={options} onChange={onDropdownChange}></Dropdown>
            </StackItem>
        </Stack>
    );
};
