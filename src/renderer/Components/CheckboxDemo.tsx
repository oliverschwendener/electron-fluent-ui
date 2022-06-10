import { Checkbox } from "@fluentui/react-components";
import { FC, useState } from "react";

export const CheckBoxDemo: FC = () => {
    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(true);
    const [option3, setOption3] = useState(false);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Checkbox
                checked={option1 && option2 && option3 ? true : !(option1 || option2 || option3) ? false : "mixed"}
                onChange={(_ev, data) => {
                    setOption1(!!data.checked);
                    setOption2(!!data.checked);
                    setOption3(!!data.checked);
                }}
                label="All options"
            />
            <Checkbox checked={option1} onChange={() => setOption1((checked) => !checked)} label="Option 1" />
            <Checkbox checked={option2} onChange={() => setOption2((checked) => !checked)} label="Option 2" />
            <Checkbox checked={option3} onChange={() => setOption3((checked) => !checked)} label="Option 3" />
        </div>
    );
};
