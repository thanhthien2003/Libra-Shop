package com.example.librabe.dto;

public interface IOrderDetailDto {
    Integer getIdOrder();
    String getNameProduct();

    Integer getQuantity();
    Integer getProductId();

    Double getPriceProduct();
    String getImageProduct();
}
