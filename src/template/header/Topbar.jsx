import "./Topbar.css"
import { Avatar, Button } from "@mui/material"
import { deepOrange } from "@mui/material/colors"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
const Topbar = () => {
    const [toggle, setToggle] = useState(false)

    const toggleSidebar = () => {

        setToggle(toggle ? false : true)

        if (toggle) {
            document.querySelector(".wrapper").setAttribute("style", "display:block")
            document.querySelector(".sidebar").setAttribute("style", "display:none")
        } else {
            document.querySelector(".wrapper").removeAttribute("style")
            document.querySelector(".sidebar").removeAttribute("style")
        }
    }



    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">
                        <Button onClick={toggleSidebar}><MenuIcon className="text-orange-500" /></Button>

                        <span className="levelUser">AdminMV</span>
                    </div>
                </div>
                <div className="topRight">
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>F</Avatar>
                </div>
            </div>
        </div>

    )
}

export default Topbar