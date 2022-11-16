import { CompoundButton, Title1 } from "@fluentui/react-components";
import {
    Alert24Regular,
    ArrowSyncCircle24Filled,
    Cloud24Filled,
    Desktop24Regular,
    Laptop24Regular,
    Power24Regular,
    Speaker224Regular,
    Storage24Regular,
    Target24Regular,
} from "@fluentui/react-icons";
import { FC } from "react";
import { SystemOption } from "../SystemOption";

export const System: FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Title1>System</Title1>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ gap: 10, display: "flex", flexDirection: "row", justifyContent: "end" }}>
                    <CompoundButton appearance="subtle" icon={<Desktop24Regular />} secondaryContent="B550 VISION D">
                        Computer-Name
                    </CompoundButton>
                </div>
                <div style={{ gap: 10, display: "flex", flexDirection: "row", justifyContent: "end" }}>
                    <CompoundButton appearance="subtle" icon={<Cloud24Filled />} secondaryContent="Sign In">
                        One Drive
                    </CompoundButton>
                    <CompoundButton
                        appearance="subtle"
                        icon={<ArrowSyncCircle24Filled />}
                        secondaryContent="Last checked: 4 hours ago"
                    >
                        Windows Update
                    </CompoundButton>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <SystemOption
                    title="Display"
                    description="Monitors, brightness, night light, display profile"
                    icon={<Laptop24Regular />}
                />
                <SystemOption
                    title="Sound"
                    description="Volume levels, output, input, sound devices"
                    icon={<Speaker224Regular />}
                />
                <SystemOption
                    title="Notifications"
                    description="Alerts from apps and system, do not disturb"
                    icon={<Alert24Regular />}
                />
                <SystemOption title="Focus" description="Reduce distractions" icon={<Target24Regular />} />
                <SystemOption title="Power" description="Screen and sleep, power mode" icon={<Power24Regular />} />
                <SystemOption
                    title="Storage"
                    description="Storage space, drives, configuration rules"
                    icon={<Storage24Regular />}
                />
            </div>
        </div>
    );
};
