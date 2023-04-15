import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assest/css/bootstrap.min.css'
import './assest/css/main.min.css'
import './assest/css/style.css'
import './assest/css/style2.css'
import './assest/css/color.css'
import './assest/css/responsive.css'

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
