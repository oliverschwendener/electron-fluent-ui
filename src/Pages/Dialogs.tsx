import {
    Button,
    Dialog,
    DialogActions,
    DialogBody,
    DialogContent,
    DialogSurface,
    DialogTitle,
    DialogTrigger,
    Text,
} from "@fluentui/react-components";
import { Section } from "./Section";

export const Dialogs = () => {
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
            <Text size={600}>Dialogs</Text>
            <Section
                title="Default"
                content={
                    <div>
                        <Dialog>
                            <DialogTrigger>
                                <Button>Open dialog</Button>
                            </DialogTrigger>
                            <DialogSurface>{dialogBody()}</DialogSurface>
                        </Dialog>
                    </div>
                }
            />
            <Section
                title="Non Modal"
                content={
                    <div>
                        <Dialog modalType="non-modal">
                            <DialogTrigger>
                                <Button>Open dialog</Button>
                            </DialogTrigger>
                            <DialogSurface>{dialogBody()}</DialogSurface>
                        </Dialog>
                    </div>
                }
            />
            <Section
                title="Alert"
                content={
                    <div>
                        <Dialog modalType="alert">
                            <DialogTrigger>
                                <Button>Open dialog</Button>
                            </DialogTrigger>
                            <DialogSurface>{dialogBody()}</DialogSurface>
                        </Dialog>
                    </div>
                }
            />
        </div>
    );
};
