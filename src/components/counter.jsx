import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button>Increment</button>
      </>
    );
  }
}
export default Counter;
