package com.example.shopweb_backend.converter;

import com.example.shopweb_backend.entities.ProductEntity;
import com.example.shopweb_backend.models.responses.ProductResponse;
import com.example.shopweb_backend.repositories.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProductResponseConverter {
    @Autowired
    private ModelMapper modelMapper;
    public ProductResponse converterProductResponse(ProductEntity productEntity) {
        ProductResponse productResponse = modelMapper.map(productEntity, ProductResponse.class);
        productResponse.setCategoryId(productEntity.getCategory().getId());
        productResponse.setCategory(productEntity.getCategory().getName());
        productResponse.setCreatedAt(productEntity.getCreatedAt());
        productResponse.setUpdatedAt(productEntity.getUpdatedAt());
        return productResponse;
    }
}
