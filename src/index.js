import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Head from './Head';
import Footer from './Footer'

ReactDOM.render(<Head/>,document.getElementById('admin'));
ReactDOM.render(<App/>,document.getElementById('root'));
ReactDOM.render(<Footer/>,document.getElementById('root1'));


