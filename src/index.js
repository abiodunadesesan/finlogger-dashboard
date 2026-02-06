import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { AppProvider } from "./context/AppContext";
import { ExpenseModalProvider } from "./context/ExpenseModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <ExpenseModalProvider>
        <App />
      </ExpenseModalProvider>
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();

