import { Checkbox, Text } from "@fluentui/react-components";
import { FC } from "react";
import { Section } from "./Section";

export const Checkboxes: FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: 10, boxSizing: "border-box" }}>
            <Text size={600}>Checkboxes</Text>
            <Section
                title="Shapes"
                content={
                    <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                        <Checkbox label="Square" shape="square" />
                        <Checkbox label="Circular" shape="circular" />
                    </div>
                }
            />
            <Section
                title="Disabled"
                content={
                    <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                        <Checkbox label="Square" shape="square" disabled />
                        <Checkbox label="Circular" shape="circular" disabled />
                    </div>
                }
            />
            <Section
                title="Label position"
                content={
                    <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                        <Checkbox label="After" labelPosition="after" />
                        <Checkbox label="Before" labelPosition="before" />
                    </div>
                }
            />
            <Section
                title="Horizontal checklist"
                content={
                    <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                        <Checkbox label="Checkbox 1" />
                        <Checkbox label="Checkbox 2" />
                        <Checkbox label="Checkbox 3" />
                        <Checkbox label="Checkbox 4" />
                    </div>
                }
            />
            <Section
                title="Vertical checklist"
                content={
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Checkbox label="Checkbox 1" />
                        <Checkbox label="Checkbox 2" />
                        <Checkbox label="Checkbox 3" />
                        <Checkbox label="Checkbox 4" />
                    </div>
                }
            />
        </div>
    );
};
