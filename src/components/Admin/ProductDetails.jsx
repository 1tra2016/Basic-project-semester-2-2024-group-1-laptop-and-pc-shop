import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.scss";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [productImages, setProductImages] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProductDetails();
        fetchProductImages();
    }, [productId]);

    const fetchProductDetails = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("Vui lòng đăng nhập admin trước");
                navigate("/admin/login");
                return;
            }

            const response = await axios.get(`http://localhost:8088/api/products/${productId}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            setProduct(response.data);
            setError(null);
        } catch (error) {
            setError(error.response?.data || "Lỗi khi lấy thông tin sản phẩm");
            console.error("Error fetching product details:", error);
        }
    };

    const fetchProductImages = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`http://localhost:8088/api/products/${productId}/images`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            console.log("Product images response:", response.data);
            const images = Array.isArray(response.data) ? response.data : [];
            setProductImages(images);
        } catch (error) {
            console.error("Error fetching product images:", error);
            setProductImages([]);
        }
    };

    return (
        <div className="product-details">
            <h2>Product Details - ID: {productId}</h2>
            {error && <p className="error-message">{error}</p>}
            {product ? (
                <div className="product-info">
                    <p><strong>ID:</strong> {product.id}</p>
                    <p><strong>Name:</strong> {product.name}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Category:</strong> {product.category || "No category"}</p>
                    <p><strong>Description:</strong> {product.description || "No description"}</p>
                    <div className="thumbnail">
                        <h3>Thumbnail:</h3>
                        {product.thumbnail ? (
                            <img
                                src={`http://localhost:8088/uploads/${product.thumbnail}`}
                                alt={product.name}
                                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                            />
                        ) : (
                            "No thumbnail"
                        )}
                    </div>
                    <div className="product-images">
                        <h3>Product Images:</h3>
                        {productImages.length > 0 ? (
                            productImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={`http://localhost:8088/uploads/${image.image_url}`}
                                    alt={`Image ${index}`}
                                    style={{ width: "100px", height: "100px", objectFit: "cover", margin: "5px" }}
                                />
                            ))
                        ) : (
                            <p>No additional images</p>
                        )}
                    </div>
                </div>
            ) : (
                <p>Loading product details...</p>
            )}
            <button onClick={() => navigate("/admin/products")}>Back to Products</button>
        </div>
    );
};

export default ProductDetails;