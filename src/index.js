import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import THEME from "./theme";
import { ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={THEME}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);
