import { Skeleton } from "@mui/material";

export const SkeletonRowTable = ({ columns }) => {
    const skeleton = []
    for (let index = 0; index < columns; index++) {
        skeleton.push(index)
    }

    return (
        <>
            <tr key="row1">
                {skeleton.map((index) => (
                    <td key={`${index}-row-1`} className=" my-3 mx-2 px-3 py-2"><Skeleton animation="wave" height="20px" className="px-3" /></td>
                ))}
            </tr>
            <tr key="row2">
                {skeleton.map((index) => (
                    <td key={`${index}-row-2`} className=" my-3 mx-2 px-3 py-2"><Skeleton animation="wave" height="20px" className="px-3" /></td>
                ))}
            </tr>
            <tr key="row3">
                {skeleton.map((index) => (
                    <td key={`${index}-row-3`} className=" my-3 mx-2 px-3 py-2"><Skeleton animation="wave" height="20px" className="px-3" /></td>
                ))}
            </tr>
            
        </>
    )
};
