import React from "react";
import "../../Navbar.css";
import { useNavigate } from "react-router-dom";

const UserNavbar = ({ cartItemCount, onCartIconClick }) => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-fixed ">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="#">
              Plant Nursery
            </a>
            <div className="navBar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="/userHome"
              >
                Home
              </a>
              <a className="nav-link" href="/userPlants">
                Plants
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5582/5582872.png"
              style={{ width: "30px", cursor: "pointer" }}
              alt="Profile Icon"
              onClick={() => {
                navigate("/userProfile");
              }}
            />
            <div className="cart-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/128/9485/9485826.png"
                style={{ width: "30px", cursor: "pointer" }}
                alt="Cart Icon"
                onClick={onCartIconClick}
              />
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserNavbar;
