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
@Table(name = "type_product")
public class TypeProduct {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "name_type")
    private String nameType;

    @Column(name = "is_flag")
    private Byte isFlag;

}
