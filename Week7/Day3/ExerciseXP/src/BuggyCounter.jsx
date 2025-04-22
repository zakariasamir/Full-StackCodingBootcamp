import React, { Component } from "react";
class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    if (this.state.count === 5) {
      throw new Error("I crashed!");
    }
    return <h1 onClick={this.handleClick}>{this.state.count}</h1>;
  }
}
export default BuggyCounter;
