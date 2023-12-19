package com.example.librabe.dto;

import com.example.librabe.model.Accounts;
import com.example.librabe.model.Products;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CartDto {

    private Integer quantity;


    private String userName;


    private Integer productId;

}
