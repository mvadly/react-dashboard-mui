import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { updateGiro } from '../../../reducer/registerStepSlice';
import { getValidGiro } from '../../../services/register';

const Step1 = () => {
    const [norekGiro, setNorekGiro] = useState("")
    const [giroOK, setGiroOK] = useState(false)
    const data = useSelector(state => state.registerStep)
    console.log(data)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        getValidGiro(norekGiro).then(function(res){
            if(res.data.status){
                dispatch(updateGiro({ norekGiro, giroOK }))
                navigate("/register/2")
            }
        })
        

    }

    const handleChange = () => {
        setGiroOK(true)
    }

    useEffect(() => {
        handleChange()
    }, [])

    return (
        <div className="mx-3 w-full">
            <div className="text-4xl font-bold mb-4">Daftarkan Akun Anda</div>
            <p className="text-sm">Silahkan masukan Nomor Rekening Giro Anda</p>
            <form className="flex flex-col gap-4 my-8" onSubmit={handleRegister} method="post">
                <TextField
                    fullWidth
                    label="Masukkan Nomor Rekening Giro"
                    size="small"
                    value={norekGiro === "" ? data.norekGiro : norekGiro}
                    className="bg-white border-0 rounded-md"
                    variant="filled"
                    onChange={(e) => setNorekGiro(e.target.value)}
                    // error={norekGiro === ""}
                    // helperText={norekGiro === "" ? "Required." : ""}
                />

                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white h-12 rounded-md">
                    Selanjutnya
                </button>

                <p className="text-sm">Sudah punya akun? <Link to="/" className="hover:text-slate-300">Login disini</Link></p>
            </form>

        </div>
    );
};

export default Step1;