import { NavLink } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import logo from "../../pari.png"
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <img src={logo} alt="logo" className="text-center px-8 py-4 w-60"/>
                <ul className="sidebarMenu text-orange-500">
                    <li><NavLink to="/"> <DashboardIcon className="menuIcon"/> Dashboard</NavLink></li>
                    <li><NavLink to="/users"><GroupIcon className="menuIcon"/> User Management</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar