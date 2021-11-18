import { ProgressIndicator, Stack } from "@fluentui/react";
import React, { FC, useEffect, useState } from "react";

export const ProgressIndicators: FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setProgress((progress + 0.05) % 1), 500);
        return () => clearInterval(interval);
    });

    return (
        <Stack tokens={{ childrenGap: 20 }}>
            <ProgressIndicator label="Example progress indicator" description="This is a description" />
            <ProgressIndicator
                label="Example progress indicator"
                description="This is a description"
                percentComplete={progress}
            />
        </Stack>
    );
};
