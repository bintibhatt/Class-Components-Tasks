import React, { Component } from "react";
import "../css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

class Header extends Component {
  render() {
    return (
      <>
        <div className="header_div">
          <p id="heading_name">XYZ</p>
          <section>
            <a href="http://localhost:3000/" id="bell_icon">
              <FontAwesomeIcon icon={faBell} size="lg" />
            </a>
            <a href="http://localhost:3000/" id="user_icon">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </a>
          </section>
        </div>
        <hr></hr>
      </>
    );
  }
}

export default Header;
