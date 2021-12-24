import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react/cjs/react.development';
import App from './App';
import './index.css';

// BEFORE
//ReactDOM.render(<h1>HELP REVIEWS</h1>, document.getElementById('root'));

// AFTER 
ReactDOM.render(<StrictMode><App/></StrictMode>, document.getElementById('root'));
