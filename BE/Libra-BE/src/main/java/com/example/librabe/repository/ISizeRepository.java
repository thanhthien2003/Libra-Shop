package com.example.librabe.repository;

import com.example.librabe.model.SizeProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ISizeRepository extends JpaRepository<SizeProduct,Integer> {
}
