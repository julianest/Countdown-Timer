import React from 'react';
import ReactDOM from 'react-dom/client';
import CountdownTimer from './container/CountdownTimer';
import './styles/index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CountdownTimer/>
  </React.StrictMode>
);


