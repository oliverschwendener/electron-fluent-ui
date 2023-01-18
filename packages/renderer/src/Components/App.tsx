import { Link, Text, Title1 } from "@fluentui/react-components";

export const App = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: 20,
                boxSizing: "border-box",
            }}
        >
            <Title1>Hello world!</Title1>
            <Text>
                This is an app using <Link href="https://react.fluentui.dev">@fluentui/react-components</Link>
            </Text>
            <Text>{import.meta.env.ENV_VALUE}</Text>
        </div>
    );
};
