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
    type Theme,
} from "@fluentui/react-components";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Header2 } from "./Header2";
import { Mails } from "./Mails";
import { Sidebar } from "./Sidebar";

const shouldUseDarkColors = (): boolean =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

const getTheme = () => (shouldUseDarkColors() ? webDarkTheme : webLightTheme);

export const App = () => {
    const [theme, setTheme] = useState<Theme>(getTheme());
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        window.ContextBridge.onNativeThemeChanged(() => setTheme(getTheme()));
    }, []);

    return (
        <FluentProvider theme={theme} style={{ height: "100vh", background: "transparent" }}>
            <div
                style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    boxSizing: "border-box",
                }}
            >
                <Sidebar theme={theme} />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        gap: 20,
                        padding: 20,
                        boxSizing: "border-box",
                    }}
                >
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
