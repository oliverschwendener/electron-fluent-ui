import { Dropdown, Option, Text } from "@fluentui/react-components";
import { FC } from "react";
import { Section } from "./Section";

export const Dropdowns: FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: 10, boxSizing: "border-box" }}>
            <Text size={600}>Dropdowns</Text>
            <Section
                title="Shapes"
                content={
                    <div style={{ display: "flex" }}>
                        <Dropdown placeholder="Select an item">
                            <Option id="item-1" key="item-1">
                                Item 1
                            </Option>
                            <Option id="item-2" key="item-2">
                                Item 2
                            </Option>
                            <Option id="item-3" key="item-3">
                                Item 3
                            </Option>
                            <Option id="item-4" key="item-4">
                                Item 4
                            </Option>
                        </Dropdown>
                    </div>
                }
            />
        </div>
    );
};
