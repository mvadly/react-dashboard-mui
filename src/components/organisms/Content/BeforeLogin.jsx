import React from 'react';
import "./BeforeLogin.css"
import {PariWhite} from '../../../assets'

function BeforeLogin({ contents }) {
    return (
        <div className="body-login relative flex">
            <div className="pari-logo absolute left-0">
                <img src={PariWhite} alt="logo pari" />
            </div>
            <div className="rounded-2xl mx-auto text-center text-white flex-items-center w-full md:max-w-lg">
                {contents}
            </div>
            {/* <Wave className="absolute bottom-0" /> */}

        </div >
    );
}

export default BeforeLogin;