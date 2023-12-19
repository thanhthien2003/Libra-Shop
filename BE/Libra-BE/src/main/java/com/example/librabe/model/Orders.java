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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "date_order")
    private String dateOrder;

    @Column(name = "is_flag")
    private Boolean isFlag;

    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "id_account")
    private Accounts accountId;

    @Column(name = "total_amount")
    private Double totalAmount;

}
