import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Sidenav, Content } from '../../components';

const MainApp = () => {
    return (
            <div className="text-sm">
                <Sidenav />
                <Content />

            </div>
    );
};

export default MainApp;