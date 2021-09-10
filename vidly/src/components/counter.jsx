import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };
  // The below could be used to re-bind an event handler function to "this", BUT, it is easier to use an arrow function, which by definition does not re-bind "this" and therefore inherits its connection to the parent object. Mosh warns that this method of using the arrow function to re-bind event handlers to "this" could break in the future, but it still works as of 9/2021
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <h1>Vidly</h1>
          <img src={this.state.imageUrl} alt="" />
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            id="incrementBtn"
            onClick={() => this.handleIncrement("incrementBtn")}
            //Notice how we have to wrap the eventHandler function inside another arrow function to be able to pass an argument, in this case "product". This is necessary because when we assign the event its handler method, it needs to either be defined inline, or serve as a reference to the function, NOT a function call. Why? Because this is a JSX expression which will compile to HTML and the HTML will hold a reference to the function which won't be called until the event is triggered by the user. If we called the function at runtime, it would be called before the page finished loading!
            className="btn btn-secondary btn-sm m-3"
          >
            Increment
          </button>
          <div>
            {this.state.tags.length === 0 && <p>Please create a new tag!</p>}
            {this.renderTags()}
          </div>
        </main>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-3 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
