import { CommandBar, IButtonProps, ICommandBarItemProps } from "@fluentui/react";
import React from "react";

export const TopBar: React.FC = () => {
    const _items: ICommandBarItemProps[] = [
        {
            key: "newItem",
            text: "New",
            cacheKey: "myCacheKey",
            iconProps: { iconName: "Add" },
            subMenuProps: {
                items: [
                    {
                        key: "emailMessage",
                        text: "Email message",
                        iconProps: { iconName: "Mail" },
                        ["data-automation-id"]: "newEmailButton",
                    },
                    {
                        key: "calendarEvent",
                        text: "Calendar event",
                        iconProps: { iconName: "Calendar" },
                    },
                ],
            },
        },
        {
            key: "upload",
            text: "Upload",
            iconProps: { iconName: "Upload" },
            href: "https://developer.microsoft.com/en-us/fluentui",
        },
        {
            key: "share",
            text: "Share",
            iconProps: { iconName: "Share" },
            onClick: () => console.log("Share"),
        },
        {
            key: "download",
            text: "Download",
            iconProps: { iconName: "Download" },
            onClick: () => console.log("Download"),
        },
    ];

    const _overflowItems: ICommandBarItemProps[] = [
        {
            key: "move",
            text: "Move to...",
            onClick: () => console.log("Move to"),
            iconProps: { iconName: "MoveToFolder" },
        },
        { key: "copy", text: "Copy to...", onClick: () => console.log("Copy to"), iconProps: { iconName: "Copy" } },
        { key: "rename", text: "Rename...", onClick: () => console.log("Rename"), iconProps: { iconName: "Edit" } },
    ];

    const _farItems: ICommandBarItemProps[] = [
        {
            key: "tile",
            text: "Grid view",
            ariaLabel: "Grid view",
            iconOnly: true,
            iconProps: { iconName: "Tiles" },
            onClick: () => console.log("Tiles"),
        },
        {
            key: "info",
            text: "Info",
            ariaLabel: "Info",
            iconOnly: true,
            iconProps: { iconName: "Info" },
            onClick: () => console.log("Info"),
        },
    ];

    const overflowProps: IButtonProps = { ariaLabel: "More commands" };

    return (
        <CommandBar
            items={_items}
            overflowItems={_overflowItems}
            overflowButtonProps={overflowProps}
            farItems={_farItems}
            ariaLabel="Use left and right arrow keys to navigate between commands"
        />
    );
};
