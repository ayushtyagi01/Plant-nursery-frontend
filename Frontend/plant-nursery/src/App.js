import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import AppRouter from "./AppRouter";

function App() {
  const [userRole, setUserRole] = useState("user");

  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem("userData"));
  //   if (userData) {
  //     setUserRole(userData.role);
  //   }
  // }, []);

  console.log("role setttt---->", userRole);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setRole={setUserRole} />} />
          <Route path="/register" element={<Register setRole={setUserRole}/>} />
        </Routes>
        {userRole !== null && <AppRouter userRole={userRole} />}
      </BrowserRouter>
    </div>
  );
}

export default App;
