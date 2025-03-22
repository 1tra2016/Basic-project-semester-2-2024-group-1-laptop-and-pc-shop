import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import AccountInfo from "./AccountInfo";
import Orders from "./Orders";
import ChangePassword from "./ChangePassword";
import "./Account.scss";

const Account = () => {
    const navigate = useNavigate();
    const { isLoggedIn, logout, user } = useAuth();
    const [selectedMenu, setSelectedMenu] = useState("account-info");

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const renderContent = () => {
        switch (selectedMenu) {
            case "account-info":
                return <AccountInfo user={user} />;
            case "orders":
                return <Orders />;
            case "change-password":
                return <ChangePassword />;
            default:
                return <AccountInfo user={user} />;
        }
    };

    return (
        <div className="account-container">
            <h1>TRANG TÀI KHOẢN</h1>
            <p>Xin chào!</p>

            <div className="account-layout">
                <div className="account-menu">
                    <h2>Thông tin tài khoản</h2>
                    <ul>
                        <li
                            className={selectedMenu === "account-info" ? "active" : ""}
                            onClick={() => setSelectedMenu("account-info")}
                        >
                            Thông tin tài khoản
                        </li>
                        <li
                            className={selectedMenu === "orders" ? "active" : ""}
                            onClick={() => setSelectedMenu("orders")}
                        >
                            Đơn hàng của bạn
                        </li>
                        <li
                            className={selectedMenu === "change-password" ? "active" : ""}
                            onClick={() => setSelectedMenu("change-password")}
                        >
                            Đổi mật khẩu
                        </li>
                        <li onClick={handleLogout}>Đăng xuất</li>
                    </ul>
                </div>
                <div className="account-content">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Account;