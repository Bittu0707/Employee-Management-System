package com.bk.employees.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

	// Root path - Welcome message
	@GetMapping("/")
	public Map<String, String> welcome() {
		Map<String, String> response = new HashMap<>();
		response.put("message", "Employee Management System API is running");
		response.put("status", "success");
		return response;
	}

	// Health check endpoint
	@GetMapping("/health")
	public Map<String, String> health() {
		Map<String, String> response = new HashMap<>();
		response.put("message", "Employee Management System API is running");
		response.put("status", "success");
		return response;
	}

}
