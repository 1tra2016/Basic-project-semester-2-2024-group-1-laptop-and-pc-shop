package com.example.shopweb_backend.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "product_images")
public class ProductImageEntity extends BaseEntity {
    public static final int MAXIMUM_IMAGES_PER_PRODUCT = 5;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "imageurl")
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductEntity product;

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public ProductEntity getProduct() {
        return product;
    }

    public void setProduct(ProductEntity product) {
        this.product = product;
    }
}
