import { Spinner } from "@fluentui/react-components";
import { FC } from "react";

export const SpinnerDemo: FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Spinner size="tiny" label="Tiny Spinner" />
            <Spinner size="extra-small" label="Extra Small Spinner" />
            <Spinner size="small" label="Small Spinner" />
            <Spinner size="medium" label="Medium Spinner" />
            <Spinner size="large" label="Large Spinner" />
            <Spinner size="extra-large" label="Extra Large Spinner" />
            <Spinner size="huge" label="Huge Spinner" />
        </div>
    );
};
