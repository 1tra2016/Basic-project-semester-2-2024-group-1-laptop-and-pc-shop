package com.example.shopweb_backend.converter;

import com.example.shopweb_backend.entities.CategoryEntity;
import com.example.shopweb_backend.entities.RoleEntity;
import com.example.shopweb_backend.entities.UserEntity;
import com.example.shopweb_backend.models.DTO.UserDTO;
import com.example.shopweb_backend.repositories.CategoryRepository;
import com.example.shopweb_backend.repositories.RoleRepository;
import com.example.shopweb_backend.repositories.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserConverter {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    public UserEntity convertUserEntity(UserDTO userDTO) {
        RoleEntity role = modelMapper.map(userDTO.getRoleId(), RoleEntity.class);
        userDTO.setRoleId(null);
        UserEntity userEntity = modelMapper.map(userDTO, UserEntity.class);
        userEntity.setRole(role);
        userEntity.setActive(true);
        return userEntity;
    }
}
