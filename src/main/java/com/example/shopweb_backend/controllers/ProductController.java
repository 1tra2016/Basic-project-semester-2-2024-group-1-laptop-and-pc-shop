package com.example.shopweb_backend.controllers;

import com.example.shopweb_backend.converter.ProductResponseConverter;
import com.example.shopweb_backend.entities.ProductEntity;
import com.example.shopweb_backend.entities.ProductImageEntity;
import com.example.shopweb_backend.models.DTO.ProductDTO;
import com.example.shopweb_backend.models.DTO.ProductImageDTO;
import com.example.shopweb_backend.models.responses.ProductListResponse;
import com.example.shopweb_backend.models.responses.ProductResponse;
import com.example.shopweb_backend.repositories.ProductRepository;
import com.example.shopweb_backend.services.IProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@RestController
@RequestMapping("api/products")
public class ProductController {
    @Autowired
    private IProductService iProductService;
    @Autowired
    private ProductResponseConverter productResponseConverter;

    @GetMapping("")
    public ResponseEntity<ProductListResponse> getProducts(
            @RequestParam("page")     int page,
            @RequestParam("limit")    int limit
    ) {
        // Tạo Pageable từ thông tin trang và giới hạn
        PageRequest pageRequest = PageRequest.of(
                page, limit,
                Sort.by("createdAt").descending());
        Page<ProductResponse> productPage = iProductService.getAllProducts(pageRequest);
        // Lấy tổng số trang
        int totalPages = productPage.getTotalPages();
        List<ProductResponse> products = productPage.getContent();
        ProductListResponse productListResponse = new ProductListResponse();
        productListResponse.setProducts(products);
        productListResponse.setTotalPages(totalPages);
        return ResponseEntity.ok(productListResponse);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> createProduct(
            @Valid @ModelAttribute ProductDTO productDTO,
            @RequestParam("thumbnailFile") MultipartFile thumbnailFile,
            BindingResult bindingResult) {
        try {
            if (bindingResult.hasErrors()) {
                List<String> errorMessages = bindingResult.getFieldErrors()
                        .stream()
                        .map(FieldError::getDefaultMessage)
                        .toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }

            // Xử lý file thumbnail
            if (thumbnailFile != null && !thumbnailFile.isEmpty()) {
                // Kiểm tra kích thước file (giới hạn 10MB)
                if (thumbnailFile.getSize() > 10 * 1024 * 1024) {
                    return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE)
                            .body("File is too large! Maximum size is 10MB");
                }

                // Kiểm tra định dạng file
                String contentType = thumbnailFile.getContentType();
                if (contentType == null || !contentType.startsWith("image/")) {
                    return ResponseEntity.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
                            .body("File must be an image");
                }

                // Lưu file và lấy tên file
                String filename = storeFile(thumbnailFile);
                productDTO.setThumbnail(filename);
            }

            // Tạo sản phẩm trong database
            ProductEntity newProduct = iProductService.createProduct(productDTO);
            return ResponseEntity.ok(newProduct);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


    //upload ảnh cho sản phẩm
    @PostMapping(value = "uploads/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> uploadImages(
            @PathVariable("id") Long productId,
            @RequestParam("files") List<MultipartFile> files
    ){
        try {
            ProductEntity existingProduct = iProductService.getProductById(productId);
            files = files == null ? new ArrayList<MultipartFile>() : files;
            if(files.size() > ProductImageEntity.MAXIMUM_IMAGES_PER_PRODUCT) {
                return ResponseEntity.badRequest().body("You can only upload maximum 5 images");
            }
            List<ProductImageEntity> productImages = new ArrayList<>();
            for (MultipartFile file : files) {
                if(file.getSize() == 0) {
                    continue;
                }
                // Kiểm tra kích thước file và định dạng
                if(file.getSize() > 10 * 1024 * 1024) { // Kích thước > 10MB
                    return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE)
                            .body("File is too large! Maximum size is 10MB");
                }
                String contentType = file.getContentType();
                if(contentType == null || !contentType.startsWith("image/")) {
                    return ResponseEntity.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
                            .body("File must be an image");
                }
                // Lưu file và cập nhật thumbnail trong DTO
                String filename = storeFile(file);
                ProductImageDTO productImageDTO = new ProductImageDTO();
                productImageDTO.setImageUrl(filename);
                //lưu vào đối tượng product trong DB
                ProductImageEntity productImage = iProductService.createProductImage(existingProduct.getId(),productImageDTO);
                productImages.add(productImage);
            }
            return ResponseEntity.ok().body(productImages);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    private String storeFile(MultipartFile file) throws IOException {
        if (!isImageFile(file) || file.getOriginalFilename() == null) {
            throw new IOException("Invalid image format");
        }
        String fileName = StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));
        String uniqueFilename = UUID.randomUUID().toString() + "_" + fileName;

        java.nio.file.Path uploadDir = Paths.get("uploads");
        if(!Files.exists(uploadDir)){
            Files.createDirectories(uploadDir);
        }
        java.nio.file.Path destination = Paths.get(uploadDir.toString(),uniqueFilename);
        Files.copy(file.getInputStream(),destination, StandardCopyOption.REPLACE_EXISTING);
        return uniqueFilename;
    }

    private boolean isImageFile(MultipartFile file) {
        String contentType = file.getContentType();
        return contentType != null && contentType.startsWith("image/");
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable("id") Long productId) {
        try {
            ProductEntity productEntity = iProductService.getProductById(productId);
            ProductResponse productResponse = productResponseConverter.converterProductResponse(productEntity);
            return ResponseEntity.ok(productResponse);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/{id}/images")
    public ResponseEntity<List<ProductImageDTO>> getProductImages(@PathVariable("id") Long id) {
        try {
            List<ProductImageDTO> images = iProductService.getProductImagesByProductId(id);
            return ResponseEntity.ok(images);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }

    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> updateProduct(
            @PathVariable("id") Long productId,
            @ModelAttribute ProductDTO productDTO,
            @RequestParam(value = "thumbnailFile", required = false) MultipartFile thumbnailFile,
            @RequestParam(value = "imageFiles", required = false) List<MultipartFile> imageFiles) {
        try {

            // Xử lý thumbnail file
            String thumbnailFilename = null;
            if (thumbnailFile != null && !thumbnailFile.isEmpty()) {
                if (thumbnailFile.getSize() > 10 * 1024 * 1024) {
                    return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE)
                            .body("Thumbnail file is too large! Maximum size is 10MB");
                }
                if (!isImageFile(thumbnailFile)) {
                    return ResponseEntity.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
                            .body("Thumbnail must be an image");
                }
                thumbnailFilename = storeFile(thumbnailFile);
                productDTO.setThumbnail(thumbnailFilename);
            }

            // Xử lý imageFiles
            List<String> imageFilenames = new ArrayList<>();
            if (imageFiles != null && !imageFiles.isEmpty()) {
                if (imageFiles.size() > ProductImageEntity.MAXIMUM_IMAGES_PER_PRODUCT) {
                    return ResponseEntity.badRequest().body("You can only upload maximum 5 images");
                }
                for (MultipartFile file : imageFiles) {
                    if (file.isEmpty()) continue;
                    if (file.getSize() > 10 * 1024 * 1024) {
                        return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE)
                                .body("Image file is too large! Maximum size is 10MB");
                    }
                    if (!isImageFile(file)) {
                        return ResponseEntity.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
                                .body("File must be an image");
                    }
                    String filename = storeFile(file);
                    imageFilenames.add(filename);
                }
            }

            // Gọi service với productDTO và danh sách tên file
            ProductEntity updatedProduct = iProductService.updateProduct(productId, productDTO, imageFilenames);
            return ResponseEntity.ok(updatedProduct);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long productId) {
        try {
            iProductService.deleteProduct(productId);
            return ResponseEntity.ok().body("Product id = " + productId + "deleted successfully");
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
