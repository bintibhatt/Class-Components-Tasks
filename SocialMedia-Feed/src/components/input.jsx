import React, { Component } from "react";
import "../css/style.css";

class Input extends Component {
  render() {
    return (
      <>
        <div className="scroll_div">
          <input type="number" />
          <button onClick={this.props.onClick}>Scroll To Element</button>
        </div>
        <hr></hr>
      </>
    );
  }
}

export default Input;
