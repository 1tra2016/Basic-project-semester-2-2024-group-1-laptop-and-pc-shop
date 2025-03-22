import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import axios from "axios";
import "./CheckOut.scss";

const Checkout = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { isLoggedIn, token } = useAuth(); // Không cần lấy user nữa vì không cần user_id

    console.log("Checkout - isLoggedIn:", isLoggedIn);

    const totalMoney = state?.totalMoney || 0;
    const cartItems = state?.cartItems || [];

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone_number: "",
        address: "",
        note: "",
        total_money: totalMoney,
        shipping_address: "",
        shipping_date: "",
        payment_method: "COD",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePlaceOrder = async () => {
        if (!isLoggedIn) {
            navigate("/login");
            return;
        }

        try {
            const orderData = {
                fullname: formData.fullname,
                email: formData.email,
                phone_number: formData.phone_number,
                address: formData.address,
                note: formData.note,
                total_money: parseFloat(totalMoney),
                shipping_address: formData.shipping_address,
                shipping_date: formData.shipping_date || new Date().toISOString().split("T")[0],
                payment_method: formData.payment_method,
                order_details: cartItems.map(item => ({
                    product_id: item.id, // Đổi từ productId thành product_id
                    price: item.price,
                    number_of_products: item.quantity, // Đổi từ numberOfProducts thành number_of_products
                    total_money: item.price * item.quantity, // Đổi từ totalMoney thành total_money
                })),
            };

            const response = await axios.post(
                "http://localhost:8088/api/orders",
                orderData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("Order placed successfully:", response.data);
            alert("Đặt hàng thành công!");
            navigate("/");
        } catch (error) {
            console.error("Error placing order:", error);
            alert("Đặt hàng thất bại. Vui lòng thử lại!");
        }
    };

    if (!isLoggedIn) {
        return (
            <div>
                Vui lòng đăng nhập để tiếp tục thanh toán.{" "}
                <button onClick={() => navigate("/login")}>Đăng nhập</button>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <div className="checkout-left">
                <h2>Thông tin người nhận</h2>
                <div className="form-group">
                    <label>Họ và tên *</label>
                    <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        placeholder="Họ và tên"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Số điện thoại *</label>
                    <input
                        type="tel"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        placeholder="Số điện thoại"
                        required
                        minLength={5}
                    />
                </div>
                <div className="form-group">
                    <label>Địa chỉ *</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Địa chỉ"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Địa chỉ giao hàng *</label>
                    <input
                        type="text"
                        name="shipping_address"
                        value={formData.shipping_address}
                        onChange={handleChange}
                        placeholder="Địa chỉ giao hàng"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Ngày giao hàng (tùy chọn)</label>
                    <input
                        type="date"
                        name="shipping_date"
                        value={formData.shipping_date}
                        onChange={handleChange}
                        placeholder="Ngày giao hàng"
                    />
                </div>
                <div className="form-group">
                    <label>Ghi chú (tùy chọn)</label>
                    <input
                        type="text"
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        placeholder="Ghi chú"
                    />
                </div>
                <h2>Phương thức thanh toán</h2>
                <div className="payment-method">
                    <input
                        type="radio"
                        id="cod"
                        name="payment_method"
                        value="COD"
                        checked={formData.payment_method === "COD"}
                        onChange={handleChange}
                    />
                    <label htmlFor="cod">Thanh toán khi giao hàng (COD)</label>
                </div>
            </div>
            <div className="checkout-right">
                <h2>Sản phẩm đã đặt hàng</h2>
                <div className="order-items">
                    <div className="order-header">
                        <span>Sản phẩm</span>
                        <span>Số lượng</span>
                        <span>Đơn giá</span>
                        <span>Tổng giá</span>
                    </div>
                    {cartItems.map((item, index) => (
                        <div key={index} className="order-item">
                            <div className="product-info">
                                <img
                                    src={`http://localhost:8088/uploads/${item.thumbnail}`}
                                    alt={item.name}
                                    className="product-image"
                                    onError={(e) => {
                                        e.target.src = "path/to/default-image.jpg";
                                    }}
                                />
                                <span className="product-name">{item.name}</span>
                            </div>
                            <span>{item.quantity}</span>
                            <span>{item.price.toLocaleString("vi-VN")}đ</span>
                            <span>{(item.price * item.quantity).toLocaleString("vi-VN")}đ</span>
                        </div>
                    ))}
                </div>
                <div className="order-total">
                    <span>Tổng giá:</span>
                    <span>{totalMoney.toLocaleString("vi-VN")}đ</span>
                </div>
                <div className="coupon-section">
                    <input type="text" placeholder="Nhập coupon" />
                    <button>Áp dụng</button>
                </div>
                <button className="place-order-button" onClick={handlePlaceOrder}>
                    Đặt hàng
                </button>
            </div>
        </div>
    );
};

export default Checkout;