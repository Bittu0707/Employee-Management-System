package com.bk.employees.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bk.employees.dto.EmployeesDto;
import com.bk.employees.service.EmployeesService;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeesController {

	@Autowired
	private EmployeesService service;

	// Save Employee
	@PostMapping
	public EmployeesDto saveEmployee(@RequestBody EmployeesDto dto) {
	    return service.saveEmployee(dto);
	}

	// Get All Employees
	@GetMapping
	public List<EmployeesDto> getAllEmployees() {
		return service.getAllEmployees();
	}

	// Get Employee By Id
	@GetMapping("/{id}")
	public EmployeesDto getEmployeeById(@PathVariable int id) {
		return service.getEmployeeById(id);
	}

	// Update Employee
	@PutMapping("/{id}")
	public EmployeesDto updateEmployee(@PathVariable int id, @RequestBody EmployeesDto dto) {
		return service.updateEmployee(id, dto);
	}

	// Delete Employee
	@DeleteMapping("/{id}")
	public String deleteEmployee(@PathVariable int id) {
		service.deleteEmployee(id);
		return "Employee deleted successfully with id : " + id;
	}

}
