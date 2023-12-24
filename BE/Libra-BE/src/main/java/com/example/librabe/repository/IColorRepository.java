package com.example.librabe.repository;

import com.example.librabe.dto.ICartDto;
import com.example.librabe.model.ColorProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IColorRepository extends JpaRepository<ColorProduct,Integer> {
    @Query(value = "select  cp.id ,cp.name_color ,cp.is_flag " +
            "from products p join product_detail pd on p.product_detail_id = pd.id " +
            "                join brands b on pd.brands_id = b.id " +
            "                join color_product cp on pd.color_id = cp.id " +
            "                join size_product s on pd.size_id = s.id " +
            "                join type_product t on pd.type_product_id = t.id where (p.is_flag = 0" +
            "    and p.name_products like :productName) " +
            "group by cp.id ",nativeQuery = true)
    List<ColorProduct> getAllColorOfProduct(String productName);
}
