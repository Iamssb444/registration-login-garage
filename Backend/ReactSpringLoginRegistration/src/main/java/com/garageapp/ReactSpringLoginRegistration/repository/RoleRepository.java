package com.garageapp.ReactSpringLoginRegistration.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.garageapp.ReactSpringLoginRegistration.models.ERole;
import com.garageapp.ReactSpringLoginRegistration.models.Role;
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}