import { Avatar, Input, Text } from "@fluentui/react-components";
import { SearchRegular } from "@fluentui/react-icons";

export const Header = () => {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
            }}
        >
            <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Input
                    autoFocus
                    width={"100%"}
                    contentBefore={<SearchRegular />}
                    placeholder="Search messages"
                    appearance="filled-darker"
                />
            </div>

            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Text size={200} align="end">
                        Oliver Schwendener
                    </Text>
                    <Text size={100} align="end">
                        oliver.schwendener@proton.me
                    </Text>
                </div>
                <Avatar size={36} name="Oliver Schwendener" />
            </div>
        </div>
    );
};
