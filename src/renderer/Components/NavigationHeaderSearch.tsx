import { Input } from "@fluentui/react-components";
import { Search20Regular } from "@fluentui/react-icons";
import { FC } from "react";

export const NavigationHeaderSearch: FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", marginTop: 20, marginBottom: 20 }}>
            <Input contentAfter={<Search20Regular aria-label="Enter by voice" />} placeholder="Search" />
        </div>
    );
};
