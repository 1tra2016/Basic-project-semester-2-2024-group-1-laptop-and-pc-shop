import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Product from "./Product/Product";
import { ShopCont } from "../../utils/context";
import "./Products.scss";

const Products = ({ headingText }) => {
    const { products, setProducts } = useContext(ShopCont);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(8);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true); // Đặt loading ngay đầu để đảm bảo UX mượt mà
            try {
                const response = await axios.get("http://localhost:8088/api/products", {
                    params: {
                        page: currentPage,
                        limit: limit,
                    },
                });

                const { products: fetchedProducts, totalPages: fetchedTotalPages } = response.data;
                setProducts(fetchedProducts || []); // Đảm bảo products luôn là mảng
                setTotalPages(fetchedTotalPages || 0); // Đảm bảo totalPages có giá trị mặc định
                window.scrollTo({ top: 0, behavior: "smooth" }); // Cuộn lên trên khi dữ liệu tải xong
            } catch (err) {
                setError("Không thể tải danh sách sản phẩm. Vui lòng thử lại sau.");
                console.error("Lỗi khi lấy sản phẩm:", err);
            } finally {
                setLoading(false); // Đảm bảo loading được tắt dù thành công hay thất bại
            }
        };

        fetchProducts();
    }, [currentPage, limit, setProducts]);

    const handlePageChange = (page) => {
        if (page !== currentPage) { // Chỉ thay đổi nếu trang mới khác trang hiện tại
            setCurrentPage(page);
            // Không cần cuộn ở đây nữa vì useEffect sẽ xử lý
        }
    };

    // Render giao diện dựa trên trạng thái
    if (loading) {
        return <div className="loading">Đang tải sản phẩm...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="products-container">
            <h2 className="sec-heading">{headingText}</h2>
            <div className="products">
                {products?.length > 0 ? (
                    products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                ) : (
                    <p className="no-products">Không có sản phẩm nào để hiển thị</p>
                )}
            </div>
            {totalPages > 1 && (
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index)}
                            className={`pagination-btn ${currentPage === index ? "active" : ""}`}
                            disabled={currentPage === index} // Vô hiệu hóa nút của trang hiện tại
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;