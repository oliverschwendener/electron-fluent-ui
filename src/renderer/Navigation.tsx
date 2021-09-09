import React, { FC, MouseEvent, useState } from "react";
import { Nav, INavLink, INavLinkGroup } from "@fluentui/react/lib/Nav";

const navLinkGroups: INavLinkGroup[] = [
    {
        links: [
            {
                name: "Home",
                url: "#",
                expandAriaLabel: "Expand Home section",
                collapseAriaLabel: "Collapse Home section",
                key: "home",
                links: [
                    {
                        name: "Activity",
                        url: "#",
                        key: "key1",
                        target: "_blank",
                    },
                    {
                        name: "MSN",
                        url: "#",
                        disabled: true,
                        key: "key2",
                        target: "_blank",
                    },
                ],
                isExpanded: true,
            },
            {
                name: "Documents",
                url: "#",
                key: "key3",
                isExpanded: true,
                target: "_blank",
            },
            {
                name: "Pages",
                url: "#",
                key: "key4",
                target: "_blank",
            },
            {
                name: "Notebook",
                url: "#",
                key: "key5",
                disabled: true,
            },
            {
                name: "Communication and Media",
                url: "#",
                key: "key6",
                target: "_blank",
            },
            {
                name: "News",
                url: "#",
                icon: "News",
                key: "key7",
                target: "_blank",
            },
        ],
    },
];

export const Navigation: FC = () => {
    const [currentlySelectedKey, setCurrentlySelectedKey] = useState<string>("home");

    const onLinkClick = (event?: MouseEvent, item?: INavLink) => {
        event?.preventDefault();

        if (item?.key) {
            setCurrentlySelectedKey(item.key);
        }
    };

    return (
        <Nav
            onLinkClick={onLinkClick}
            selectedKey={currentlySelectedKey}
            ariaLabel="Nav basic example"
            groups={navLinkGroups}
        />
    );
};
