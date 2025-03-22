import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderAdmin from './HeaderAdmin';
import Menu from './Menu';
import './AdminLayout.scss';

const AdminLayout = ({ isAdminLoggedIn, setIsAdminLoggedIn }) => {
    return (
        <div className="admin-layout">
            <HeaderAdmin isAdminLoggedIn={isAdminLoggedIn} setIsAdminLoggedIn={setIsAdminLoggedIn} />
            <div className="admin-content">
                <Menu />
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;