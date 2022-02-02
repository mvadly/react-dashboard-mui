import './Sidebar.css'
import { NavLink } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarMenu text-orange-500">
                    <li><NavLink to="/"> <DashboardIcon className="menuIcon"/> Dashboard</NavLink></li>
                    <li><NavLink to="/users"><GroupIcon className="menuIcon"/> User Management</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar