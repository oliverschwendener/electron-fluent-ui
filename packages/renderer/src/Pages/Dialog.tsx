import {
    Button,
    Text,
    Dialog as FluentDialog,
    DialogTrigger,
    DialogSurface,
    DialogBody,
    DialogTitle,
    DialogActions,
    DialogContent,
} from "@fluentui/react-components";
import { FC } from "react";
import { Section } from "./Section";

export const Dialog: FC = () => {
    const dialogBody = () => {
        return (
            <DialogBody>
                <DialogTitle>Dialog title</DialogTitle>
                <DialogContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem cumque repellendus
                    eaque est dolor eius expedita nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates
                    in natus iure cumque eaque?
                </DialogContent>
                <DialogActions>
                    <DialogTrigger disableButtonEnhancement>
                        <Button appearance="secondary">Close</Button>
                    </DialogTrigger>
                    <Button appearance="primary">Do Something</Button>
                </DialogActions>
            </DialogBody>
        );
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: 10, boxSizing: "border-box" }}>
            <Text size={600}>Dialog</Text>
            <Section
                title="Default"
                content={
                    <div>
                        <FluentDialog>
                            <DialogTrigger>
                                <Button>Open dialog</Button>
                            </DialogTrigger>
                            <DialogSurface>{dialogBody()}</DialogSurface>
                        </FluentDialog>
                    </div>
                }
            />
            <Section
                title="Non Modal"
                content={
                    <div>
                        <FluentDialog modalType="non-modal">
                            <DialogTrigger>
                                <Button>Open dialog</Button>
                            </DialogTrigger>
                            <DialogSurface>{dialogBody()}</DialogSurface>
                        </FluentDialog>
                    </div>
                }
            />
            <Section
                title="Alert"
                content={
                    <div>
                        <FluentDialog modalType="alert">
                            <DialogTrigger>
                                <Button>Open dialog</Button>
                            </DialogTrigger>
                            <DialogSurface>{dialogBody()}</DialogSurface>
                        </FluentDialog>
                    </div>
                }
            />
        </div>
    );
};
