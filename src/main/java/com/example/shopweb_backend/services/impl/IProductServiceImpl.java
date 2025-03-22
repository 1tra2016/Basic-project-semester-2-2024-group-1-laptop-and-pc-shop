package com.example.shopweb_backend.services.impl;

import com.example.shopweb_backend.converter.ProductResponseConverter;
import com.example.shopweb_backend.customexceptions.DataNotFoundException;
import com.example.shopweb_backend.customexceptions.InvalidParamException;
import com.example.shopweb_backend.entities.CategoryEntity;
import com.example.shopweb_backend.entities.ProductEntity;
import com.example.shopweb_backend.entities.ProductImageEntity;
import com.example.shopweb_backend.models.DTO.ProductDTO;
import com.example.shopweb_backend.models.DTO.ProductImageDTO;
import com.example.shopweb_backend.models.responses.ProductResponse;
import com.example.shopweb_backend.repositories.CategoryRepository;
import com.example.shopweb_backend.repositories.ProductImageRepository;
import com.example.shopweb_backend.repositories.ProductRepository;
import com.example.shopweb_backend.services.IProductService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class IProductServiceImpl implements IProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private ProductResponseConverter productResponseConverter;
    @Autowired
    private ProductImageRepository productImageRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public ProductEntity createProduct(ProductDTO productDTO) {
        CategoryEntity categoryEntity = categoryRepository.findById(productDTO.getCategoryId()).get();
        productDTO.setCategoryId(null);
        ProductEntity productEntity = modelMapper.map(productDTO, ProductEntity.class);
        productEntity.setCategory(categoryEntity);
        return productRepository.save(productEntity);
    }

    @Override
    public Page<ProductResponse> getAllProducts(PageRequest pageRequest) {
        Page<ProductEntity> productEntities = productRepository.findAll(pageRequest);
        return productEntities.map(productEntity -> productResponseConverter.converterProductResponse(productEntity));
    }

    @Override
    public ProductEntity getProductById(Long id) throws Exception{
        return productRepository.findById(id)
                .orElseThrow(() ->new DataNotFoundException("Product not found" + id));
    }

    @Override
    public ProductImageEntity createProductImage(Long productId, ProductImageDTO productImageDTO) throws Exception {
        ProductEntity existingProduct = productRepository.findById(productId)
                .orElseThrow(() ->
                        new DataNotFoundException(
                                "Cannot find product with id: "+productImageDTO.getProductID()));
        ProductImageEntity productImageEntity = new ProductImageEntity();
        productImageEntity.setImageUrl(productImageDTO.getImageUrl());
        productImageEntity.setProduct(existingProduct);
        int size = productImageRepository.findByProductId(productId).size();
        if(size > ProductImageEntity.MAXIMUM_IMAGES_PER_PRODUCT) {
            throw new InvalidParamException(
                    "Number of images must be <= " + ProductImageEntity.MAXIMUM_IMAGES_PER_PRODUCT);
        }
        return productImageRepository.save(productImageEntity);
    }

    @Override
    public ProductEntity updateProduct(Long productId, ProductDTO productDTO, List<String> imageFilenames) throws Exception {
        ProductEntity productEntity = getProductById(productId);
        if (productEntity == null) {
            throw new DataNotFoundException("Product not found with id: " + productId);
        }

        CategoryEntity categoryEntity = categoryRepository.findById(productDTO.getCategoryId()).get();
        productDTO.setCategoryId(null);
        modelMapper.map(productDTO, productEntity);  //việc map như này sẽ chỉ cập nhật các giá trị mới cho các thành phần trong productEntity và ko tạo ra đối tượng mới
        //modelMapper.map(productDTO, productEntity.class); sẽ tạo ra đối tượng mới (instance) và có thể gây ra lỗi cho phần cập nhật( chỉ nên dùng cho phần khởi tạo)
        productEntity.setCategory(categoryEntity);
        System.out.println(productEntity);

        if (imageFilenames != null && !imageFilenames.isEmpty()) {
            // Tạo danh sách ảnh mới
            List<ProductImageEntity> newImages = new ArrayList<>();
            for (String filename : imageFilenames) {
                if (filename != null) { // Kiểm tra null để tránh lỗi
                    ProductImageEntity productImage = new ProductImageEntity();
                    productImage.setProduct(productEntity);
                    productImage.setImageUrl(filename);
                    newImages.add(productImage);
                }
            }
            productEntity.getImages().addAll(newImages);
            ProductEntity savedEntity = productRepository.save(productEntity); // Lưu ảnh mới
            productEntity.getImages().clear(); // Xóa ảnh cũ
            productEntity.getImages().addAll(newImages); // Gán lại ảnh mới
            return productRepository.save(productEntity); // Thêm ảnh mới
        }

        return productRepository.save(productEntity);
    }

    @Override
    public void deleteProduct(Long productId) {
        Optional<ProductEntity> optionalProduct = productRepository.findById(productId);
        optionalProduct.ifPresent(productRepository::delete);
    }

    @Override
    public List<ProductImageDTO> getProductImagesByProductId(Long productId) throws Exception {
        List<ProductImageEntity> images = productImageRepository.findByProductId(productId);
        List<ProductImageDTO> imageDTOs = new ArrayList<>();
        for (ProductImageEntity productImageEntity : images) {
            ProductImageDTO productImageDTO = new ProductImageDTO();
            productImageDTO.setImageUrl(productImageEntity.getImageUrl());
            imageDTOs.add(productImageDTO);
        }
        System.out.println(imageDTOs);
        return imageDTOs;
    }

}
