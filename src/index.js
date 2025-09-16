import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import appstore from './components/utils/appstore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={appstore}>
     <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);


