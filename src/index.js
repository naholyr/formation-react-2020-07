import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import initStore from "./store";
import { Provider } from "react-redux";
import { login, startLoading } from "./actions";

const store = initStore();

// Auto-login
const token = localStorage.getItem("token");
if (token) {
  store.dispatch(startLoading());
  fetch(
    `${process.env.REACT_APP_ENDPOINT}/whoami?token=${encodeURIComponent(
      token
    )}`
  )
    .then((response) => response.json())
    .then((result) => {
      store.dispatch(login(result.username, token));
    });
  // TODO : error = clear localStorage
}

// Render
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
