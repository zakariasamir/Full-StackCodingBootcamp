import React, { Component } from "react";
import logo from "./logo.svg";
import "./Exercise.css";

export default class Exercise extends Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <div>
        <h1 style={style_header}>Hello</h1>
        <p className="para">this is paragraph</p>
        <a href="">this is a link</a>
        <form action="">
          <label htmlFor="name">Enter you name:</label>
          <input type="text" />
          <button>Submit</button>
        </form>
        <img src={logo} alt="" />
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}
