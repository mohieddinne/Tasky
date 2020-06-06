import React, { Fragment } from "react";
import "./done.css"
const Done = () => (
  <Fragment>
    <h1 className="yey">Yey !! we're rockin' </h1>
    <h2 className="we">we did one hell of a job right three !! Bravo six going dark </h2>

  </Fragment>
);
const Checkbox = ({ onClick, defaultChecked, }) => (
  <input type="checkbox" onClick={onClick} defaultChecked={defaultChecked} />
);

export default Done;
