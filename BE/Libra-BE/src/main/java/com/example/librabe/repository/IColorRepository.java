package com.example.librabe.repository;

import com.example.librabe.model.ColorProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IColorRepository extends JpaRepository<ColorProduct,Integer> {
}
