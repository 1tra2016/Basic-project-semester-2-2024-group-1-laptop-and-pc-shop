package com.example.shopweb_backend.models.DTO;

import jakarta.validation.constraints.NotEmpty;

public class CategoryDTO {
    @NotEmpty(message = "Category's name cannot be empty")
    private String name;

    public @NotEmpty(message = "Category's name cannot be empty") String getName() {
        return name;
    }

    public void setName(@NotEmpty(message = "Category's name cannot be empty") String name) {
        this.name = name;
    }
}
