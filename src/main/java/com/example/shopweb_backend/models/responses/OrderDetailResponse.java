package com.example.shopweb_backend.models.responses;

import com.example.shopweb_backend.entities.ProductEntity;
import jakarta.persistence.Column;

public class OrderDetailResponse {
    private ProductResponse product;

    private Float price;

    private int numberOfProducts;

    private Float totalMoney;

    public ProductResponse getProduct() {
        return product;
    }

    public void setProduct(ProductResponse product) {
        this.product = product;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public int getNumberOfProducts() {
        return numberOfProducts;
    }

    public void setNumberOfProducts(int numberOfProducts) {
        this.numberOfProducts = numberOfProducts;
    }

    public Float getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(Float totalMoney) {
        this.totalMoney = totalMoney;
    }
}
