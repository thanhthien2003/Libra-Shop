package com.example.librabe.service.imp;

import com.example.librabe.model.ColorProduct;
import com.example.librabe.repository.IColorRepository;
import com.example.librabe.service.IColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColorService implements IColorService {
    @Autowired
    private IColorRepository colorRepository;
    @Override
    public List<ColorProduct> getColor() {
        return colorRepository.findAll();
    }
}
