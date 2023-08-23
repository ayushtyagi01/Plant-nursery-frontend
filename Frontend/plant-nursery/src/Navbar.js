import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="#">
              Plant Nursery
            </a>
            <div className="navbar-nav ml-auto">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <img
              width={40}
              src="https://cdn-icons-png.flaticon.com/128/2321/2321232.png"
              alt="Profile Icon"
              onClick={() => {
                navigate("/login");
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
