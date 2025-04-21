import React from "react";
import Garage from "./Garage";

function Car({ carInfo }) {
  const [color, setColor] = React.useState("red");
  return (
    <div>
      <h2>
        This car is {color} {carInfo.model}
      </h2>
      <Garage size="small" />
    </div>
  );
}

export default Car;
