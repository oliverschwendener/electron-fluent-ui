import {
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
    Tab,
    TabList,
} from "@fluentui/react-components";
import { FC, useState } from "react";
import { useNavigate } from "react-router";
import { ColorThemeName } from "../ColorThemes";
import { AppRoute } from "../AppRoute";
import { NavigationHeaderUserAvatar } from "./NavigationHeaderUserAvatar";
import { NavigationHeaderSearch } from "./NavigationHeaderSearch";

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
            <NavigationHeaderUserAvatar />
            <NavigationHeaderSearch />
            <TabList
                appearance="subtle"
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
