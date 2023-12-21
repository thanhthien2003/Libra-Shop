package com.example.librabe.service;

import com.example.librabe.dto.CartDtoPay;
import com.example.librabe.dto.ICartDto;
import com.example.librabe.dto.IOrderDetailDto;

import java.util.List;

public interface IOrderDetailService {
    void createOrderDetail(CartDtoPay cartDto, Integer orderId);
    List<IOrderDetailDto> getAllOrderDetail(Integer accountId, Integer orderId);
}
