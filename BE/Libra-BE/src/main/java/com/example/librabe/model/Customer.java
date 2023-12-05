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
@Table(name = "customer")
public class Customer {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "name_customer")
    private String nameCustomer;

    @Column(name = "birthday")
    private String birthday;

    @Column(name = "gender_customer")
    private Byte genderCustomer;

    @Column(name = "address")
    private String address;

    @Column(name = "phone_customer")
    private String phoneCustomer;

    @Column(name = "email")
    private String email;

    @Column(name = "note")
    private String note;

    @Column(name = "is_flag")
    private Byte isFlag;

}
