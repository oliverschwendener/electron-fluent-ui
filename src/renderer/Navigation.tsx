import { INavLink, INavLinkGroup, Nav } from "@fluentui/react/lib/Nav";
import React, { FC, MouseEvent, useEffect, useState } from "react";
import { useHistory } from "react-router";

const navLinkGroups: INavLinkGroup[] = [
    {
        links: [
            {
                name: "Welcome",
                key: "welcome",
                url: "/",
            },
            {
                name: "Content",
                key: "content",
                url: "/content",
            },
            {
                name: "Basic Inputs",
                key: "basic-inputs",
                url: "/basic-inputs",
                links: [
                    {
                        name: "Button",
                        key: "button",
                        url: "/button",
                    },
                    {
                        name: "Checkbox",
                        key: "checkbox",
                        url: "/checkbox",
                    },
                    {
                        name: "Choicegroup",
                        key: "choicegroup",
                        url: "/choicegroup",
                    },
                    {
                        name: "Dropdown",
                        key: "dropdown",
                        url: "/dropdown",
                    },
                ],
            },
        ],
    },
];

export const Navigation: FC = () => {
    const [currentlySelectedKey, setCurrentlySelectedKey] = useState<string>("welcome");

    const history = useHistory();
    useEffect(() => history.push("/"), []);

    const onLinkClick = (event?: MouseEvent, item?: INavLink) => {
        event?.preventDefault();

        if (item?.key) {
            setCurrentlySelectedKey(item.key);
            history.push(item.url);
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
