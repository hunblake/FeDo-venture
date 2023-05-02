import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.scss";
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
