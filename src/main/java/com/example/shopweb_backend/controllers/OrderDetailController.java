package com.example.shopweb_backend.controllers;

import com.example.shopweb_backend.entities.OrderDetailEntity;
import com.example.shopweb_backend.models.DTO.OrderDetailDTO;
import com.example.shopweb_backend.models.responses.OrderDetailResponse;
import com.example.shopweb_backend.services.IOrderDetailService;
import jakarta.validation.Valid;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/orderdetails")
public class OrderDetailController {
    @Autowired
    private IOrderDetailService iOrderDetailService;

    @GetMapping("/order/{order_id}")
    public ResponseEntity<?> getOrderDetails(@Valid @PathVariable("order_id") Long orderId) {
        try {
            List<OrderDetailResponse> orderDetailEntities = iOrderDetailService.getOrderDetails(orderId);
            return ResponseEntity.ok(orderDetailEntities);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteOrderDetail(@Valid @PathVariable("id") Long id) {
        try {
            iOrderDetailService.deleteOrderDetail(id);
            return ResponseEntity.ok().body("Delete Order detail with id : "+id+" successfully");
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
