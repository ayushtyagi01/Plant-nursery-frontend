import React, { useEffect, useState } from "react";
import "../../UserPlants.scss";
import UserNavbar from "./UserNavbar";
import { useNavigate } from "react-router-dom";

const UserPlants = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [plantData, setPlantData] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    fetch("http://localhost:8080/getAllProducts")
      .then((response) => response.json())
      .then((data) => setPlantData(data))
      .catch((error) => console.error("Error fetching plant data:", error));
  }, []);

//   console.log("---> plant data", plantData);

  const handleClick = (plant) => {
    setSelectedPlant(plant);
    navigate(`/userPlantDetails/${plant?.id}`);
  };

  return (
    <div>
      <div>
        <img
          src="https://www.ugaoo.com/cdn/shop/collections/Indoor-Plants-Category-Banner_1.png?v=1689318958&width=1280"
          width={windowWidth}
        />
      </div>
      <div className="plant-container">
        <div className="plant-items">
          <div>
            <h2 className="plant-heading">Plants</h2>
            <p className="plant-text">
              Welcome to our Plants Nursery, where you can find a stunning array
              of indoor and outdoor plants. Explore flowering marvels, lush
              foliage, and unique specimens that can beautify your space.
              Whether you're an experienced gardener or a beginner, our
              catalogue has the perfect plants to add nature's touch to your
              life.
              <br />
              <span style={{fontWeight: 600 ,fontSize: "23px", color: "#149253" }}>
              
                Happy browsing and happy planting!
            
              </span>
            </p>
          </div>
        </div>

        <div className="plant-row">
          {plantData.map((plant, index) => (
            <div
              className="card  col-6"
              key={plant?.id}
              onClick={() => {
                handleClick(plant);
              }}
            >
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src={plant?.imageUrl}
                  className="img-fluid"
                  alt={plant?.productName}
                />
              </div>
              <div className="card-plant-body">
                <h2 className="plant-title">{plant?.productName}</h2>
                <p className="plant-rating">4.9⭐</p>
                <h5 className="plant-price">{`₹${plant?.price}`}</h5>
                {/* <p className="card-text">{plant.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPlants;
