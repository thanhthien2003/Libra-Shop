package com.example.librabe.repository;

import com.example.librabe.model.TypeProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITypeRepository extends JpaRepository<TypeProduct,Integer> {
}
