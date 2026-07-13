import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">

      <div className="container-fluid">

        <h4 className="fw-bold m-0">
          Employee Management System
        </h4>

        <div className="d-flex align-items-center gap-4">

          <FaBell size={20} />

          <div className="d-flex align-items-center gap-2">

            <FaUserCircle size={35} />

            <div>
              <h6 className="m-0">Admin</h6>
              <small className="text-muted">
                Administrator
              </small>
            </div>

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;