import ReportSharpIcon from '@mui/icons-material/ReportSharp';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Button, Input as Upload } from '@mui/material';
import { useState } from 'react';

const Input = ({ label, type, required, errorText, ...attr }) => {
    console.log(label, ":", errorText)
    return (
        <div className="py-1">
            <div className="text-md font-medium mb-3">{label}
                {required ? <sup className="text-red-500"> *</sup> : ""}
            </div>
            <input type={type}
                className={
                    `w-full rounded-md border h-10 border-gray-400 text-base px-3 
                    ${errorText !== undefined ? "border-red-500 bg-red-50 " : ""}
                    `}
                {...attr}
            />
            {errorText !== undefined ? <div className="text-red-500 text-sm flex items-center gap-1 mt-2"><ReportSharpIcon />{errorText}</div> : ""}
        </div>
    );
};

export const InputFile = ({ label, type, required, errorText, setFileTarget }) => {
    const [placeImage, setPlaceImage] = useState(<><UploadFileIcon className="mb-3" fontSize="large" /><br /></>)
    const changeFile = (e) => {
        console.log(e.target.files[0])
        const file = e.target.files[0];
        const reader = new FileReader();
        const url = reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            console.log("result:", reader.result, " url:", url, " e:", e)
            setFileTarget(file, reader.result);
            setPlaceImage(<img src={reader.result} alt="placeImage" className="h-40" />)
        }.bind();
    }
    console.log(label, ":", errorText)
    return (
        <div className="py-1">
            <div className="text-md font-medium mb-3">{label}
                {required ? <sup className="text-red-500"> *</sup> : ""}
            </div>
            <div className="w-full border-2 border-dashed flex items-center py-4">
                <div className="mx-auto text-center flex-row">
                    <div className="mb-4">{placeImage}</div>
                    <label htmlFor="contained-button-file">
                        <Upload
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            type="file"
                            style={{ display: "none" }}
                            onChange={changeFile} />
                        <Button
                            variant="contained"
                            component="span"
                            className=" bg-orange-500 text-white">
                            Upload
                        </Button>
                    </label>
                    
                </div>
            </div>
            {errorText !== undefined ? <div className="text-red-500 text-sm flex items-center gap-1 mt-2"><ReportSharpIcon />{errorText}</div> : ""}
        </div>
    );
};

export default Input;