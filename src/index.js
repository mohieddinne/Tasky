import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home/HomePage";
import ReactDOM from "react-dom"
import ExampleApp from "react"
import App from "./App"

import "./index.css";



render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
