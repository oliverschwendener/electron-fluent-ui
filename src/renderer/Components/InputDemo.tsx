import { Input, Label } from "@fluentui/react-components";
import { FC, useState } from "react";

export const InputDemo: FC = () => {
    const [textValue, setTextValue] = useState<string>("");

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Label htmlFor="input1">Filled darker (default)</Label>
                <Input
                    autoFocus
                    value={textValue}
                    onChange={(_, { value }) => setTextValue(value)}
                    appearance="filled-darker"
                    id="input1"
                />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Label htmlFor="input2">Filled lighter</Label>
                <Input
                    value={textValue}
                    onChange={(_, { value }) => setTextValue(value)}
                    appearance="filled-lighter"
                    id="input2"
                />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Label htmlFor="input3">Outline</Label>
                <Input
                    value={textValue}
                    onChange={(_, { value }) => setTextValue(value)}
                    appearance="outline"
                    id="input3"
                />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Label htmlFor="input4">Underline</Label>
                <Input
                    value={textValue}
                    onChange={(_, { value }) => setTextValue(value)}
                    appearance="underline"
                    id="input4"
                />
            </div>
        </div>
    );
};
