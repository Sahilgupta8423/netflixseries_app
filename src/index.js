import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <>
  <h1 className='heading_style'>List of Top 5 Netflix Series</h1>
    <App/>
  </>,
  document.getElementById("root")
);
// React is all about component.
// assume css property as a object property.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
