package com.example.librabe.sercurity;

import com.example.librabe.model.Accounts;
import com.example.librabe.repository.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    private IAccountRepository IAccountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Accounts accounts = IAccountRepository.findByUserName(username);
        if (accounts == null){
            throw new UsernameNotFoundException("Account not found");
        }
        return CustomUserDetails.mapAccountToUserDetails(accounts);
    }
}
