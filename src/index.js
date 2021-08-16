import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRouter from './router/AppRouter';
import reportWebVitals from './reportWebVitals';
import './styles.scss';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

reportWebVitals();
