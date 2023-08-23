import React from 'react';
import { Route, Routes } from "react-router-dom";

import CarouselComp from '../CarouselComp';

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<CarouselComp />}/>

      </Routes>
    </div>
  )
}

export default AdminRoutes
