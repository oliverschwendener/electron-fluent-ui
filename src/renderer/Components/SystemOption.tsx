import { CompoundButton } from "@fluentui/react-components";
import { FC } from "react";

type Props = {
    title: string;
    description: string;
    icon?: JSX.Element;
};

export const SystemOption: FC<Props> = ({ title, description, icon }) => {
    return (
        <CompoundButton
            style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}
            secondaryContent={description}
            icon={icon}
        >
            {title}
        </CompoundButton>
    );
};
