import {
    DefaultButton,
    Dialog,
    DialogFooter,
    DialogType,
    Dropdown,
    IDropdownOption,
    PrimaryButton,
    ProgressIndicator,
    Stack,
} from "@fluentui/react";
import { useBoolean, useId } from "@fluentui/react-hooks";
import { Theme } from "./App";
import React, { FC, FormEvent, useMemo } from "react";

interface Props {
    currentTheme: Theme;
    onThemeChange: (theme: string) => void;
}

export const Content: FC<Props> = ({ currentTheme, onThemeChange }) => {
    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
    const labelId: string = useId("dialogLabel");
    const subTextId: string = useId("subTextLabel");

    const options: IDropdownOption[] = [
        { key: "UeliDark", text: "Ueli Dark" },
        { key: "UeliLight", text: "Ueli Light" },
        { key: "WindowsDark", text: "Windows Dark" },
        { key: "WindowsLight", text: "Windows Light" },
    ];

    options.forEach((option) => (option.selected = currentTheme.toString() === option.key));

    const onDropdownChange = (event: FormEvent, option?: IDropdownOption) => {
        if (option) {
            onThemeChange(option.key.toString());
        }
    };

    const dialogContentProps = {
        type: DialogType.normal,
        title: "Missing Subject",
        closeButtonAriaLabel: "Close",
        subText: "Do you want to send this message without a subject?",
    };

    const dialogStyles = { main: { maxWidth: 450 } };

    const modalProps = useMemo(
        () => ({
            titleAriaId: labelId,
            subtitleAriaId: subTextId,
            isBlocking: false,
            styles: dialogStyles,
        }),
        [labelId, subTextId]
    );

    return (
        <Stack tokens={{ childrenGap: 10, padding: 20 }}>
            <Dropdown options={options} onChange={onDropdownChange}></Dropdown>
            <ProgressIndicator />
            <DefaultButton onClick={() => toggleHideDialog()}>Show Dialog</DefaultButton>
            <Dialog
                hidden={hideDialog}
                onDismiss={toggleHideDialog}
                dialogContentProps={dialogContentProps}
                modalProps={modalProps}
            >
                <DialogFooter>
                    <PrimaryButton onClick={toggleHideDialog} text="Send" />
                    <DefaultButton onClick={toggleHideDialog} text="Don't send" />
                </DialogFooter>
            </Dialog>
        </Stack>
    );
};
