import React from "react";
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";
import "./index.scss";
import { App } from "./App";

const container = document.getElementById('root');

createRoot(container)
  .render(<Root />);

