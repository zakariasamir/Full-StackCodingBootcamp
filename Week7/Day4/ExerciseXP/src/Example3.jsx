import React from "react";
import data from "./data2.json";

function Example3() {
  return (
    <div>
      {data.Experiences.map((item) => (
        <div key={item.companyName}>
          <div>
            <img src={item.logo} alt="" />
            <br />
            <a href={item.url}>{item.companyName}</a>
            {item.roles.map((role) => (
              <div key={role.title}>
                <h5 key={role.title}>{role.title}</h5>
                <p>
                  {role.startDate}
                  {role.location}
                </p>
                <p>{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Example3;
