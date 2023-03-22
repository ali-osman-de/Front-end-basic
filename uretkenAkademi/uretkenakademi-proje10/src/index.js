import React from "react";
import App from "./App";
import store from "./redux/reducers/configureStore";
import { Provider } from "react-redux";
import * as ReactDOM from "react-dom";

// Initial render.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
