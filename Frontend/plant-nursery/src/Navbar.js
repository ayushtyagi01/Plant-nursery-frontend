import React, { useState } from "react";
import "./styles/NavbarGen.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLog = () => {
    setIsDropdownOpen(false);
    navigate("/login");
  };

  return (
    <div className="nav-gen">
      <nav className="navbar navbar-fixed ">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img
              src="https://see.fontimg.com/api/renderfont4/BXew/eyJyIjoiZnMiLCJoIjoxMTcsInciOjE1MDAsImZzIjo3OCwiZmdjIjoiIzBFOUYyQiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/cHJha3JpdGk/samarkan-oblique.png"
              width={120}
            />
            <div className="navBar-nav">
              <a
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                href="/"
              >
                Home
              </a>
              <a
                className={`nav-link ${
                  location.pathname === "/plants" ? "active" : ""
                }`}
                href="/plants"
              >
                Plants
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center ">
            <img
            className="profile-image"
              src="https://cdn-icons-png.flaticon.com/128/5582/5582872.png"
              style={{ width: "30px", cursor: "pointer" }}
              alt="Profile Icon"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <div className="dropdown">
                <button className="dropdown-item" onClick={handleLog}>
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
