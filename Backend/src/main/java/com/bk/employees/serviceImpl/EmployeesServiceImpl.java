package com.bk.employees.serviceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bk.employees.dto.EmployeesDto;
import com.bk.employees.entity.Employees;
import com.bk.employees.repository.EmployeesRepository;
import com.bk.employees.service.EmployeesService;

@Service
public class EmployeesServiceImpl implements EmployeesService {
	
	@Autowired
	EmployeesRepository repository;

	@Autowired
	ModelMapper mapper;
	
	// Save 
	public EmployeesDto saveEmployee(EmployeesDto dto) {

        Employees employee = mapper.map(dto, Employees.class);

        Employees saved = repository.save(employee);

        return mapper.map(saved, EmployeesDto.class);
    }
	
	// Get All
	public List<EmployeesDto> getAllEmployees() {

        List<Employees> employees = repository.findAll();

        return employees.stream()
                .map(emp -> mapper.map(emp, EmployeesDto.class))
                .collect(Collectors.toList());
    }
	
	// Get By Id
	public EmployeesDto getEmployeeById(int id) {

        Employees employee = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id : " + id));

        return mapper.map(employee, EmployeesDto.class);
    }
	
	// Update
	public EmployeesDto updateEmployee(int id, EmployeesDto dto) {

        Employees employee = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id : " + id));

        employee.setEmpName(dto.getEmpName());
        employee.setEmail(dto.getEmail());
        employee.setDepartment(dto.getDepartment());
        employee.setSalary(dto.getSalary());

        Employees updatedEmployee = repository.save(employee);

        return mapper.map(updatedEmployee, EmployeesDto.class);
    }
	
	// Delete
	public void deleteEmployee(int id) {

        Employees employee = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id : " + id));

        repository.delete(employee);
    }

}
