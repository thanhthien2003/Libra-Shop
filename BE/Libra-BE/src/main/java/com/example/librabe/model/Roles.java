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
@Table(name = "roles")
public class Roles {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "name_role")
    private String nameRole;

    @Column(name = "is_flag")
    private Byte isFlag;

}
