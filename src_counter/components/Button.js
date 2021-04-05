import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div className="buttons">
        <button onClick={this.props.decrease}>Decrease(-)</button>
        <button onClick={this.props.increase}>Increase(+)</button>
      </div>
    );
  }
}
export default Button;
