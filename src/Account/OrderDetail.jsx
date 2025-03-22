import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OrderDetail.scss";

const OrderDetail = ({ orderId, order }) => {
    const [orderDetails, setOrderDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Định nghĩa kích thước ảnh giống như trong Products.js
    const THUMBNAIL_SIZE = { width: "50px", height: "50px" };

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8088/api/orderdetails/order/${orderId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setOrderDetails(response.data);
                setLoading(false);
            } catch (err) {
                setError("Không thể tải chi tiết đơn hàng");
                setLoading(false);
                console.error("Lỗi khi lấy chi tiết đơn hàng:", err);
            }
        };

        fetchOrderDetails();
    }, [orderId]);

    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="order-detail-content">
            <h2>Chi tiết đơn hàng #{orderId}</h2>
            <p>Ngày tạo: {order.orderDate || "N/A"}</p>
            <p>Trạng thái đơn hàng: {order.status || "N/A"}</p>

            <div className="order-detail-info">
                <div className="shipping-info">
                    <h3>ĐỊA CHỈ GIAO HÀNG</h3>
                    <p>Họ và Tên: <strong>{order.fullName || "N/A"}</strong></p>
                    <p>Địa chỉ: {order.shippingAddress || "N/A"}</p>
                    <p>Số điện thoại: {order.phoneNumber || "N/A"}</p>
                    <p>Email: {order.email || "N/A"}</p>
                </div>
                <div className="payment-info">
                    <h3>THANH TOÁN</h3>
                    <p>Thanh toán khi giao hàng (COD)</p>
                </div>
                <div className="note-info">
                    <h3>GHI CHÚ</h3>
                    <p>{order.note || "Không có ghi chú"}</p>
                </div>
            </div>

            <div className="order-detail-products">
                <h3>Sản phẩm</h3>
                <table className="products-table">
                    <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderDetails.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    {item.product && item.product.thumbnail ? (
                                        <img
                                            src={`http://localhost:8088/uploads/${item.product.thumbnail}`}
                                            alt={item.product.name}
                                            style={{
                                                width: THUMBNAIL_SIZE.width,
                                                height: THUMBNAIL_SIZE.height,
                                                objectFit: "cover",
                                                marginRight: "10px",
                                            }}
                                        />
                                    ) : (
                                        "No thumbnail"
                                    )}
                                    {item.product ? item.product.name : "N/A"}
                                </td>
                                <td>{item.price ? item.price.toLocaleString("vi-VN") + "đ" : "N/A"}</td>
                                <td>{item.numberOfProducts || "N/A"}</td>
                                <td>{item.totalMoney ? item.totalMoney.toLocaleString("vi-VN") + "đ" : "N/A"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="order-detail-summary">
                <p><strong>Tổng tiền: {order.totalMoney ? order.totalMoney.toLocaleString("vi-VN") + "đ" : "N/A"}</strong></p>
            </div>
        </div>
    );
};

export default OrderDetail;