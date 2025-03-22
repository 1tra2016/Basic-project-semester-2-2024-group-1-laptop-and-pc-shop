import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import "./Header.scss";
import Search from "./Search/Search";
import { ShopCont } from "../../utils/context";
import { useAuth } from "../../utils/AuthContext";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const [categories, setCategories] = useState([]); // State để lưu danh sách danh mục
    const [showCategories, setShowCategories] = useState(false); // State để kiểm soát hiển thị dropdown
    const navigate = useNavigate();
    const { cartCount } = useContext(ShopCont);
    const { isLoggedIn } = useAuth();

    // Gọi API để lấy danh sách danh mục
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:8088/api/categories");
                setCategories(response.data || []);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleUserClick = () => {
        if (!isLoggedIn) {
            navigate("/login");
        } else {
            navigate("/account");
        }
    };

    const handleCartClick = () => {
        navigate("/cart");
    };

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>TRANG CHỦ</li>
                        <li onClick={() => navigate("/about")}>LIÊN HỆ</li>
                        <li
                            className="categories-menu"
                            onMouseEnter={() => setShowCategories(true)} // Hiển thị dropdown khi hover
                            onMouseLeave={() => setShowCategories(false)} // Ẩn dropdown khi rời chuột
                        >
                            DANH MỤC SẢN PHẨM
                            {showCategories && categories.length > 0 && (
                                <ul className="categories-dropdown">
                                    {categories.map((category) => (
                                        <li key={category.id} className="category-item">
                                            {category.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        EGA GEAR
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)} />
                        <span onClick={handleUserClick} className="login-icon">
                            <FaUser size={20} style={{ color: "#ffffff" }} />
                        </span>
                        <span className="cart-icon" onClick={handleCartClick}>
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}
        </>
    );
};

export default Header;