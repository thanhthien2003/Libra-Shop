package com.example.librabe.service.imp;

import com.example.librabe.dto.CartDtoPay;
import com.example.librabe.dto.ICartDto;
import com.example.librabe.dto.IOrderDetailDto;
import com.example.librabe.repository.IOrderDetailRepository;
import com.example.librabe.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService implements IOrderDetailService {
    @Autowired
    private IOrderDetailRepository orderDetailRepository;
    @Override
    public void createOrderDetail(CartDtoPay cartDto, Integer orderId) {
        orderDetailRepository.createOrderDetail(cartDto,orderId);
    }

    @Override
    public List<IOrderDetailDto> getAllOrderDetail(Integer accountId, Integer orderId) {
        return orderDetailRepository.getAllOrderDetail(accountId,orderId);
    }
}
