package com.bk.employees.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bk.employees.entity.Employees;

@Repository
public interface EmployeesRepository extends JpaRepository<Employees,Integer>{

}
