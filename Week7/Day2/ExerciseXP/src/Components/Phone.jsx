import React from "react";

function Phone() {
  const [phone, setPhone] = React.useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });

  const changeColor = () => {
    setPhone((prevState) => ({
      ...prevState,
      color: prevState.color != "blue" ? "blue" : "black",
    }));
  };

  return (
    <div>
      <h1>My Phone is {phone.brand}</h1>
      <p>
        it is a {phone.color} {phone.model} from {phone.year}
      </p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Phone;
