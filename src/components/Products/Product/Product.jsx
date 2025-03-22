import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="product-card" onClick={handleClick}>
            <div className="thumbnail">
                <img
                    src={`http://localhost:8088/uploads/${product.thumbnail}`}
                    alt={product.name}
                    width="200" // Kích thước để khớp với hình ảnh
                    height="250"
                    onError={(e) => {
                        e.target.src = "path/to/default-image.jpg"; // Hình mặc định nếu lỗi
                        console.log(`Hình ảnh không tải được: ${product.thumbnail}`);
                    }}
                />
            </div>
            <div className="prod-details">
                <div className="name">{product.name}</div>
                <div className="price">{product.price.toLocaleString("vi-VN")} đ</div>
            </div>
        </div>
    );
};

export default Product;