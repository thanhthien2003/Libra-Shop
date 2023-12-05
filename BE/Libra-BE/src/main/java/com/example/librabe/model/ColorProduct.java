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
@Table(name = "color_product")
public class ColorProduct {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "name_color")
    private String nameColor;

    @Column(name = "is_flag")
    private Byte isFlag;

}
