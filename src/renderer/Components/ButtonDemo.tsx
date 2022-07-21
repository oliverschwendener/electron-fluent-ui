import { Button } from "@fluentui/react-button";
import { FC } from "react";

export const ButtonDemo: FC = () => {
    return (
        <div style={{ display: "flex", gap: 20 }}>
            <Button appearance="outline">Outline button</Button>
            <Button appearance="primary">Primary button</Button>
            <Button appearance="secondary">Secondary button</Button>
            <Button appearance="subtle">Subtle button</Button>
        </div>
    );
};
