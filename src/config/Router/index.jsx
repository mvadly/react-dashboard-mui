import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BeforeLogin } from '../../components';
import { Step2, Step3, Login, ForgotPassword, Register } from '../../pages/beforeLogin';
import MainApp from '../../pages/MainApp';
import NotFound from '../../pages/notfound';
import { expiredStorage } from '../../util/expiredStorage';

const Router = () => {
    if (expiredStorage.getItem("token") === "" || expiredStorage.getItem("token") === null)
        return (
            <BrowserRouter>
                <BeforeLogin contents={
                    <Routes>
                        <Route exact path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/register/2" element={<Step2 />} />
                        <Route path="/register/3" element={<Step3 />} />
                        <Route path="/forgot_password" element={<ForgotPassword />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                } />
            </BrowserRouter>
        );
    else
        return (
            <BrowserRouter>
                <MainApp />
            </BrowserRouter>
        )
};

export default Router;