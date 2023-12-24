package com.example.librabe.controler;

import com.example.librabe.dto.IProductDto;
import com.example.librabe.model.*;
import com.example.librabe.service.*;
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
    @Autowired
    private IBrandService brandService;
    @Autowired
    private ITypeService typeService;
    @Autowired
    private ISizeService sizeService;
    @Autowired
    private IColorService colorService;

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
             pageable = PageRequest.of(page,8,Sort.by("priceProduct").ascending());
        } else {
             pageable = PageRequest.of(page,8,Sort.by("priceProduct").descending());
        }
        Page<IProductDto> products = null;
//        if (name == null){
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
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

    @GetMapping("/{idProduct}")
    public ResponseEntity<?> detailProduct(
            @PathVariable(value = "idProduct",required = false) Integer idProduct
    ){
        if (idProduct == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        IProductDto productDto = iProductService.getDetailProduct(idProduct);
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

    @GetMapping("/type")
    public ResponseEntity<?> getAllType (){
        List<TypeProduct> typeList = typeService.getAllType();
        if (typeList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(typeList,HttpStatus.OK);
    }

    @GetMapping("/size")
    public ResponseEntity<?> getAllSize (){
        List<SizeProduct> sizeList = sizeService.getAllSize();
        if (sizeList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(sizeList,HttpStatus.OK);
    }

    @GetMapping("/brands")
    public ResponseEntity<?> getAllBrand (){
        List<Brands> brandList = brandService.getAllBrand();
        if (brandList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(brandList,HttpStatus.OK);
    }

    @GetMapping("/color")
    public ResponseEntity<?> getAllColor (){
        List<ColorProduct> colorList = colorService.getColor();
        if (colorList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(colorList,HttpStatus.OK);
    }

    @GetMapping("/type-of-product")
    public ResponseEntity<?> getAllTypeOfProduct (
            @RequestParam(value = "nameProduct",required = false,defaultValue = "") String nameProduct
    ){
        List<TypeProduct> typeList = typeService.getAllTypeOfProduct(nameProduct);
        if (typeList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(typeList,HttpStatus.OK);
    }

    @GetMapping("/size-of-product")
    public ResponseEntity<?> getAllSizeOfProduct (
            @RequestParam(value = "nameType",required = false,defaultValue = "") String nameType
    ){
        List<SizeProduct> sizeList = sizeService.getAllSizeOfProduct(nameType);
        if (sizeList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(sizeList,HttpStatus.OK);
    }

    @GetMapping("/color-of-product")
    public ResponseEntity<?> getAllColorOfProduct (
            @RequestParam(value = "nameProduct",required = false,defaultValue = "") String nameProduct
    ){
        List<ColorProduct> colorList = colorService.getAllColorOfProduct(nameProduct);
        if (colorList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(colorList,HttpStatus.OK);
    }

    @GetMapping("/brand-of-product")
    public ResponseEntity<?> getAllBrandOfProduct (
            @RequestParam(value = "nameProduct",required = false,defaultValue = "") String nameProduct
    ){
        List<Brands> brandList = brandService.getAllBrandOfProduct(nameProduct);
        if (brandList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(brandList,HttpStatus.OK);
    }


}
