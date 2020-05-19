import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    const link = {
      width: "400px",
      padding: "12px",
      margin: "0 6px 6px",
      background: "blue",
      textDecoration: "none",
      color: "white",
    };
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{ background: "darkblue" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{ background: "darkblue" }}
        >
          Login
        </NavLink>
        <div>
          <NavLink
            to="/about"
            exact
            style={link}
            activeStyle={{ background: "darkblue" }}
          >
            About
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;
