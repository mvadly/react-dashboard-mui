import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import GroupIcon from '@mui/icons-material/Group';
import logo from "../../pari.png"
import {ReactComponent as Dashboard} from '../../icons/dashboard.svg'
import {ReactComponent as Product} from '../../icons/product.svg'
import {ReactComponent as Order} from '../../icons/order.svg'
import {ReactComponent as Buyer} from '../../icons/buyer.svg'
import {ReactComponent as Invoice} from '../../icons/invoice.svg'
import { handleLogout } from '../../util/actions';

import Swal from 'sweetalert2'
import { getJwtSecond } from '../../util/jwt';

function Sidenav(props) {
    
    useEffect(()=>{
        setTimeout(() => {
            Swal.fire({
                title: "Peringatan",
                icon:"warning",
                html:"Anda akan di logout beberapa saat lagi ..."
            })
            
            handleLogout()
        }, getJwtSecond());
    })
    

    
    return (
        <div className="sidenav border-r-2">
            <img src={logo} alt="logo" className="text-center px-8 py-4 w-60" />
            <NavLink to="/"><Dashboard/> <span>Dashboard</span></NavLink>
            <NavLink to="/product"><Product/> <span>Produk</span></NavLink>
            <NavLink to="/order"><Order/> <span>Order</span></NavLink>
            <NavLink to="/buyer"><Buyer/> <span>Pembeli</span></NavLink>
            <NavLink to="/invoice"><Invoice/> <span>Invoice</span></NavLink>
            <NavLink to="/users"><GroupIcon className="menuIcon" /> <span>User Management</span></NavLink>

        </div>
    );
}

export default Sidenav;