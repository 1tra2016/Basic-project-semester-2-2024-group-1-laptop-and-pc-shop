import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./UpdateCategory.scss";

const UpdateCategory = () => {
    const [category, setCategory] = useState({
        name: "",
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetchCategory();
    }, [id]);

    const fetchCategory = async () => {
        try {
            const response = await axios.get(`http://localhost:8088/api/categories/${id}`);
            setCategory({ name: response.data.name });
        } catch (error) {
            setError(error.response?.data || "Lỗi khi lấy thông tin danh mục");
            console.error("Error fetching category:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory({
            ...category,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("Vui lòng đăng nhập admin trước");
                navigate("/admin/login");
                return;
            }

            const response = await axios.put(
                `http://localhost:8088/api/categories/${id}`,
                category,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );
            console.log("Category updated:", response.data);
            navigate("/admin/categories");
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data || "Lỗi khi cập nhật danh mục");
            } else {
                setError("Lỗi kết nối đến server");
            }
            console.error("Error updating category:", error);
        }
    };

    return (
        <div className="update-category">
            <h2>Update Category</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={category.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Update Category</button>
            </form>
        </div>
    );
};

export default UpdateCategory;