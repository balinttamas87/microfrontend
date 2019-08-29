import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const wake = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

const sleep = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("root"));
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

window.wake = wake;
window.sleep = sleep;
