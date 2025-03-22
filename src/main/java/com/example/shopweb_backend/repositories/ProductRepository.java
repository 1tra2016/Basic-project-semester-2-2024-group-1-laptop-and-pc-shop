package com.example.shopweb_backend.repositories;

import com.example.shopweb_backend.entities.ProductEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
    public Page<ProductEntity> findAll(Pageable pageable);//phân trang
}
