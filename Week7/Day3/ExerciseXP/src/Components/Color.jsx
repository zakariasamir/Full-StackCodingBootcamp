import React from "react";

class Child extends React.Component {
  componentWillUnmount() {
    alert("Child component is being removed");
  }
  render() {
    return <h2>Hello World</h2>;
  }
}

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("In shouldComponentUpdate");
    return true;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update");
    console.log("Current color:", this.state.favoriteColor);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    console.log("Previous color:", prevState.favoriteColor);
    return null; // or return some value to pass to componentDidUpdate
  }
  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };
  deleteChild = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change color</button>
        <hr />
        {this.state.show && <Child />}
        <button onClick={this.deleteChild}>Delete</button>
      </div>
    );
  }
}

export default Color;
