import React from "react";
import { Routes, Route } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import StaffRoutes from "./routes/StaffRoutes";
import AdminRoutes from "./routes/AdminRoutes";

const AppRouter = ({ userRole }) => {
  // const userData = JSON.parse(localStorage.getItem("userData"));
  // const userRole = userData ? userData.role : null;

  if (userRole === "user") {
    return (
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
    );
  } else if (userRole === "staff") {
    return (
      <Routes>
        <Route path="/*" element={<StaffRoutes />} />
      </Routes>
    );
  } else if (userRole === "admin") {
    return (
      <Routes>
        <Route path="/*" element={<AdminRoutes />} />
      </Routes>
    );
  } else {
    return <div>Error: Invalid role or not logged in.</div>;
  }
};

export default AppRouter;
