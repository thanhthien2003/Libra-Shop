package com.example.librabe.service;

import com.example.librabe.dto.ICartDto;
import com.example.librabe.model.Cart;

import java.util.List;
import java.util.Optional;

public interface ICartService {
    void createNewCart(Cart cart);

    void deleteCart(Integer productId,Integer accountId);
    List<ICartDto> getAllCart(String userName);
    void increaseQuantity(Integer quantity,Integer productId,Integer accountId);

    void reduceQuantity(Integer productId,Integer accountId);

    Cart checkProductInCart(Integer productId, Integer accountId);

}
