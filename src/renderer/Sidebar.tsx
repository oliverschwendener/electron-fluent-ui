import { Button, ProgressBar, Tab, TabList, Text, type Theme } from "@fluentui/react-components";
import {
    AddRegular,
    ArchiveRegular,
    ArrowSquareUpRight24Filled,
    BinRecycleRegular,
    DraftsRegular,
    FireRegular,
    MailRegular,
    StarRegular,
} from "@fluentui/react-icons";

export const Sidebar = ({ theme }: { theme: Theme }) => {
    return (
        <div
            style={{
                height: "100%",
                width: 200,
                display: "flex",
                flexDirection: "column",
                borderRightWidth: 1,
                borderRightColor: theme.colorNeutralStroke3,
                borderRightStyle: "solid",
                gap: 10,
                padding: 20,
                boxSizing: "border-box",
                flexShrink: 0,
            }}
        >
            <Button icon={<AddRegular />}>New message</Button>
            <div style={{ flexGrow: 1 }}>
                <TabList vertical defaultSelectedValue="tab1" appearance="subtle">
                    <Tab icon={<MailRegular />} value="tab1">
                        Inbox
                    </Tab>
                    <Tab icon={<DraftsRegular />} value="tab2">
                        Drafts
                    </Tab>
                    <Tab icon={<ArrowSquareUpRight24Filled />} value="tab3">
                        Sent
                    </Tab>
                    <Tab icon={<StarRegular />} value="tab4">
                        Starred
                    </Tab>
                    <Tab icon={<ArchiveRegular />} value="tab5">
                        Archive
                    </Tab>
                    <Tab icon={<FireRegular />} value="tab6">
                        Spam
                    </Tab>
                    <Tab icon={<BinRecycleRegular />} value="tab7">
                        Trash
                    </Tab>
                </TabList>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <ProgressBar value={0.7} />
                <Text size={200}>700.00 MB / 1.00 GB used</Text>
            </div>
        </div>
    );
};
