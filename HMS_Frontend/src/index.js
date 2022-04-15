import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import StickyHeadTable from './MyComponents/Test';
import reportWebVitals from './reportWebVitals';
// import { Home_page } from './MyComponents/Home_page';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Home_page /> */}
    {/* <StickyHeadTable /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();