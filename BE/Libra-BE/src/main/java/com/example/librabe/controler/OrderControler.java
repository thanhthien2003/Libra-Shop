package com.example.librabe.controler;


import com.example.librabe.dto.CartDtoPay;
import com.example.librabe.dto.ICartDto;
import com.example.librabe.dto.IOrderDto;
import com.example.librabe.model.Accounts;
import com.example.librabe.service.IAccountService;
import com.example.librabe.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/order")
public class OrderControler {
    @Autowired
    private IOrderService orderService;
    @Autowired
    private IAccountService accountService;
    @PostMapping("/create")
    public ResponseEntity<?> create(
            @RequestParam(value = "userName",required = false) String userName,
            @RequestParam(value = "totalAmount",required = false) Double totalAmount,
            @RequestBody List<CartDtoPay> cartDtoPay
    ){
        if (orderService.createOrder(cartDtoPay,userName,totalAmount)){
            return  new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("")
    public  ResponseEntity<?> findAllOrder(
            @RequestParam(value = "userName",required = false) String userName
    ){
        if (userName == null || userName.equals("")){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Accounts accounts = accountService.findByUserName(userName);
        if (accounts == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        List<IOrderDto> orderDtoList =  orderService.getAllOrder(accounts.getId());
        if (orderDtoList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(orderDtoList,HttpStatus.OK);
    }
}
