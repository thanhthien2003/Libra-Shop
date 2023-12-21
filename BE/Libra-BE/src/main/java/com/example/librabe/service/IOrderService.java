package com.example.librabe.service;

import com.example.librabe.dto.CartDtoPay;
import com.example.librabe.dto.ICartDto;
import com.example.librabe.dto.IOrderDto;

import java.util.List;

public interface IOrderService {
    boolean createOrder(List<CartDtoPay> cartDto, String userName, Double totalAmount);
    List<IOrderDto> getAllOrder(Integer accountId);
}
