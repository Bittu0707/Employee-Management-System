import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Select from "react-select";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    empName: "",
    email: "",
    department: "",
    salary: "",
  });

  const navigate = useNavigate();

  const departmentOptions = [
    { value: "Human Resources", label: "Human Resources (HR)" },
    { value: "Information Technology", label: "Information Technology (IT)" },
    { value: "Software Development", label: "Software Development" },
    { value: "Finance", label: "Finance" },
    { value: "Accounts", label: "Accounts" },
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Customer Support", label: "Customer Support" },
    { value: "Administration", label: "Administration" },
    { value: "Operations", label: "Operations" },
    { value: "Business Development", label: "Business Development" },
    { value: "Quality Assurance", label: "Quality Assurance (QA)" },
    { value: "Research & Development", label: "Research & Development (R&D)" },
    { value: "DevOps", label: "DevOps" },
    { value: "UI/UX Design", label: "UI/UX Design" },
  ];

  const handleChange = (e) => {
    const value = e.target.value;

    setEmployee({
      ...employee,

      [e.target.name]: value,
    });
  };

  const saveEmployee = (e) => {
    e.preventDefault();

    EmployeeService.createEmployee(employee)

      .then((response) => {
        console.log(response.data);

        toast.success("Employee Added Successfully!");

        navigate("/employees");
      })

      .catch((error) => {
        toast.error("Employee Add Failed!");
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add Employee</h2>

      <div className="card p-4">
        <form onSubmit={saveEmployee}>
          <div className="mb-3">
            <label>Employee Name</label>

            <input
              type="text"
              name="empName"
              className="form-control"
              value={employee.empName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Email</label>

            <input
              type="email"
              name="email"
              className="form-control"
              value={employee.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Department</label>

            <Select
              options={departmentOptions}
              placeholder="-- Select Department --"
              value={departmentOptions.find(
                (option) => option.value === employee.department,
              )}
              onChange={(selectedOption) =>
                setEmployee({
                  ...employee,
                  department: selectedOption.value,
                })
              }
              menuPlacement="auto"
              maxMenuHeight={200}
            />
          </div>

          <div className="mb-3">
            <label>Salary</label>

            <input
              type="number"
              name="salary"
              className="form-control"
              value={employee.salary}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-success" type="submit">
            Save Employee
          </button>

          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => navigate("/employees")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
