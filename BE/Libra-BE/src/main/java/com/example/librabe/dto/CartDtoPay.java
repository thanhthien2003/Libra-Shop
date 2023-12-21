package com.example.librabe.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CartDtoPay {
    private String userName;


    private Integer productId;


    private Double price;

    private String nameProduct;

    private String imageProduct;

    private String nameAccount;

    private Integer quantityCart;

}
