package com.example.librabe.service.imp;

import com.example.librabe.dto.IProductDto;
import com.example.librabe.repository.IProductRepository;
import com.example.librabe.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Override
    public Page<IProductDto> getAll(String name,String brand,String color,String size,String type,Long price,Pageable pageable) {
        return productRepository.getAll(name,brand,color,size,type,price,pageable);
    }

    @Override
    public Page<IProductDto> getAllNoPrice(String name, String brand, String color, String size, String type, Pageable pageable) {
        return productRepository.getAllNoPrice(name,brand,color,size,type,pageable);
    }


    @Override
    public List<IProductDto> getListBestSaller() {
        return productRepository.getListBestSaller();
    }

    @Override
    public List<IProductDto> getListNewProduct() {
        return productRepository.getListNewProduct();
    }

    @Override
    public IProductDto getDetailProduct(Integer idProduct) {
        return productRepository.getDetailProduct(idProduct);
    }
}
