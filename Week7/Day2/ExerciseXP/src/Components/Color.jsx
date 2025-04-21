import React from "react";
import { useEffect } from "react";

function Color() {
  const [favoriteColor, setFavoriteColor] = React.useState("red");
  const changeColor = () => {
    setFavoriteColor((prevState) => (prevState != "blue" ? "blue" : "red"));
  };
  useEffect(() => {
    alert("UseEffect is reached");
  }, []);
  return (
    <div>
      <h1>My Favorite Color is {favoriteColor}</h1>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default Color;
