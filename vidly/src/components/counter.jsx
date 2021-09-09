import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };
  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span className="badge bg-primary m-3">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm m-3">Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
