import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
    <ProSidebarProvider>
        <App />
    </ProSidebarProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);