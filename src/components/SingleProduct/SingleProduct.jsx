import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus } from "react-icons/fa";
import "./SingleProduct.scss";
import { ShopCont } from "../../utils/context";
import { useAuth } from "../../utils/AuthContext";

const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [images, setImages] = useState([]); // Hình ảnh từ API
    const [mainImage, setMainImage] = useState(null); // Hình ảnh chính hiện tại
    const [thumbnailIndex, setThumbnailIndex] = useState(0); // Vị trí ảnh đầu tiên hiển thị
    const { cartItems, setCartItems } = useContext(ShopCont);
    const { isLoggedIn } = useAuth();

    const THUMBNAILS_PER_PAGE = 4; // Số lượng ảnh hiển thị trên mỗi hàng

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // Lấy thông tin sản phẩm
                const productResponse = await axios.get(`http://localhost:8088/api/products/${id}`);
                setProduct(productResponse.data);

                // Lấy danh sách hình ảnh liên quan
                const imagesResponse = await axios.get(`http://localhost:8088/api/products/${id}/images`);
                const fetchedImages = Array.isArray(imagesResponse.data) ? imagesResponse.data : [];
                console.log("Product images:", fetchedImages);
                setImages(fetchedImages);

                // Đặt hình ảnh chính mặc định là thumbnail của sản phẩm
                if (productResponse.data.thumbnail) {
                    setMainImage(`http://localhost:8088/uploads/${productResponse.data.thumbnail}`);
                } else if (fetchedImages.length > 0) {
                    setMainImage(`http://localhost:8088/uploads/${fetchedImages[0].image_url}`);
                }

                setLoading(false);
            } catch (err) {
                setError("Không thể tải thông tin sản phẩm hoặc hình ảnh");
                setLoading(false);
                console.error("Lỗi khi lấy dữ liệu:", err);
            }
        };

        fetchProduct();
    }, [id]);

    // Tạo danh sách hình ảnh tổng hợp (bao gồm thumbnail và các hình ảnh từ API)
    const allImages = [];
    if (product?.thumbnail) {
        allImages.push({ image_url: product.thumbnail, isThumbnail: true }); // Thêm thumbnail vào danh sách
    }
    if (images.length > 0) {
        allImages.push(...images.map(image => ({ ...image, isThumbnail: false }))); // Thêm các hình ảnh từ API
    }

    const totalMoney = product ? quantity * product.price : 0;

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const handleAddToCart = () => {
        if (!product) return;
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity }]);
        }
        alert("Thêm giỏ hàng thành công!");
    };

    const handleCheckout = () => {
        if (!isLoggedIn) {
            navigate("/login");
        } else {
            const checkoutItem = [{
                id: product.id,
                name: product.name,
                price: product.price,
                thumbnail: product.thumbnail,
                quantity: quantity,
            }];
            navigate("/checkout", { 
                state: { 
                    totalMoney, 
                    cartItems: checkoutItem 
                } 
            });
        }
    };

    const handleThumbnailClick = (imageUrl) => {
        setMainImage(imageUrl);
    };

    // Xử lý cuộn trái/phải
    const handlePrevThumbnails = () => {
        if (thumbnailIndex > 0) {
            setThumbnailIndex(thumbnailIndex - 1);
        }
    };

    const handleNextThumbnails = () => {
        if (thumbnailIndex + THUMBNAILS_PER_PAGE < allImages.length) {
            setThumbnailIndex(thumbnailIndex + 1);
        }
    };

    if (loading) return <div>Đang tải sản phẩm...</div>;
    if (error) return <div>{error}</div>;
    if (!product) return <div>Sản phẩm không tồn tại</div>;

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <div className="main-image">
                            <img
                                src={mainImage || "path/to/default-image.jpg"}
                                alt={product.name}
                                onError={(e) => {
                                    e.target.src = "path/to/default-image.jpg";
                                }}
                            />
                        </div>
                        {allImages.length > 0 && (
                            <div className="thumbnails-container">
                                <button
                                    className="thumbnail-nav prev"
                                    onClick={handlePrevThumbnails}
                                    disabled={thumbnailIndex === 0}
                                >
                                    &lt;
                                </button>
                                <div className="thumbnails">
                                    {allImages.slice(thumbnailIndex, thumbnailIndex + THUMBNAILS_PER_PAGE).map((image, index) => {
                                        const imageUrl = `http://localhost:8088/uploads/${image.image_url}`;
                                        return (
                                            <img
                                                key={index}
                                                src={imageUrl}
                                                alt={`${product.name} thumbnail ${index}`}
                                                className={`thumbnail ${mainImage === imageUrl ? "active" : ""}`}
                                                onClick={() => handleThumbnailClick(imageUrl)}
                                                onError={(e) => {
                                                    e.target.src = "path/to/default-image.jpg";
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                                <button
                                    className="thumbnail-nav next"
                                    onClick={handleNextThumbnails}
                                    disabled={thumbnailIndex + THUMBNAILS_PER_PAGE >= allImages.length}
                                >
                                    &gt;
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="right">
                        <span className="name">{product.name}</span>
                        <span className="price">Giá: {product.price.toLocaleString("vi-VN")} đ</span>
                        <span className="desc">{product.description}</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className="add-to-cart-button" onClick={handleAddToCart}>
                                <FaCartPlus size={20} />
                                Thêm vào giỏ hàng
                            </button>
                        </div>

                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Tổng tiền: <span>{totalMoney.toLocaleString("vi-VN")} đ</span>
                            </span>
                        </div>

                        <button className="checkout-button" onClick={handleCheckout}>
                            Thanh toán
                        </button>
                    </div>
                </div>
                <RelatedProducts />
            </div>
        </div>
    );
};

export default SingleProduct;