import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import {
  FaTachometerAlt,
  FaUsers,
  FaUserPlus,
  FaBuilding,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div
      className="sidebar bg-primary text-white p-3 vh-100 shadow"
      style={{ width: "250px" }}
    >
      <h3 className="text-center mb-4">EMS</h3>

      <ul className="nav flex-column">

        {/* Dashboard */}
        <li className="nav-item mb-3">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "nav-link sidebar-link active" : "nav-link sidebar-link"
            }
          >
            <FaTachometerAlt className="me-2" />
            Dashboard
          </NavLink>
        </li>

        {/* Employees */}
        <li className="nav-item mb-3">
          <NavLink
            to="/employees"
            className={({ isActive }) =>
              isActive ? "nav-link sidebar-link active" : "nav-link sidebar-link"
            }
          >
            <FaUsers className="me-2" />
            Employees
          </NavLink>
        </li>

        {/* Add Employee */}
        <li className="nav-item mb-3">
          <NavLink
            to="/add-employee"
            className={({ isActive }) =>
              isActive ? "nav-link sidebar-link active" : "nav-link sidebar-link"
            }
          >
            <FaUserPlus className="me-2" />
            Add Employee
          </NavLink>
        </li>

        {/* Departments */}
        <li className="nav-item mb-3">
          <NavLink
            to="/departments"
            className={({ isActive }) =>
              isActive ? "nav-link sidebar-link active" : "nav-link sidebar-link"
            }
          >
            <FaBuilding className="me-2" />
            Departments
          </NavLink>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;