import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UpdateOrder.scss";

const UpdateOrder = () => {
    const { id } = useParams(); // Lấy order ID từ URL
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);
    const [orderDetails, setOrderDetails] = useState([]); // State cho orderDetails
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        full_name: "", // Thay đổi thành full_name
        email: "",
        phone_number: "", // Thay đổi thành phone_number
        address: "",
        note: "",
        total_money: 0, // Thay đổi thành total_money
        shipping_address: "", // Thay đổi thành shipping_address
        shipping_date: "", // Thay đổi thành shipping_date
        payment_method: "", // Thay đổi thành payment_method
        status: "",
    });

    // Các trạng thái đơn hàng từ backend
    const orderStatuses = [
        "pending",
        "processing",
        "shipped",
        "delivered",
        "cancelled",
    ];

    // Định nghĩa kích thước ảnh giống như trong OrderDetail.js
    const THUMBNAIL_SIZE = { width: "50px", height: "50px" };

    // Hàm định dạng ngày tháng cho orderDate
    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString; // Nếu không phải định dạng ngày hợp lệ, trả về nguyên bản
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    // Hàm định dạng ngày cho input type="date" (YYYY-MM-DD)
    const formatDateForInput = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return ""; // Nếu không phải định dạng ngày hợp lệ, trả về rỗng
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    // Lấy thông tin đơn hàng và orderDetails khi component được mount
    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError("Vui lòng đăng nhập admin trước");
                    navigate("/admin/login");
                    return;
                }

                // Lấy thông tin đơn hàng
                const orderResponse = await axios.get(`http://localhost:8088/api/orders/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const orderData = orderResponse.data;
                setOrder(orderData);
                // Điền dữ liệu vào form
                setFormData({
                    full_name: orderData.fullName || "", // Gán từ orderData.fullName
                    email: orderData.email || "",
                    phone_number: orderData.phoneNumber || "", // Gán từ orderData.phoneNumber
                    address: orderData.address || "",
                    note: orderData.note || "",
                    total_money: orderData.totalMoney || 0, // Gán từ orderData.totalMoney
                    shipping_address: orderData.shippingAddress || "", // Gán từ orderData.shippingAddress
                    shipping_date: formatDateForInput(orderData.shippingDate), // Gán từ orderData.shippingDate
                    payment_method: orderData.paymentMethod || "", // Gán từ orderData.paymentMethod
                    status: orderData.status || "pending",
                });

                // Lấy orderDetails
                const orderDetailsResponse = await axios.get(`http://localhost:8088/api/orderdetails/order/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setOrderDetails(orderDetailsResponse.data);

                setLoading(false);
            } catch (err) {
                setError("Không thể tải thông tin đơn hàng");
                setLoading(false);
                console.error("Lỗi khi lấy đơn hàng:", err);
            }
        };

        fetchOrder();
    }, [id, navigate]);

    // Xử lý thay đổi input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Xử lý submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("Vui lòng đăng nhập admin trước");
                navigate("/admin/login");
                return;
            }

            // Gửi yêu cầu cập nhật với payload khớp với @JsonProperty
            await axios.put(`http://localhost:8088/api/orders/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            alert("Cập nhật đơn hàng thành công!");
            navigate("/admin/orders"); // Quay lại trang danh sách đơn hàng
        } catch (err) {
            alert("Không thể cập nhật đơn hàng");
            console.error("Lỗi khi cập nhật đơn hàng:", err);
        }
    };

    if (loading) return <div>Đang tải thông tin đơn hàng...</div>;
    if (error) return <div>{error}</div>;
    if (!order) return <div>Không tìm thấy đơn hàng</div>;

    return (
        <div className="update-order">
            <h2>Cập nhật đơn hàng #{order.id}</h2>
            <form onSubmit={handleSubmit} className="order-form">
                <div className="form-group">
                    <label>Họ và tên:</label>
                    <input
                        type="text"
                        name="full_name" // Thay đổi name thành full_name
                        value={formData.full_name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Số điện thoại:</label>
                    <input
                        type="text"
                        name="phone_number" // Thay đổi name thành phone_number
                        value={formData.phone_number}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Địa chỉ:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Ghi chú:</label>
                    <textarea
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Tổng tiền (VNĐ):</label>
                    <input
                        type="number"
                        name="total_money" // Thay đổi name thành total_money
                        value={formData.total_money}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Địa chỉ giao hàng:</label>
                    <input
                        type="text"
                        name="shipping_address" // Thay đổi name thành shipping_address
                        value={formData.shipping_address}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Ngày giao hàng:</label>
                    <input
                        type="date"
                        name="shipping_date" // Thay đổi name thành shipping_date
                        value={formData.shipping_date}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Phương thức thanh toán:</label>
                    <input
                        type="text"
                        name="payment_method" // Thay đổi name thành payment_method
                        value={formData.payment_method}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Trạng thái:</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                    >
                        {orderStatuses.map((status) => (
                            <option key={status} value={status}>
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Ngày đặt hàng:</label>
                    <input
                        type="text"
                        value={formatDate(order.orderDate)}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label>Trạng thái hoạt động:</label>
                    <input
                        type="text"
                        value={order.active !== undefined ? (order.active ? "Yes" : "No") : "N/A"}
                        disabled
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="save-button">
                        Lưu thay đổi
                    </button>
                    <button
                        type="button"
                        className="back-button"
                        onClick={() => navigate("/admin/orders")}
                    >
                        Quay lại
                    </button>
                </div>
            </form>

            {/* Hiển thị orderDetails */}
            <div className="order-details">
                <h3>Chi tiết đơn hàng</h3>
                <table className="order-details-table">
                    <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderDetails.length > 0 ? (
                            orderDetails.map((item, index) => (
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
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">Không có chi tiết đơn hàng</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UpdateOrder;