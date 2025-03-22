package com.example.shopweb_backend.controllers;

import com.example.shopweb_backend.entities.OrderEntity;
import com.example.shopweb_backend.models.DTO.OrderDTO;
import com.example.shopweb_backend.models.responses.OrderResponse;
import com.example.shopweb_backend.repositories.OrderRepository;
import com.example.shopweb_backend.services.IOrderService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/orders")

public class OrderController {
    @Autowired
    private IOrderService iOrderService;
    @PostMapping
    public ResponseEntity<?> createOrder(@Valid @RequestBody OrderDTO orderDTO, BindingResult result){
        try {
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors()
                        .stream()
                        .map(FieldError::getDefaultMessage)
                        .toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            OrderEntity newOrder = iOrderService.createOrder(orderDTO);
            return ResponseEntity.ok(newOrder);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/user")
    public ResponseEntity<?> getOrders(){
        try {
            List<OrderResponse> orders = iOrderService.getOrders();
            return ResponseEntity.ok(orders);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("")
    public ResponseEntity<?> getAllOrders(){
        try {
            List<OrderResponse> orders = iOrderService.getAllOrders();
            return ResponseEntity.ok(orders);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOrder(@Valid @PathVariable("id") Long id){
        try {
            OrderEntity order = iOrderService.getOrder(id);
            return ResponseEntity.ok(order);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateOrder(@Valid @RequestBody OrderDTO orderDTO, @PathVariable("id") Long id){
        try {
            OrderEntity order = iOrderService.updateOrder(id, orderDTO);
            return ResponseEntity.ok(order);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteOrder(@Valid @PathVariable("id") Long id){
        try {
            iOrderService.deleteOrder(id);
            return ResponseEntity.ok().body("Delete Order with id : "+id+" successfully");
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
