//using context

import React, { Component } from "react";
import "../css/main.css";

class InputEmoji extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          onChange={this.getInput}
          placeholder="Enter title of a emoji"
        />
      </div>
    );
  }
}

export default InputEmoji;
