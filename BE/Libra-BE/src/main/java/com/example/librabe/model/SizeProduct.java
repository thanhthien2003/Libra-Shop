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
@Table(name = "size_product")
public class SizeProduct {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "name_size")
    private String nameSize;

    @Column(name = "is_flag")
    private Byte isFlag;

}
