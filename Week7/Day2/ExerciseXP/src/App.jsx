import Car from "./Components/Car";
import "./App.css";
import Events from "./Components/Events";
import Phone from "./Components/Phone";
import Color from "./Components/Color";

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <>
      <div className="App">
        <Car carInfo={carinfo} />
        <Events />
        <Phone />
        <Color />
      </div>
    </>
  );
}

export default App;
