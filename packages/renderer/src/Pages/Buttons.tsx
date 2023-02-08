import { Button, Text } from "@fluentui/react-components";
import { AddCircle24Regular } from "@fluentui/react-icons";
import { FC } from "react";
import { SectionTitle } from "./SectionTitle";

export const Buttons: FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: 10, boxSizing: "border-box" }}>
            <Text size={600}>Buttons</Text>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <SectionTitle label="Shapes" />
                <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                    <Button shape="circular">Circular</Button>
                    <Button shape="rounded">Rounded</Button>
                    <Button shape="square">Square</Button>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <SectionTitle label="Appearance" />
                <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                    <Button appearance="outline">Outline</Button>
                    <Button appearance="primary">Primary</Button>
                    <Button appearance="secondary">Secondary</Button>
                    <Button appearance="subtle">Subtle</Button>
                    <Button appearance="transparent">Transparent</Button>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <SectionTitle label="Icons" />
                <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                    <Button icon={<AddCircle24Regular />} iconPosition="before">
                        Icon before
                    </Button>
                    <Button icon={<AddCircle24Regular />} iconPosition="after">
                        Icon after
                    </Button>
                    <Button icon={<AddCircle24Regular />} />
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <SectionTitle label="Size" />
                <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "row", gap: 10 }}>
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <SectionTitle label="Disabled" />
                <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "row", gap: 10 }}>
                    <Button>Enabled</Button>
                    <Button disabled>Disabled</Button>
                </div>
            </div>
        </div>
    );
};
