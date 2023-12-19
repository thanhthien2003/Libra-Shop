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
@Table(name = "product_images")
public class ProductImages {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name_image")
    private String nameImage;

    @Column(name = "is_flag")
    private Boolean isFlag;

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Products productId;
}
