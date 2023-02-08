import { Combobox, Option, Text } from "@fluentui/react-components";
import { FC } from "react";
import { Section } from "./Section";

export const Comboboxes: FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: 10, boxSizing: "border-box" }}>
            <Text size={600}>Comboboxes</Text>
            <Section
                title="Default"
                content={
                    <div style={{ display: "flex" }}>
                        <Combobox placeholder="Select an item">
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
                        </Combobox>
                    </div>
                }
            />
            <Section
                title="Multiselect"
                content={
                    <div style={{ display: "flex" }}>
                        <Combobox placeholder="Select some items" multiselect>
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
                        </Combobox>
                    </div>
                }
            />
        </div>
    );
};
