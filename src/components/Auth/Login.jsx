import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../utils/AuthContext";
import "./Auth.scss";

const Login = () => {
    const [phone_number, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const auth = useAuth();
    if (!auth) {
        console.error("AuthContext is not provided. Ensure Login is wrapped by AuthProvider.");
        return <div>Error: AuthContext not provided</div>;
    }
    const { login } = auth;

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:8088/api/users/login", {
                phone_number,
                password,
            });
            const { token, role } = response.data;
            console.log("Login Success - Token:", token, "Role:", role);

            if (role === "ADMIN") {
                setError("Tài khoản hoặc mật khẩu không đúng");
                return;
            }

            login(token, role); 
            navigate("/");
        } catch (error) {
            setError(error.response?.data?.error || "Tài khoản hoặc mật khẩu không đúng");
            console.error("User Login Error:", error);
        }
    };

    return (
        <div className="auth-container">
            <h2>User Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Số điện thoại"
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Đăng nhập</button>
            </form>
            <p>
                Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
            </p>
        </div>
    );
};

export default Login;