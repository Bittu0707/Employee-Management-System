package com.bk.employees.service;

import java.util.List;

import com.bk.employees.dto.EmployeesDto;

public interface EmployeesService {
	EmployeesDto saveEmployee(EmployeesDto dto);
	
	List<EmployeesDto> getAllEmployees();

    EmployeesDto getEmployeeById(int id);

    EmployeesDto updateEmployee(int id, EmployeesDto dto);

    void deleteEmployee(int id);

}
