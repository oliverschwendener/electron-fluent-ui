import { Avatar, Input, Text, makeStyles } from "@fluentui/react-components";
import { SearchRegular } from "@fluentui/react-icons";

const useStyles = makeStyles({
    header: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
    }
});

export const Header = () => {
    // Get styles for Fluent UI components using makeStyles function.
    const styles = useStyles();

    return (
        <div className={styles.header}>
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
