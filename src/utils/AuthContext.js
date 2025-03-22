// utils/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        console.log("AuthContext - Stored token on app start:", storedToken); // Debug
        if (storedToken) {
            setToken(storedToken);
            const storedRole = localStorage.getItem("role");
            console.log("AuthContext - Stored role on app start:", storedRole); // Debug
            if (storedRole) setUserRole(storedRole);
            setIsLoggedIn(true); // Đảm bảo isLoggedIn được đặt thành true nếu có token
        } else {
            console.log("AuthContext - No token found, isLoggedIn set to false");
            setIsLoggedIn(false);
        }
    }, []);

    const login = (newToken, role) => {
        localStorage.setItem("token", newToken);
        localStorage.setItem("role", role);
        setToken(newToken);
        setUserRole(role);
        setIsLoggedIn(true);
        console.log("AuthContext - Logged in with token:", newToken, "and role:", role); // Debug
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setToken(null);
        setUserRole(null);
        setIsLoggedIn(false);
        console.log("AuthContext - Logged out"); // Debug
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userRole, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);