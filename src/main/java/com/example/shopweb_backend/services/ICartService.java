package com.example.shopweb_backend.services;

import com.example.shopweb_backend.entities.CartEntity;
import com.example.shopweb_backend.entities.CategoryEntity;
import com.example.shopweb_backend.models.DTO.CartDTO;
import com.example.shopweb_backend.models.DTO.CategoryDTO;

import java.util.List;

public interface ICartService {
    public CartEntity createCart(CartDTO cartDTO);
    public List<CartEntity> getCarts(Long userId);
    public CartEntity updateCart(Long id, CartDTO cartDTO);
    public void deleteCart(Long id);
}
