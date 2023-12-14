import React, { Component } from "react";
import "../css/main.css";

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Name" value={this.props.name} />
          <br></br>
          <input type="text" placeholder="Email" value={this.props.email} />
          <br></br>
          <input type="text" placeholder="Phone" value={this.props.phone} />
          <br></br>
          <textarea placeholder="Message" value={this.props.message} />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
