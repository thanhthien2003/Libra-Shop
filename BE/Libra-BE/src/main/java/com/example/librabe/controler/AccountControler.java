package com.example.librabe.controler;

import com.example.librabe.config.JwtTokenProvider;
import com.example.librabe.model.Accounts;
import com.example.librabe.model.ERole;
import com.example.librabe.model.Roles;
import com.example.librabe.payload.request.LoginRequest;
import com.example.librabe.payload.request.SignupRequest;
import com.example.librabe.payload.respone.JwtRespone;
import com.example.librabe.payload.respone.MessageRespone;
import com.example.librabe.sercurity.CustomUserDetails;
import com.example.librabe.service.IAccountService;
import com.example.librabe.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class AccountControler {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenProvider tokenProvider;
    @Autowired
    private IAccountService accountService;

    @Autowired
    private IRoleService roleService;

    @Autowired
    private PasswordEncoder encoder;

    @PostMapping("/signup")
    public ResponseEntity<?> registerAccount(@RequestBody SignupRequest signupRequest){
        if (accountService.existsAccountsByUserName(signupRequest.getUserName())){
            return ResponseEntity.badRequest().body(new MessageRespone("Error: Username is already exist"));
        }
        Accounts accounts = new Accounts();
        accounts.setUserName(signupRequest.getUserName());
        accounts.setPass(encoder.encode(signupRequest.getPass()));
        accounts.setAddress(signupRequest.getAddress());
        accounts.setNameCustomer(signupRequest.getNameCustomer());
        accounts.setIsFlag(false);
        Set<String> strRoles = signupRequest.getListRoles();
        Set<Roles> rolesSet = new HashSet<>();
        if (strRoles == null){
            //User quyen mac dinh
            Roles userRole = roleService.findByRoleName(ERole.ROLE_USER).orElseThrow(() -> new RuntimeException("Error: Role is not found"));
            rolesSet.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role){
                    case "admin":
                        Roles adminRole = roleService.findByRoleName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found"));
                        rolesSet.add(adminRole);
                    case "user":
                        Roles userRole = roleService.findByRoleName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found"));
                        rolesSet.add(userRole);
                }
            });
        }
        accounts.setRolesSet(rolesSet);
        accountService.createNewAccount(accounts);
        return ResponseEntity.ok(new MessageRespone("User registered successfully"));
    }

    @PostMapping("/signin")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUserName(),loginRequest.getPass())
        );

        if (authentication != null && authentication.isAuthenticated()) {
            SecurityContextHolder.getContext().setAuthentication(authentication);

            CustomUserDetails customUserDetails = (CustomUserDetails) authentication.getPrincipal();

            String jwt = tokenProvider.generateToken(customUserDetails);

            List<String> listRoles = customUserDetails.getAuthorities()
                    .stream().map(item -> item.getAuthority()).collect(Collectors.toList());
            return ResponseEntity.ok(new JwtRespone(jwt,customUserDetails.getUsername(),listRoles));
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/find-by-id/{userName}")
    public ResponseEntity<?> getAccountByUserName(@PathVariable String userName){
        Accounts acc = accountService.findByUserName(userName);
        if (acc == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(acc,HttpStatus.OK);
    }

    @PatchMapping("/update")
    public  ResponseEntity<?> updateAccount(
            @RequestBody Accounts accounts
    ){
        if (accounts == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        accountService.updateAccount(accounts);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
