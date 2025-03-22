package com.example.shopweb_backend.services.impl;

import com.example.shopweb_backend.customexceptions.DataNotFoundException;
import com.example.shopweb_backend.entities.OrderDetailEntity;
import com.example.shopweb_backend.entities.OrderEntity;
import com.example.shopweb_backend.entities.ProductEntity;
import com.example.shopweb_backend.entities.UserEntity;
import com.example.shopweb_backend.enums.OrderStatus;
import com.example.shopweb_backend.models.DTO.OrderDTO;
import com.example.shopweb_backend.models.DTO.OrderDetailDTO;
import com.example.shopweb_backend.models.responses.OrderResponse;
import com.example.shopweb_backend.repositories.OrderDetailRepository;
import com.example.shopweb_backend.repositories.OrderRepository;
import com.example.shopweb_backend.repositories.ProductRepository;
import com.example.shopweb_backend.repositories.UserRepository;
import com.example.shopweb_backend.services.IOrderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class IOrdersServiceImpl implements IOrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private OrderDetailRepository orderDetailRepository;
    @Autowired
    private ProductRepository productRepository;
    @Override
    public OrderEntity createOrder(OrderDTO orderDTO) throws Exception {
        //lấy user từ SecurityContextHolder
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new RuntimeException("User is not authenticated");
        }
        UserEntity user = (UserEntity) authentication.getPrincipal();
        modelMapper.typeMap(OrderDTO.class, OrderEntity.class)
                .addMappings(mapper -> mapper.skip(OrderEntity::setId));
        OrderEntity orderEntity = new OrderEntity();
        modelMapper.map(orderDTO, orderEntity);
        orderEntity.setUser(user);
        orderEntity.setOrderDate(new Date());
        orderEntity.setStatus(OrderStatus.PENDING);
        LocalDate shippingDate = orderDTO.getShippingDate() == null ? LocalDate.now() : orderDTO.getShippingDate();
        if (shippingDate.isBefore(LocalDate.now())) {
            throw new DataNotFoundException("Date must be at least today !");
        }
        orderEntity.setShippingDate(shippingDate);
        orderEntity.setActive(true);
        orderRepository.save(orderEntity);
        List<OrderDetailEntity> orderDetailEntities = new ArrayList<>();
        for(OrderDetailDTO orderDetailDTO : orderDTO.getOrderDetails()) {
            OrderDetailEntity orderDetailEntity = modelMapper.map(orderDetailDTO, OrderDetailEntity.class);
            orderDetailEntity.setOrder(orderEntity);
            ProductEntity productEntity = productRepository.findById(orderDetailDTO.getProductId())
                    .orElseThrow(() -> new DataNotFoundException("Cannot find product with id: "+ orderDetailDTO.getProductId()));
            orderDetailEntity.setProduct(productEntity);
            orderDetailEntities.add(orderDetailEntity);
        }
        orderDetailRepository.saveAll(orderDetailEntities);
        return orderEntity;
    }

    @Override
    public List<OrderResponse> getOrders() throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new RuntimeException("User is not authenticated");
        }
        UserEntity user = (UserEntity) authentication.getPrincipal();
        Long userId = user.getId();
        List<OrderEntity> orders = orderRepository.findByUserId(userId);
        List<OrderResponse> orderResponses = new ArrayList<>();
        for(OrderEntity orderEntity : orders) {
            OrderResponse orderResponse = modelMapper.map(orderEntity, OrderResponse.class);
            orderResponse.setUserId(userId);
            orderResponses.add(orderResponse);
        }
        return orderResponses;
    }

    @Override
    public List<OrderResponse> getAllOrders() throws Exception {
        List<OrderEntity> orders = orderRepository.findAll();
        List<OrderResponse> orderResponses = new ArrayList<>();
        for(OrderEntity orderEntity : orders) {
            OrderResponse orderResponse = modelMapper.map(orderEntity, OrderResponse.class);
            orderResponse.setUserId(orderEntity.getUser().getId());
            orderResponses.add(orderResponse);
        }
        return orderResponses;
    }

    @Override
    public OrderEntity getOrder(Long orderId) throws Exception {
        return orderRepository.findById(orderId).orElse(null);
    }


    @Override
    public OrderEntity updateOrder(Long orderId, OrderDTO orderDTO) throws Exception {
        OrderEntity orderEntity = orderRepository.findById(orderId)
                .orElseThrow(() -> new DataNotFoundException("Cannot find order with id: "+orderId));
        modelMapper.typeMap(OrderDTO.class, OrderEntity.class)
                .addMappings(mapper -> mapper.skip(OrderEntity::setId));
        modelMapper.map(orderDTO, orderEntity);
        orderRepository.save(orderEntity);
        return orderEntity;
    }

    @Override
    public void deleteOrder(Long orderId) throws Exception {
        OrderEntity orderEntity = orderRepository.findById(orderId)
                .orElseThrow(() -> new DataNotFoundException("Cannot find order with id: "+orderId));
        if(orderEntity != null){
            orderEntity.setActive(false);
            orderRepository.save(orderEntity);
        }
    }
}
