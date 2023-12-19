package com.example.librabe.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "accounts")
public class Accounts {
    @Id
    @Column(name = "id_account")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "pass")
    private String pass;

    @Column(name = "name_customer")
    private String nameCustomer;

    @Column(name = "address")
    private String address;

    @Column(name = "is_flag")
    private Boolean isFlag;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "Account_Role",joinColumns = @JoinColumn(name = "id_account"),
            inverseJoinColumns = @JoinColumn(name = "id_role"))
    private Set<Roles> rolesSet = new HashSet<>();

    public Accounts(Integer id) {
        this.id = id;
    }
}
