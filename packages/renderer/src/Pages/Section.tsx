import { FC, ReactElement } from "react";
import { SectionTitle } from "./SectionTitle";

export const Section: FC<{ title: string; content: ReactElement }> = ({ title, content }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <SectionTitle label={title} />
            {content}
        </div>
    );
};
