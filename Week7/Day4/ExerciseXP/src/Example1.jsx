import React from "react";
import data from "./data2.json";

function Example1() {
  return (
    <div>
      {data.SocialMedias.map((item) => (
        <div key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Example1;
