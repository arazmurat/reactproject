import React from "react";
import { Button } from "./Button";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: [120, 160, 126],
    };
  }

  componentDidMount() {
    console.log(
      "i invoked immediately after component is mounted, just one time at the beginning; after render method"
    ); //this.chooseColor()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "i invoked immediately after updating occurs, upon every change."
    );
    this.applyColor();
  }

  isLight(colorArr) {
    return colorArr.reduce((a, b) => a + b) < 127 * 3; // it should return true or false according to the given array;
  }

  formatColor(colorArr) {
    return "rgb(" + colorArr.join(", ") + ")"; // it should return rgb format of color acording to the given array;
  }

  chooseColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    console.log(r, g, b);
    this.setState({ color: [r, g, b] });
    //this.applyColor()
    //it creates an array, consist of randomized numbers (between 0 and 256). And sets the state of color.
  };
  applyColor = () => {
    const color = this.formatColor(this.state.color);
    document.body.style.backgroundColor = color;
  };

  render() {
    //this.applyColor();//First method
    return (
      <div>
        <h1 className={this.isLight(this.state.color) ? "white" : "black"}>
          Your color is {this.formatColor(this.state.color)}!
        </h1>
        <Button chooseColor={this.chooseColor} light={this.isLight}>
          <p>Hi, im color picker</p>
        </Button>
        {/*<button onClick={this.applyColor}>Change Color</button> //second method*/}
      </div>
    );
  }
}

export default ColorPicker;
