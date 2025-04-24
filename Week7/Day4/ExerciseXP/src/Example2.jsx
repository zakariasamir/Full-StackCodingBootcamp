import React from "react";
import data from "./data2.json";

function Example2() {
  return (
    <div>
      {data.Skills.map((item) => (
        <div key={item.Area}>
          <div>
            <h1>{item.Area}</h1>
            <ul>
              {item.SkillSet.map((skill) => (
                <li key={skill.Name}>{skill.Name}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Example2;
