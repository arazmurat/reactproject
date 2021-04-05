import React from "react";
import Button from "./Button";

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase () {
    this.setState({ count: this.state.count + 1 });
  };
  decrease ()  {
    if (!this.state.count == 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }
  render() {
    return (
      <div className="card">
        <h1>{this.state.count}</h1>
        <Button increase={this.increase} decrease={this.decrease} />
        {/*<button onClick={this.decrease}>Decrease(-)</button>
        <button onClick={this.increase}>Increase(+)</button>*/}
      </div>
    );
  }
}
export default Counter;
