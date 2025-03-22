package com.example.shopweb_backend.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "roles")
public class RoleEntity extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    public static String ADMIN = "ADMIN";
    public static String USER = "USER";

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public static String getADMIN() {
        return ADMIN;
    }

    public static void setADMIN(String ADMIN) {
        RoleEntity.ADMIN = ADMIN;
    }

    public static String getUSER() {
        return USER;
    }

    public static void setUSER(String USER) {
        RoleEntity.USER = USER;
    }
}
