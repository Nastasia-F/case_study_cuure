import React from 'react';
import ReactDOM from 'react-dom';

import App from "./app";
import './app.css';
import Page from "./page";
import './page.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Page />
  </React.StrictMode>,
  rootElement
);
