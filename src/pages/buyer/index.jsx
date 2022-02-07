import { useEffect, useState } from 'react';
import TablePagination from '@mui/material/TablePagination';
import { getBuyer } from '../../services/buyer';
import { Pagination, Stack } from '@mui/material';

export default function Buyer() {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(2);
    const [data, setData] = useState([])

    const handleChangePage = (event, newPage) => {
        console.log(event, newPage)
        setPage(newPage);
        getData()
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
        getData()
    };

    const getData = async() => {
        await getBuyer(search, page, rowsPerPage).then(function (res) {
            setData(res)
            // console.log("res: ", res)
        })


    }

    useEffect(() => {
        getData()
    }, [])


    if (data.results === undefined)
        return "there's an error"
    return (
        <div>
            <div>
                {data.results.data.map((index, key) => (
                    <p key={key}>{index.username}</p>
                ))}
            </div>
            <TablePagination
                component="div"
                count={data.results.total}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

            <Stack spacing={2}>
                <Pagination
                    count={data.results.total / rowsPerPage}
                    showFirstButton
                    showLastButton
                    // onChange={handleChangePage} 
                    onClick={(e)=> {
                        setPage(parseInt(e.target.textContent))
                        console.log(e.target.textContent, page, rowsPerPage)
                        getBuyer()
                    }}
                    
                    />
            </Stack>
        </div>
    );
}