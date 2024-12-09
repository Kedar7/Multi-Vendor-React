import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            This is main loayout <Outlet/>
        </div>
    );
};

export default MainLayout;