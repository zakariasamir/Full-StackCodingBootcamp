import React from "react";

function FormComponent({ data, handleChange, handleSubmit }) {
  return (
    <div>
      <h1>Sample Form</h1>
      <form onSubmit={handleSubmit} className="inputForm">
        <input
          className="text"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={data.firstName}
          onChange={handleChange}
        />
        <br />

        <input
          className="text"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={data.lastName}
          onChange={handleChange}
        />
        <br />

        <input
          className="text"
          type="number"
          name="age"
          placeholder="Age"
          value={data.age}
          onChange={handleChange}
        />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={data.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={data.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <br />

        <label>
          Select Your Destination:
          <select
            name="destination"
            value={data.destination}
            onChange={handleChange}
          >
            <option value="">-- Choose a destination --</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
            <option value="Norway">Norway</option>
          </select>
        </label>
        <br />
        <label>Dietary restrictions:</label>
        <br />
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={data.lactoseFree}
            onChange={handleChange}
          />
          Lactose Free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="NutsFree"
            checked={data.NutsFree}
            onChange={handleChange}
          />
          Nuts Free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="Vegan"
            checked={data.Vegan}
            onChange={handleChange}
          />
          Vegan
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
      <hr />

      <div className="entered-info">
        <h2>Entered Information:</h2>
        <p>
          Name: {data.firstName} {data.lastName}
        </p>
        <p>Age: {data.age}</p>
        <p>Gender: {data.gender}</p>
        <p>Destination: {data.destination}</p>
        <p>Lactose Free: {data.lactoseFree ? "Yes" : "No"}</p>
        <p>Nuts Free: {data.NutsFree ? "Yes" : "No"}</p>
        <p>Vegan: {data.Vegan ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default FormComponent;
