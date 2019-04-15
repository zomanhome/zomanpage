import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

const myContainer =
  document.querySelector(".container") ||
  document.querySelector(".container-fluid");

ReactDOM.render(<App />, myContainer);
