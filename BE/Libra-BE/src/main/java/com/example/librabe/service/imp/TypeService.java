package com.example.librabe.service.imp;

import com.example.librabe.model.TypeProduct;
import com.example.librabe.repository.ITypeRepository;
import com.example.librabe.service.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeService implements ITypeService {
    @Autowired
    private ITypeRepository typeRepository;

    @Override
    public List<TypeProduct> getAllType() {
        return typeRepository.findAll();
    }
}
