package com.example.librabe.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "products")
public class Products {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "name_products")
    private String nameProducts;

    @Column(name = "price")
    private Double price;

    @Column(name = "image")
    private String image;

    @Column(name = "is_flag")
    private Byte isFlag;

    @ManyToOne
    @JoinColumn(name = "color_id", referencedColumnName = "id")
    private ColorProduct colorId;

    @ManyToOne
    @JoinColumn(name = "brands_id", referencedColumnName = "id")
    private Brands brandsId;

    @ManyToOne
    @JoinColumn(name = "type_product_id", referencedColumnName = "id")
    private TypeProduct typeProductId;
    @ManyToOne
    @JoinColumn(name = "size_id", referencedColumnName = "id")
    private SizeProduct sizeId;

}
