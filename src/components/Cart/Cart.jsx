import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { ShopCont } from "../../utils/context";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem"; // Đảm bảo đường dẫn đúng

const Cart = () => {
    const { cartItems, setCartItems } = useContext(ShopCont);
    const navigate = useNavigate();

    const getTotalCartAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const totalAmount = getTotalCartAmount();

    const incrementQuantity = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementQuantity = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handleRemove = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const handleCheckout = () => {
        navigate("/checkout", {
            state: {
                totalMoney: totalAmount,
                cartItems: cartItems, // Truyền danh sách sản phẩm trong giỏ hàng
            },
        });
    };

    return (
        <div className="cart">
            {cartItems.length > 0 ? (
                <>
                    <h1>Your Cart Items</h1>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onRemove={handleRemove}
                                    onIncrement={incrementQuantity}
                                    onDecrement={decrementQuantity}
                                />
                            ))}
                        </tbody>
                    </table>
                    <div className="checkout">
                        <p>Total: {totalAmount.toLocaleString("vi-VN")}đ</p>
                        <button onClick={() => navigate("/")}>Continue Shopping</button>
                        <button onClick={handleCheckout}>Checkout</button>
                    </div>
                </>
            ) : (
                <div className="empty-cart">
                    <BsCartX size={50} />
                    <h1>Your Cart is Empty :(</h1>
                    <button onClick={() => navigate("/")}>Continue Shopping</button>
                </div>
            )}
        </div>
    );
};

export default Cart;