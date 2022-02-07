import { TextField, Alert, Button, InputAdornment, IconButton } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from "react";
import { expiredStorage } from "../../util/expiredStorage";
import { Link } from "react-router-dom"
import { authLogin } from "../../services/login";
import { PasswordOutlined, Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
    document.title = "Login"
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [alertDialog, setAlertDialog] = useState("")
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const [vpass, setVpass] = useState(false)

    const handleLogin = (event) => {
        event.preventDefault()
        setLoading(true)
        setIsError(false)
        authLogin(user).then(function (response) {
            setLoading(false)
            if (response.status === 200) {
                expiredStorage.setItem("token", response.data.token, 3600)
                window.location.reload()
            } else {
                setIsError(true)
                setAlertDialog(<Alert className="my-4" onClose={() => setAlertDialog("")} variant="filled" severity="error">{response.data.message}</Alert>)
            }

        })
    }

    return (

        <div className="mx-3 w-full">
            <div className="text-4xl font-bold mb-4">Selamat Datang</div>
            <p className="text-sm">Silahkan masukan Email untuk login</p>
            <form className="flex flex-col gap-4 my-8" onSubmit={handleLogin} action="post">
                {alertDialog}
                <TextField
                    fullWidth
                    label="Masukkan Email"
                    size="small"
                    value={user.username}
                    className="bg-white border-0 rounded-md"
                    variant="filled"
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    disabled={loading ? true : false}
                    error={isError ? true : false}
                />

                <TextField
                    fullWidth label="Password"
                    type={!vpass ? "password" : "text"}
                    variant="outlined"
                    size="small"
                    value={user.password}
                    className="bg-white border-0 rounded-md"
                    variant="filled"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    disabled={loading ? true : false}
                    error={isError ? true : false}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => !vpass ? setVpass(true) : setVpass(false)}>
                                    {!vpass ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <Link to="/forgot_password" className="text-right text-sm text-white hover:text-slate-300">Lupa Password</Link>

                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white h-12 rounded-md">
                    Login
                </button>

                <p className="text-sm">Belum punya akun? <Link to="/register" className="hover:text-slate-300">Daftar sekarang</Link></p>
            </form>

        </div>
    );
};

Login.propTypes = {

};

export default Login;