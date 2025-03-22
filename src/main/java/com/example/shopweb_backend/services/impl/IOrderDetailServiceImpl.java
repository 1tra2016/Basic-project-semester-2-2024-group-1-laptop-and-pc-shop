package com.example.shopweb_backend.services.impl;

import com.example.shopweb_backend.entities.OrderDetailEntity;
import com.example.shopweb_backend.entities.OrderEntity;
import com.example.shopweb_backend.entities.ProductEntity;
import com.example.shopweb_backend.models.DTO.OrderDTO;
import com.example.shopweb_backend.models.DTO.OrderDetailDTO;
import com.example.shopweb_backend.models.responses.OrderDetailResponse;
import com.example.shopweb_backend.models.responses.ProductResponse;
import com.example.shopweb_backend.repositories.OrderDetailRepository;
import com.example.shopweb_backend.repositories.OrderRepository;
import com.example.shopweb_backend.repositories.ProductRepository;
import com.example.shopweb_backend.services.IOrderDetailService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class IOrderDetailServiceImpl implements IOrderDetailService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private OrderDetailRepository orderDetailRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private ModelMapper modelMapper;


    @Override
    public List<OrderDetailResponse> getOrderDetails(Long orderId) {
        List<OrderDetailEntity> orderDetailEntities = orderDetailRepository.findByOrderId(orderId);
        List<OrderDetailResponse> orderDetailResponses = new ArrayList<>();
        for (OrderDetailEntity orderDetailEntity : orderDetailEntities) {
            OrderDetailResponse orderDetailResponse = modelMapper.map(orderDetailEntity, OrderDetailResponse.class);
            ProductResponse productResponse = modelMapper.map(orderDetailEntity.getProduct(), ProductResponse.class);
            orderDetailResponses.add(orderDetailResponse);
        }
        return orderDetailResponses;
    }

    @Override
    public void deleteOrderDetail(Long id) {
        orderDetailRepository.deleteById(id);
    }


}
