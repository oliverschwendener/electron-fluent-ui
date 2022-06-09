import { Button } from "@fluentui/react-button";
import { FC } from "react";

export const Buttons: FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Button appearance="outline">Outline button</Button>
            <Button appearance="primary">Primary button</Button>
            <Button appearance="secondary">Secondary button</Button>
            <Button appearance="subtle">Subtle button</Button>
        </div>
    );
};
