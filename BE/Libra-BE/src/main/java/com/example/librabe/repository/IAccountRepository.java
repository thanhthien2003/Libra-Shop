package com.example.librabe.repository;

import com.example.librabe.model.Accounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface IAccountRepository extends JpaRepository<Accounts,Integer> {
    Accounts findByUserName(String username);
    boolean existsAccountsByUserName(String username);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO accounts (user_name, pass , name_customer, address, is_flag ) " +
            "VALUES (:#{#accounts.userName}, :#{#accounts.pass}, :#{#accounts.nameCustomer}, :#{#accounts.address}, " +
            "        :#{#accounts.isFlag} )",nativeQuery = true)
    void createNewAccount(Accounts accounts);

//    @Query(value = "SELECT * from accounts acc WHERE acc.user_name = :userName",nativeQuery = true)
//    Accounts findByAccountUserName(@Param("userName") String userName);
}
