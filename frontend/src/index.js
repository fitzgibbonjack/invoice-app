import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./base/reset.scss";
import "./base/helpers.scss";
import "./base/typography.scss";
import "./themes/dark.scss";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
