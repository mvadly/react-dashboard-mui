
import { Grid, Avatar } from '@mui/material';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Title, Body, Pagination } from '../../components/Content'
import GroupIcon from '@mui/icons-material/Group';
import { deleteUser, getUsers } from '../../services/user';

const UserManagement = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [dataPage, setDataPage] = useState(6)
    document.title = "User Management"

    useEffect(() => {
        setLoading(true)
        getUsers().then(function(res){
            setData(res.data.result)
        })
        setLoading(false)

    }, [])

    const indexOfLastData = currentPage * dataPage
    const indexOfFirstData = indexOfLastData - dataPage
    const currentDatas = data.slice(indexOfFirstData, indexOfLastData)

    const paginate = (pageNumber) => { setCurrentPage(pageNumber) }

    function _delete(id) {
        deleteUser(id).then(function(res){
            console.log(res)
        })
    }

    return (
        <>
            <Title icon={<GroupIcon />} title={"User Management"} />
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
                                                    onClick={() => _delete(index.id)}
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