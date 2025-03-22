package com.example.shopweb_backend.models.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;

public class ProductImageDTO {
    @Size(min = 5, max = 200, message = "Image's name")
    @JsonProperty("image_url")
    private String imageUrl;

    @Min(value = 1, message = "Product's ID must be > 0")
    @JsonProperty("product_id")
    private Long productID;

    public @Size(min = 5, max = 200, message = "Image's name") String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(@Size(min = 5, max = 200, message = "Image's name") String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public @Min(value = 1, message = "Product's ID must be > 0") Long getProductID() {
        return productID;
    }

    public void setProductID(@Min(value = 1, message = "Product's ID must be > 0") Long productID) {
        this.productID = productID;
    }
}
