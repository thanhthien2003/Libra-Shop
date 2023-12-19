package com.example.librabe.payload.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import java.util.Set;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SignupRequest {

    private String userName;


    private String pass;


    private String nameCustomer;


    private String address;

    private Boolean isFlag = false;
    private Set<String> listRoles;
}
