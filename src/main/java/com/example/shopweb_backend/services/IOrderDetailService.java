package com.example.shopweb_backend.services;

import com.example.shopweb_backend.entities.OrderDetailEntity;
import com.example.shopweb_backend.models.DTO.OrderDetailDTO;
import com.example.shopweb_backend.models.responses.OrderDetailResponse;

import java.util.List;

public interface IOrderDetailService {
    public List<OrderDetailResponse> getOrderDetails(Long orderId);
    public void deleteOrderDetail(Long id);
}
