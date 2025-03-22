package com.example.shopweb_backend.controllers;

import com.example.shopweb_backend.entities.CartEntity;
import com.example.shopweb_backend.models.DTO.CartDTO;
import com.example.shopweb_backend.services.ICartService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carts")
public class CartController {
    @Autowired
    private ICartService iCartService;
    @PostMapping
    public ResponseEntity<?> createCart(@Valid @RequestBody CartDTO cartDTO, BindingResult result) {
        try {
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors()
                        .stream()
                        .map(FieldError::getDefaultMessage)
                        .toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            CartEntity cartEntity = iCartService.createCart(cartDTO);
            return ResponseEntity.ok().body(cartEntity);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/user/{user_id}")
    public ResponseEntity<?> getCartById(@PathVariable("user_id") Long userId) {
        try {
            List<CartEntity> cartEntities = iCartService.getCarts(userId);
            return ResponseEntity.ok().body(cartEntities);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCart(@PathVariable("id") Long id,
                                       @Valid @RequestBody CartDTO cartDTO) {
        try {
            CartEntity cartEntity = iCartService.updateCart(id, cartDTO);
            return ResponseEntity.ok().body(cartEntity);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCart(@PathVariable("id") Long id) {
        iCartService.deleteCart(id);
        return ResponseEntity.ok().body("Deleted Cart id = "+ id + "seccessfully");
    }


}
