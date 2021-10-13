import {
    ChoiceGroup,
    DefaultButton,
    Dialog,
    DialogFooter,
    DialogType,
    Dropdown,
    IChoiceGroupOption,
    IDropdownOption,
    Panel,
    PrimaryButton,
    ProgressIndicator,
    Slider,
    Spinner,
    SpinnerSize,
    Stack,
    Text,
    TextField,
    Toggle,
} from "@fluentui/react";
import { useBoolean, useId } from "@fluentui/react-hooks";
import React, { FC, FormEvent, useMemo } from "react";
import { Theme } from "./App";

interface Props {
    currentTheme: Theme;
    onThemeChange: (theme: string) => void;
}

export const Content: FC<Props> = ({ currentTheme, onThemeChange }) => {
    const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
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

    const choiceGroupOptions: IChoiceGroupOption[] = [
        { key: "A", text: "Option A" },
        { key: "B", text: "Option B" },
        { key: "C", text: "Option C", disabled: true },
        { key: "D", text: "Option D" },
    ];

    const doNothing = () => null;

    return (
        <Stack tokens={{ childrenGap: 10, padding: 20 }}>
            <Dropdown options={options} onChange={onDropdownChange}></Dropdown>
            <ProgressIndicator />
            <DefaultButton onClick={() => toggleHideDialog()}>Show Dialog</DefaultButton>
            <ChoiceGroup defaultSelectedKey="B" options={choiceGroupOptions} label="Pick one" required />
            <Slider min={0} max={100} />
            <TextField label="Enter some text" autoFocus />
            <Toggle label="Toggle me" />
            <Stack horizontal tokens={{ childrenGap: 10 }}>
                <DefaultButton onClick={openPanel}>Open panel</DefaultButton>
                <PrimaryButton onClick={doNothing}>Click me</PrimaryButton>
            </Stack>
            <Spinner size={SpinnerSize.large} />
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
            <Panel
                isLightDismiss
                isOpen={isOpen}
                onDismiss={dismissPanel}
                closeButtonAriaLabel="Close"
                headerText="Light dismiss panel"
            >
                <Text>Hello</Text>
            </Panel>
        </Stack>
    );
};
