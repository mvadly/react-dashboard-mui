import { Route, Routes } from "react-router-dom";
import Dashboard from '../../pages/dashboard/Dashboard';
import UserManagement from '../../pages/userManagement/UserManagement';
import AddUser from '../../pages/userManagement/Add';
import User from '../../pages/userManagement/User';
import NotFound from '../../pages/notfound';
import Topbar from '../header/Topbar';
import { useEffect } from "react";
const Content = () => {
    
    return (
        <div>

            <div className="content">
                <Topbar />
                <div className="bg-white p-3 border-b-2">{document.title}</div>
                <div className="p-3">
                    <Routes>
                        <Route exact path="/" element={<Dashboard />} />
                        <Route path="/users" element={<UserManagement />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/users/add" element={<AddUser />} />
                        <Route path="/users/edit/:id" element={<AddUser />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Content