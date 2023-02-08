import { Checkbox, Text } from "@fluentui/react-components";
import { FC } from "react";
import { SectionTitle } from "./SectionTitle";

export const Checkboxes: FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: 10, boxSizing: "border-box" }}>
            <Text size={600}>Checkboxes</Text>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <SectionTitle label="Shapes" />
                <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                    <Checkbox label="Square" shape="square" />
                    <Checkbox label="Circular" shape="circular" />
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <SectionTitle label="Disabled" />
                <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                    <Checkbox label="Square" shape="square" disabled />
                    <Checkbox label="Circular" shape="circular" disabled />
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <SectionTitle label="Label position" />
                <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                    <Checkbox label="After" labelPosition="after" />
                    <Checkbox label="Before" labelPosition="before" />
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <SectionTitle label="Horizontal checklist" />
                <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                    <Checkbox label="Checkbox 1" />
                    <Checkbox label="Checkbox 2" />
                    <Checkbox label="Checkbox 3" />
                    <Checkbox label="Checkbox 4" />
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <SectionTitle label="Vertical checklist" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Checkbox label="Checkbox 1" />
                    <Checkbox label="Checkbox 2" />
                    <Checkbox label="Checkbox 3" />
                    <Checkbox label="Checkbox 4" />
                </div>
            </div>
        </div>
    );
};
