package com.example.librabe.service.imp;

import com.example.librabe.model.Brands;
import com.example.librabe.repository.IBrandRepository;
import com.example.librabe.service.IBrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandService implements IBrandService {
    @Autowired
    private IBrandRepository brandRepository;

    @Override
    public List<Brands> getAllBrand() {
        return brandRepository.findAll();
    }

    @Override
    public List<Brands> getAllBrandOfProduct(String productName) {
        return brandRepository.getAllBrandOfProduct(productName);
    }
}
