package com.example.librabe.service;

import com.example.librabe.model.Accounts;
import org.springframework.data.repository.query.Param;

public interface IAccountService {
    Accounts findByUserName(String userName);
    boolean existsAccountsByUserName(String username);
    void createNewAccount(Accounts accounts);

}
