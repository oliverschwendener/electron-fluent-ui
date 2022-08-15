import { Subtitle2, Body1, Avatar } from "@fluentui/react-components";
import { FC } from "react";

export const NavigationHeaderUserAvatar: FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Avatar
                size={64}
                name="Katri Athokas"
                image={{
                    src: "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
                }}
            />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Subtitle2>Katri Athokas</Subtitle2>
                <Body1>katri.athokas@outlook.com</Body1>
            </div>
        </div>
    );
};
