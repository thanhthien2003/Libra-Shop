package com.example.librabe.service;

import com.example.librabe.dto.IProductDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    Page<IProductDto> getAll(String name,String brand,String color,String size,String type,Long price,Pageable pageable);
    Page<IProductDto> getAllNoPrice(String name,String brand,String color,String size,String type,Pageable pageable);
    IProductDto getByIdProduct(Integer id);

    List<IProductDto> getListBestSaller();

    List<IProductDto> getListNewProduct();
}
