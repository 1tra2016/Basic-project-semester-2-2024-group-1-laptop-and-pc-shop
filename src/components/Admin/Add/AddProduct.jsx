import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddProduct.scss";

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
        thumbnail: "", // Tên file do frontend tạo
        categoryId: "",
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:8088/api/categories");
            setCategories(response.data);
        } catch (error) {
            setError("Lỗi khi lấy danh mục: " + (error.response?.data || error.message));
            console.error("Error fetching categories:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: name === "categoryId" ? (value ? Number(value) : "") : value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                setError("File quá lớn, vui lòng chọn ảnh nhỏ hơn 2MB.");
                return;
            }
            setSelectedFile(file);
            const fileName = `${Date.now()}_${file.name}`; // Tạo tên file ở frontend
            setProduct({
                ...product,
                thumbnail: fileName,
            });
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const token = localStorage.getItem("token");
        if (!token) {
            setError("Vui lòng đăng nhập admin trước");
            navigate("/admin/login");
            return;
        }

        console.log("Dữ liệu gửi lên backend:", product);

        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("description", product.description || "");
        formData.append("categoryId", product.categoryId || "");
        formData.append("thumbnail", product.thumbnail); // Tên file từ frontend
        if (selectedFile) {
            formData.append("thumbnailFile", selectedFile); // File gốc
        }

        try {
            const response = await axios.post("http://localhost:8088/api/products", formData, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            console.log("Product added:", response.data);
            navigate("/admin/products");
        } catch (error) {
            console.error("Error adding product:", error);
            setError(error.response?.data || "Lỗi kết nối đến server");
        }
    };

    return (
        <div className="add-product">
            <h2>Add New Product</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        min="0"
                        max="1000000000"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Thumbnail</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                    {previewImage && (
                        <div className="preview-container">
                            <p>Ảnh Preview:</p>
                            <img src={previewImage} alt="Preview" className="preview-image" />
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="categoryId">Category</label>
                    <select
                        id="categoryId"
                        name="categoryId"
                        value={product.categoryId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;