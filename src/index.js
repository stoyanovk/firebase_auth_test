import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import UserProvider from "./providers/UserProvider";
ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
