import React from "react";
import { Routes, Route } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import StaffRoutes from "./routes/StaffRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

const AppRouter = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userRole = userData ? userData.role : null;

  if (userRole === "ROLE_USER") {
    return (
      <Routes>
        <Route path="*" element={<UserRoutes />} />
      </Routes>
    );
  } else if (userRole === "ROLE_STAFF") {
    return (
      <Routes>
        <Route path="*" element={<StaffRoutes />} />
      </Routes>
    );
  } else if (userRole === "ROLE_ADMIN") {
    return (
      <Routes>
        <Route path="*
        " element={<AdminRoutes />} />
      </Routes>
    );
  } else {
    return <div>Error: Invalid user role or not logged in.</div>;
    
  }
};

export default AppRouter;
