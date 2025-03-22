import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Orders.scss";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    // Lấy danh sách tất cả đơn hàng từ API
    const fetchOrders = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("Vui lòng đăng nhập admin trước");
                navigate("/admin/login");
                return;
            }

            const response = await axios.get("http://localhost:8088/api/orders", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Orders data:", response.data); // Debug dữ liệu trả về
            setOrders(response.data);
            setFilteredOrders(response.data);
            setLoading(false);
        } catch (err) {
            setError("Không thể tải danh sách đơn hàng");
            setLoading(false);
            console.error("Lỗi khi lấy đơn hàng:", err);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, [navigate]);

    // Xử lý tìm kiếm
    const handleSearch = () => {
        if (!searchQuery) {
            setFilteredOrders(orders);
            return;
        }

        const filtered = orders.filter(
            (order) =>
                order.id.toString().includes(searchQuery) ||
                (order.fullName || "").toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredOrders(filtered);
    };

    // Xử lý xóa mềm đơn hàng
    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa đơn hàng này?")) {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.delete(`http://localhost:8088/api/orders/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // Làm mới danh sách đơn hàng từ API để đồng bộ trạng thái active
                await fetchOrders();

                alert(response.data || "Xóa đơn hàng thành công!"); // Hiển thị thông báo từ backend
            } catch (err) {
                alert(err.response?.data || "Không thể xóa đơn hàng");
                console.error("Lỗi khi xóa đơn hàng:", err);
            }
        }
    };

    const handleUpdate = (id) => {
        navigate(`/admin/orders/update/${id}`);
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    if (loading) return <div>Đang tải đơn hàng...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="orders">
            <div className="orders-header-container">
                <h2>Orders Admin Page</h2>
                <div className="orders-header">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search orders by ID or customer name..."
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    <button className="add-order-button" onClick={() => navigate("/admin/orders/add")}>
                        Add New Order
                    </button>
                </div>
            </div>
            <div className="orders-table-container">
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Note</th>
                            <th>Order Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Shipping Address</th>
                            <th>Shipping Date</th>
                            <th>Payment Method</th>
                            <th>Active</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.length > 0 ? (
                            filteredOrders.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.userId || "N/A"}</td>
                                    <td>{order.fullName || "N/A"}</td>
                                    <td>{order.email || "N/A"}</td>
                                    <td>{order.phoneNumber || "N/A"}</td>
                                    <td>{order.address || "N/A"}</td>
                                    <td>{order.note || "N/A"}</td>
                                    <td>{order.orderDate || "N/A"}</td>
                                    <td>{order.status || "N/A"}</td>
                                    <td>{order.totalMoney ? `${order.totalMoney.toLocaleString("vi-VN")} đ` : "N/A"}</td>
                                    <td>{order.shippingAddress || "N/A"}</td>
                                    <td>{order.shippingDate || "N/A"}</td>
                                    <td>{order.paymentMethod || "N/A"}</td>
                                    <td>{order.active !== undefined ? (order.active ? "Yes" : "No") : "N/A"}</td>
                                    <td>
                                        <button
                                            className="update-button"
                                            onClick={() => handleUpdate(order.id)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="delete-button"
                                            onClick={() => handleDelete(order.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="16">Không có đơn hàng nào để hiển thị</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;