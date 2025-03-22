package com.example.shopweb_backend.repositories;

import com.example.shopweb_backend.entities.ProductImageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductImageRepository extends JpaRepository<ProductImageEntity, Long> {
    public List<ProductImageEntity> findByProductId(Long productId);
}
