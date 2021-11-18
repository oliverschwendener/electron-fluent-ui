import { DefaultButton, Dialog, DialogFooter, DialogType, PrimaryButton, Stack } from "@fluentui/react";
import { useBoolean, useId } from "@fluentui/react-hooks";
import React, { FC, useMemo } from "react";

export const Dialogs: FC = () => {
    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
    const labelId: string = useId("dialogLabel");
    const subTextId: string = useId("subTextLabel");

    const modalProps = useMemo(
        () => ({
            titleAriaId: labelId,
            subtitleAriaId: subTextId,
            isBlocking: false,
            styles: { main: { maxWidth: 450 } },
        }),
        [labelId, subTextId]
    );

    return (
        <Stack padding={10}>
            <DefaultButton onClick={() => toggleHideDialog()}>Show Dialog</DefaultButton>
            <Dialog
                hidden={hideDialog}
                onDismiss={toggleHideDialog}
                dialogContentProps={{
                    type: DialogType.normal,
                    title: "Example dialog",
                    subText: "Are you sure you want to do this?",
                }}
                modalProps={modalProps}
            >
                <DialogFooter>
                    <DefaultButton onClick={toggleHideDialog} text="No" />
                    <PrimaryButton onClick={toggleHideDialog} text="Yes" />
                </DialogFooter>
            </Dialog>
        </Stack>
    );
};
