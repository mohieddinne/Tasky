import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home/HomePage";
import Tasky from "./pages/tasky/tasky";
import ReactDOM from "react-dom"
import ExampleApp from "react"
import Done from "./pages/done/done";

import "./index.css";

class App extends Component {

  state = {
    todos: []
  };
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <Route exact={true} path="/" component={Home} />
          <Route exaxt path="/tasky" component={Tasky} />
          <Route exact path="/done" component={Done} />
        </div>
      </div>

    );


  }
}
export default App;