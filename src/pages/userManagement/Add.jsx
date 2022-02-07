import { useState } from 'react'
import Grid from '@mui/material/Grid'
import { TextField } from "@mui/material"
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import GroupIcon from '@mui/icons-material/Group';
import { Body, Title } from "../../components/Content"
import { useNavigate, useParams } from 'react-router-dom'
import { addUser } from '../../services/user';

const axios = require('axios');

const Add = () => {
    const [loading, setLoading] = useState(false)
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const { id } = useParams();
    let nav = useNavigate();

    console.log("id:", id)

    function postUserSave() {
        addUser({ fullname: fullname, username: username }).then(function (res) {
            console.log(res)
        })
    }

    async function postUserUpdate() {
        try {
            await axios.post(`${process.env.REACT_APP_APIURL}/v1/users/` + id, {
                fullname: fullname,
                username: username
            });
            setLoading(false)
            // nav("/users")
            window.location.reload()
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }

    const handleSave = () => {
        setLoading(true)
        if (id !== undefined) {
            postUserUpdate(id)
        } else {
            postUserSave()
        }
    }

    return (
        <>
            <Title icon={<GroupIcon />} title={"User Management / Add"} />
            <Body content={
                <div className="p-3">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={5}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                color="primary"
                                focused
                                helperText="Please enter your Full Name"
                                size="small"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)} />
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <TextField
                                fullWidth
                                label="Username"
                                color="primary"
                                focused
                                helperText="Please enter your Username"
                                size="small"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <LoadingButton
                                fullWidth
                                color="success"
                                onClick={handleSave}
                                loading={loading}
                                loadingPosition="start"
                                startIcon={<SaveIcon />}
                                variant="contained"
                            >
                                Save
                            </LoadingButton>
                        </Grid>
                    </Grid>

                </div>
            } />
        </>
    )
}

export default Add