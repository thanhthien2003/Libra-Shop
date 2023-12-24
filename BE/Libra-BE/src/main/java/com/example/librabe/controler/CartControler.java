package com.example.librabe.controler;

import com.example.librabe.dto.CartDto;
import com.example.librabe.dto.ICartDto;
import com.example.librabe.dto.IProductDto;
import com.example.librabe.model.Accounts;
import com.example.librabe.model.Cart;
import com.example.librabe.model.Products;
import com.example.librabe.service.IAccountService;
import com.example.librabe.service.ICartService;
import com.example.librabe.service.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/cart")
public class CartControler {
    @Autowired
    private ICartService cartService;
    @Autowired
    private IAccountService accountService;
    @Autowired
    private IProductService productService;

    @GetMapping("")
    public  ResponseEntity<?> findAll(
            @RequestParam(value = "user_name",required = false) String userName
    ){
        if(userName == null) return ResponseEntity.badRequest().body("Không nhận được userName");
        if (accountService.findByUserName(userName) == null) return ResponseEntity.badRequest().body("Không tìm thấy account tương ứng");
        List<ICartDto> list = cartService.getAllCart(userName);
        if (list == null || list.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

    @PostMapping("create")
    public ResponseEntity<?> create(
            @RequestBody CartDto cartDto,
            @RequestParam(value = "quantity",required = false) Integer quantity
            ){
        if (cartDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Accounts accounts = accountService.findByUserName(cartDto.getUserName());
        if (accounts == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }


        Cart cart = new Cart();
        cart.setAccountId(new Accounts(accounts.getId()));
        cart.setProductId(new Products(cartDto.getProductId()));
        cart.setQuantity(cartDto.getQuantityCart());
        if (cartService.checkProductInCart(cart.getProductId().getId(), cart.getAccountId().getId()) == null){
            cartService.createNewCart(cart);
        } else {
            IProductDto productDto = productService.getDetailProduct(cartDto.getProductId());
            Cart cart1 = cartService.checkProductInCart(cartDto.getProductId(), accounts.getId());
            if (cart1.getQuantity() >= productDto.getQuantity()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            cartService.increaseQuantity(quantity,cartDto.getProductId(), accounts.getId());
        }
        return  new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("create/detail")
    public ResponseEntity<?> createDetail(
            @RequestBody CartDto cartDto,
            @RequestParam(value = "quantity",required = false) Integer quantity
    ){
        if (cartDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        if (cartDto.getIdSize() == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Accounts accounts = accountService.findByUserName(cartDto.getUserName());
        if (accounts == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        IProductDto productDto = productService.checkProductDetail(cartDto.getIdType(), cartDto.getIdSize());
        if (productDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Cart cart1 = cartService.checkProductInCart(productDto.getIdProduct(), accounts.getId());
        if (cart1 == null){
            if (quantity >= productDto.getQuantity()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            Cart cart = new Cart();
            cart.setAccountId(new Accounts(accounts.getId()));
            cart.setProductId(new Products(productDto.getIdProduct()));
            cart.setQuantity(cartDto.getQuantityCart());
            cartService.createNewCart(cart);
        } else {
            if ((cart1.getQuantity() + quantity) >= productDto.getQuantity()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            cartService.increaseQuantity(quantity,productDto.getIdProduct(), accounts.getId());
        }
        return  new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("reduce")
    public  ResponseEntity<?> reduce(
            @RequestParam(value = "productId",required = false) Integer productId,
            @RequestParam(value = "userName",required = false) String userName
    ){
        if (productId == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        if (userName == null){
            return  new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Accounts accounts = accountService.findByUserName(userName);
        if (accounts == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        if (cartService.checkProductInCart(productId, accounts.getId()).getQuantity() == 1){
            cartService.deleteCart(productId, accounts.getId());
        } else {
            cartService.reduceQuantity(productId,accounts.getId());
        }
        return  new ResponseEntity<>(HttpStatus.CREATED);
    }
}
