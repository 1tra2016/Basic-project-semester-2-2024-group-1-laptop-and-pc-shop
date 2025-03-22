package com.example.shopweb_backend.repositories;

import com.example.shopweb_backend.entities.OrderDetailEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetailEntity, Long> {
    public List<OrderDetailEntity> findByOrderId(Long orderId);
}
