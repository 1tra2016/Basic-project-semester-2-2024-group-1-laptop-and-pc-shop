import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.scss";

const AdminLogin = ({ setIsAdminLoggedIn }) => {
    const [phone_number, setPhoneNumber] = useState(""); // Thay username bằng phone_number
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:8088/api/users/login", {
                phone_number,
                password,
            });
            const { token, role } = response.data;
            console.log("Admin Login Success - Token:", token, "Role:", role);

            // Kiểm tra role
            if (role !== "ADMIN") {
                setError("Tài khoản hoặc mật khẩu không đúng");
                return;
            }

            // Lưu token và cập nhật trạng thái
            localStorage.setItem("token", token);
            setIsAdminLoggedIn(true);
            alert("Đăng nhập admin thành công"); // Giữ alert nếu bạn muốn
            navigate("/admin/dashboard");
        } catch (error) {
            setError(error.response?.data?.error || "Tài khoản hoặc mật khẩu không đúng");
            console.error("Admin Login Error:", error);
        }
    };

    return (
        <div className="admin-login">
            <h2>Admin Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Số điện thoại</label>
                    <input
                        type="text"
                        value={phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Đăng nhập</button>
            </form>
            <p>
                Là người dùng? <Link to="/login">Đăng nhập user</Link>
            </p>
        </div>
    );
};

export default AdminLogin;