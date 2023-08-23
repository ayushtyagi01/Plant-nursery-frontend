import React from 'react';
import { Route, Routes } from "react-router-dom";
import UserHome from '../UserHome';

const UserRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/userHome" element={<UserHome />}/>
        

      </Routes>
    </div>
  )
}

export default UserRoutes
