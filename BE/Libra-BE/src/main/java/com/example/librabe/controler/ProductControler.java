package com.example.librabe.controler;

import com.example.librabe.dto.IProductDto;
import com.example.librabe.model.Accounts;
import com.example.librabe.model.Products;
import com.example.librabe.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/product")
public class ProductControler {
    @Autowired
    private IProductService iProductService;

    @GetMapping("")
    public ResponseEntity<?> getAll (
            @RequestParam(value = "name",required = false,defaultValue = "") String name,
            @RequestParam(value = "price",required = false,defaultValue = "") Long price,
            @RequestParam(value = "brand",required = false,defaultValue = "") String brand,
            @RequestParam(value = "color",required = false,defaultValue = "") String color,
            @RequestParam(value = "size",required = false,defaultValue = "") String size,
            @RequestParam(value = "type",required = false,defaultValue = "") String type,
            @RequestParam(value = "page",required = false,defaultValue = "0") Integer page,
            @RequestParam(value = "sort",required = false,defaultValue = "asc") String sort
    ){
        Pageable pageable = null;
        if (sort.equals("asc")){
             pageable = PageRequest.of(page,10,Sort.by("priceProduct").ascending());
        } else {
             pageable = PageRequest.of(page,10,Sort.by("priceProduct").descending());
        }
        Page<IProductDto> products = null;

        if (price == 0) {
            products = iProductService.getAllNoPrice(name, brand, color, size, type, pageable);
        } else {
            products = iProductService.getAll(name,brand,color,size,type,price,pageable);
        }
        if (products == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        if (products.isEmpty()){
            return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(products,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> detailProduct(
            @PathVariable(value = "id",required = false) Integer id
    ){
        IProductDto productDto = iProductService.getByIdProduct(id);
            if (productDto == null){
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(productDto,HttpStatus.OK);
    }

    @GetMapping("/best-saller")
    public ResponseEntity<?> getAllBestSaller (){
        List<IProductDto> products = iProductService.getListBestSaller();
        if (products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products,HttpStatus.OK);
    }

    @GetMapping("/new-product")
    public ResponseEntity<?> getAllNewProduct (){
        List<IProductDto> products = iProductService.getListNewProduct();
        if (products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products,HttpStatus.OK);
    }

}
