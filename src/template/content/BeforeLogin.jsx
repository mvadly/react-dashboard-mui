import React from 'react';
import "./BeforeLogin.css"
import Pari from "../../pari-white.png"

function BeforeLogin({ contents }) {
    return (
        <div className="body-login relative">
            <div className="pari-logo">
                <img src={Pari} alt="logo pari" />
            </div>
            <div className="rounded-2xl mx-auto text-center text-white max-w-lg">
                {contents}
            </div>
            {/* <Wave className="absolute bottom-0" /> */}
            
        </div >
    );
}

export default BeforeLogin;