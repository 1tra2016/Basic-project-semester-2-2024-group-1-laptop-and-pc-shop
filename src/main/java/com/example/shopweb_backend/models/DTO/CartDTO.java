package com.example.shopweb_backend.models.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Min;

public class CartDTO {
    @JsonProperty("product_id")
    @Min(value = 1, message = "Product's ID must be > 0")
    private Long productId;

    @JsonProperty("user_id")
    @Min(value = 1, message = "User's ID must be > 0")
    private Long userId;

    @JsonProperty("product_name")
    private String productName;

    @Min(value=0, message = "Price must be >= 0")
    private Float price;

    @Min(value=1, message = "number_of_products must be >= 1")
    @JsonProperty("number_of_products")
    private int numberOfProducts;

    @Min(value=0, message = "total_money must be >= 0")
    @JsonProperty("total_money")
    private Float totalMoney;

    public @Min(value = 1, message = "Product's ID must be > 0") Long getProductId() {
        return productId;
    }

    public void setProductId(@Min(value = 1, message = "Product's ID must be > 0") Long productId) {
        this.productId = productId;
    }

    public @Min(value = 1, message = "User's ID must be > 0") Long getUserId() {
        return userId;
    }

    public void setUserId(@Min(value = 1, message = "User's ID must be > 0") Long userId) {
        this.userId = userId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public @Min(value = 0, message = "Price must be >= 0") Float getPrice() {
        return price;
    }

    public void setPrice(@Min(value = 0, message = "Price must be >= 0") Float price) {
        this.price = price;
    }

    @Min(value = 1, message = "number_of_products must be >= 1")
    public int getNumberOfProducts() {
        return numberOfProducts;
    }

    public void setNumberOfProducts(@Min(value = 1, message = "number_of_products must be >= 1") int numberOfProducts) {
        this.numberOfProducts = numberOfProducts;
    }

    public @Min(value = 0, message = "total_money must be >= 0") Float getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(@Min(value = 0, message = "total_money must be >= 0") Float totalMoney) {
        this.totalMoney = totalMoney;
    }
}
