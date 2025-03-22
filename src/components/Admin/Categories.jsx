import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Categories.scss";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategories();
    }, []); // Không phụ thuộc page nữa

    const fetchCategories = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("Vui lòng đăng nhập admin trước");
                navigate("/admin/login");
                return;
            }

            const response = await axios.get("http://localhost:8088/api/categories", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            setCategories(response.data); // Gán toàn bộ danh sách
            setError(null); // Xóa lỗi nếu có
        } catch (error) {
            setError(error.response?.data || "Lỗi khi lấy danh sách danh mục");
            console.error("Error fetching categories:", error);
        }
    };

    const handleAddCategory = () => {
        navigate("/admin/add-category");
    };

    const handleUpdateCategory = (id) => {
        const token = localStorage.getItem("token");
        console.log("Token before navigating to UpdateCategory:", token);
        if (!token) {
            setError("Vui lòng đăng nhập admin trước");
            navigate("/admin/login");
            return;
        }
        navigate(`/admin/update-category/${id}`);
    };

    const handleDeleteCategory = async (id) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("Vui lòng đăng nhập admin trước");
                navigate("/admin/login");
                return;
            }

            await axios.delete(`http://localhost:8088/api/categories/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            console.log("Category deleted successfully with id:", id);

            // Cập nhật danh sách sau khi xóa
            setCategories(categories.filter(category => category.id !== id));
            setError(null);
        } catch (error) {
            setError(error.response?.data || "Lỗi khi xóa danh mục");
            console.error("Error deleting category:", error);
        }
    };

    return (
        <div className="categories">
            <div className="categories-header-container">
                <h2>Categories</h2>
                <div className="categories-header">
                    <div className="search-bar">
                        <input type="text" placeholder="Search categories..." />
                        <button>Search</button>
                    </div>
                    <button className="add-category-button" onClick={handleAddCategory}>
                        Add New Category
                    </button>
                </div>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="categories-table-container">
                <table className="categories-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length > 0 ? (
                            categories.map((category) => (
                                <tr key={category.id}>
                                    <td>{category.id}</td>
                                    <td>{category.name}</td>
                                    <td>
                                        <button
                                            className="update-button"
                                            onClick={() => handleUpdateCategory(category.id)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="delete-button"
                                            onClick={() => handleDeleteCategory(category.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">Không có danh mục nào</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* Bỏ phần phân trang */}
        </div>
    );
};

export default Categories;