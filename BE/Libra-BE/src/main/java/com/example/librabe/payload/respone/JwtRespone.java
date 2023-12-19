package com.example.librabe.payload.respone;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
public class JwtRespone {
    private String token;
    private String type = "Bearer";
    private String userName;
    private List<String> listRoles;

    public JwtRespone(String token, String userName, List<String> listRoles) {
        this.token = token;
        this.userName = userName;
        this.listRoles = listRoles;
    }

}
