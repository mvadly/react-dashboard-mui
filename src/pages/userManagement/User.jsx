import { Avatar } from '@mui/material';
import MaterialTable from '@material-table/core';
import { expiredStorage } from '../../util/expiredStorage';
function User() {
    return (
        <MaterialTable
            title="User Management"
            columns={[
                {
                    title: 'Avatar',
                    field: "fullname",
                    render: rowData => (
                        <Avatar alt={rowData.fullname.toUpperCase()} src="/static/images/avatar/1.jpg" />
                    ),
                },
                { title: 'Fullname', field: 'fullname' },
                { title: 'Username', field: 'username' },
            ]}
            data={query =>

                new Promise((resolve, reject) => {
                    // console.log(query)
                    // let url = 'https://reqres.in/api/users?'
                    let url = `${process.env.REACT_APP_APIURL}/v1/list_users?`
                    url += 'q=' + query.search
                    url += '&per_page=' + query.pageSize
                    url += '&page=' + (query.page + 1)
                    fetch(url, {
                        headers:{
                            "Authorization" : "Bearer "+expiredStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => response.json())
                        .then(result => {
                            resolve({
                                data: result.results.data,
                                page: result.results.page - 1,
                                totalCount: result.results.total,
                            })
                        })
                })
            }
        />
    )
}

export default User
