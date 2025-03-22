package com.example.shopweb_backend.services;

import com.example.shopweb_backend.entities.UserEntity;
import com.example.shopweb_backend.models.DTO.UserDTO;
import com.example.shopweb_backend.models.responses.UserResponse;

import java.util.List;

public interface IUserService {
    UserEntity createUser(UserDTO userDTO) throws Exception;
    String login(String phoneNumber, String password) throws Exception;
    UserEntity getUser(String phoneNumber) throws Exception;
    UserResponse getUserResponse() throws Exception;
    List<UserResponse> getAllUsers() throws Exception;
}
