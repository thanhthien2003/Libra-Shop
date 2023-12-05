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
@Table(name = "ware_house")
public class WareHouse {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "date_start")
    private String dateStart;

    @Column(name = "quantity")
    private Integer quantity;

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Products productId;

    @Column(name = "is_flag")
    private Byte isFlag;

}
