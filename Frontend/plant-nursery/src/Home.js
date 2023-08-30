import React from "react";
import CarouselComp from "./CarouselComp";
import CardsHome from "./CardsHome";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <div style={{ paddingTop: "55px" }}>
        <CarouselComp />
        <CardsHome />
      </div>
    </div>
  );
};

export default Home;
