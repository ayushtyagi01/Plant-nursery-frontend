import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import UserRoutes from "./routes/UserRoutes";
import StaffRoutes from "./routes/StaffRoutes";
import Login from "./Login";
import Register from "./Register";
import AppRouter from "./AppRouter";

function App() {
  const [userRole, setUserRole] = useState("user");

  const handleLogin = (role) => {
    setUserRole(role);
  };

  console.log("role setttt---->", userRole);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
