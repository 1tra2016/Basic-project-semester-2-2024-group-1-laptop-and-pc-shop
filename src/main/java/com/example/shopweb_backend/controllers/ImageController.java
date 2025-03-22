package com.example.shopweb_backend.controllers;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class ImageController {

    @GetMapping("/api/images/{imageName}")
    public ResponseEntity<Resource> getImage(@PathVariable String imageName) throws IOException {
        // Đường dẫn tới thư mục uploads trong static
        Resource resource = new ClassPathResource("uploads/" + imageName);

        // Kiểm tra xem file có tồn tại không
        if (!resource.exists()) {
            return ResponseEntity.notFound().build();
        }

        // Trả về file ảnh với loại nội dung phù hợp
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_PNG) // Có thể thay đổi theo loại ảnh (PNG, JPEG, v.v.)
                .body(resource);
    }
}