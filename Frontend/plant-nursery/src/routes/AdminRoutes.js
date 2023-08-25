import React from 'react';
import { Route, Routes } from "react-router-dom";
import AdminHome from '../pages/AdminPages/AdminHome';

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/adminHome" element={<AdminHome />}/>

      </Routes>
    </div>
  )
}

export default AdminRoutes
