import { CompoundButton } from "@fluentui/react-components";
import { FC } from "react";

export const CompoundButtonDemo: FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
                <CompoundButton secondaryContent="Secondary content">Default</CompoundButton>
            </div>
            <div>
                <CompoundButton secondaryContent="Secondary content" appearance="primary">
                    Primary
                </CompoundButton>
            </div>
            <div>
                <CompoundButton secondaryContent="Secondary content" appearance="outline">
                    Outline
                </CompoundButton>
            </div>
            <div>
                <CompoundButton secondaryContent="Secondary content" appearance="subtle">
                    Subtle
                </CompoundButton>
            </div>
            <div>
                <CompoundButton secondaryContent="Secondary content" appearance="transparent">
                    Transparent
                </CompoundButton>
            </div>
        </div>
    );
};
