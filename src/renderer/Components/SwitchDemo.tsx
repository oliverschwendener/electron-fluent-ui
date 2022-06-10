import { FC } from "react";
import { Switch } from "@fluentui/react-components";

export const SwitchDemo: FC = () => {
    return (
        <>
            <Switch label="This is a switch" />
            <Switch label="This is a disabled switch" disabled />
        </>
    );
};
