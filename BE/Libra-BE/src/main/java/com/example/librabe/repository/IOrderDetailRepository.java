package com.example.librabe.repository;

import com.example.librabe.dto.CartDtoPay;
import com.example.librabe.dto.ICartDto;
import com.example.librabe.dto.IOrderDetailDto;
import com.example.librabe.dto.IOrderDto;
import com.example.librabe.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IOrderDetailRepository extends JpaRepository<OrderDetail,Integer> {
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO order_detail (quantity,product_id,order_id,is_flag) " +
            "VALUES (:#{#cartDto.quantityCart},:#{#cartDto.productId},:orderId,false )",nativeQuery = true)
    void createOrderDetail(CartDtoPay cartDto, Integer orderId);

    @Query(value = " select o.id as idOrder,p.name_products " +
            "as nameProduct,od.quantity " +
            "as quantity,od.product_id " +
            "as productId,p.price " +
            "as priceProduct,p.image " +
            "as imageProduct from orders o " +
            "join order_detail od on od.order_id = o.id " +
            "join products p on p.id = od.product_id " +
            "where (o.account_id = :accountId and o.id = :orderId) ",nativeQuery = true)
    List<IOrderDetailDto> getAllOrderDetail(Integer accountId,Integer orderId);
}
