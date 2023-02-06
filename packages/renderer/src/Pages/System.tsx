import { CompoundButton, Text } from "@fluentui/react-components";
import {
    Alert24Regular,
    ArrowSyncCircle24Filled,
    Cloud24Filled,
    Desktop24Regular,
    Laptop24Regular,
    Power24Regular,
    Speaker224Regular,
    Target24Regular,
} from "@fluentui/react-icons";
import { CSSProperties, FC } from "react";

export const System: FC = () => {
    const compoundButtonStyle: CSSProperties = {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
    };

    return (
        <div
            style={{
                width: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                padding: 10,
            }}
        >
            <Text size={600}>System</Text>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ gap: 10, display: "flex", flexDirection: "row", justifyContent: "end" }}>
                    <CompoundButton
                        appearance="subtle"
                        icon={<Desktop24Regular />}
                        secondaryContent={window.ContextBridge.getContext().computerName}
                    >
                        Computer name
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
            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
                <CompoundButton style={compoundButtonStyle} secondaryContent={"Display"} icon={<Laptop24Regular />}>
                    Monitors, brightness, night light, display profile
                </CompoundButton>
                <CompoundButton style={compoundButtonStyle} secondaryContent={"Sound"} icon={<Speaker224Regular />}>
                    Monitors, brightness, night light, display profile
                </CompoundButton>
                <CompoundButton
                    style={compoundButtonStyle}
                    secondaryContent={"Notifications"}
                    icon={<Alert24Regular />}
                >
                    Alerts from apps and system, do not disturb{" "}
                </CompoundButton>
                <CompoundButton style={compoundButtonStyle} secondaryContent={"Focus"} icon={<Target24Regular />}>
                    Reduce distractions{" "}
                </CompoundButton>
                <CompoundButton style={compoundButtonStyle} secondaryContent={"Power"} icon={<Power24Regular />}>
                    Screen and sleep, power mode{" "}
                </CompoundButton>
            </div>
        </div>
    );
};
