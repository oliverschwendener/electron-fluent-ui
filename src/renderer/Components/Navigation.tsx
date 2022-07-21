import {
    Avatar,
    Body1,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
    Subtitle2,
    Tab,
    TabList,
} from "@fluentui/react-components";
import { Search20Regular } from "@fluentui/react-icons";
import { FC, useState } from "react";
import { useNavigate } from "react-router";
import { ColorThemeName } from "../ColorThemes";
import { AppRoute } from "../AppRoute";

interface Props {
    currentColorThemeName: string;
    changeColorTheme: (colorThemeName: ColorThemeName) => void;
    routes: AppRoute[];
}

export const Navigation: FC<Props> = ({ currentColorThemeName, changeColorTheme, routes }) => {
    const colorThemeNames: ColorThemeName[] = [
        "Web Light",
        "Web Dark",
        "Teams Light",
        "Teams Dark",
        "Teams High Contrast",
    ];

    const [currentPath, setCurrentPath] = useState<string>(routes[0].path);
    const navigate = useNavigate();

    const navigateTo = (path: string) => {
        setCurrentPath(path);
        navigate({ pathname: path });
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <div>
                    <Avatar
                        size={64}
                        name="Katri Athokas"
                        image={{
                            src: "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Subtitle2>Katri Athokas</Subtitle2>
                    <Body1>katri.athokas@outlook.com</Body1>
                </div>
            </div>
            <div style={{ marginTop: 20, marginBottom: 20 }}>
                <Input contentAfter={<Search20Regular aria-label="Enter by voice" />} placeholder="Search" />
            </div>
            <TabList
                style={{ flexGrow: 1 }}
                onTabSelect={(_, { value }) => {
                    if (typeof value === "string") {
                        navigateTo(value);
                    }
                }}
                selectedValue={currentPath}
                vertical
            >
                {routes.map(({ path, label, icon }) => (
                    <Tab value={path} icon={icon}>
                        {label}
                    </Tab>
                ))}
            </TabList>
            <Menu>
                <MenuTrigger>
                    <MenuButton>{currentColorThemeName}</MenuButton>
                </MenuTrigger>
                <MenuPopover>
                    <MenuList>
                        {colorThemeNames.map((colorThemeName) => (
                            <MenuItem onClick={() => changeColorTheme(colorThemeName)}>{colorThemeName}</MenuItem>
                        ))}
                    </MenuList>
                </MenuPopover>
            </Menu>
        </div>
    );
};
