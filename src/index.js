import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import App from './App';
import 'react-calendar/dist/Calendar.css';


ReactDOM.render(
    <BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById('root'));
