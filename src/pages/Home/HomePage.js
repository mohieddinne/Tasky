import React, { Fragment } from "react";
import "./home.css"
import logo from "./1.png"

const HomePage = () => (
  <Fragment>
    <div className="home">

      <h1 className="welc">Welecome Stranger</h1>
      <h2 className="any">Any task for today? </h2>
      <img src={logo} alt="back" className="img" />
    </div>
  </Fragment>
);

export default HomePage;
