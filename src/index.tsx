import { render } from "react-dom";

/**
 * Imports Router
 */
import { BrowserRouter as Router } from "react-router-dom";

/**
 * Normalize CSS
 */
import CssBaseline from "@material-ui/core/CssBaseline";

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
    <CssBaseline />
    <App />
  </Router>,
  document.getElementById("root")
);
