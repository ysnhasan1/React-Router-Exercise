import React from "react";
import { carStyle, imgStyle } from "../inlineStyles"
import { FaCarSide } from "react-icons/fa"; // react icon

function Car(props) {
  // console.log(props);

  return (
    <div style={carStyle}>

      <FaCarSide style={{ fontSize: "50px", color: "red" }} />

      <h2>{props.name}</h2>
      <h2>{props.year}</h2>

      <div>
        <img src={props.image} alt={props.name + " img"} style={imgStyle} />
      </div>

    </div>
  );
}

export default Car;