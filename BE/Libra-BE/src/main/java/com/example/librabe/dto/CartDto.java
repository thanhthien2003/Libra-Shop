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

   private String nameAccount;
   private String userName;
    private Double price;
    private Integer quantityCart;

    private Integer productId;
    private Integer idBrand;
    private Integer idColor;
    private Integer idSize;
    private Integer idType;
    private String nameProduct;
   private String imageProduct;

}
