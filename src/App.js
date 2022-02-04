import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Content from './template/content/Content'
import Topbar from './template/header/Topbar'
import Sidebar from './template/sidebar/Sidebar'
import Login from './pages/beforeLogin/Login'
import { expiredStorage } from './util/expiredStorage'
import Sidenav from './template/sidebar/Sidenav'
import BeforeLogin from './template/content/BeforeLogin'
import Register from './pages/beforeLogin/Register'
import ForgotPassword from './pages/beforeLogin/ForgotPassword'
import NotFound from './pages/notfound'
import Step2 from './pages/beforeLogin/registerStep/Step-2'
import Step3 from './pages/beforeLogin/registerStep/Step-3'
import { useEffect } from 'react'
import { handleLogout } from './util/actions'

function App() {

  useEffect(() => {
    window.addEventListener('storage', () => {
      console.log("user try to change token")
      handleLogout()
    })
  }, [])

  if (expiredStorage.getItem("token") === "" || expiredStorage.getItem("token") === null)
    return (
      <BrowserRouter>
        <BeforeLogin contents={
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/2" element={<Step2 />} />
            <Route path="/register/3" element={<Step3 />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        } />
      </BrowserRouter>
    )
  return (
    <>
      <BrowserRouter>

        <div className="text-sm">
          <Sidenav />
          <Content />

        </div>

      </BrowserRouter>

    </>
  );
}

export default App;
