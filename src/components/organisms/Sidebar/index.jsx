import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import GroupIcon from '@mui/icons-material/Group';
import { handleLogout } from '../../../util/actions';

import Swal from 'sweetalert2'
import { getJwtSecond } from '../../../util/jwt';
import { BuyerSvg, DashboardSvg, InvoiceSvg, OrderSvg, Pari, ProductSvg } from '../../../assets';

function Sidenav(props) {

    useEffect(() => {
        setTimeout(() => {
            Swal.fire({
                title: "Peringatan",
                icon: "warning",
                html: "Anda akan di logout beberapa saat lagi ...",
                timer: 5000,
                timerProgressBar: true,
                allowOutsideClick: false,
                showConfirmButton:false
            })

            setTimeout(() => {

                handleLogout()
            }, 5000)

        }, getJwtSecond());
    })



    return (
        <div className="sidenav border-r-2">
            <img src={Pari} alt="logo" className="text-center px-8 py-4 w-60" />
            <NavLink to="/"><DashboardSvg /> <span>Dashboard</span></NavLink>
            <NavLink to="/products"><ProductSvg /> <span>Produk</span></NavLink>
            <NavLink to="/order"><OrderSvg /> <span>Order</span></NavLink>
            <NavLink to="/buyer"><BuyerSvg /> <span>Pembeli</span></NavLink>
            <NavLink to="/invoice"><InvoiceSvg /> <span>Invoice</span></NavLink>
            <NavLink to="/users"><GroupIcon className="menuIcon" /> <span>User Management</span></NavLink>

        </div>
    );
}

export default Sidenav;