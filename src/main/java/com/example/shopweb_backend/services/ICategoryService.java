package com.example.shopweb_backend.services;

import com.example.shopweb_backend.entities.CategoryEntity;
import com.example.shopweb_backend.models.DTO.CategoryDTO;

import java.util.List;

public interface ICategoryService {
    public CategoryEntity createCategory(CategoryDTO category);
    public List<CategoryEntity> getAllCategories();
    public CategoryEntity getCategoryById(Long id);
    public CategoryEntity updateCategory(Long id, CategoryDTO category);
    public void deleteCategory(Long id);
}
