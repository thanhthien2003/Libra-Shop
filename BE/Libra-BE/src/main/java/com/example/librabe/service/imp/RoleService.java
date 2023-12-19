package com.example.librabe.service.imp;

import com.example.librabe.model.ERole;
import com.example.librabe.model.Roles;
import com.example.librabe.repository.IRoleRepository;
import com.example.librabe.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class RoleService implements IRoleService {
    @Autowired
   private IRoleRepository IRoleRepository;
    @Override
    public Optional<Roles> findByRoleName(ERole roleName) {
        return IRoleRepository.findByRoleName(roleName);
    }
}
