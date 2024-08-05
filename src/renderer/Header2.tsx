import { Radio, RadioGroup, Text, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
    subheader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
});

export const Header2 = () => {
    // Get styles for Fluent UI components using makeStyles function.
    const styles = useStyles();

    return (
        <div className={styles.subheader}>
            <Text>Inbox</Text>
            <RadioGroup layout="horizontal" defaultValue="all">
                <Radio value="all" label="All" />
                <Radio value="unread" label="Unread" />
                <Radio value="read" label="Read" />
            </RadioGroup>
        </div>
    );
};
