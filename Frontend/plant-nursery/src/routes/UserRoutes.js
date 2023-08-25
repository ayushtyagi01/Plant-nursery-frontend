import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserHome from "../pages/UserPages/UserHome";
import UserPlants from "../pages/UserPages/UserPlants";
import UserProfilePage from "../pages/UserPages/UserProfilePage";
import UserPlantDetails from "../pages/UserPages/UserPlantDetails";
import UserNavbar from "../pages/UserPages/UserNavbar";


const UserRoutes = () => {
  const initialCartItemCount = parseInt(localStorage.getItem("cartItemCount")) || 0;
  const [cartItemCount, setCartItemCount] = useState(initialCartItemCount);
  const [cartSidebarVisible, setCartSidebarVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const userId = userData.id;

  useEffect(() => {
    localStorage.setItem("cartItemCount", cartItemCount.toString());
  }, [cartItemCount]);

  // const handleCartIconClick = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:8080/customer/getFromCart/${userId}`);
  //     if (response.ok) {
  //       const cartItemsData = await response.json();
  //       setCartItems(cartItemsData);
  //       setCartSidebarVisible(true);
  //     } else {
  //       console.error("Failed to fetch cart items.");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //   }
  // };

  // console.log("cart items---->", cartItems);


  return (
    <div>
      <UserNavbar cartItemCount={cartItemCount} />
      <div className="content-container" style={{paddingTop:'55px'}}>
      <Routes>
        <Route path="/userHome" element={<UserHome />} />
        <Route path="/userPlants" element={<UserPlants />} />
        <Route path="/userProfile" element={<UserProfilePage />} />
        <Route path="/userPlantDetails/:id" element={<UserPlantDetails setCartItemCount={setCartItemCount}/>} />

      </Routes>
      </div>
    </div>
  );
};

export default UserRoutes;
