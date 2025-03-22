import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddCategory.scss";

const AddCategory = () => {
    const [category, setCategory] = useState({
        name: "",
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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
            const response = await axios.post("http://localhost:8088/api/categories", category, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            });
            console.log("Category added:", response.data);
            navigate("/admin/categories");
        } catch (error) {
            if (error.response && error.response.data) {
                const errorMessages = Array.isArray(error.response.data)
                    ? error.response.data.join(", ")
                    : error.response.data;
                setError(errorMessages || "Lỗi khi thêm danh mục");
            } else {
                setError("Lỗi kết nối đến server");
            }
            console.error("Error adding category:", error);
        }
    };

    return (
        <div className="add-category">
            <h2>Add New Category</h2>
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
                <button type="submit">Add Category</button>
            </form>
        </div>
    );
};

export default AddCategory;