import { Route, Routes } from "react-router-dom";
import Dashboard from '../../../pages/dashboard';
import UserManagement from '../../../pages/userManagement';
import AddUser from '../../../pages/userManagement/Add';
import User from '../../../pages/userManagement/User';
import NotFound from '../../../pages/notfound';
import Topbar from '../Header';
import { useEffect } from "react";
import Buyer from "../../../pages/buyer";
import Product from "../../../pages/product";
import AddProduct from "../../../pages/product/Add";
const Content = () => {
    
    return (
        <div>

            <div className="content">
                <Topbar />
                <div className="bg-white p-3 border-b-2">{document.title}</div>
                <div className="p-3">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/products" element={<Product />} />
                        <Route path="/products/add" element={<AddProduct />} />
                        <Route path="/users" element={<UserManagement />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/users/add" element={<AddUser />} />
                        <Route path="/users/edit/:id" element={<AddUser />} />
                        <Route path="/buyer" element={<Buyer />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Content