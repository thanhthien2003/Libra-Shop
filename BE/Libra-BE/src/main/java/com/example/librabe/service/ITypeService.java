package com.example.librabe.service;

import com.example.librabe.model.TypeProduct;

import java.util.List;

public interface ITypeService {
    List<TypeProduct> getAllType();
    List<TypeProduct> getAllTypeOfProduct(String productName);
}
