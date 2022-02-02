
import { Button, Grid, Avatar } from '@mui/material';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Title, Body, Pagination } from '../../components/Content'
import AddUserManagement from './Add';
import GroupIcon from '@mui/icons-material/Group';
import { expiredStorage } from '../../util/expiredStorage';


const axios = require('axios');
const UserManagement = () => {
    const [data, setData] = useState([])
    const [form, setForm] = useState("")
    const [addForm, setAddForm] = useState("")
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [dataPage, setDataPage] = useState(6)

    const getDataUser = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${process.env.REACT_APP_APIURL}/v1/users`, {
                headers: {
                    "Authorization": "Bearer " + expiredStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }
            });
            setData(response.data.result);
        } catch (error) {
            console.error(error);
        }
        setLoading(false)
    }

    useEffect(() => {
        getDataUser()
    }, [])

    const indexOfLastData = currentPage * dataPage
    const indexOfFirstData = indexOfLastData - dataPage
    const currentDatas = data.slice(indexOfFirstData, indexOfLastData)

    const paginate = (pageNumber) => { setCurrentPage(pageNumber) }

    async function deleteUser(id) {
        try {
            await axios.delete(`${process.env.REACT_APP_APIURL}/v1/users/` + id, {
                headers: {
                    "Authorization": "Bearer " + expiredStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }
            });
            setLoading(false)
            window.location.reload()
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }

    return (
        <>
            <Title icon={<GroupIcon />} title={"User Management " + addForm} />
            <div>{form}</div>
            <Body content={
                <div className="p-3">
                    <Link to="/users/add" className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 hover:font-bold" >Add Data</Link><br /><br />
                    {/* <Button
                        className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 hover:font-bold"
                        onClick={() => { setAddForm(" / Add"); setForm(<AddUserManagement />) }}
                    >Add Data</Button><br /><br /> */}

                    <Grid container spacing={3}>
                        {currentDatas.map(function (index, val) {
                            return (
                                <Grid item xs={6} md={4} key={index.id}>
                                    <div className="border p-2 rounded-lg flex flex-row gap-3">
                                        <div className="">
                                            <Avatar alt={index.username.toUpperCase()} src="/static/images/avatar/1.jpg" />
                                        </div>
                                        <div className="truncate w-full">
                                            <div className="font-bold truncate">{index.username}</div>
                                            <div className="text-sm truncate">{index.fullname}</div>
                                            <div className="text-right">
                                                <Link
                                                    to={`/users/edit/${index.id}`}
                                                    className="text-yellow-500 mr-3"
                                                    // onClick={() => {
                                                    //     setAddForm(" / Edit");
                                                    //     setForm(<AddUserManagement id={index.id} usernameF={index.username} fullnameF={index.fullname} />)
                                                    // }}
                                                    >
                                                    Edit
                                                </Link>

                                                <a
                                                    href="#!"
                                                    className="text-red-500 "
                                                    onClick={() => deleteUser(index.id)}
                                                >Delete</a>
                                            </div>
                                        </div>

                                    </div>
                                </Grid>

                            )
                        })}

                    </Grid>
                    <Pagination
                        dataPage={dataPage}
                        totalData={data.length}
                        paginate={paginate} />



                </div>
            } />
        </>

    )
}

export default UserManagement