import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/employeeList.css";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmployeeService.getEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Delete Employee
  const deleteEmployee = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this employee!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        EmployeeService.deleteEmployee(id)
          .then(() => {
            // Remove employee instantly from table
            setEmployees((prevEmployees) =>
              prevEmployees.filter((employee) => employee.empId !== id)
            );

            Swal.fire({
              title: "Deleted!",
              text: "Employee deleted successfully.",
              icon: "success",
              timer: 2000,
              showConfirmButton: false,
            });
          })
          .catch((error) => {
            console.log(error);

            Swal.fire({
              title: "Error!",
              text: "Failed to delete employee.",
              icon: "error",
            });
          });
      }
    });
  };

  const editEmployee = (id) => {
    navigate(`/update-employee/${id}`);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.empName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid employee-container">
      <h2 className="text-center mb-4">Employee List</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Employee Name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="table-container">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Salary</th>
              <th style={{ width: "170px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee, index) => (
                <tr key={employee.empId}>
                  <td>{index + 1}</td>
                  <td>{employee.empName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.department}</td>
                  <td>₹ {employee.salary}</td>

                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => editEmployee(employee.empId)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteEmployee(employee.empId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No Employee Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;