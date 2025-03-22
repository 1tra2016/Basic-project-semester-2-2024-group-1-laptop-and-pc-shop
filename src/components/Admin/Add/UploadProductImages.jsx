import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UploadProductImages.scss"; // Tạo file CSS nếu cần

const UploadProductImages = () => {
    const { productId } = useParams(); // Lấy productId từ URL
    const [imageFiles, setImageFiles] = useState([]); // Danh sách file ảnh
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();
    const MAX_IMAGES = 5; // Tối đa 5 ảnh

    const handleFileChange = (index, e) => {
        const file = e.target.files[0];
        if (file) {
            const newImageFiles = [...imageFiles];
            newImageFiles[index] = file;
            setImageFiles(newImageFiles);

            // Tự động thêm khung mới nếu chưa đủ 5
            if (newImageFiles.length < MAX_IMAGES && !newImageFiles.includes(undefined)) {
                setImageFiles([...newImageFiles, undefined]);
            }
        }
    };

    const handleUpload = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setError("Vui lòng đăng nhập admin trước");
            navigate("/admin/login");
            return;
        }

        const validFiles = imageFiles.filter((file) => file !== undefined);
        if (validFiles.length === 0) {
            setError("Vui lòng chọn ít nhất một ảnh để upload");
            return;
        }

        const formData = new FormData();
        validFiles.forEach((file) => {
            formData.append("files", file); // Key "files" khớp với @ModelAttribute("files")
        });

        try {
            const response = await axios.post(
                `http://localhost:8088/api/products/uploads/${productId}`,
                formData,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setSuccess("Upload ảnh thành công!");
            setError(null);
            setImageFiles([undefined]); // Reset về 1 khung
            console.log("Uploaded images:", response.data);
        } catch (error) {
            setError(error.response?.data || "Lỗi khi upload ảnh");
            setSuccess(null);
            console.error("Error uploading images:", error);
        }
    };

    return (
        <div className="upload-product-images">
            <h2>Upload Images for Product ID: {productId}</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <div className="upload-container">
                {imageFiles.map((file, index) => (
                    <div key={index} className="upload-slot">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(index, e)}
                            disabled={imageFiles.length >= MAX_IMAGES && file !== undefined}
                        />
                        {file && (
                            <img
                                src={URL.createObjectURL(file)}
                                alt={`Preview ${index}`}
                                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                            />
                        )}
                    </div>
                ))}
                {imageFiles.length === 0 && (
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(0, e)}
                    />
                )}
            </div>
            <button onClick={handleUpload} disabled={imageFiles.length === 0}>
                Upload All Images
            </button>
            <button onClick={() => navigate("/admin/products")}>Back to Products</button>
        </div>
    );
};

export default UploadProductImages;