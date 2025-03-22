package com.example.shopweb_backend.services.impl;

import com.example.shopweb_backend.entities.CategoryEntity;
import com.example.shopweb_backend.models.DTO.CategoryDTO;
import com.example.shopweb_backend.repositories.CategoryRepository;
import com.example.shopweb_backend.services.ICategoryService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ICategoryServiceImpl implements ICategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public CategoryEntity createCategory(CategoryDTO categoryDTO) {
        CategoryEntity newCategory = modelMapper.map(categoryDTO, CategoryEntity.class);
        return categoryRepository.save(newCategory);
    }

    @Override
    public List<CategoryEntity> getAllCategories() {
        List<CategoryEntity> categories = categoryRepository.findAll();
        return categories;
    }

    @Override
    public CategoryEntity getCategoryById(Long id) {
        return categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Category not found"));
    }

    @Override
    public CategoryEntity updateCategory(Long id, CategoryDTO category) {
        CategoryEntity categoryEntity = getCategoryById(id);
        categoryEntity.setName(category.getName());
        return categoryRepository.save(categoryEntity);
    }

    @Override
    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }
}
