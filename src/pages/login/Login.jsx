import { TextField, Alert } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from "react";
import { expiredStorage } from "../../util/expiredStorage";
const axios = require('axios');
const Login = () => {
    const [loading, setLoading] = useState(false)
    const [alertDialog, setAlertDialog] = useState("")
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    async function postUserLogin() {
        try {
            const response = await axios.post(`${process.env.REACT_APP_APIURL}/v1/auth/login`, user);
            setLoading(false)
            expiredStorage.setItem("token", response.data.token, 3600)
            window.location.reload()
        } catch (error) {
            console.log(error.response.data.message);
            setLoading(false)
            setAlertDialog(<Alert className="my-4" onClose={() => setAlertDialog("")} variant="filled" severity="error">{error.response.data.message}</Alert>)
        }
    }

    const handleLogin = () => {
        setLoading(true)
        postUserLogin()
    }

    return (
        <div className="mx-96 my-36 rounded-2xl bg-white">
            <div className="p-4 text-center">
                <div className="text-2xl my-8">Login User</div>
                <div></div>
                <div className="flex flex-col gap-3 mb-8 px-4">
                    {alertDialog}
                    <TextField
                        fullWidth
                        label="Username"
                        variant="outlined"
                        size="small"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    <TextField
                        fullWidth label="Password"
                        type="password"
                        variant="outlined"
                        size="small"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <LoadingButton
                        loading={loading}
                        variant="contained"
                        color="success"
                        onClick={handleLogin}>
                        Login
                    </LoadingButton>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {

};

export default Login;