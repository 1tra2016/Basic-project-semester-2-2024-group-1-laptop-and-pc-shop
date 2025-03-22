package com.example.shopweb_backend.services.impl;

import com.example.shopweb_backend.entities.CartEntity;
import com.example.shopweb_backend.entities.ProductEntity;
import com.example.shopweb_backend.entities.UserEntity;
import com.example.shopweb_backend.models.DTO.CartDTO;
import com.example.shopweb_backend.repositories.CartRepository;
import com.example.shopweb_backend.repositories.ProductRepository;
import com.example.shopweb_backend.repositories.UserRepository;
import com.example.shopweb_backend.services.ICartService;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ICartServiceImpl implements ICartService {
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public CartEntity createCart(CartDTO cartDTO) {
        ProductEntity productEntity = productRepository.findById(cartDTO.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found id: " + cartDTO.getProductId()));
        UserEntity userEntity = userRepository.findById(cartDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found id: " + cartDTO.getUserId()));
        modelMapper.typeMap(CartDTO.class, CartEntity.class)
                .addMappings(mapper -> mapper.skip(CartEntity::setId));
        CartEntity cartEntity = new CartEntity();
        modelMapper.map(cartDTO, cartEntity);
        cartEntity.setUser(userEntity);
        cartEntity.setProduct(productEntity);
        cartRepository.save(cartEntity);
        return cartEntity;
    }

    @Override
    public List<CartEntity> getCarts(Long userId) {
        List<CartEntity> carts = cartRepository.findByUserId(userId);
        return carts;
    }

    @Override
    public CartEntity updateCart(Long id , CartDTO cartDTO) {
        CartEntity cartEntity = cartRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cart not found id: " + id));
        cartEntity.setNumberOfProducts(cartDTO.getNumberOfProducts());
        cartEntity.setTotalMoney(cartDTO.getTotalMoney());
        return cartRepository.save(cartEntity);
    }

    @Override
    public void deleteCart(Long id) {
        cartRepository.deleteById(id);
    }
}
