package com.example.shopweb_backend.services;

import com.example.shopweb_backend.entities.OrderEntity;
import com.example.shopweb_backend.models.DTO.OrderDTO;
import com.example.shopweb_backend.models.responses.OrderResponse;

import java.util.List;

public interface IOrderService {
    public OrderEntity createOrder(OrderDTO orderDTO) throws Exception;
    public List<OrderResponse> getOrders() throws Exception;
    public List<OrderResponse> getAllOrders() throws Exception;
    public OrderEntity getOrder(Long orderId) throws Exception;
    public OrderEntity updateOrder(Long orderId, OrderDTO orderDTO) throws Exception;
    public void deleteOrder(Long orderId) throws Exception;
}
