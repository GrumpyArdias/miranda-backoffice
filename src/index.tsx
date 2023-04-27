import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // import Provider from react-redux
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/Store";
import LoginContextProvider from "./store/LoginContext"; // import your existing store

ReactDOM.render(
  <LoginContextProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </LoginContextProvider>,
  document.getElementById("root")
);

// expose store when run in Cypress
// if (window.Cypress) {
//   window.store = store;
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
