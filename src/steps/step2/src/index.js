import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const app = {
  router() {
    return window.location.hash.startsWith("#app1");
  },
  wake(id) {
    ReactDOM.render(<App />, document.getElementById(id));
  },
  sleep(id) {
    const el = document.getElementById(id);
    ReactDOM.unmountComponentAtNode(el);
  }
};

window.addEventListener("hashchange", () => {
  console.log(window.location.hash);
  app.router() ? app.wake("root1") : app.sleep("root1");
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
