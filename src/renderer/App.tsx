import {
    FluentProvider,
    Link,
    MessageBar,
    MessageBarBody,
    MessageBarTitle,
    Table,
    TableBody,
    TableHeader,
    TableHeaderCell,
    TableRow,
    webDarkTheme,
    webLightTheme,
    makeStyles,
    tokens,
    type Theme,
} from "@fluentui/react-components";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Header2 } from "./Header2";
import { Mails } from "./Mails";
import { Sidebar } from "./Sidebar";

const useStyles = makeStyles({
    root: {
      backgroundColor: tokens.colorNeutralBackground1,
      height: "100vh"
    },
    layout: {
        height: "100%",
        display: "flex",
        flexDirection: "row",
        boxSizing: "border-box",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "20px",
        padding: "20px",
        boxSizing: "border-box",
    }
});

const shouldUseDarkColors = (): boolean =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

const getTheme = () => (shouldUseDarkColors() ? webDarkTheme : webLightTheme);

export const App = () => {
    const [theme, setTheme] = useState<Theme>(getTheme());
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Get styles for Fluent UI components using makeStyles function.
    const styles = useStyles();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        window.ContextBridge.onNativeThemeChanged(() => setTheme(getTheme()));
    }, []);

    return (
        <FluentProvider theme={theme} className={styles.root}>
            <div className={styles.layout}>
                <Sidebar />
                <div className={styles.container}>
                    <Header />
                    <Header2 />
                    <div style={{ flexGrow: 1 }}>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderCell style={{ width: 50 }}>From</TableHeaderCell>
                                    <TableHeaderCell>Subject</TableHeaderCell>
                                    <TableHeaderCell style={{ width: 100 }}>Received on</TableHeaderCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <Mails isLoading={isLoading} />
                            </TableBody>
                        </Table>
                    </div>
                    <MessageBar>
                        <MessageBarBody>
                            <MessageBarTitle>Update available</MessageBarTitle>
                            Click <Link>here</Link> to install.
                        </MessageBarBody>
                    </MessageBar>
                </div>
            </div>
        </FluentProvider>
    );
};
