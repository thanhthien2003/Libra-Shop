package com.example.librabe.service.imp;

import com.example.librabe.model.Accounts;
import com.example.librabe.repository.IAccountRepository;
import com.example.librabe.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService implements IAccountService {
    @Autowired
    private IAccountRepository iAccountRepository;
    @Override
    public Accounts findByUserName(String userName) {
        return iAccountRepository.findByUserName(userName);
    }

    @Override
    public boolean existsAccountsByUserName(String username) {
        return iAccountRepository.existsAccountsByUserName(username);
    }

    @Override
    public void createNewAccount(Accounts accounts) {
        iAccountRepository.save(accounts);
    }

}
