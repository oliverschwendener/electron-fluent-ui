import React, { useState } from "react";
import { Nav, INavLinkGroup, INavLink, INavStyles, Stack, IStackItemStyles } from "@fluentui/react";
import { NeutralColors } from "@fluentui/theme";

export const SideNavigation: React.FC = () => {
    const navStyles: Partial<INavStyles> = {
        root: {
            width: 200,
            height: "100%",
            overflowY: "auto",
            borderRight: `1px solid ${NeutralColors.gray20}`,
        },
    };

    const navLinkGroups: INavLinkGroup[] = [
        {
            links: [
                {
                    key: "Dashboard",
                    name: "Dashboard",
                    url: "#/Dashboard",
                    icon: "Home",
                },
                {
                    key: "Notifications",
                    name: "Notifications",
                    url: "#/Notifications",
                    icon: "AlertSolid",
                },
                {
                    key: "Orders",
                    name: "Orders",
                    url: "#/Orders",
                    icon: "DocumentSet",
                },
                {
                    key: "Products",
                    name: "Products",
                    url: "#/Products",
                    icon: "Product",
                },
                {
                    key: "Customers",
                    name: "Customers",
                    url: "#/Customers",
                    icon: "Group",
                },
                {
                    key: "Reports",
                    name: "Reports",
                    url: "#/Reports",
                    icon: "ReportWarning",
                },
                {
                    key: "Integrations",
                    name: "Integrations",
                    url: "#/Integrations",
                    icon: "Plug",
                },
            ],
        },
    ];

    const [selectedKey, updateSelectedKey] = useState("Dashboard");

    const onLinkClick = (event?: React.MouseEvent, item?: INavLink) => {
        if (item && item.key) {
            updateSelectedKey(item.key);
        }
    };

    return (
        <Nav
            styles={navStyles}
            ariaLabel="Nav example similiar to one found in this demo page"
            groups={navLinkGroups}
            selectedKey={selectedKey}
            onLinkClick={onLinkClick}
        ></Nav>
    );
};
