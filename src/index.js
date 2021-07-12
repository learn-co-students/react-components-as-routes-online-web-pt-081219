// @ts-check

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./About";
import Navbar from "./Navbar";
import Login from "./Login";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      {/* The first one is just an example of inline rendering, for SUPER simple cases */}
      <Route exact path="/" render={() => <h1>Home!</h1>} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById("root")
);
