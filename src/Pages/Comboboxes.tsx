import { Combobox, Option, Text } from "@fluentui/react-components";
import { FC, useState } from "react";
import { Section } from "./Section";

export const Comboboxes: FC = () => {
    const [multiSelectValue, setMultiSelectValue] = useState<string>("");

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
                        <Combobox
                            placeholder="Select some items"
                            multiselect
                            value={multiSelectValue}
                            onOptionSelect={(_, data) => setMultiSelectValue(data.selectedOptions.join(", "))}
                        >
                            <Option id="item-1" key="item-1" value="Item1">
                                Item 1
                            </Option>
                            <Option id="item-2" key="item-2" value="Item2">
                                Item 2
                            </Option>
                            <Option id="item-3" key="item-3" value="Item3">
                                Item 3
                            </Option>
                            <Option id="item-4" key="item-4" value="Item4">
                                Item 4
                            </Option>
                        </Combobox>
                    </div>
                }
            />
        </div>
    );
};
