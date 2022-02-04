import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateEmail } from '../../../reducer/registerStepSlice'
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import { useNavigate } from 'react-router-dom';

const Step3 = () => {
    const data = useSelector(state => state.registerStep)
    const [emailAdmin, setEmailAdmin] = useState("")
    const [emailVerifikator, setEmailVerifikator] = useState(data.emailVerifikator.length > 1 ? data.emailVerifikator : [""])
    const [emailOK, setEmailOK] = useState(false)

    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addEmailVerifikator = () => {

        if (emailVerifikator.length < 3) {
            setEmailVerifikator(oldArray => [...oldArray, ``]);
        }
    }

    const handleChange = () => {
        setEmailOK(true)
    }

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(updateEmail({ emailAdmin, emailVerifikator, emailOK }))
    }

    useEffect(() => {
        handleChange()
        if (!data.companyOK) {
            navigate("/register/2")
        }
    }, [])

    return (
        <div className="mx-3 w-full mt-20">
            <div className="text-4xl font-bold mb-4">Daftarkan Email Anda</div>
            <p className="text-sm">Silahkan masukkan email akun perusahaan</p>
            <form className="flex flex-col gap-3 my-6" onSubmit={handleRegister} method="post">
                <TextField
                    fullWidth
                    label="Masukkan Email Admin"
                    size="small"
                    value={emailAdmin === "" ? data.emailAdmin : emailAdmin}
                    className="bg-white border-0 rounded-md"
                    variant="filled"
                    onChange={(e) => setEmailAdmin(e.target.value)}
                />

                <hr className="text-white my-3" />
                {
                    emailVerifikator.map((index, key) => (
                        <TextField
                            key={key}
                            fullWidth
                            label="Masukkan Email Verifikator"
                            size="small"
                            value={index}
                            name="emailV[]"
                            className="bg-white border-0 rounded-md"
                            variant="filled"
                            onChange={(e) => {
                                let newArr = [...emailVerifikator]
                                newArr[key] = e.target.value
                                setEmailVerifikator(newArr)
                            }}
                        />
                    ))



                }

                <a className="text-white cursor-pointer text-sm mb-3" onClick={addEmailVerifikator}>
                    <PersonAddAltTwoToneIcon /> Tambah
                </a>

                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white h-12 rounded-md">
                    Daftar
                </button>

            </form>

        </div>
    )
}

export default Step3;