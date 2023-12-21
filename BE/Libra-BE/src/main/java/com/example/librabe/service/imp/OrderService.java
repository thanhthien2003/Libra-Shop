package com.example.librabe.service.imp;

import com.example.librabe.dto.CartDtoPay;
import com.example.librabe.dto.ICartDto;
import com.example.librabe.dto.IOrderDto;
import com.example.librabe.model.Accounts;
import com.example.librabe.repository.IOrderRepository;
import com.example.librabe.service.IAccountService;
import com.example.librabe.service.ICartService;
import com.example.librabe.service.IOrderDetailService;
import com.example.librabe.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository iOrderRepository;
    @Autowired
    private IAccountService accountService;
    @Autowired
    private IOrderDetailService orderDetailService;
    @Autowired
    private ICartService cartService;
    @Override
    public boolean createOrder(List<CartDtoPay> cartDto, String userName, Double totalAmount) {
        LocalDateTime localDateTime = LocalDateTime.now();
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        String date = localDateTime.format(dateTimeFormatter);
        Accounts accounts = accountService.findByUserName(userName);
        if (accounts == null){
            return false;
        }
        try {
            iOrderRepository.createOrder(date,totalAmount,accounts.getId());
            Integer idOrder = iOrderRepository.getIdMaxForOrder();
            for (CartDtoPay c:cartDto) {
                orderDetailService.createOrderDetail(c,idOrder);
                cartService.deleteCart(c.getProductId(),accounts.getId());
            }
        }catch (Exception e){
            return false;
        }
        return true;
    }

    @Override
    public List<IOrderDto> getAllOrder(Integer accountId) {
        return iOrderRepository.getAllOrder(accountId);
    }
}
