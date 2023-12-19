package com.example.librabe.repository;

import com.example.librabe.model.ERole;
import com.example.librabe.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface IRoleRepository extends JpaRepository<Roles,Integer> {
    Optional<Roles> findByRoleName(ERole roleName);

}
