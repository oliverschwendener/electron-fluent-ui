import { ReactElement } from "react";
import { SectionTitle } from "./SectionTitle";

type SectionProps = {
    title: string;
    content: ReactElement;
};

export const Section = ({ title, content }: SectionProps) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <SectionTitle label={title} />
            {content}
        </div>
    );
};
