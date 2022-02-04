import { TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { updateCompany } from '../../../reducer/registerStepSlice';
import { inArray } from '../../../util/helper';

const Step2 = () => {
    const [companyName, setCompanyName] = useState("")
    const [companyAlias, setCompanyAlias] = useState("")
    const [companyAddress, setCompanyAddress] = useState("")
    const [companyOK, setIsCompany] = useState(false)
    const data = useSelector(state => state.registerStep)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(updateCompany({ companyName, companyAlias, companyAddress, companyOK }))
        navigate("/register/3")

    }

    const handleChange = () => {
        setIsCompany(true)
        
    }

    useEffect(() => {
        handleChange()
        if (!data.giroOK) {
            navigate("/register")
        }
        
    }, [])

    return (
        <div className="mx-3 w-full mt-20">
            <div className="text-4xl font-bold mb-4">Lengkapi Akun Anda</div>
            <p className="text-sm">Silahkan tambahkan informasi perusahaan Anda</p>
            <form className="flex flex-col gap-4 my-8" onSubmit={handleRegister} method="post">
                <TextField
                    fullWidth
                    label="Masukkan Nomor Rekening Giro"
                    size="small"
                    value={data.norekGiro}
                    className="bg-white border-0 rounded-md"
                    variant="filled"
                    disabled={true}
                />

                <TextField
                    fullWidth
                    label="Nama Perusahaan"
                    size="small"
                    value={companyName === "" ? data.companyName : companyName}
                    className="bg-white border-0 rounded-md"
                    variant="filled"
                    onChange={(e) => setCompanyName(e.target.value)}
                />

                <TextField
                    fullWidth
                    label="Nama Alias Perusahaan"
                    size="small"
                    value={companyAlias === "" ? data.companyAlias : companyAlias}
                    className="bg-white border-0 rounded-md"
                    variant="filled"
                    onChange={(e) => setCompanyAlias(e.target.value)}
                />

                <TextField
                    fullWidth
                    label="Alamat Perusahaan"
                    size="small"
                    value={companyAddress === "" ? data.companyAddress : companyAddress}
                    className="bg-white border-0 rounded-md"
                    variant="filled"
                    onChange={(e) => setCompanyAddress(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white h-12 rounded-md">
                    Selanjutnya
                </button>

            </form>

        </div>
    );
};

export default Step2;