import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { I18nextProvider } from 'react-i18next'; // Імпорт i18nextProvider
import i18n from "../i18next";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={ i18n }>
      <Provider store={ store }>
        <App />
      </Provider>
    </I18nextProvider>

  </React.StrictMode>
);
