import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
const root = createRoot(container);

store.subscribe(() => {
  console.log("store updated", store.getState());
});

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
