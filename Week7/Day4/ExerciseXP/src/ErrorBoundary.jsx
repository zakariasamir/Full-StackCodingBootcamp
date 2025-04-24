import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        hasError: false,
      });
  }
  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
