package com.example.shopweb_backend.controllers;

import com.example.shopweb_backend.entities.CategoryEntity;
import com.example.shopweb_backend.models.DTO.CategoryDTO;
import com.example.shopweb_backend.services.ICategoryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/categories")
public class CategoryController {
    @Autowired
    private ICategoryService categoryService;

    @PostMapping("")
    public ResponseEntity<?> createCategory(@Valid @RequestBody CategoryDTO categoryDTO, BindingResult result) {
        try {
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors()
                        .stream()
                        .map(FieldError::getDefaultMessage)
                        .toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            CategoryEntity categoryRespon = categoryService.createCategory(categoryDTO);
            return ResponseEntity.ok(categoryRespon);
        }catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("")
    public ResponseEntity<List<CategoryEntity>> getAllCategories() {
        List<CategoryEntity> categoryEntities = categoryService.getAllCategories();
        return ResponseEntity.ok(categoryEntities);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCategory(@PathVariable("id") Long id){
        CategoryEntity categoryEntities = categoryService.getCategoryById(id);
        return ResponseEntity.ok(categoryEntities);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateCategory(@PathVariable Long id, @Valid @RequestBody CategoryDTO categoryDTO)
    {
        try {
            categoryService.updateCategory(id, categoryDTO);
            return ResponseEntity.ok("Category updated successfully");
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@Valid @PathVariable("id") Long id) {
        try {
            categoryService.deleteCategory(id);
            return ResponseEntity.ok().body("Delete category with id : "+ id +" successfully");
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
