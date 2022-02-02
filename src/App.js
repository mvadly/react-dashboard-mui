import './App.css'
import { BrowserRouter } from "react-router-dom"
import Content from './template/content/Content'
import Topbar from './template/header/Topbar'
import Sidebar from './template/sidebar/Sidebar'
import Login from './pages/login/Login'
import { expiredStorage } from './util/expiredStorage'

function App() {
  if (expiredStorage.getItem("token") === "" || expiredStorage.getItem("token") === null) return <Login/>
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <div className="wrapper text-sm">
          <Sidebar />
          <Content />

        </div>

      </BrowserRouter>

    </>
  );
}

export default App;
