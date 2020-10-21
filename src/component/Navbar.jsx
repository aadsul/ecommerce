import React, { Component } from "react";
import cart from "../assets/shopping-cart.png";
import man from "../assets/man.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar fixed-top navbar-light bg-light justify-content-between">
          <a class="navbar-brand">MyStore</a>
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <img src={cart} alt="" width="20" className="ml-4" />
            <div className="ml-4">
              <img src={man} alt="avtar" width="20" />
            </div>
          </form>
        </nav>
      </div>
    );
  }
}

export default Navbar;
