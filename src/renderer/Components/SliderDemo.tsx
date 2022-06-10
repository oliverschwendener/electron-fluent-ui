import { Label, Slider, Text } from "@fluentui/react-components";
import { FC, useState } from "react";

export const SliderDemo: FC = () => {
    const [currentValue, setCurrentValue] = useState<number>(50);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
                <Text>Current Value: {currentValue}</Text>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Label htmlFor="medium-slider">Medium Slider</Label>
                <Slider
                    value={currentValue}
                    onChange={(_, { value }) => setCurrentValue(value)}
                    min={0}
                    max={100}
                    size="medium"
                    id="medium-slider"
                />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Label htmlFor="small-slider">Small Slider</Label>
                <Slider
                    size="small"
                    id="small-slider"
                    value={currentValue}
                    onChange={(_, { value }) => setCurrentValue(value)}
                    min={0}
                    max={100}
                />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Label htmlFor="disabled-slider">Disabled Slider</Label>
                <Slider
                    size="small"
                    id="disabled-slider"
                    disabled
                    value={currentValue}
                    onChange={(_, { value }) => setCurrentValue(value)}
                    min={0}
                    max={100}
                />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Label htmlFor="step-slider">Step Example</Label>
                <Slider
                    step={10}
                    id="step-slider"
                    value={currentValue}
                    onChange={(_, { value }) => setCurrentValue(value)}
                    min={0}
                    max={100}
                />
            </div>
        </div>
    );
};
