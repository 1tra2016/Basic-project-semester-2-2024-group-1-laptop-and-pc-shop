package com.example.shopweb_backend.services.impl;

import com.example.shopweb_backend.components.JwtTokenUtil;
import com.example.shopweb_backend.converter.UserConverter;
import com.example.shopweb_backend.customexceptions.DataNotFoundException;
import com.example.shopweb_backend.customexceptions.PermissionDenyException;
import com.example.shopweb_backend.entities.RoleEntity;
import com.example.shopweb_backend.entities.UserEntity;
import com.example.shopweb_backend.models.DTO.UserDTO;
import com.example.shopweb_backend.models.responses.UserResponse;
import com.example.shopweb_backend.repositories.RoleRepository;
import com.example.shopweb_backend.repositories.UserRepository;
import com.example.shopweb_backend.services.IUserService;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class IUserServiceImpl implements IUserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserConverter userConverter;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public UserEntity createUser(UserDTO userDTO) throws Exception {
        //register user
        String phoneNumber = userDTO.getPhoneNumber();
        // Kiểm tra xem số điện thoại đã tồn tại hay chưa
        if(userRepository.existsByPhoneNumber(phoneNumber)) {
            throw new DataIntegrityViolationException("Phone number already exists");
        }
        RoleEntity role =roleRepository.findById(userDTO.getRoleId())
                .orElseThrow(() -> new DataNotFoundException("Role not found"));
        if(role.getName().toUpperCase().equals(RoleEntity.ADMIN)) {
            throw new PermissionDenyException("You cannot register an admin account");
        }
        //convert from userDTO => userEntity
        UserEntity newUser = userConverter.convertUserEntity(userDTO);
        String password = userDTO.getPassword();
        String encodedPassword = passwordEncoder.encode(password);
        newUser.setPassword(encodedPassword);
        newUser.setRole(role);
        return userRepository.save(newUser);
    }


    @Override
    public String login(String phoneNumber, String password) throws Exception {
        Optional<UserEntity> optionalUser = userRepository.findByPhoneNumber(phoneNumber);
        if(optionalUser.isEmpty()) {
            throw new DataNotFoundException("Invalid phone number / password");
        }
        //return optionalUser.get();//muốn trả JWT token ?
        UserEntity existingUser = optionalUser.get();
        //check password
        if(!passwordEncoder.matches(password, existingUser.getPassword())) {
            throw new BadCredentialsException("Wrong phone number or password");
        }
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                phoneNumber, password,
                existingUser.getAuthorities()
        );

        //authenticate with Java Spring security
        authenticationManager.authenticate(authenticationToken);
        return jwtTokenUtil.generateToken(existingUser);
    }

    @Override
    public UserEntity getUser(String phoneNumber) throws Exception {
        return userRepository.findByPhoneNumber(phoneNumber)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public UserResponse getUserResponse() throws Exception {
        //lấy user từ SecurityContextHolder
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new RuntimeException("User is not authenticated");
        }
        UserEntity user = (UserEntity) authentication.getPrincipal();
        UserResponse userResponse = modelMapper.map(user, UserResponse.class);
        System.out.println(userResponse);
        return userResponse;
    }

    @Override
    public List<UserResponse> getAllUsers() throws Exception {
        List<UserEntity> users = userRepository.findAll();
        List<UserResponse> userResponses = new ArrayList<>();
        for(UserEntity user : users) {
            UserResponse userResponse = modelMapper.map(user, UserResponse.class);
            userResponse.setRole(user.getRole().getName());
            userResponses.add(userResponse);
        }
        return userResponses;
    }
}
