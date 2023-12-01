import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next"; // Імпорт i18nextProvider
import { Provider } from "react-redux";
import i18n from "../i18next";
import { App } from "./App";
import "./index.css";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
