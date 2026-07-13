import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import DepartmentList from "./components/DepartmentList";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";


function App() {

  return (

    <BrowserRouter>

      <div className="d-flex">

        {/* Sidebar */}
        <Sidebar />


        <div className="flex-grow-1">

          {/* Navbar */}
          <Navbar />


          {/* Main Content */}
          <div className="container-fluid p-4">

            <Routes>

              {/* Dashboard */}
              <Route path="/" element={<Dashboard />} />

              <Route 
                path="/dashboard" 
                element={<Dashboard />} 
              />


              {/* Employee */}
              <Route 
                path="/employees" 
                element={<EmployeeList />} 
              />


              {/* Department */}
              <Route 
                path="/departments" 
                element={<DepartmentList />} 
              />


              {/* Add Employee */}
              <Route 
                path="/add-employee" 
                element={<AddEmployee />} 
              />


              {/* Update Employee */}
              <Route
                path="/update-employee/:id"
                element={<UpdateEmployee />}
              />


            </Routes>

          </div>

        </div>


      </div>


      {/* React Toastify Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />


    </BrowserRouter>

  );

}

export default App;