import React, { useState, useEffect } from "react";
import axios from "axios";

const AccountInfo = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem("token"); // Lấy token từ localStorage
                if (!token) {
                    throw new Error("Không tìm thấy token. Vui lòng đăng nhập lại.");
                }

                const response = await axios.get("http://localhost:8088/api/users/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUserData(response.data); // Lưu dữ liệu từ API
                setLoading(false);
            } catch (err) {
                setError(err.response?.data?.error || "Không thể tải thông tin người dùng");
                setLoading(false);
                console.error("Lỗi khi lấy thông tin người dùng:", err);
            }
        };

        fetchUserProfile();
    }, []);

    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="account-info-content">
            <h2>THÔNG TIN TÀI KHOẢN</h2>
            <p><strong>Họ tên:</strong> {userData?.fullName || "Chưa có thông tin"}</p>
            <p><strong>Điện thoại:</strong> {userData?.phoneNumber || "Chưa có thông tin"}</p>
            <p><strong>Địa chỉ:</strong> {userData?.address || "Chưa có thông tin"}</p>
        </div>
    );
};

export default AccountInfo;