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
@Table(name = "orders")
public class Orders {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "date_order")
    private String dateOrder;

    @Column(name = "is_flag")
    private Byte isFlag;

    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private Accounts accountId;

    @Column(name = "total_amount")
    private Double totalAmount;

}
