import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaBuilding,
  FaWallet,
  FaArrowRight,
  FaPlus,
} from "react-icons/fa";

import "../styles/dashboard.css";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    EmployeeService.getEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Total Employees
  const totalEmployees = employees.length;

  // Total Payroll
  const totalSalary = employees.reduce(
    (total, employee) => total + Number(employee.salary || 0),
    0
  );

  // Total Departments
  const departmentCount = [
    ...new Set(employees.map((employee) => employee.department)),
  ].length;

  return (
    <div className="dashboard-container">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h2>Welcome back, Admin! 👋</h2>
          <p>
            Here's what's happening with your <span>team</span> today.
          </p>
        </div>

        <button
          className="add-btn"
          onClick={() => navigate("/add-employee")}
        >
          <FaPlus className="me-2" />
          Add Employee
        </button>
      </div>

      {/* Dashboard Cards */}

      <div className="dashboard-grid">

        {/* Employees */}

        <div
          className="dashboard-card"
          onClick={() => navigate("/employees")}
        >
          <div className="card-icon employees-icon">
            <FaUsers className="icon" />
          </div>

          <div className="card-content">
            <h6>Total Employees</h6>
            <h2>{totalEmployees}</h2>

            <p>
              View Employees
              <FaArrowRight className="ms-2" />
            </p>
          </div>
        </div>

        {/* Departments */}

        <div
          className="dashboard-card"
          onClick={() => navigate("/departments")}
        >
          <div className="card-icon department-icon">
            <FaBuilding className="icon" />
          </div>

          <div className="card-content">
            <h6>Departments</h6>
            <h2>{departmentCount}</h2>

            <p>
              View Departments
              <FaArrowRight className="ms-2" />
            </p>
          </div>
        </div>

        {/* Payroll */}

        <div className="dashboard-card">
          <div className="card-icon payroll-icon">
            <FaWallet className="icon" />
          </div>

          <div className="card-content">
            <h6>Total Payroll</h6>
            <h2>₹ {totalSalary.toLocaleString()}</h2>

            <p>
              View Payroll
              <FaArrowRight className="ms-2" />
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;