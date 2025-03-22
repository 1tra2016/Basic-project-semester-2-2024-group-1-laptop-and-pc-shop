import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Users.scss";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Lấy danh sách tất cả người dùng
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError("Vui lòng đăng nhập admin trước");
                    navigate("/admin/login");
                    return;
                }

                const response = await axios.get("http://localhost:8088/api/users", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("Users data:", response.data); // Debug dữ liệu trả về
                setUsers(response.data);
                setFilteredUsers(response.data); // Ban đầu hiển thị toàn bộ danh sách
                setLoading(false);
            } catch (err) {
                setError("Không thể tải danh sách người dùng");
                setLoading(false);
                console.error("Lỗi khi lấy danh sách người dùng:", err);
            }
        };

        fetchUsers();
    }, [navigate]);

    // Xử lý tìm kiếm
    const handleSearch = () => {
        if (!searchQuery) {
            setFilteredUsers(users);
            return;
        }

        // Kiểm tra xem searchQuery có phải là số hay không
        if (!isNaN(searchQuery) && searchQuery.trim() !== "") {
            // Nếu là số, chỉ tìm kiếm chính xác theo id
            const filtered = users.filter((user) => user.id.toString() === searchQuery);
            setFilteredUsers(filtered);
        } else {
            // Nếu không phải là số, tìm kiếm theo fullName và phoneNumber
            const filtered = users.filter(
                (user) =>
                    (user.fullName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (user.phoneNumber || "").includes(searchQuery)
            );
            setFilteredUsers(filtered);
        }
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleUpdate = (id) => {
        navigate(`/users/update/${id}`);
    };

    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="users">
            <div className="search-filter-container">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search users by ID, name, or phone..."
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                    <button className="search-button" onClick={handleSearch}>
                        <FaSearch /> Search
                    </button>
                </div>
            </div>
            <div className="users-table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Phone Number</th>
                            <th>Level</th>
                            <th>Active</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td> {/* Bỏ dấu # trước id */}
                                    <td>{user.fullName || "N/A"}</td>
                                    <td>{user.phoneNumber || "N/A"}</td>
                                    <td>{user.role === "ADMIN" ? "Admin" : "User"}</td>
                                    <td>{user.active ? "True" : "False"}</td>
                                    <td>{user.address || "N/A"}</td>
                                    <td>
                                        {user.role === "ADMIN" ? (
                                            <span></span>
                                        ) : (
                                            <button
                                                className="edit-button"
                                                onClick={() => handleUpdate(user.id)}
                                            >
                                                Update
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">Không có người dùng nào để hiển thị</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;