import React from 'react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './HeaderAdmin.scss';

const HeaderAdmin = ({ isAdminLoggedIn, setIsAdminLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAdminLoggedIn(false);
        navigate('/admin/login');
    };

    return (
        <header className="header-admin">
            <div className="right">
                <FaUser className="user-icon" />
                {isAdminLoggedIn ? (
                    <span onClick={handleLogout} className="logout-button">
                        <FaSignOutAlt className="logout-icon" /> Logout
                    </span>
                ) : (
                    <span onClick={() => navigate('/admin/login')} className="login-button">
                        Login
                    </span>
                )}
            </div>
        </header>
    );
};

export default HeaderAdmin;