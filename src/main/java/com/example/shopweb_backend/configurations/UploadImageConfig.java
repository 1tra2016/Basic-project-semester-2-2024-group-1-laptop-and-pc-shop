package com.example.shopweb_backend.configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
public class UploadImageConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/uploads/**")              // URL pattern
                .addResourceLocations("file:uploads/");
        // nên dùng file: nếu ảnh được lưu ở thư mục ngoài các thư mục có sẵn của project
        // dùng classpath: nếu lưu ảnh ở trong các thư mục có sắn của dự án ví dụ static/uploads/
    }
}

