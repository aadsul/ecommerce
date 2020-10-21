import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Login from "./screens/Login";
import Register from "./screens/Register";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import PlaceOrder from "./screens/PlaceOrder";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={PlaceOrder} />
      </Switch>
    </div>
  );
}

export default App;
