package com.example.shopweb_backend.models.DTO;

import com.fasterxml.jackson.annotation.JacksonInject;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public class ProductDTO {
    @NotBlank(message = "Name is Required")
    @Size(min = 3, max = 200, message = "Title must be between 3 and 200 characters")
    private String name;

    @Min(value = 0, message = "price must be greater than or equal 0")
    @Max(value=1000000000,message = "price must be less than or equal 1000000000")
    private Float price;
    private String description;
    private String thumbnail;
    @JsonProperty("category_id")
    private Long categoryId;


    public @NotBlank(message = "Name is Required") @Size(min = 3, max = 200, message = "Title must be between 3 and 200 characters") String getName() {
        return name;
    }

    public void setName(@NotBlank(message = "Name is Required") @Size(min = 3, max = 200, message = "Title must be between 3 and 200 characters") String name) {
        this.name = name;
    }

    public @Min(value = 0, message = "price must be greater than or equal 0") @Max(value = 1000000000, message = "price must be less than or equal 1000000000") Float getPrice() {
        return price;
    }

    public void setPrice(@Min(value = 0, message = "price must be greater than or equal 0") @Max(value = 1000000000, message = "price must be less than or equal 1000000000") Float price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

}
