import { Text } from "@fluentui/react-components";

type SectionTitleProps = {
    label: string;
};

export const SectionTitle = ({ label }: SectionTitleProps) => <Text weight="medium">{label}</Text>;
