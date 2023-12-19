package com.example.librabe.service.imp;

import com.example.librabe.dto.ICartDto;
import com.example.librabe.model.Cart;
import com.example.librabe.repository.ICartRepository;
import com.example.librabe.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository cartRepository;
    @Override
    public void createNewCart(Cart cart) {
        cartRepository.createNewCart(cart);
    }

    @Override
    public void deleteCart(Integer productId, Integer accountId) {
        cartRepository.deleteCart(productId,accountId);
    }

    @Override
    public List<ICartDto> getAllCart(String userName) {
        return cartRepository.getAllCart(userName);
    }

    @Override
    public void increaseQuantity(Integer productId, Integer accountId) {
        cartRepository.increaseQuantity(productId,accountId);
    }

    @Override
    public void reduceQuantity(Integer productId, Integer accountId) {
        cartRepository.reduceQuantity(productId,accountId);
    }

    @Override
    public Cart checkProductInCart(Integer productId, Integer accountId) {
        return cartRepository.checkProductInCart(productId,accountId);
    }
}
