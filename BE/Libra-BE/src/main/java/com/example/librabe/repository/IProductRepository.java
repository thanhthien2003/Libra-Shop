package com.example.librabe.repository;

import com.example.librabe.dto.IProductDto;
import com.example.librabe.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Products,Integer> {

    @Query(value = "select p.id as idProduct , p.image as imageProduct ,p.is_flag as flagProduct ," +
            "p.name_products as nameProduct ,p.price as priceProduct ,b.name_brands as brandProduct ," +
            "cp.name_color as colorProduct ,s.name_size as sizeProduct ,t.name_type as typeProduct , p.quantity as quantity " +
            " from products p join product_detail pd on p.product_detail_id = pd.id " +
            "join brands b on pd.brands_id = b.id " +
            "join color_product cp on pd.color_id = cp.id " +
            "join size_product s on pd.size_id = s.id " +
            "join type_product t on pd.type_product_id = t.id where (p.is_flag = 0 " +
            "and p.name_products like CONCAT('%', :name, '%') " +
            "and b.name_brands like CONCAT('%', :brand, '%') " +
            "and cp.name_color like CONCAT('%', :color, '%') " +
            "and s.name_size like CONCAT('%', :size, '%') " +
            "and t.name_type like CONCAT('%', :type, '%') " +
            "and p.price = :price)",nativeQuery = true)
    Page<IProductDto> getAll(String name,String brand,String color,String size,String type,Long price,Pageable pageable);

    @Query(value = "select p.id as idProduct , p.image as imageProduct ,p.is_flag as flagProduct ," +
            "p.name_products as nameProduct ,p.price as priceProduct ,b.name_brands as brandProduct ," +
            "cp.name_color as colorProduct ,s.name_size as sizeProduct ,t.name_type as typeProduct , p.quantity as quantity " +
            " from products p join product_detail pd  on p.product_detail_id = pd.id " +
            "join brands b on pd.brands_id = b.id " +
            "join color_product cp on pd.color_id = cp.id " +
            "join size_product s on pd.size_id = s.id " +
            "join type_product t on pd.type_product_id = t.id where (p.is_flag = 0 " +
            "and p.quantity > 0 " +
            "and p.name_products like CONCAT('%', :name, '%') " +
            "and b.name_brands like CONCAT('%', :brand, '%') " +
            "and cp.name_color like CONCAT('%', :color, '%') " +
            "and s.name_size like CONCAT('%', :size, '%') " +
            "and t.name_type like CONCAT('%', :type, '%')) ",nativeQuery = true)
    Page<IProductDto> getAllNoPrice(String name,String brand,String color,String size,String type,Pageable pageable);


    @Query(value = "select p.id as idProduct , p.image as imageProduct ,p.is_flag as flagProduct ," +
            "p.name_products as nameProduct ,p.price as priceProduct ,b.name_brands as brandProduct ," +
            "cp.name_color as colorProduct ,s.name_size as sizeProduct ,t.name_type as typeProduct ,  p.quantity as quantity , sum(od.quantity) as bestSaler " +
            " from products p join product_detail pd  on p.product_detail_id = pd.id " +
            "join brands b on pd.brands_id = b.id " +
            "join color_product cp on pd.color_id = cp.id " +
            "join size_product s on pd.size_id = s.id " +
            "join type_product t on pd.type_product_id = t.id " +
            "join order_detail od on p.id = od.product_id " +
            "where (p.is_flag = 0) " +
            "group by p.id " +
            "order by bestSaler DESC  LIMIT 4 ",nativeQuery = true)
    List<IProductDto> getListBestSaller();


    @Query(value = "select p.id as idProduct , p.image as imageProduct ,p.is_flag as flagProduct ," +
            "p.name_products as nameProduct ,p.price as priceProduct ,b.name_brands as brandProduct ," +
            "cp.name_color as colorProduct ,s.name_size as sizeProduct ,t.name_type as typeProduct ,  p.quantity as quantity  " +
            " from products p join product_detail pd  on p.product_detail_id = pd.id " +
            "join brands b on pd.brands_id = b.id " +
            "join color_product cp on pd.color_id = cp.id " +
            "join size_product s on pd.size_id = s.id " +
            "join type_product t on pd.type_product_id = t.id " +
            "where (p.is_flag = 0) " +
            "order by p.id DESC  LIMIT 4 ",nativeQuery = true)
    List<IProductDto> getListNewProduct();

    @Query(value = "select p.id as idProduct , p.image as imageProduct ,p.is_flag as flagProduct , " +
            "p.name_products as nameProduct ,p.price as priceProduct ,b.name_brands as brandProduct , " +
            "cp.name_color as colorProduct ,s.name_size as sizeProduct ,t.id as idType ,t.name_type as typeProduct , p.quantity as quantity  " +
            "from products p join product_detail pd on p.product_detail_id = pd.id " +
            "join brands b on pd.brands_id = b.id  " +
            "join color_product cp on pd.color_id = cp.id  " +
            "join size_product s on pd.size_id = s.id " +
            "join type_product t on pd.type_product_id = t.id " +
            "where (p.is_flag = 0 and p.id = :idProduct) ",nativeQuery = true)
    IProductDto getDetailProduct(Integer idProduct);

    @Query(value = " select p.id as idProduct , p.image as imageProduct ,p.is_flag as flagProduct , " +
            "            p.name_products as nameProduct ,p.price as priceProduct ,b.name_brands as brandProduct , " +
            "            cp.name_color as colorProduct ,s.name_size as sizeProduct ,t.name_type as typeProduct ,  p.quantity as quantity " +
            "            from products p join product_detail pd on p.product_detail_id = pd.id " +
            "            join brands b on pd.brands_id = b.id " +
            "            join color_product cp on pd.color_id = cp.id " +
            "            join size_product s on pd.size_id = s.id " +
            "            join type_product t on pd.type_product_id = t.id where (p.is_flag = 0 " +
            "            and p.name_products like :nameProduct ) ",nativeQuery = true)
    List<IProductDto> getProductSameName(String nameProduct);

    @Query(value = " select p.id as idProduct , p.image as imageProduct ,p.is_flag as flagProduct , " +
            "p.name_products as nameProduct ,p.price as priceProduct ,b.name_brands as brandProduct , " +
            "cp.name_color as colorProduct ,s.name_size as sizeProduct ,t.name_type as typeProduct ,  p.quantity as quantity  " +
            "from products p join product_detail pd on p.product_detail_id = pd.id " +
            "join brands b on pd.brands_id = b.id " +
            "join color_product cp on pd.color_id = cp.id " +
            "join size_product s on pd.size_id = s.id " +
            "join type_product t on pd.type_product_id = t.id where (p.is_flag = 0 " +
            "and t.id = :idType " +
            "and pd.size_id = :idSize ) ",nativeQuery = true)
    IProductDto checkProductDetail(Integer idType,Integer idSize);

    @Transactional
    @Modifying
    @Query(value = "update products as p set p.quantity = p.quantity - :quantity " +
            "            where p.id = :productId ",nativeQuery = true)
    void decreQuantity(Integer productId,Integer quantity);
}
