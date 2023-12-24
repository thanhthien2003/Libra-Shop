package com.example.librabe.service;

import com.example.librabe.model.ColorProduct;

import java.util.List;

public interface IColorService {
    List<ColorProduct> getColor();
    List<ColorProduct> getAllColorOfProduct(String productName);
}
