import { useState } from "react";
import "./App.css";
import FormComponent from "./Components/FormComponent";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    lactoseFree: false,
    NutsFree: false,
    Vegan: false,
  });
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const queryParams = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      gender: formData.gender,
      destination: formData.destination,
      lactoseFree: formData.lactoseFree ? "on" : "off",
      NutsFree: formData.NutsFree ? "on" : "off",
      Vegan: formData.Vegan ? "on" : "off",
    }).toString();

    window.location.href = `http://localhost:3000/?${queryParams}`;
  };
  return (
    <>
      <FormComponent
        data={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
