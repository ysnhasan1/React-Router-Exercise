import React from "react";
import cars from "../cars"; // array
import { flexContainer, flexItem } from "../inlineStyles"; // css
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "'Black Ops One', cursive", fontSize: "40px" }}>CARS</h1>

      <div style={flexContainer}>

        {cars.map((car, index) => {
          return (
            <div key={index} style={flexItem} onClick={() => {
              navigate(`details/${car.name}`);
            }}>
              <p style={{ fontFamily: "'Black Ops One', cursive", color: "red", fontSize: "30px" }}>{car.id}</p>
              <p>{car.name}</p>
              <p>{car.year}</p>
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Home;