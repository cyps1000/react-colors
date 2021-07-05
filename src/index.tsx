import { render } from "react-dom";

/**
 * Imports Router
 */
import { BrowserRouter as Router } from "react-router-dom";

/**
 * Imports the App component
 */
import { App } from "./App";

/**
 * Imports styling
 */
import "./index.css";

/**
 * Renders the App
 */
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
