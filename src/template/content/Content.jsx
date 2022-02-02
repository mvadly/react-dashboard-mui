import './Content.css'
import { Route, Routes } from "react-router-dom";
import Dashboard from '../../pages/dashboard/Dashboard';
import UserManagement from '../../pages/userManagement/UserManagement';
import AddUser from '../../pages/userManagement/Add';
import User from '../../pages/userManagement/User';
import NotFound from '../../pages/notfound';
const Content = () => {
    return (
        <div className="content">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/user" element={<User />} />
              <Route path="/users/add" element={<AddUser />} />
              <Route path="/users/edit/:id" element={<AddUser />} />
              <Route element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default Content