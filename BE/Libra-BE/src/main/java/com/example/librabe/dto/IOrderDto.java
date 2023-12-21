package com.example.librabe.dto;

public interface IOrderDto {
    Integer getIdOrder();
    Double getTotalAmount();
    Integer getAccountId();
    String getDateOrder();

    String getAddressOrder();
    String getPhoneNumber();
}
