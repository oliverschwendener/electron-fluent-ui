import { Input, Label, Text } from "@fluentui/react-components";
import { FC } from "react";
import { Section } from "./Section";

export const Inputs: FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: 10, boxSizing: "border-box" }}>
            <Text size={600}>Dropdowns</Text>
            <Section
                title="Default"
                content={
                    <>
                        <Label htmlFor="default-input">Sample input</Label>
                        <Input id="default-input" placeholder="Add some text here..." />
                    </>
                }
            />
            <Section
                title="Underlined"
                content={
                    <>
                        <Label htmlFor="underlined-input"></Label>
                        <Input id="underlined-input" placeholder="Add some text here..." appearance="underline" />
                    </>
                }
            />
            <Section
                title="Filled darker"
                content={
                    <>
                        <Label htmlFor="filled-darker"></Label>
                        <Input id="filled-darker" placeholder="Add some text here..." appearance="filled-darker" />
                    </>
                }
            />
            <Section
                title="Filled darker shadow"
                content={
                    <>
                        <Label htmlFor="filled-darker-shadow"></Label>
                        <Input
                            id="filled-darker-shadow"
                            placeholder="Add some text here..."
                            appearance="filled-darker-shadow"
                        />
                    </>
                }
            />
            <Section
                title="Filled lighter"
                content={
                    <>
                        <Label htmlFor="filled-lighter"></Label>
                        <Input id="filled-lighter" placeholder="Add some text here..." appearance="filled-lighter" />
                    </>
                }
            />
            <Section
                title="Filled lighter shadow"
                content={
                    <>
                        <Label htmlFor="filled-ligher-shadow"></Label>
                        <Input
                            id="filled-ligher-shadow"
                            placeholder="Add some text here..."
                            appearance="filled-lighter-shadow"
                        />
                    </>
                }
            />
            <Section
                title="Disabled"
                content={
                    <>
                        <Label htmlFor="disabled-input"></Label>
                        <Input id="disabled-input" placeholder="Add some text here..." disabled />
                    </>
                }
            />
            <Section
                title="Sizes"
                content={
                    <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
                        <div>
                            <Label htmlFor="small-input"></Label>
                            <Input id="small-input" placeholder="Add some text here..." size="small" />
                        </div>
                        <div>
                            <Label htmlFor="medium-input"></Label>
                            <Input id="medium-input" placeholder="Add some text here..." size="medium" />
                        </div>
                        <div>
                            <Label htmlFor="large-input"></Label>
                            <Input id="large-input" placeholder="Add some text here..." size="large" />
                        </div>
                    </div>
                }
            />
        </div>
    );
};
