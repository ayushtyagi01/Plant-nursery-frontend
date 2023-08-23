import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Home';

const UserRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        

      </Routes>
    </div>
  )
}

export default UserRoutes
