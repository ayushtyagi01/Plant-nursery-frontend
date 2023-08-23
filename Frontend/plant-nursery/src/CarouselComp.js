import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComp = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <img
        style={{height:'90vh'}}
          className="d-block w-100"
          src="https://www.ugaoo.com/cdn/shop/files/3.Banners_Monsoon_New-Arrival.jpg?v=1689336575"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First Slide</h3>
          <p>This is the caption for the first slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:'90vh'}}
          className="d-block w-100"
          src="https://www.ugaoo.com/cdn/shop/files/Banners_Plant-Bundles_Desktop.png?v=1690440817"
          alt="Second slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;