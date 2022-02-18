import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Sidenav, Content } from '../../components';
import { handleLogout } from '../../util/actions';

const MainApp = () => {
    useEffect(() => {
        window.addEventListener('storage', () => {
            console.log("user try to change token")
            handleLogout()
        })
    }, [])

    return (
        <div className="text-sm">
            <Sidenav />
            <Content />

        </div>
    );
};

export default MainApp;