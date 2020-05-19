import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import SignUp from './components/SignUp'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Messages from './components/Messages'

ReactDOM.render(
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/signup" component={SignUp}></Route>
      <Route exact path="/messages" component={Messages}></Route>
    </div>
  </Router>,
  document.getElementById("root")
);
