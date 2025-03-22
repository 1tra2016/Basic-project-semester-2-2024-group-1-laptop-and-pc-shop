package com.example.shopweb_backend.customexceptions;

public class PermissionDenyException extends RuntimeException {
  public PermissionDenyException(String message) {
    super(message);
  }
}
