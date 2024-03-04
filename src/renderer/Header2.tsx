import { Radio, RadioGroup, Text } from "@fluentui/react-components";

export const Header2 = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Text>Inbox</Text>
            <RadioGroup layout="horizontal" defaultValue="all">
                <Radio value="all" label="All" />
                <Radio value="unread" label="Unread" />
                <Radio value="read" label="Read" />
            </RadioGroup>
        </div>
    );
};
