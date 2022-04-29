import React from 'react-dom';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { AppServiceWorker } from 'react-service-worker';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
AppServiceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
