import { MenuItem, Select } from '@mui/material';
import ReportSharpIcon from '@mui/icons-material/ReportSharp';

const SelectInput = ({ title, required, data, errorText, ...attr }) => {
    return (

        <div className="py-1">
            <div className="text-md font-medium mb-3">{title}
                {required ? <sup className="text-red-500"> *</sup> : ""}
            </div>
            <Select {...attr} className={errorText !== undefined ? "border border-red-500" : ""}>
                {data.map((index, key) =>
                    <MenuItem value={index.val} key={key} selected>{(index.text === undefined ? index.val : index.text)}</MenuItem>
                )}
            </Select>
            {errorText !== undefined ? <div className="text-red-500 text-sm flex items-center gap-1 mt-2"><ReportSharpIcon />{errorText}</div> : ""}
        </div>
    );
};

export default SelectInput;