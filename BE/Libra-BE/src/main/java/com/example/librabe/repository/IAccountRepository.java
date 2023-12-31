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

    @Transactional
    @Modifying
    @Query(value = "update accounts acc set name_customer = :#{#accounts.nameCustomer}," +
            "address = :#{#accounts.address} , phone_number = :#{#accounts.phoneNumber} " +
            "where acc.id_account = :#{#accounts.id} ",nativeQuery = true)
    void updateAccount(Accounts accounts);
}
