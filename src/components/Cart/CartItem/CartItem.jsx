import React from "react";
import { MdClose } from "react-icons/md";
import "./CartItem.scss";

const CartItem = ({ item, onRemove, onIncrement, onDecrement }) => {
    const { id, name, thumbnail, price, quantity } = item;

    // Tính tổng giá của sản phẩm này
    const totalPrice = price * quantity;

    return (
        <tr className="cart-item">
            <td>
                <img
                    src={`http://localhost:8088/uploads/${thumbnail}`}
                    alt={name}
                    width="50"
                    onError={(e) => {
                        e.target.src = "path/to/default-image.jpg";
                    }}
                />
            </td>
            <td>{name}</td>
            <td>{price.toLocaleString("vi-VN")}đ</td>
            <td>
                <button onClick={() => onDecrement(id)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => onIncrement(id)}>+</button>
            </td>
            <td>{totalPrice.toLocaleString("vi-VN")}đ</td>
            <td>
                <MdClose className="remove-icon" onClick={() => onRemove(id)} />
            </td>
        </tr>
    );
};

export default CartItem;