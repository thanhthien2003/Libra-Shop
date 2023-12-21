package com.example.librabe.repository;

import com.example.librabe.dto.IOrderDto;
import com.example.librabe.model.Cart;
import com.example.librabe.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IOrderRepository extends JpaRepository<Orders,Integer> {
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO orders (date_order,total_amount,account_id,is_flag) " +
            "VALUES (:dateOrder,:totalAmount,:accountId,false)",nativeQuery = true)
    void createOrder(String dateOrder,Double totalAmount,Integer accountId);

    @Query(value = " select max(id) from orders ", nativeQuery = true)
    Integer getIdMaxForOrder();

    @Query(value = " select o.id as idOrder ,o.total_amount as totalAmount,o.account_id " +
            "as accountId,o.date_order " +
            "as dateOrder,a.address " +
            "as addressOrder,a.phone_number " +
            "as phoneNumber from orders o " +
            "join accounts a on o.account_id = a.id_account " +
            "where o.account_id = :accountId ",nativeQuery = true)
    List<IOrderDto> getAllOrder(Integer accountId);
}
