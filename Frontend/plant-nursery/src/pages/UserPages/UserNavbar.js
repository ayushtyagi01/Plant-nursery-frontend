import React, { useEffect, useState } from "react";
import "../../Navbar.css";
import { useNavigate } from "react-router-dom";

const UserNavbar = ({ cartItemCount, onCartIconClick }) => {
  // const [cartItemsData, setCartItemsData] = useState([]);
  // const userData = JSON.parse(localStorage.getItem("userData"));
  // const userId = userData.id;

  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchCartItems = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:8080/customer/getFromCart/${userId}`
  //       );
  //       if (response.ok) {
  //         const data = await response.json();
  //         setCartItemsData(data);
  //       } else {
  //         console.error("Failed to fetch cart items.");
  //       }
  //     } catch (error) {
  //       console.error("An error occurred:", error);
  //     }
  //   };

  //   fetchCartItems();
  // }, []);

  // console.log("lengthhhhh----->", cartItemsData.length)

  return (
    <div>
      <nav className="navbar navbar-fixed ">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img
              src="https://see.fontimg.com/api/renderfont4/BXew/eyJyIjoiZnMiLCJoIjoxMTcsInciOjE1MDAsImZzIjo3OCwiZmdjIjoiIzBFOUYyQiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/cHJha3JpdGk/samarkan-oblique.png"
              width={120}
            />

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
