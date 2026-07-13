import axios from "axios";

const EMPLOYEE_API_BASE_URL =
    "https://employee-management-system-production-84f4.up.railway.app/api/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    deleteEmployee(id){
        return axios.delete(`${EMPLOYEE_API_BASE_URL}/${id}`);
    }

    getEmployeeById(id){
        return axios.get(`${EMPLOYEE_API_BASE_URL}/${id}`);
    }

    updateEmployee(id, employee){
        return axios.put(`${EMPLOYEE_API_BASE_URL}/${id}`, employee);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
}

const employeeService = new EmployeeService();

export default employeeService;