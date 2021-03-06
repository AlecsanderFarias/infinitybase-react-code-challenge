import React from "react";

import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

import Routes from "./routes";
import history from "./services/history";
import bucket from "./store/index";
import GlobalStyle from "./styles/global";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <Provider store={bucket.store}>
      <PersistGate persistor={bucket.persistor}>
        <Router history={history}>
          <GlobalStyle />
          <Routes />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
