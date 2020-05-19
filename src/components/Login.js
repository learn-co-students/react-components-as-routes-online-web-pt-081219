import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="username" placeholder="Password" />
            </div>
            <div>
              <input type="submit" value="Login" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
