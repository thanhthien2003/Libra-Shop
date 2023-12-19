package com.example.librabe.service;

import com.example.librabe.model.ERole;
import com.example.librabe.model.Roles;


import java.util.Optional;

public interface IRoleService {
    Optional<Roles> findByRoleName(ERole roleName);
}
