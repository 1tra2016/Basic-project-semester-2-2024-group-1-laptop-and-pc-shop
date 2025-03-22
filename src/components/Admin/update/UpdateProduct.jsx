import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UpdateProduct.scss";

const UpdateProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
        categoryId: "",
    });
    const [originalCategoryId, setOriginalCategoryId] = useState(""); // Lưu category_id gốc
    const [categories, setCategories] = useState([]);
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [imageFiles, setImageFiles] = useState([]);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();
    const MAX_IMAGES = 5;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError("Vui lòng đăng nhập admin trước");
                    navigate("/admin/login");
                    return;
                }

                const categoriesResponse = await axios.get("http://localhost:8088/api/categories", {
                    headers: { "Authorization": `Bearer ${token}` },
                });
                const categoriesData = categoriesResponse.data || [];
                setCategories(categoriesData);

                const productResponse = await axios.get(`http://localhost:8088/api/products/${productId}`, {
                    headers: { "Authorization": `Bearer ${token}` },
                });
                const productData = productResponse.data;
                const matchedCategory = categoriesData.find(category => category.id === productData.category_id); // Sửa category_id
                const categoryId = matchedCategory ? String(matchedCategory.id) : String(productData.category_id || "");
                setProduct({
                    name: productData.name || "",
                    price: productData.price || "",
                    description: productData.description || "",
                    categoryId: categoryId,
                });
                setOriginalCategoryId(String(productData.category_id) || ""); // Sửa category_id
                setError(null);
            } catch (error) {
                setError(error.response?.data?.message || "Lỗi khi lấy dữ liệu");
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleThumbnailChange = (e) => {
        setThumbnailFile(e.target.files[0]);
    };

    const handleImageFilesChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + imageFiles.length > MAX_IMAGES) {
            setError(`Tối đa ${MAX_IMAGES} ảnh sản phẩm`);
            return;
        }
        setImageFiles([...imageFiles, ...files]);
    };

    const removeImageFile = (index) => {
        setImageFiles(imageFiles.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("Vui lòng đăng nhập admin trước");
                navigate("/admin/login");
                return;
            }

            const formData = new FormData();
            formData.append("name", product.name);
            formData.append("price", product.price);
            formData.append("description", product.description);
            const categoryIdToSend = product.categoryId || originalCategoryId;
            formData.append("categoryId", categoryIdToSend);
            if (thumbnailFile) {
                formData.append("thumbnailFile", thumbnailFile);
            }
            imageFiles.forEach((file) => {
                formData.append("imageFiles", file);
            });

            const response = await axios.put(
                `http://localhost:8088/api/products/${productId}`,
                formData,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );

            setSuccess("Cập nhật sản phẩm thành công!");
            setError(null);
            console.log("Updated product:", response.data);
            setTimeout(() => navigate("/admin/products"), 2000);
        } catch (error) {
            const errorMessage = error.response?.data?.message || 
                                error.response?.data?.error || 
                                "Lỗi khi cập nhật sản phẩm";
            setError(errorMessage);
            console.error("Error updating product:", error.response?.data);
        }
    };

    return (
        <div className="update-product">
            <h2>Update Product - ID: {productId}</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        step="0.01"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <select
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
                <div className="form-group">
                    <label>Thumbnail:</label>
                    <input type="file" accept="image/*" onChange={handleThumbnailChange} />
                    {thumbnailFile && (
                        <img
                            src={URL.createObjectURL(thumbnailFile)}
                            alt="Thumbnail Preview"
                            style={{ width: "100px", height: "100px", objectFit: "cover", marginTop: "10px" }}
                        />
                    )}
                </div>
                <div className="form-group">
                    <label>Product Images (Max {MAX_IMAGES}):</label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageFilesChange}
                        disabled={imageFiles.length >= MAX_IMAGES}
                    />
                    <div className="image-preview">
                        {imageFiles.map((file, index) => (
                            <div key={index} className="image-item">
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={`Image ${index}`}
                                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                />
                                <button type="button" onClick={() => removeImageFile(index)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <button type="submit">Update Product</button>
                <button type="button" onClick={() => navigate("/admin/products")}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default UpdateProduct;