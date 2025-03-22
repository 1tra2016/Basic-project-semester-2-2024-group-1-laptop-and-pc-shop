package com.example.shopweb_backend.repositories;

import com.example.shopweb_backend.entities.CartEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CartRepository extends JpaRepository<CartEntity, Long> {
    public List<CartEntity> findByUserId(Long id);
}
