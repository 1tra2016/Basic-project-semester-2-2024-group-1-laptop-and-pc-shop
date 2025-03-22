package com.example.shopweb_backend.controllers;

import com.example.shopweb_backend.entities.UserEntity;
import com.example.shopweb_backend.models.DTO.UserDTO;
import com.example.shopweb_backend.models.DTO.UserLoginDTO;
import com.example.shopweb_backend.models.responses.UserResponse;
import com.example.shopweb_backend.repositories.UserRepository;
import com.example.shopweb_backend.services.IUserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/users")
public class UserController {
    @Autowired
    private IUserService userService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> createUser(@Valid @RequestBody UserDTO userDTO,
                                        BindingResult result){
        try{
            if(result.hasErrors()){
                List<String> errorMessages = result.getFieldErrors()
                        .stream()
                        .map(FieldError::getDefaultMessage)
                        .toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            if(!userDTO.getPassword().equals(userDTO.getRetypePassword())){
                return ResponseEntity.badRequest().body("Password not match");
            }
            UserEntity user = userService.createUser(userDTO);//return ResponseEntity.ok("Register successfully");
            return ResponseEntity.ok("");
        }
        catch (Exception ex){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage()); //rule 5
        }
    }
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(
            @Valid @RequestBody UserLoginDTO userLoginDTO) {
        try {
            String token = userService.login(userLoginDTO.getPhoneNumber(), userLoginDTO.getPassword());
            UserEntity user = userService.getUser(userLoginDTO.getPhoneNumber());
            // Tạo phản hồi JSON
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("role", user.getRole().getName());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", e.getMessage()));
        }
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getUserRespon() {
        try {
            UserResponse userResponse = userService.getUserResponse();
            return ResponseEntity.ok(userResponse);
        }catch (Exception ex){
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", ex.getMessage()));
        }
    }

    @GetMapping("")
    public ResponseEntity<?> getAllUsers() {
        try {
            List<UserResponse> users = userService.getAllUsers();
            return ResponseEntity.ok(users);
        }catch (Exception ex){
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", ex.getMessage()));
        }
    }
}
