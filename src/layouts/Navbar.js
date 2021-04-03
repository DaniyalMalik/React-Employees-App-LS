import React, { Component } from 'react';

export default class Navbar extends Component {
  state = {
    isAuthenticated: false,
  };

  render() {
    const { isAuthenticated } = this.state;
    const { isAuth } = this.props;

    return (
      <div>
        <nav class='navbar navbar-expand-sm bg-dark navbar-dark'>
          {isAuthenticated ? (
            <ul class='navbar-nav'>
              <li class='nav-item active'>
                <a class='nav-link' href='#'>
                  Dashboard
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Logout
                </a>
              </li>
            </ul>
          ) : (
            <ul class='navbar-nav'>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Login
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Register
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    );
  }
}
