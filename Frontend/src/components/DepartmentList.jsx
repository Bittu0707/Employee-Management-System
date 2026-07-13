import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";

function DepartmentList() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees()
      .then((response) => {
        const uniqueDepartments = [
          ...new Set(response.data.map((emp) => emp.department)),
        ];

        setDepartments(uniqueDepartments);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Department List</h2>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Department Name</th>
          </tr>
        </thead>

        <tbody>
          {departments.map((dept, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{dept}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentList;