package com.example.librabe.repository;

import com.example.librabe.dto.CartDto;
import com.example.librabe.dto.ICartDto;
import com.example.librabe.model.Accounts;
import com.example.librabe.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface ICartRepository extends JpaRepository<Cart,Integer> {
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO cart (quantity,account_id,product_id,is_flag) " +
            "VALUES (:#{#cart.quantity},:#{#cart.accountId.id},:#{#cart.productId.id},false )",nativeQuery = true)
    void createNewCart(Cart cart);


    @Transactional
    @Modifying
    @Query(value = "delete from cart c where (c.product_id = :productId and c.account_id = :accountId) ",nativeQuery = true)
    void deleteCart(Integer productId,Integer accountId);

    @Query(value = "SELECT min(acc.name_customer) as nameAccount,min(acc.user_name) as userName, min(acc.address) as address" +
            ", min(acc.phone_number) as phoneNumber ,min(p.price) as price ," +
            "            min(sp.name_size) as sizeProduct , min(b.name_brands) as brandProduct " +
            "            ,sum(c.quantity) as quantityCart, min(p.quantity) as quantityProduct ," +
            "            min(p.id) as productId , min(p.name_products) as nameProduct , min(p.image) as imageProduct " +
            "            FROM cart c " +
            "            join products p on c.product_id = p.id " +
            "            join accounts acc on c.account_id = acc.id_account " +
            "            join product_detail pd on pd.id = p.product_detail_id " +
            "            join color_product cp on cp.id = pd.color_id " +
            "            join brands b on pd.brands_id = b.id " +
            "            join size_product sp on pd.size_id = sp.id " +
            "            where acc.user_name = :userName and p.is_flag = 0 " +
            "            group by p.id ",nativeQuery = true)
    List<ICartDto> getAllCart(String userName);

    @Transactional
    @Modifying
    @Query(value = "update cart as c set c.quantity = c.quantity + :quantity " +
            "where (c.product_id = :productId and c.account_id = :accountId)",nativeQuery = true)
    void increaseQuantity(Integer quantity,Integer productId,Integer accountId);

    @Transactional
    @Modifying
    @Query(value = "update cart as c set c.quantity = c.quantity - 1 " +
            "where (c.product_id = :productId and c.account_id = :accountId)",nativeQuery = true)
    void reduceQuantity(Integer productId,Integer accountId);


    @Query(value = "select * from cart c where ( c.product_id = :productId and c.account_id = :accountId ) ",nativeQuery = true)
    Cart checkProductInCart(Integer productId,Integer accountId);

}
