import React from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import BuggyCounter from "./BuggyCounter";
import Color from "./Components/Color";

function App() {
  return (
    <div>
      <h1>Demonstrating Error Boundaries</h1>
      <p>Click on the number to increase the counter. It will crash at 5.</p>
      <ErrorBoundary>
        <BuggyCounter />
        <br />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <br />
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <BuggyCounter />
      <hr />
      <Color />
    </div>
  );
}

export default App;
