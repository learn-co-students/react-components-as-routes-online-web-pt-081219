import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="username" placeholder="Password" />
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/about" component={About}></Route>
    </div>
  </Router>,
  document.getElementById("root")
);
