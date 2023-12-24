package com.example.librabe.service.imp;

import com.example.librabe.model.SizeProduct;
import com.example.librabe.repository.ISizeRepository;
import com.example.librabe.service.ISizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SizeService implements ISizeService {
    @Autowired
    private ISizeRepository sizeRepository;

    @Override
    public List<SizeProduct> getAllSize() {
        return sizeRepository.findAll();
    }

    @Override
    public List<SizeProduct> getAllSizeOfProduct(String nameType) {
        return sizeRepository.getAllSizeOfProduct(nameType);
    }
}
