import { Button, Text } from "@fluentui/react-components";
import { AddCircle24Regular } from "@fluentui/react-icons";
import { FC } from "react";
import { Section } from "./Section";

export const Buttons: FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: 10, boxSizing: "border-box" }}>
            <Text size={600}>Buttons</Text>
            <Section
                title="Shapes"
                content={
                    <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                        <Button shape="circular">Circular</Button>
                        <Button shape="rounded">Rounded</Button>
                        <Button shape="square">Square</Button>
                    </div>
                }
            />
            <Section
                title="Appearance"
                content={
                    <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                        <Button appearance="outline">Outline</Button>
                        <Button appearance="primary">Primary</Button>
                        <Button appearance="secondary">Secondary</Button>
                        <Button appearance="subtle">Subtle</Button>
                        <Button appearance="transparent">Transparent</Button>
                    </div>
                }
            />
            <Section
                title="Icons"
                content={
                    <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                        <Button icon={<AddCircle24Regular />} iconPosition="before">
                            Icon before
                        </Button>
                        <Button icon={<AddCircle24Regular />} iconPosition="after">
                            Icon after
                        </Button>
                        <Button icon={<AddCircle24Regular />} />
                    </div>
                }
            />
            <Section
                title="Size"
                content={
                    <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "row", gap: 10 }}>
                        <Button size="small">Small</Button>
                        <Button size="medium">Medium</Button>
                        <Button size="large">Large</Button>
                    </div>
                }
            />
            <Section
                title="Disabled"
                content={
                    <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "row", gap: 10 }}>
                        <Button>Enabled</Button>
                        <Button disabled>Disabled</Button>
                    </div>
                }
            />
        </div>
    );
};
