import React from "react";
import ReactDOM from "react-dom/client";
import AppContext from "./context";
import "./main.css";
import App from "./App";
import { disableReactDevTools } from "@fvilers/disable-react-devtools"; //
if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
} //
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContext>
    <App />
  </AppContext>
);
