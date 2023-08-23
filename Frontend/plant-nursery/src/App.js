import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import UserRoutes from "./routes/UserRoutes";
import StaffRoutes from "./routes/StaffRoutes";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [userRole, setUserRole] = useState("user");

  const handleLogin = (role) => {
    setUserRole(role);
  };

  console.log("role setttt---->", userRole);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login setRole={handleLogin} />} />
          <Route path="/register" element={<Register />} />

          {userRole === "user" && <Route path="/" element={<UserRoutes />} />}
          {userRole === "staff" && <Route path="/" element={<StaffRoutes />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
