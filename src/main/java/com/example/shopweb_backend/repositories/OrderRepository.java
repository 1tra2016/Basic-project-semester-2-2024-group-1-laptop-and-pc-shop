package com.example.shopweb_backend.repositories;

import com.example.shopweb_backend.entities.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Long> {
    public List<OrderEntity> findByUserId(Long userId);
}
