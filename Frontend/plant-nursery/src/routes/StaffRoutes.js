import React from 'react';
import { Route, Routes } from "react-router-dom";
import StaffHome from '../pages/StaffPages/StaffHome';


const StaffRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/staffHome" element={<StaffHome />}/>

      </Routes>
    </div>
  )
}

export default StaffRoutes
