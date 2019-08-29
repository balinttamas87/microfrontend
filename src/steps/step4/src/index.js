import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import lowloader from "lowloader";
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

const app2 = {
  router() {
    return window.location.hash.startsWith("#app2");
  },
  wake(id) {
    ReactDOM.render(<App2 />, document.getElementById(id));
  },
  sleep(id) {
    const el = document.getElementById(id);
    ReactDOM.unmountComponentAtNode(el);
  }
};

const app3 = {
  router() {
    return window.location.hash.startsWith("#app3");
  },
  wake(id) {
    const url = "https://pastebin.com/raw/snMiZWZy";
    lowloader.import(url).then(app => {
      this.app = app;
      app.wake(id);
    });
  },
  sleep() {
    if (this.app) {
      this.app.sleep();
    }
  }
};

const router = () => {
  console.log(window.location.hash);
  app.router() ? app.wake("root1") : app.sleep("root1");
  app2.router() ? app2.wake("root2") : app2.sleep("root2");
  app3.router() ? app3.wake("root3") : app3.sleep("root3");
};

window.addEventListener("hashchange", router);

router();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
