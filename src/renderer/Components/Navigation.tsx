import { INavLink, INavLinkGroup, Nav } from "@fluentui/react";
import { FC, MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const navLinkGroups: INavLinkGroup[] = [
    {
        links: [
            {
                name: "Welcome",
                key: "welcome",
                url: "/",
            },
            {
                name: "Basic Inputs",
                key: "basic-inputs",
                url: "/basic-inputs",
                links: [
                    { name: "Button", key: "button", url: "/button" },
                    { name: "Checkbox", key: "checkbox", url: "/checkbox" },
                    { name: "Choicegroup", key: "choicegroup", url: "/choicegroup" },
                    { name: "Dropdown", key: "dropdown", url: "/dropdown" },
                    { name: "Progress", key: "progress", url: "/progress" },
                    { name: "Dialog", key: "Dialog", url: "/dialog" },
                    { name: "Text field", key: "Text field", url: "/text-field" },
                    { name: "Toggle", key: "Toggle", url: "/toggle" },
                    { name: "Slider", key: "Slider", url: "/slider" },
                    { name: "Spinner", key: "Spinner", url: "/spinner" },
                    { name: "Panel", key: "Panel", url: "/panel" },
                ],
            },
        ],
    },
];

export const Navigation: FC = () => {
    const [currentlySelectedKey, setCurrentlySelectedKey] = useState<string>("welcome");

    const navigate = useNavigate();
    useEffect(() => navigate({ pathname: "/" }), []);

    const onLinkClick = (event?: MouseEvent, item?: INavLink) => {
        event?.preventDefault();

        if (item?.key) {
            setCurrentlySelectedKey(item.key);
            navigate({ pathname: item.url });
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
