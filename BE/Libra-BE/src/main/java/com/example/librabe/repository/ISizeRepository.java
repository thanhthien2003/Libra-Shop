package com.example.librabe.repository;

import com.example.librabe.model.SizeProduct;
import com.example.librabe.model.TypeProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ISizeRepository extends JpaRepository<SizeProduct,Integer> {
    @Query(value = "select  s.id ,s.name_size , s.is_flag " +
            "from products p join product_detail pd on p.product_detail_id = pd.id " +
            "                join brands b on pd.brands_id = b.id " +
            "                join color_product cp on pd.color_id = cp.id " +
            "                join size_product s on pd.size_id = s.id " +
            "                join type_product t on pd.type_product_id = t.id where (p.is_flag = 0 " +
            "    and t.name_type like :nameType) " +
            "group by s.id ",nativeQuery = true)
    List<SizeProduct> getAllSizeOfProduct(String nameType);
}
