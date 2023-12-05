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
@Table(name = "account_roles")
public class AccountRoles {
    @Id
    @Column(name = "id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private Accounts accountId;

    @Column(name = "role_id")
    private Integer roleId;

    @Column(name = "is_flag")
    private Byte isFlag;
}
