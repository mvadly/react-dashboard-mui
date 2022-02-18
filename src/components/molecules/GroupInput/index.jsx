import { useState } from "react";
import { Checkbox } from "../..";

export const GroupCheckbox = ({ data, setComodities, ...attr }) => {
    const [cmd] = useState([])
    return (
        <div {...attr}>
            {data.map((index, key) => (
                <Checkbox
                    key={key}
                    title={index.title}
                    onClick={(e) => {
                        let newArr = cmd
                        let field = index.title.toLowerCase().replaceAll(" ","_")
                        newArr[key] = { field: field, status: e.target.checked }
                        setComodities(newArr)
                    }}
                />
            ))}
        </div>
    );
};