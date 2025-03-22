import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderDetail from "./OrderDetail";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:8088/api/orders/user", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setOrders(response.data);
                setLoading(false);
            } catch (err) {
                setError("Không thể tải danh sách đơn hàng");
                setLoading(false);
                console.error("Lỗi khi lấy đơn hàng:", err);
            }
        };

        fetchOrders();
    }, []);

    const handleOrderClick = (order) => {
        setSelectedOrder(order);
    };

    const handleCloseModal = () => {
        setSelectedOrder(null);
    };

    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>{error}</div>;

    // Lọc các đơn hàng có active = true
    const activeOrders = orders.filter((order) => order.active === true);

    return (
        <div className="orders-content">
            <h2>ĐƠN HÀNG CỦA BẠN</h2>
            {activeOrders.length > 0 ? (
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Đơn hàng</th>
                            <th>Ngày</th>
                            <th>Địa chỉ</th>
                            <th>Giá trị đơn hàng</th>
                            <th>Trạng thái đơn hàng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activeOrders.map((order) => (
                            <tr key={order.id}>
                                <td>
                                    <span
                                        style={{ cursor: "pointer", color: "#ff4081" }}
                                        onClick={() => handleOrderClick(order)}
                                    >
                                        #{order.id}
                                    </span>
                                </td>
                                <td>{order.orderDate}</td>
                                <td>{order.shippingAddress}</td>
                                <td>{order.totalMoney.toLocaleString("vi-VN")}đ</td>
                                <td>{order.status}</td> {/* Hiển thị trực tiếp status */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Chưa có đơn hàng nào.</p>
            )}

            {selectedOrder && (
                <OrderDetail
                    orderId={selectedOrder.id}
                    order={selectedOrder}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default Orders;