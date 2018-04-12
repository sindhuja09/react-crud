
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import ReactBootstrap from 'react-bootstrap';
import App from './component/App';
import css from './css/style.css';
const root=document.getElementById('root');
const quotes = [
   {
    _id: '1',
    quoteText:''
   },
   
  ];

ReactDOM.render(    
    <App quotes={quotes}/>,
    root
);