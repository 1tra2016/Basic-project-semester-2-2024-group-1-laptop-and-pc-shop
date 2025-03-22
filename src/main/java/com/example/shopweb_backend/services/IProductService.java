package com.example.shopweb_backend.services;

import com.example.shopweb_backend.entities.ProductEntity;
import com.example.shopweb_backend.entities.ProductImageEntity;
import com.example.shopweb_backend.models.DTO.ProductDTO;
import com.example.shopweb_backend.models.DTO.ProductImageDTO;
import com.example.shopweb_backend.models.responses.ProductResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;

public interface IProductService {
    public ProductEntity createProduct(ProductDTO productDTO);
    public Page<ProductResponse> getAllProducts(PageRequest pageRequest);
    public ProductEntity getProductById(Long id) throws Exception;
    public ProductImageEntity createProductImage(Long productId, ProductImageDTO productImageDTO) throws Exception;
    public ProductEntity updateProduct(Long productId, ProductDTO productDTO, List<String> imageFilenames) throws Exception;
    public void deleteProduct(Long productId) throws Exception;
    public List<ProductImageDTO> getProductImagesByProductId(Long productId) throws Exception;
}
